import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  getRemindersSample,
  updateReminderDone,
} from '../src/services/firestoreData';

import type { Reminder } from '../src/services/firestoreData';

import { FullScreenAlert } from './FullScreenAlert';

type PatientInterfaceProps = {
  onSettings: () => void;
};

export function PatientInterface({ onSettings }: PatientInterfaceProps) {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [alertReminder, setAlertReminder] = useState<Reminder | null>(null);

  useEffect(() => {
    getRemindersSample(5)
      .then(setReminders)
      .catch((err) => setError(err?.message ?? 'Failed to load reminders'))
      .finally(() => setLoading(false));
  }, []);

  if (alertReminder) {
    return (
      <FullScreenAlert
        title={alertReminder.title}
        photoUrl={alertReminder.photoUrl}
        audioUrl={alertReminder.audioUrl}
        onDidIt={() => {
          updateReminderDone(alertReminder.id).catch(() => {});
          setAlertReminder(null);
        }}
        onRemindIn15Mins={() => setAlertReminder(null)}
      />
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.page}>
        <Pressable onPress={onSettings} style={styles.settingsButton}>
          <Text style={styles.settingsButtonText}>⚙️ Settings</Text>
        </Pressable>

        <View style={styles.card}>
          <Text style={styles.heading}>🔔 My reminders</Text>

          <Text style={styles.description}>
            What to do today. Reminders can come from your caregiver or ones you
            add yourself.
          </Text>

          <Text style={styles.smallDescription}>
            Tap “Add a reminder” below to add your own, for example call a
            friend or take a walk.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>💙 From your caregiver</Text>

        {error ? (
          <View style={styles.errorBanner}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : null}

        {loading ? (
          <View style={styles.loadingCard}>
            <ActivityIndicator />
            <Text style={styles.loadingText}>Loading reminders...</Text>
          </View>
        ) : reminders.length === 0 ? (
          <View style={styles.card}>
            <Text style={styles.emptyTitle}>
              No reminders from your caregiver yet.
            </Text>

            <Text style={styles.emptyText}>
              After you link your account with their code, their reminders will
              show here.
            </Text>
          </View>
        ) : (
          <View style={styles.list}>
            {reminders.map((reminder) => (
              <Pressable
                key={reminder.id}
                onPress={() => setAlertReminder(reminder)}
                style={styles.reminderCard}
              >
                {reminder.photoUrl ? (
                  <Image
                    source={{ uri: reminder.photoUrl }}
                    style={styles.reminderPhoto}
                    resizeMode="cover"
                  />
                ) : (
                  <View style={styles.iconBox}>
                    <Text style={styles.iconText}>🔔</Text>
                  </View>
                )}

                <View style={styles.reminderContent}>
                  <Text style={styles.reminderTitle}>{reminder.title}</Text>
                  <Text style={styles.reminderTime}>🕒 {reminder.time}</Text>
                </View>
              </Pressable>
            ))}
          </View>
        )}

        <Text style={styles.sectionTitle}>➕ Reminders I added</Text>

        <View style={styles.card}>
          <Text style={styles.description}>
            Your own reminders, for example “Call Mary at 3pm” or “Water the
            plants”.
          </Text>

          <Pressable style={styles.addButton}>
            <Text style={styles.addButtonText}>➕ Add a reminder</Text>
          </Pressable>

          <Text style={styles.smallDescription}>
            Add reminder form will appear here — title and time.
          </Text>
        </View>

        <View style={styles.exampleReminderCard}>
          <View style={styles.iconBox}>
            <Text style={styles.iconText}>📝</Text>
          </View>

          <View style={styles.reminderContent}>
            <Text style={styles.reminderTitle}>Call Mary</Text>
            <Text style={styles.reminderTime}>🕒 3:00 PM</Text>
            <Text style={styles.exampleText}>
              Example — you can add your own.
            </Text>
          </View>
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

  page: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: '#F7F7F7',
  },

  settingsButton: {
    minHeight: 60,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#D1D5DB',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,

    shadowColor: '#000000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 2,
  },

  settingsButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
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

  heading: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 12,
  },

  description: {
    fontSize: 18,
    color: '#4B5563',
    lineHeight: 26,
    marginBottom: 8,
  },

  smallDescription: {
    fontSize: 15,
    color: '#6B7280',
    lineHeight: 22,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#374151',
    textTransform: 'uppercase',
    marginBottom: 12,
  },

  errorBanner: {
    backgroundColor: '#FDECEC',
    borderWidth: 1,
    borderColor: '#F5C2C7',
    borderRadius: 14,
    padding: 16,
    marginBottom: 24,
  },

  errorText: {
    fontSize: 16,
    color: '#B00020',
  },

  loadingCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    marginBottom: 24,
    alignItems: 'center',
    gap: 10,

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
    fontSize: 16,
    color: '#6B7280',
  },

  emptyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 8,
  },

  emptyText: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 22,
  },

  list: {
    gap: 16,
    marginBottom: 24,
  },

  reminderCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
    borderLeftWidth: 5,
    borderLeftColor: '#2563EB',

    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 3,
  },

  exampleReminderCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
    borderLeftWidth: 5,
    borderLeftColor: '#16A34A',
    opacity: 0.8,
  },

  reminderPhoto: {
    width: 64,
    height: 64,
    borderRadius: 14,
    backgroundColor: '#E5E7EB',
  },

  iconBox: {
    width: 64,
    height: 64,
    borderRadius: 14,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconText: {
    fontSize: 26,
  },

  reminderContent: {
    flex: 1,
  },

  reminderTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 6,
  },

  reminderTime: {
    fontSize: 18,
    color: '#4B5563',
  },

  exampleText: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 6,
  },

  addButton: {
    minHeight: 60,
    backgroundColor: '#16A34A',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    marginBottom: 12,
  },

  addButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});