import { useState, useEffect } from 'react';
import { getCaregivers } from '../src/services/firestoreData';
import type { Caregiver } from '../src/services/firestoreData';
import { ArrowLeft, User, LogIn } from 'lucide-react';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) onLogin(email.trim());
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
          <User className="w-8 h-8 text-blue-600" /> Caregiver Login
        </h2>
        <p className="text-xl text-gray-600 mb-1">
          Sign in to manage reminders for your loved ones.
        </p>
        <p className="text-base text-gray-500">
          You can add and edit reminders for each patient you care for.
        </p>
      </div>

      {error && (
        <div className="p-4 mb-6 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xl">
          {error}
        </div>
      )}
      {loading ? (
        <p className="text-xl text-gray-600 mb-8">Loading…</p>
      ) : (
        <>
          <p className="section-title">Quick sign in</p>
          <div className="space-y-4 mb-8">
            {caregivers.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => onLogin(c.email)}
                className="btn-big w-full text-left px-6 card hover:border-blue-300 hover:bg-blue-50/50 rounded-2xl text-gray-900 flex items-center gap-3 transition-colors"
              >
                <span className="text-2xl">👤</span>
                <span><strong>{c.name}</strong> — {c.email}</span>
              </button>
            ))}
          </div>
        </>
      )}

      <div className="card p-6">
        <p className="label-big block mb-3">Or enter your email</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-big w-full border-gray-300 border-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-xl"
            placeholder="e.g. name@example.com"
          />
          <button
            type="submit"
            className="btn-big w-full bg-blue-600 hover:bg-blue-700 text-white border-blue-600 rounded-2xl flex items-center justify-center gap-2 shadow-sm"
          >
            <LogIn className="w-6 h-6" /> Log in
          </button>
        </form>
      </div>
    </div>
  );
}
