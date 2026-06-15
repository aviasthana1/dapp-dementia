const CAREGIVER_EMAIL_KEY = "careconnect_caregiver_email";
const LINKED_PATIENT_ID_KEY = "careconnect_linked_patient_id";
const LINKED_PATIENT_NAME_KEY = "careconnect_linked_patient_name";
const CONSENT_KEY = "careconnect_consent_accepted";

function storage(): Storage | null {
  try {
    return typeof localStorage !== "undefined" ? localStorage : null;
  } catch {
    return null;
  }
}

export function getStoredCaregiverEmail(): string | null {
  return storage()?.getItem(CAREGIVER_EMAIL_KEY) ?? null;
}

export function setStoredCaregiverEmail(email: string | null): void {
  const s = storage();
  if (!s) return;
  if (email) s.setItem(CAREGIVER_EMAIL_KEY, email);
  else s.removeItem(CAREGIVER_EMAIL_KEY);
}

export function getStoredLinkedPatient(): { id: string; name: string } | null {
  const s = storage();
  if (!s) return null;
  const id = s.getItem(LINKED_PATIENT_ID_KEY);
  if (!id) return null;
  return { id, name: s.getItem(LINKED_PATIENT_NAME_KEY) ?? "Patient" };
}

export function setStoredLinkedPatient(id: string | null, name?: string | null): void {
  const s = storage();
  if (!s) return;
  if (id) {
    s.setItem(LINKED_PATIENT_ID_KEY, id);
    if (name) s.setItem(LINKED_PATIENT_NAME_KEY, name);
  } else {
    s.removeItem(LINKED_PATIENT_ID_KEY);
    s.removeItem(LINKED_PATIENT_NAME_KEY);
  }
}

export function hasStoredConsent(): boolean {
  return storage()?.getItem(CONSENT_KEY) === "true";
}

export function setStoredConsent(accepted: boolean): void {
  const s = storage();
  if (!s) return;
  if (accepted) s.setItem(CONSENT_KEY, "true");
  else s.removeItem(CONSENT_KEY);
}
