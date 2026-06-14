import { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  Linking,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  subscribeRemindersForPatient,
  updateReminderDone,
} from '../src/services/firestoreData';

import type { Reminder } from '../src/services/firestoreData';

import { usePatientPreferences } from '../src/hooks/usePatientPreferences';
import { shouldPlayReminderSound } from '../src/services/patientPreferences';
import { playReminderSound } from '../src/services/reminderSound';

import { LogoMark } from './Logo';

const DEFAULT_CAREGIVER_PHONE = '+15551234567';

type PatientHomeScreenProps = {
  patientId: string | null;
  patientName: string | null;
  onSettings: () => void;
  onLinkAccount: () => void;
};

function formatTime(date: Date): string {
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  });
}

function getTextScale(textSize?: string): number {
  if (textSize === 'large') return 1.15;
  if (textSize === 'xlarge') return 1.3;
  return 1;
}

export function PatientHomeScreen({
  patientId,
  patientName,
  onSettings,
  onLinkAccount,
}: PatientHomeScreenProps) {
  const [now, setNow] = useState(new Date());
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [loading, setLoading] = useState(!!patientId);
  const [error, setError] = useState<string | null>(null);

  const { prefs } = usePatientPreferences();
  const prevTaskIdRef = useRef<string | null>(null);

  const textScale = getTextScale(prefs?.textSize);
  const currentTask = reminders[0] ?? null;

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!patientId) {
      setReminders([]);
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    const unsubscribe = subscribeRemindersForPatient(
      patientId,
      (list) => {
        setReminders(list.filter((reminder) => !reminder.done));
        setLoading(false);
      },
      (err) => {
        setError(err.message ?? 'Could not load reminders');
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [patientId]);

  useEffect(() => {
    if (!currentTask || loading) return;

    const previousTaskId = prevTaskIdRef.current;
    prevTaskIdRef.current = currentTask.id;

    if (
      previousTaskId &&
      previousTaskId !== currentTask.id &&
      shouldPlayReminderSound(prefs)
    ) {
      void playReminderSound(prefs.reminderSound);
    }
  }, [currentTask?.id, loading, prefs]);

  const handleMarkDone = async () => {
    if (!currentTask) return;

    try {
      await updateReminderDone(currentTask.id);

      setReminders((previousReminders) =>
        previousReminders.filter((reminder) => reminder.id !== currentTask.id)
      );
    } catch {
      setError('Could not mark reminder as done. Try again.');
    }
  };

  const handleCallForHelp = async () => {
    const phoneNumber = DEFAULT_CAREGIVER_PHONE.replace(/\s/g, '');
    const phoneUrl = `tel:${phoneNumber}`;

    try {
      await Linking.openURL(phoneUrl);
    } catch {
      setError('Could not open phone app.');
    }
  };

  if (!patientId) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.centerPage}>
          <LogoMark size="lg" style={styles.logoLarge} />

          <Text style={[styles.title, { fontSize: 30 * textScale }]}>
            Link your account
          </Text>

          <Text style={[styles.subtitle, { fontSize: 16 * textScale }]}>
            Enter the code from your caregiver to see reminders here.
          </Text>

          <View style={styles.buttonStack}>
            <Pressable onPress={onLinkAccount} style={styles.primaryButton}>
              <Text
                style={[
                  styles.primaryButtonText,
                  { fontSize: 18 * textScale },
                ]}
              >
                Enter linking code
              </Text>
            </Pressable>

            <Pressable onPress={onSettings} style={styles.ghostButton}>
              <Text
                style={[styles.ghostButtonText, { fontSize: 18 * textScale }]}
              >
                Settings
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <LogoMark size="sm" style={styles.logoSmall} />

            <View style={styles.headerTextContainer}>
              <Text style={[styles.patientTime, { fontSize: 28 * textScale }]}>
                {formatTime(now)}
              </Text>

              <Text style={[styles.patientDate, { fontSize: 16 * textScale }]}>
                {formatDate(now)}
              </Text>

              {patientName ? (
                <Text
                  style={[
                    styles.patientGreeting,
                    { fontSize: 16 * textScale },
                  ]}
                >
                  Hi, {patientName}
                </Text>
              ) : null}
            </View>
          </View>

          <Pressable onPress={onSettings} style={styles.settingsButton}>
            <Text
              style={[
                styles.settingsButtonText,
                { fontSize: 15 * textScale },
              ]}
            >
              Settings
            </Text>
          </Pressable>
        </View>

        <ScrollView contentContainerStyle={styles.main}>
          <Text style={[styles.sectionLabel, { fontSize: 14 * textScale }]}>
            Current task
          </Text>

          {error ? (
            <View style={styles.errorBanner}>
              <Text style={[styles.errorText, { fontSize: 14 * textScale }]}>
                {error}
              </Text>
            </View>
          ) : null}

          {loading ? (
            <View style={styles.taskCard}>
              <ActivityIndicator />
              <Text style={[styles.loadingText, { fontSize: 16 * textScale }]}>
                Loading reminder...
              </Text>
            </View>
          ) : currentTask ? (
            <View style={styles.taskCard}>
              {currentTask.photoUrl ? (
                <Image
                  source={{ uri: currentTask.photoUrl }}
                  style={styles.taskPhoto}
                  resizeMode="cover"
                />
              ) : null}

              <Text style={[styles.taskTitle, { fontSize: 30 * textScale }]}>
                {currentTask.title}
              </Text>

              <Text style={[styles.taskTime, { fontSize: 18 * textScale }]}>
                at {currentTask.time}
              </Text>

              <Pressable onPress={handleMarkDone} style={styles.doneButton}>
                <Text
                  style={[styles.doneButtonText, { fontSize: 20 * textScale }]}
                >
                  Mark as done
                </Text>
              </Pressable>
            </View>
          ) : (
            <View style={[styles.taskCard, styles.emptyTaskCard]}>
              <Text style={[styles.taskTitle, { fontSize: 30 * textScale }]}>
                All caught up
              </Text>

              <Text style={[styles.taskTime, { fontSize: 18 * textScale }]}>
                No reminders right now.
              </Text>
            </View>
          )}
        </ScrollView>

        <View style={styles.footer}>
          <Pressable onPress={handleCallForHelp} style={styles.helpButton}>
            <Text style={[styles.helpButtonText, { fontSize: 20 * textScale }]}>
              Call for help
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },

  screen: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },

  centerPage: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7F7F7',
  },

  logoLarge: {
    marginBottom: 24,
  },

  logoSmall: {
    marginTop: 4,
  },

  title: {
    fontWeight: '700',
    color: '#111111',
    textAlign: 'center',
    marginBottom: 10,
  },

  subtitle: {
    color: '#666666',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 28,
  },

  buttonStack: {
    width: '100%',
    gap: 14,
  },

  primaryButton: {
    minHeight: 60,
    backgroundColor: '#2563EB',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  primaryButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },

  ghostButton: {
    minHeight: 60,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  ghostButtonText: {
    color: '#111827',
    fontWeight: '700',
  },

  header: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 12,
  },

  headerLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },

  headerTextContainer: {
    flex: 1,
  },

  patientTime: {
    fontWeight: '700',
    color: '#111111',
    marginBottom: 2,
  },

  patientDate: {
    color: '#666666',
    marginBottom: 4,
  },

  patientGreeting: {
    color: '#2563EB',
    fontWeight: '600',
  },

  settingsButton: {
    backgroundColor: '#F3F4F6',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },

  settingsButtonText: {
    color: '#111827',
    fontWeight: '600',
  },

  main: {
    padding: 20,
    paddingBottom: 120,
  },

  sectionLabel: {
    fontWeight: '700',
    color: '#555555',
    textTransform: 'uppercase',
    marginBottom: 12,
  },

  errorBanner: {
    backgroundColor: '#FDECEC',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
  },

  errorText: {
    color: '#B00020',
  },

  taskCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 300,

    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 3,
  },

  emptyTaskCard: {
    backgroundColor: '#FFFFFF',
  },

  loadingText: {
    color: '#777777',
    marginTop: 12,
  },

  taskPhoto: {
    width: 160,
    height: 160,
    borderRadius: 20,
    backgroundColor: '#E5E7EB',
    marginBottom: 24,
  },

  taskTitle: {
    fontWeight: '700',
    color: '#111111',
    textAlign: 'center',
    lineHeight: 40,
    marginBottom: 8,
  },

  taskTime: {
    color: '#666666',
    textAlign: 'center',
    marginBottom: 24,
  },

  doneButton: {
    width: '100%',
    minHeight: 64,
    backgroundColor: '#16A34A',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  doneButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },

  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },

  helpButton: {
    minHeight: 64,
    backgroundColor: '#DC2626',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  helpButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});