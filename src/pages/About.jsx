import { Link } from 'react-router-dom'
import { useRevealAll } from '../hooks/useReveal'
import { EmergencyStrip } from '../components/utils'
import Logo3D from '../components/Logo3D'

const INFO_CARDS = [
  { label: 'Location',     val: 'Uyo, Akwa Ibom' },
  { label: 'Registration', val: 'RC1505282' },
  { label: 'Availability', val: '24 Hours Daily', red: true },
  { label: 'Services',     val: '8+ Departments' },
  { label: 'Email',        val: 'HealthMed.hosp@gmail.com', small: true },
  { label: 'Phone',        val: '+234 708 744 5560', small: true },
]

const VALUES = [
  { icon: '❤️', title: 'Compassion', desc: 'We treat every patient with empathy, respect, and dignity — understanding that illness affects more than just the body.' },
  { icon: '✅', title: 'Quality',    desc: 'We are committed to delivering the highest standard of medical care through qualified staff, accurate diagnostics, and evidence-based treatment.' },
  { icon: '🕐', title: 'Availability', desc: 'Medical emergencies don\'t keep office hours. We are open 24 hours a day, 7 days a week, 365 days a year.' },
  { icon: '🤝', title: 'Community', desc: 'We are deeply rooted in Uyo and Akwa Ibom. Serving our community is not just our business — it is our calling.' },
]

