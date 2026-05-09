import { useEffect, useRef, useState } from 'react'

function Counter({ target, suffix }) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !animated.current) {
          animated.current = true
          const duration = 1600, steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) { current = target; clearInterval(timer) }
            setValue(Math.floor(current))
          }, duration / steps)
        }
      })
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])

  return (
    <div ref={ref} style={{
      fontFamily: "'Barlow Condensed',sans-serif", fontSize: 28, fontWeight: 900,
      background: 'linear-gradient(90deg,var(--cy),var(--mg))',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
    }}>
      {value}{suffix}
    </div>
  )
}

const items = [
  { target: 50, suffix: '+', label: 'Proyectos' },
  { target: 25, suffix: '+', label: 'Clientes globales' },
  { target: 23, suffix: '+', label: 'Servicios' },
]

export default function Stats() {
  return (
    <div style={{
      display: 'flex',
      borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
      background: 'rgba(255,255,255,0.012)',
    }} className="stats-bar">
      {items.map((item, i) => (
        <div key={i} style={{
          flex: 1, textAlign: 'center', padding: '18px 12px',
          borderRight: i < items.length - 1 ? '1px solid var(--border)' : 'none',
        }}>
          <Counter target={item.target} suffix={item.suffix} />
          <div style={{ fontSize: 10, color: 'rgba(200,200,220,0.28)', marginTop: 2, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
            {item.label}
          </div>
        </div>
      ))}
      <style>{`
        @media(max-width:900px){
          .stats-bar { flex-wrap:wrap; }
          .stats-bar > div { min-width:50%; border-bottom:1px solid var(--border); }
        }
      `}</style>
    </div>
  )
}
