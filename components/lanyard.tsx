'use client'

import { CheckCircle2, Mail, UserRound } from 'lucide-react'

type LanyardProps = {
  name: string
  email: string
  branch: string
  course: string
}

export function Lanyard({ name, email, branch, course }: LanyardProps) {
  return (
    <div className="lanyard-wrap" aria-label="Registration confirmation card">
      <div className="lanyard-cord" aria-hidden="true" />
      <div className="lanyard-clip" aria-hidden="true" />
      <article className="lanyard-card">
        <div className="lanyard-card-top">
          <span className="lanyard-brand">SW × ALTIUM / 2026</span>
          <CheckCircle2 className="h-5 w-5 text-[var(--cyan)]" />
        </div>
        <p className="lanyard-kicker">Registration confirmed</p>
        <h3 className="lanyard-name">{name}</h3>
        <div className="lanyard-details">
          <span><Mail /> {email}</span>
          <span><UserRound /> {branch} · {course}</span>
        </div>
        <div className="lanyard-barcode" aria-hidden="true" />
      </article>
    </div>
  )
}
