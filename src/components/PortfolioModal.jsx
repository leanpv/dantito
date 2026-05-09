import { useEffect } from 'react'

export default function PortfolioModal({ modal, onClose, scrollTo }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = modal ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [modal])

  if (!modal) return null

  return (
    <div
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
      style={{
        position: 'fixed', inset: 0,
        background: 'rgba(6,6,8,0.92)', zIndex: 400,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div style={{
        background: 'var(--bg2)', border: '1px solid rgba(255,255,255,0.1)',
        padding: 48, maxWidth: 600, width: '90%',
        position: 'relative',
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: 16, right: 18,
            background: 'none', border: 'none',
            color: 'rgba(200,200,220,0.4)', fontSize: 20,
            cursor: 'pointer', transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.target.style.color = '#fff'}
          onMouseLeave={e => e.target.style.color = 'rgba(200,200,220,0.4)'}
        >✕</button>

        <div style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 700, marginBottom: 10, color: modal.color }}>
          {modal.cat}
        </div>
        <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 36, fontWeight: 900, textTransform: 'uppercase', color: '#fff', lineHeight: 0.95, marginBottom: 16 }}>
          {modal.title}
        </div>
        <div style={{ fontSize: 13, color: 'rgba(200,200,220,0.5)', lineHeight: 1.75, marginBottom: 24 }}>
          {modal.desc}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
          {modal.tags.split(',').map(tag => (
            <span key={tag} style={{
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
              padding: '4px 10px', fontSize: 11, color: 'rgba(200,200,220,0.4)',
            }}>{tag.trim()}</span>
          ))}
        </div>
        <button
          className="btn-mg"
          onClick={() => { onClose(); setTimeout(() => scrollTo('contacto'), 100) }}
        >
          Quiero un proyecto similar
        </button>
      </div>
    </div>
  )
}
