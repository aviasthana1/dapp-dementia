import { useState, useEffect } from 'react';
import { seedInitialDataIfEmpty } from './src/services/firestoreData';
import {
  getStoredCaregiverEmail,
  setStoredCaregiverEmail,
  getStoredLinkedPatient,
  setStoredLinkedPatient,
} from './src/services/session';
import { CaregiverLogin } from './components/CaregiverLogin';
import { PatientSelectionDashboard } from './components/PatientSelectionDashboard';
import { CaregiverDashboard } from './components/CaregiverDashboard';
import { CaregiverSettings } from './components/CaregiverSettings';
import { PatientHomeScreen } from './components/PatientHomeScreen';
import { PatientSettings } from './components/PatientSettings';
import { AccountLinking } from './components/AccountLinking';
import { User, Link2, Bell } from 'lucide-react';

type View = 'home' | 'caregiver-login' | 'patient-selection' | 'caregiver-dashboard' | 'caregiver-settings' | 'patient' | 'patient-settings' | 'account-linking';

type TimeOfDay = 'morning' | 'afternoon' | 'evening';

function getTimeOfDay(): TimeOfDay {
  const h = new Date().getHours();
  if (h >= 5 && h < 12) return 'morning';
  if (h >= 12 && h < 17) return 'afternoon';
  return 'evening';
}

