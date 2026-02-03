export type Caregiver = { id: string; email: string; name: string };
export type Patient = { id: string; name: string; caregiverId: string };
export type Reminder = { id: string; patientId: string; title: string; time: string; done: boolean };
export type LinkingCode = { code: string; patientId: string; patientName: string };

export const MOCK_CAREGIVERS: Caregiver[] = [
  { id: 'c1', email: 'maria@careconnect.example', name: 'Maria' },
  { id: 'c2', email: 'john@careconnect.example', name: 'John' },
  { id: 'c3', email: 'sarah@careconnect.example', name: 'Sarah' },
];

export const MOCK_PATIENTS: Patient[] = [
  { id: 'p1', name: 'James', caregiverId: 'c1' },
  { id: 'p2', name: 'Eleanor', caregiverId: 'c1' },
  { id: 'p3', name: 'Robert', caregiverId: 'c2' },
  { id: 'p4', name: 'Margaret', caregiverId: 'c3' },
];

export const MOCK_REMINDERS: Reminder[] = [
  { id: 'r1', patientId: 'p1', title: 'Take morning medication', time: '8:00 AM', done: false },
  { id: 'r2', patientId: 'p1', title: 'Drink water', time: '10:00 AM', done: false },
  { id: 'r3', patientId: 'p1', title: 'Lunch', time: '12:30 PM', done: false },
  { id: 'r4', patientId: 'p1', title: 'Afternoon walk', time: '3:00 PM', done: false },
  { id: 'r5', patientId: 'p2', title: 'Take morning medication', time: '8:30 AM', done: false },
  { id: 'r6', patientId: 'p2', title: 'Call family', time: '2:00 PM', done: false },
  { id: 'r7', patientId: 'p3', title: 'Take morning medication', time: '9:00 AM', done: false },
  { id: 'r8', patientId: 'p4', title: 'Take morning medication', time: '8:00 AM', done: false },
  { id: 'r9', patientId: 'p4', title: 'Rest', time: '1:00 PM', done: false },
];

export const MOCK_LINKING_CODES: LinkingCode[] = [
  { code: 'JAMES01', patientId: 'p1', patientName: 'James' },
  { code: 'ELEANOR', patientId: 'p2', patientName: 'Eleanor' },
  { code: 'ROBERT1', patientId: 'p3', patientName: 'Robert' },
  { code: 'MARGARET', patientId: 'p4', patientName: 'Margaret' },
];

export function getPatientsForCaregiver(caregiverEmail: string): Patient[] {
  const caregiver = MOCK_CAREGIVERS.find((c) => c.email === caregiverEmail);
  if (!caregiver) return [];
  return MOCK_PATIENTS.filter((p) => p.caregiverId === caregiver.id);
}

export function getRemindersForPatient(patientId: string): Reminder[] {
  return MOCK_REMINDERS.filter((r) => r.patientId === patientId).sort(
    (a, b) => a.time.localeCompare(b.time)
  );
}

export function validateLinkingCode(code: string): LinkingCode | undefined {
  const upper = code.trim().toUpperCase();
  return MOCK_LINKING_CODES.find((c) => c.code.toUpperCase() === upper);
}

export function getCaregiverByEmail(email: string): Caregiver | undefined {
  return MOCK_CAREGIVERS.find((c) => c.email === email);
}
