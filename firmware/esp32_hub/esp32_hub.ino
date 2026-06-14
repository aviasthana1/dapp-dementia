/**
 * CareConnect BLE hub — reference firmware
 *
 * - Scans BLE for manufacturer data: [roomId, direction, patientConfirmed]
 * - POSTs to rooms/room_N/events, PATCHes lastEntry/lastExit
 * - Set TEST_FIRESTORE_ON_BOOT true to verify Firebase without BLE
 *
 * Libraries: ArduinoJson, WiFiManager, ESP32 BLE (board package)
 */
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEScan.h>
#include <BLEAdvertisedDevice.h>
#include <WiFi.h>
#include <WiFiManager.h>
#include <HTTPClient.h>
#include <WiFiClientSecure.h>
#include <ArduinoJson.h>
#include <time.h>
#include <sys/time.h>
#include "secrets.h"

// Wall-clock for Firestore (seconds since 1970). Override in secrets.h for local timeLocal strings.
#ifndef TIMEZONE_OFFSET_SEC
#define TIMEZONE_OFFSET_SEC 0
#endif
#ifndef TIMEZONE_DST_SEC
#define TIMEZONE_DST_SEC 0
#endif

#ifndef FIREBASE_PROJECT_ID
#error "Copy secrets.h.example to secrets.h and set FIREBASE_PROJECT_ID"
#endif
#ifndef FIREBASE_API_KEY
#error "Copy secrets.h.example to secrets.h and set FIREBASE_API_KEY"
#endif

// --- Pins (your wiring) ---
#define RESET_PIN      D2
#define LED_GREEN      D7
#define LED_RED        D3
#define WIFI_CHECK_MS  10000

// Firebase project + API key: firmware/esp32_hub/secrets.h (not committed)

// Post one test event after WiFi connects — you MUST see [FIREBASE] on boot if WiFi works
#define TEST_FIRESTORE_ON_BOOT  true

// Print every manufacturer-data packet (helps debug room 2 switch)
#define DEBUG_BLE_RAW  true

BLEScan* pBLEScan;
unsigned long lastWifiCheck = 0;
unsigned long lastBleByRoom[8] = {0};  // debounce per room, not global
const unsigned long BLE_DEBOUNCE_MS = 2000;
bool timeSynced = false;
unsigned long lastTimeSyncAttempt = 0;
const unsigned long TIME_RESYNC_MS = 300000;  // re-try NTP/HTTP every 5 min if clock was wrong

// Firestore HTTP must run in loop(), NOT inside BLE callback (ESP32 will fail silently)
struct {
  volatile bool ready;
  uint8_t roomId;
  uint8_t direction;
  uint8_t patientConfirmed;
} pendingEvent;

WiFiClientSecure secureClient;

/** True when system clock is a plausible Unix epoch (May 2024+). */
bool hasWallClock() {
  time_t t = time(nullptr);
  return t > 1700000000L;
}

void logClockStatus(const char* label) {
  struct tm ti;
  if (getLocalTime(&ti)) {
    char buf[32];
    strftime(buf, sizeof(buf), "%Y-%m-%d %H:%M:%S", &ti);
    Serial.printf("[TIME] %s %s (epoch %lu)%s\n", label, buf, (unsigned long)time(nullptr),
                  timeSynced ? "" : " [not verified]");
  } else {
    Serial.printf("[TIME] %s epoch %lu (clock not set)\n", label, (unsigned long)time(nullptr));
  }
}

/** HTTPS fallback when UDP NTP is blocked (campus WiFi often allows this). */
bool syncTimeFromHttp() {
  if (WiFi.status() != WL_CONNECTED) return false;

  Serial.println("[TIME] Trying HTTPS time (worldtimeapi.org)...");
  HTTPClient http;
  secureClient.setInsecure();

  if (!http.begin(secureClient, "https://worldtimeapi.org/api/ip")) {
    Serial.println("[TIME] HTTPS time — http.begin failed");
    return false;
  }
  http.setTimeout(15000);
  int code = http.GET();
  String payload = http.getString();
  http.end();

  if (code != 200 || payload.length() < 20) {
    Serial.printf("[TIME] HTTPS time failed HTTP %d\n", code);
    return false;
  }

  StaticJsonDocument<384> doc;
  if (deserializeJson(doc, payload)) {
    Serial.println("[TIME] HTTPS time — JSON parse failed");
    return false;
  }

  long unixtime = doc["unixtime"] | 0L;
  if (unixtime < 1700000000L) {
    Serial.println("[TIME] HTTPS time — invalid unixtime in response");
    return false;
  }

  struct timeval tv = { .tv_sec = unixtime, .tv_usec = 0 };
  settimeofday(&tv, nullptr);
  timeSynced = true;
  logClockStatus("HTTPS synced");
  return true;
}

