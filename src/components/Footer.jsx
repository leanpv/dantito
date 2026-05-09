export default function Footer({ scrollTo }) {
  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contacto', label: 'Contacto' },
  ]
  const social = ['Instagram', 'Behance', 'LinkedIn', 'Vimeo']

  return (
    <footer style={{
      borderTop: '1px solid var(--border)', padding: '32px 40px',
      display: 'grid', gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center', gap: 20,
    }} className="footer">
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <svg width="20" height="20" viewBox="0 0 100 100" fill="none" opacity="0.4">
          <polygon points="50,8 88,28 88,72 50,92 12,72 12,28" fill="none" stroke="rgba(160,160,180,0.5)" strokeWidth="3"/>
          <line x1="12" y1="28" x2="50" y2="48" stroke="#c800ff" strokeWidth="2" opacity="0.7"/>
          <line x1="88" y1="28" x2="50" y2="48" stroke="#00e5ff" strokeWidth="2" opacity="0.7"/>
          <circle cx="50" cy="48" r="4" fill="#fff" opacity="0.8"/>
        </svg>
        <span style={{ fontSize: 11, color: 'rgba(200,200,220,0.16)' }}>© 2025 Latitud 3D+IA Studios · Buenos Aires</span>
      </div>

      <div style={{ display: 'flex', gap: 22 }}>
        {navLinks.map(l => (
          <a key={l.id} href={`#${l.id}`}
            onClick={e => { e.preventDefault(); scrollTo(l.id) }}
            style={{ fontSize: 11, color: 'rgba(200,200,220,0.25)', textDecoration: 'none', cursor: 'pointer', letterSpacing: '0.3px', transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = 'var(--cy)'}
            onMouseLeave={e => e.target.style.color = 'rgba(200,200,220,0.25)'}
          >{l.label}</a>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 14, justifyContent: 'flex-end' }}>
        {social.map(s => (
          <a key={s} href="#" target="_blank"
            style={{ fontSize: 11, color: 'rgba(200,200,220,0.18)', textDecoration: 'none', cursor: 'pointer', transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = 'rgba(200,200,220,0.5)'}
            onMouseLeave={e => e.target.style.color = 'rgba(200,200,220,0.18)'}
          >{s}</a>
        ))}
      </div>

      <style>{`
        @media(max-width:900px){
          .footer { grid-template-columns:1fr !important; text-align:center; gap:16px; }
          .footer > div { justify-content:center !important; }
        }
      `}</style>
    </footer>
  )
}
