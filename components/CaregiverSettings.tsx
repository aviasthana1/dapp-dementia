import { useState, useEffect } from 'react';
import { getCaregiverByEmail } from '../src/services/firestoreData';
import { ArrowLeft, Settings, Bell, Users, Key } from 'lucide-react';

type CaregiverSettingsProps = {
  caregiverEmail: string;
  onBack: () => void;
  onSelectPatient: (patientId: string, patientName: string) => void;
};

export function CaregiverSettings({
  caregiverEmail,
  onBack,
}: CaregiverSettingsProps) {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    getCaregiverByEmail(caregiverEmail)
      .then((c) => setName(c?.name ?? null))
      .catch(() => setName(null));
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

      <p className="section-title">Notifications</p>
      <div className="card p-6 rounded-2xl mb-6">
        <p className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
          <Bell className="w-6 h-6 text-blue-600" /> Reminder alerts
        </p>
        <p className="text-base text-gray-600 mb-4">
          Choose when you get notified (e.g. when a patient marks a reminder done, or daily summary).
        </p>
        <p className="text-base text-gray-500">(Placeholder: toggle options will appear here)</p>
      </div>

      <p className="section-title">Patients & linking</p>
      <div className="card p-6 rounded-2xl mb-6">
        <p className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
          <Users className="w-6 h-6 text-blue-600" /> Manage patients
        </p>
        <p className="text-base text-gray-600 mb-4">
          See who’s linked and add new patients. Each patient gets a unique code to link their account.
        </p>
        <p className="text-base text-gray-500">(Placeholder: list and “Generate code” will appear here)</p>
      </div>

      <div className="card p-6 rounded-2xl">
        <p className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
          <Key className="w-6 h-6 text-blue-600" /> Linking codes
        </p>
        <p className="text-base text-gray-600 mb-2">
          Share the code below with your patient so they can see your reminders in “My Reminders.”
        </p>
        <p className="text-base text-gray-500">(Placeholder: codes per patient will appear here)</p>
      </div>
    </div>
  );
}
