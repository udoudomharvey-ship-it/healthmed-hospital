import logoSrc from '../assets/logo.png'

/*
  HealthMed logo — uses the real PNG asset directly.
  Hover: gentle scale-up + red glow shadow.
  No box. No border. No SVG approximation.
*/
export default function Logo3D({
  size = 40,
  variant = 'nav',
  className = '',
  style = {},
}) {
  const isInteractive = variant === 'nav' || variant === 'about'

  return (
    <img
      src={logoSrc}
      alt="HealthMed Hospital Logo"
      width={size}
      height={size}
      className={className}
      style={{
        display: 'block',
        flexShrink: 0,
        objectFit: 'contain',
        cursor: isInteractive ? 'pointer' : 'default',
        transition: 'transform 0.28s cubic-bezier(0.34,1.56,0.64,1), filter 0.22s ease',
        userSelect: 'none',
        ...style,
      }}
      onMouseEnter={e => {
        if (!isInteractive) return
        e.currentTarget.style.transform = 'scale(1.1)'
        e.currentTarget.style.filter = 'drop-shadow(0 5px 12px rgba(255,30,30,0.55))'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'scale(1)'
        e.currentTarget.style.filter = ''
      }}
    />
  )
}
