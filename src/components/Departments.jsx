import { useFadeUp } from '../hooks/useFadeUp'

const departments = [
  {
    color: '#00e5ff', label: 'Visual Studio', name: '3D & CGI\nVisual Studio.',
    desc: 'Producción Publicitaria, Archviz, Coleccionables. Estética premium para marcas exigentes.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" style={{ width: 46, height: 46, marginBottom: 14 }}>
        <polygon points="24,3 45,15 45,33 24,45 3,33 3,15" stroke="#00e5ff" strokeWidth="1.1" fill="none" opacity="0.7"/>
        <circle cx="24" cy="24" r="5" stroke="#00e5ff" strokeWidth="1" fill="rgba(0,229,255,0.08)"/>
        <circle cx="24" cy="24" r="2" fill="#00e5ff" opacity="0.7"/>
      </svg>
    ),
  },
  {
    color: '#c800ff', label: 'AI Content', name: 'AI & Digital Content.',
    desc: 'UGC IA Content, Redes Sociales (3D+IA), Layouts para Streaming.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" style={{ width: 46, height: 46, marginBottom: 14 }}>
        <circle cx="24" cy="24" r="8" stroke="#c800ff" strokeWidth="1.1" fill="rgba(200,0,255,0.07)"/>
        <line x1="24" y1="3" x2="24" y2="16" stroke="#c800ff" strokeWidth="1" opacity="0.7"/>
        <line x1="24" y1="32" x2="24" y2="45" stroke="#c800ff" strokeWidth="1" opacity="0.7"/>
        <line x1="3" y1="24" x2="16" y2="24" stroke="#c800ff" strokeWidth="1" opacity="0.7"/>
        <line x1="32" y1="24" x2="45" y2="24" stroke="#c800ff" strokeWidth="1" opacity="0.7"/>
        <circle cx="24" cy="3" r="2" fill="#c800ff" opacity="0.8"/>
        <circle cx="24" cy="45" r="2" fill="#c800ff" opacity="0.8"/>
        <circle cx="3" cy="24" r="2" fill="#c800ff" opacity="0.8"/>
        <circle cx="45" cy="24" r="2" fill="#c800ff" opacity="0.8"/>
      </svg>
    ),
  },
  {
    color: '#c800ff', label: 'Film & XR', name: 'Film &\nExperience.',
    desc: 'Filmación en Set, Dirección de Arte, 3D Mapping, VR/AR inmersiva.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" style={{ width: 46, height: 46, marginBottom: 14 }}>
        <rect x="4" y="14" width="30" height="20" rx="2" stroke="#00e5ff" strokeWidth="1.1" fill="none"/>
        <polyline points="34,19 44,14 44,34 34,29" stroke="#00e5ff" strokeWidth="1.1" fill="none"/>
      </svg>
    ),
  },
  {
    color: '#e6c700', label: 'Marca', name: 'Marca & Estrategia Creativa.',
    desc: 'Branding, Graphic Design, Dirección de Arte.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" style={{ width: 46, height: 46, marginBottom: 14 }}>
        <rect x="6" y="8" width="36" height="25" rx="2" stroke="#e6c700" strokeWidth="1.1" fill="none" opacity="0.65"/>
        <circle cx="24" cy="20" r="6" stroke="#e6c700" strokeWidth="1" fill="rgba(230,199,0,0.06)"/>
      </svg>
    ),
  },
  {
    color: '#00cc77', label: 'Inmersión', name: 'Experiencias & Inmersión.',
    desc: 'VR/AR, 3D Mapping, Photogrametría, 3D Print.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" style={{ width: 46, height: 46, marginBottom: 14 }}>
        <circle cx="24" cy="24" r="16" stroke="#00cc77" strokeWidth="1.1" fill="none" opacity="0.55"/>
        <path d="M24 8 Q34 24 24 40 Q14 24 24 8Z" stroke="rgba(0,204,119,0.35)" strokeWidth="0.9" fill="none"/>
        <path d="M8 24 Q24 34 40 24 Q24 14 8 24Z" stroke="rgba(0,204,119,0.35)" strokeWidth="0.9" fill="none"/>
        <circle cx="24" cy="24" r="3.5" fill="rgba(0,204,119,0.18)" stroke="#00cc77" strokeWidth="0.9"/>
      </svg>
    ),
  },
  {
    color: '#ff7020', label: 'BTL & Eventos', name: 'Activaciones BTL & Eventos Corporativos.',
    desc: 'Producción de eventos corporativos y activaciones de marca presenciales con impacto real.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" style={{ width: 46, height: 46, marginBottom: 14 }}>
        <rect x="4" y="10" width="40" height="26" rx="2" stroke="#ff7020" strokeWidth="1.1" fill="none" opacity="0.65"/>
        <circle cx="14" cy="23" r="4" stroke="#ff7020" strokeWidth="1" fill="rgba(255,112,32,0.08)"/>
        <circle cx="34" cy="23" r="4" stroke="#ff7020" strokeWidth="1" fill="rgba(255,112,32,0.08)"/>
      </svg>
    ),
  },
]

