import { useState, useEffect, useRef } from 'react';
import {
  subscribeRemindersForPatient,
  updateReminderDone,
} from '../src/services/firestoreData';
import type { Reminder } from '../src/services/firestoreData';
import { usePatientPreferences } from '../src/hooks/usePatientPreferences';
import { shouldPlayReminderSound } from '../src/services/patientPreferences';
import { playReminderSound } from '../src/services/reminderSound';
import { CurrentTaskCardSkeleton } from './Skeleton';
import { LogoMark } from './Logo';
import { Button, Card, ErrorBanner, PageTitle, SectionLabel } from './ui';

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
    month: 'short',
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

  const caregiverPhone =
    typeof localStorage !== 'undefined'
      ? localStorage.getItem(CAREGIVER_PHONE_KEY) || DEFAULT_CAREGIVER_PHONE
      : DEFAULT_CAREGIVER_PHONE;
  const helpHref = `tel:${caregiverPhone.replace(/\s/g, '')}`;

  if (!patientId) {
    return (
      <div className="patient-screen" data-text-size={prefs.textSize}>
        <div className="page-shell" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <LogoMark size="lg" className="mb-6" />
          <PageTitle title="Link your account" subtitle="Enter the code from your caregiver to see reminders here." />
          <div className="stack">
            <Button className="w-full" onClick={onLinkAccount}>
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
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <LogoMark size="sm" className="flex-shrink-0 mt-0.5" />
            <div>
            <p className="patient-time">{formatTime(now)}</p>
            <p className="patient-date">{formatDate(now)}</p>
            {patientName && <p className="patient-greeting">Hi, {patientName}</p>}
            </div>
          </div>
          <Button variant="ghost" onClick={onSettings}>
            Settings
          </Button>
        </div>
      </header>

      <main className="patient-main">
        <SectionLabel>Current task</SectionLabel>

        {error && <ErrorBanner message={error} />}

        {loading ? (
          <CurrentTaskCardSkeleton />
        ) : currentTask ? (
          <Card className="task-card">
            {currentTask.photoUrl && (
              <img src={currentTask.photoUrl} alt="" className="task-photo" />
            )}
            <p className="task-title">{currentTask.title}</p>
            <p className="task-time">at {currentTask.time}</p>
            <Button className="w-full mt-4" onClick={handleMarkDone}>
              Mark as done
            </Button>
          </Card>
        ) : (
          <Card className="task-card task-card--empty">
            <p className="task-title">All caught up</p>
            <p className="task-time">No reminders right now.</p>
          </Card>
        )}
      </main>

      <footer className="patient-footer">
        <a href={helpHref} className="btn btn-danger w-full">
          Call for help
        </a>
      </footer>
    </div>
  );
}
