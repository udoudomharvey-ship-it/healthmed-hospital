import { Link } from 'react-router-dom'
import { useRevealAll } from '../hooks/useReveal'
import { EmergencyStrip } from '../components/utils'
import Logo3D from '../components/Logo3D'
import { IconMicroscope, IconArrow, IconCheck } from '../components/Icons'

const TESTS = [
  { name: 'Malaria Test (RDT & Microscopy)', desc: 'Rapid detection of malaria parasites in blood' },
  { name: 'Typhoid Test (Widal)', desc: 'Antibody detection for Salmonella typhi' },
  { name: 'PCV (Packed Cell Volume)', desc: 'Measurement of red blood cell proportion' },
  { name: 'Genotype Testing', desc: 'Sickle cell and haemoglobin genotype (AA, AS, SS, AC)' },
  { name: 'Blood Group & Rhesus Factor', desc: 'ABO and Rh blood group determination' },
  { name: 'Full Blood Count (FBC)', desc: 'Complete analysis of blood cells and indices' },
  { name: 'HIV Screening', desc: 'Rapid HIV 1 & 2 antibody screening' },
  { name: 'Hepatitis B & C Screening', desc: 'Surface antigen and antibody detection' },
  { name: 'Urinalysis', desc: 'Complete urine analysis for infections and disorders' },
  { name: 'Blood Glucose (Fasting & Random)', desc: 'Diabetes screening and monitoring' },
  { name: 'Pregnancy Test (urine/serum)', desc: 'HCG detection for early pregnancy confirmation' },
  { name: 'Stool Analysis', desc: 'Detection of parasites, bacteria and blood in stool' },
  { name: 'Kidney Function Test (KFT)', desc: 'Creatinine, urea, and electrolyte levels' },
  { name: 'Liver Function Test (LFT)', desc: 'AST, ALT, bilirubin and albumin levels' },
  { name: 'Lipid Profile', desc: 'Cholesterol, HDL, LDL and triglycerides' },
  { name: 'Culture & Sensitivity', desc: 'Bacterial identification and antibiotic susceptibility' },
]

const FEATURES = [
  'Results ready same day',
  'No referrals or waiting days',
  'Modern equipment, accurate results',
  'Available 24 hours a day',
]

const METRICS = [
  { val: '24', lbl: 'Hours Available' },
  { val: '1hr', lbl: 'Avg Result Time' },
  { val: '15+', lbl: 'Tests Offered' },
  { val: '0', lbl: 'Referrals Needed' },
]

