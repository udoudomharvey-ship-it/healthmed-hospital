import { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useRevealAll } from '../hooks/useReveal'
import { EmergencyStrip } from '../components/utils'
import {
  IconStethoscope, IconFamilyMedicine, IconMaternity, IconChildCare,
  IconMicroscope, IconPill, IconScalpel, IconBrain,
  IconArrow, IconCheck, IconClock, IconPhone,
} from '../components/Icons'
import '../styles/home.css'

const HERO_PILLS = [
  { label: 'Emergency Care',   icon: <IconStethoscope size={13}/> },
  { label: 'Family Medicine',  icon: <IconFamilyMedicine size={14}/> },
  { label: 'Maternity',        icon: <IconMaternity size={13}/> },
  { label: 'Child Care',       icon: <IconChildCare size={13}/> },
  { label: 'Laboratory',       icon: <IconMicroscope size={13}/> },
  { label: 'Pharmacy',         icon: <IconPill size={13}/> },
  { label: 'General Surgery',  icon: <IconScalpel size={13}/> },
  { label: 'Mental Health',    icon: <IconBrain size={13}/> },
]

const SERVICES_PREVIEW = [
  { icon: '🏥', color: 'red',  title: 'Emergency Care',    desc: '24/7 emergency medical attention for critical and urgent cases. Our team is always ready.', badge: '24/7 Available', badgeColor: 'red' },
  { icon: '👨‍👩‍👧', color: 'cyan', title: 'Family Medicine',   desc: 'Holistic primary healthcare for your entire family, from routine checkups to chronic disease management.', badge: 'All Ages', badgeColor: 'cyan' },
  { icon: '🤱', color: 'navy', title: 'Maternity Services', desc: 'Complete prenatal, delivery, and postnatal care with experienced midwifery and obstetric support.', badge: 'Mother & Child', badgeColor: 'navy' },
  { icon: '🔬', color: 'cyan', title: 'Laboratory Services',desc: 'Same-day diagnostic results — malaria, typhoid, PCV, genotype, blood group, and more.', badge: 'Same-Day Results', badgeColor: 'cyan' },
]

