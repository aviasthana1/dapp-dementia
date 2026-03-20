/**
 * Firestore collections (tables) for CareConnect.
 * Collections are created when the first document is written.
 */
import {
  collection,
  doc,
  getDoc,
  getDocs,
  writeBatch,
  query,
  orderBy,
  where,
  updateDoc,
  addDoc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "./firebase";

// Collection names (tables)
export const COLLECTIONS = {
  CAREGIVERS: "caregivers",
  PATIENTS: "patients",
  REMINDERS: "reminders",
  LINKING_CODES: "linkingCodes",
} as const;

export type Caregiver = { id: string; email: string; name: string };
export type Patient = { id: string; name: string; caregiverId: string };
export type Reminder = {
  id: string;
  patientId: string;
  title: string;
  time: string;
  done: boolean;
  /** Optional URL to a voice message / audio attachment */
  audioUrl?: string;
  /** Optional URL to a photo (e.g. pill organizer, pet) for easier recognition */
  photoUrl?: string;
};
export type LinkingCode = { code: string; patientId: string; patientName: string };

const SEED_CAREGIVERS: Caregiver[] = [
  { id: "c1", email: "maria@careconnect.example", name: "Maria" },
  { id: "c2", email: "john@careconnect.example", name: "John" },
  { id: "c3", email: "sarah@careconnect.example", name: "Sarah" },
];
const SEED_PATIENTS: Patient[] = [
  { id: "p1", name: "James", caregiverId: "c1" },
  { id: "p2", name: "Eleanor", caregiverId: "c1" },
  { id: "p3", name: "Robert", caregiverId: "c2" },
  { id: "p4", name: "Margaret", caregiverId: "c3" },
];
const SEED_REMINDERS: Reminder[] = [
  { id: "r1", patientId: "p1", title: "Take morning medication", time: "8:00 AM", done: false },
  { id: "r2", patientId: "p1", title: "Drink water", time: "10:00 AM", done: false },
  { id: "r3", patientId: "p1", title: "Lunch", time: "12:30 PM", done: false },
  { id: "r4", patientId: "p1", title: "Afternoon walk", time: "3:00 PM", done: false },
  { id: "r5", patientId: "p2", title: "Take morning medication", time: "8:30 AM", done: false },
  { id: "r6", patientId: "p2", title: "Call family", time: "2:00 PM", done: false },
  { id: "r7", patientId: "p3", title: "Take morning medication", time: "9:00 AM", done: false },
  { id: "r8", patientId: "p4", title: "Take morning medication", time: "8:00 AM", done: false },
  { id: "r9", patientId: "p4", title: "Rest", time: "1:00 PM", done: false },
];
const SEED_LINKING_CODES: LinkingCode[] = [
  { code: "JAMES01", patientId: "p1", patientName: "James" },
  { code: "ELEANOR", patientId: "p2", patientName: "Eleanor" },
  { code: "ROBERT1", patientId: "p3", patientName: "Robert" },
  { code: "MARGARET", patientId: "p4", patientName: "Margaret" },
];

/** Seed Firestore with initial data if caregivers collection is empty. */
export async function seedInitialDataIfEmpty(): Promise<void> {
  const caregiversRef = collection(db, COLLECTIONS.CAREGIVERS);
  const snap = await getDocs(caregiversRef);
  if (!snap.empty) return;

  const batch = writeBatch(db);
  for (const c of SEED_CAREGIVERS) {
    batch.set(doc(db, COLLECTIONS.CAREGIVERS, c.id), { email: c.email, name: c.name });
  }
  for (const p of SEED_PATIENTS) {
    batch.set(doc(db, COLLECTIONS.PATIENTS, p.id), { name: p.name, caregiverId: p.caregiverId });
  }
  for (const r of SEED_REMINDERS) {
    batch.set(doc(db, COLLECTIONS.REMINDERS, r.id), {
      patientId: r.patientId,
      title: r.title,
      time: r.time,
      done: r.done,
    });
  }
  for (const lc of SEED_LINKING_CODES) {
    const id = lc.code.toUpperCase();
    batch.set(doc(db, COLLECTIONS.LINKING_CODES, id), {
      patientId: lc.patientId,
      patientName: lc.patientName,
    });
  }
  await batch.commit();
}

export async function getCaregivers(): Promise<Caregiver[]> {
  const snap = await getDocs(collection(db, COLLECTIONS.CAREGIVERS));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() } as Caregiver));
}

export async function getCaregiverByEmail(email: string): Promise<Caregiver | undefined> {
  const caregivers = await getCaregivers();
  return caregivers.find((c) => c.email === email);
}

