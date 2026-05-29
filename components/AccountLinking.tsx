import { useState, useEffect } from 'react';
import { validateLinkingCode, getLinkingCodesForDemo } from '../src/services/firestoreData';
import type { LinkingCode } from '../src/services/firestoreData';
import { ArrowLeft, Link2 } from 'lucide-react';
import { CardBlockSkeleton } from './Skeleton';

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
    <div className="min-h-screen app-page p-5 flex flex-col max-w-xl mx-auto">
      <button
        onClick={onBack}
        className="w-full mb-4 py-2.5 px-4 text-base font-medium border-2 border-gray-300 text-main bg-white hover:bg-gray-50 rounded-xl self-start max-w-[8rem] flex items-center justify-center gap-1.5 shadow-sm"
      >
        <ArrowLeft className="w-5 h-5" /> Back
      </button>

      <div className="card p-4 px-5 mb-5 shadow-card rounded-xl">
        <h2 className="text-xl font-bold text-main mb-1.5 flex items-center gap-2">
          <Link2 className="w-6 h-6 text-[#2563eb]" aria-hidden /> Link account
        </h2>
        <p className="text-base text-muted leading-relaxed">
          Enter your caregiver's code to see their reminders.
        </p>
      </div>

      <div className="card p-4 px-5 mb-5 shadow-card rounded-xl">
        <label htmlFor="code" className="text-base font-semibold text-main block mb-2">Code</label>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            id="code"
            type="text"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              setError('');
            }}
            className="w-full py-2.5 px-3 text-base border-2 border-gray-300 rounded-xl focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 uppercase"
            placeholder="e.g. JAMES01"
            autoComplete="off"
          />
          {error && (
            <p className="text-sm text-error font-medium">{error}</p>
          )}
          <button
            type="submit"
            className="w-full btn-ghost py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-base font-bold min-h-[48px]"
          >
            <Link2 className="w-5 h-5" aria-hidden /> Link account
          </button>
        </form>
      </div>

      {loadingCodes && (
        <div className="card p-4 px-5 shadow-card rounded-xl">
          <p className="section-title text-base font-semibold">Demo codes</p>
          <CardBlockSkeleton />
        </div>
      )}
      {!loadingCodes && demoCodes.length > 0 && (
        <div className="card p-4 px-5 shadow-card rounded-xl">
          <p className="section-title text-base font-semibold mb-2">Demo codes</p>
          <ul className="space-y-1.5 text-base text-main">
            {demoCodes.map((c) => (
              <li key={c.code} className="flex items-center gap-2">
                <strong className="text-gray-900 font-mono">{c.code}</strong>
                <span>→</span>
                <span>{c.patientName}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
