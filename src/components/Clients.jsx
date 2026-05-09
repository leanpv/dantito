const clients = ['Nike', 'Stella Artois', 'Mercado Libre', 'YPF', 'Kuwait']

export default function Clients() {
  return (
    <div style={{ borderBottom: '1px solid var(--border)', padding: '32px 40px' }} className="clients-wrap">
      <div style={{
        fontSize: 10, letterSpacing: 3, textTransform: 'uppercase',
        color: 'rgba(200,200,220,0.22)', fontWeight: 600,
        textAlign: 'center', marginBottom: 24,
      }}>
        Marcas que confían en nosotros
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }} className="clients-strip">
        {clients.map((c, i) => (
          <div key={i} style={{
            padding: '14px 28px',
            borderRight: i < clients.length - 1 ? '1px solid var(--border)' : 'none',
            fontFamily: "'Barlow Condensed',sans-serif",
            fontSize: 17, fontWeight: 700,
            color: 'rgba(200,200,220,0.18)', letterSpacing: 2, textTransform: 'uppercase',
            transition: 'color 0.25s', cursor: 'default',
          }}
          onMouseEnter={e => e.target.style.color = 'rgba(200,200,220,0.45)'}
          onMouseLeave={e => e.target.style.color = 'rgba(200,200,220,0.18)'}
          >
            {c}
          </div>
        ))}
      </div>
      <style>{`
        @media(max-width:900px){
          .clients-wrap { padding:24px 20px; }
          .clients-strip { flex-direction:column; }
          .clients-strip > div { border-right:none !important; border-bottom:1px solid var(--border); width:100%; text-align:center; }
        }
      `}</style>
    </div>
  )
}