export async function getPatientsForCaregiver(caregiverEmail: string): Promise<Patient[]> {
  const caregiver = await getCaregiverByEmail(caregiverEmail);
  if (!caregiver) return [];
  const q = query(
    collection(db, COLLECTIONS.PATIENTS),
    where("caregiverId", "==", caregiver.id)
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() } as Patient));
}

export async function getRemindersForPatient(patientId: string): Promise<Reminder[]> {
  const q = query(
    collection(db, COLLECTIONS.REMINDERS),
    where("patientId", "==", patientId)
  );
  const snap = await getDocs(q);
  const list = snap.docs.map((d) => ({ id: d.id, ...d.data() } as Reminder));
  return list.sort((a, b) => a.time.localeCompare(b.time));
}

export async function validateLinkingCode(code: string): Promise<LinkingCode | undefined> {
  const id = code.trim().toUpperCase();
  if (!id) return undefined;
  const ref = doc(db, COLLECTIONS.LINKING_CODES, id);
  const snap = await getDoc(ref);
  if (!snap.exists()) return undefined;
  const data = snap.data();
  return { code: id, patientId: data.patientId, patientName: data.patientName };
}

/** Get first N reminders (for patient view when no patient id in context). */
export async function getRemindersSample(limit: number): Promise<Reminder[]> {
  const snap = await getDocs(collection(db, COLLECTIONS.REMINDERS));
  const list = snap.docs.map((d) => ({ id: d.id, ...d.data() } as Reminder));
  return list.sort((a, b) => a.time.localeCompare(b.time)).slice(0, limit);
}

export async function getLinkingCodesForDemo(): Promise<LinkingCode[]> {
  const snap = await getDocs(collection(db, COLLECTIONS.LINKING_CODES));
  return snap.docs.map((d) => ({ code: d.id, ...d.data() } as LinkingCode));
}

/** Mark a reminder as done. */
export async function updateReminderDone(reminderId: string): Promise<void> {
  const reminderRef = doc(db, COLLECTIONS.REMINDERS, reminderId);
  await updateDoc(reminderRef, { done: true });
}

/** Upload a photo for a reminder; returns the public download URL. */
export async function uploadReminderPhoto(
  patientId: string,
  reminderId: string,
  file: File
): Promise<string> {
  const path = `reminders/${patientId}/${reminderId}/${file.name}`;
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
}

export type CreateReminderInput = {
  title: string;
  time: string;
  photoUrl?: string;
  audioUrl?: string;
};

/** Create a new reminder for a patient. Returns the new reminder id. */
export async function createReminder(
  patientId: string,
  input: CreateReminderInput
): Promise<string> {
  const remindersRef = collection(db, COLLECTIONS.REMINDERS);
  const docRef = await addDoc(remindersRef, {
    patientId,
    title: input.title,
    time: input.time,
    done: false,
    ...(input.photoUrl && { photoUrl: input.photoUrl }),
    ...(input.audioUrl && { audioUrl: input.audioUrl }),
  });
  return docRef.id;
}

/** Set photo URL on an existing reminder (e.g. after upload). */
export async function setReminderPhotoUrl(reminderId: string, photoUrl: string): Promise<void> {
  const reminderRef = doc(db, COLLECTIONS.REMINDERS, reminderId);
  await updateDoc(reminderRef, { photoUrl });
}

export type PatientLocationEvent = {
  id: string;
  /** Location where the patient was at `time`. */
  room: string;
  /**
   * Epoch time number.
   * We allow both seconds (e.g. 1710000000) and milliseconds (ms) depending on what was stored.
   */
  time: number;
};

/**
 * Fetch a patient's location history.
 * Stored at: `patients/{patientId}/location/{eventId}` with fields: `{ room, time }`.
 */
export async function getLocationHistoryForPatient(patientId: string): Promise<PatientLocationEvent[]> {
  const locRef = collection(db, COLLECTIONS.PATIENTS, patientId, "location");

  // Show newest first (descending) so the UI can highlight the latest location.
  const q = query(locRef, orderBy("time", "desc"));
  const snap = await getDocs(q);

  const events: PatientLocationEvent[] = snap.docs
    .map((d) => {
      const data = d.data() as { room?: unknown; time?: unknown };

      const room = typeof data.room === "string" ? data.room : "Unknown";

      const rawTime = data.time;
      let time = NaN;

      if (typeof rawTime === "number") {
        time = rawTime;
      } else if (typeof rawTime === "string" && rawTime.trim()) {
        time = Number(rawTime);
      } else if (rawTime && typeof (rawTime as any).toMillis === "function") {
        // Firestore Timestamp
        time = (rawTime as any).toMillis();
      }

      return { id: d.id, room, time };
    })
    .filter((e) => Number.isFinite(e.time));

  return events;
}
