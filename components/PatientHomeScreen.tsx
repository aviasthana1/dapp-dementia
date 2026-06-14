import { useState, useEffect, useRef } from 'react';
import { Check, Clock, Plus, Settings, Star } from 'lucide-react';
import {
  subscribeRemindersForPatient,
  updateReminderDone,
  createReminder,
  sortRemindersByTime,
} from '../src/services/firestoreData';
import type { Reminder } from '../src/services/firestoreData';
import { usePatientPreferences } from '../src/hooks/usePatientPreferences';
import { shouldPlayReminderSound } from '../src/services/patientPreferences';
import { playReminderSound } from '../src/services/reminderSound';
import { CurrentTaskCardSkeleton } from './Skeleton';
import { LogoMark } from './Logo';
import { Button, ErrorBanner, Field, Input, PageTitle } from './ui';
import {
  formatClockTime,
  formatTimeFromPicker,
  formatReminderTime,
  defaultTimePickerValue,
} from '../src/services/timeFormat';

const CAREGIVER_PHONE_KEY = 'caregiverPhone';
const DEFAULT_CAREGIVER_PHONE = '+15551234567';

type PatientHomeScreenProps = {
  patientId: string | null;
  patientName: string | null;
  onSettings: () => void;
  onLinkAccount: () => void;
};

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
}

