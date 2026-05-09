import { useState } from 'react'
import { useFadeUp } from '../hooks/useFadeUp'

const services = [
  { num: '01', cat: 'cgi', cls: 'c1', label: '3D & CGI Studio', name: 'Producción Publicitaria CGI', desc: 'Piezas visuales para campañas digitales, spots y presentaciones con estética premium.' },
  { num: '02', cat: 'cgi', cls: 'c1', label: '3D & CGI Studio', name: 'Animación 3D', desc: 'Videos animados, motion graphics y simulaciones para proyectos publicitarios y corporativos.' },
  { num: '03', cat: 'cgi', cls: 'c1', label: '3D & CGI Studio', name: 'Dirección Creativa', desc: 'Universos visuales y conceptos antes de la producción final para marcas que buscan diferenciarse.' },
  { num: '04', cat: 'cgi', cls: 'c1', label: '3D & CGI Studio', name: 'Concept Art', desc: 'Conceptos visuales de personajes, entornos y productos definiendo la estética de cada proyecto.' },
  { num: '05', cat: 'cgi', cls: 'c1', label: '3D & CGI Studio', name: 'Renders Arquitectónicos', desc: 'Visualizaciones fotorrealistas para estudios, inmobiliarias y constructoras.' },
  { num: '06', cat: 'cgi', cls: 'c1', label: '3D & CGI Studio', name: 'Visualización de Producto', desc: 'Imágenes y animaciones hiperrealistas para e-commerce y campañas sin fotografía tradicional.' },
  { num: '07', cat: 'cgi', cls: 'c1', label: '3D & CGI Studio', name: 'Assets 3D para Videojuegos', desc: 'Personajes, props y escenarios optimizados para Unity o Unreal Engine.' },
  { num: '08', cat: 'cgi', cls: 'c1', label: '3D & CGI Studio', name: 'Figuras Coleccionables & 3D Print', desc: 'Figuras y objetos personalizados listos para impresión 3D o producción industrial con acabados profesionales.' },
  { num: '09', cat: 'cgi', cls: 'c1', label: '3D & CGI Studio', name: 'Photogrametría', desc: 'Digitalización de objetos, espacios o personas en 3D con alta fidelidad para publicidad y producción visual.' },
  { num: '10', cat: 'ai', cls: 'c2', label: 'AI & Digital Content', name: 'Contenido Redes con IA + 3D', desc: 'Contenido combinando IA, gráficos 3D y animación para potenciar tus plataformas digitales.' },
  { num: '11', cat: 'ai', cls: 'c2', label: 'AI & Digital Content', name: 'UGC IA Content', desc: 'Piezas dinámicas y persuasivas optimizadas para anuncios, redes sociales y campañas digitales.' },
  { num: '12', cat: 'ai', cls: 'c2', label: 'AI & Digital Content', name: 'Layouts para Streaming', desc: 'Overlays, escenas, alertas y elementos visuales para streamers y creadores de contenido.' },
  { num: '13', cat: 'film', cls: 'c3', label: 'Film & Producción', name: 'Grabación y Filmación en Set', desc: 'Producciones audiovisuales en set integrando filmación con postproducción y 3D.' },
  { num: '14', cat: 'film', cls: 'c3', label: 'Film & Producción', name: 'Ambientación & Dir. de Arte', desc: 'Escenografía, utilería, color e iluminación para atmósferas coherentes e impactantes.' },
  { num: '15', cat: 'film', cls: 'c3', label: 'Film & Producción', name: 'Postproducción & Composición', desc: 'Efectos visuales, corrección de color y composición 3D/2D para elevar el acabado final.' },
  { num: '16', cat: 'film', cls: 'c3', label: 'Film & Producción', name: 'Audio Profesional', desc: 'SFX, ambientes, foley, voz en off, doblaje y subtítulos sincronizados.' },
  { num: '17', cat: 'exp', cls: 'c4', label: 'Experiencias & Inmersión', name: 'Experiencias Inmersivas VR/AR', desc: 'VR y AR para eventos, retail y activaciones de marca que generan impacto emocional.' },
  { num: '18', cat: 'exp', cls: 'c4', label: 'Experiencias & Inmersión', name: '3D Mapping', desc: 'Proyecciones para eventos, instalaciones artísticas y experiencias inmersivas.' },
  { num: '19', cat: 'exp', cls: 'c4', label: 'Experiencias & Inmersión', name: 'Producción de Eventos Corporativos', desc: 'Planificación y producción integral de eventos corporativos con identidad visual.' },
  { num: '20', cat: 'exp', cls: 'c4', label: 'Experiencias & Inmersión', name: 'Activaciones BTL', desc: 'Activaciones de marca presenciales, instalaciones creativas e intervenciones en punto de venta.' },
  { num: '21', cat: 'marca', cls: 'c5', label: 'Marca & Estrategia', name: 'Branding & Diseño de Marca', desc: 'Naming, logotipo, identidad gráfica y paletas para marcas sólidas y coherentes.' },
  { num: '22', cat: 'marca', cls: 'c5', label: 'Marca & Estrategia', name: 'Graphic Design', desc: 'Diseño gráfico integral para piezas digitales e impresas: layouts, packaging y activos visuales.' },
  { num: '23', cat: 'marca', cls: 'c5', label: 'Marca & Estrategia', name: 'Dirección de Arte', desc: 'Unificamos la identidad visual de cada proyecto garantizando coherencia estética y calidad.' },
]

