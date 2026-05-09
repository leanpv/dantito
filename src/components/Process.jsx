import { useFadeUp } from '../hooks/useFadeUp'

const steps = [
  {
    num: '01', name: 'Briefing', color: 'var(--cy)',
    desc: 'Escuchamos tu visión, objetivos y necesidades. Definimos el alcance, plazos y presupuesto del proyecto.',
  },
  {
    num: '02', name: 'Concepto', color: 'var(--mg)',
    desc: 'Desarrollamos la dirección creativa, moodboards, referencias, storyboards, concept art y todo lo necesario, antes de entrar en producción.',
  },
  {
    num: '03', name: 'Producción', color: 'var(--or)',
    desc: 'Nuestro equipo entra en acción, ejecutando el plan de acción definido previamente.',
  },
  {
    num: '04', name: 'Entrega', color: 'var(--gn)',
    desc: 'Revisiones, ajustes finales y entrega en los formatos requeridos. Soporte post-entrega incluido.',
  },
]

export default function Process() {
  const ref = useFadeUp()

  return (
    <div style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="sp" ref={ref}>
        <div className="lbl fade-up">Cómo trabajamos</div>
        <div className="ttl fade-up fade-up-d1">Nuestro proceso.</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', position: 'relative' }} className="proceso-grid">
          <div style={{
            position: 'absolute', top: 44, left: 0, right: 0, height: 1,
            background: 'linear-gradient(90deg,var(--cy),var(--mg),var(--or),var(--gn))',
            opacity: 0.25, zIndex: 0, margin: '0 14%',
          }} className="proceso-connector" />
          {steps.map((s, i) => (
            <div key={i} className={`fade-up${i > 0 ? ` fade-up-d${i}` : ''}`} style={{
              padding: '36px 28px',
              borderRight: i < steps.length - 1 ? '1px solid var(--border)' : 'none',
              position: 'relative', zIndex: 1,
            }}>
              <div style={{
                width: 10, height: 10, borderRadius: '50%',
                background: s.color, border: `2px solid ${s.color}`,
                boxShadow: `0 0 10px ${s.color}80`,
                marginBottom: 18,
              }} />
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 52, fontWeight: 900, lineHeight: 1, marginBottom: 10, opacity: 0.1, color: '#fff' }}>
                {s.num}
              </div>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 20, fontWeight: 900, textTransform: 'uppercase', color: s.color, marginBottom: 8, letterSpacing: '-0.3px' }}>
                {s.name}
              </div>
              <div style={{ fontSize: 12, color: 'rgba(200,200,220,0.38)', lineHeight: 1.65 }}>
                {s.desc}
              </div>
              <div style={{
                position: 'absolute', bottom: 0, left: 0, height: 2, width: '100%',
                background: `linear-gradient(90deg,${s.color},transparent)`,
              }} />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:900px){
          .proceso-grid { grid-template-columns:1fr 1fr !important; }
          .proceso-connector { display:none; }
          .proceso-grid > div { border-right:none !important; border-bottom:1px solid var(--border); }
        }
        @media(max-width:600px){
          .proceso-grid { grid-template-columns:1fr !important; }
        }
      `}</style>
    </div>
  )
}
