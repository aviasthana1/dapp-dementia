import { useState } from 'react';
import { CaregiverLogin } from './components/CaregiverLogin';
import { PatientSelectionDashboard } from './components/PatientSelectionDashboard';
import { CaregiverDashboard } from './components/CaregiverDashboard';
import { CaregiverSettings } from './components/CaregiverSettings';
import { PatientInterface } from './components/PatientInterface';
import { PatientSettings } from './components/PatientSettings';
import { AccountLinking } from './components/AccountLinking';

type View = 'home' | 'caregiver-login' | 'patient-selection' | 'caregiver-dashboard' | 'caregiver-settings' | 'patient' | 'patient-settings' | 'account-linking';

export default function App() {
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
    <div className="min-h-screen bg-gray-50">
      {currentView === 'home' && (
        <div className="flex flex-col items-center justify-center min-h-screen p-6">
          <div className="max-w-md w-full space-y-8 text-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">CareConnect</h1>
              <p className="text-gray-600">Patient & Caregiver Reminder System</p>
            </div>
            
            <div className="space-y-4">
              <button
                onClick={() => setCurrentView('caregiver-login')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-medium transition-colors"
              >
                Caregiver Login
              </button>
              
              <button
                onClick={() => setCurrentView('patient')}
                className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg font-medium transition-colors"
              >
                Patient Interface
              </button>
              
              <button
                onClick={() => setCurrentView('account-linking')}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-4 rounded-lg font-medium transition-colors"
              >
                Link Account
              </button>
            </div>
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