const catColors = {
  cgi: { color: 'var(--cy)', bg: 'rgba(0,229,255,0.07)', border: 'rgba(0,229,255,0.22)', dot: 'var(--cy)', line: 'var(--cy)', hoverBorder: 'rgba(0,229,255,0.1)' },
  ai:  { color: 'var(--mg)', bg: 'rgba(200,0,255,0.07)', border: 'rgba(200,0,255,0.22)', dot: 'var(--mg)', line: 'var(--mg)', hoverBorder: 'rgba(200,0,255,0.1)' },
  film:{ color: 'rgba(255,144,64,0.75)', bg: 'rgba(255,112,32,0.07)', border: 'rgba(255,112,32,0.22)', dot: 'var(--or)', line: 'var(--or)', hoverBorder: 'rgba(255,112,32,0.1)' },
  exp: { color: 'var(--gn)', bg: 'rgba(0,204,119,0.07)', border: 'rgba(0,204,119,0.22)', dot: 'var(--gn)', line: 'var(--gn)', hoverBorder: 'rgba(0,204,119,0.1)' },
  marca:{ color: 'rgba(230,199,0,0.75)', bg: 'rgba(230,199,0,0.07)', border: 'rgba(230,199,0,0.22)', dot: 'var(--yw)', line: 'var(--yw)', hoverBorder: 'rgba(230,199,0,0.1)' },
}

const filters = [
  { cat: 'all', label: 'Todos · 23' },
  { cat: 'cgi', label: '3D & CGI · 9' },
  { cat: 'ai', label: 'AI & Digital · 3' },
  { cat: 'film', label: 'Film · 4' },
  { cat: 'exp', label: 'Experiencias · 4' },
  { cat: 'marca', label: 'Marca · 3' },
]

export default function Services() {
  const [active, setActive] = useState('all')
  const ref = useFadeUp()

  const filtered = active === 'all' ? services : services.filter(s => s.cat === active)

  return (
    <div id="servicios" className="sp" ref={ref}>
      <div className="lbl fade-up">Lo que hacemos</div>
      <div className="ttl fade-up fade-up-d1">Nuestros Servicios.</div>

      <div className="fade-up fade-up-d2" style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 24 }}>
        {filters.map(f => (
          <FilterBtn key={f.cat} {...f} isActive={active === f.cat} onClick={() => setActive(f.cat)} />
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: 2, background: 'var(--bg3)' }} className="sg">
        {filtered.map(s => (
          <ServiceCard key={s.num} service={s} colors={catColors[s.cat]} />
        ))}
      </div>
      <style>{`@media(max-width:600px){ .sg { grid-template-columns:1fr !important; } }`}</style>
    </div>
  )
}

