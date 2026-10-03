'use client'

import Image from 'next/image'
import { useRef, useState, type PointerEvent } from 'react'

type ModelViewerProps = {
  src: string
  alt: string
  className?: string
}

export function ModelViewer({ src, alt, className = '' }: ModelViewerProps) {
  const frameRef = useRef<HTMLDivElement>(null)
  const [drag, setDrag] = useState({ x: 0, y: 0 })
  const [active, setActive] = useState(false)

  const move = (event: PointerEvent<HTMLDivElement>) => {
    const frame = frameRef.current
    if (!frame) return
    const rect = frame.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    setDrag({ x: x * 12, y: y * 10 })
  }

  return (
    <div
      ref={frameRef}
      className={`model-viewer ${active ? 'is-active' : ''} ${className}`}
      onPointerEnter={() => setActive(true)}
      onPointerLeave={() => { setActive(false); setDrag({ x: 0, y: 0 }) }}
      onPointerMove={move}
      onPointerDown={() => setActive(true)}
      role="img"
      aria-label={`${alt}. Interactive hover viewer.`}
    >
      <div
        className="model-viewer-stage"
        style={{ transform: `rotateX(${-drag.y * 0.45}deg) rotateY(${drag.x * 0.55}deg)` }}
      >
        <Image src={src} alt={alt} fill priority sizes="(max-width: 1024px) 90vw, 520px" className="model-viewer-image" />
        <div className="model-viewer-scan" />
        <div className="model-viewer-corner model-viewer-corner-tl" />
        <div className="model-viewer-corner model-viewer-corner-br" />
      </div>
      <span className="model-viewer-hint">Drag / hover to inspect</span>
    </div>
  )
}
