import { usePatientPreferences } from '../src/hooks/usePatientPreferences';
import type { TextSize } from '../src/services/patientPreferences';
import { playReminderSound, REMINDER_SOUND_OPTIONS } from '../src/services/reminderSound';
import { BackButton, Button, Card, Page, PageTitle, SectionLabel } from './ui';

type PatientSettingsProps = {
  linkedPatientName: string | null;
  onBack: () => void;
  onLinkAccount?: () => void;
  onUnlink?: () => void;
};

const TEXT_SIZE_OPTIONS: { id: TextSize; label: string }[] = [
  { id: 'standard', label: 'Standard' },
  { id: 'large', label: 'Large' },
  { id: 'extra-large', label: 'Extra large' },
];

export function PatientSettings({
  linkedPatientName,
  onBack,
  onLinkAccount,
  onUnlink,
}: PatientSettingsProps) {
  const { prefs, update } = usePatientPreferences();

  const handlePreviewSound = () => {
    void playReminderSound(prefs.reminderSound);
  };

  return (
    <Page className="patient-prefs-page">
      <BackButton onClick={onBack} />
      <PageTitle showLogo title="Settings" subtitle="Display and account options for My Reminders." />

      <SectionLabel>Account</SectionLabel>
      {linkedPatientName ? (
        <Card className="mb-4">
          <p className="font-medium">Linked as {linkedPatientName}</p>
          <p className="text-sm text-muted mt-1 mb-4">
            Reminders sync from your caregiver&apos;s account.
          </p>
          {onUnlink && (
            <Button variant="danger" className="w-full" onClick={onUnlink}>
              Unlink account
            </Button>
          )}
        </Card>
      ) : (
        onLinkAccount && (
          <Button className="w-full mb-4" onClick={onLinkAccount}>
            Link with caregiver code
          </Button>
        )
      )}

      <SectionLabel>Display</SectionLabel>
      <Card className="mb-4">
        <p className="font-medium mb-1">Text size</p>
        <p className="text-sm text-muted mb-3">Applies to My Reminders screens.</p>
        <div className="segmented" role="group" aria-label="Text size">
          {TEXT_SIZE_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              type="button"
              className={`segmented-item ${prefs.textSize === opt.id ? 'segmented-item--active' : ''}`}
              aria-pressed={prefs.textSize === opt.id}
              onClick={() => update({ textSize: opt.id })}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </Card>

      <SectionLabel>Sound</SectionLabel>
      <Card className="mb-4">
        <label className="field" htmlFor="reminder-sound">
          <span className="field-label">Reminder sound</span>
          <select
            id="reminder-sound"
            className="input"
            value={prefs.reminderSound}
            onChange={(e) => update({ reminderSound: e.target.value as typeof prefs.reminderSound })}
          >
            {REMINDER_SOUND_OPTIONS.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>
        <Button
          type="button"
          variant="secondary"
          className="w-full mt-3"
          onClick={handlePreviewSound}
          disabled={prefs.reminderSound === 'none'}
        >
          Preview sound
        </Button>
      </Card>

      <SectionLabel>Notifications</SectionLabel>
      <Card className="mb-4">
        <label className="toggle-row">
          <span>
            <span className="font-medium">Reminder alerts</span>
            <span className="text-sm text-muted block mt-0.5">
              Play a sound when a new reminder appears.
            </span>
          </span>
          <input
            type="checkbox"
            className="toggle"
            checked={prefs.notificationsEnabled}
            onChange={(e) => update({ notificationsEnabled: e.target.checked })}
          />
        </label>
      </Card>

      <Card>
        <label className="toggle-row mb-4">
          <span>
            <span className="font-medium">Quiet hours</span>
            <span className="text-sm text-muted block mt-0.5">
              Mute reminder sounds during these times.
            </span>
          </span>
          <input
            type="checkbox"
            className="toggle"
            checked={prefs.quietHoursEnabled}
            onChange={(e) => update({ quietHoursEnabled: e.target.checked })}
          />
        </label>

        {prefs.quietHoursEnabled && (
          <div className="quiet-hours-grid">
            <label className="field">
              <span className="field-label">From</span>
              <input
                type="time"
                className="input"
                value={prefs.quietHoursStart}
                onChange={(e) => update({ quietHoursStart: e.target.value })}
              />
            </label>
            <label className="field">
              <span className="field-label">To</span>
              <input
                type="time"
                className="input"
                value={prefs.quietHoursEnd}
                onChange={(e) => update({ quietHoursEnd: e.target.value })}
              />
            </label>
          </div>
        )}
      </Card>
    </Page>
  );
}