function FilterBtn({ cat, label, isActive, onClick }) {
  const styles = {
    all:   isActive ? { background:'#fff', borderColor:'#fff', color:'#060608' } : { background:'transparent', borderColor:'rgba(255,255,255,0.14)', color:'rgba(255,255,255,0.38)' },
    cgi:   isActive ? { background:'var(--cy)', borderColor:'var(--cy)', color:'#060608' } : { background:'transparent', borderColor:'rgba(0,229,255,0.22)', color:'rgba(0,229,255,0.5)' },
    ai:    isActive ? { background:'var(--mg)', borderColor:'var(--mg)', color:'#fff' } : { background:'transparent', borderColor:'rgba(200,0,255,0.22)', color:'rgba(200,0,255,0.5)' },
    film:  isActive ? { background:'var(--or)', borderColor:'var(--or)', color:'#060608' } : { background:'transparent', borderColor:'rgba(255,112,32,0.22)', color:'rgba(255,112,32,0.5)' },
    exp:   isActive ? { background:'var(--gn)', borderColor:'var(--gn)', color:'#060608' } : { background:'transparent', borderColor:'rgba(0,204,119,0.22)', color:'rgba(0,204,119,0.5)' },
    marca: isActive ? { background:'var(--yw)', borderColor:'var(--yw)', color:'#060608' } : { background:'transparent', borderColor:'rgba(230,199,0,0.22)', color:'rgba(230,199,0,0.5)' },
  }
  return (
    <button
      onClick={onClick}
      style={{
        border: '1px solid', padding: '6px 13px', fontSize: 10, fontWeight: 700,
        letterSpacing: 1, textTransform: 'uppercase', cursor: 'pointer',
        fontFamily: 'Inter,sans-serif', transition: 'all 0.2s',
        ...styles[cat],
      }}
    >{label}</button>
  )
}

function ServiceCard({ service, colors }) {
  return (
    <div
      style={{
        background: 'var(--bg2)', padding: '22px 20px',
        position: 'relative', overflow: 'hidden',
        transition: 'background 0.22s', border: '1px solid transparent',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = '#0f0f15'
        e.currentTarget.style.borderColor = colors.hoverBorder
        e.currentTarget.querySelector('.sd').style.maxHeight = '120px'
        e.currentTarget.querySelector('.sd').style.color = 'rgba(200,200,220,0.42)'
        e.currentTarget.querySelector('.sline').style.width = '100%'
        e.currentTarget.querySelector('.sarr').style.opacity = '1'
        e.currentTarget.querySelector('.sarr').style.transform = 'translate(2px,-2px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'var(--bg2)'
        e.currentTarget.style.borderColor = 'transparent'
        e.currentTarget.querySelector('.sd').style.maxHeight = '0'
        e.currentTarget.querySelector('.sd').style.color = 'rgba(0,0,0,0)'
        e.currentTarget.querySelector('.sline').style.width = '0'
        e.currentTarget.querySelector('.sarr').style.opacity = '0.13'
        e.currentTarget.querySelector('.sarr').style.transform = 'translate(0,0)'
      }}
    >
      <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: 2, marginBottom: 7, color: colors.color }}>
        {service.num} <span style={{ display: 'inline-block', width: 5, height: 5, borderRadius: '50%', background: colors.dot, marginRight: 4, verticalAlign: 'middle' }}></span>
      </div>
      <span style={{
        display: 'inline-block', fontSize: 10, fontWeight: 600,
        letterSpacing: 1, textTransform: 'uppercase',
        padding: '2px 7px', marginBottom: 8,
        background: colors.bg, color: colors.color,
      }}>{service.label}</span>
      <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 17, fontWeight: 900, textTransform: 'uppercase', color: '#fff', lineHeight: 1.05, marginBottom: 7 }}>
        {service.name}
      </div>
      <div className="sd" style={{ fontSize: 11, lineHeight: 1.6, maxHeight: 0, overflow: 'hidden', transition: 'max-height 0.35s ease,color 0.3s', color: 'rgba(0,0,0,0)' }}>
        {service.desc}
      </div>
      <div className="sarr" style={{ position: 'absolute', right: 14, top: 20, fontSize: 12, opacity: 0.13, transition: 'all 0.22s', color: colors.color }}>↗</div>
      <div className="sline" style={{ position: 'absolute', bottom: 0, left: 0, width: 0, height: 1, transition: 'width 0.35s', background: `linear-gradient(90deg,${colors.line},transparent)` }} />
    </div>
  )
}