export default function About() {
  useRevealAll()

  return (
    <div className="page-enter">
      <div className="page-hero">
        <div className="page-hero-wm">
          <Logo3D size={320} variant="hero" style={{opacity:0.04,cursor:'default',filter:'none'}}/>
        </div>
        <div className="container page-hero-inner">
          <div className="page-hero-tag">Our Story</div>
          <h1>About HealthMed Hospital</h1>
          <p>A trusted healthcare institution serving the Uyo community with quality, compassionate, round-the-clock medical care.</p>
        </div>
      </div>

      <section style={{paddingBlock:'var(--section-pad)'}}>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1.3fr',gap:'5rem',alignItems:'start'}}>

            <div className="reveal-left">
              {/* 3D Logo showcase */}
              <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'2rem'}}>
                <div style={{width:'220px',height:'220px',borderRadius:'var(--radius-lg)',background:'var(--navy)',display:'flex',alignItems:'center',justifyContent:'center',position:'relative',overflow:'hidden',boxShadow:'var(--shadow-lg)',cursor:'pointer'}}
                  onMouseEnter={e => e.currentTarget.querySelector('svg').style.transform='perspective(400px) rotateY(20deg) scale(1.08)'}
                  onMouseLeave={e => e.currentTarget.querySelector('svg').style.transform=''}>
                  <div style={{position:'absolute',inset:0,background:'radial-gradient(circle at 30% 30%, rgba(214,40,40,0.15) 0%, transparent 60%)'}}/>
                  <Logo3D size={150} variant="about" style={{
                    animation:'logoFloat3d 4s ease-in-out infinite',
                    position:'relative',zIndex:1,
                  }}/>
                </div>
                <div style={{fontFamily:'var(--font-display)',fontSize:'1.3rem',color:'var(--text-dark)',textAlign:'center'}}>
                  Health<span style={{color:'var(--red)'}}>Med</span> Hospital
                </div>
                <div style={{fontSize:'0.72rem',color:'var(--text-light)',letterSpacing:'0.1em',textAlign:'center'}}>RC1505282 · Uyo, Akwa Ibom State</div>
              </div>

              {/* Info cards */}
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0.75rem',marginTop:'2rem'}}>
                {INFO_CARDS.map(c => (
                  <div key={c.label} style={{background:'var(--off-white)',border:'1px solid var(--grey-2)',borderRadius:'var(--radius-md)',padding:'1rem 1.1rem'}}>
                    <div style={{fontSize:'0.65rem',fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase',color:'var(--text-light)',marginBottom:'0.3rem'}}>{c.label}</div>
                    <div style={{fontSize:c.small?'0.78rem':'0.9rem',fontWeight:600,color:c.red?'var(--red)':'var(--text-dark)'}}>{c.val}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-right">
              <h2>We exist to serve <span style={{color:'var(--red)',fontWeight:600}}>every patient</span>, every hour.</h2>
              <p style={{marginTop:'1.5rem'}}>HealthMed Hospital is a fully registered medical facility located at 9 Etim Okon Usanga Close, Off Nwaniba by Water Fountain, Uyo, Akwa Ibom State. We are committed to providing accessible, quality healthcare to individuals and families in our community — 24 hours a day, 365 days a year.</p>
              <p style={{marginTop:'1.25rem'}}>Our hospital offers a comprehensive range of services including emergency care, family medicine, maternity services, child care, general surgery, laboratory diagnostics, pharmacy, and mental health support. Every service is available around the clock because we understand that medical needs do not follow a schedule.</p>
              <p style={{marginTop:'1.25rem'}}>We believe that quality healthcare should be accessible to everyone. Our team of qualified and experienced medical professionals — doctors, nurses, laboratory scientists, and support staff — works tirelessly to ensure that every patient who walks through our doors receives the highest standard of care delivered with compassion and dignity.</p>

              <div style={{marginTop:'2.5rem'}}>
                <div className="section-tag">Our Hours</div>
                <div style={{display:'flex',flexDirection:'column',gap:'0.65rem',marginTop:'1rem'}}>
                  {[['Monday – Sunday','24 Hours'],['Public Holidays','Always Open'],['Emergency Services','Always Ready']].map(([day,val],i) => (
                    <div key={day} style={{display:'flex',justifyContent:'space-between',padding:'0.75rem 1rem',background:i===2?'var(--red-light)':'var(--off-white)',borderRadius:'var(--radius-sm)',border:i===2?'1px solid rgba(214,40,40,0.2)':'1px solid var(--grey-2)',fontSize:'0.88rem'}}>
                      <span style={{fontWeight:500,color:'var(--text-dark)'}}>{day}</span>
                      <span style={{color:'var(--red)',fontWeight:700}}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"/>

      <section style={{paddingBlock:'var(--section-pad)',background:'var(--off-white)'}}>
        <div className="container">
          <div className="section-tag reveal">What We Stand For</div>
          <h2 className="reveal" style={{transitionDelay:'0.1s'}}>Our Values</h2>
          <div className="stagger" style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:'1.25rem',marginTop:'3rem'}}>
            {VALUES.map(v => (
              <div key={v.title} style={{background:'var(--white)',border:'1.5px solid var(--grey-2)',borderRadius:'var(--radius-md)',padding:'1.75rem',textAlign:'center',transition:'border-color 0.3s,transform 0.3s,box-shadow 0.3s'}}
                onMouseEnter={e => {e.currentTarget.style.borderColor='rgba(214,40,40,0.3)';e.currentTarget.style.transform='translateY(-5px)';e.currentTarget.style.boxShadow='var(--shadow-lg)'}}
                onMouseLeave={e => {e.currentTarget.style.borderColor='var(--grey-2)';e.currentTarget.style.transform='';e.currentTarget.style.boxShadow=''}}>
                <div style={{width:'60px',height:'60px',borderRadius:'50%',background:'var(--red-light)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 1.25rem',fontSize:'1.5rem'}}>{v.icon}</div>
                <div style={{fontSize:'1rem',fontWeight:700,color:'var(--text-dark)',marginBottom:'0.5rem'}}>{v.title}</div>
                <p style={{fontSize:'0.85rem',color:'var(--text-light)',lineHeight:1.7,maxWidth:'none'}}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EmergencyStrip />

      <style>{`
        @keyframes logoFloat3d {
          0%,100% { transform:perspective(400px) rotateY(0deg) translateY(0); }
          35%     { transform:perspective(400px) rotateY(12deg) translateY(-8px); }
          70%     { transform:perspective(400px) rotateY(-10deg) translateY(-4px); }
        }
      `}</style>
    </div>
  )
}
