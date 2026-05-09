export default function MobileMenu({ open, onClose, scrollTo }) {
  const links = [
    { id: 'hero', label: 'Home' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'showreel', label: 'Showreel' },
    { id: 'contacto', label: 'News' },
  ]

  const handleClick = (id) => {
    onClose()
    setTimeout(() => scrollTo(id), 100)
  }

  return (
    <div style={{
      display: open ? 'flex' : 'none',
      position: 'fixed', inset: 0,
      background: 'rgba(6,6,8,0.98)',
      zIndex: 190, flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: 28,
    }}>
      <button
        onClick={onClose}
        style={{
          position: 'absolute', top: 20, right: 24,
          fontSize: 24, color: 'rgba(200,200,220,0.4)',
          cursor: 'pointer', background: 'none', border: 'none',
        }}
      >✕</button>

      {links.map(l => (
        <a
          key={l.id}
          href={`#${l.id}`}
          onClick={e => { e.preventDefault(); handleClick(l.id) }}
          style={{
            fontFamily: "'Barlow Condensed',sans-serif",
            fontSize: 36, fontWeight: 900,
            color: 'rgba(200,200,220,0.6)', textDecoration: 'none',
            letterSpacing: 2, textTransform: 'uppercase',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.target.style.color = 'var(--cy)'}
          onMouseLeave={e => e.target.style.color = 'rgba(200,200,220,0.6)'}
        >
          {l.label}
        </a>
      ))}

      <a
        href="#contacto"
        onClick={e => { e.preventDefault(); handleClick('contacto') }}
        style={{
          fontFamily: "'Barlow Condensed',sans-serif",
          fontSize: 36, fontWeight: 900,
          color: 'var(--mg)', textDecoration: 'none',
          letterSpacing: 2, textTransform: 'uppercase',
        }}
      >
        Iniciar Proyecto
      </a>
    </div>
  )
}
