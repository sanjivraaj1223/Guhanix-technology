interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export default function Logo({ size = 'md', showText = true }: LogoProps) {
  const sizes = {
    sm: { icon: 32, text: 'text-lg' },
    md: { icon: 40, text: 'text-xl' },
    lg: { icon: 56, text: 'text-2xl' },
  };
  const { icon, text } = sizes[size];

  return (
    <div className="flex items-center gap-3">
      <div
        style={{
          width: icon,
          height: icon,
          background: 'linear-gradient(135deg, #087BFF, #22D3FF)',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          boxShadow: '0 0 20px rgba(8,123,255,0.35)',
        }}
      >
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width={icon * 0.65} height={icon * 0.65}>
          <path d="M20 4L36 13V27L20 36L4 27V13L20 4Z" stroke="white" strokeWidth="2.5" fill="none" opacity="0.35"/>
          <path d="M20 10L30 16V24L20 30L10 24V16L20 10Z" fill="white" opacity="0.85"/>
          <circle cx="20" cy="20" r="4.5" fill="#050B18" />
          <circle cx="20" cy="20" r="2.5" fill="white" opacity="0.9"/>
        </svg>
      </div>
      {showText && (
        <div>
          <div className={`${text} fo       nt-bold leading-tight tracking-tight`}>
            <span className="text-white">GUHANIX</span>
          </div>
          <div className="text-xs text-silver/50 font-medium tracking-widest uppercase leading-tight">
            Technology
          </div>
        </div>
      )}
    </div>
  );
}
