import type { ReactNode } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  type GestureResponderEvent,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from 'react-native';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

export interface ButtonProps {
  variant?: ButtonVariant;

  /**
   * Use Bold (700) when true, otherwise Medium (500).
   */
  bold?: boolean;

  children: ReactNode;

  disabled?: boolean;

  onPress?: (event: GestureResponderEvent) => void;

  /**
   * Kept so old code using onClick does not immediately break.
   * In React Native, prefer onPress.
   */
  onClick?: () => void;

  style?: StyleProp<ViewStyle>;

  textStyle?: StyleProp<TextStyle>;

  accessibilityLabel?: string;

  /**
   * Kept only so old web code using type="button" does not break TypeScript.
   * React Native does not use button type.
   */
  type?: 'button' | 'submit' | 'reset';

  /**
   * Kept only so old web code using className does not break TypeScript.
   * React Native does not use className.
   */
  className?: string;
}

/**
 * React Native accessibility-focused Button.
 * Min-height 60px, 20px radius, Medium (500) or Bold (700) only.
 * Use for elderly-friendly, high-contrast interfaces.
 */
export function Button({
  variant = 'primary',
  bold = false,
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
          styles.text,
          textStylesByVariant[variant],
          bold ? styles.boldText : styles.mediumText,
          disabled && styles.disabledText,
          textStyle,
        ]}
      >
        {children}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 60,
    borderRadius: 20,
    paddingHorizontal: 24,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },

  text: {
    fontSize: 16,
    textAlign: 'center',
  },

  mediumText: {
    fontWeight: '500',
  },

  boldText: {
    fontWeight: '700',
  },

  pressedButton: {
    opacity: 0.85,
  },

  disabledButton: {
    opacity: 0.5,
  },

  disabledText: {
    opacity: 0.8,
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

  outline: {
    backgroundColor: 'transparent',
    borderColor: '#2563EB',
    borderWidth: 2,
  },

  ghost: {
    backgroundColor: 'transparent',
    borderColor: '#D1D5DB',
  },
};

const textStylesByVariant: Record<ButtonVariant, TextStyle> = {
  primary: {
    color: '#FFFFFF',
  },

  secondary: {
    color: '#111827',
  },

  outline: {
    color: '#2563EB',
  },

  ghost: {
    color: '#111827',
  },
};