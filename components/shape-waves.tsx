'use client'

import OfficialShapeWaves from './shape-waves-official'

type ShapeWavesProps = {
  className?: string
}

export function ShapeWaves({ className = '' }: ShapeWavesProps) {
  return (
    <OfficialShapeWaves
      className={className}
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
  )
}
