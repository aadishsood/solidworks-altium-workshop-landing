'use client'

import OfficialShapeWaves from './shape-waves-official'

type ShapeWavesProps = {
  className?: string
}

export function ShapeWaves({ className = '' }: ShapeWavesProps) {
  return (
    <div className={`shape-waves-host ${className}`} aria-hidden="true">
      <svg className="shape-waves-fallback" viewBox="0 0 1200 520" preserveAspectRatio="none">
        <defs>
          <linearGradient id="shape-waves-fallback-line" x1="0" x2="1">
            <stop offset="0" stopColor="#38bdf8" stopOpacity="0" />
            <stop offset="0.24" stopColor="#38bdf8" stopOpacity="0.7" />
            <stop offset="0.7" stopColor="#ef3340" stopOpacity="0.62" />
            <stop offset="1" stopColor="#ef3340" stopOpacity="0" />
          </linearGradient>
          <filter id="shape-waves-fallback-glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        {[92, 156, 220, 284, 348, 412].map((y, index) => (
          <path
            key={y}
            className="shape-waves-fallback-line"
            d={`M-40 ${y} C 140 ${y - 70}, 310 ${y + 76}, 500 ${y - 10} S 820 ${y - 70}, 1240 ${y + 16}`}
            stroke="url(#shape-waves-fallback-line)"
            strokeWidth={index === 2 ? 2.8 : 1.4}
            filter={index === 2 ? 'url(#shape-waves-fallback-glow)' : undefined}
          />
        ))}
      </svg>
      <OfficialShapeWaves
        className="absolute inset-0"
        color="#ef3340"
        hoverColor="#38bdf8"
        backgroundColor="transparent"
        shapes="mixed"
        cellSize={11}
        dotSize={0.72}
        speed={0.85}
        scale={1.15}
        contrast={1.15}
        brightness={0.52}
        fade={0.16}
        interactive
        splashRadius={52}
        splashStrength={0.55}
        glow={0.42}
        intro
        introDuration={1.6}
        onError={() => undefined}
      />
    </div>
  )
}
