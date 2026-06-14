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

import {
  getCaregiverByEmail,
  getLinkingCodesForPatients,
  getPatientsForCaregiver,
} from '../src/services/firestoreData';

import type { LinkingCode, Patient } from '../src/services/firestoreData';

import {
  getHubPatientId,
  setHubPatientId,
} from '../src/services/roomTracking';

type CaregiverSettingsProps = {
  caregiverEmail: string;
  onBack: () => void;
  onSelectPatient: (patientId: string, patientName: string) => void;
};

export function CaregiverSettings({
  caregiverEmail,
  onBack,
  onSelectPatient,
}: CaregiverSettingsProps) {
  const [name, setName] = useState<string | null>(null);
  const [patients, setPatients] = useState<Patient[]>([]);
  const [linkingCodes, setLinkingCodes] = useState<LinkingCode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hubPatientId, setHubPatientIdState] = useState<string>('');

  useEffect(() => {
    let cancelled = false;

    const loadSettings = async () => {
      setLoading(true);
      setError(null);

      try {
        const caregiver = await getCaregiverByEmail(caregiverEmail);

        if (cancelled) return;

        setName(caregiver?.name ?? null);

        const patientList = await getPatientsForCaregiver(caregiverEmail);

        if (cancelled) return;

        setPatients(patientList);

        const codes = await getLinkingCodesForPatients(
          patientList.map((patient) => patient.id)
        );

        if (cancelled) return;

        setLinkingCodes(codes);

        const hubId = await getHubPatientId();

        if (cancelled) return;

        setHubPatientIdState(hubId ?? '');
      } catch (err) {
        if (!cancelled) {
          setError((err as Error)?.message ?? 'Failed to load settings');
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadSettings();

    return () => {
      cancelled = true;
    };
  }, [caregiverEmail]);

  const handleSelectHubPatient = async (patientId: string) => {
    setHubPatientIdState(patientId);

    try {
      await setHubPatientId(patientId || null);
    } catch (err) {
      setError((err as Error)?.message ?? 'Failed to update tracked patient');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.page}>
        <Pressable onPress={onBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </Pressable>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Settings</Text>
          <Text style={styles.subtitle}>
            {name ?? 'Caregiver'} · {caregiverEmail}
          </Text>
        </View>

        {error ? (
          <View style={styles.errorBanner}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : null}

        <Text style={styles.sectionLabel}>BLE hub</Text>

        <View style={styles.card}>
          <Text style={styles.bodyText}>
            ESP32 hub ENTRY events are copied into this patient&apos;s location
            history.
          </Text>

          {loading ? (
            <View style={styles.loadingRow}>
              <ActivityIndicator />
              <Text style={styles.loadingText}>Loading...</Text>
            </View>
          ) : (
            <>
              <Text style={styles.inputLabel}>Tracked patient</Text>

              <View style={styles.patientPickerList}>
                <Pressable
                  onPress={() => handleSelectHubPatient('')}
                  style={[
                    styles.patientPickerOption,
                    hubPatientId === '' && styles.selectedOption,
                  ]}
                >
                  <Text
                    style={[
                      styles.patientPickerText,
                      hubPatientId === '' && styles.selectedOptionText,
                    ]}
                  >
                    None
                  </Text>
                </Pressable>

                {patients.map((patient) => {
                  const selected = hubPatientId === patient.id;

                  return (
                    <Pressable
                      key={patient.id}
                      onPress={() => handleSelectHubPatient(patient.id)}
                      style={[
                        styles.patientPickerOption,
                        selected && styles.selectedOption,
                      ]}
                    >
                      <Text
                        style={[
                          styles.patientPickerText,
                          selected && styles.selectedOptionText,
                        ]}
                      >
                        {patient.name}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
            </>
          )}
        </View>

        <Text style={styles.sectionLabel}>Reminders</Text>

        <View style={styles.card}>
          <Text style={styles.bodyText}>
            When a patient marks a reminder done, it updates automatically in
            Firestore.
          </Text>
        </View>

        <Text style={styles.sectionLabel}>Patients</Text>

        {loading ? (
          <View style={styles.loadingCard}>
            <ActivityIndicator />
            <Text style={styles.loadingText}>Loading patients...</Text>
          </View>
        ) : patients.length === 0 ? (
          <Text style={styles.emptyText}>No patients assigned yet.</Text>
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

        {!loading ? (
          <>
            <Text style={styles.sectionLabel}>Linking codes</Text>

            <View style={styles.card}>
              <Text style={styles.bodyText}>
                Share a code so patients can link on the home screen.
              </Text>

              {linkingCodes.length === 0 ? (
                <Text style={styles.emptyTextSmall}>No codes found.</Text>
              ) : (
                <View style={styles.codeList}>
                  {linkingCodes.map((linkingCode) => (
                    <View key={linkingCode.code} style={styles.codeRow}>
                      <Text style={styles.codeText}>{linkingCode.code}</Text>
                      <Text style={styles.arrow}>→</Text>
                      <Text style={styles.codePatientName}>
                        {linkingCode.patientName}
                      </Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
          </>
        ) : null}
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

  backButton: {
    marginBottom: 16,
  },

  backButtonText: {
    fontSize: 16,
    color: '#333333',
    fontWeight: '600',
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

  sectionLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#555555',
    marginBottom: 12,
    textTransform: 'uppercase',
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,

    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 3,
  },

  bodyText: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
    marginBottom: 16,
  },

  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
  },

  patientPickerList: {
    gap: 8,
  },

  patientPickerOption: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    backgroundColor: '#FFFFFF',
  },

  selectedOption: {
    backgroundColor: '#2563EB',
    borderColor: '#2563EB',
  },

  patientPickerText: {
    fontSize: 15,
    color: '#111111',
  },

  selectedOptionText: {
    color: '#FFFFFF',
    fontWeight: '700',
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

  loadingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  loadingText: {
    fontSize: 14,
    color: '#777777',
  },

  emptyText: {
    fontSize: 14,
    color: '#777777',
    marginBottom: 24,
  },

  emptyTextSmall: {
    fontSize: 14,
    color: '#777777',
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
    fontSize: 16,
    fontWeight: '700',
    color: '#111111',
    marginBottom: 4,
  },

  rowHint: {
    fontSize: 14,
    color: '#666666',
  },

  codeList: {
    gap: 10,
  },

  codeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  codeText: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'monospace',
    color: '#111111',
  },

  arrow: {
    fontSize: 14,
    color: '#888888',
  },

  codePatientName: {
    fontSize: 14,
    color: '#333333',
  },
});