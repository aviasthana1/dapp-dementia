import { useState, useEffect } from 'react';
import { getRemindersForPatient } from '../src/services/firestoreData';
import type { Reminder } from '../src/services/firestoreData';
import { ArrowLeft, Bell, Plus, LogOut, Clock } from 'lucide-react';

type CaregiverDashboardProps = {
  caregiverEmail: string;
  patientId: string;
  patientName: string;
  onLogout: () => void;
  onBack: () => void;
};

export function CaregiverDashboard({
  patientId,
  patientName,
  onLogout,
  onBack,
}: CaregiverDashboardProps) {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getRemindersForPatient(patientId)
      .then(setReminders)
      .catch((err) => setError(err?.message ?? 'Failed to load'))
      .finally(() => setLoading(false));
  }, [patientId]);

  return (
    <div className="min-h-screen app-page p-8 max-w-xl mx-auto">
      <div className="flex flex-col gap-3 mb-6">
        <button
          onClick={onBack}
          className="btn-big w-full border-2 border-gray-300 text-gray-800 bg-white hover:bg-gray-50 rounded-2xl flex items-center justify-center gap-2 shadow-sm"
        >
          <ArrowLeft className="w-6 h-6" /> Back to patients
        </button>
        <button
          onClick={onLogout}
          className="btn-big w-full border-2 border-gray-300 text-gray-800 bg-white hover:bg-gray-50 rounded-2xl flex items-center justify-center gap-2 shadow-sm"
        >
          <LogOut className="w-6 h-6" /> Log out
        </button>
      </div>

      <div className="card p-6 mb-6">
        <h2 className="heading-big mb-2 flex items-center gap-2">
          <Bell className="w-8 h-8 text-blue-600" /> {patientName}
        </h2>
        <p className="text-xl text-gray-600 mb-4">
          Reminders you’ve set for them. They’ll see these in “My Reminders.”
        </p>
        <button
          type="button"
          className="btn-big w-full bg-blue-600 hover:bg-blue-700 text-white border-blue-600 rounded-2xl flex items-center justify-center gap-2 shadow-sm"
        >
          <Plus className="w-6 h-6" /> Add a reminder
        </button>
        <p className="text-base text-gray-500 mt-3 text-center">
          (Add reminder form will appear here — e.g. “Take medication at 8am”)
        </p>
      </div>

      <p className="section-title">Today’s reminders</p>
      {error && (
        <div className="p-4 mb-6 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xl">
          {error}
        </div>
      )}
      {loading ? (
        <p className="text-xl text-gray-600">Loading…</p>
      ) : (
        <ul className="space-y-4">
          {reminders.length === 0 ? (
            <li className="card p-6 rounded-2xl text-center">
              <p className="text-xl text-gray-600 mb-2">No reminders yet.</p>
              <p className="text-base text-gray-500">
                Tap “Add a reminder” above to create one (e.g. medication, meals, activities).
              </p>
            </li>
          ) : (
            reminders.map((r) => (
              <li key={r.id} className="card p-5 rounded-2xl flex items-start gap-4">
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
    </div>
  );
}
