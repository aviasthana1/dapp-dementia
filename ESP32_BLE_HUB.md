# ESP32 BLE hub → Firestore

Your hub firmware writes BLE door crossings to Firestore via the REST API and API key. This repo seeds the collections the ESP32 expects and mirrors **ENTRY** events into the caregiver **location history** UI.

## What the ESP32 needs (checklist)

| Requirement | Status in this repo |
|-------------|---------------------|
| Firestore rules allow **unauthenticated writes** to `rooms/**` | `firestore.rules` — publish in Firebase Console |
| Parent docs `rooms/room_1` … `room_7` exist (PATCH needs a document) | Seeded on first app load via `seedRoomsIfEmpty()` |
| `events` subcollection | Created automatically on first POST from ESP32 |
| API key matches project | Same key in `.env` (`VITE_FIREBASE_API_KEY`) and `firmware/esp32_hub/secrets.h` |
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

## Timestamps (no ESP32 changes needed)

The hub may send wrong `timestamp` / `timeLocal` values. **Server time** is applied in two places:

1. **Cloud Function** `stampHubRoomEvent` — on each new `rooms/room_N/events/*` doc, sets `timestamp` and `lastEntry` / `lastExit` with `FieldValue.serverTimestamp()`. Deploy once:

   ```bash
   cd functions && npm install && cd ..
   firebase login
   firebase deploy --only functions:stampHubRoomEvent
   ```

   Requires the Blaze plan (Firebase free tier + billing enabled for Functions).

2. **Web app** — when mirroring ENTRY into `patients/{id}/location`, uses `serverTimestamp()` for `time` (caregiver dashboard).

Keep flashing the ESP32 sketch you already have; no need to change `.ino` for timestamps.

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
| PATCH 404 | Run `npm run seed:hub` or create `rooms/room_*` manually |
| **No `events` subcollection at all** | ESP32 never successfully POSTed — see below |
| Events in Console but not in app | Open James’s dashboard (hub sync runs there); check `hubConfig/default.patientId` |
| Wrong times (`00:00:00`) | Deploy `stampHubRoomEvent` (see above); new events get server time |

### Serial shows ENTRY/EXIT but nothing in Firestore

The hub was logging BLE in the scan callback but **HTTP to Firestore must run in `loop()`** on ESP32. Updated firmware **queues** the event and uploads on the next loop pass.

After re-flash, you must see:

```text
[BLE] Queued room_2 ENTRY — uploading in main loop...
[FIREBASE] logEvent HTTP 200
[FIREBASE] *** SAVED *** Check: rooms/room_2/events
```

If you see `*** FAILED — NOT SAVED TO FIRESTORE ***` instead, read the HTTP code (403 = rules, -1 = WiFi/HTTPS).

### Terminal works, Arduino does not

If `npm run test:hub-event` creates documents but the board does not:

1. Flash **`firmware/esp32_hub/esp32_hub.ino`** (fixed Firestore JSON + HTTPS + serial debug).
2. Open Serial Monitor **115200** — on boot you should see `[TEST]` and **`logEvent HTTP 200`** when `TEST_FIRESTORE_ON_BOOT` is `true`.
3. If boot test is **200** but BLE never adds events → BLE beacon format is wrong (see packet table below).
4. If boot test **fails** (403/400/connection error) → compare serial JSON to [test-hub-event.mjs](./scripts/test-hub-event.mjs).

**Common bugs in the original sketch:**

| Issue | Fix |
|-------|-----|
| `fields["type"]["stringValue"] = x` in ArduinoJson | Use `createNestedObject("type")` then `["stringValue"]` |
| No `WiFiClientSecure` + `setInsecure()` | Required for `https://` on many ESP32 cores |
| HTTP 400 not obvious | Log `http.getString()` on non-2xx (included in reference sketch) |
| Never `[BLE] Received` | Door tag must advertise 3-byte manufacturer data |

### Events not appearing (ESP32-side)

Firebase and rules are OK if a manual test works:

```bash
npm run test:hub-event
```

Then refresh **rooms → room_1 → events**. You should see at least one document. If that appears but the ESP32 never adds more, the problem is **only on the device**, not Firestore.

**Serial Monitor (115200) — what to look for:**

| You see | Meaning |
|---------|---------|
| Nothing after boot except `[BOOT]` | BLE tags not advertising or wrong manufacturer data format |
| `[BLE] Received: RoomID=1 …` but no `[FIREBASE]` | WiFi dropped or `logEvent` crashed |
| `[FIREBASE] Event log failed` or HTTP **403** | Rules not published on **test-f80e2**, or wrong project ID in sketch |
| HTTP **404** on PATCH | Wrong `room_` id or parent doc missing |
| HTTP **200** on log | Event was written — refresh Console under **events** subcollection |

**BLE packet the hub expects** (first 3 bytes of manufacturer data):

- Byte 0: `roomId` 1–7  
- Byte 1: `direction` 0 = EXIT, 1 = ENTRY  
- Byte 2: `0x00`  

If your door beacon doesn’t send that, the hub will ignore it and **no events** will be created.

**ArduinoJson body** must look exactly like this (nested `stringValue` / `integerValue`):

```json
{
  "fields": {
    "type": { "stringValue": "ENTRY" },
    "roomId": { "integerValue": "1" },
    "roomName": { "stringValue": "Bathroom" },
    "timestamp": { "integerValue": "1710000000" }
  }
}
```

If `serializeJson` prints a flat structure, Firestore rejects the POST (check serial for HTTP **400**).