export function PatientHomeScreen({
  patientId,
  patientName,
  onSettings,
  onLinkAccount,
}: PatientHomeScreenProps) {
  const [now, setNow] = useState(new Date());
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [loading, setLoading] = useState(!!patientId);
  const [error, setError] = useState<string | null>(null);
  const { prefs } = usePatientPreferences();
  const prevTaskIdRef = useRef<string | null>(null);

  const [showAddForm, setShowAddForm] = useState(false);
  const [addTitle, setAddTitle] = useState('');
  const [addTimePicker, setAddTimePicker] = useState(() => defaultTimePickerValue());
  const [adding, setAdding] = useState(false);
  const [markingId, setMarkingId] = useState<string | null>(null);
  const completedIdsRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (!patientId) {
      setReminders([]);
      setLoading(false);
      setError(null);
      completedIdsRef.current.clear();
      return;
    }

    completedIdsRef.current.clear();

    setLoading(true);
    setError(null);
    const unsubscribe = subscribeRemindersForPatient(
      patientId,
      (list) => {
        setReminders(
          list.filter((r) => r.done !== true && !completedIdsRef.current.has(r.id))
        );
        setLoading(false);
      },
      (err) => {
        setError(err.message ?? 'Could not load reminders');
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, [patientId]);

  const currentTask = reminders[0] ?? null;

  useEffect(() => {
    if (!currentTask || loading) return;
    const prev = prevTaskIdRef.current;
    prevTaskIdRef.current = currentTask.id;
    if (prev && prev !== currentTask.id && shouldPlayReminderSound(prefs)) {
      void playReminderSound(prefs.reminderSound);
    }
  }, [currentTask?.id, loading, prefs]);

  const handleMarkDone = async (reminderId: string) => {
    if (markingId === reminderId) return;
    const task = reminders.find((r) => r.id === reminderId);
    if (!task) return;

    setMarkingId(reminderId);
    setError(null);
    completedIdsRef.current.add(reminderId);
    setReminders((prev) => prev.filter((r) => r.id !== reminderId));
    try {
      await updateReminderDone(reminderId);
    } catch {
      completedIdsRef.current.delete(reminderId);
      setReminders((prev) => sortRemindersByTime([...prev, task]));
      setError('Could not mark reminder as done. Try again.');
    } finally {
      setMarkingId(null);
    }
  };

  const handleAddReminder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientId || !addTitle.trim()) return;
    setAdding(true);
    setError(null);
    try {
      await createReminder(patientId, {
        title: addTitle.trim(),
        time: formatTimeFromPicker(addTimePicker),
      });
      setAddTitle('');
      setAddTimePicker(defaultTimePickerValue());
      setShowAddForm(false);
    } catch {
      setError('Could not save your reminder. Try again.');
    } finally {
      setAdding(false);
    }
  };

  const caregiverPhone =
    typeof localStorage !== 'undefined'
      ? localStorage.getItem(CAREGIVER_PHONE_KEY) || DEFAULT_CAREGIVER_PHONE
      : DEFAULT_CAREGIVER_PHONE;
  const helpHref = `tel:${caregiverPhone.replace(/\s/g, '')}`;
  const displayName = patientName?.trim() || 'there';

  if (!patientId) {
    return (
      <div className="patient-screen patient-screen--link" data-text-size={prefs.textSize}>
        <div className="patient-link-shell">
          <LogoMark size="lg" className="patient-link-logo" />
          <PageTitle title="Link your account" subtitle="Enter the code from your caregiver to see reminders here." />
          <div className="stack">
            <Button className="w-full patient-btn patient-btn--primary" onClick={onLinkAccount}>
              Enter linking code
            </Button>
            <Button variant="ghost" className="w-full" onClick={onSettings}>
              Settings
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="patient-screen" data-text-size={prefs.textSize}>
      <header className="patient-header">
        <div className="patient-header-top">
          <div className="patient-header-brand">
            <LogoMark size="sm" className="patient-header-logo" />
            <p className="patient-greeting">Hello, {displayName}!</p>
          </div>
          <button
            type="button"
            className="patient-settings-btn"
            onClick={onSettings}
            aria-label="Settings"
          >
            <Settings className="patient-settings-icon" aria-hidden />
          </button>
        </div>

        <div className="patient-clock">
          <p className="patient-time">{formatClockTime(now)}</p>
          <p className="patient-date">{formatDate(now)}</p>
        </div>
      </header>

      <main className="patient-main">
        {error && <ErrorBanner message={error} />}

        <h2 className="patient-section-title">Today&apos;s tasks</h2>

        {loading ? (
          <CurrentTaskCardSkeleton />
        ) : reminders.length === 0 ? (
          <article className="patient-task-card patient-task-card--empty">
            <p className="patient-task-name">All caught up</p>
            <p className="patient-task-schedule">No reminders right now.</p>
          </article>
        ) : (
          <ul className="patient-task-list" aria-label="Today's reminders">
            {reminders.map((task, index) => (
              <li key={task.id}>
                <article className="patient-task-card">
                  {index === 0 && (
                    <p className="patient-task-badge">
                      <Star className="patient-task-badge-icon" aria-hidden fill="currentColor" />
                      Up next
                    </p>
                  )}
                  {task.photoUrl && (
                    <img src={task.photoUrl} alt="" className="task-photo" />
                  )}
                  <p className="patient-task-name">{task.title}</p>
                  <p className="patient-task-schedule">
                    <Clock className="patient-task-clock-icon" aria-hidden />
                    {formatReminderTime(task.time)}
                  </p>
                  <button
                    type="button"
                    className="patient-btn patient-btn--done"
                    onClick={() => handleMarkDone(task.id)}
                    disabled={markingId === task.id}
                    aria-label={`Mark ${task.title} as done`}
                  >
                    <Check className="patient-btn-icon" aria-hidden strokeWidth={3} />
                    {markingId === task.id ? 'Saving…' : 'Mark as done'}
                  </button>
                </article>
              </li>
            ))}
          </ul>
        )}

        <h2 className="patient-section-title">Add your own reminder</h2>

        {showAddForm ? (
          <div className="patient-add-form">
            <form onSubmit={handleAddReminder} className="stack">
              <Field label="What do you want to remember?">
                <Input
                  value={addTitle}
                  onChange={(e) => setAddTitle(e.target.value)}
                  placeholder="e.g. Drink water"
                  required
                  autoComplete="off"
                />
              </Field>
              <Field label="What time? (24-hour)">
                <Input
                  type="time"
                  value={addTimePicker}
                  onChange={(e) => setAddTimePicker(e.target.value)}
                  required
                />
              </Field>
              <button
                type="submit"
                className="patient-btn patient-btn--primary"
                disabled={adding || !addTitle.trim()}
              >
                {adding ? 'Saving…' : 'Save reminder'}
              </button>
              <button
                type="button"
                className="patient-btn patient-btn--ghost"
                onClick={() => setShowAddForm(false)}
                disabled={adding}
              >
                Cancel
              </button>
            </form>
          </div>
        ) : (
          <button
            type="button"
            className="patient-btn patient-btn--add"
            onClick={() => setShowAddForm(true)}
          >
            <Plus className="patient-btn-icon" aria-hidden strokeWidth={3} />
            Add a reminder
          </button>
        )}
      </main>

      <footer className="patient-footer">
        <a href={helpHref} className="patient-btn patient-btn--help">
          <span className="patient-sos-badge" aria-hidden>
            SOS
          </span>
          Call for Help
        </a>
      </footer>
    </div>
  );
}
