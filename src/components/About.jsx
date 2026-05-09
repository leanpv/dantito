import { useFadeUp } from '../hooks/useFadeUp'

const pills = [
  'Unreal Engine','Blender 3D','Houdini','After Effects',
  'Stable Diffusion','Midjourney','Nuke','Cinema 4D','Sora',
]

export default function About() {
  const ref = useFadeUp()

  return (
    <div style={{ background: 'rgba(255,255,255,0.01)', borderBottom: '1px solid var(--border)' }}>
      <div className="sp" ref={ref}>
        <div className="lbl mg-lbl fade-up">Quiénes somos</div>
        <p className="fade-up fade-up-d1" style={{ fontSize: 13, color: 'rgba(200,200,220,0.45)', lineHeight: 1.8, marginBottom: 12 }}>
          Somos un estudio de producción audiovisual especializado en CGI 3D e inteligencia artificial, nacido en Buenos Aires con visión internacional.
        </p>
        <p className="fade-up fade-up-d2" style={{ fontSize: 13, color: 'rgba(200,200,220,0.45)', lineHeight: 1.8, marginBottom: 12 }}>
          Trabajamos con marcas, agencias y directores de todo el mundo para transformar conceptos en experiencias visuales extraordinarias que desafían los límites de la tecnología.
        </p>
        <div className="fade-up fade-up-d3" style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 18 }}>
          {pills.map(p => (
            <span key={p} style={{
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
              padding: '4px 12px', fontSize: 11, color: 'rgba(200,200,220,0.4)', letterSpacing: '0.3px',
            }}>{p}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
