export type TextSize = 'standard' | 'large' | 'extra-large';

export type ReminderSoundId = 'chime' | 'bell' | 'soft' | 'none';

export type PatientPreferences = {
  textSize: TextSize;
  reminderSound: ReminderSoundId;
  notificationsEnabled: boolean;
  quietHoursEnabled: boolean;
  quietHoursStart: string;
  quietHoursEnd: string;
};

const STORAGE_KEY = 'careconnect_patient_preferences';
const CHANGE_EVENT = 'careconnect-preferences-change';

const DEFAULTS: PatientPreferences = {
  textSize: 'standard',
  reminderSound: 'chime',
  notificationsEnabled: true,
  quietHoursEnabled: true,
  quietHoursStart: '22:00',
  quietHoursEnd: '07:00',
};

function storage(): Storage | null {
  try {
    return typeof localStorage !== 'undefined' ? localStorage : null;
  } catch {
    return null;
  }
}

export function getPatientPreferences(): PatientPreferences {
  const raw = storage()?.getItem(STORAGE_KEY);
  if (!raw) return { ...DEFAULTS };
  try {
    const parsed = JSON.parse(raw) as Partial<PatientPreferences>;
    return { ...DEFAULTS, ...parsed };
  } catch {
    return { ...DEFAULTS };
  }
}

export function savePatientPreferences(next: Partial<PatientPreferences>): PatientPreferences {
  const merged = { ...getPatientPreferences(), ...next };
  storage()?.setItem(STORAGE_KEY, JSON.stringify(merged));
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }
  applyTextSize(merged.textSize);
  return merged;
}

export function applyTextSize(size: TextSize): void {
  if (typeof document === 'undefined') return;
  document.documentElement.dataset.patientTextSize = size;
}

export function initPatientPreferences(): void {
  applyTextSize(getPatientPreferences().textSize);
}

/** Minutes since midnight from "HH:mm". */
export function timeToMinutes(value: string): number {
  const [h, m] = value.split(':').map(Number);
  if (!Number.isFinite(h) || !Number.isFinite(m)) return 0;
  return h * 60 + m;
}

export function isQuietHours(now = new Date(), prefs = getPatientPreferences()): boolean {
  if (!prefs.quietHoursEnabled) return false;
  const start = timeToMinutes(prefs.quietHoursStart);
  const end = timeToMinutes(prefs.quietHoursEnd);
  const current = now.getHours() * 60 + now.getMinutes();
  if (start === end) return false;
  if (start < end) return current >= start && current < end;
  return current >= start || current < end;
}

export function shouldPlayReminderSound(prefs = getPatientPreferences()): boolean {
  if (!prefs.notificationsEnabled) return false;
  if (prefs.reminderSound === 'none') return false;
  if (isQuietHours(undefined, prefs)) return false;
  return true;
}

const PREFERENCE_CHANGE = CHANGE_EVENT;

export { PREFERENCE_CHANGE };
