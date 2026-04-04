import { useRef } from 'react'

/* ── Clean 3D Medical Cross Logo ──────────────────────────────────────────
   Slim rounded-rectangle plus sign with CSS 3D transform on hover.
   Variants: 'nav' (40px), 'footer' (34px), 'hero' (110px), 'about' (140px)
─────────────────────────────────────────────────────────────────────────── */
export default function Logo3D({ size = 40, variant = 'nav', className = '', style = {} }) {
  const svgRef = useRef(null)

  const handleMouseMove = (e) => {
    const el = svgRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = ((e.clientX - r.left) / r.width  - 0.5) * 40
    const y = ((e.clientY - r.top)  / r.height - 0.5) * -40
    el.style.transform = `perspective(300px) rotateX(${y}deg) rotateY(${x}deg) scale(1.12)`
  }

  const handleMouseLeave = () => {
    const el = svgRef.current
    if (!el) return
    el.style.transform = ''
  }

  const getFilter = () => {
    if (variant === 'footer') return 'drop-shadow(1px 3px 6px rgba(214,40,40,0.3))'
    if (variant === 'hero')   return 'drop-shadow(2px 8px 18px rgba(214,40,40,0.5)) drop-shadow(0 2px 4px rgba(0,0,0,0.18))'
    if (variant === 'about')  return 'drop-shadow(3px 10px 22px rgba(214,40,40,0.55)) drop-shadow(0 2px 6px rgba(0,0,0,0.2))'
    return 'drop-shadow(1px 4px 8px rgba(214,40,40,0.38)) drop-shadow(0 1px 2px rgba(0,0,0,0.12))'
  }

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        display: 'block',
        flexShrink: 0,
        cursor: 'pointer',
        transition: 'transform 0.45s cubic-bezier(0.34,1.56,0.64,1), filter 0.3s',
        transformStyle: 'preserve-3d',
        filter: getFilter(),
        ...style,
      }}
      aria-label="HealthMed Hospital Logo"
    >
      {/* Shadow layer for 3D depth */}
      <rect x="40" y="12" width="20" height="76" rx="10" fill="rgba(120,0,0,0.25)" transform="translate(2.5,3)"/>
      <rect x="12" y="40" width="76" height="20" rx="10" fill="rgba(120,0,0,0.25)" transform="translate(2.5,3)"/>
      {/* Main cross body */}
      <rect x="40" y="12" width="20" height="76" rx="10" fill="#d62828"/>
      <rect x="12" y="40" width="76" height="20" rx="10" fill="#d62828"/>
      {/* Top-left highlight for 3D sheen */}
      <rect x="40" y="12" width="7" height="76" rx="10" fill="rgba(255,255,255,0.18)"/>
      <rect x="12" y="40" width="76" height="7" rx="10" fill="rgba(255,255,255,0.18)"/>
      {/* Bottom-right shadow for depth */}
      <rect x="53" y="12" width="7" height="76" rx="10" fill="rgba(0,0,0,0.1)"/>
      <rect x="12" y="53" width="76" height="7" rx="10" fill="rgba(0,0,0,0.1)"/>
    </svg>
  )
}