export default function Home() {
  useRevealAll()
  const navigate = useNavigate()

  return (
    <div className="page-enter">
      {/* ── HERO ── */}
      <section id="hero">
        <div className="hero-bg-stripe"/>
        <div className="hero-bg-dots"/>
        <div className="hero-wm-bg"/>

        <div className="container">
          <div className="hero-inner">
            {/* Left */}
            <div>
              <div className="hero-badge">
                <span className="hero-badge-dot"/>
                Open 24 Hours · 7 Days a Week
              </div>
              <h1 className="hero-headline">
                <span className="line"><span className="line-inner">Your Health,</span></span>
                <span className="line"><span className="line-inner">Our <span className="accent">Priority</span></span></span>
                <span className="line"><span className="line-inner">Always.</span></span>
              </h1>
              <p className="hero-sub">
                HealthMed Hospital delivers compassionate, round-the-clock healthcare for every member of your family — from emergency care to maternity, surgery, and mental health services.
              </p>
              <div className="hero-actions">
                <Link to="/contact" className="btn btn-red">
                  Book Appointment <IconArrow/>
                </Link>
                <a href="tel:+2347087445560" className="btn btn-outline">
                  <IconPhone size={14}/> Call Now
                </a>
                <Link to="/services" className="btn btn-outline">Our Services</Link>
              </div>
              <div className="hero-stats">
                <div><div className="h-stat-num">24<span>hrs</span></div><div className="h-stat-lbl">Always Open</div></div>
                <div><div className="h-stat-num">8<span>+</span></div><div className="h-stat-lbl">Services</div></div>
                <div><div className="h-stat-num">7</div><div className="h-stat-lbl">Days a Week</div></div>
                <div><div className="h-stat-num">365</div><div className="h-stat-lbl">Days a Year</div></div>
              </div>
            </div>

            {/* Right */}
            <div className="hero-right">
              <div className="hero-open-card">
                <div className="hero-open-icon">
                  <IconClock size={22} color="white"/>
                </div>
                <div className="hero-open-text">
                  <strong>We're Open Right Now</strong>
                  <span>All departments available 24 hours</span>
                </div>
              </div>
              <div>
                <div className="services-preview-label">Our 24-Hour Services Include</div>
                <div className="services-pills">
                  {HERO_PILLS.map(p => (
                    <Link to="/services" key={p.label} className="svc-pill">
                      {p.icon}
                      {p.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="stats-strip">
        <div className="container">
          <div className="stats-grid stagger">
            <div className="stat-item"><div className="stat-num">24<span>hr</span></div><div className="stat-label">Open Daily</div></div>
            <div className="stat-item"><div className="stat-num">8<span>+</span></div><div className="stat-label">Specialist Services</div></div>
            <div className="stat-item"><div className="stat-num">7</div><div className="stat-label">Days a Week</div></div>
            <div className="stat-item"><div className="stat-num">365</div><div className="stat-label">Days a Year</div></div>
          </div>
        </div>
      </div>

      <div className="divider"/>

      {/* ── SERVICES TEASER ── */}
      <section id="services-teaser">
        <div className="container">
          <div className="services-intro">
            <div>
              <div className="section-tag reveal">Our Services</div>
              <h2 className="reveal" style={{transitionDelay:'0.1s'}}>Everything you need,<br/>under one roof.</h2>
            </div>
            <Link to="/services" className="btn btn-outline reveal" style={{transitionDelay:'0.2s'}}>
              View All Services <IconArrow/>
            </Link>
          </div>
          <div className="services-grid stagger">
            {SERVICES_PREVIEW.map(s => (
              <div key={s.title} className="card">
                <div className={`card-icon ${s.color}`}>
                  <span style={{fontSize:'1.3rem'}}>{s.icon}</span>
                </div>
                <div className="card-title">{s.title}</div>
                <p className="card-desc">{s.desc}</p>
                <span className={`card-badge ${s.badgeColor}`}>{s.badge}</span>
              </div>
            ))}
          </div>
          <div style={{textAlign:'center',marginTop:'2.5rem'}} className="reveal">
            <Link to="/services" className="btn btn-red">
              See All 8 Services <IconArrow/>
            </Link>
          </div>
        </div>
      </section>

      <div className="divider"/>

      {/* ── WHY US ── */}
      <section id="why-teaser">
        <div className="container">
          <div className="why-grid">
            <div className="reveal-left">
              <div className="section-tag">Why HealthMed</div>
              <h2>Healthcare you can <em>trust, any hour.</em></h2>
              <p style={{marginTop:'1rem'}}>At HealthMed Hospital, we are committed to quality, accessible healthcare for the Uyo community. Our dedicated team works around the clock so every patient receives the attention they deserve.</p>
              <div className="feature-list stagger" style={{marginTop:'2rem'}}>
                {[
                  ['Experienced Medical Team', 'Qualified doctors, nurses and specialists dedicated to your care'],
                  ['24/7 Round-the-Clock Care', 'Medical attention available any time, day or night'],
                  ['Fast, Accurate Diagnostics', 'Same-day lab results so treatment can begin without delay'],
                ].map(([title, desc]) => (
                  <div key={title} className="feature-item">
                    <div className="feature-icon"><IconCheck size={18} color="var(--red)"/></div>
                    <div className="feature-text">
                      <strong>{title}</strong><span>{desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{marginTop:'2rem'}}>
                <Link to="/about" className="btn btn-primary">Learn More About Us</Link>
              </div>
            </div>

            <div className="hours-card reveal-right">
              <div className="hours-title">We're open <span>every single day</span></div>
              <div className="hours-list">
                {[['Monday – Friday','24 Hours','open'],['Saturday','24 Hours','open'],['Sunday','24 Hours','open'],['Public Holidays','Always Open','always'],['Emergency Services','Always Ready','always']].map(([day,val,cls]) => (
                  <div key={day} className="hours-item">
                    <strong>{day}</strong>
                    <span className={`hours-badge ${cls}`}>{val}</span>
                  </div>
                ))}
              </div>
              <a href="tel:+2347087445560" className="hours-phone">
                <IconPhone size={24} color="white"/>
                <div><strong>+234 708 744 5560</strong><span>Call us anytime — we're always here</span></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <EmergencyStrip />
    </div>
  )
}
