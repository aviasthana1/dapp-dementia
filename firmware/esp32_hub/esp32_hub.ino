/**
 * CareConnect BLE hub — reference firmware
 *
 * - Scans BLE for manufacturer data: [roomId, direction, 0x00]
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

// --- Pins (your wiring) ---
#define RESET_PIN      D2
#define LED_GREEN      D7
#define LED_RED        D3
#define WIFI_CHECK_MS  10000

// --- Firebase (must match src/services/firebase.ts) ---
#define FIREBASE_PROJECT_ID  "test-f80e2"
#define FIREBASE_API_KEY     "AIzaSyBIgGJPopOg1EtXJk5hOfE43Wy4dT1OZ8A"

// Post one test event after WiFi connects (proves Firestore from the board)
#define TEST_FIRESTORE_ON_BOOT  false

// Print every manufacturer-data packet (helps debug room 2 switch)
#define DEBUG_BLE_RAW  true

BLEScan* pBLEScan;
unsigned long lastWifiCheck = 0;
unsigned long lastBleByRoom[8] = {0};  // debounce per room, not global
const unsigned long BLE_DEBOUNCE_MS = 2000;
bool timeSynced = false;

// Firestore HTTP must run in loop(), NOT inside BLE callback (ESP32 will fail silently)
struct {
  volatile bool ready;
  uint8_t roomId;
  uint8_t direction;
} pendingEvent;

/** Sync wall-clock time over NTP (for real Firestore timestamps). */
void syncNtpTime() {
  configTime(0, 0, "pool.ntp.org", "time.nist.gov");
  struct tm ti;
  for (int i = 0; i < 25; i++) {
    if (getLocalTime(&ti, 500)) {
      timeSynced = true;
      char buf[32];
      strftime(buf, sizeof(buf), "%Y-%m-%d %H:%M:%S", &ti);
      Serial.printf("[TIME] NTP synced: %s (epoch %lu)\n", buf, (unsigned long)time(nullptr));
      return;
    }
    delay(200);
  }
  Serial.println("[TIME] NTP sync failed — timestamps use device uptime until sync works");
}

/** Unix seconds — real time after NTP, else uptime fallback. */
unsigned long nowEpochSec() {
  time_t t = time(nullptr);
  if (t > 1700000000L) return (unsigned long)t;
  return millis() / 1000;
}

/** Human-readable timestamp for Serial Monitor. */
void logTimestamp(const char* label) {
  unsigned long sec = nowEpochSec();
  struct tm ti;
  if (getLocalTime(&ti)) {
    char buf[32];
    strftime(buf, sizeof(buf), "%Y-%m-%d %H:%M:%S", &ti);
    Serial.printf("[TIME] %s %s (epoch %lu)%s\n", label, buf, sec,
                  timeSynced ? "" : " [uptime fallback]");
  } else {
    Serial.printf("[TIME] %s epoch %lu (clock not set)\n", label, sec);
  }
}

void setLED(bool connected) {
  digitalWrite(LED_GREEN, connected ? HIGH : LOW);
  digitalWrite(LED_RED, connected ? LOW : HIGH);
}

String getRoomName(uint8_t roomId) {
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
                          const String& roomName, unsigned long timestampSec,
                          const char* timeLocal) {
  JsonObject fields = doc.createNestedObject("fields");

  JsonObject fType = fields.createNestedObject("type");
  fType["stringValue"] = type;

  JsonObject fRoomId = fields.createNestedObject("roomId");
  fRoomId["integerValue"] = String(roomId);

  JsonObject fName = fields.createNestedObject("roomName");
  fName["stringValue"] = roomName;

  JsonObject fTime = fields.createNestedObject("timestamp");
  fTime["integerValue"] = String(timestampSec);

  JsonObject fLocal = fields.createNestedObject("timeLocal");
  fLocal["stringValue"] = timeLocal;
}

