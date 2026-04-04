import { useState } from 'react'
import logoSrc from '../assets/logo.png'

/*
  HealthMed logo — real PNG asset.

  White background removal:
  · Nav / hero / about / preloader → mix-blend-mode: multiply
    White PNG pixels × white/light surface = invisible. Red butterfly shows cleanly.
  · Footer → filter: brightness(0) invert(1)
    Converts entire image to white. Gives a clean white butterfly on the dark navy footer.

  Shadow / depth effect:
  · At rest: soft red drop-shadow offset down-right (simulates light from top-left)
  · On hover (nav only): shadow lifts and deepens + gentle scale-up
*/
export default function Logo3D({
  size = 40,
  variant = 'nav',
  className = '',
  style = {},
}) {
  const [hovered, setHovered] = useState(false)
  const isInteractive = variant === 'nav' || variant === 'about'
  const isFooter      = variant === 'footer'

  /* Footer: white butterfly on dark navy */
  const footerStyle = {
    filter: 'brightness(0) invert(1) drop-shadow(0 2px 6px rgba(255,255,255,0.18))',
  }

  /* Nav / hero / about / preloader: red butterfly, white bg removed */
  const lightBgStyle = {
    mixBlendMode: 'multiply',
    filter: hovered
      ? 'drop-shadow(2px 5px 10px rgba(214,40,40,0.55)) drop-shadow(1px 2px 0px rgba(180,0,0,0.22))'
      : 'drop-shadow(1px 3px 7px rgba(214,40,40,0.38)) drop-shadow(0.5px 1px 0px rgba(140,0,0,0.15))',
  }

  return (
    <img
      src={logoSrc}
      alt="HealthMed Hospital Logo"
      width={size}
      height={size}
      className={className}
      onMouseEnter={() => isInteractive && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'block',
        flexShrink: 0,
        objectFit: 'contain',
        cursor: isInteractive ? 'pointer' : 'default',
        transition: 'transform 0.28s cubic-bezier(0.34,1.56,0.64,1), filter 0.22s ease',
        transform: hovered && isInteractive ? 'scale(1.1) translateY(-1px)' : 'scale(1)',
        userSelect: 'none',
        ...(isFooter ? footerStyle : lightBgStyle),
        ...style,
      }}
    />
  )
}