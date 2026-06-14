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
  getLinkingCodesForDemo,
  validateLinkingCode,
} from '../src/services/firestoreData';

import type { LinkingCode } from '../src/services/firestoreData';

type AccountLinkingProps = {
  onComplete: (patientId: string, patientName: string) => void;
  onBack: () => void;
};

export function AccountLinking({ onComplete, onBack }: AccountLinkingProps) {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [demoCodes, setDemoCodes] = useState<LinkingCode[]>([]);
  const [loadingCodes, setLoadingCodes] = useState(true);

  useEffect(() => {
    const loadDemoCodes = async () => {
      try {
        const codes = await getLinkingCodesForDemo();
        setDemoCodes(codes);
      } catch {
        setDemoCodes([]);
      } finally {
        setLoadingCodes(false);
      }
    };

    loadDemoCodes();
  }, []);

  const handleSubmit = async () => {
    const cleanedCode = code.trim().toUpperCase();

    setError('');

    if (!cleanedCode) {
      setError('Please enter a linking code.');
      return;
    }

    try {
      const result = await validateLinkingCode(cleanedCode);

      if (result) {
        onComplete(result.patientId, result.patientName);
      } else {
        setError('Code not found. Try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    }
  };

  const handleUseDemoCode = (demoCode: string) => {
    setCode(demoCode.toUpperCase());
    setError('');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.page}>
        <Pressable onPress={onBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </Pressable>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Link account</Text>
          <Text style={styles.subtitle}>
            Enter the code from your caregiver to see your reminders.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Linking code</Text>

          <TextInput
            value={code}
            onChangeText={(text) => {
              setCode(text.toUpperCase());
              setError('');
            }}
            placeholder="e.g. JAMES01"
            autoCapitalize="characters"
            autoCorrect={false}
            style={styles.input}
          />

          {error ? (
            <View style={styles.errorBanner}>
              <Text style={styles.errorText}>{error}</Text>
            </View>
          ) : null}

          <Pressable onPress={handleSubmit} style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Link account</Text>
          </Pressable>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionLabel}>Demo codes</Text>

          {loadingCodes ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator />
              <Text style={styles.loadingText}>Loading demo codes...</Text>
            </View>
          ) : demoCodes.length > 0 ? (
            <View style={styles.demoCodeList}>
              {demoCodes.map((demoCode) => (
                <Pressable
                  key={demoCode.code}
                  onPress={() => handleUseDemoCode(demoCode.code)}
                  style={styles.demoCodeRow}
                >
                  <Text style={styles.demoCode}>{demoCode.code}</Text>
                  <Text style={styles.arrow}>→</Text>
                  <Text style={styles.patientName}>
                    {demoCode.patientName}
                  </Text>
                </Pressable>
              ))}
            </View>
          ) : (
            <Text style={styles.emptyText}>No demo codes available.</Text>
          )}
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
    marginBottom: 16,

    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 3,
  },

  label: {
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
    marginBottom: 12,
    color: '#111111',
  },

  errorBanner: {
    backgroundColor: '#FDECEC',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
  },

  errorText: {
    color: '#B00020',
    fontSize: 14,
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

  sectionLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#555555',
    marginBottom: 12,
    textTransform: 'uppercase',
  },

  loadingContainer: {
    alignItems: 'center',
    gap: 8,
    paddingVertical: 8,
  },

  loadingText: {
    fontSize: 14,
    color: '#777777',
  },

  demoCodeList: {
    gap: 10,
  },

  demoCodeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 8,
  },

  demoCode: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'monospace',
    color: '#111111',
  },

  arrow: {
    fontSize: 14,
    color: '#888888',
  },

  patientName: {
    fontSize: 14,
    color: '#333333',
  },

  emptyText: {
    fontSize: 14,
    color: '#777777',
  },
});