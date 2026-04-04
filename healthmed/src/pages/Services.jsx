import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useRevealAll } from '../hooks/useReveal'
import { EmergencyStrip } from '../components/utils'
import Logo3D from '../components/Logo3D'
import {
  IconStethoscope, IconFamilyMedicine, IconMaternity, IconChildCare,
  IconMicroscope, IconPill, IconScalpel, IconBrain, IconArrow,
} from '../components/Icons'
import '../styles/services.css'

const SERVICES = [
  {
    id: 'emergency',
    icon: <IconStethoscope size={32} color="var(--red)"/>,
    color: 'red',
    badge: 'Priority Response',
    title: 'Emergency Care',
    tagline: 'Immediate response, any hour.',
    desc: 'Our emergency unit provides immediate, life-saving medical intervention around the clock. Whether it\'s a trauma, cardiac event, or sudden illness — our team responds fast.',
    points: ['Immediate triage and assessment','Resuscitation and stabilisation','24/7 on-call physicians','Rapid diagnostic support'],
    cta: { label: 'Get Emergency Help', to: '/contact' },
    accent: '#d62828',
    imageBg: 'linear-gradient(135deg, #fdecea 0%, #ffe4e4 100%)',
  },
  {
    id: 'family',
    icon: <IconFamilyMedicine size={32} color="var(--cyan-mid)"/>,
    color: 'cyan',
    badge: 'All Ages',
    title: 'Family Medicine',
    tagline: 'Your health, your family, our priority.',
    desc: 'Holistic primary care for every member of your family. From routine checkups to managing chronic conditions — we are your first point of health contact.',
    points: ['Routine health examinations','Chronic disease management','Preventive care and vaccinations','Health counselling'],
    cta: { label: 'Book Consultation', to: '/contact' },
    accent: '#0096c7',
    imageBg: 'linear-gradient(135deg, #e0f7fc 0%, #b2ebf2 100%)',
  },
  {
    id: 'maternity',
    icon: <IconMaternity size={32} color="var(--navy)"/>,
    color: 'navy',
    badge: 'Mother & Child',
    title: 'Maternity Services',
    tagline: 'Safe journeys from bump to birth.',
    desc: 'Comprehensive maternity care from conception through delivery and beyond. Our experienced team ensures a safe, supported pregnancy journey.',
    points: ['Antenatal (prenatal) care','Safe delivery and labour support','Postnatal mother and baby care','Breastfeeding and nutrition guidance'],
    cta: { label: 'Book Maternity Care', to: '/contact' },
    accent: '#0f2057',
    imageBg: 'linear-gradient(135deg, #e8edf8 0%, #c5cfe8 100%)',
  },
  {
    id: 'childcare',
    icon: <IconChildCare size={32} color="var(--cyan-mid)"/>,
    color: 'cyan',
    badge: 'Paediatrics',
    title: 'Child Care',
    tagline: 'Healthy children, happy families.',
    desc: 'Dedicated paediatric care tailored to the unique needs of infants, children, and adolescents. Keeping your child healthy from day one.',
    points: ['Immunisations and vaccines','Growth and development monitoring','Childhood illness treatment','Nutritional advice'],
    cta: { label: 'Book Child Visit', to: '/contact' },
    accent: '#0096c7',
    imageBg: 'linear-gradient(135deg, #e0f7fc 0%, #e0f2fe 100%)',
  },
  {
    id: 'surgery',
    icon: <IconScalpel size={32} color="var(--red)"/>,
    color: 'red',
    badge: 'Surgical',
    title: 'General Surgery',
    tagline: 'Precision care, experienced hands.',
    desc: 'Safe, effective surgical procedures in a modern, sterile theatre. Our experienced surgeons handle a wide range of general and minor surgical cases.',
    points: ['Minor and major surgical procedures','Pre and post-operative care','Wound management','Anaesthesia and pain management'],
    cta: { label: 'Enquire About Surgery', to: '/contact' },
    accent: '#d62828',
    imageBg: 'linear-gradient(135deg, #fdecea 0%, #fce8e8 100%)',
  },
  {
    id: 'pharmacy',
    icon: <IconPill size={32} color="var(--cyan-mid)"/>,
    color: 'cyan',
    badge: 'In-House',
    title: 'Pharmacy',
    tagline: 'Authentic medication, always in stock.',
    desc: 'Our fully stocked on-site pharmacy dispenses quality, authentic medications promptly — so you can begin treatment without delay.',
    points: ['Prescription dispensing','Over-the-counter medications','Pharmaceutical consultation','Medication counselling'],
    cta: { label: 'Visit Pharmacy', to: '/contact' },
    accent: '#0096c7',
    imageBg: 'linear-gradient(135deg, #e0f7fc 0%, #ccf5e8 100%)',
  },
  {
    id: 'laboratory',
    icon: <IconMicroscope size={32} color="var(--navy)"/>,
    color: 'navy',
    badge: 'Same-Day Results',
    title: 'Laboratory Services',
    tagline: 'Faster answers, faster treatment.',
    desc: 'Fast, accurate on-site diagnostic testing covering a full range of common and complex tests. Results the same day — no delays, no referrals.',
    points: ['Malaria, Typhoid, Blood Group','PCV, Genotype, HIV screening','Full Blood Count, Urinalysis','And much more'],
    cta: { label: 'View Lab Tests', to: '/laboratory' },
    accent: '#0f2057',
    imageBg: 'linear-gradient(135deg, #e8edf8 0%, #dce4f5 100%)',
  },
  {
    id: 'mental',
    icon: <IconBrain size={32} color="var(--navy)"/>,
    color: 'navy',
    badge: 'Confidential',
    title: 'Mental Health & Psychiatry',
    tagline: 'Your mind matters here.',
    desc: 'Confidential, compassionate mental health support. Our psychiatrists and counsellors provide evidence-based care for all mental health conditions without stigma.',
    points: ['Psychiatric assessment','Individual counselling','Medication management','Crisis intervention support'],
    cta: { label: 'Book Consultation', to: '/contact' },
    accent: '#0f2057',
    imageBg: 'linear-gradient(135deg, #f3e8ff 0%, #e0d4f5 100%)',
  },
]

