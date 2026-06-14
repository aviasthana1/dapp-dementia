import type { ReactNode } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  type GestureResponderEvent,
  type KeyboardTypeOptions,
  type NativeSyntheticEvent,
  type StyleProp,
  type TextInputChangeEventData,
  type TextInputProps,
  type TextStyle,
  type ViewStyle,
} from 'react-native';

import { LogoBrand } from './Logo';

export function Page({
  children,
  style,
}: {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={[styles.pageShell, style]}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

export function BackButton({
  onClick,
  onPress,
  label = 'Back',
}: {
  onClick?: () => void;
  onPress?: () => void;
  label?: string;
}) {
  const handlePress = onPress ?? onClick;

  return (
    <Pressable onPress={handlePress} style={styles.backButton}>
      <Text style={styles.backButtonText}>← {label}</Text>
    </Pressable>
  );
}

export function PageTitle({
  title,
  subtitle,
  showLogo = false,
}: {
  title: string;
  subtitle?: string;
  showLogo?: boolean;
}) {
  return (
    <View style={styles.pageHeader}>
      {showLogo ? (
        <LogoBrand
          size="sm"
          layout="row"
          showName={false}
          style={styles.pageTitleLogo}
        />
      ) : null}

      <Text style={styles.pageTitle}>{title}</Text>

      {subtitle ? <Text style={styles.pageSubtitle}>{subtitle}</Text> : null}
    </View>
  );
}

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';

type ButtonProps = {
  variant?: ButtonVariant;
  children: ReactNode;
  disabled?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  onClick?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  accessibilityLabel?: string;

  /**
   * Kept only so old code using type="button" or type="submit"
   * does not break TypeScript. React Native does not use button type.
   */
  type?: 'button' | 'submit' | 'reset';

  /**
   * Kept only for compatibility with older web code.
   * React Native does not use className.
   */
  className?: string;
};

export function Button({
  variant = 'primary',
  children,
  disabled = false,
  onPress,
  onClick,
  style,
  textStyle,
  accessibilityLabel,
}: ButtonProps) {
  const handlePress = onPress ?? onClick;

  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityState={{ disabled }}
      style={({ pressed }) => [
        styles.button,
        buttonStylesByVariant[variant],
        disabled && styles.disabledButton,
        pressed && !disabled && styles.pressedButton,
        style,
      ]}
    >
      <Text
        style={[
          styles.buttonText,
          buttonTextStylesByVariant[variant],
          disabled && styles.disabledButtonText,
          textStyle,
        ]}
      >
        {children}
      </Text>
    </Pressable>
  );
}

export function Card({
  children,
  style,
}: {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  className?: string;
}) {
  return <View style={[styles.card, style]}>{children}</View>;
}

export function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <View style={styles.field}>
      <Text style={styles.fieldLabel}>{label}</Text>
      {children}
    </View>
  );
}

type InputProps = TextInputProps & {
  className?: string;
  keyboardType?: KeyboardTypeOptions;
};

export function Input({
  style,
  onChange,
  onChangeText,
  value,
  placeholder,
  keyboardType,
  ...props
}: InputProps) {
  const handleChange = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    onChange?.(event);
  };

  return (
    <TextInput
      value={value === undefined ? undefined : String(value)}
      placeholder={placeholder}
      keyboardType={keyboardType}
      onChange={handleChange}
      onChangeText={onChangeText}
      style={[styles.input, style]}
      placeholderTextColor="#9CA3AF"
      {...props}
    />
  );
}

export function ErrorBanner({ message }: { message: string }) {
  return (
    <View accessibilityRole="alert" style={styles.errorBanner}>
      <Text style={styles.errorText}>{message}</Text>
    </View>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return <Text style={styles.sectionLabel}>{children}</Text>;
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },

  pageShell: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: '#F7F7F7',
  },

  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 16,
    paddingVertical: 8,
    paddingRight: 12,
  },

  backButtonText: {
    fontSize: 16,
    color: '#333333',
    fontWeight: '600',
  },

  pageHeader: {
    marginBottom: 24,
  },

  pageTitleLogo: {
    marginBottom: 12,
    alignSelf: 'flex-start',
  },

  pageTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111111',
    marginBottom: 8,
  },

  pageSubtitle: {
    fontSize: 16,
    color: '#666666',
    lineHeight: 22,
  },

  button: {
    minHeight: 56,
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },

  pressedButton: {
    opacity: 0.85,
  },

  disabledButton: {
    opacity: 0.5,
  },

  disabledButtonText: {
    opacity: 0.9,
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

  field: {
    marginBottom: 16,
  },

  fieldLabel: {
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

  sectionLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#555555',
    marginBottom: 12,
    textTransform: 'uppercase',
  },
});

const buttonStylesByVariant: Record<ButtonVariant, ViewStyle> = {
  primary: {
    backgroundColor: '#2563EB',
    borderColor: '#2563EB',
  },

  secondary: {
    backgroundColor: '#F3F4F6',
    borderColor: '#D1D5DB',
  },

  ghost: {
    backgroundColor: '#FFFFFF',
    borderColor: '#D1D5DB',
  },

  danger: {
    backgroundColor: '#DC2626',
    borderColor: '#DC2626',
  },
};

const buttonTextStylesByVariant: Record<ButtonVariant, TextStyle> = {
  primary: {
    color: '#FFFFFF',
  },

  secondary: {
    color: '#111827',
  },

  ghost: {
    color: '#111827',
  },

  danger: {
    color: '#FFFFFF',
  },
};