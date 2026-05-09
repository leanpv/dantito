import { useState } from 'react'
import { useFadeUp } from '../hooks/useFadeUp'

const WaIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const inputStyle = {
  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
  padding: '11px 14px', color: '#e8e8f0', fontSize: 13,
  fontFamily: 'Inter,sans-serif', outline: 'none',
  transition: 'border-color 0.2s', WebkitAppearance: 'none', borderRadius: 0, width: '100%',
}

export default function Contact() {
  const ref = useFadeUp()
  const [form, setForm] = useState({ name: '', email: '', type: '', budget: '', msg: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = true
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = true
    if (!form.msg.trim()) e.msg = true
    return e
  }

  const handleSubmit = () => {
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length === 0) setSubmitted(true)
  }

  const social = ['Instagram', 'Behance', 'Vimeo', 'LinkedIn']

  return (
    <div id="contacto" className="sp" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid var(--border)' }} ref={ref}>
      <div className="lbl fade-up">Hablemos</div>
      <div className="ttl fade-up fade-up-d1">Iniciá tu proyecto.</div>

      <div className="fade-up fade-up-d2 cbox" style={{
        background: 'var(--bg2)', border: '1px solid var(--border)', padding: 48,
        alignItems: 'start',
      }}>
        <div>
          <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--cy)', fontWeight: 600, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ display: 'inline-block', width: 20, height: 1, background: 'var(--cy)' }}></span>Contacto
          </div>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 34, fontWeight: 900, textTransform: 'uppercase', color: '#fff', lineHeight: 0.95, marginBottom: 12, letterSpacing: '-0.5px' }}>
            Empecemos a crear algo increíble.
          </div>
          <p style={{ fontSize: 13, color: 'rgba(200,200,220,0.38)', lineHeight: 1.7, marginBottom: 22 }}>
            Contanos sobre tu idea y te respondemos dentro de las 24 horas. Sin compromisos.
          </p>
          {[
            { dot: 'var(--cy)', text: 'hola@latitudstudios.com' },
            { dot: 'var(--cy)', text: 'Buenos Aires, Argentina' },
            { dot: 'var(--mg)', text: 'Proyectos globales, sin fronteras' },
          ].map((d, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, fontSize: 13, color: 'rgba(200,200,220,0.45)' }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: d.dot, flexShrink: 0 }}></span>
              {d.text}
            </div>
          ))}

          <div style={{ marginTop: 28, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ fontSize: 10, color: 'rgba(200,200,220,0.28)', marginBottom: 12, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Seguinos</div>
            <div style={{ display: 'flex', gap: 10 }}>
              {social.map(s => (
                <a key={s} href="#" target="_blank" style={{
                  fontSize: 12, color: 'rgba(200,200,220,0.38)', textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.07)', padding: '6px 12px',
                  transition: 'all 0.2s', display: 'inline-block',
                }}
                onMouseEnter={e => { e.target.style.borderColor = 'rgba(0,229,255,0.3)'; e.target.style.color = 'var(--cy)' }}
                onMouseLeave={e => { e.target.style.borderColor = 'rgba(255,255,255,0.07)'; e.target.style.color = 'rgba(200,200,220,0.38)' }}
                >{s}</a>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 20 }}>
            <a
              href="https://wa.me/5491100000000?text=Hola%20Latitud!%20Me%20interesa%20iniciar%20un%20proyecto."
              target="_blank"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(80,80,90,0.7)', color: '#fff',
                padding: '12px 20px', fontSize: 11, fontWeight: 800,
                letterSpacing: '1.5px', textTransform: 'uppercase',
                fontFamily: 'Inter,sans-serif', textDecoration: 'none',
                transition: 'all 0.25s',
              }}
            >
              <WaIcon /> Escribinos por WhatsApp
            </a>
          </div>
        </div>

        <div>
          {!submitted ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
              <input
                type="text" placeholder="Nombre / Empresa"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                style={{ ...inputStyle, borderColor: errors.name ? 'rgba(255,80,80,0.6)' : 'rgba(255,255,255,0.08)' }}
                onFocus={e => e.target.style.borderColor = 'rgba(0,229,255,0.35)'}
                onBlur={e => e.target.style.borderColor = errors.name ? 'rgba(255,80,80,0.6)' : 'rgba(255,255,255,0.08)'}
              />
              <input
                type="email" placeholder="Email"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                style={{ ...inputStyle, borderColor: errors.email ? 'rgba(255,80,80,0.6)' : 'rgba(255,255,255,0.08)' }}
                onFocus={e => e.target.style.borderColor = 'rgba(0,229,255,0.35)'}
                onBlur={e => e.target.style.borderColor = errors.email ? 'rgba(255,80,80,0.6)' : 'rgba(255,255,255,0.08)'}
              />
              <select
                value={form.type}
                onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
                style={{ ...inputStyle, color: form.type ? '#e8e8f0' : 'rgba(200,200,220,0.2)' }}
                onFocus={e => e.target.style.borderColor = 'rgba(0,229,255,0.35)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
              >
                <option value="" disabled>Tipo de proyecto</option>
                {['CGI / Animación 3D','Contenido IA + 3D','Film / Filmación en Set','Render Arquitectónico','Experiencia VR/AR','Branding / Identidad','Otro'].map(o => (
                  <option key={o} style={{ background: '#0c0c10', color: '#e8e8f0' }}>{o}</option>
                ))}
              </select>
              <input
                type="text" placeholder="Presupuesto estimado (opcional)"
                value={form.budget}
                onChange={e => setForm(f => ({ ...f, budget: e.target.value }))}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'rgba(0,229,255,0.35)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
              />
              <textarea
                placeholder="Contanos sobre tu visión, plazos y objetivos..."
                value={form.msg}
                onChange={e => setForm(f => ({ ...f, msg: e.target.value }))}
                style={{ ...inputStyle, resize: 'vertical', minHeight: 90, borderColor: errors.msg ? 'rgba(255,80,80,0.6)' : 'rgba(255,255,255,0.08)' }}
                onFocus={e => e.target.style.borderColor = 'rgba(0,229,255,0.35)'}
                onBlur={e => e.target.style.borderColor = errors.msg ? 'rgba(255,80,80,0.6)' : 'rgba(255,255,255,0.08)'}
              />
              <button className="btn-mg" onClick={handleSubmit}>Enviar Mensaje</button>
            </div>
          ) : (
            <div style={{ background: 'rgba(0,204,119,0.08)', border: '1px solid rgba(0,204,119,0.25)', padding: 20, textAlign: 'center' }}>
              <p style={{ color: 'var(--gn)', fontSize: 13, fontWeight: 500 }}>✓ ¡Mensaje enviado! Te contactamos en menos de 24hs.</p>
            </div>
          )}
        </div>
      </div>
      <style>{`
        .cbox { display:grid; grid-template-columns:1fr 1fr; gap:56px; }
        @media(max-width:900px){ .cbox { grid-template-columns:1fr !important; gap:32px !important; padding:28px !important; } }
      `}</style>
    </div>
  )
}
