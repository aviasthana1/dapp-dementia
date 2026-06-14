import { useEffect, useState } from 'react';
import {
  Linking,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { seedInitialDataIfEmpty } from './src/services/firestoreData';
import { firebaseProjectId } from './src/services/firebase';

import {
  getStoredCaregiverEmail,
  getStoredLinkedPatient,
  setStoredCaregiverEmail,
  setStoredLinkedPatient,
} from './src/services/session';

import { AccountLinking } from './components/AccountLinking';
import { Button } from './components/ui';
import { CaregiverDashboard } from './components/CaregiverDashboard';
import { CaregiverLogin } from './components/CaregiverLogin';
import { CaregiverSettings } from './components/CaregiverSettings';
import { LogoBrand } from './components/Logo';
import { PatientHomeScreen } from './components/PatientHomeScreen';
import { PatientSelectionDashboard } from './components/PatientSelectionDashboard';
import { PatientSettings } from './components/PatientSettings';

type AppView =
  | 'home'
  | 'caregiver-login'
  | 'patient-selection'
  | 'caregiver-dashboard'
  | 'caregiver-settings'
  | 'patient'
  | 'patient-settings'
  | 'account-linking';

export default function App() {
  const [firebaseError, setFirebaseError] = useState<string | null>(null);

  const [currentView, setCurrentView] = useState<AppView>('home');

  const [isLoggedIn, setIsLoggedIn] = useState(
    () => !!getStoredCaregiverEmail()
  );

  const [currentCaregiver, setCurrentCaregiver] = useState<string | null>(
    () => getStoredCaregiverEmail()
  );

  const [selectedPatientId, setSelectedPatientId] = useState<string | null>(
    null
  );

  const [selectedPatientName, setSelectedPatientName] = useState<string | null>(
    null
  );

  const [linkedPatientId, setLinkedPatientId] = useState<string | null>(
    () => getStoredLinkedPatient()?.id ?? null
  );

  const [linkedPatientName, setLinkedPatientName] = useState<string | null>(
    () => getStoredLinkedPatient()?.name ?? null
  );

  const [accountLinkReturnView, setAccountLinkReturnView] =
    useState<AppView>('home');

  useEffect(() => {
    seedInitialDataIfEmpty().catch((err) => {
      const message = err?.message ?? '';

      if (message.includes('permission') || message.includes('Permission')) {
        setFirebaseError(
          'Firestore permission denied. Add rules in Firebase Console → Firestore → Rules.'
        );
      }

      console.warn('Firebase seed:', err);
    });
  }, []);

  const handleOpenFirebaseRules = async () => {
    const url = `https://console.firebase.google.com/project/${firebaseProjectId}/firestore/rules`;

    try {
      await Linking.openURL(url);
    } catch {
      console.warn('Could not open Firebase rules URL');
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
  };

  const renderFirebaseError = () => {
    if (!firebaseError) return null;

    return (
      <View style={styles.warningBanner}>
        <Text style={styles.warningText}>{firebaseError}</Text>

        <View style={styles.warningActions}>
          <Pressable
            onPress={handleOpenFirebaseRules}
            style={styles.warningButton}
          >
            <Text style={styles.warningButtonText}>Open rules</Text>
          </Pressable>

          <Pressable
            onPress={() => setFirebaseError(null)}
            style={styles.warningButton}
          >
            <Text style={styles.warningButtonText}>Dismiss</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  if (currentView === 'caregiver-login') {
    return (
      <>
        {renderFirebaseError()}

        <CaregiverLogin
          onLogin={handleCaregiverLogin}
          onBack={() => setCurrentView('home')}
        />
      </>
    );
  }

  if (currentView === 'patient-selection' && isLoggedIn && currentCaregiver) {
    return (
      <>
        {renderFirebaseError()}

        <PatientSelectionDashboard
          caregiverEmail={currentCaregiver}
          onSelectPatient={handlePatientSelect}
          onLogout={handleLogout}
          onSettings={() => setCurrentView('caregiver-settings')}
        />
      </>
    );
  }

  if (currentView === 'caregiver-settings' && isLoggedIn && currentCaregiver) {
    return (
      <>
        {renderFirebaseError()}

        <CaregiverSettings
          caregiverEmail={currentCaregiver}
          onBack={() => setCurrentView('patient-selection')}
          onSelectPatient={handlePatientSelect}
        />
      </>
    );
  }

  if (
    currentView === 'caregiver-dashboard' &&
    isLoggedIn &&
    currentCaregiver &&
    selectedPatientId &&
    selectedPatientName
  ) {
    return (
      <>
        {renderFirebaseError()}

        <CaregiverDashboard
          caregiverEmail={currentCaregiver}
          patientId={selectedPatientId}
          patientName={selectedPatientName}
          onLogout={handleLogout}
          onBack={handleBackToPatientSelection}
        />
      </>
    );
  }

  if (currentView === 'patient') {
    return (
      <>
        {renderFirebaseError()}

        <PatientHomeScreen
          patientId={linkedPatientId}
          patientName={linkedPatientName}
          onSettings={() => setCurrentView('patient-settings')}
          onLinkAccount={() => {
            setAccountLinkReturnView('patient');
            setCurrentView('account-linking');
          }}
        />
      </>
    );
  }

  if (currentView === 'patient-settings') {
    return (
      <>
        {renderFirebaseError()}

        <PatientSettings
          linkedPatientName={linkedPatientName}
          onBack={() => setCurrentView('patient')}
          onLinkAccount={() => {
            setAccountLinkReturnView('patient-settings');
            setCurrentView('account-linking');
          }}
          onUnlink={handleUnlinkPatient}
        />
      </>
    );
  }

  if (currentView === 'account-linking') {
    return (
      <>
        {renderFirebaseError()}

        <AccountLinking
          onComplete={handleLinkComplete}
          onBack={() => setCurrentView(accountLinkReturnView)}
        />
      </>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      {renderFirebaseError()}

      <ScrollView contentContainerStyle={styles.homePage}>
        <View style={styles.landingHeader}>
          <LogoBrand size="lg" />

          <Text style={styles.subtitle}>
            Reminders for patients and caregivers
          </Text>
        </View>

        <View style={styles.mainActions}>
          <Button onPress={() => setCurrentView('patient')} style={styles.fullButton}>
            My reminders
          </Button>
        </View>

        <View style={styles.footerActions}>
          <Button
            variant="secondary"
            onPress={() => {
              if (isLoggedIn && currentCaregiver) {
                setCurrentView('patient-selection');
              } else {
                setCurrentView('caregiver-login');
              }
            }}
            style={styles.fullButton}
          >
            Caregiver login
          </Button>

          <Button
            variant="ghost"
            onPress={() => {
              setAccountLinkReturnView('home');
              setCurrentView('account-linking');
            }}
            style={styles.fullButton}
          >
            Link account
          </Button>

          <Text style={styles.hint}>
            Ask your caregiver for a linking code.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },

  homePage: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: '#F7F7F7',
    justifyContent: 'space-between',
  },

  warningBanner: {
    backgroundColor: '#FEF3C7',
    borderBottomWidth: 1,
    borderBottomColor: '#F59E0B',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  warningText: {
    color: '#92400E',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 10,
  },

  warningActions: {
    flexDirection: 'row',
    gap: 10,
  },

  warningButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F59E0B',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },

  warningButtonText: {
    color: '#92400E',
    fontSize: 14,
    fontWeight: '700',
  },

  landingHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 48,
  },

  subtitle: {
    marginTop: 16,
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 22,
  },

  mainActions: {
    width: '100%',
    gap: 16,
  },

  footerActions: {
    width: '100%',
    gap: 14,
    paddingBottom: 24,
  },

  fullButton: {
    width: '100%',
  },

  hint: {
    fontSize: 14,
    color: '#777777',
    textAlign: 'center',
    marginTop: 4,
  },
});