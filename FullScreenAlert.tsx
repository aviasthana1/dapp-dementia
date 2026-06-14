import { useEffect } from 'react';
import {
  Image,
  Linking,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export type FullScreenAlertProps = {
  /** Reminder title shown in the alert */
  title: string;

  /** Optional URL to a photo, for example pill organizer or pet */
  photoUrl?: string;

  /** Optional URL to voice/audio message */
  audioUrl?: string;

  /** Called when the user taps "I did it" */
  onDidIt: () => void;

  /** Called when the user taps "Remind me in 15 mins" */
  onRemindIn15Mins: () => void;
};

export function FullScreenAlert({
  title,
  photoUrl,
  audioUrl,
  onDidIt,
  onRemindIn15Mins,
}: FullScreenAlertProps) {
  useEffect(() => {
    // The original web version used window.AudioContext to play a chime.
    // React Native does not have window.AudioContext.
    // Later, you can add expo-av if you want a real in-app chime.
  }, []);

  const handleOpenAudio = async () => {
    if (!audioUrl) return;

    try {
      await Linking.openURL(audioUrl);
    } catch {
      console.log('Could not open audio URL');
    }
  };

  return (
    <SafeAreaView
      style={styles.safeArea}
      accessibilityRole="alert"
      accessibilityLabel={title}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          {photoUrl ? (
            <Image
              source={{ uri: photoUrl }}
              style={styles.photo}
              resizeMode="cover"
            />
          ) : null}

          <Text style={styles.title}>{title}</Text>

          {audioUrl ? (
            <View style={styles.audioCard}>
              <Text style={styles.audioLabel}>Voice message</Text>

              <Pressable onPress={handleOpenAudio} style={styles.audioButton}>
                <Text style={styles.audioButtonText}>Play voice message</Text>
              </Pressable>
            </View>
          ) : null}

          <View style={styles.buttonContainer}>
            <Pressable onPress={onDidIt} style={styles.doneButton}>
              <Text style={styles.doneButtonText}>I did it</Text>
            </Pressable>

            <Pressable
              onPress={onRemindIn15Mins}
              style={styles.remindButton}
            >
              <Text style={styles.remindButtonText}>
                Remind me in 15 mins
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 12,
    borderColor: '#2563EB',
  },

  container: {
    flex: 1,
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    width: '100%',
    maxWidth: 520,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 32,
  },

  photo: {
    width: 128,
    height: 128,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#E5E7EB',
    backgroundColor: '#F3F4F6',
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#111827',
    textAlign: 'center',
    lineHeight: 42,
  },

  audioCard: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#E5E7EB',
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    padding: 16,
  },

  audioLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4B5563',
    marginBottom: 10,
  },

  audioButton: {
    minHeight: 52,
    borderRadius: 12,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },

  audioButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  buttonContainer: {
    width: '100%',
    gap: 16,
  },

  doneButton: {
    minHeight: 64,
    width: '100%',
    backgroundColor: '#16A34A',
    borderWidth: 2,
    borderColor: '#16A34A',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  doneButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },

  remindButton: {
    minHeight: 64,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#9CA3AF',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  remindButtonText: {
    color: '#1F2937',
    fontSize: 20,
    fontWeight: '700',
  },
});