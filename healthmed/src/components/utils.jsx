// ── ProgressBar ────────────────────────────────────────────────
import { useEffect, useState } from 'react'

export function ProgressBar() {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      setWidth((window.scrollY / (el.scrollHeight - window.innerHeight)) * 100)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <div id="progress-bar" style={{ width: `${Math.min(width, 100)}%` }} />
}

// ── BackToTop ───────────────────────────────────────────────────
export function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <button
      id="back-top"
      className={show ? 'show' : ''}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M9 14V4M4 8l5-5 5 5"/>
      </svg>
    </button>
  )
}

// ── FloatingCallBtn ─────────────────────────────────────────────
export function FloatingCallBtn() {
  return (
    <a href="tel:+2347087445560" className="float-call-btn" aria-label="Emergency Call">
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 4.2 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.7 12.8 12.8 0 0 0 .7 2.8 2 2 0 0 1-.5 2L9 9.9a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2-.5 12.8 12.8 0 0 0 2.8.7A2 2 0 0 1 23 17z"/>
      </svg>
      <span className="float-label">Emergency</span>
    </a>
  )
}

// ── EmergencyStrip ──────────────────────────────────────────────
import { Link } from 'react-router-dom'

export function EmergencyStrip() {
  return (
    <div className="emergency-strip">
      <div className="container">
        <div className="emergency-inner reveal">
          <div className="emergency-text">
            <strong>Medical Emergency? Don't Wait.</strong>
            <span>Our emergency team is on standby 24 hours a day, every day of the year.</span>
          </div>
          <div className="emergency-actions">
            <a href="tel:+2347087445560" className="btn btn-white">+234 708 744 5560</a>
            <Link to="/contact" className="btn btn-outline-white">Book Appointment</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
