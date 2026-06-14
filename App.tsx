import { useState, useEffect } from 'react';
import { seedInitialDataIfEmpty } from './src/services/firestoreData';
import { startHubTimestampRepair } from './src/services/roomTracking';
import { firebaseProjectId } from './src/services/firebase';
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
import { LogoMark } from './components/Logo';
import { Button, Page, PageTitle } from './components/ui';

type View =
  | 'home'
  | 'caregiver-login'
  | 'patient-selection'
  | 'caregiver-dashboard'
  | 'caregiver-settings'
  | 'patient-entry'
  | 'patient'
  | 'patient-settings'
  | 'account-linking';

export default function App() {
  const [firebaseError, setFirebaseError] = useState<string | null>(null);

  useEffect(() => {
    seedInitialDataIfEmpty().catch((err) => {
      const msg = err?.message ?? '';
      if (msg.includes('permission') || msg.includes('Permission')) {
        setFirebaseError('Firestore permission denied. Add rules in Firebase Console → Firestore → Rules (see FIRESTORE.md).');
      }
      console.warn('Firebase seed:', err);
    });

    const unsubStamp = startHubTimestampRepair((err) => {
      console.warn('Hub timestamp repair:', err);
    });
    return () => unsubStamp();
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

  useEffect(() => {
    if (currentView === 'caregiver-dashboard' && isLoggedIn && !selectedPatientId) {
      setCurrentView('patient-selection');
    }
  }, [currentView, isLoggedIn, selectedPatientId]);

  const openCaregiverFlow = () => {
    setSelectedPatientId(null);
    setSelectedPatientName(null);
    if (isLoggedIn && currentCaregiver) {
      setCurrentView('patient-selection');
    } else {
      setCurrentView('caregiver-login');
    }
  };

  const openPatientFlow = () => {
    if (linkedPatientId) {
      setCurrentView('patient-entry');
    } else {
      setAccountLinkReturnView('patient');
      setCurrentView('account-linking');
    }
  };

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
    setAccountLinkReturnView('home');
    setCurrentView('account-linking');
  };

  return (
    <div className="min-h-screen app-page">
      {firebaseError && (
        <div className="banner-warn flex items-center justify-between gap-3 flex-wrap">
          <p>{firebaseError}</p>
          <div className="flex gap-3 text-sm">
            <a
              href={`https://console.firebase.google.com/project/${firebaseProjectId}/firestore/rules`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline"
            >
              Open rules
            </a>
            <button type="button" onClick={() => setFirebaseError(null)} className="btn-text" style={{ marginBottom: 0 }}>
              Dismiss
            </button>
          </div>
        </div>
      )}

      {currentView === 'home' && (
        <div className="home-screen">
          <div className="home-screen-inner">
            <header className="home-header">
              <LogoMark size="xl" className="home-logo" />
              <p className="home-subtitle">Patient & Caregiver Reminder System</p>
            </header>

            <nav className="home-actions" aria-label="Get started">
              <button
                type="button"
                className="home-btn home-btn--caregiver"
                onClick={openCaregiverFlow}
              >
                Caregiver
              </button>

              <button
                type="button"
                className="home-btn home-btn--patient"
                onClick={openPatientFlow}
              >
                Patient
              </button>

              <button
                type="button"
                className="home-btn home-btn--link"
                onClick={() => {
                  setAccountLinkReturnView('home');
                  setCurrentView('account-linking');
                }}
              >
                Link Account
              </button>
            </nav>
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

      {currentView === 'caregiver-dashboard' && isLoggedIn && selectedPatientId && selectedPatientName && (
        <CaregiverDashboard
          caregiverEmail={currentCaregiver!}
          patientId={selectedPatientId}
          patientName={selectedPatientName}
          onLogout={handleLogout}
          onBack={handleBackToPatientSelection}
        />
      )}

      {currentView === 'patient-entry' && linkedPatientId && (
        <Page>
          <PageTitle
            showLogo
            title="Patient device"
            subtitle={
              linkedPatientName
                ? `This device is linked as ${linkedPatientName}.`
                : 'This device is linked to a patient account.'
            }
          />
          <div className="stack">
            <Button className="w-full" onClick={() => setCurrentView('patient')}>
              Continue as {linkedPatientName ?? 'patient'}
            </Button>
            <Button
              variant="secondary"
              className="w-full"
              onClick={() => {
                setAccountLinkReturnView('patient');
                setCurrentView('account-linking');
              }}
            >
              Link a different account
            </Button>
            <Button variant="ghost" className="w-full" onClick={() => setCurrentView('home')}>
              Back to home
            </Button>
          </div>
        </Page>
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
