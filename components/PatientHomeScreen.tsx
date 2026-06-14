import { useState, useEffect, useRef } from 'react';
import { Check, Clock, Plus, Settings, Star } from 'lucide-react';
import {
  subscribeRemindersForPatient,
  updateReminderDone,
  createReminder,
} from '../src/services/firestoreData';
import type { Reminder } from '../src/services/firestoreData';
import { usePatientPreferences } from '../src/hooks/usePatientPreferences';
import { shouldPlayReminderSound } from '../src/services/patientPreferences';
import { playReminderSound } from '../src/services/reminderSound';
import {
  subscribeRecentHubEvents,
  startHubLocationSync,
  type HubActivity,
} from '../src/services/roomTracking';
import { CurrentTaskCardSkeleton } from './Skeleton';
import { LogoMark } from './Logo';
import { Button, ErrorBanner, Field, Input, PageTitle } from './ui';

const CAREGIVER_PHONE_KEY = 'caregiverPhone';
const DEFAULT_CAREGIVER_PHONE = '+15551234567';

type PatientHomeScreenProps = {
  patientId: string | null;
  patientName: string | null;
  onSettings: () => void;
  onLinkAccount: () => void;
};

function formatTime(date: Date): string {
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
}

function defaultTimePickerValue(): string {
  const d = new Date();
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}

function formatTimeFromPicker(hhmm: string): string {
  if (!hhmm) return 'Soon';
  const [hours, minutes] = hhmm.split(':').map((x) => parseInt(x, 10));
  if (!Number.isFinite(hours) || !Number.isFinite(minutes)) return 'Soon';
  const d = new Date();
  d.setHours(hours, minutes, 0, 0);
  return d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
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
  const [addTimePicker, setAddTimePicker] = useState(defaultTimePickerValue);
  const [adding, setAdding] = useState(false);
  const [hubActivity, setHubActivity] = useState<HubActivity[]>([]);

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (!patientId) {
      setReminders([]);
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);
    const unsubscribe = subscribeRemindersForPatient(
      patientId,
      (list) => {
        setReminders(list.filter((r) => !r.done));
        setLoading(false);
      },
      (err) => {
        setError(err.message ?? 'Could not load reminders');
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, [patientId]);

  useEffect(() => {
    if (!patientId) {
      setHubActivity([]);
      return;
    }

    const unsubHub = subscribeRecentHubEvents(setHubActivity, (err) => {
      console.warn('Hub activity:', err);
    });
    const unsubMirror = startHubLocationSync(patientId, (err) => {
      console.warn('Hub mirror:', err);
    });

    return () => {
      unsubHub();
      unsubMirror();
    };
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

  const handleMarkDone = async () => {
    if (!currentTask) return;
    try {
      await updateReminderDone(currentTask.id);
      setReminders((prev) => prev.filter((r) => r.id !== currentTask.id));
    } catch {
      setError('Could not mark reminder as done. Try again.');
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
          <button type="button" className="patient-settings-btn" onClick={onSettings}>
            <Settings className="patient-settings-icon" aria-hidden />
            Settings
          </button>
        </div>

        <div className="patient-clock">
          <p className="patient-time">{formatTime(now)}</p>
          <p className="patient-date">{formatDate(now)}</p>
        </div>
      </header>

      <main className="patient-main">
        {error && <ErrorBanner message={error} />}

        <h2 className="patient-section-title">Today&apos;s tasks</h2>

        {loading ? (
          <CurrentTaskCardSkeleton />
        ) : currentTask ? (
          <article className="patient-task-card">
            <p className="patient-task-badge">
              <Star className="patient-task-badge-icon" aria-hidden fill="currentColor" />
              Up next
            </p>
            {currentTask.photoUrl && (
              <img src={currentTask.photoUrl} alt="" className="task-photo" />
            )}
            <p className="patient-task-name">{currentTask.title}</p>
            <p className="patient-task-schedule">
              <Clock className="patient-task-clock-icon" aria-hidden />
              {currentTask.time}
            </p>
            <button type="button" className="patient-btn patient-btn--done" onClick={handleMarkDone}>
              <Check className="patient-btn-icon" aria-hidden strokeWidth={3} />
              Mark as done
            </button>
          </article>
        ) : (
          <article className="patient-task-card patient-task-card--empty">
            <p className="patient-task-name">All caught up</p>
            <p className="patient-task-schedule">No reminders right now.</p>
          </article>
        )}

        {hubActivity.length > 0 && (
          <>
            <h2 className="patient-section-title">Room activity</h2>
            <ul className="patient-activity-list" aria-label="Recent room entries and exits">
              {hubActivity.map((event) => (
                <li key={`${event.roomId}_${event.id}`} className="patient-activity-item">
                  <div className="patient-activity-main">
                    <span className="patient-activity-room">{event.roomName}</span>
                    <span className="patient-activity-type">
                      {event.type === 'ENTRY' ? 'Entered' : event.type === 'EXIT' ? 'Left' : event.type}
                    </span>
                  </div>
                  {event.timeLabel && (
                    <span className="patient-activity-time">{event.timeLabel}</span>
                  )}
                </li>
              ))}
            </ul>
          </>
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
              <Field label="What time?">
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
