import { useState, useEffect } from 'react'
import Logo3D from './Logo3D'

const preloaderStyle = {
  position: 'fixed', inset: 0, background: 'var(--white)',
  zIndex: 99999, display: 'flex', alignItems: 'center',
  justifyContent: 'center', flexDirection: 'column', gap: '1.1rem',
  transition: 'opacity 0.7s ease, visibility 0.7s',
}

const logoWrapStyle = {
  animation: 'spin3dIn 1s cubic-bezier(0.22,1,0.36,1) forwards',
}

const keyframes = `
@keyframes spin3dIn {
  0%   { transform:perspective(500px) rotateY(-180deg) scale(0.3); opacity:0; }
  55%  { transform:perspective(500px) rotateY(16deg) scale(1.07); opacity:1; }
  80%  { transform:perspective(500px) rotateY(-5deg) scale(0.97); }
  100% { transform:perspective(500px) rotateY(0deg) scale(1); opacity:1; }
}
@keyframes logoFloatPre {
  0%,100% { transform:perspective(400px) rotateY(0deg) translateY(0); }
  35%     { transform:perspective(400px) rotateY(14deg) translateY(-10px); }
  70%     { transform:perspective(400px) rotateY(-12deg) translateY(-5px); }
}
@keyframes fadeUpIn { to { opacity:1; transform:translateY(0); } }
`

export default function Preloader() {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)
  const [floatMode, setFloatMode] = useState(false)

  useEffect(() => {
    // Inject keyframes
    const style = document.createElement('style')
    style.textContent = keyframes
    document.head.appendChild(style)

    let p = 0
    let rafId = null

    const tick = () => {
      p += Math.random() * 20 + 8
      if (p >= 100) {
        setProgress(100)
        setTimeout(finish, 350)
        return
      }
      setProgress(Math.floor(p))
      rafId = setTimeout(tick, 75)
    }

    const finish = () => {
      setDone(true)
      setTimeout(() => document.getElementById('preloader-root')?.remove(), 800)
    }

    rafId = setTimeout(tick, 200)
    // Switch logo to floating after spin completes
    setTimeout(() => setFloatMode(true), 1100)

    // Absolute fallback
    const fallback = setTimeout(finish, 3500)
    window.addEventListener('load', () => { clearTimeout(fallback); clearTimeout(rafId); setTimeout(finish, 300) })

    return () => { clearTimeout(fallback); clearTimeout(rafId) }
  }, [])

  if (done && progress >= 100) {
    return null
  }

  return (
    <div
      id="preloader-root"
      style={{
        ...preloaderStyle,
        opacity: done ? 0 : 1,
        visibility: done ? 'hidden' : 'visible',
        pointerEvents: done ? 'none' : 'all',
      }}
    >
      <div style={{
        ...logoWrapStyle,
        animation: floatMode
          ? 'logoFloatPre 3.2s ease-in-out infinite'
          : 'spin3dIn 1s cubic-bezier(0.22,1,0.36,1) forwards',
        filter: 'drop-shadow(2px 8px 18px rgba(214,40,40,0.45))',
      }}>
        <Logo3D size={110} variant="hero" style={{ filter: 'none', cursor: 'default' }} />
      </div>

      <div style={{
        fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--navy)',
        opacity: 0, animation: 'fadeUpIn 0.5s ease 0.85s forwards',
      }}>
        Health<span style={{color:'var(--red)'}}>Med</span> Hospital
      </div>

      <div style={{
        width: '220px', height: '2.5px', background: 'var(--grey-2)',
        borderRadius: '99px', overflow: 'hidden',
        opacity: 0, animation: 'fadeUpIn 0.4s ease 0.9s forwards',
      }}>
        <div style={{
          height: '100%', width: `${progress}%`,
          background: 'linear-gradient(90deg, var(--red), var(--red-mid))',
          borderRadius: '99px', transition: 'width 0.08s linear',
          boxShadow: '0 0 8px rgba(214,40,40,0.5)',
        }}/>
      </div>

      <div style={{
        fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase',
        color: 'var(--text-light)',
        opacity: 0, animation: 'fadeUpIn 0.4s ease 0.9s forwards',
      }}>
        {progress < 100 ? `${progress}%` : 'Ready'}
      </div>
    </div>
  )
}