export default function Laboratory() {
  useRevealAll()

  return (
    <div className="page-enter">
      <div className="page-hero">
        <div className="page-hero-wm">
          <Logo3D size={320} variant="hero" style={{opacity:0.04, cursor:'default', filter:'none'}}/>
        </div>
        <div className="container page-hero-inner">
          <div className="page-hero-tag">Diagnostics</div>
          <h1>Laboratory Services</h1>
          <p>Fast, accurate, on-site diagnostic testing — results the same day, so treatment can begin without delay.</p>
        </div>
      </div>

      <section style={{paddingBlock:'var(--section-pad)'}}>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'5rem',alignItems:'center'}}>
            <div className="reveal-left">
              <div className="section-tag">Why Our Lab</div>
              <h2>Same-day results.<br/>No referrals needed.</h2>
              <p style={{marginTop:'1rem'}}>Our fully equipped on-site laboratory handles a comprehensive range of diagnostic tests. Walk in, get tested, and receive your results the same day.</p>
              <div style={{marginTop:'2rem',display:'flex',flexDirection:'column',gap:'0.85rem'}}>
                {FEATURES.map(f => (
                  <div key={f} style={{display:'flex',alignItems:'center',gap:'0.75rem',fontSize:'0.92rem',color:'var(--text-mid)'}}>
                    <div style={{width:'32px',height:'32px',borderRadius:'var(--radius-sm)',background:'var(--red-light)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                      <IconCheck size={16} color="var(--red)"/>
                    </div>
                    {f}
                  </div>
                ))}
              </div>
              <div style={{marginTop:'2rem',display:'flex',gap:'1rem',flexWrap:'wrap'}}>
                <Link to="/contact" className="btn btn-red">Book a Lab Test</Link>
                <a href="tel:+2347087445560" className="btn btn-outline">Call the Lab</a>
              </div>
            </div>

            <div className="reveal-right" style={{background:'var(--navy)',borderRadius:'var(--radius-lg)',padding:'2.75rem',position:'relative',overflow:'hidden',textAlign:'center'}}>
              <div style={{position:'absolute',top:'-50px',right:'-50px',width:'200px',height:'200px',borderRadius:'50%',background:'rgba(214,40,40,0.08)'}}/>
              <div style={{position:'absolute',bottom:'-40px',left:'-40px',width:'160px',height:'160px',borderRadius:'50%',background:'rgba(0,180,216,0.06)'}}/>
              <div style={{width:'90px',height:'90px',borderRadius:'50%',background:'rgba(214,40,40,0.15)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 1.5rem',position:'relative',zIndex:1}}>
                <IconMicroscope size={44} color="var(--red)"/>
              </div>
              <h3 style={{fontFamily:'var(--font-display)',fontSize:'1.6rem',color:'var(--white)',marginBottom:'0.75rem',position:'relative',zIndex:1}}>On-Site Laboratory</h3>
              <p style={{color:'rgba(255,255,255,0.6)',fontSize:'0.9rem',maxWidth:'none',position:'relative',zIndex:1}}>State-of-the-art diagnostic equipment with trained laboratory scientists delivering precise results.</p>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem',marginTop:'1.75rem',position:'relative',zIndex:1}}>
                {METRICS.map(m => (
                  <div key={m.lbl} style={{background:'rgba(255,255,255,0.06)',borderRadius:'var(--radius-sm)',padding:'1rem',textAlign:'center',border:'1px solid rgba(255,255,255,0.08)'}}>
                    <div style={{fontFamily:'var(--font-impact)',fontSize:'2rem',color:'var(--red)',lineHeight:1}}>{m.val}</div>
                    <div style={{fontSize:'0.72rem',color:'rgba(255,255,255,0.5)',marginTop:'0.3rem',letterSpacing:'0.06em',textTransform:'uppercase'}}>{m.lbl}</div>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn btn-red" style={{marginTop:'1.75rem',width:'100%',justifyContent:'center'}}>Book a Test Now</Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{paddingBlock:'var(--section-pad)',background:'var(--off-white)'}}>
        <div className="container">
          <div className="section-tag reveal">Available Tests</div>
          <h2 className="reveal" style={{transitionDelay:'0.1s'}}>Tests we perform</h2>
          <p className="reveal" style={{transitionDelay:'0.2s',marginTop:'0.75rem'}}>Walk in for any of the following tests — no appointment required for most basic investigations.</p>
          <div className="stagger" style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:'1rem',marginTop:'3rem'}}>
            {TESTS.map(t => (
              <div key={t.name} style={{background:'var(--white)',border:'1.5px solid var(--grey-2)',borderRadius:'var(--radius-md)',padding:'1.4rem 1.5rem',display:'flex',alignItems:'flex-start',gap:'1rem',transition:'border-color 0.25s,background 0.25s,transform 0.25s',cursor:'default'}}
                onMouseEnter={e => {e.currentTarget.style.borderColor='rgba(214,40,40,0.3)';e.currentTarget.style.background='var(--red-light)';e.currentTarget.style.transform='translateY(-3px)'}}
                onMouseLeave={e => {e.currentTarget.style.borderColor='var(--grey-2)';e.currentTarget.style.background='var(--white)';e.currentTarget.style.transform=''}}>
                <span style={{width:'10px',height:'10px',borderRadius:'50%',background:'var(--red)',flexShrink:0,marginTop:'5px',display:'block'}}/>
                <div>
                  <div style={{fontSize:'0.95rem',fontWeight:600,color:'var(--text-dark)',marginBottom:'0.2rem'}}>{t.name}</div>
                  <div style={{fontSize:'0.82rem',color:'var(--text-light)'}}>{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{textAlign:'center',marginTop:'3rem'}} className="reveal">
            <p style={{marginBottom:'1.5rem',fontSize:'1rem'}}>Don't see the test you need? Call us — we offer more.</p>
            <div style={{display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap'}}>
              <Link to="/contact" className="btn btn-red">Book a Test</Link>
              <a href="tel:+2347087445560" className="btn btn-outline">Call the Lab</a>
            </div>
          </div>
        </div>
      </section>

      <EmergencyStrip />
    </div>
  )
}
