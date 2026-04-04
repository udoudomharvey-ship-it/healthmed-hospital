import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import FloatingCallBtn from './components/FloatingCallBtn'
import BackToTop from './components/BackToTop'
import ProgressBar from './components/ProgressBar'
import Home from './pages/Home'
import Services from './pages/Services'
import Laboratory from './pages/Laboratory'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <Preloader />
      <ProgressBar />
      <ScrollToTop />
      <div className="top-banner">
        <div className="top-banner-inner">
          <p>
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M8 2C5.24 2 3 4.24 3 7c0 4 5 9 5 9s5-5 5-9c0-2.76-2.24-5-5-5zm0 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
            </svg>
            9 Etim Okon Usanga Close, Off Nwaniba by Water Fountain, Uyo, Akwa Ibom State
          </p>
          <div className="top-banner-right">
            <a href="mailto:HealthMed.hosp@gmail.com">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <rect x="1" y="3" width="14" height="10" rx="1.5"/><path d="M1 4l7 5 7-5"/>
              </svg>
              HealthMed.hosp@gmail.com
            </a>
            <a href="tel:+2347087445560" className="emergency-badge">
              <svg viewBox="0 0 14 14" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" width="11" height="11">
                <path d="M13 9.5v2a1 1 0 0 1-1 1A12 12 0 0 1 1 1.5 1 1 0 0 1 2 .5h2a1 1 0 0 1 1 .8 5.5 5.5 0 0 0 .3 1.2.8.8 0 0 1-.2.9L4.1 4.4A9.6 9.6 0 0 0 9.6 9.9l.9-.9a.8.8 0 0 1 .9-.2 5.5 5.5 0 0 0 1.2.3 1 1 0 0 1 .8 1z"/>
              </svg>
              +234 708 744 5560
            </a>
          </div>
        </div>
      </div>

      <Navbar />

      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/services"   element={<Services />} />
        <Route path="/laboratory" element={<Laboratory />} />
        <Route path="/about"      element={<About />} />
        <Route path="/contact"    element={<Contact />} />
        <Route path="*"           element={<NotFound />} />
      </Routes>

      <Footer />
      <FloatingCallBtn />
      <BackToTop />
    </>
  )
}
