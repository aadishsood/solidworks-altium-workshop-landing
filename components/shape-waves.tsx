'use client'

import { useId } from 'react'

type ShapeWavesProps = {
  className?: string
  color?: string
  accent?: string
}

export function ShapeWaves({
  className = '',
  color = 'var(--secondary)',
  accent = 'var(--primary)',
}: ShapeWavesProps) {
  const id = useId().replace(/:/g, '')

  return (
    <div className={`shape-waves ${className}`} aria-hidden="true">
      <svg className="shape-waves-svg" viewBox="0 0 1200 520" preserveAspectRatio="none">
        <defs>
          <linearGradient id={`${id}-line`} x1="0" x2="1">
            <stop offset="0" stopColor={color} stopOpacity="0" />
            <stop offset="0.22" stopColor={color} stopOpacity="0.7" />
            <stop offset="0.72" stopColor={accent} stopOpacity="0.5" />
            <stop offset="1" stopColor={accent} stopOpacity="0" />
          </linearGradient>
          <filter id={`${id}-glow`}>
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        {[0, 1, 2, 3, 4, 5].map((row) => (
          <path
            key={row}
            className="shape-wave-line"
            d={`M-40 ${92 + row * 64} C 140 ${22 + row * 72}, 310 ${168 + row * 42}, 500 ${82 + row * 64} S 820 ${22 + row * 76}, 1240 ${108 + row * 56}`}
            stroke={`url(#${id}-line)`}
            strokeWidth={row === 2 ? 2.4 : 1.2}
            filter={row === 2 ? `url(#${id}-glow)` : undefined}
          />
        ))}
      </svg>
      <div className="shape-waves-fade" />
    </div>
  )
}
