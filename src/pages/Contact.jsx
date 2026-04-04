import { useState } from 'react'
import { useRevealAll } from '../hooks/useReveal'
import { EmergencyStrip } from '../components/utils'
import Logo3D from '../components/Logo3D'

export default function Contact() {
  useRevealAll()
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => {
      setSent(true)
      setSending(false)
      setStatus("We'll contact you within 2 hours.")
      e.target.reset()
      setTimeout(() => { setSent(false); setStatus('') }, 6000)
    }, 1400)
  }

  const CONTACT_ITEMS = [
    { icon: '📞', label: 'Phone / Emergency', val: '+234 708 744 5560', href: 'tel:+2347087445560', color: 'red' },
    { icon: '✉️', label: 'Email', val: 'HealthMed.hosp@gmail.com', href: 'mailto:HealthMed.hosp@gmail.com', color: 'cyan' },
    { icon: '📍', label: 'Address', val: '9 Etim Okon Usanga Close,\nOff Nwaniba by Water Fountain,\nUyo, Akwa Ibom State', color: 'navy' },
    { icon: '🕐', label: 'Opening Hours', val: 'Open 24 Hours · 7 Days a Week\nIncluding All Public Holidays', color: 'red' },
  ]

  return (
    <div className="page-enter">
      <div className="page-hero">
        <div className="page-hero-wm">
          <Logo3D size={320} variant="hero" style={{opacity:0.04,cursor:'default',filter:'none'}}/>
        </div>
        <div className="container page-hero-inner">
          <div className="page-hero-tag">Reach Us</div>
          <h1>Book an Appointment</h1>
          <p>Walk in anytime — or send us a message ahead of your visit for a smoother experience. We respond within 2 hours.</p>
        </div>
      </div>

      <section style={{paddingBlock:'var(--section-pad)'}}>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1.2fr',gap:'5rem',alignItems:'start'}}>

            {/* Left: contact info */}
            <div className="reveal-left">
              <div className="section-tag">Get In Touch</div>
              <h2 style={{fontSize:'clamp(1.6rem,3vw,2.2rem)'}}>We're always here<br/>for you.</h2>
              <p style={{marginTop:'1rem'}}>Our doors are open 24 hours a day, every day of the year. Walk in for emergencies, or use the form to book ahead.</p>

              <div style={{display:'flex',flexDirection:'column',gap:'1rem',marginTop:'2rem'}}>
                {CONTACT_ITEMS.map(item => (
                  <a key={item.label} href={item.href || '#'} style={{display:'flex',alignItems:'flex-start',gap:'1rem',padding:'1.1rem 1.25rem',background:'var(--off-white)',border:'1.5px solid var(--grey-2)',borderRadius:'var(--radius-md)',transition:'border-color 0.25s,transform 0.25s,background 0.25s',textDecoration:'none'}}
                    onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(214,40,40,0.3)';e.currentTarget.style.transform='translateX(4px)';e.currentTarget.style.background='var(--red-light)'}}
                    onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--grey-2)';e.currentTarget.style.transform='';e.currentTarget.style.background='var(--off-white)'}}>
                    <div style={{width:'42px',height:'42px',flexShrink:0,borderRadius:'var(--radius-sm)',background:'var(--white)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.1rem',border:'1px solid var(--grey-2)'}}>{item.icon}</div>
                    <div>
                      <div style={{fontSize:'0.68rem',fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--text-light)',marginBottom:'0.2rem'}}>{item.label}</div>
                      <div style={{fontSize:'0.95rem',fontWeight:600,color:'var(--text-dark)',lineHeight:1.4,whiteSpace:'pre-line'}}>{item.val}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div style={{marginTop:'1.5rem',padding:'1.5rem',background:'var(--navy)',borderRadius:'var(--radius-lg)',position:'relative',overflow:'hidden'}}>
                <div style={{position:'absolute',top:'-30px',right:'-30px',width:'120px',height:'120px',borderRadius:'50%',background:'rgba(214,40,40,0.1)'}}/>
                <div style={{fontSize:'0.7rem',fontWeight:700,letterSpacing:'0.14em',textTransform:'uppercase',color:'var(--red)',marginBottom:'0.5rem',position:'relative',zIndex:1}}>Emergency Line — 24/7</div>
                <a href="tel:+2347087445560" style={{fontFamily:'var(--font-impact)',fontSize:'1.8rem',color:'white',letterSpacing:'0.04em',position:'relative',zIndex:1,display:'block'}}>+234 708 744 5560</a>
                <div style={{fontSize:'0.82rem',color:'rgba(255,255,255,0.55)',marginTop:'0.35rem',position:'relative',zIndex:1}}>Always answered — day or night</div>
              </div>
            </div>

            {/* Right: form */}
            <div className="reveal-right">
              <div style={{background:'var(--white)',border:'1.5px solid var(--grey-2)',borderRadius:'var(--radius-lg)',padding:'2.5rem',boxShadow:'var(--shadow-sm)'}}>
                <h3 style={{fontFamily:'var(--font-display)',fontSize:'1.4rem',marginBottom:'0.5rem'}}>Book an Appointment</h3>
                <p style={{fontSize:'0.9rem',color:'var(--text-light)',marginBottom:'1.75rem',maxWidth:'none'}}>Fill in the form below and we'll contact you within 2 hours to confirm your booking.</p>

                <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:'1.1rem'}}>
                  <div className="form-row">
                    <div className="form-group"><label>Full Name</label><input type="text" placeholder="Your full name" required/></div>
                    <div className="form-group"><label>Phone Number</label><input type="tel" placeholder="08012345678" required/></div>
                  </div>
                  <div className="form-group"><label>Email Address (optional)</label><input type="email" placeholder="your@email.com"/></div>
                  <div className="form-group">
                    <label>Service Required</label>
                    <select>
                      <option value="">— Select a service —</option>
                      {['Emergency Care','Family Medicine','Maternity Services','Child Care / Paediatrics','Laboratory Services','General Surgery','Pharmacy','Mental Health & Psychiatry','General Enquiry'].map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="form-group"><label>Preferred Date & Time (optional)</label><input type="datetime-local"/></div>
                  <div className="form-group"><label>Additional Information</label><textarea placeholder="Tell us briefly about your concern..."/></div>
                  <div style={{display:'flex',alignItems:'center',gap:'1rem',flexWrap:'wrap'}}>
                    <button type="submit" className="btn btn-red" disabled={sending || sent}
                      style={sent ? {background:'var(--cyan)',cursor:'default'} : {}}>
                      {sending ? 'Sending…' : sent ? 'Appointment Booked ✓' : 'Book Appointment'}
                    </button>
                    {status && <span style={{fontSize:'0.82rem',fontWeight:600,color:'var(--red)'}}>{status}</span>}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EmergencyStrip />
    </div>
  )
}
