import { Pressable, StyleSheet, Text, type PressableProps } from 'react-native';

export type ButtonVariant = 'primary' | 'secondary';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends Omit<PressableProps, 'children' | 'style'> {
  /** Text shown inside the button */
  label: string;
  /** Visual style of the button */
  variant?: ButtonVariant;
  /** Size of the button */
  size?: ButtonSize;
}

export function Button({
  label,
  variant = 'primary',
  size = 'medium',
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        styles[size],
        pressed && styles.pressed,
        disabled && styles.disabled,
      ]}
      {...rest}
    >
      <Text style={[styles.label, variant === 'primary' ? styles.labelPrimary : styles.labelSecondary]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
  },
  primary: { backgroundColor: '#1E6FD9', borderColor: '#1E6FD9' },
  secondary: { backgroundColor: 'transparent', borderColor: '#1E6FD9' },
  small: { paddingHorizontal: 12, paddingVertical: 6 },
  medium: { paddingHorizontal: 16, paddingVertical: 10 },
  large: { paddingHorizontal: 20, paddingVertical: 14 },
  pressed: { opacity: 0.8 },
  disabled: { opacity: 0.4 },
  label: { fontSize: 16, fontWeight: '600' },
  labelPrimary: { color: '#FFFFFF' },
  labelSecondary: { color: '#1E6FD9' },
});
