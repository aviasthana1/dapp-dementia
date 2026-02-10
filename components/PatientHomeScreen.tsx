import { useState, useEffect } from 'react';
import { getRemindersSample, updateReminderDone } from '../src/services/firestoreData';
import type { Reminder } from '../src/services/firestoreData';
import { ListTodo, Sun, Phone, Settings } from 'lucide-react';
import { CurrentTaskCardSkeleton } from './Skeleton';

const CAREGIVER_PHONE_KEY = 'caregiverPhone';
const DEFAULT_CAREGIVER_PHONE = '+15551234567';

type PatientHomeScreenProps = {
  onSettings: () => void;
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

export function PatientHomeScreen({ onSettings }: PatientHomeScreenProps) {
  const [now, setNow] = useState(new Date());
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    getRemindersSample(20)
      .then((list) => setReminders(list.filter((r) => !r.done)))
      .catch(() => setReminders([]))
      .finally(() => setLoading(false));
  }, []);

  const currentTask = reminders[0] ?? null;

  const handleMarkDone = async () => {
    if (!currentTask) return;
    try {
      await updateReminderDone(currentTask.id);
      setReminders((prev) => prev.filter((r) => r.id !== currentTask.id));
    } catch {
      // keep UI unchanged on error
    }
  };

  const caregiverPhone =
    typeof localStorage !== 'undefined'
      ? localStorage.getItem(CAREGIVER_PHONE_KEY) || DEFAULT_CAREGIVER_PHONE
      : DEFAULT_CAREGIVER_PHONE;
  const helpHref = `tel:${caregiverPhone.replace(/\s/g, '')}`;

  return (
    <div
      className="min-h-screen flex flex-col text-gray-900 bg-[#FAFAF9]"
      style={{
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      {/* Top: time and date — readable size, safe area */}
      <header
        className="flex-shrink-0 border-b border-gray-200 bg-[#FAFAF9]"
        style={{
          paddingTop: 'max(1rem, env(safe-area-inset-top))',
          paddingLeft: 'max(1.5rem, env(safe-area-inset-left))',
          paddingRight: 'max(1.5rem, env(safe-area-inset-right))',
          paddingBottom: '1rem',
        }}
      >
        <p className="text-2xl font-bold text-gray-900 leading-tight">
          {formatTime(now)}
        </p>
        <p className="text-xl font-bold text-gray-900 mt-1 leading-tight">
          {formatDate(now)}
        </p>
        <button
          type="button"
          onClick={onSettings}
          className="mt-4 flex items-center gap-2 text-lg font-medium text-gray-600 hover:text-gray-900"
          aria-label="Open settings"
        >
          <Settings className="w-5 h-5" /> Settings
        </button>
      </header>

      {/* Center: Current Task card — balanced spacing */}
      <main
        className="flex-1 flex flex-col min-h-0 overflow-auto"
        style={{
          paddingLeft: 'max(1.5rem, env(safe-area-inset-left))',
          paddingRight: 'max(1.5rem, env(safe-area-inset-right))',
          paddingTop: '1.5rem',
          paddingBottom: '1.5rem',
        }}
      >
        <h2 className="text-xl font-bold text-gray-900 mb-3">Current Task</h2>

        {loading ? (
          <CurrentTaskCardSkeleton />
        ) : currentTask ? (
          <div className="card p-6 rounded-2xl border-2 border-gray-300 bg-white shadow-card">
            <div className="flex flex-col items-center gap-5">
              {currentTask.photoUrl ? (
                <img
                  src={currentTask.photoUrl}
                  alt=""
                  className="w-24 h-24 object-cover rounded-2xl border-2 border-gray-300 flex-shrink-0"
                />
              ) : (
                <ListTodo
                  className="w-20 h-20 text-gray-900 flex-shrink-0"
                  strokeWidth={2}
                  aria-hidden
                />
              )}
              <p className="text-2xl font-bold text-gray-900 text-center">{currentTask.title}</p>
              <p className="text-xl text-gray-700">at {currentTask.time}</p>
              <button
                type="button"
                onClick={handleMarkDone}
                className="w-full py-5 px-6 text-2xl font-bold bg-green-600 hover:bg-green-700 text-white rounded-2xl border-4 border-green-800 transition-colors"
              >
                Mark as Done
              </button>
            </div>
          </div>
        ) : (
          <div className="card p-6 rounded-2xl border-2 border-green-200 bg-green-50/80 shadow-card">
            <div className="flex flex-col items-center gap-4">
              <Sun
                className="w-16 h-16 text-green-600 flex-shrink-0"
                strokeWidth={2}
                aria-hidden
              />
              <p className="text-xl font-bold text-gray-900 text-center leading-relaxed">
                Relax, you are all caught up
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Bottom: Help button — clean bar, no heavy border */}
      <footer
        className="flex-shrink-0 border-t border-gray-200 bg-[#FAFAF9]"
        style={{
          paddingLeft: 'max(1.5rem, env(safe-area-inset-left))',
          paddingRight: 'max(1.5rem, env(safe-area-inset-right))',
          paddingTop: '1rem',
          paddingBottom: 'max(1rem, env(safe-area-inset-bottom))',
        }}
      >
        <a
          href={helpHref}
          className="btn-help flex items-center justify-center gap-2 w-full py-4 px-5 text-lg font-bold rounded-2xl min-h-[56px] transition-colors bg-red-600 text-white border-2 border-red-700 hover:bg-red-700 hover:border-red-800"
        >
          <Phone className="w-6 h-6 flex-shrink-0 text-white" aria-hidden /> Help
        </a>
      </footer>
    </div>
  );
}