export default function Departments() {
  const ref = useFadeUp()

  return (
    <div className="sp" ref={ref}>
      <div className="lbl fade-up">Nuestros pilares</div>
      <div className="ttl fade-up fade-up-d1">Departamentos.</div>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
        gap: 2, background: 'var(--bg3)',
      }} className="bento-grid">
        {departments.map((d, i) => (
          <BentoCard key={i} {...d} delay={i} />
        ))}
      </div>
      <style>{`
        @media(max-width:900px){ .bento-grid { grid-template-columns:1fr !important; } }
      `}</style>
    </div>
  )
}

function BentoCard({ color, label, name, desc, icon, delay }) {
  return (
    <div
      className={`fade-up${delay > 0 ? ` fade-up-d${Math.min(delay, 4)}` : ''}`}
      style={{
        background: 'var(--bg2)', padding: '28px 24px',
        position: 'relative', overflow: 'hidden',
        minHeight: 270, display: 'flex', flexDirection: 'column',
        justifyContent: 'space-between', cursor: 'default',
        border: '1px solid transparent', transition: 'background 0.25s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = '#0f0f14'
        e.currentTarget.querySelector('.bc-border').style.opacity = '1'
        e.currentTarget.querySelector('.bc-arrow').style.borderColor = `${color}70`
        e.currentTarget.querySelector('.bc-arrow').style.color = color
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'var(--bg2)'
        e.currentTarget.querySelector('.bc-border').style.opacity = '0'
        e.currentTarget.querySelector('.bc-arrow').style.borderColor = 'rgba(255,255,255,0.07)'
        e.currentTarget.querySelector('.bc-arrow').style.color = 'rgba(255,255,255,0.14)'
      }}
    >
      <div>
        {icon}
        <span style={{
          display: 'inline-block', fontSize: 10, fontWeight: 700,
          letterSpacing: '1.5px', textTransform: 'uppercase',
          padding: '3px 9px', marginBottom: 10,
          background: `${color}14`, border: `1px solid ${color}38`, color,
        }}>{label}</span>
        <div style={{
          fontFamily: "'Barlow Condensed',sans-serif", fontSize: 28, fontWeight: 900,
          color: '#fff', textTransform: 'uppercase', lineHeight: 0.92, marginBottom: 10,
          whiteSpace: 'pre-line',
        }}>{name}</div>
        <div style={{ fontSize: 12, color: 'rgba(200,200,220,0.35)', lineHeight: 1.6 }}>{desc}</div>
      </div>
      <div className="bc-arrow" style={{
        position: 'absolute', right: 18, bottom: 18,
        width: 26, height: 26, borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.07)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 11, color: 'rgba(255,255,255,0.14)', transition: 'all 0.25s',
      }}>↗</div>
      <div className="bc-border" style={{
        position: 'absolute', inset: 0,
        border: `1px solid ${color}26`,
        opacity: 0, transition: 'opacity 0.25s', pointerEvents: 'none',
      }} />
    </div>
  )
}
