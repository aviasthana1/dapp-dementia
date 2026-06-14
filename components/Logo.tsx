type LogoSize = 'sm' | 'md' | 'lg' | 'xl';

const WIDTHS: Record<LogoSize, number> = {
  sm: 48,
  md: 72,
  lg: 120,
  xl: 200,
};

type LogoMarkProps = {
  size?: LogoSize;
  className?: string;
};

/** CareConnect brand image (public/logo.png) */
export function LogoMark({ size = 'md', className = '' }: LogoMarkProps) {
  const width = WIDTHS[size];

  return (
    <img
      src="/logo.png"
      alt="CareConnect"
      width={width}
      height={Math.round(width * 0.72)}
      className={`logo-image ${className}`.trim()}
    />
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
