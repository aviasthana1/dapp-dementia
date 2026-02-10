import { type ButtonHTMLAttributes, type ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  /** Use Bold (700) when true, otherwise Medium (500). No thin weights. */
  bold?: boolean;
  children: ReactNode;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--primary)] text-[var(--primary-foreground)] border-[var(--primary)] hover:opacity-90',
  secondary:
    'bg-[var(--secondary)] text-[var(--secondary-foreground)] border-[var(--border)] hover:bg-[var(--muted)]',
  outline:
    'bg-transparent text-[var(--primary)] border-2 border-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)]',
  ghost:
    'bg-transparent text-[var(--foreground)] border-[var(--border)] hover:bg-[var(--muted)]',
};

/**
 * Accessibility-focused Button: min-height 60px, 20px radius, Medium (500) or Bold (700) only.
 * Use for elderly-friendly, high-contrast interfaces.
 */
export function Button({
  variant = 'primary',
  bold = false,
  children,
  className = '',
  disabled,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`btn-accessibility ${variantStyles[variant]} ${bold ? 'font-bold' : ''} ${className}`.trim()}
      {...rest}
    >
      {children}
    </button>
  );
}
