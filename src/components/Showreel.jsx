import { useState } from 'react'

export default function Showreel() {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      id="showreel"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--bg2)', position: 'relative', overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        minHeight: 280, cursor: 'pointer',
        borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
      }}
    >
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg,rgba(0,229,255,0.025),rgba(200,0,255,0.045))',
      }} />
      <div style={{
        position: 'absolute', height: 1,
        background: 'linear-gradient(90deg,transparent,rgba(0,229,255,0.2),rgba(200,0,255,0.2),transparent)',
        width: '100%', top: '50%', pointerEvents: 'none',
      }} />
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <div style={{
          width: 68, height: 68, borderRadius: '50%',
          border: `1.5px solid ${hovered ? 'var(--cy)' : 'rgba(0,229,255,0.4)'}`,
          background: hovered ? 'rgba(0,229,255,0.1)' : 'transparent',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 18px',
          transition: 'all 0.3s',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
        }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <polygon points="6,3 15,9 6,15" fill="#00e5ff" />
          </svg>
        </div>
        <div style={{
          fontFamily: "'Barlow Condensed',sans-serif",
          fontSize: 26, fontWeight: 900, letterSpacing: 2,
          color: '#fff', textTransform: 'uppercase',
        }}>
          Ver Showreel
        </div>
        <div style={{ fontSize: 12, color: 'rgba(200,200,220,0.3)', marginTop: 6, letterSpacing: 1 }}>
          Producción CGI · IA Generativa · Film · XR
        </div>
      </div>
    </div>
  )
}