function ServiceCard({ svc, index }) {
  const isEven = index % 2 === 0

  return (
    <article className={`svc-section ${isEven ? '' : 'svc-section--flip'}`} id={svc.id}>
      {/* Image placeholder */}
      <div className="svc-image-col reveal-left" style={isEven ? {} : {order:2}}>
        <div className="svc-image-wrap" style={{background: svc.imageBg}}>
          <div className="svc-image-placeholder">
            <div className="svc-3d-icon-wrap">
              {svc.icon}
            </div>
            <div className="svc-image-label">
              <span className="svc-image-tag">{svc.badge}</span>
              <strong>{svc.title}</strong>
            </div>
            {/* 3D decorative cross */}
            <div className="svc-deco-cross">
              <Logo3D size={60} variant="nav" style={{opacity:0.12, cursor:'default', filter:'none'}}/>
            </div>
          </div>
          <div className="svc-image-note">📸 Image coming soon</div>
        </div>
      </div>

      {/* Content */}
      <div className="svc-content-col reveal-right" style={isEven ? {} : {order:1}}>
        <div className={`svc-badge svc-badge--${svc.color}`}>{svc.badge}</div>
        <h2 className="svc-title">{svc.title}</h2>
        <p className="svc-tagline">{svc.tagline}</p>
        <p className="svc-desc">{svc.desc}</p>
        <ul className="svc-points">
          {svc.points.map(p => (
            <li key={p}>
              <span className="svc-dot" style={{background: svc.accent}}/>
              {p}
            </li>
          ))}
        </ul>
        <div className="svc-actions">
          <Link to={svc.cta.to} className="btn btn-red">
            {svc.cta.label} <IconArrow/>
          </Link>
          <a href="tel:+2347087445560" className="btn btn-outline">Call Now</a>
        </div>
      </div>
    </article>
  )
}

export default function Services() {
  useRevealAll()

  return (
    <div className="page-enter">
      {/* Hero */}
      <div className="page-hero">
        <div className="page-hero-wm">
          <Logo3D size={320} variant="hero" style={{opacity:0.04, cursor:'default', filter:'none'}}/>
        </div>
        <div className="container page-hero-inner">
          <div className="page-hero-tag">What We Offer</div>
          <h1>Our Medical Services</h1>
          <p>Comprehensive, round-the-clock healthcare covering every stage of life — delivered with expertise and compassion in Uyo, Akwa Ibom.</p>
        </div>
      </div>

      {/* Quick jump nav */}
      <div className="svc-jump-nav">
        <div className="container">
          <div className="svc-jump-inner">
            {SERVICES.map(s => (
              <a key={s.id} href={`#${s.id}`} className="svc-jump-pill">
                <span className="svc-jump-icon">{s.icon}</span>
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Intro strip */}
      <div className="svc-intro-strip">
        <div className="container">
          <div className="section-tag reveal">24-Hour Services</div>
          <p className="reveal" style={{transitionDelay:'0.1s', fontSize:'1.05rem', marginTop:'0.5rem'}}>
            All services listed below are available 24 hours a day, 7 days a week — including all public holidays.
          </p>
        </div>
      </div>

      {/* Service sections */}
      <div className="svc-sections-wrap">
        {SERVICES.map((svc, i) => (
          <ServiceCard key={svc.id} svc={svc} index={i} />
        ))}
      </div>

      <EmergencyStrip />
    </div>
  )
}
