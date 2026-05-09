import { useFadeUp } from '../hooks/useFadeUp'

const projects = [
  {
    bg: 'linear-gradient(135deg,#0d001a,#3a0070)', emoji: '🚀',
    cat: 'CGI · Publicidad', title: 'Spot Automotriz', color: '#00e5ff',
    desc: 'Producción CGI full en Unreal Engine para campaña de lanzamiento. Modelado, iluminación y compositing de alto nivel cinematográfico.',
    tags: 'CGI,Unreal Engine,Compositing,Color Grading',
  },
  {
    bg: 'linear-gradient(135deg,#001228,#004a80)', emoji: '🌊',
    cat: 'IA · Film', title: 'Cortometraje Experimental', color: '#c800ff',
    desc: 'Obra audiovisual generada con IA generativa y compositing avanzado. Seleccionada en festivales internacionales.',
    tags: 'IA Generativa,Stable Diffusion,VFX,Film',
  },
  {
    bg: 'linear-gradient(135deg,#1a000a,#6b0030)', emoji: '💎',
    cat: 'Packshot · CGI', title: 'Campaña Luxury Joyas', color: '#c800ff',
    desc: 'Packshots CGI fotorrealistas para línea de joyería premium. Sin fotografía física, 100% CGI con Blender y Cycles.',
    tags: 'CGI,Blender,Packshot,Luxury',
  },
  {
    bg: 'linear-gradient(135deg,#001a08,#005c1e)', emoji: '🏗️',
    cat: 'Archviz · Render', title: 'Torre Residencial CABA', color: '#00cc77',
    desc: 'Renders arquitectónicos fotorrealistas de torre de 30 pisos. Interiores, exteriores, vistas aéreas y recorrido virtual.',
    tags: 'Archviz,Render,3D,Blender',
  },
  {
    bg: 'linear-gradient(135deg,#1a0800,#6b2200)', emoji: '🔥',
    cat: 'Videojuego · CGI', title: 'Opening Cinematic', color: '#ff7020',
    desc: 'Cinemática de apertura para videojuego AAA independiente. Personajes, entornos y VFX de nivel cinematográfico.',
    tags: 'Unreal Engine,CGI,VFX,Rigging',
  },
  {
    bg: 'linear-gradient(135deg,#00101a,#003550)', emoji: '⚡',
    cat: 'VR · Experiencia', title: 'Activación XR', color: '#00e5ff',
    desc: 'Experiencia de realidad aumentada para activación de marca en punto de venta. Disponible en iOS y Android.',
    tags: 'VR,AR,XR,Unity',
  },
]

export default function Portfolio({ onOpenModal, scrollTo }) {
  const ref = useFadeUp()

  return (
    <div id="portfolio" className="sp" ref={ref}>
      <div className="lbl fade-up">Nuestro trabajo</div>
      <div className="ttl fade-up fade-up-d1">Portfolio.</div>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
        gap: 2, background: 'var(--bg3)',
      }} className="portfolio-grid">
        {projects.map((p, i) => (
          <PortCard key={i} {...p} delay={i % 3} onClick={() => onOpenModal(p)} />
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: 24 }}>
        <button className="btn-outline" style={{ margin: '0 auto', display: 'inline-flex' }} onClick={() => scrollTo('contacto')}>
          Ver todo el portfolio · Contactanos ↗
        </button>
      </div>
      <style>{`
        @media(max-width:900px){ .portfolio-grid { grid-template-columns:1fr 1fr !important; } }
        @media(max-width:600px){ .portfolio-grid { grid-template-columns:1fr !important; } }
      `}</style>
    </div>
  )
}

function PortCard({ bg, emoji, cat, title, color, delay, onClick }) {
  return (
    <div
      className={`fade-up${delay > 0 ? ` fade-up-d${delay}` : ''}`}
      onClick={onClick}
      style={{
        position: 'relative', overflow: 'hidden', cursor: 'pointer',
        aspectRatio: '4/3', background: 'var(--bg2)',
        border: '1px solid var(--border)',
      }}
      onMouseEnter={e => {
        e.currentTarget.querySelector('.port-overlay').style.opacity = '1'
        e.currentTarget.querySelector('.port-visual').style.transform = 'scale(1.05)'
      }}
      onMouseLeave={e => {
        e.currentTarget.querySelector('.port-overlay').style.opacity = '0'
        e.currentTarget.querySelector('.port-visual').style.transform = 'scale(1)'
      }}
    >
      <div className="port-visual" style={{
        width: '100%', height: '100%', display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        fontSize: 54, transition: 'transform 0.4s ease',
        background: bg,
      }}>
        {emoji}
      </div>
      <div className="port-overlay" style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top,rgba(6,6,8,0.96) 0%,rgba(6,6,8,0.6) 60%,transparent 100%)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'flex-start', justifyContent: 'flex-end',
        padding: 22, opacity: 0, transition: 'opacity 0.3s',
      }}>
        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 5, color }}>{cat}</span>
        <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 20, fontWeight: 900, textTransform: 'uppercase', color: '#fff', lineHeight: 1.05 }}>{title}</div>
      </div>
      <div style={{
        position: 'absolute', top: 18, right: 18, width: 32, height: 32,
        borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 13, color: '#fff',
      }}>↗</div>
    </div>
  )
}
