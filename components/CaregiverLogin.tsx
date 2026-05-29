import { useState, useEffect } from 'react';
import { getCaregivers, getCaregiverByEmail } from '../src/services/firestoreData';
import type { Caregiver } from '../src/services/firestoreData';
import { CaregiverListSkeleton } from './Skeleton';
import { BackButton, Button, Card, ErrorBanner, Field, Input, Page, PageTitle } from './ui';

type CaregiverLoginProps = {
  onLogin: (email: string) => void;
  onBack: () => void;
};

export function CaregiverLogin({ onLogin, onBack }: CaregiverLoginProps) {
  const [email, setEmail] = useState('');
  const [caregivers, setCaregivers] = useState<Caregiver[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getCaregivers()
      .then(setCaregivers)
      .catch((err) => setError(err?.message ?? 'Failed to load'))
      .finally(() => setLoading(false));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;
    setError(null);
    try {
      const caregiver = await getCaregiverByEmail(trimmed);
      if (!caregiver) {
        setError('Email not found. Pick a caregiver below or use a demo email.');
        return;
      }
      onLogin(caregiver.email);
    } catch (err) {
      setError((err as Error)?.message ?? 'Login failed');
    }
  };

  return (
    <Page>
      <BackButton onClick={onBack} />
      <PageTitle showLogo title="Caregiver login" subtitle="Select a demo account or sign in with email." />

      {error && <ErrorBanner message={error} />}

      {loading ? (
        <CaregiverListSkeleton count={3} />
      ) : (
        <div className="stack mb-6">
          {caregivers.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => onLogin(c.email)}
              className="list-row"
            >
              <span className="font-medium">{c.name}</span>
              <span className="text-sm text-muted"> — {c.email}</span>
            </button>
          ))}
        </div>
      )}

      <Card>
        <form onSubmit={handleSubmit} className="stack">
          <Field label="Email">
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              autoComplete="email"
            />
          </Field>
          <Button type="submit" className="w-full">
            Log in
          </Button>
        </form>
      </Card>
    </Page>
  );
}