/** Sync wall-clock over NTP, then HTTPS if UDP is blocked. */
void syncNtpTime() {
  configTime(TIMEZONE_OFFSET_SEC, TIMEZONE_DST_SEC,
             "pool.ntp.org", "time.google.com", "time.nist.gov");

  struct tm ti;
  for (int i = 0; i < 40; i++) {
    if (getLocalTime(&ti, 1000)) {
      if (hasWallClock()) {
        timeSynced = true;
        logClockStatus("NTP synced");
        return;
      }
    }
    delay(250);
  }
  Serial.println("[TIME] NTP failed (UDP 123 may be blocked) — trying HTTPS...");
  syncTimeFromHttp();
}

/** Ensure real timestamps before writing to Firestore. */
bool ensureWallClock() {
  if (hasWallClock()) {
    timeSynced = true;
    return true;
  }
  syncNtpTime();
  if (hasWallClock()) return true;
  return syncTimeFromHttp();
}

/** Unix seconds for Firestore — never use uptime (shows as 1970 / 00:00:00). */
unsigned long nowEpochSec() {
  time_t t = time(nullptr);
  if (t > 1700000000L) return (unsigned long)t;
  return 0;
}

/** Human-readable timestamp for Serial Monitor. */
void logTimestamp(const char* label) {
  unsigned long sec = nowEpochSec();
  struct tm ti;
  if (getLocalTime(&ti)) {
    char buf[32];
    strftime(buf, sizeof(buf), "%Y-%m-%d %H:%M:%S", &ti);
    Serial.printf("[TIME] %s %s (epoch %lu)%s\n", label, buf, sec,
                  timeSynced ? "" : " [clock not verified]");
  } else {
    Serial.printf("[TIME] %s epoch %lu (clock not set)\n", label, sec);
  }
}

void setLED(bool connected) {
  digitalWrite(LED_GREEN, connected ? HIGH : LOW);
  digitalWrite(LED_RED, connected ? LOW : HIGH);
}

const char* getRoomName(uint8_t roomId) {
  switch (roomId) {
    case 1: return "Bathroom";
    case 2: return "Kitchen";
    case 3: return "Bedroom";
    case 4: return "Room 4";
    case 5: return "Room 5";
    case 6: return "Room 6";
    case 7: return "Room 7";
    default: return "Unknown";
  }
}

/** Build Firestore REST "fields" object (ArduinoJson-safe nesting). */
void writeFirestoreFields(JsonDocument& doc, const char* type, uint8_t roomId,
                          const char* roomName, unsigned long timestampSec,
                          const char* timeLocal, bool patientConfirmed) {
  JsonObject fields = doc.createNestedObject("fields");

  JsonObject fType = fields.createNestedObject("type");
  fType["stringValue"] = type;

  JsonObject fRoomId = fields.createNestedObject("roomId");
  fRoomId["integerValue"] = String(roomId);

  JsonObject fName = fields.createNestedObject("roomName");
  fName["stringValue"] = roomName;  // const char*

  JsonObject fTime = fields.createNestedObject("timestamp");
  fTime["integerValue"] = String(timestampSec);

  JsonObject fLocal = fields.createNestedObject("timeLocal");
  fLocal["stringValue"] = timeLocal;

  JsonObject fConfirmed = fields.createNestedObject("patientConfirmed");
  fConfirmed["booleanValue"] = patientConfirmed;
}

/** Format current time as "YYYY-MM-DD HH:MM:SS" for logs + Firestore. */
String formatNowLocal() {
  if (!hasWallClock()) return String("clock-not-set");
  struct tm ti;
  if (getLocalTime(&ti)) {
    char buf[32];
    strftime(buf, sizeof(buf), "%Y-%m-%d %H:%M:%S", &ti);
    return String(buf);
  }
  return String("unknown");
}