/** Format current time as "YYYY-MM-DD HH:MM:SS" for logs + Firestore. */
String formatNowLocal() {
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

bool postJson(const String& url, const String& jsonBody, const char* label) {
  WiFiClientSecure client;
  client.setInsecure();

  HTTPClient http;
  http.setTimeout(20000);
  if (!http.begin(client, url)) {
    Serial.printf("[FIREBASE] %s — http.begin failed\n", label);
    return false;
  }
  http.addHeader("Content-Type", "application/json");
  int code = http.POST(jsonBody);
  printHttpResult(http, code, label);
  http.end();
  return code >= 200 && code < 300;
}

bool patchJson(const String& url, const String& jsonBody, const char* label) {
  WiFiClientSecure client;
  client.setInsecure();

  HTTPClient http;
  http.setTimeout(20000);
  if (!http.begin(client, url)) {
    Serial.printf("[FIREBASE] %s — http.begin failed\n", label);
    return false;
  }
  http.addHeader("Content-Type", "application/json");
  int code = http.sendRequest("PATCH", jsonBody);
  printHttpResult(http, code, label);
  http.end();
  return code >= 200 && code < 300;
}

bool logEvent(uint8_t roomId, const String& roomName, const String& event) {
  if (WiFi.status() != WL_CONNECTED) {
    Serial.println("[FIREBASE] logEvent skipped — no WiFi");
    return false;
  }

  unsigned long timestampSec = nowEpochSec();
  String timeLocal = formatNowLocal();
  logTimestamp("Firestore event");

  StaticJsonDocument<512> doc;
  writeFirestoreFields(doc, event.c_str(), roomId, roomName, timestampSec, timeLocal.c_str());

  String body;
  serializeJson(doc, body);

  String url = "https://firestore.googleapis.com/v1/projects/";
  url += FIREBASE_PROJECT_ID;
  url += "/databases/(default)/documents/rooms/room_";
  url += String(roomId);
  url += "/events?key=";
  url += FIREBASE_API_KEY;

  Serial.printf("[FIREBASE] POST room_%d/events timestamp=%lu\n", roomId, timestampSec);
  Serial.println(body);
  return postJson(url, body, "logEvent");
}

bool updateRoom(uint8_t roomId, const String& event) {
  if (WiFi.status() != WL_CONNECTED) return false;

  unsigned long timestampSec = nowEpochSec();
  const char* fieldMask = (event == "ENTRY") ? "lastEntry" : "lastExit";

  StaticJsonDocument<256> doc;
  JsonObject fields = doc.createNestedObject("fields");
  JsonObject f = fields.createNestedObject(fieldMask);
  f["integerValue"] = String(timestampSec);

  String body;
  serializeJson(doc, body);

  String url = "https://firestore.googleapis.com/v1/projects/";
  url += FIREBASE_PROJECT_ID;
  url += "/databases/(default)/documents/rooms/room_";
  url += String(roomId);
  url += "?updateMask.fieldPaths=";
  url += fieldMask;
  url += "&key=";
  url += FIREBASE_API_KEY;

  Serial.printf("[FIREBASE] PATCH room_%d %s timestamp=%lu\n",
                roomId, fieldMask, timestampSec);
  return patchJson(url, body, "updateRoom");
}

void queueBleEvent(uint8_t roomId, uint8_t direction) {
  pendingEvent.roomId = roomId;
  pendingEvent.direction = direction;
  pendingEvent.ready = true;
  Serial.printf("[BLE] Queued room_%d %s — uploading in main loop...\n",
                roomId, direction == 1 ? "ENTRY" : "EXIT");
}

void processPendingEvent() {
  if (!pendingEvent.ready) return;
  pendingEvent.ready = false;

  uint8_t roomId = pendingEvent.roomId;
  uint8_t direction = pendingEvent.direction;
  String roomName = getRoomName(roomId);
  String event = (direction == 1) ? "ENTRY" : "EXIT";

  if (WiFi.status() != WL_CONNECTED) {
    Serial.println("[FIREBASE] *** SKIPPED — WiFi not connected ***");
    return;
  }

  Serial.println("==========================");
  Serial.printf("[EVENT] %s — %s (room %d)\n", event.c_str(), roomName.c_str(), roomId);
  logTimestamp("Uploading");
  Serial.printf("[FIREBASE] Project: %s\n", FIREBASE_PROJECT_ID);

  bool saved = logEvent(roomId, roomName, event);
  bool patched = updateRoom(roomId, event);

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

void handleEvent(uint8_t roomId, uint8_t direction) {
  queueBleEvent(roomId, direction);
}

void firestoreBootTest() {
  Serial.println("[TEST] Posting test ENTRY to room_1 (no BLE)...");
  queueBleEvent(1, 1);
  processPendingEvent();
}

/** Parse [roomId, direction, 0] or [companyId lo/hi, roomId, direction, 0]. */
bool parseBlePacket(const std::string& data, uint8_t& roomId, uint8_t& direction) {
  if (data.length() < 3) return false;

  size_t off = 0;
  // If byte0 isn't a valid room, skip 2-byte BLE company ID prefix
  if (data[0] < 1 || data[0] > 7) {
    if (data.length() < 5) return false;
    off = 2;
  }

  roomId = (uint8_t)data[off];
  direction = (uint8_t)data[off + 1];
  uint8_t reserved = (uint8_t)data[off + 2];

  if (roomId < 1 || roomId > 7) return false;
  if (direction != 0 && direction != 1) return false;
  if (reserved != 0x00) return false;
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
    if (!parseBlePacket(data, roomId, direction)) {
#if DEBUG_BLE_RAW
      Serial.println("[BLE] ignored — not CareConnect format (need roomId 1-7, dir 0/1, then 0x00)");
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

    Serial.printf("[BLE] RoomID=%d Direction=%s\n",
                  roomId, direction == 1 ? "ENTRY" : "EXIT");
    logTimestamp("BLE detected");
    handleEvent(roomId, direction);
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
    }
  }

  BLEScanResults results = pBLEScan->start(1, false);
  pBLEScan->clearResults();
}
