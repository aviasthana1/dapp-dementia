import { useRoomReminder } from '../src/services/useRoomReminder';
import { useState, useEffect, useRef } from 'react';
import {
  subscribeRemindersForPatient,
  updateReminderDone,
  createReminder,
} from '../src/services/firestoreData';
import type { Reminder } from '../src/services/firestoreData';
import { usePatientPreferences } from '../src/hooks/usePatientPreferences';
import { shouldPlayReminderSound } from '../src/services/patientPreferences';
import { playReminderSound } from '../src/services/reminderSound';
import { CurrentTaskCardSkeleton } from './Skeleton';
import { LogoMark } from './Logo';
import { Button, Card, ErrorBanner, Field, Input, Page, PageTitle, SectionLabel } from './ui';

const CAREGIVER_PHONE_KEY = 'caregiverPhone';
const DEFAULT_CAREGIVER_PHONE = '+15551234567';

// ── Dementia-friendly colour palette ──────────────────────────────────────────
const C = {
  bgPage:       '#D6E8F7',
  bgHeader:     '#B8D4EE',
  bgCard:       '#FFFFFF',
  bgCardNext:   '#EAF4FF',
  bgDone:       '#22A86B',
  bgAdd:        '#2563EB',
  bgHelp:       '#DC2626',
  bgCancel:     '#E5E7EB',
  txtDark:      '#1E293B',
  txtMuted:     '#475569',
  txtWhite:     '#FFFFFF',
  txtTime:      '#1D4ED8',
  border:       '#93C5FD',
  borderCard:   '#BFDBFE',
  shadow:       '0 2px 8px rgba(30,41,59,0.10)',
};

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
  useRoomReminder(patientId);
  const prevTaskIdRef = useRef<string | null>(null);

  const [showAddForm, setShowAddForm] = useState(false);
  const [addTitle, setAddTitle] = useState('');
  const [addTime, setAddTime] = useState('');
  const [adding, setAdding] = useState(false);
  const [addError, setAddError] = useState<string | null>(null);

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
        const sorted = list
          .filter((r) => !r.done)
          .sort((a, b) => a.time.localeCompare(b.time));
        setReminders(sorted);
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
    try {
      await updateReminderDone(reminderId);
      setReminders((prev) => prev.filter((r) => r.id !== reminderId));
    } catch {
      setError('Could not mark reminder as done. Try again.');
    }
  };

  const handleAddReminder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientId) return;
    const title = addTitle.trim();
    const time = addTime.trim();
    if (!title || !time) {
      setAddError('Please enter both a reminder and a time.');
      return;
    }
    setAdding(true);
    setAddError(null);
    try {
      await createReminder(patientId, { title, time });
      setAddTitle('');
      setAddTime('');
      setShowAddForm(false);
    } catch {
      setAddError('Could not add reminder. Try again.');
    } finally {
      setAdding(false);
    }
  };

  const caregiverPhone =
    typeof localStorage !== 'undefined'
      ? localStorage.getItem(CAREGIVER_PHONE_KEY) || DEFAULT_CAREGIVER_PHONE
      : DEFAULT_CAREGIVER_PHONE;
  const helpHref = `tel:${caregiverPhone.replace(/\s/g, '')}`;

  // ── Not linked yet ─────────────────────────────────────────────────────────
  if (!patientId) {
    return (
      <div style={{ minHeight: '100dvh', background: C.bgPage }}>
        <Page>
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
        </Page>
      </div>
    );
  }

  // ── Main patient screen ────────────────────────────────────────────────────
  return (
    <div style={{ minHeight: '100dvh', background: C.bgPage, display: 'flex', flexDirection: 'column' }}>

      {/* ── Header — same width constraint as Page ── */}
      <div style={{ background: C.bgHeader, borderBottom: `2px solid ${C.border}` }}>
        <div style={{ maxWidth: '32rem', margin: '0 auto', padding: '1.25rem 1.5rem 1rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <LogoMark size="sm" className="flex-shrink-0 mt-0.5" />
              <div>
                {patientName && (
                  <p style={{ fontSize: '1.5rem', fontWeight: 800, color: C.txtDark, marginBottom: '0.1rem' }}>
                    Hello, {patientName}!
                  </p>
                )}
                <p style={{ fontSize: '2.25rem', fontWeight: 800, color: C.txtDark, letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums', lineHeight: 1.1 }}>
                  {formatTime(now)}
                </p>
                <p style={{ fontSize: '1.125rem', fontWeight: 500, color: C.txtMuted, marginTop: '0.25rem' }}>
                  {formatDate(now)}
                </p>
              </div>
            </div>
            <button
              onClick={onSettings}
              style={{ padding: '0.6rem 1rem', fontSize: '1rem', fontWeight: 600, background: 'rgba(255,255,255,0.6)', color: C.txtDark, border: `1px solid ${C.border}`, borderRadius: '0.75rem', cursor: 'pointer', flexShrink: 0 }}
            >
              ⚙ Settings
            </button>
          </div>
        </div>
      </div>

      {/* ── Main content — uses same Page max-width ── */}
      <div style={{ flex: 1 }}>
        <Page>
          {error && <ErrorBanner message={error} />}

          <SectionLabel>Today's Tasks</SectionLabel>

          {loading ? (
            <CurrentTaskCardSkeleton />
          ) : reminders.length === 0 ? (
            <Card>
              <p style={{ fontSize: '1.5rem', fontWeight: 700, color: C.txtDark, textAlign: 'center' }}>🎉 All caught up!</p>
              <p style={{ fontSize: '1.125rem', color: C.txtMuted, textAlign: 'center', marginTop: '0.5rem' }}>No reminders right now.</p>
            </Card>
          ) : (
            <ul className="stack">
              {reminders.map((reminder, index) => (
                <li key={reminder.id}>
                  <Card style={{
                    background: index === 0 ? C.bgCardNext : C.bgCard,
                    border: `2px solid ${index === 0 ? '#3B82F6' : C.borderCard}`,
                    opacity: index === 0 ? 1 : 0.8,
                  }}>
                    {index === 0 && (
                      <p style={{ fontSize: '0.875rem', fontWeight: 700, color: '#2563EB', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.5rem' }}>
                        ⭐ Up next
                      </p>
                    )}
                    {reminder.photoUrl && (
                      <img src={reminder.photoUrl} alt="" style={{ width: '4rem', height: '4rem', objectFit: 'cover', borderRadius: '0.75rem', marginBottom: '0.75rem', display: 'block' }} />
                    )}
                    <p style={{ fontSize: '1.5rem', fontWeight: 800, color: C.txtDark, lineHeight: 1.2, marginBottom: '0.4rem' }}>
                      {reminder.title}
                    </p>
                    <p style={{ fontSize: '1.25rem', fontWeight: 700, color: C.txtTime, marginBottom: '1rem' }}>
                      🕐 {reminder.time}
                    </p>
                    <button
                      onClick={() => handleMarkDone(reminder.id)}
                      style={{ width: '100%', padding: '0.9rem', fontSize: '1.2rem', fontWeight: 700, background: C.bgDone, color: C.txtWhite, border: 'none', borderRadius: '0.875rem', cursor: 'pointer' }}
                    >
                      ✓ Mark as done
                    </button>
                  </Card>
                </li>
              ))}
            </ul>
          )}

          {/* ── Add your own reminder ── */}
          <SectionLabel>Add Your Own Reminder</SectionLabel>

          {!showAddForm ? (
            <button
              onClick={() => setShowAddForm(true)}
              style={{ width: '100%', padding: '1.1rem', fontSize: '1.25rem', fontWeight: 700, background: C.bgAdd, color: C.txtWhite, border: 'none', borderRadius: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
            >
              <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>+</span> Add a reminder
            </button>
          ) : (
            <Card>
              <form onSubmit={handleAddReminder} className="stack">
                <Field label="What do you want to remember?">
                  <Input
                    id="add-title"
                    type="text"
                    value={addTitle}
                    onChange={(e) => setAddTitle(e.target.value)}
                    placeholder="e.g. Take afternoon walk"
                  />
                </Field>
                <Field label="What time?">
                  <Input
                    id="add-time"
                    type="time"
                    value={addTime}
                    onChange={(e) => setAddTime(e.target.value)}
                  />
                </Field>
                {addError && <ErrorBanner message={addError} />}
                <button
                  type="submit"
                  disabled={adding}
                  style={{ width: '100%', padding: '1rem', fontSize: '1.2rem', fontWeight: 700, background: C.bgDone, color: C.txtWhite, border: 'none', borderRadius: '0.875rem', cursor: adding ? 'not-allowed' : 'pointer', opacity: adding ? 0.7 : 1 }}
                >
                  {adding ? 'Saving…' : '✓ Save reminder'}
                </button>
                <button
                  type="button"
                  onClick={() => { setShowAddForm(false); setAddTitle(''); setAddTime(''); setAddError(null); }}
                  style={{ width: '100%', padding: '0.85rem', fontSize: '1.1rem', fontWeight: 600, background: C.bgCancel, color: C.txtMuted, border: 'none', borderRadius: '0.875rem', cursor: 'pointer' }}
                >
                  Cancel
                </button>
              </form>
            </Card>
          )}

          {/* ── Call for help ── */}
          <a
            href={helpHref}
            style={{ display: 'block', width: '100%', padding: '1.1rem', fontSize: '1.4rem', fontWeight: 800, background: C.bgHelp, color: C.txtWhite, border: 'none', borderRadius: '1rem', textAlign: 'center', textDecoration: 'none', marginTop: '0.5rem', boxShadow: '0 4px 12px rgba(220,38,38,0.35)' }}
          >
            🆘 Call for Help
          </a>
        </Page>
      </div>
    </div>
  );
}