void printHttpResult(HTTPClient& http, int code, const char* label) {
  if (code > 0) {
    Serial.printf("[FIREBASE] %s HTTP %d\n", label, code);
    String body = http.getString();
    if (code >= 200 && code < 300) {
      Serial.printf("[FIREBASE] OK body: %s\n", body.c_str());
    } else {
      Serial.println("[FIREBASE] *** FAILED — NOT SAVED TO FIRESTORE ***");
      Serial.printf("[FIREBASE] Response: %s\n", body.c_str());
    }
  } else {
    Serial.println("[FIREBASE] *** FAILED — NOT SAVED TO FIRESTORE ***");
    Serial.printf("[FIREBASE] %s error: %s\n", label, http.errorToString(code).c_str());
  }
}

bool postJson(const char* url, const char* jsonBody, const char* label) {
  Serial.println("[FIREBASE] logEvent called");
  Serial.printf("[FIREBASE] WiFi status: %d (3 = connected)\n", WiFi.status());
  Serial.printf("[FIREBASE] POST url: %s\n", url);
  Serial.println("[FIREBASE] Sending HTTPS POST (up to 20 sec)...");
  Serial.flush();

  secureClient.setInsecure();
  secureClient.setTimeout(25);

  HTTPClient http;
  http.setTimeout(20000);
  http.setReuse(false);
  if (!http.begin(secureClient, url)) {
    Serial.printf("[FIREBASE] %s — http.begin failed\n", label);
    return false;
  }
  http.addHeader("Content-Type", "application/json");

  int code = http.POST(jsonBody);

  Serial.println("[FIREBASE] POST returned");
  Serial.flush();
  printHttpResult(http, code, label);
  http.end();
  return code >= 200 && code < 300;
}

bool patchJson(const char* url, const char* jsonBody, const char* label) {
  Serial.printf("[FIREBASE] PATCH url: %s\n", url);
  Serial.flush();

  secureClient.setInsecure();
  secureClient.setTimeout(25);

  HTTPClient http;
  http.setTimeout(20000);
  if (!http.begin(secureClient, url)) {
    Serial.printf("[FIREBASE] %s — http.begin failed\n", label);
    return false;
  }
  http.addHeader("Content-Type", "application/json");
  int code = http.sendRequest("PATCH", jsonBody);
  printHttpResult(http, code, label);
  http.end();
  return code >= 200 && code < 300;
}

bool logEvent(uint8_t roomId, const char* roomName, const char* eventType, bool patientConfirmed) {
  Serial.println("[FIREBASE] ---- logEvent START ----");
  Serial.flush();

  if (WiFi.status() != WL_CONNECTED) {
    Serial.println("[FIREBASE] logEvent skipped — no WiFi");
    return false;
  }

  if (!ensureWallClock()) {
    Serial.println("[FIREBASE] logEvent skipped — wall clock not set (NTP + HTTPS failed)");
    return false;
  }

  unsigned long timestampSec = nowEpochSec();
  String timeLocal = formatNowLocal();
  if (timestampSec == 0) {
    Serial.println("[FIREBASE] logEvent skipped — invalid timestamp");
    return false;
  }

  StaticJsonDocument<512> doc;
  writeFirestoreFields(doc, eventType, roomId, roomName, timestampSec, timeLocal.c_str(), patientConfirmed);

  char body[400];
  serializeJson(doc, body, sizeof(body));

  char url[320];
  snprintf(url, sizeof(url),
           "https://firestore.googleapis.com/v1/projects/%s/databases/(default)/documents/rooms/room_%u/events?key=%s",
           FIREBASE_PROJECT_ID, roomId, FIREBASE_API_KEY);

  Serial.printf("[FIREBASE] POST room_%u/events ts=%lu timeLocal=%s patientConfirmed=%s\n",
                roomId, timestampSec, timeLocal.c_str(), patientConfirmed ? "true" : "false");
  Serial.println(body);
  Serial.flush();
  return postJson(url, body, "logEvent");
}

bool updateRoom(uint8_t roomId, const char* eventType) {
  Serial.println("[FIREBASE] ---- updateRoom START ----");
  Serial.flush();
  if (WiFi.status() != WL_CONNECTED) return false;
  if (!ensureWallClock()) return false;

  unsigned long timestampSec = nowEpochSec();
  if (timestampSec == 0) return false;
  const char* fieldMask = (strcmp(eventType, "ENTRY") == 0) ? "lastEntry" : "lastExit";

  StaticJsonDocument<256> doc;
  JsonObject fields = doc.createNestedObject("fields");
  JsonObject f = fields.createNestedObject(fieldMask);
  f["integerValue"] = String(timestampSec);

  char body[200];
  serializeJson(doc, body, sizeof(body));

  char url[320];
  snprintf(url, sizeof(url),
           "https://firestore.googleapis.com/v1/projects/%s/databases/(default)/documents/rooms/room_%u?updateMask.fieldPaths=%s&key=%s",
           FIREBASE_PROJECT_ID, roomId, fieldMask, FIREBASE_API_KEY);

  Serial.printf("[FIREBASE] PATCH room_%u %s ts=%lu\n", roomId, fieldMask, timestampSec);
  Serial.flush();
  return patchJson(url, body, "updateRoom");
}

