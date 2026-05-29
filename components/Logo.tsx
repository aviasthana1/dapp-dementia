type LogoSize = 'sm' | 'md' | 'lg';

const SIZES: Record<LogoSize, number> = {
  sm: 32,
  md: 40,
  lg: 56,
};

type LogoMarkProps = {
  size?: LogoSize;
  className?: string;
};

/** Minimal mark: linked nodes + reminder dot (care + connection). */
export function LogoMark({ size = 'md', className = '' }: LogoMarkProps) {
  const px = SIZES[size];
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect width="48" height="48" rx="12" fill="currentColor" />
      <circle cx="17" cy="24" r="5.5" stroke="#fff" strokeWidth="2" />
      <circle cx="31" cy="24" r="5.5" stroke="#fff" strokeWidth="2" />
      <path
        d="M22.5 24h3"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="24" cy="34" r="2.5" fill="#fff" />
    </svg>
  );
}

type LogoBrandProps = {
  size?: LogoSize;
  showName?: boolean;
  layout?: 'stack' | 'row';
  className?: string;
};

export function LogoBrand({
  size = 'md',
  showName = true,
  layout = 'stack',
  className = '',
}: LogoBrandProps) {
  const layoutClass = layout === 'row' ? 'logo-brand logo-brand--row' : 'logo-brand';
  return (
    <div className={`${layoutClass} ${className}`.trim()} aria-label="CareConnect">
      <LogoMark size={size} />
      {showName && <span className="logo-brand-name">CareConnect</span>}
    </div>
  );
}
