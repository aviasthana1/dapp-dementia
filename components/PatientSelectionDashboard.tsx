import { useState, useEffect } from 'react';
import { getPatientsForCaregiver } from '../src/services/firestoreData';
import type { Patient } from '../src/services/firestoreData';
import { ArrowLeft, Users, Settings, LogOut } from 'lucide-react';

type PatientSelectionDashboardProps = {
  caregiverEmail: string;
  onSelectPatient: (patientId: string, patientName: string) => void;
  onLogout: () => void;
  onSettings: () => void;
};

export function PatientSelectionDashboard({
  caregiverEmail,
  onSelectPatient,
  onLogout,
  onSettings,
}: PatientSelectionDashboardProps) {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getPatientsForCaregiver(caregiverEmail)
      .then(setPatients)
      .catch((err) => setError(err?.message ?? 'Failed to load'))
      .finally(() => setLoading(false));
  }, [caregiverEmail]);

  return (
    <div className="min-h-screen app-page p-8 max-w-xl mx-auto">
      <div className="flex flex-col gap-3 mb-8">
        <button
          onClick={onSettings}
          className="btn-big w-full border-2 border-gray-300 text-gray-800 bg-white hover:bg-gray-50 rounded-2xl flex items-center justify-center gap-2 shadow-sm"
        >
          <Settings className="w-6 h-6" /> Settings
        </button>
        <button
          onClick={onLogout}
          className="btn-big w-full border-2 border-gray-300 text-gray-800 bg-white hover:bg-gray-50 rounded-2xl flex items-center justify-center gap-2 shadow-sm"
        >
          <LogOut className="w-6 h-6" /> Log out
        </button>
      </div>

      <div className="card p-6 mb-8">
        <h2 className="heading-big mb-2 flex items-center gap-2">
          <Users className="w-8 h-8 text-blue-600" /> Choose patient
        </h2>
        <p className="text-xl text-gray-600 mb-1">
          Select who you’re managing reminders for.
        </p>
        <p className="text-base text-gray-500">
          You’ll see and add their reminders on the next screen.
        </p>
        <p className="text-base text-gray-500 mt-2 font-medium">{caregiverEmail}</p>
      </div>

      {error && (
        <div className="p-4 mb-6 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xl">
          {error}
        </div>
      )}
      {loading ? (
        <p className="text-xl text-gray-600">Loading…</p>
      ) : (
        <>
          <p className="section-title">Your patients</p>
          <ul className="space-y-4">
            {patients.length === 0 ? (
              <li className="card p-6 rounded-2xl text-center">
                <p className="text-xl text-gray-600 mb-2">No patients linked yet.</p>
                <p className="text-base text-gray-500">
                  Link a patient using their account — they’ll need to enter a code you provide (see Settings for codes).
                </p>
              </li>
            ) : (
              patients.map((p) => (
                <li key={p.id}>
                  <button
                    onClick={() => onSelectPatient(p.id, p.name)}
                    className="btn-big w-full text-left px-6 card hover:border-blue-300 hover:bg-blue-50/50 rounded-2xl text-gray-900 flex items-center gap-3 transition-colors"
                  >
                    <span className="text-2xl">👤</span>
                    <span className="text-xl font-semibold">{p.name}</span>
                  </button>
                </li>
              ))
            )}
          </ul>
        </>
      )}
    </div>
  );
}
