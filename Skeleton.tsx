import {
  StyleSheet,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

type SkeletonProps = {
  style?: StyleProp<ViewStyle>;
};

export function Skeleton({ style }: SkeletonProps) {
  return (
    <View
      accessibilityElementsHidden
      importantForAccessibility="no"
      style={[styles.skeleton, style]}
    />
  );
}

export function ReminderListSkeleton({ count = 4 }: { count?: number }) {
  return (
    <View style={styles.stack}>
      {Array.from({ length: count }).map((_, index) => (
        <View key={index} style={styles.reminderCard}>
          <Skeleton style={styles.avatarSkeleton} />

          <View style={styles.flexContent}>
            <Skeleton style={styles.lineLarge} />
            <Skeleton style={styles.lineSmall} />
          </View>
        </View>
      ))}
    </View>
  );
}

export function PatientListSkeleton({ count = 3 }: { count?: number }) {
  return (
    <View style={styles.stack}>
      {Array.from({ length: count }).map((_, index) => (
        <Skeleton key={index} style={styles.fullRowSkeleton} />
      ))}
    </View>
  );
}

export function CaregiverListSkeleton({ count = 3 }: { count?: number }) {
  return (
    <View style={styles.stack}>
      {Array.from({ length: count }).map((_, index) => (
        <Skeleton key={index} style={styles.fullRowSkeleton} />
      ))}
    </View>
  );
}

export function CurrentTaskCardSkeleton() {
  return (
    <View style={styles.taskCard}>
      <Skeleton style={styles.taskTitleLine} />
      <Skeleton style={styles.taskTimeLine} />
      <Skeleton style={styles.taskButtonLine} />
    </View>
  );
}

export function CardBlockSkeleton() {
  return (
    <View style={styles.cardBlock}>
      <Skeleton style={styles.cardBlockFullLine} />
      <Skeleton style={styles.cardBlockShortLine} />
    </View>
  );
}

export function LocationHistorySkeleton({ count = 4 }: { count?: number }) {
  return (
    <View style={styles.stack}>
      {Array.from({ length: count }).map((_, index) => (
        <View key={index} style={styles.locationCard}>
          <Skeleton style={styles.locationTitleLine} />
          <Skeleton style={styles.locationTimeLine} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  skeleton: {
    backgroundColor: '#E5E7EB',
    borderRadius: 8,
  },

  stack: {
    gap: 12,
  },

  reminderCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
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

  avatarSkeleton: {
    width: 48,
    height: 48,
    borderRadius: 12,
  },

  flexContent: {
    flex: 1,
    gap: 8,
  },

  lineLarge: {
    height: 16,
    width: '75%',
  },

  lineSmall: {
    height: 12,
    width: '40%',
  },

  fullRowSkeleton: {
    height: 48,
    width: '100%',
    borderRadius: 12,
  },

  taskCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    gap: 12,

    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 3,
  },

  taskTitleLine: {
    height: 20,
    width: '75%',
  },

  taskTimeLine: {
    height: 16,
    width: '40%',
  },

  taskButtonLine: {
    height: 48,
    width: '100%',
    borderRadius: 14,
    marginTop: 8,
  },

  cardBlock: {
    marginTop: 8,
    gap: 8,
  },

  cardBlockFullLine: {
    height: 16,
    width: '100%',
  },

  cardBlockShortLine: {
    height: 16,
    width: '66%',
  },

  locationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
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

  locationTitleLine: {
    height: 16,
    width: 128,
  },

  locationTimeLine: {
    height: 12,
    width: 192,
  },
});