export default function App() {
  const [firebaseError, setFirebaseError] = useState<string | null>(null);
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>(getTimeOfDay);

  useEffect(() => {
    const t = setInterval(() => setTimeOfDay(getTimeOfDay()), 60_000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    seedInitialDataIfEmpty().catch((err) => {
      const msg = err?.message ?? '';
      if (msg.includes('permission') || msg.includes('Permission')) {
        setFirebaseError('Firestore permission denied. Add rules in Firebase Console → Firestore → Rules (see FIRESTORE.md).');
      }
      console.warn('Firebase seed:', err);
    });
  }, []);

  const [currentView, setCurrentView] = useState<View>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!getStoredCaregiverEmail());
  const [currentCaregiver, setCurrentCaregiver] = useState<string | null>(() => getStoredCaregiverEmail());
  const [selectedPatientId, setSelectedPatientId] = useState<string | null>(null);
  const [selectedPatientName, setSelectedPatientName] = useState<string | null>(null);
  const [linkedPatientId, setLinkedPatientId] = useState<string | null>(
    () => getStoredLinkedPatient()?.id ?? null
  );
  const [linkedPatientName, setLinkedPatientName] = useState<string | null>(
    () => getStoredLinkedPatient()?.name ?? null
  );
  const [accountLinkReturnView, setAccountLinkReturnView] = useState<View>('home');

  const handleCaregiverLogin = (email: string) => {
    setIsLoggedIn(true);
    setCurrentCaregiver(email);
    setStoredCaregiverEmail(email);
    setCurrentView('patient-selection');
  };

  const handlePatientSelect = (patientId: string, patientName: string) => {
    setSelectedPatientId(patientId);
    setSelectedPatientName(patientName);
    setCurrentView('caregiver-dashboard');
  };

  const handleBackToPatientSelection = () => {
    setSelectedPatientId(null);
    setSelectedPatientName(null);
    setCurrentView('patient-selection');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentCaregiver(null);
    setStoredCaregiverEmail(null);
    setSelectedPatientId(null);
    setSelectedPatientName(null);
    setCurrentView('home');
  };

  const handleLinkComplete = (patientId: string, patientName: string) => {
    setLinkedPatientId(patientId);
    setLinkedPatientName(patientName);
    setStoredLinkedPatient(patientId, patientName);
    setCurrentView(accountLinkReturnView);
    setAccountLinkReturnView('home');
  };

  const handleUnlinkPatient = () => {
    setLinkedPatientId(null);
    setLinkedPatientName(null);
    setStoredLinkedPatient(null);
  };

  return (
    <div
      className="min-h-screen app-page text-gray-900"
      data-time-of-day={timeOfDay}
    >
      {firebaseError && (
        <div className="bg-amber-100 border-b border-amber-300 px-4 py-3 text-gray-900 flex items-center justify-between gap-4 flex-wrap">
          <p className="text-lg font-medium">{firebaseError}</p>
          <a
            href="https://console.firebase.google.com/project/test-f80e2/firestore/rules"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline font-semibold whitespace-nowrap"
          >
            Open Firestore Rules →
          </a>
          <button
            type="button"
            onClick={() => setFirebaseError(null)}
            className="text-gray-600 hover:text-gray-900 font-medium"
          >
            Dismiss
          </button>
        </div>
      )}
      {currentView === 'home' && (
        <div
          className="landing-phone flex flex-col items-center w-full overflow-hidden app-page"
          style={{
            minHeight: '100dvh',
            height: '100dvh',
            paddingLeft: 'max(0.75rem, env(safe-area-inset-left))',
            paddingRight: 'max(0.75rem, env(safe-area-inset-right))',
            paddingTop: 'max(1rem, env(safe-area-inset-top))',
            paddingBottom: 'max(1rem, env(safe-area-inset-bottom))',
          }}
        >
          <div className="flex-shrink-0 flex flex-col items-center w-full pb-6">
            <h1 className="landing-title text-main text-center mb-2 font-bold">
              CareConnect
            </h1>
            <p className="landing-subtitle text-muted text-center leading-snug font-normal">
              Gentle reminders for each day
            </p>
          </div>

          <div className="flex-1 min-h-0 w-full flex flex-col justify-center items-center py-6">
            <button
              type="button"
              onClick={() => setCurrentView('patient')}
              className="btn-big-circle-compact animate-breathe flex-shrink-0 inline-flex flex-col items-center justify-center focus:outline-none"
              aria-label="My reminders"
            >
              <Bell className="btn-big-circle-bell text-amber-300 drop-shadow-sm flex-shrink-0" strokeWidth={2} aria-hidden />
              <span className="btn-big-circle-label text-white font-bold text-center leading-tight">
                My Reminders
              </span>
            </button>
          </div>

          <div className="flex-shrink-0 flex flex-col items-center w-full gap-3 pt-4 pb-2">
            <div className="flex flex-row items-stretch justify-center gap-2 sm:gap-3 w-full max-w-[320px] px-1">
              <button
                type="button"
                onClick={() => {
                  if (isLoggedIn && currentCaregiver) {
                    setCurrentView('patient-selection');
                  } else {
                    setCurrentView('caregiver-login');
                  }
                }}
                className="btn-landing-outline btn-landing-outline-equal rounded-xl px-3 py-3 text-sm font-medium flex-1 min-w-0 inline-flex items-center justify-center gap-2"
              >
                <User className="w-4 h-4 flex-shrink-0" aria-hidden />
                <span className="text-center">Caregiver Login</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setAccountLinkReturnView('home');
                  setCurrentView('account-linking');
                }}
                className="btn-landing-outline btn-landing-outline-equal rounded-xl px-3 py-3 text-sm font-medium flex-1 min-w-0 inline-flex items-center justify-center gap-2"
              >
                <Link2 className="w-4 h-4 flex-shrink-0" aria-hidden />
                <span className="text-center">Link Account</span>
              </button>
            </div>
            <p className="text-xs text-muted text-center leading-snug">
              First time? Ask your caregiver for a linking code.
            </p>
          </div>
        </div>
      )}

      {currentView === 'caregiver-login' && (
        <CaregiverLogin
          onLogin={handleCaregiverLogin}
          onBack={() => setCurrentView('home')}
        />
      )}

      {currentView === 'patient-selection' && isLoggedIn && (
        <PatientSelectionDashboard
          caregiverEmail={currentCaregiver!}
          onSelectPatient={handlePatientSelect}
          onLogout={handleLogout}
          onSettings={() => setCurrentView('caregiver-settings')}
        />
      )}

      {currentView === 'caregiver-settings' && isLoggedIn && (
        <CaregiverSettings
          caregiverEmail={currentCaregiver!}
          onBack={() => setCurrentView('patient-selection')}
          onSelectPatient={handlePatientSelect}
        />
      )}

      {currentView === 'caregiver-dashboard' && isLoggedIn && (
        <CaregiverDashboard
          caregiverEmail={currentCaregiver!}
          patientId={selectedPatientId!}
          patientName={selectedPatientName!}
          onLogout={handleLogout}
          onBack={handleBackToPatientSelection}
        />
      )}

      {currentView === 'patient' && (
        <PatientHomeScreen
          patientId={linkedPatientId}
          patientName={linkedPatientName}
          onSettings={() => setCurrentView('patient-settings')}
          onLinkAccount={() => {
            setAccountLinkReturnView('patient');
            setCurrentView('account-linking');
          }}
        />
      )}

      {currentView === 'patient-settings' && (
        <PatientSettings
          linkedPatientName={linkedPatientName}
          onBack={() => setCurrentView('patient')}
          onLinkAccount={() => {
            setAccountLinkReturnView('patient-settings');
            setCurrentView('account-linking');
          }}
          onUnlink={handleUnlinkPatient}
        />
      )}

      {currentView === 'account-linking' && (
        <AccountLinking
          onComplete={handleLinkComplete}
          onBack={() => setCurrentView(accountLinkReturnView ?? 'home')}
        />
      )}
    </div>
  );
}
