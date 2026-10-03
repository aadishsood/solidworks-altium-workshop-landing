import type { CSSProperties, ReactNode } from 'react'

type ElectricBorderProps = {
  children: ReactNode
  className?: string
  color?: string
}

export function ElectricBorder({ children, className = '', color = 'var(--cyan)' }: ElectricBorderProps) {
  return (
    <div className={`electric-border ${className}`} style={{ '--electric-color': color } as CSSProperties}>
      <div className="electric-border-glow" />
      <div className="electric-border-line electric-border-line-a" />
      <div className="electric-border-line electric-border-line-b" />
      <div className="electric-border-content">{children}</div>
    </div>
  )
}
