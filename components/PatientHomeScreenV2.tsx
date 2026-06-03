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
import { ErrorBanner, Field, Input, PageTitle } from './ui';

const CAREGIVER_PHONE_KEY = 'caregiverPhone';
const DEFAULT_CAREGIVER_PHONE = '+15551234567';

// ── Dementia-friendly colour palette ──────────────────────────────────────────
const C = {
  bgPage:       '#D6E8F7', // light blue page background
  bgHeader:     '#B8D4EE', // slightly deeper blue for header
  bgCard:       '#FFFFFF', // white cards for strong contrast
  bgCardNext:   '#EAF4FF', // pale blue tint for "up next" card
  bgDone:       '#22A86B', // green for mark-done button
  bgDoneHover:  '#1A8A57',
  bgAdd:        '#2563EB', // blue for add reminder button
  bgAddHover:   '#1D4ED8',
  bgHelp:       '#DC2626', // bright red for call-for-help
  bgHelpHover:  '#B91C1C',
  bgCancel:     '#E5E7EB',
  txtDark:      '#1E293B', // near-black for maximum contrast
  txtMuted:     '#475569',
  txtWhite:     '#FFFFFF',
  txtTime:      '#1D4ED8', // blue for time labels
  border:       '#93C5FD', // soft blue border
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
  const prevTaskIdRef = useRef<string | null>(null);

  // Add reminder form state
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
      <div style={{ minHeight: '100dvh', background: C.bgPage, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem 1.5rem' }}>
        <LogoMark size="lg" className="mb-6" />
        <PageTitle title="Link your account" subtitle="Enter the code from your caregiver to see reminders here." />
        <div style={{ width: '100%', maxWidth: '24rem', display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
          <button
            onClick={onLinkAccount}
            style={{ width: '100%', padding: '1.1rem', fontSize: '1.25rem', fontWeight: 700, background: C.bgAdd, color: C.txtWhite, border: 'none', borderRadius: '1rem', cursor: 'pointer', boxShadow: C.shadow }}
          >
            Enter linking code
          </button>
          <button
            onClick={onSettings}
            style={{ width: '100%', padding: '1rem', fontSize: '1.125rem', fontWeight: 600, background: 'transparent', color: C.txtMuted, border: `2px solid ${C.border}`, borderRadius: '1rem', cursor: 'pointer' }}
          >
            Settings
          </button>
        </div>
      </div>
    );
  }

  // ── Main patient screen ────────────────────────────────────────────────────
  return (
    <div style={{ minHeight: '100dvh', background: C.bgPage, display: 'flex', flexDirection: 'column' }}>

      {/* ── Header ── */}
      <header style={{ background: C.bgHeader, padding: '1.25rem 1.5rem 1rem', borderBottom: `2px solid ${C.border}` }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <LogoMark size="sm" className="flex-shrink-0 mt-0.5" />
            <div>
              {patientName && (
                <p style={{ fontSize: '1.5rem', fontWeight: 800, color: C.txtDark, marginBottom: '0.1rem' }}>
                  Hello, {patientName}!
                </p>
              )}
              {/* Large clock like reference screenshot */}
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
      </header>

      {/* ── Main content ── */}
      <main style={{ flex: 1, padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>

        {error && <ErrorBanner message={error} />}

        {/* Section label */}
        <p style={{ fontSize: '1rem', fontWeight: 700, color: C.txtMuted, textTransform: 'uppercase', letterSpacing: '0.07em' }}>
          Today's Tasks
        </p>

        {loading ? (
          <CurrentTaskCardSkeleton />
        ) : reminders.length === 0 ? (
          // All done state
          <div style={{ background: C.bgCard, borderRadius: '1.25rem', padding: '2rem 1.5rem', textAlign: 'center', boxShadow: C.shadow, border: `2px solid ${C.borderCard}` }}>
            <p style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎉</p>
            <p style={{ fontSize: '1.5rem', fontWeight: 700, color: C.txtDark }}>All caught up!</p>
            <p style={{ fontSize: '1.125rem', color: C.txtMuted, marginTop: '0.5rem' }}>No reminders right now.</p>
          </div>
        ) : (
          // Reminder list sorted by time
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {reminders.map((reminder, index) => (
              <li key={reminder.id}>
                <div style={{
                  background: index === 0 ? C.bgCardNext : C.bgCard,
                  borderRadius: '1.25rem',
                  padding: '1.25rem 1.5rem',
                  boxShadow: C.shadow,
                  border: `2px solid ${index === 0 ? '#3B82F6' : C.borderCard}`,
                }}>
                  {/* Up next badge */}
                  {index === 0 && (
                    <p style={{ fontSize: '0.875rem', fontWeight: 700, color: '#2563EB', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.5rem' }}>
                      ⭐ Up next
                    </p>
                  )}
                  {reminder.photoUrl && (
                    <img src={reminder.photoUrl} alt="" style={{ width: '4.5rem', height: '4.5rem', objectFit: 'cover', borderRadius: '0.75rem', marginBottom: '0.75rem', display: 'block' }} />
                  )}
                  {/* Task title — large and bold */}
                  <p style={{ fontSize: '1.5rem', fontWeight: 800, color: C.txtDark, lineHeight: 1.2, marginBottom: '0.4rem' }}>
                    {reminder.title}
                  </p>
                  {/* Time — large and blue */}
                  <p style={{ fontSize: '1.25rem', fontWeight: 700, color: C.txtTime, marginBottom: '1rem' }}>
                    🕐 {reminder.time}
                  </p>
                  {/* Mark done button */}
                  <button
                    onClick={() => handleMarkDone(reminder.id)}
                    style={{ width: '100%', padding: '0.9rem', fontSize: '1.2rem', fontWeight: 700, background: C.bgDone, color: C.txtWhite, border: 'none', borderRadius: '0.875rem', cursor: 'pointer', boxShadow: '0 2px 6px rgba(34,168,107,0.25)' }}
                  >
                    ✓ Mark as done
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* ── Add your own reminder ── */}
        <div style={{ marginTop: '0.5rem' }}>
          <p style={{ fontSize: '1rem', fontWeight: 700, color: C.txtMuted, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.75rem' }}>
            Add Your Own Reminder
          </p>

          {!showAddForm ? (
            <button
              onClick={() => setShowAddForm(true)}
              style={{ width: '100%', padding: '1.1rem', fontSize: '1.25rem', fontWeight: 700, background: C.bgAdd, color: C.txtWhite, border: 'none', borderRadius: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', boxShadow: C.shadow }}
            >
              <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>+</span> Add a reminder
            </button>
          ) : (
            <div style={{ background: C.bgCard, borderRadius: '1.25rem', padding: '1.25rem 1.5rem', boxShadow: C.shadow, border: `2px solid ${C.borderCard}` }}>
              <form onSubmit={handleAddReminder} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '1.1rem', fontWeight: 700, color: C.txtDark, marginBottom: '0.5rem' }}>
                    What do you want to remember?
                  </label>
                  <input
                    type="text"
                    value={addTitle}
                    onChange={(e) => setAddTitle(e.target.value)}
                    placeholder="e.g. Take afternoon walk"
                    style={{ width: '100%', padding: '0.85rem 1rem', fontSize: '1.1rem', fontWeight: 500, color: C.txtDark, border: `2px solid ${C.border}`, borderRadius: '0.75rem', outline: 'none', boxSizing: 'border-box' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '1.1rem', fontWeight: 700, color: C.txtDark, marginBottom: '0.5rem' }}>
                    What time?
                  </label>
                  <input
                    type="time"
                    value={addTime}
                    onChange={(e) => setAddTime(e.target.value)}
                    style={{ width: '100%', padding: '0.85rem 1rem', fontSize: '1.1rem', fontWeight: 500, color: C.txtDark, border: `2px solid ${C.border}`, borderRadius: '0.75rem', outline: 'none', boxSizing: 'border-box' }}
                  />
                </div>
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
            </div>
          )}
        </div>
      </main>

      {/* ── Footer: Call for help ── */}
      <footer style={{ padding: '1rem 1.5rem 1.5rem', borderTop: `2px solid ${C.border}`, background: C.bgPage }}>
        <a
          href={helpHref}
          style={{ display: 'block', width: '100%', padding: '1.1rem', fontSize: '1.4rem', fontWeight: 800, background: C.bgHelp, color: C.txtWhite, border: 'none', borderRadius: '1rem', textAlign: 'center', textDecoration: 'none', boxShadow: '0 4px 12px rgba(220,38,38,0.35)', letterSpacing: '0.01em' }}
        >
          🆘 Call for Help
        </a>
      </footer>
    </div>
  );
}
