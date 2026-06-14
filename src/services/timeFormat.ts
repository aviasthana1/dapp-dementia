const TIME_24: Intl.DateTimeFormatOptions = {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
};

/** Large clock display (patient header). */
export function formatClockTime(date: Date): string {
  return date.toLocaleTimeString(undefined, TIME_24);
}

/** Date + time for room activity and location history. */
export function formatDateTime24(ms: number): string {
  if (!Number.isFinite(ms) || ms <= 0) return "Just now";
  return new Date(ms).toLocaleString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    ...TIME_24,
  });
}

/** Normalize `<input type="time">` value to HH:MM for Firestore. */
export function formatTimeFromPicker(hhmm: string): string {
  if (!hhmm) return "Soon";
  const [hours, minutes] = hhmm.split(":").map((x) => parseInt(x, 10));
  if (!Number.isFinite(hours) || !Number.isFinite(minutes)) return "Soon";
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

/** Display a stored reminder time — converts legacy AM/PM strings to 24h. */
export function formatReminderTime(time: string): string {
  const trimmed = time.trim();
  if (!trimmed) return "";

  const hhmm = trimmed.match(/^(\d{1,2}):(\d{2})$/);
  if (hhmm) {
    return `${String(parseInt(hhmm[1], 10)).padStart(2, "0")}:${hhmm[2]}`;
  }

  const parsed = Date.parse(`1970-01-01 ${trimmed}`);
  if (Number.isFinite(parsed)) {
    return new Date(parsed).toLocaleTimeString(undefined, TIME_24);
  }

  return trimmed;
}

export function defaultTimePickerValue(date = new Date()): string {
  return `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
}
