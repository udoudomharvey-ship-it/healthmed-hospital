import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Logo3D from './Logo3D'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }, [])

  const toggleMenu = () => {
    setMenuOpen(o => {
      document.body.style.overflow = !o ? 'hidden' : ''
      return !o
    })
  }

  const closeMobile = () => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }

  const navLinkClass = ({ isActive }) =>
    isActive ? 'active' : ''

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <div className="nav-inner">
          <div className="nav-logo" onClick={() => navigate('/')} role="button" tabIndex={0}>
            <Logo3D size={40} variant="nav" />
            <div className="nav-logo-text">
              <strong>Health<span>Med</span> Hospital</strong>
              <em>Quality Healthcare · <span>RC1505282</span></em>
            </div>
          </div>

          <ul className="nav-links">
            <li><NavLink to="/"           end className={navLinkClass}>Home</NavLink></li>
            <li><NavLink to="/services"   className={navLinkClass}>Services</NavLink></li>
            <li><NavLink to="/laboratory" className={navLinkClass}>Laboratory</NavLink></li>
            <li><NavLink to="/about"      className={navLinkClass}>About</NavLink></li>
            <li><NavLink to="/contact"    className="nav-cta">Book Appointment</NavLink></li>
          </ul>

          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span/><span/><span/>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/"           end onClick={closeMobile}>Home</NavLink>
        <NavLink to="/services"   onClick={closeMobile}>Services</NavLink>
        <NavLink to="/laboratory" onClick={closeMobile}>Laboratory</NavLink>
        <NavLink to="/about"      onClick={closeMobile}>About</NavLink>
        <NavLink to="/contact"    onClick={closeMobile}>Book Appointment</NavLink>
      </div>
    </>
  )
}
