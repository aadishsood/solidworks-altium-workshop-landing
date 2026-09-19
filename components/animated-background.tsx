export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base wash */}
      <div className="absolute inset-0 bg-background" />

      {/* moving tech grid */}
      <div className="tech-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_75%)]" />

      {/* animated blueprint circuit traces (CAD / PCB theme) */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.18] [mask-image:radial-gradient(ellipse_at_center,black_5%,transparent_70%)]"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1440 900"
      >
        <g
          fill="none"
          stroke="var(--primary)"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="circuit-trace"
        >
          <path d="M-20 160 H220 L280 220 H520 L560 180 H820" />
          <path d="M-20 420 H160 L220 360 H440 L500 420 H760 L820 360 H1080" />
          <path d="M1460 260 H1200 L1140 320 H900" />
          <path d="M1460 640 H1220 L1160 580 H960 L900 640 H640" />
          <path d="M320 920 V680 L380 620 V420" />
          <path d="M1080 920 V700 L1020 640 V440" />
        </g>
        <g fill="var(--cyan)" className="circuit-node">
          <circle cx="280" cy="220" r="4" />
          <circle cx="560" cy="180" r="4" />
          <circle cx="500" cy="420" r="4" />
          <circle cx="820" cy="360" r="4" />
          <circle cx="1140" cy="320" r="4" />
          <circle cx="1160" cy="580" r="4" />
          <circle cx="380" cy="620" r="4" />
          <circle cx="1020" cy="640" r="4" />
        </g>
      </svg>

      {/* drifting particles */}
      <div className="bg-particles absolute inset-0">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="bg-particle"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              background: p.color,
            }}
          />
        ))}
      </div>

      {/* slow radial glows */}
      <div className="animate-pulse-glow absolute -left-40 top-[-10%] h-[520px] w-[520px] rounded-full bg-primary/20 blur-[120px]" />
      <div
        className="animate-pulse-glow absolute -right-40 top-[30%] h-[460px] w-[460px] rounded-full bg-gold/15 blur-[120px]"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="animate-pulse-glow absolute left-1/2 bottom-[-10%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan/15 blur-[120px]"
        style={{ animationDelay: '4s' }}
      />

      {/* vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,color-mix(in_srgb,var(--background)_85%,black)_100%)]" />
    </div>
  )
}

const PARTICLES = [
  { left: 8, top: 20, size: 4, duration: 14, delay: 0, color: 'var(--primary)' },
  { left: 22, top: 70, size: 3, duration: 18, delay: 2, color: 'var(--cyan)' },
  { left: 35, top: 35, size: 5, duration: 16, delay: 1, color: 'var(--gold)' },
  { left: 48, top: 82, size: 3, duration: 20, delay: 4, color: 'var(--primary)' },
  { left: 60, top: 25, size: 4, duration: 15, delay: 3, color: 'var(--cyan)' },
  { left: 72, top: 60, size: 3, duration: 19, delay: 1.5, color: 'var(--gold)' },
  { left: 84, top: 40, size: 5, duration: 17, delay: 2.5, color: 'var(--primary)' },
  { left: 92, top: 78, size: 3, duration: 21, delay: 0.5, color: 'var(--cyan)' },
  { left: 15, top: 50, size: 3, duration: 22, delay: 5, color: 'var(--gold)' },
  { left: 55, top: 12, size: 4, duration: 16, delay: 3.5, color: 'var(--cyan)' },
]
