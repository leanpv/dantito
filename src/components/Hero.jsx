import { useEffect, useRef } from 'react'

export default function Hero({ scrollTo }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const W = 340, H = 340, cx = W / 2, cy = H / 2
    const NUM = 52, CENTER_NODES = 6, CONNECTION_DIST = 90, MAX_CONNECTIONS = 3

    const nodes = []
    function randRange(a, b) { return a + (b - a) * Math.random() }

    for (let i = 0; i < NUM; i++) {
      const isCenter = i < CENTER_NODES
      const angle = Math.random() * Math.PI * 2
      const radius = isCenter ? randRange(0, 30) : randRange(35, 145)
      const x = cx + Math.cos(angle) * radius
      const y = cy + Math.sin(angle) * radius
      const type = isCenter ? 'white' : (Math.random() > 0.5 ? 'cy' : 'mg')
      nodes.push({
        x, y, baseX: x, baseY: y,
        tx: Math.random() * 1000, ty: Math.random() * 1000,
        speedX: randRange(0.003, 0.012), speedY: randRange(0.003, 0.012),
        ampX: randRange(8, isCenter ? 18 : 55), ampY: randRange(8, isCenter ? 18 : 55),
        type, r: isCenter ? randRange(2.5, 4.5) : randRange(1.5, 3.5),
        connTimer: Math.random() * 200, connInterval: randRange(80, 220),
        connected: false, pulseT: Math.random() * 100,
        pulseSpeed: randRange(0.02, 0.06),
        centerPull: isCenter ? 0.008 : 0.001,
      })
    }

    let connections = []
    function updateConnections() {
      connections = []
      for (let i = 0; i < nodes.length; i++) {
        let count = 0
        for (let j = i + 1; j < nodes.length && count < MAX_CONNECTIONS; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECTION_DIST) {
            const phase = Math.sin(nodes[i].connTimer * 0.04) * Math.sin(nodes[j].connTimer * 0.03)
            if (phase > -0.3) {
              connections.push({ a: i, b: j, dist, alpha: Math.max(0, (1 - dist / CONNECTION_DIST) * 0.7 * (phase + 0.5)) })
              count++
            }
          }
        }
      }
    }

    let t = 0
    let animId
    function draw() {
      ctx.clearRect(0, 0, W, H)
      t++

      nodes.forEach((n, i) => {
        n.tx += n.speedX; n.ty += n.speedY
        n.connTimer++; n.pulseT += n.pulseSpeed
        n.x = n.baseX + Math.sin(n.tx) * n.ampX + Math.cos(n.ty * 0.7) * n.ampX * 0.4
        n.y = n.baseY + Math.cos(n.ty) * n.ampY + Math.sin(n.tx * 0.6) * n.ampY * 0.4
        if (n.type === 'white') {
          n.baseX += (cx - n.baseX) * 0.001
          n.baseY += (cy - n.baseY) * 0.001
        } else {
          const angle = Math.atan2(n.baseY - cy, n.baseX - cx) + (0.0008 * (i % 2 === 0 ? 1 : -1))
          const dist = Math.sqrt((n.baseX - cx) ** 2 + (n.baseY - cy) ** 2)
          const targetDist = Math.max(35, Math.min(145, dist + Math.sin(t * 0.005 + i) * 0.3))
          n.baseX = cx + Math.cos(angle) * targetDist
          n.baseY = cy + Math.sin(angle) * targetDist
        }
        n.x = Math.max(8, Math.min(W - 8, n.x))
        n.y = Math.max(8, Math.min(H - 8, n.y))
      })

      if (t % 3 === 0) updateConnections()

      connections.forEach(c => {
        const a = nodes[c.a], b = nodes[c.b]
        const pulse = Math.sin(t * 0.04 + c.a * 0.3) * 0.5 + 0.5
        const alpha = c.alpha * (0.4 + pulse * 0.4)
        let color
        if (a.type === 'white' || b.type === 'white') color = `rgba(255,255,255,${alpha * 0.6})`
        else if (a.type === 'cy' && b.type === 'cy') color = `rgba(0,229,255,${alpha})`
        else if (a.type === 'mg' && b.type === 'mg') color = `rgba(200,0,255,${alpha})`
        else color = `rgba(120,100,255,${alpha})`
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y)
        ctx.strokeStyle = color; ctx.lineWidth = 0.7 + pulse * 0.5; ctx.stroke()
        if (Math.sin(t * 0.06 + c.a * 0.5) > 0.6) {
          const prog = Math.sin(t * 0.08 + c.b * 0.4) * 0.5 + 0.5
          const px = a.x + (b.x - a.x) * prog, py = a.y + (b.y - a.y) * prog
          ctx.beginPath(); ctx.arc(px, py, 1.5, 0, Math.PI * 2)
          ctx.fillStyle = color; ctx.fill()
        }
      })

      nodes.forEach(n => {
        const pulse = Math.sin(n.pulseT) * 0.5 + 0.5
        let col, glowCol, glowR
        if (n.type === 'white') {
          col = 'rgba(255,255,255,0.95)'; glowCol = `rgba(255,255,255,${0.1 + pulse * 0.15})`; glowR = n.r * 4 + pulse * 6
        } else if (n.type === 'cy') {
          col = `rgba(0,229,255,${0.7 + pulse * 0.3})`; glowCol = `rgba(0,229,255,${0.05 + pulse * 0.12})`; glowR = n.r * 3 + pulse * 4
        } else {
          col = `rgba(200,0,255,${0.7 + pulse * 0.3})`; glowCol = `rgba(200,0,255,${0.05 + pulse * 0.12})`; glowR = n.r * 3 + pulse * 4
        }
        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, glowR)
        g.addColorStop(0, glowCol); g.addColorStop(1, 'transparent')
        ctx.beginPath(); ctx.arc(n.x, n.y, glowR, 0, Math.PI * 2)
        ctx.fillStyle = g; ctx.fill()
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r + pulse * 0.8, 0, Math.PI * 2)
        ctx.fillStyle = col; ctx.fill()
      })

      const flashPulse = Math.sin(t * 0.03) * 0.5 + 0.5
      const fg = ctx.createRadialGradient(cx, cy, 0, cx, cy, 20 + flashPulse * 8)
      fg.addColorStop(0, `rgba(255,255,255,${0.6 + flashPulse * 0.3})`)
      fg.addColorStop(0.4, `rgba(255,255,255,${0.1 + flashPulse * 0.1})`)
      fg.addColorStop(1, 'transparent')
      ctx.beginPath(); ctx.arc(cx, cy, 20 + flashPulse * 8, 0, Math.PI * 2)
      ctx.fillStyle = fg; ctx.fill()

      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <section id="hero" style={{
      display: 'grid', gridTemplateColumns: '1fr 1fr',
      minHeight: '100vh', padding: '80px 40px 60px',
      alignItems: 'center', gap: 40, position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 55% 60% at 70% 50%,rgba(200,0,255,0.07) 0%,transparent 65%),radial-gradient(ellipse 40% 40% at 15% 80%,rgba(0,229,255,0.05) 0%,transparent 60%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.02) 1px,transparent 1px)',
        backgroundSize: '30px 30px', pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          fontSize: 10, letterSpacing: 3, textTransform: 'uppercase',
          color: 'var(--cy)', fontWeight: 600, marginBottom: 20,
          display: 'flex', alignItems: 'center', gap: 8,
          animation: 'fadeIn 0.8s ease forwards',
        }}>
          <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--cy)' }}></span>
          Buenos Aires · Global
        </div>

        <h1 style={{
          fontFamily: "'Barlow Condensed',sans-serif",
          fontSize: 'clamp(48px,6vw,82px)', fontWeight: 900,
          lineHeight: 0.92, letterSpacing: -1, color: '#fff',
          textTransform: 'uppercase', marginBottom: 22,
          animation: 'fadeInUp 0.9s ease 0.1s both',
        }}>
          Si se puede<br />
          <em style={{ color: 'var(--mg)', fontStyle: 'normal' }}>imaginar,</em><br />
          lo podemos<br />
          <em style={{ color: 'var(--cy)', fontStyle: 'normal' }}>crear.</em>
        </h1>

        <p style={{
          fontSize: 14, color: 'rgba(200,200,220,0.5)', lineHeight: 1.8,
          maxWidth: 420, marginBottom: 32,
          animation: 'fadeInUp 0.9s ease 0.2s both',
        }}>
          En Latitud, fusionamos la precisión técnica del <strong style={{ color: '#e8e8f0' }}>CGI</strong> con la vanguardia neuronal de la <strong style={{ color: '#e8e8f0' }}>Inteligencia Artificial</strong> para crear experiencias visuales que desafían la realidad.
        </p>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', animation: 'fadeInUp 0.9s ease 0.3s both' }}>
          <button className="btn-cian" onClick={() => scrollTo('portfolio')}>Ver nuestro trabajo</button>
          <button className="btn-outline" onClick={() => scrollTo('showreel')}>▶ Ver Reel</button>
        </div>
      </div>

      <div style={{
        position: 'relative', zIndex: 2,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        animation: 'fadeIn 1s ease 0.4s both',
      }} className="hero-right-col">
        <div style={{ position: 'relative', width: 420, height: 420, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            border: '1px solid rgba(0,229,255,0.07)',
            animation: 'spin 22s linear infinite',
          }} />
          <div style={{
            position: 'absolute', inset: 20, borderRadius: '50%',
            border: '1px solid rgba(200,0,255,0.05)',
            animation: 'spin 16s linear infinite reverse',
          }} />
          <canvas
            ref={canvasRef}
            width={340} height={340}
            style={{ filter: 'drop-shadow(0 0 20px rgba(0,229,255,0.15)) drop-shadow(0 0 50px rgba(200,0,255,0.1))' }}
          />
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        animation: 'fadeIn 1.2s ease 0.8s both',
      }} className="hero-scroll-indicator">
        <div style={{
          width: 1, height: 40,
          background: 'linear-gradient(to bottom,rgba(0,229,255,0.4),transparent)',
          animation: 'scrollPulse 2s ease-in-out infinite',
        }} />
        <span style={{ fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(200,200,220,0.25)' }}>Scroll</span>
      </div>

      <style>{`
        @media(max-width:900px){
          #hero { grid-template-columns:1fr !important; min-height:auto !important; padding:100px 20px 60px !important; text-align:center; }
          .hero-right-col { display:none !important; }
          .hero-scroll-indicator { display:none !important; }
        }
      `}</style>
    </section>
  )
}
