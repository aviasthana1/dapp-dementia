import { ArrowLeft } from 'lucide-react';
import type { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from 'react';
import { LogoBrand } from './Logo';

export function Page({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`min-h-screen app-page ${className}`.trim()}>
      <div className="page-shell">{children}</div>
    </div>
  );
}

export function BackButton({
  onClick,
  label = 'Back',
}: {
  onClick: () => void;
  label?: string;
}) {
  return (
    <button type="button" onClick={onClick} className="btn-text">
      <ArrowLeft className="w-4 h-4" aria-hidden />
      {label}
    </button>
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
    <header className="page-header">
      {showLogo ? <LogoBrand size="sm" layout="row" className="mb-4" showName={false} /> : null}
      <h1 className="page-title">{title}</h1>
      {subtitle ? <p className="page-subtitle">{subtitle}</p> : null}
    </header>
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
};

export function Button({
  variant = 'primary',
  className = '',
  type = 'button',
  children,
  ...props
}: ButtonProps) {
  const variantClass =
    variant === 'secondary'
      ? 'btn-secondary'
      : variant === 'ghost'
        ? 'btn-ghost'
        : variant === 'danger'
          ? 'btn-danger'
          : 'btn-primary';
  return (
    <button type={type} className={`btn ${variantClass} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}

export function Card({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`card ${className}`.trim()}>{children}</div>;
}

export function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="field">
      <span className="field-label">{label}</span>
      {children}
    </label>
  );
}

export function Input({ className = '', ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={`input ${className}`.trim()} {...props} />;
}

export function ErrorBanner({ message }: { message: string }) {
  return (
    <p className="banner-error" role="alert">
      {message}
    </p>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="section-label">{children}</p>;
}
