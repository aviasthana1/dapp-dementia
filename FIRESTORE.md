# Firestore collections (tables)

CareConnect uses these Firestore collections. They are created automatically when the app runs and seeds initial data (if empty).

| Collection       | Document ID     | Fields                                      |
|------------------|------------------|---------------------------------------------|
| `caregivers`     | caregiver id     | `email`, `name`                             |
| `patients`       | patient id       | `name`, `caregiverId`                       |
| `reminders`      | reminder id      | `patientId`, `title`, `time`, `done`         |
| `linkingCodes`    | code (uppercase) | `patientId`, `patientName`                  |

**Firebase config** is in `src/services/firebase.ts` (apiKey, projectId, etc.).

**Seed**: On first load, `seedInitialDataIfEmpty()` in `src/services/firestoreData.ts` writes seed data so these collections exist and have demo caregivers, patients, reminders, linking codes, and sample location history.

**Patient linking**: After a patient enters a code, `patientId` is saved in `localStorage` (`src/services/session.ts`) and reminders load from Firestore for that patient only.

**Demo flow**:
1. Caregiver: log in with `maria@careconnect.example` → pick James → add reminders.
2. Patient: Link Account with code `JAMES01` → My Reminders shows James’s tasks live.

## Fix "Missing or insufficient permissions"

1. Open Firebase Console → your project → **Firestore Database** → **Rules**.
2. Replace with the contents of **firestore.rules** in this repo, then **Publish**.
3. Rules in that file allow read/write for `caregivers`, `patients`, `reminders`, `linkingCodes` (development only).
