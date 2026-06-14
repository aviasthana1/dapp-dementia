import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import {
  createReminder,
  deleteReminder,
  getRemindersForPatient,
  subscribeLocationHistoryForPatient,
} from '../src/services/firestoreData';

import type {
  PatientLocationEvent,
  Reminder,
} from '../src/services/firestoreData';

import {
  startHubLocationSync,
  subscribeRoomStates,
  type RoomState,
} from '../src/services/roomTracking';

type CaregiverDashboardProps = {
  caregiverEmail: string;
  patientId: string;
  patientName: string;
  onLogout: () => void;
  onBack: () => void;
};

function formatLocationTime(epoch: number): string {
  if (!Number.isFinite(epoch)) return 'Unknown time';

  const ms = epoch > 1e12 ? epoch : epoch * 1000;

  return new Date(ms).toLocaleString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

export function CaregiverDashboard({
  patientId,
  patientName,
  onLogout,
  onBack,
}: CaregiverDashboardProps) {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [showAddForm, setShowAddForm] = useState(false);
  const [addTitle, setAddTitle] = useState('');
  const [addTime, setAddTime] = useState('');
  const [adding, setAdding] = useState(false);

  const [locationHistory, setLocationHistory] = useState<
    PatientLocationEvent[]
  >([]);
  const [locationLoading, setLocationLoading] = useState(true);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [roomStates, setRoomStates] = useState<RoomState[]>([]);

  const loadReminders = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await getRemindersForPatient(patientId);
      setReminders(data);
    } catch (err) {
      setError((err as Error)?.message ?? 'Failed to load reminders');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadReminders();
  }, [patientId]);

  useEffect(() => {
    setLocationLoading(true);
    setLocationError(null);

    const unsubLocation = subscribeLocationHistoryForPatient(
      patientId,
      (events) => {
        setLocationHistory(events);
        setLocationLoading(false);
      },
      (err) => {
        setLocationError(err.message ?? 'Failed to load location history');
        setLocationLoading(false);
      }
    );

    const unsubHub = startHubLocationSync(patientId, (err) => {
      setLocationError(err.message ?? 'Hub sync failed');
    });

    const unsubRooms = subscribeRoomStates(setRoomStates);

    return () => {
      unsubLocation();
      unsubHub();
      unsubRooms();
    };
  }, [patientId]);

  const handleDeleteReminder = (reminderId: string, reminderTitle: string) => {
    Alert.alert(
      'Delete reminder?',
      `Are you sure you want to delete "${reminderTitle}"?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            setError(null);

            try {
              await deleteReminder(reminderId);
              await loadReminders();
            } catch (err) {
              setError(
                (err as Error)?.message ?? 'Failed to delete reminder'
              );
            }
          },
        },
      ]
    );
  };

  const handleAddReminder = async () => {
    const title = addTitle.trim();
    const time = addTime.trim();

    if (!title || !time) {
      setError('Please enter both a title and a time.');
      return;
    }

    setAdding(true);
    setError(null);

    try {
      await createReminder(patientId, {
        title,
        time,
      });

      setAddTitle('');
      setAddTime('');
      setShowAddForm(false);

      await loadReminders();
    } catch (err) {
      setError((err as Error)?.message ?? 'Failed to add reminder');
    } finally {
      setAdding(false);
    }
  };

  const handleCancelAdd = () => {
    setShowAddForm(false);
    setAddTitle('');
    setAddTime('');
    setError(null);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.page}>
        <Pressable onPress={onBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Patients</Text>
        </Pressable>

        <Pressable onPress={onLogout} style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Log out</Text>
        </Pressable>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>{patientName}</Text>
          <Text style={styles.subtitle}>
            Manage reminders and view location history.
          </Text>
        </View>

        <View style={styles.card}>
          {!showAddForm ? (
            <Pressable
              onPress={() => setShowAddForm(true)}
              style={styles.primaryButton}
            >
              <Text style={styles.primaryButtonText}>Add reminder</Text>
            </Pressable>
          ) : (
            <View>
              <Text style={styles.inputLabel}>Title</Text>

              <TextInput
                value={addTitle}
                onChangeText={setAddTitle}
                placeholder="Take morning medication"
                style={styles.input}
              />

              <Text style={styles.inputLabel}>Time</Text>

              <TextInput
                value={addTime}
                onChangeText={setAddTime}
                placeholder="8:00 AM"
                style={styles.input}
              />

              <Text style={styles.photoNote}>
                Photo upload was removed here because browser file inputs do
                not work in React Native.
              </Text>

              <View style={styles.buttonRow}>
                <Pressable
                  onPress={handleAddReminder}
                  disabled={adding}
                  style={[
                    styles.primaryButton,
                    styles.flexButton,
                    adding && styles.disabledButton,
                  ]}
                >
                  <Text style={styles.primaryButtonText}>
                    {adding ? 'Adding…' : 'Save'}
                  </Text>
                </Pressable>

                <Pressable
                  onPress={handleCancelAdd}
                  disabled={adding}
                  style={[
                    styles.secondaryButton,
                    styles.flexButton,
                    adding && styles.disabledButton,
                  ]}
                >
                  <Text style={styles.secondaryButtonText}>Cancel</Text>
                </Pressable>
              </View>
            </View>
          )}
        </View>

        <Text style={styles.sectionLabel}>Reminders</Text>

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
          <Text style={styles.emptyText}>No reminders yet.</Text>
        ) : (
          <View style={styles.list}>
            {reminders.map((reminder) => (
              <View key={reminder.id} style={styles.reminderCard}>
                {reminder.photoUrl ? (
                  <Image
                    source={{ uri: reminder.photoUrl }}
                    style={styles.reminderPhoto}
                  />
                ) : null}

                <View style={styles.reminderContent}>
                  <Text style={styles.reminderTitle}>{reminder.title}</Text>

                  <Text style={styles.reminderTime}>
                    🕒 {reminder.time}
                    {reminder.done ? ' · Done' : ''}
                  </Text>
                </View>

                <Pressable
                  onPress={() =>
                    handleDeleteReminder(reminder.id, reminder.title)
                  }
                  style={styles.deleteButton}
                >
                  <Text style={styles.deleteButtonText}>🗑</Text>
                </Pressable>
              </View>
            ))}
          </View>
        )}

        {roomStates.length > 0 ? (
          <>
            <Text style={styles.sectionLabel}>BLE hub — live rooms</Text>

            <View style={styles.list}>
              {roomStates.map((room) => (
                <View key={room.id} style={styles.roomCard}>
                  <Text style={styles.roomName}>{room.name}</Text>

                  <Text style={styles.roomTime}>
                    {room.lastEntry > 0
                      ? `Last entry ${formatLocationTime(room.lastEntry)}`
                      : 'No entry yet'}
                  </Text>
                </View>
              ))}
            </View>
          </>
        ) : null}

        <Text style={styles.sectionLabel}>Location history</Text>

        {locationError ? (
          <View style={styles.errorBanner}>
            <Text style={styles.errorText}>{locationError}</Text>
          </View>
        ) : null}

        {locationLoading ? (
          <View style={styles.loadingCard}>
            <ActivityIndicator />
            <Text style={styles.loadingText}>Loading location history...</Text>
          </View>
        ) : locationHistory.length === 0 ? (
          <Text style={styles.emptyText}>No location events yet.</Text>
        ) : (
          <View style={styles.list}>
            {locationHistory.map((event, index) => (
              <View key={event.id} style={styles.locationCard}>
                <Text
                  style={[
                    styles.locationRoom,
                    index === 0 && styles.latestLocation,
                  ]}
                >
                  {index === 0 ? `Latest: ${event.room}` : event.room}
                </Text>

                <Text style={styles.locationTime}>
                  {formatLocationTime(event.time)}
                </Text>
              </View>
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

  backButton: {
    marginBottom: 12,
  },

  backButtonText: {
    fontSize: 16,
    color: '#333333',
    fontWeight: '600',
  },

  logoutButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 20,
  },

  logoutButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
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

  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
  },

  input: {
    minHeight: 52,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
    color: '#111111',
  },

  photoNote: {
    fontSize: 13,
    color: '#777777',
    marginBottom: 16,
    lineHeight: 18,
  },

  buttonRow: {
    flexDirection: 'row',
    gap: 10,
  },

  flexButton: {
    flex: 1,
  },

  primaryButton: {
    minHeight: 56,
    backgroundColor: '#2563EB',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
  },

  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  secondaryButton: {
    minHeight: 56,
    backgroundColor: '#F3F4F6',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
  },

  secondaryButtonText: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '700',
  },

  disabledButton: {
    opacity: 0.5,
  },

  sectionLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#555555',
    marginBottom: 12,
    textTransform: 'uppercase',
  },

  errorBanner: {
    backgroundColor: '#FDECEC',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
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

  loadingText: {
    fontSize: 14,
    color: '#777777',
  },

  emptyText: {
    fontSize: 14,
    color: '#777777',
    marginBottom: 24,
  },

  list: {
    gap: 12,
    marginBottom: 24,
  },

  reminderCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,

    shadowColor: '#000000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 2,
  },

  reminderPhoto: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: '#E5E7EB',
  },

  reminderContent: {
    flex: 1,
  },

  reminderTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111111',
    marginBottom: 4,
  },

  reminderTime: {
    fontSize: 14,
    color: '#666666',
  },

  deleteButton: {
    padding: 4,
  },

  deleteButtonText: {
    fontSize: 18,
  },

  roomCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
  },

  roomName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111111',
    marginBottom: 4,
  },

  roomTime: {
    fontSize: 14,
    color: '#666666',
  },

  locationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
  },

  locationRoom: {
    fontSize: 16,
    color: '#111111',
  },

  latestLocation: {
    fontWeight: '700',
  },

  locationTime: {
    fontSize: 14,
    color: '#666666',
    marginTop: 4,
  },
});