# Firestore collections (tables)

CareConnect uses these Firestore collections. They are created automatically when the app runs and seeds initial data (if empty).

| Collection       | Document ID     | Fields                                      |
|------------------|------------------|---------------------------------------------|
| `caregivers`     | caregiver id     | `email`, `name`                             |
| `patients`       | patient id       | `name`, `caregiverId`                       |
| `reminders`      | reminder id      | `patientId`, `title`, `time`, `done`         |
| `linkingCodes`    | code (uppercase) | `patientId`, `patientName`                  |
| `rooms`           | `room_1` … `room_7` | `roomId`, `name`, `occupancy`, `lastEntry`, `lastExit` |
| `rooms/…/events`| auto id          | `type`, `roomId`, `roomName`, `timestamp` (ESP32 POST) |
| `hubConfig`       | `default`        | `patientId`, `enabled` (which patient gets mirrored location) |
| `patients/…/location` | auto id      | `room`, `time` (UI + ESP32 mirror)          |

**Firebase config** is in `.env` (see `.env.example`). `src/services/firebase.ts` reads `VITE_FIREBASE_*` at build time — do not commit `.env`.

**Seed**: On first load, `seedInitialDataIfEmpty()` in `src/services/firestoreData.ts` writes seed data so these collections exist and have demo caregivers, patients, reminders, linking codes, and sample location history.

**Patient linking**: After a patient enters a code, `patientId` is saved in `localStorage` (`src/services/session.ts`) and reminders load from Firestore for that patient only.

**Demo flow**:
1. Caregiver: log in with `maria@careconnect.example` → pick James → add reminders.
2. Patient: Link Account with code `JAMES01` → My Reminders shows James’s tasks live.

## Fix "Missing or insufficient permissions"

1. Open Firebase Console → your project → **Firestore Database** → **Rules**.
2. Replace with the contents of **firestore.rules** in this repo, then **Publish**.
3. Rules in that file allow **unauthenticated** read/write on all paths (`if true`) for demo + ESP32. **Publish** in the Console — editing the file locally does nothing until you publish.

## ESP32 BLE hub

See **[ESP32_BLE_HUB.md](./ESP32_BLE_HUB.md)** for firmware requirements, Firestore paths, rules, and testing.
