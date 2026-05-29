import { useState, useEffect } from 'react';
import {
  getCaregiverByEmail,
  getPatientsForCaregiver,
  getLinkingCodesForPatients,
} from '../src/services/firestoreData';
import type { Patient, LinkingCode } from '../src/services/firestoreData';
import { ArrowLeft, Settings, Bell, Users, Key } from 'lucide-react';
import { PatientListSkeleton } from './Skeleton';

type CaregiverSettingsProps = {
  caregiverEmail: string;
  onBack: () => void;
  onSelectPatient: (patientId: string, patientName: string) => void;
};

export function CaregiverSettings({
  caregiverEmail,
  onBack,
  onSelectPatient,
}: CaregiverSettingsProps) {
  const [name, setName] = useState<string | null>(null);
  const [patients, setPatients] = useState<Patient[]>([]);
  const [linkingCodes, setLinkingCodes] = useState<LinkingCode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    (async () => {
      try {
        const caregiver = await getCaregiverByEmail(caregiverEmail);
        if (cancelled) return;
        setName(caregiver?.name ?? null);

        const patientList = await getPatientsForCaregiver(caregiverEmail);
        if (cancelled) return;
        setPatients(patientList);

        const codes = await getLinkingCodesForPatients(patientList.map((p) => p.id));
        if (cancelled) return;
        setLinkingCodes(codes);
      } catch (err) {
        if (!cancelled) setError((err as Error)?.message ?? 'Failed to load settings');
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [caregiverEmail]);

  return (
    <div className="min-h-screen app-page p-8 max-w-xl mx-auto">
      <button
        onClick={onBack}
        className="btn-big w-full mb-6 border-2 border-gray-300 text-gray-800 bg-white hover:bg-gray-50 rounded-2xl flex items-center justify-center gap-2 shadow-sm"
      >
        <ArrowLeft className="w-6 h-6" /> Back
      </button>

      <div className="card p-6 mb-8">
        <h2 className="heading-big mb-2 flex items-center gap-2">
          <Settings className="w-8 h-8 text-blue-600" /> Settings
        </h2>
        <p className="text-xl text-gray-600 mb-1">
          {name ?? 'Caregiver'} — {caregiverEmail}
        </p>
        <p className="text-base text-gray-500">
          Manage your account and how reminders work.
        </p>
      </div>

      {error && (
        <div className="p-4 mb-6 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xl">
          {error}
        </div>
      )}

      <p className="section-title">Notifications</p>
      <div className="card p-6 rounded-2xl mb-6">
        <p className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
          <Bell className="w-6 h-6 text-blue-600" /> Reminder alerts
        </p>
        <p className="text-base text-gray-600">
          Patients see reminders you add on their dashboard. When they mark one done, it updates in Firestore automatically.
        </p>
      </div>

      <p className="section-title">Patients & linking</p>
      {loading ? (
        <PatientListSkeleton count={3} />
      ) : (
        <>
          <div className="card p-6 rounded-2xl mb-6">
            <p className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Users className="w-6 h-6 text-blue-600" /> Your patients
            </p>
            {patients.length === 0 ? (
              <p className="text-base text-gray-600">No patients assigned to this caregiver yet.</p>
            ) : (
              <ul className="space-y-3">
                {patients.map((p) => (
                  <li key={p.id}>
                    <button
                      type="button"
                      onClick={() => onSelectPatient(p.id, p.name)}
                      className="w-full text-left py-3 px-4 rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 text-lg font-semibold text-gray-900"
                    >
                      {p.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="card p-6 rounded-2xl">
            <p className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Key className="w-6 h-6 text-blue-600" /> Linking codes
            </p>
            <p className="text-base text-gray-600 mb-4">
              Share a code with your patient so they can link in “My Reminders” on the home screen.
            </p>
            {linkingCodes.length === 0 ? (
              <p className="text-base text-gray-500">No linking codes found for your patients.</p>
            ) : (
              <ul className="space-y-3">
                {linkingCodes.map((lc) => (
                  <li
                    key={lc.code}
                    className="flex flex-wrap items-center gap-2 py-2 px-3 rounded-lg bg-gray-50 border border-gray-200"
                  >
                    <span className="font-mono font-bold text-lg text-gray-900">{lc.code}</span>
                    <span className="text-gray-500">→</span>
                    <span className="text-lg text-gray-800">{lc.patientName}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      )}
    </div>
  );
}
