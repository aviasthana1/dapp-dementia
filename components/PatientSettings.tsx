import { ArrowLeft, Settings, Type, Volume2, Bell, Link2, Unlink } from 'lucide-react';

type PatientSettingsProps = {
  linkedPatientName: string | null;
  onBack: () => void;
  onLinkAccount?: () => void;
  onUnlink?: () => void;
};

export function PatientSettings({
  linkedPatientName,
  onBack,
  onLinkAccount,
  onUnlink,
}: PatientSettingsProps) {
  return (
    <div className="min-h-screen app-page p-8 max-w-xl mx-auto">
      <button
        onClick={onBack}
        className="btn-big w-full mb-6 border-2 border-gray-300 text-gray-800 bg-white hover:bg-gray-50 rounded-2xl flex items-center justify-center gap-2 shadow-sm"
      >
        <ArrowLeft className="w-6 h-6" /> Back
      </button>

      <div className="card p-6 mb-8 shadow-card rounded-2xl px-8">
        <h2 className="heading-big mb-2 flex items-center gap-2">
          <Settings className="w-8 h-8 text-teal-600" /> Settings
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          Make the app easier to see and hear. Changes here apply to “My Reminders.”
        </p>
      </div>

      <p className="section-title">Account</p>
      {linkedPatientName ? (
        <div className="card p-6 rounded-2xl mb-6 shadow-card">
          <p className="text-xl font-semibold text-gray-900 mb-1">
            Linked as <strong>{linkedPatientName}</strong>
          </p>
          <p className="text-base text-gray-600 mb-4">
            Your reminders come from your caregiver’s account.
          </p>
          {onUnlink && (
            <button
              type="button"
              onClick={onUnlink}
              className="w-full py-3 px-4 text-lg font-bold border-2 border-red-300 text-red-700 bg-red-50 hover:bg-red-100 rounded-xl flex items-center justify-center gap-2"
            >
              <Unlink className="w-5 h-5" aria-hidden /> Unlink account
            </button>
          )}
        </div>
      ) : (
        onLinkAccount && (
          <button
            type="button"
            onClick={onLinkAccount}
            className="btn-ghost w-full rounded-2xl py-4 px-6 text-lg font-bold flex items-center justify-center gap-2 mb-6 min-h-[60px]"
          >
            <Link2 className="w-6 h-6" aria-hidden /> Link account with caregiver code
          </button>
        )
      )}

      <p className="section-title">Display</p>
      <div className="card p-6 rounded-2xl mb-6 shadow-card">
        <p className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
          <Type className="w-6 h-6 text-teal-600" /> Text size
        </p>
        <p className="text-base text-gray-600 mb-4">
          Larger text for buttons and reminders. (Placeholder: size slider or “Large / Extra large” options will appear here.)
        </p>
      </div>

      <p className="section-title">Sound</p>
      <div className="card p-6 rounded-2xl mb-6 shadow-card">
        <p className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
          <Volume2 className="w-6 h-6 text-teal-600" /> Reminder sound
        </p>
        <p className="text-base text-gray-600 mb-4">
          Choose a gentle sound for reminder alerts. (Placeholder: sound picker will appear here.)
        </p>
      </div>

      <p className="section-title">Notifications</p>
      <div className="card p-6 rounded-2xl shadow-card">
        <p className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
          <Bell className="w-6 h-6 text-teal-600" /> When to remind
        </p>
        <p className="text-base text-gray-600">
          Turn reminders on or off, and choose quiet hours. (Placeholder: toggles and time options will appear here.)
        </p>
      </div>
    </div>
  );
}
