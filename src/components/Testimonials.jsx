import { useFadeUp } from '../hooks/useFadeUp'

const testimonials = [
  {
    quote: 'El resultado superó todas nuestras expectativas. El equipo de Latitud transformó nuestro brief en algo que jamás hubiéramos imaginado.',
    name: 'Martina Rodríguez', role: 'Directora Creativa · Agencia',
    initials: 'MR', grad: 'linear-gradient(135deg,var(--cy),var(--mg))',
  },
  {
    quote: 'Latitud entiende el negocio además del arte. Entregaron en tiempo y con calidad cinematográfica. Los volvemos a contratar sin dudarlo.',
    name: 'Juan Pablo Méndez', role: 'Head of Marketing · Empresa',
    initials: 'JP', grad: 'linear-gradient(135deg,var(--mg),var(--or))',
  },
  {
    quote: 'Los renders fueron tan realistas que los clientes pensaban que eran fotos. Cerramos ventas del proyecto antes de construir.',
    name: 'Sofía Villanueva', role: 'Gerente Comercial · Desarrolladora',
    initials: 'SV', grad: 'linear-gradient(135deg,var(--gn),var(--cy))',
  },
]

export default function Testimonials() {
  const ref = useFadeUp()

  return (
    <div style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="sp" ref={ref}>
        <div className="lbl fade-up">Lo que dicen</div>
        <div className="ttl fade-up fade-up-d1">Testimonios.</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2, background: 'var(--bg3)' }} className="test-grid">
          {testimonials.map((t, i) => (
            <div key={i} className={`fade-up${i > 0 ? ` fade-up-d${i}` : ''}`} style={{
              background: 'var(--bg2)', padding: '28px 24px', border: '1px solid var(--border)',
            }}>
              <div style={{ color: 'var(--cy)', fontSize: 12, letterSpacing: 2, marginBottom: 14 }}>★★★★★</div>
              <div style={{ fontSize: 13, color: 'rgba(200,200,220,0.55)', lineHeight: 1.75, marginBottom: 20, fontStyle: 'italic' }}>
                <span style={{ color: 'var(--cy)', fontSize: 22, fontStyle: 'normal', lineHeight: 0, verticalAlign: '-5px', marginRight: 2 }}>"</span>
                {t.quote}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: t.grad, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: 14, color: '#060608', flexShrink: 0,
                }}>{t.initials}</div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: '#e8e8f0' }}>{t.name}</div>
                  <div style={{ fontSize: 11, color: 'rgba(200,200,220,0.32)', marginTop: 1 }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:900px){ .test-grid { grid-template-columns:1fr !important; } }
      `}</style>
    </div>
  )
}
