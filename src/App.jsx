import { useState } from 'react'
import './index.css'
import Nav from './components/Nav'
import MobileMenu from './components/MobileMenu'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Clients from './components/Clients'
import Showreel from './components/Showreel'
import About from './components/About'
import Departments from './components/Departments'
import Process from './components/Process'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import PortfolioModal from './components/PortfolioModal'

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [modal, setModal] = useState(null)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} scrollTo={scrollTo} />
      <Nav onHamburger={() => setMobileOpen(true)} scrollTo={scrollTo} />
      <FloatingButtons scrollTo={scrollTo} />
      <PortfolioModal modal={modal} onClose={() => setModal(null)} scrollTo={scrollTo} />

      <Hero scrollTo={scrollTo} />
      <Stats />
      <Clients />
      <Showreel />
      <About />
      <Departments />
      <Process />
      <Portfolio onOpenModal={setModal} scrollTo={scrollTo} />
      <Testimonials />
      <Services />
      <Contact />
      <Footer scrollTo={scrollTo} />
    </>
  )
}

export default App
