import { usePatientPreferences } from '../src/hooks/usePatientPreferences';
import type { TextSize } from '../src/services/patientPreferences';
import {
  playReminderSound,
  REMINDER_SOUND_OPTIONS,
} from '../src/services/reminderSound';

import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';

type PatientSettingsProps = {
  linkedPatientName: string | null;
  onBack: () => void;
  onLinkAccount?: () => void;
  onUnlink?: () => void;
};

const TEXT_SIZE_OPTIONS: { id: TextSize; label: string }[] = [
  { id: 'standard', label: 'Standard' },
  { id: 'large', label: 'Large' },
  { id: 'extra-large', label: 'Extra large' },
];

export function PatientSettings({
  linkedPatientName,
  onBack,
  onLinkAccount,
  onUnlink,
}: PatientSettingsProps) {
  const { prefs, update } = usePatientPreferences();

  const handlePreviewSound = () => {
    void playReminderSound(prefs.reminderSound);
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
            Display and account options for My Reminders.
          </Text>
        </View>

        <Text style={styles.sectionLabel}>Account</Text>

        {linkedPatientName ? (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Linked as {linkedPatientName}</Text>

            <Text style={styles.cardDescription}>
              Reminders sync from your caregiver&apos;s account.
            </Text>

            {onUnlink ? (
              <Pressable onPress={onUnlink} style={styles.dangerButton}>
                <Text style={styles.dangerButtonText}>Unlink account</Text>
              </Pressable>
            ) : null}
          </View>
        ) : onLinkAccount ? (
          <Pressable onPress={onLinkAccount} style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>
              Link with caregiver code
            </Text>
          </Pressable>
        ) : null}

        <Text style={styles.sectionLabel}>Display</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Text size</Text>
          <Text style={styles.cardDescription}>
            Applies to My Reminders screens.
          </Text>

          <View
            accessibilityRole="radiogroup"
            accessibilityLabel="Text size"
            style={styles.segmented}
          >
            {TEXT_SIZE_OPTIONS.map((option) => {
              const active = prefs.textSize === option.id;

              return (
                <Pressable
                  key={option.id}
                  onPress={() => update({ textSize: option.id })}
                  accessibilityRole="radio"
                  accessibilityState={{ checked: active }}
                  style={[
                    styles.segmentedItem,
                    active && styles.segmentedItemActive,
                  ]}
                >
                  <Text
                    style={[
                      styles.segmentedItemText,
                      active && styles.segmentedItemTextActive,
                    ]}
                  >
                    {option.label}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        <Text style={styles.sectionLabel}>Sound</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Reminder sound</Text>
          <Text style={styles.cardDescription}>
            Choose the sound used for reminder alerts.
          </Text>

          <View style={styles.optionList}>
            {REMINDER_SOUND_OPTIONS.map((option) => {
              const active = prefs.reminderSound === option.id;

              return (
                <Pressable
                  key={option.id}
                  onPress={() => update({ reminderSound: option.id })}
                  accessibilityRole="radio"
                  accessibilityState={{ checked: active }}
                  style={[
                    styles.optionRow,
                    active && styles.optionRowActive,
                  ]}
                >
                  <Text
                    style={[
                      styles.optionText,
                      active && styles.optionTextActive,
                    ]}
                  >
                    {option.label}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          <Pressable
            onPress={handlePreviewSound}
            disabled={prefs.reminderSound === 'none'}
            style={[
              styles.secondaryButton,
              prefs.reminderSound === 'none' && styles.disabledButton,
            ]}
          >
            <Text style={styles.secondaryButtonText}>Preview sound</Text>
          </Pressable>
        </View>

        <Text style={styles.sectionLabel}>Notifications</Text>

        <View style={styles.card}>
          <View style={styles.toggleRow}>
            <View style={styles.toggleTextContainer}>
              <Text style={styles.cardTitle}>Reminder alerts</Text>
              <Text style={styles.toggleDescription}>
                Play a sound when a new reminder appears.
              </Text>
            </View>

            <Switch
              value={prefs.notificationsEnabled}
              onValueChange={(value) =>
                update({ notificationsEnabled: value })
              }
            />
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.toggleRow}>
            <View style={styles.toggleTextContainer}>
              <Text style={styles.cardTitle}>Quiet hours</Text>
              <Text style={styles.toggleDescription}>
                Mute reminder sounds during these times.
              </Text>
            </View>

            <Switch
              value={prefs.quietHoursEnabled}
              onValueChange={(value) => update({ quietHoursEnabled: value })}
            />
          </View>

          {prefs.quietHoursEnabled ? (
            <View style={styles.quietHoursContainer}>
              <View style={styles.timeField}>
                <Text style={styles.inputLabel}>From</Text>
                <TextInput
                  value={prefs.quietHoursStart}
                  onChangeText={(value) => update({ quietHoursStart: value })}
                  placeholder="22:00"
                  style={styles.input}
                />
              </View>

              <View style={styles.timeField}>
                <Text style={styles.inputLabel}>To</Text>
                <TextInput
                  value={prefs.quietHoursEnd}
                  onChangeText={(value) => update({ quietHoursEnd: value })}
                  placeholder="07:00"
                  style={styles.input}
                />
              </View>
            </View>
          ) : null}
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

  backButton: {
    marginBottom: 16,
  },

  backButtonText: {
    fontSize: 16,
    color: '#333333',
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

  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111111',
    marginBottom: 6,
  },

  cardDescription: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
    marginBottom: 16,
  },

  primaryButton: {
    minHeight: 56,
    backgroundColor: '#2563EB',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
    marginBottom: 24,
  },

  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  secondaryButton: {
    minHeight: 52,
    backgroundColor: '#F3F4F6',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
    marginTop: 16,
  },

  secondaryButtonText: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '700',
  },

  dangerButton: {
    minHeight: 56,
    backgroundColor: '#DC2626',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
  },

  dangerButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  disabledButton: {
    opacity: 0.5,
  },

  segmented: {
    flexDirection: 'row',
    gap: 8,
  },

  segmentedItem: {
    flex: 1,
    minHeight: 48,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    backgroundColor: '#FFFFFF',
  },

  segmentedItemActive: {
    backgroundColor: '#2563EB',
    borderColor: '#2563EB',
  },

  segmentedItemText: {
    color: '#111827',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },

  segmentedItemTextActive: {
    color: '#FFFFFF',
  },

  optionList: {
    gap: 8,
  },

  optionRow: {
    minHeight: 48,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    justifyContent: 'center',
    paddingHorizontal: 14,
    backgroundColor: '#FFFFFF',
  },

  optionRowActive: {
    backgroundColor: '#2563EB',
    borderColor: '#2563EB',
  },

  optionText: {
    color: '#111827',
    fontSize: 15,
    fontWeight: '600',
  },

  optionTextActive: {
    color: '#FFFFFF',
  },

  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
  },

  toggleTextContainer: {
    flex: 1,
  },

  toggleDescription: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },

  quietHoursContainer: {
    marginTop: 20,
    gap: 14,
  },

  timeField: {
    width: '100%',
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
    color: '#111111',
  },
});