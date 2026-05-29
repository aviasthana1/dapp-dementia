import { useState, useEffect } from 'react';
import { validateLinkingCode, getLinkingCodesForDemo } from '../src/services/firestoreData';
import type { LinkingCode } from '../src/services/firestoreData';
import { CardBlockSkeleton } from './Skeleton';
import { BackButton, Button, Card, ErrorBanner, Field, Input, Page, PageTitle, SectionLabel } from './ui';

type AccountLinkingProps = {
  onComplete: (patientId: string, patientName: string) => void;
  onBack: () => void;
};

export function AccountLinking({ onComplete, onBack }: AccountLinkingProps) {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [demoCodes, setDemoCodes] = useState<LinkingCode[]>([]);
  const [loadingCodes, setLoadingCodes] = useState(true);

  useEffect(() => {
    getLinkingCodesForDemo()
      .then(setDemoCodes)
      .catch(() => setDemoCodes([]))
      .finally(() => setLoadingCodes(false));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const result = await validateLinkingCode(code);
    if (result) {
      onComplete(result.patientId, result.patientName);
    } else {
      setError('Code not found. Try again.');
    }
  };

  return (
    <Page>
      <BackButton onClick={onBack} />
      <PageTitle
        showLogo
        title="Link account"
        subtitle="Enter the code from your caregiver to see your reminders."
      />

      <Card className="mb-4">
        <form onSubmit={handleSubmit} className="stack">
          <Field label="Linking code">
            <Input
              id="code"
              type="text"
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
                setError('');
              }}
              className="uppercase"
              placeholder="e.g. JAMES01"
              autoComplete="off"
            />
          </Field>
          {error && <ErrorBanner message={error} />}
          <Button type="submit" className="w-full">
            Link account
          </Button>
        </form>
      </Card>

      {loadingCodes && (
        <Card>
          <SectionLabel>Demo codes</SectionLabel>
          <CardBlockSkeleton />
        </Card>
      )}
      {!loadingCodes && demoCodes.length > 0 && (
        <Card>
          <SectionLabel>Demo codes</SectionLabel>
          <ul className="stack text-sm">
            {demoCodes.map((c) => (
              <li key={c.code} className="flex items-center gap-2">
                <span className="font-mono font-medium">{c.code}</span>
                <span className="text-muted">→</span>
                <span>{c.patientName}</span>
              </li>
            ))}
          </ul>
        </Card>
      )}
    </Page>
  );
}
