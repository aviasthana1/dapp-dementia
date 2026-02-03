import { useState, useEffect } from 'react';
import { validateLinkingCode, getLinkingCodesForDemo } from '../src/services/firestoreData';
import type { LinkingCode } from '../src/services/firestoreData';
import { ArrowLeft, Link2, HelpCircle } from 'lucide-react';

type AccountLinkingProps = {
  onComplete: (patientId: string) => void;
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
      onComplete(result.patientId);
    } else {
      setError('Code not found. Please check the code and try again.');
    }
  };

  return (
    <div className="min-h-screen app-page p-8 flex flex-col max-w-xl mx-auto">
      <button
        onClick={onBack}
        className="btn-big w-full mb-6 border-2 border-gray-300 text-gray-800 bg-white hover:bg-gray-50 rounded-2xl self-start max-w-[12rem] flex items-center justify-center gap-2 shadow-sm"
      >
        <ArrowLeft className="w-6 h-6" /> Back
      </button>

      <div className="card p-6 mb-8">
        <h2 className="heading-big mb-2 flex items-center gap-2">
          <Link2 className="w-8 h-8 text-purple-600" /> Link account
        </h2>
        <p className="text-xl text-gray-600 mb-2">
          Your caregiver will give you a code. Enter it here to see their reminders for you.
        </p>
        <p className="text-base text-gray-500 mb-4">
          After linking, you’ll see “From your caregiver” reminders in My Reminders. You can still add your own.
        </p>
        <div className="flex items-start gap-2 p-3 bg-purple-50 rounded-xl border border-purple-200">
          <HelpCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-purple-900">Where do I get the code?</p>
            <p className="text-gray-700">Ask your caregiver. They find it in Settings after they log in as a caregiver.</p>
          </div>
        </div>
      </div>

      <div className="card p-6 mb-8">
        <label htmlFor="code" className="label-big block mb-3">Enter your code</label>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            id="code"
            type="text"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              setError('');
            }}
            className="input-big w-full border-gray-300 border-2 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 rounded-xl uppercase"
            placeholder="e.g. JAMES01"
            autoComplete="off"
          />
          {error && (
            <p className="text-xl text-red-600 font-medium">{error}</p>
          )}
          <button
            type="submit"
            className="btn-big w-full bg-purple-600 hover:bg-purple-700 text-white border-purple-600 rounded-2xl flex items-center justify-center gap-2 shadow-sm"
          >
            <Link2 className="w-6 h-6" /> Link account
          </button>
        </form>
      </div>

      {!loadingCodes && demoCodes.length > 0 && (
        <div className="card p-6">
          <p className="section-title">Example codes (for demo)</p>
          <p className="text-base text-gray-500 mb-3">Try these to see how linking works.</p>
          <ul className="space-y-2 text-xl text-gray-700">
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
