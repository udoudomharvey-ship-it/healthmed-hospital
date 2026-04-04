import { Link } from 'react-router-dom'
import Logo3D from '../components/Logo3D'

export default function NotFound() {
  return (
    <div className="page-enter" style={{minHeight:'calc(100dvh - var(--nav-h) - 40px)',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',textAlign:'center',padding:'4rem 2rem'}}>
      <Logo3D size={80} variant="hero" style={{marginBottom:'2rem',animation:'logoSpin3dPage 1s ease forwards'}}/>
      <h1 style={{fontFamily:'var(--font-impact)',fontSize:'clamp(5rem,15vw,10rem)',color:'var(--grey-2)',lineHeight:1,marginBottom:'0.5rem'}}>404</h1>
      <h2 style={{fontFamily:'var(--font-display)',fontSize:'clamp(1.4rem,3vw,2rem)',marginBottom:'1rem'}}>Page Not Found</h2>
      <p style={{color:'var(--text-light)',marginBottom:'2.5rem',maxWidth:'42ch',marginInline:'auto'}}>The page you're looking for doesn't exist or may have moved. Let us help you find what you need.</p>
      <div style={{display:'flex',gap:'1rem',flexWrap:'wrap',justifyContent:'center'}}>
        <Link to="/" className="btn btn-red">Go to Home</Link>
        <Link to="/contact" className="btn btn-outline">Book Appointment</Link>
        <a href="tel:+2347087445560" className="btn btn-outline">Call Us Now</a>
      </div>
      <style>{`
        @keyframes logoSpin3dPage {
          0%   { transform:perspective(500px) rotateY(-180deg) scale(0.3); opacity:0; }
          60%  { transform:perspective(500px) rotateY(16deg) scale(1.07); opacity:1; }
          100% { transform:perspective(500px) rotateY(0deg) scale(1); opacity:1; }
        }
      `}</style>
    </div>
  )
}
