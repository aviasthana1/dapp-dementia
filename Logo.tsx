import {
  StyleSheet,
  Text,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

type LogoSize = 'sm' | 'md' | 'lg';

const SIZES: Record<LogoSize, number> = {
  sm: 32,
  md: 40,
  lg: 56,
};

type LogoMarkProps = {
  size?: LogoSize;
  style?: StyleProp<ViewStyle>;
};

/**
 * React Native logo mark.
 * This replaces the web SVG version.
 */
export function LogoMark({ size = 'md', style }: LogoMarkProps) {
  const px = SIZES[size];

  const nodeSize = px * 0.23;
  const nodeBorder = Math.max(1.5, px * 0.04);
  const connectorWidth = px * 0.12;
  const dotSize = px * 0.1;

  return (
    <View
      accessibilityElementsHidden
      importantForAccessibility="no"
      style={[
        styles.mark,
        {
          width: px,
          height: px,
          borderRadius: px * 0.25,
        },
        style,
      ]}
    >
      <View style={styles.nodesRow}>
        <View
          style={[
            styles.node,
            {
              width: nodeSize,
              height: nodeSize,
              borderRadius: nodeSize / 2,
              borderWidth: nodeBorder,
            },
          ]}
        />

        <View
          style={[
            styles.connector,
            {
              width: connectorWidth,
              height: nodeBorder,
              borderRadius: nodeBorder / 2,
            },
          ]}
        />

        <View
          style={[
            styles.node,
            {
              width: nodeSize,
              height: nodeSize,
              borderRadius: nodeSize / 2,
              borderWidth: nodeBorder,
            },
          ]}
        />
      </View>

      <View
        style={[
          styles.dot,
          {
            width: dotSize,
            height: dotSize,
            borderRadius: dotSize / 2,
            bottom: px * 0.2,
          },
        ]}
      />
    </View>
  );
}

type LogoBrandProps = {
  size?: LogoSize;
  showName?: boolean;
  layout?: 'stack' | 'row';
  style?: StyleProp<ViewStyle>;
};

export function LogoBrand({
  size = 'md',
  showName = true,
  layout = 'stack',
  style,
}: LogoBrandProps) {
  return (
    <View
      accessibilityRole="image"
      accessibilityLabel="CareConnect"
      style={[
        styles.brand,
        layout === 'row' ? styles.brandRow : styles.brandStack,
        style,
      ]}
    >
      <LogoMark size={size} />

      {showName && <Text style={styles.brandName}>CareConnect</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  mark: {
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
  },

  nodesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  node: {
    borderColor: '#FFFFFF',
  },

  connector: {
    backgroundColor: '#FFFFFF',
  },

  dot: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
  },

  brand: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  brandStack: {
    flexDirection: 'column',
    gap: 8,
  },

  brandRow: {
    flexDirection: 'row',
    gap: 10,
  },

  brandName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
  },
});