void queueBleEvent(uint8_t roomId, uint8_t direction, uint8_t patientConfirmed) {
  pendingEvent.roomId = roomId;
  pendingEvent.direction = direction;
  pendingEvent.patientConfirmed = patientConfirmed;
  pendingEvent.ready = true;
  Serial.printf("[BLE] Queued room_%d %s (patientConfirmed=%u) — uploading in main loop...\n",
                roomId, direction == 1 ? "ENTRY" : "EXIT", patientConfirmed);
}

void processPendingEvent() {
  if (!pendingEvent.ready) return;

  Serial.println("[FIREBASE] ---- processPendingEvent ----");
  Serial.flush();

  if (!ensureWallClock()) {
    Serial.println("[FIREBASE] *** WAITING — wall clock not set; event kept for retry ***");
    return;
  }

  pendingEvent.ready = false;
  uint8_t roomId = pendingEvent.roomId;
  uint8_t direction = pendingEvent.direction;
  uint8_t patientConfirmed = pendingEvent.patientConfirmed;
  const char* roomName = getRoomName(roomId);
  const char* eventType = (direction == 1) ? "ENTRY" : "EXIT";

  if (WiFi.status() != WL_CONNECTED) {
    Serial.println("[FIREBASE] *** SKIPPED — WiFi not connected ***");
    return;
  }

  Serial.println("==========================");
  Serial.printf("[EVENT] %s — %s (room %u)\n", eventType, roomName, roomId);
  Serial.printf("[FIREBASE] Project: %s\n", FIREBASE_PROJECT_ID);
  Serial.flush();

  bool saved = logEvent(roomId, roomName, eventType, patientConfirmed == 1);
  bool patched = updateRoom(roomId, eventType);

  if (saved) {
    Serial.printf("[FIREBASE] *** SAVED *** Check: rooms/room_%d/events\n", roomId);
  } else {
    Serial.println("[FIREBASE] Fix HTTP error above (rules? WiFi? JSON?)");
  }
  if (!patched) {
    Serial.println("[FIREBASE] Room PATCH failed (events may still exist if POST OK)");
  }
  Serial.println("==========================");
}

void firestoreBootTest() {
  Serial.println("[TEST] Posting test ENTRY to room_1 (no BLE)...");
  queueBleEvent(1, 1, 1);
  processPendingEvent();
}

/** Parse [roomId, direction, patientConfirmed] or [companyId lo/hi, roomId, direction, patientConfirmed]. */
bool parseBlePacket(const std::string& data, uint8_t& roomId, uint8_t& direction,
                    uint8_t& patientConfirmed) {
  if (data.length() < 3) return false;

  size_t off = 0;
  // If byte0 isn't a valid room, skip 2-byte BLE company ID prefix
  if (data[0] < 1 || data[0] > 7) {
    if (data.length() < 5) return false;
    off = 2;
  }

  roomId = (uint8_t)data[off];
  direction = (uint8_t)data[off + 1];
  patientConfirmed = (uint8_t)data[off + 2];

  if (roomId < 1 || roomId > 7) return false;
  if (direction != 0 && direction != 1) return false;
  if (patientConfirmed != 0 && patientConfirmed != 1) return false;
  return true;
}

void logRawMfg(const std::string& data) {
#if DEBUG_BLE_RAW
  Serial.print("[BLE RAW] len=");
  Serial.print(data.length());
  Serial.print(" hex=");
  for (size_t i = 0; i < data.length() && i < 12; i++) {
    if (data[i] < 16) Serial.print('0');
    Serial.print((int)data[i], HEX);
    Serial.print(' ');
  }
  Serial.println();
#endif
}

