import { useState } from 'react';
import { LogoMark } from './Logo';
import { Button } from './ui';

type ConsentDialogProps = {
  onAccept: () => void;
};

export function ConsentDialog({ onAccept }: ConsentDialogProps) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="consent-overlay" role="dialog" aria-modal="true" aria-labelledby="consent-title">
      <div className="consent-card">
        <LogoMark size="md" className="consent-logo" />
        <h1 id="consent-title" className="consent-title">
          Welcome to CareConnect
        </h1>
        <p className="consent-text">
          This app stores reminders and room activity in Firebase. BLE hub data may include when
          someone enters or leaves a room. Only use this app if you agree to that data being saved
          and shown to linked caregivers.
        </p>
        <label className="consent-check">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <span>I understand and agree to use CareConnect</span>
        </label>
        <Button className="w-full" disabled={!checked} onClick={onAccept}>
          Continue
        </Button>
      </div>
    </div>
  );
}
