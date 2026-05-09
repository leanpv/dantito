import { useEffect, useState } from 'react'

const LogoSVG = () => (
  <svg width="36" height="36" viewBox="0 0 100 100" fill="none">
    <polygon points="50,8 88,28 88,72 50,92 12,72 12,28" fill="none" stroke="rgba(160,160,180,0.5)" strokeWidth="3"/>
    <polygon points="50,8 88,28 50,48 12,28" fill="rgba(0,0,0,0.3)" stroke="rgba(180,180,200,0.35)" strokeWidth="1.5"/>
    <polygon points="12,28 50,48 50,92 12,72" fill="rgba(0,0,0,0.4)" stroke="rgba(180,180,200,0.3)" strokeWidth="1.5"/>
    <polygon points="88,28 50,48 50,92 88,72" fill="rgba(0,0,0,0.35)" stroke="rgba(180,180,200,0.3)" strokeWidth="1.5"/>
    <line x1="12" y1="28" x2="50" y2="48" stroke="#c800ff" strokeWidth="1.5" opacity="0.85"/>
    <line x1="12" y1="72" x2="50" y2="92" stroke="#c800ff" strokeWidth="1" opacity="0.5"/>
    <line x1="12" y1="28" x2="12" y2="72" stroke="#c800ff" strokeWidth="1.5" opacity="0.85"/>
    <line x1="88" y1="28" x2="50" y2="48" stroke="#00e5ff" strokeWidth="1.5" opacity="0.85"/>
    <line x1="88" y1="72" x2="50" y2="92" stroke="#00e5ff" strokeWidth="1" opacity="0.5"/>
    <line x1="88" y1="28" x2="88" y2="72" stroke="#00e5ff" strokeWidth="1.5" opacity="0.85"/>
    <circle cx="12" cy="28" r="3" fill="#c800ff" opacity="0.95"/>
    <circle cx="88" cy="28" r="3" fill="#00e5ff" opacity="0.95"/>
    <circle cx="50" cy="48" r="3.5" fill="#fff" opacity="0.95"/>
  </svg>
)

export default function Nav({ onHamburger, scrollTo }) {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[id]')
      let cur = ''
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 90) cur = s.id
      })
      if (cur) setActive(cur)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { id: 'hero', label: 'Home' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'showreel', label: 'Showreel' },
    { id: 'contacto', label: 'News' },
  ]

  return (
    <nav style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 40px', height: 64,
      borderBottom: '1px solid var(--border)',
      background: 'rgba(6,6,8,0.92)',
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      backdropFilter: 'blur(16px)',
    }}>
      <a
        href="#hero"
        onClick={e => { e.preventDefault(); scrollTo('hero') }}
        style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}
      >
        <LogoSVG />
        <div>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 20, fontWeight: 900, color: '#fff', letterSpacing: 1, lineHeight: 1 }}>LATITUD</div>
          <div style={{ fontSize: 8, color: 'rgba(0,229,255,0.6)', letterSpacing: 2, fontWeight: 500, textTransform: 'uppercase' }}>3D+IA Studios</div>
        </div>
      </a>

      <ul style={{ display: 'flex', gap: 28, listStyle: 'none' }} className="nav-links-desktop">
        {links.map(l => (
          <li key={l.id}>
            <a
              href={`#${l.id}`}
              onClick={e => { e.preventDefault(); scrollTo(l.id) }}
              style={{
                color: active === l.id ? 'var(--cy)' : 'var(--text)',
                textDecoration: 'none', fontSize: 11, fontWeight: 600,
                letterSpacing: '1.5px', textTransform: 'uppercase', cursor: 'pointer',
                transition: 'color 0.2s', paddingBottom: 2,
                borderBottom: active === l.id ? '2px solid var(--cy)' : '2px solid transparent',
              }}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="nav-cta-btn"
        onClick={() => scrollTo('contacto')}
        style={{
          background: 'transparent', border: '1.5px solid var(--mg)', color: 'var(--mg)',
          padding: '8px 18px', fontSize: 11, fontWeight: 700, letterSpacing: '1.5px',
          textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'Inter,sans-serif',
          transition: 'all 0.2s',
        }}
        onMouseEnter={e => e.target.style.background = 'rgba(200,0,255,0.1)'}
        onMouseLeave={e => e.target.style.background = 'transparent'}
      >
        Iniciar Proyecto
      </button>

      <div
        onClick={onHamburger}
        className="nav-hamburger"
        style={{ display: 'none', flexDirection: 'column', gap: 5, cursor: 'pointer', padding: 4 }}
      >
        <span style={{ display: 'block', width: 22, height: 1.5, background: '#e8e8f0' }}></span>
        <span style={{ display: 'block', width: 22, height: 1.5, background: '#e8e8f0' }}></span>
        <span style={{ display: 'block', width: 22, height: 1.5, background: '#e8e8f0' }}></span>
      </div>

      <style>{`
        @media(max-width:900px){
          .nav-links-desktop { display:none !important; }
          .nav-cta-btn { display:none !important; }
          .nav-hamburger { display:flex !important; }
          nav { padding: 0 20px !important; }
        }
      `}</style>
    </nav>
  )
}
