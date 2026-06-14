import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { getPatientsForCaregiver } from '../src/services/firestoreData';
import type { Patient } from '../src/services/firestoreData';

type PatientSelectionDashboardProps = {
  caregiverEmail: string;
  onSelectPatient: (patientId: string, patientName: string) => void;
  onLogout: () => void;
  onSettings: () => void;
};

export function PatientSelectionDashboard({
  caregiverEmail,
  onSelectPatient,
  onLogout,
  onSettings,
}: PatientSelectionDashboardProps) {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getPatientsForCaregiver(caregiverEmail)
      .then(setPatients)
      .catch((err) => setError(err?.message ?? 'Failed to load patients'))
      .finally(() => setLoading(false));
  }, [caregiverEmail]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.page}>
        <View style={styles.topButtonRow}>
          <Pressable onPress={onSettings} style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Settings</Text>
          </Pressable>

          <Pressable onPress={onLogout} style={styles.ghostButton}>
            <Text style={styles.ghostButtonText}>Log out</Text>
          </Pressable>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Choose patient</Text>
          <Text style={styles.subtitle}>Signed in as {caregiverEmail}</Text>
        </View>

        {error ? (
          <View style={styles.errorBanner}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : null}

        <Text style={styles.sectionLabel}>Your patients</Text>

        {loading ? (
          <View style={styles.loadingCard}>
            <ActivityIndicator />
            <Text style={styles.loadingText}>Loading patients...</Text>
          </View>
        ) : patients.length === 0 ? (
          <View style={styles.emptyCard}>
            <Text style={styles.emptyText}>
              No patients yet. Share a linking code from Settings.
            </Text>
          </View>
        ) : (
          <View style={styles.list}>
            {patients.map((patient) => (
              <Pressable
                key={patient.id}
                onPress={() => onSelectPatient(patient.id, patient.name)}
                style={styles.listRow}
              >
                <Text style={styles.patientName}>{patient.name}</Text>
                <Text style={styles.rowHint}>Open dashboard →</Text>
              </Pressable>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },

  page: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: '#F7F7F7',
  },

  topButtonRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 24,
  },

  secondaryButton: {
    flex: 1,
    minHeight: 52,
    backgroundColor: '#2563EB',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },

  secondaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  ghostButton: {
    flex: 1,
    minHeight: 52,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },

  ghostButtonText: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '700',
  },

  titleContainer: {
    marginBottom: 24,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111111',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    color: '#666666',
    lineHeight: 22,
  },

  errorBanner: {
    backgroundColor: '#FDECEC',
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
  },

  errorText: {
    color: '#B00020',
    fontSize: 14,
  },

  sectionLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#555555',
    marginBottom: 12,
    textTransform: 'uppercase',
  },

  loadingCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    alignItems: 'center',
    gap: 8,

    shadowColor: '#000000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 2,
  },

  loadingText: {
    fontSize: 14,
    color: '#777777',
  },

  emptyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
  },

  emptyText: {
    fontSize: 14,
    color: '#777777',
    lineHeight: 20,
  },

  list: {
    gap: 12,
    marginBottom: 24,
  },

  listRow: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,

    shadowColor: '#000000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 2,
  },

  patientName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111111',
    marginBottom: 4,
  },

  rowHint: {
    fontSize: 14,
    color: '#666666',
  },
});