import { Link, useLocation } from 'react-router-dom'
import Logo3D from './Logo3D'

const NAV_LINKS = [
  { label: 'Home',             to: '/' },
  { label: 'Services',         to: '/services' },
  { label: 'Laboratory',       to: '/laboratory' },
  { label: 'About Us',         to: '/about' },
  { label: 'Book Appointment', to: '/contact' },
]

const SERVICE_LINKS = [
  { label: 'Emergency Care',   to: '/services' },
  { label: 'Family Medicine',  to: '/services' },
  { label: 'Maternity',        to: '/services' },
  { label: 'Child Care',       to: '/services' },
  { label: 'General Surgery',  to: '/services' },
  { label: 'Pharmacy',         to: '/services' },
  { label: 'Mental Health',    to: '/services' },
]

export default function Footer() {
  const { pathname } = useLocation()

  // Hide a nav link if the user is currently on that page
  const isActive = (to) => {
    if (to === '/') return pathname === '/'
    return pathname.startsWith(to)
  }

  const visibleNavLinks  = NAV_LINKS.filter(l => !isActive(l.to))
  const visibleSvcLinks  = pathname === '/services' ? [] : SERVICE_LINKS

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">

          {/* Brand col */}
          <div className="footer-col">
            <div className="footer-brand-row">
              <Logo3D size={34} variant="footer" />
              <div className="footer-brand-name">Health<span>Med</span><br/>Hospital</div>
            </div>
            <p>Quality, compassionate healthcare for the Uyo community — available 24 hours a day, every day of the year.</p>
            <p style={{marginTop:'0.75rem'}} className="footer-reg">RC1505282 · Akwa Ibom State, Nigeria</p>
          </div>

          {/* Navigate col */}
          <div className="footer-col">
            <h4>Navigate</h4>
            <div className="footer-links">
              {visibleNavLinks.map(l => (
                <Link key={l.to + l.label} to={l.to}>{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Services col */}
          <div className="footer-col">
            <h4>Services</h4>
            {visibleSvcLinks.length > 0 ? (
              <div className="footer-links">
                {visibleSvcLinks.map(l => (
                  <Link key={l.label} to={l.to}>{l.label}</Link>
                ))}
              </div>
            ) : (
              <p style={{fontSize:'0.82rem',color:'rgba(255,255,255,0.35)'}}>You're viewing all our services.</p>
            )}
          </div>

          {/* Contact col */}
          <div className="footer-col">
            <h4>Contact</h4>
            <div className="footer-links">
              <a href="tel:+2347087445560">+234 708 744 5560</a>
              <a href="mailto:HealthMed.hosp@gmail.com">HealthMed.hosp@gmail.com</a>
              <Link to="/contact">9 Etim Okon Usanga Close, Uyo</Link>
            </div>
            <div style={{marginTop:'1.25rem',padding:'0.85rem 1rem',background:'rgba(214,40,40,0.15)',borderRadius:'8px',border:'1px solid rgba(214,40,40,0.2)'}}>
              <div style={{fontSize:'0.68rem',fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',color:'#e63946',marginBottom:'0.3rem'}}>Emergency Line</div>
              <a href="tel:+2347087445560" style={{fontSize:'1.05rem',fontWeight:700,color:'white'}}>+234 708 744 5560</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 HealthMed Hospital · RC1505282 · Uyo, Akwa Ibom State, Nigeria</p>
          <p><Link to="/contact">Privacy Policy</Link></p>
        </div>
      </div>
    </footer>
  )
}
