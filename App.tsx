import { useState, useEffect } from 'react';
import { seedInitialDataIfEmpty } from './src/services/firestoreData';
import { CaregiverLogin } from './components/CaregiverLogin';
import { PatientSelectionDashboard } from './components/PatientSelectionDashboard';
import { CaregiverDashboard } from './components/CaregiverDashboard';
import { CaregiverSettings } from './components/CaregiverSettings';
import { PatientInterface } from './components/PatientInterface';
import { PatientSettings } from './components/PatientSettings';
import { AccountLinking } from './components/AccountLinking';

type View = 'home' | 'caregiver-login' | 'patient-selection' | 'caregiver-dashboard' | 'caregiver-settings' | 'patient' | 'patient-settings' | 'account-linking';

export default function App() {
  useEffect(() => {
    seedInitialDataIfEmpty().catch((err) => console.warn('Firebase seed:', err));
  }, []);

  const [currentView, setCurrentView] = useState<View>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentCaregiver, setCurrentCaregiver] = useState<string | null>(null);
  const [selectedPatientId, setSelectedPatientId] = useState<string | null>(null);
  const [selectedPatientName, setSelectedPatientName] = useState<string | null>(null);
  const [linkedPatient, setLinkedPatient] = useState<string | null>(null);

  const handleCaregiverLogin = (email: string) => {
    setIsLoggedIn(true);
    setCurrentCaregiver(email);
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
    setSelectedPatientId(null);
    setSelectedPatientName(null);
    setCurrentView('home');
  };

  const handleLinkComplete = (patientId: string) => {
    setLinkedPatient(patientId);
    setCurrentView('home');
  };

  return (
    <div className="min-h-screen app-page text-gray-900">
      {currentView === 'home' && (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 max-w-xl mx-auto">
          <div className="card p-8 w-full text-center mb-8">
            <h1 className="heading-big mb-2">CareConnect</h1>
            <p className="text-xl text-gray-600 mb-2">Gentle reminders for each day</p>
            <p className="text-lg text-gray-500 leading-relaxed">
              Reminders can come from your caregiver or you can add your own. Tap below to get started.
            </p>
          </div>
          <div className="w-full space-y-4">
            <button
              onClick={() => setCurrentView('caregiver-login')}
              className="btn-big w-full bg-blue-600 hover:bg-blue-700 text-white border-blue-600 rounded-2xl shadow-sm flex items-center justify-center gap-3"
            >
              <span className="text-2xl" aria-hidden>👤</span>
              Caregiver Login
            </button>
            <button
              onClick={() => setCurrentView('patient')}
              className="btn-big w-full bg-green-600 hover:bg-green-700 text-white border-green-600 rounded-2xl shadow-sm flex items-center justify-center gap-3"
            >
              <span className="text-2xl" aria-hidden>🔔</span>
              My Reminders
            </button>
            <button
              onClick={() => setCurrentView('account-linking')}
              className="btn-big w-full bg-purple-600 hover:bg-purple-700 text-white border-purple-600 rounded-2xl shadow-sm flex items-center justify-center gap-3"
            >
              <span className="text-2xl" aria-hidden>🔗</span>
              Link Account
            </button>
          </div>
          <p className="text-base text-gray-500 text-center mt-8 max-w-sm">
            First time? Ask your caregiver for a linking code to see their reminders for you.
          </p>
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
        <PatientInterface
          onSettings={() => setCurrentView('patient-settings')}
        />
      )}

      {currentView === 'patient-settings' && (
        <PatientSettings
          onBack={() => setCurrentView('patient')}
        />
      )}

      {currentView === 'account-linking' && (
        <AccountLinking
          onComplete={handleLinkComplete}
          onBack={() => setCurrentView('home')}
        />
      )}
    </div>
  );
}
