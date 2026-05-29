# ESP32 BLE hub → Firestore

Your hub firmware writes BLE door crossings to Firestore via the REST API and API key. This repo seeds the collections the ESP32 expects and mirrors **ENTRY** events into the caregiver **location history** UI.

## What the ESP32 needs (checklist)

| Requirement | Status in this repo |
|-------------|---------------------|
| Firestore rules allow **unauthenticated writes** to `rooms/**` | `firestore.rules` — publish in Firebase Console |
| Parent docs `rooms/room_1` … `room_7` exist (PATCH needs a document) | Seeded on first app load via `seedRoomsIfEmpty()` |
| `events` subcollection | Created automatically on first POST from ESP32 |
| API key matches project | Same key as `src/services/firebase.ts` |
| WiFi connected | ESP32 + WiFiManager |

### Publish Firestore rules

1. [Firebase Console](https://console.firebase.google.com/project/test-f80e2/firestore/rules) → **Firestore** → **Rules**
2. Paste contents of `firestore.rules` from this repo → **Publish**

Demo rules allow open read/write on `rooms` and `hubConfig`. **Lock down before production.**

## Firestore layout

### `rooms/room_{n}` (parent — must exist before PATCH)

```json
{
  "roomId": 1,
  "name": "Bathroom",
  "occupancy": 0,
  "lastEntry": 0,
  "lastExit": 0,
  "lastVisitDuration": 0
}
```

### `rooms/room_{n}/events/{autoId}` (POST from `logEvent()`)

```json
{
  "type": "ENTRY",
  "roomId": 1,
  "roomName": "Bathroom",
  "timestamp": 1710000000
}
```

### `hubConfig/default` (which patient the app mirrors into)

```json
{
  "patientId": "p1",
  "enabled": true
}
```

Default: **James** (`p1`). Change in caregiver **Settings** or edit in Console.

### `patients/{patientId}/location/{id}` (caregiver UI)

Mirrored automatically when ENTRY events arrive:

```json
{
  "room": "Bathroom",
  "time": 1710000000000,
  "source": "esp32"
}
```

## Room ID → name (firmware)

| roomId | Name |
|--------|------|
| 1 | Bathroom |
| 2 | Kitchen |
| 3 | Bedroom |
| 4–7 | Room 4–7 |

## Arduino libraries

- **ArduinoJson** (Benoit Blanchon)
- **WiFiManager**
- **ESP32 BLE** (board package)
- **HTTPClient** (included with ESP32 core)

## Permissions (why writes succeed or fail)

The ESP32 uses:

`https://firestore.googleapis.com/v1/projects/test-f80e2/databases/(default)/documents/...?key=YOUR_API_KEY`

That is an **unauthenticated** client. Firestore applies security rules as `request.auth == null`.

- **Allowed:** rules like `allow write: if true` on `rooms/{roomId}` and `rooms/{roomId}/events/{eventId}`
- **Denied:** rules requiring `request.auth != null` → HTTP **403**
- **PATCH fails:** parent `rooms/room_1` missing → **404** (seed rooms first)
- **POST events:** subcollection is created on first write; parent room doc not required for POST, but PATCH for `lastEntry`/`lastExit` needs the parent

The API key identifies the Firebase project; it is **not** a secret bypass for rules. Rules still apply.

## Recommended firmware fix (timestamps)

Your sketch uses `millis() / 1000` (uptime seconds), not wall clock. The web app treats small values as invalid and uses `Date.now()` when mirroring.

For accurate history, use NTP time on the ESP32:

```cpp
#include <time.h>

void setupTime() {
  configTime(0, 0, "pool.ntp.org");
  struct tm ti;
  if (!getLocalTime(&ti)) return;
}

unsigned long nowEpochSeconds() {
  return (unsigned long)time(nullptr);
}
```

Use `nowEpochSeconds()` in `logEvent()` and `updateRoom()` instead of `millis() / 1000`.

## Test flow

1. Run the web app once (`npm run dev`) so rooms + hub config are seeded.
2. Publish `firestore.rules`.
3. Flash ESP32, connect WiFi, confirm serial: `[FIREBASE] Event logged`.
4. Caregiver login → **Maria** → **James** → dashboard shows **Location history** updating on ENTRY.
5. Firebase Console → **Firestore** → `rooms` → `room_1` → `events` to verify raw hub data.

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| HTTP 403 | Publish open `rooms` rules (demo) |
| PATCH 404 | Run app once to seed `rooms/room_*` or create docs manually |
| Events in Console but not in app | Open James’s dashboard (hub sync runs there); check `hubConfig/default.patientId` |
| Wrong times | Add NTP on ESP32 (see above) |
