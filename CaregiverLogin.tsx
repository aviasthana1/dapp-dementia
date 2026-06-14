import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import {
  getCaregiverByEmail,
  getCaregivers,
} from '../src/services/firestoreData';

import type { Caregiver } from '../src/services/firestoreData';

type CaregiverLoginProps = {
  onLogin: (email: string) => void;
  onBack: () => void;
};

export function CaregiverLogin({ onLogin, onBack }: CaregiverLoginProps) {
  const [email, setEmail] = useState('');
  const [caregivers, setCaregivers] = useState<Caregiver[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCaregivers = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getCaregivers();
        setCaregivers(data);
      } catch (err) {
        setError((err as Error)?.message ?? 'Failed to load caregivers');
      } finally {
        setLoading(false);
      }
    };

    loadCaregivers();
  }, []);

  const handleSubmit = async () => {
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setError('Please enter an email address.');
      return;
    }

    setError(null);

    try {
      const caregiver = await getCaregiverByEmail(trimmedEmail);

      if (!caregiver) {
        setError('Email not found. Pick a caregiver below or use a demo email.');
        return;
      }

      onLogin(caregiver.email);
    } catch (err) {
      setError((err as Error)?.message ?? 'Login failed');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.page}>
        <Pressable onPress={onBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </Pressable>

        <View style={styles.titleContainer}>
          <Text style={styles.logo}>CareLink</Text>
          <Text style={styles.title}>Caregiver login</Text>
          <Text style={styles.subtitle}>
            Select a demo account or sign in with email.
          </Text>
        </View>

        {error ? (
          <View style={styles.errorBanner}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : null}

        <Text style={styles.sectionLabel}>Demo caregivers</Text>

        {loading ? (
          <View style={styles.loadingCard}>
            <ActivityIndicator />
            <Text style={styles.loadingText}>Loading caregivers...</Text>
          </View>
        ) : caregivers.length > 0 ? (
          <View style={styles.list}>
            {caregivers.map((caregiver) => (
              <Pressable
                key={caregiver.id}
                onPress={() => onLogin(caregiver.email)}
                style={styles.listRow}
              >
                <Text style={styles.caregiverName}>{caregiver.name}</Text>
                <Text style={styles.caregiverEmail}>{caregiver.email}</Text>
              </Pressable>
            ))}
          </View>
        ) : (
          <Text style={styles.emptyText}>No caregivers available.</Text>
        )}

        <View style={styles.card}>
          <Text style={styles.inputLabel}>Email</Text>

          <TextInput
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              setError(null);
            }}
            placeholder="your@email.com"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="emailAddress"
            style={styles.input}
          />

          <Pressable onPress={handleSubmit} style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Log in</Text>
          </Pressable>
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
    fontWeight: '600',
  },

  titleContainer: {
    marginBottom: 24,
  },

  logo: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2563EB',
    marginBottom: 8,
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

  caregiverName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111111',
    marginBottom: 4,
  },

  caregiverEmail: {
    fontSize: 14,
    color: '#666666',
  },

  emptyText: {
    fontSize: 14,
    color: '#777777',
    marginBottom: 24,
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
});