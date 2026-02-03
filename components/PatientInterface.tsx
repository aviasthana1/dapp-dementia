import { useState, useEffect } from 'react';
import { getRemindersSample } from '../src/services/firestoreData';
import type { Reminder } from '../src/services/firestoreData';
import { Bell, Settings, Plus, Clock, Heart } from 'lucide-react';

type PatientInterfaceProps = {
  onSettings: () => void;
};

export function PatientInterface({ onSettings }: PatientInterfaceProps) {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getRemindersSample(5)
      .then(setReminders)
      .catch((err) => setError(err?.message ?? 'Failed to load'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen app-page p-8 max-w-xl mx-auto">
      <button
        onClick={onSettings}
        className="btn-big w-full mb-6 border-2 border-gray-300 text-gray-800 bg-white hover:bg-gray-50 rounded-2xl flex items-center justify-center gap-2 shadow-sm"
      >
        <Settings className="w-6 h-6" /> Settings
      </button>

      <div className="card p-6 mb-8">
        <h2 className="heading-big mb-2 flex items-center gap-2">
          <Bell className="w-8 h-8 text-green-600" /> My reminders
        </h2>
        <p className="text-xl text-gray-600 mb-1">
          What to do today. Reminders can come from your caregiver or ones you add yourself.
        </p>
        <p className="text-base text-gray-500">
          Tap “Add a reminder” below to add your own (e.g. call a friend, take a walk).
        </p>
      </div>

      {/* From caregiver */}
      <p className="section-title flex items-center gap-2">
        <Heart className="w-5 h-5 text-blue-600" /> From your caregiver
      </p>
      {error && (
        <div className="p-4 mb-6 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xl">
          {error}
        </div>
      )}
      {loading ? (
        <p className="text-xl text-gray-600 mb-8">Loading…</p>
      ) : (
        <ul className="space-y-4 mb-8">
          {reminders.length === 0 ? (
            <li className="card p-6 rounded-2xl text-center">
              <p className="text-xl text-gray-600 mb-2">No reminders from your caregiver yet.</p>
              <p className="text-base text-gray-500">
                After you link your account with their code, their reminders will show here.
              </p>
            </li>
          ) : (
            reminders.map((r) => (
              <li key={r.id} className="card p-5 rounded-2xl flex items-start gap-4 border-l-4 border-blue-500">
                <span className="text-2xl flex-shrink-0">🔔</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xl font-semibold text-gray-900">{r.title}</p>
                  <p className="text-lg text-gray-600 mt-1 flex items-center gap-1">
                    <Clock className="w-5 h-5" /> {r.time}
                  </p>
                </div>
              </li>
            ))
          )}
        </ul>
      )}

      {/* Reminders I added */}
      <p className="section-title flex items-center gap-2">
        <Plus className="w-5 h-5 text-green-600" /> Reminders I added
      </p>
      <div className="card p-6 rounded-2xl mb-4 text-center">
        <p className="text-xl text-gray-600 mb-4">
          Your own reminders (e.g. “Call Mary at 3pm”, “Water the plants”).
        </p>
        <button
          type="button"
          className="btn-big w-full bg-green-600 hover:bg-green-700 text-white border-green-600 rounded-2xl flex items-center justify-center gap-2 shadow-sm"
        >
          <Plus className="w-6 h-6" /> Add a reminder
        </button>
        <p className="text-base text-gray-500 mt-3">
          (Add reminder form will appear here — title and time)
        </p>
      </div>
      <ul className="space-y-4">
        <li className="card p-5 rounded-2xl flex items-start gap-4 border-l-4 border-green-500 opacity-75">
          <span className="text-2xl flex-shrink-0">📝</span>
          <div>
            <p className="text-xl font-semibold text-gray-900">Call Mary</p>
            <p className="text-lg text-gray-600 flex items-center gap-1">
              <Clock className="w-5 h-5" /> 3:00 PM
            </p>
            <p className="text-sm text-gray-500 mt-1">(Example — you can add your own)</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
