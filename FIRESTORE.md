# Firestore collections (tables)

CareConnect uses these Firestore collections. They are created automatically when the app runs and seeds initial data (if empty).

| Collection       | Document ID     | Fields                                      |
|------------------|------------------|---------------------------------------------|
| `caregivers`     | caregiver id     | `email`, `name`                             |
| `patients`       | patient id       | `name`, `caregiverId`                       |
| `reminders`      | reminder id      | `patientId`, `title`, `time`, `done`         |
| `linkingCodes`    | code (uppercase) | `patientId`, `patientName`                  |

**Firebase config** is in `src/services/firebase.ts` (apiKey, projectId, etc.).

**Seed**: On first load, `seedInitialDataIfEmpty()` in `src/services/firestoreData.ts` writes seed data so these collections exist and have demo caregivers, patients, reminders, and linking codes.

## Fix "Missing or insufficient permissions"

1. Open Firebase Console → your project → **Firestore Database** → **Rules**.
2. Replace with the contents of **firestore.rules** in this repo, then **Publish**.
3. Rules in that file allow read/write for `caregivers`, `patients`, `reminders`, `linkingCodes` (development only).
