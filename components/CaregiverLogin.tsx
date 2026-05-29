import { useState, useEffect } from 'react';
import { getCaregivers, getCaregiverByEmail } from '../src/services/firestoreData';
import type { Caregiver } from '../src/services/firestoreData';
import { ArrowLeft, User, LogIn } from 'lucide-react';
import { CaregiverListSkeleton } from './Skeleton';

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
    <div className="min-h-screen app-page p-5 flex flex-col max-w-xl mx-auto">
      <button
        onClick={onBack}
        className="w-full mb-4 py-2.5 px-4 text-base font-medium border-2 border-gray-300 text-main bg-white hover:bg-gray-50 rounded-xl self-start max-w-[8rem] flex items-center justify-center gap-1.5 shadow-sm"
      >
        <ArrowLeft className="w-5 h-5" /> Back
      </button>

      <div className="card p-4 px-5 mb-4 shadow-card rounded-xl">
        <h2 className="text-xl font-bold text-main flex items-center gap-2">
          <User className="w-6 h-6 text-[#334155]" aria-hidden /> Caregiver Login
        </h2>
      </div>

      {error && (
        <div className="p-3 mb-4 rounded-lg bg-red-50 border border-red-200 text-error text-sm font-medium">
          {error}
        </div>
      )}
      {loading ? (
        <CaregiverListSkeleton count={3} />
      ) : (
        <>
          <div className="space-y-3 mb-5">
            {caregivers.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => onLogin(c.email)}
                className="w-full py-3 px-4 text-left text-base card card-caregiver-hover rounded-xl text-main flex items-center gap-2.5 transition-colors shadow-card"
              >
                <span className="text-lg">👤</span>
                <span><strong>{c.name}</strong> — {c.email}</span>
              </button>
            ))}
          </div>
        </>
      )}

      <div className="card p-4 px-5 shadow-card rounded-xl">
        <label htmlFor="email" className="text-base font-semibold text-main block mb-2">Email</label>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full py-2.5 px-3 text-base border-2 border-gray-300 rounded-xl focus:border-[#334155] focus:ring-2 focus:ring-[#334155]/20"
            placeholder="your@email.com"
          />
          <button
            type="submit"
            className="w-full btn-primary-caregiver py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-base font-bold min-h-[48px]"
          >
            <LogIn className="w-5 h-5" aria-hidden /> Log in
          </button>
        </form>
      </div>
    </div>
  );
}