class AdvertisedDeviceCallbacks : public BLEAdvertisedDeviceCallbacks {
  void onResult(BLEAdvertisedDevice advertisedDevice) {
    if (!advertisedDevice.haveManufacturerData()) return;

    std::string data = advertisedDevice.getManufacturerData();
    logRawMfg(data);

    uint8_t roomId = 0;
    uint8_t direction = 0;
    uint8_t patientConfirmed = 0;
    if (!parseBlePacket(data, roomId, direction, patientConfirmed)) {
#if DEBUG_BLE_RAW
      Serial.println("[BLE] ignored — not CareConnect format (need roomId 1-7, dir 0/1, patientConfirmed 0/1)");
#endif
      return;
    }

    unsigned long now = millis();
    if (now - lastBleByRoom[roomId] < BLE_DEBOUNCE_MS) {
#if DEBUG_BLE_RAW
      Serial.printf("[BLE] debounced room %d (wait %lums)\n", roomId, BLE_DEBOUNCE_MS);
#endif
      return;
    }
    lastBleByRoom[roomId] = now;

    Serial.printf("[BLE] RoomID=%d Direction=%s patientConfirmed=%u\n",
                  roomId, direction == 1 ? "ENTRY" : "EXIT", patientConfirmed);
    logTimestamp("BLE detected");
    queueBleEvent(roomId, direction, patientConfirmed);
  }
};

void connectWifi() {
  setLED(false);
  WiFiManager wm;
  wm.setConfigPortalTimeout(180);
  bool connected = wm.autoConnect("HubESP32-Setup");
  if (!connected) {
    Serial.println("[WIFI] Failed — restarting...");
    delay(3000);
    ESP.restart();
  }
  Serial.printf("[WIFI] Connected — IP: %s\n", WiFi.localIP().toString().c_str());
  setLED(true);

  IPAddress dnsIp;
  if (WiFi.hostByName("firestore.googleapis.com", dnsIp)) {
    Serial.printf("[WIFI] DNS OK — firestore.googleapis.com → %s\n", dnsIp.toString().c_str());
  } else {
    Serial.println("[WIFI] DNS FAILED for firestore.googleapis.com");
    Serial.println("[WIFI] Try phone hotspot — campus WiFi may block Google/Firebase");
  }

  syncNtpTime();
}

void forcePortal() {
  Serial.println("[WIFI] Button pressed — forcing portal...");
  setLED(false);
  WiFiManager wm;
  wm.resetSettings();
  delay(500);
  ESP.restart();
}

void setup() {
  Serial.begin(115200);
  delay(500);

  pinMode(LED_GREEN, OUTPUT);
  pinMode(LED_RED, OUTPUT);
  setLED(false);

  pinMode(RESET_PIN, INPUT);
  if (digitalRead(RESET_PIN) == HIGH) {
    forcePortal();
  }

  connectWifi();

#if TEST_FIRESTORE_ON_BOOT
  firestoreBootTest();
#endif

  BLEDevice::init("HubESP32");
  pBLEScan = BLEDevice::getScan();
  pBLEScan->setAdvertisedDeviceCallbacks(new AdvertisedDeviceCallbacks());
  pBLEScan->setActiveScan(true);
  pBLEScan->setInterval(100);
  pBLEScan->setWindow(99);

  Serial.println("[BOOT] Hub firmware v3 (Firebase runs in loop, not BLE callback)");
  Serial.println("[BOOT] Hub ready — scanning BLE");
  Serial.printf("[BOOT] Project: %s\n", FIREBASE_PROJECT_ID);
  Serial.println("[BOOT] Expect packets: [roomId][dir][0] or [coId][coId][roomId][dir][0]");
  Serial.println("[BOOT] Room 2 switch → Serial must show: RoomID=2");
  Serial.println("[BOOT] Look for [FIREBASE] *** SAVED *** after each crossing");

  WiFi.setSleep(false);
}

void loop() {
  processPendingEvent();

  if (digitalRead(RESET_PIN) == HIGH) {
    delay(50);
    if (digitalRead(RESET_PIN) == HIGH) {
      forcePortal();
    }
  }

  unsigned long now = millis();
  if (now - lastWifiCheck > WIFI_CHECK_MS) {
    lastWifiCheck = now;
    if (WiFi.status() != WL_CONNECTED) {
      Serial.println("[WIFI] Lost — reconnecting...");
      connectWifi();
    } else {
      setLED(true);
      if (!timeSynced && now - lastTimeSyncAttempt > TIME_RESYNC_MS) {
        lastTimeSyncAttempt = now;
        ensureWallClock();
      }
    }
  }

  BLEScanResults results = pBLEScan->start(1, false);
  pBLEScan->clearResults();

  // Upload right after BLE scan (don't wait for next loop tick)
  processPendingEvent();
}
