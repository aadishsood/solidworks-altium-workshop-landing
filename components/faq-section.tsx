'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const faqs = [
  {
    q: 'Do I need prior experience with SOLIDWORKS or ALTIUM?',
    a: 'No advanced prior experience is required. The workshop is beginner friendly and starts from the fundamentals, building up to hands-on design work over the two days.',
  },
  {
    q: 'Should I bring my own laptop?',
    a: 'We recommend bringing a laptop so you can follow along with the hands-on sessions. Setup and software guidance will be provided at the start of each day.',
  },
  {
    q: 'What will I actually build?',
    a: 'On Day 1 you will model 3D parts, create assemblies and engineering drawings in SOLIDWORKS. On Day 2 you will design a schematic and lay out a PCB in ALTIUM, finishing with a practical mini project.',
  },
  {
    q: 'Is the workshop suitable for all branches?',
    a: 'Yes. While mechanical and electronics students will find it especially relevant, the workflows are useful for anyone interested in product design, CAD or electronics.',
  },
  {
    q: 'Will I get a certificate?',
    a: 'Participants who attend both days and complete the hands-on activities will receive a workshop participation certificate.',
  },
  {
    q: 'What are the timings and venue?',
    a: 'The workshop runs on 26–27 September from 10:00 AM to 3:00 PM at SRM Campus, including a break for lunch each day.',
  },
]

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <Reveal delay={index * 70}>
      <div className="overflow-hidden rounded-2xl border border-border bg-surface/50 backdrop-blur-sm transition-colors duration-300 hover:border-primary/40">
        <button
          type="button"
          data-cursor="hover"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        >
          <span className="font-medium text-foreground sm:text-lg">{q}</span>
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-primary transition-all duration-300 ${
              open ? 'rotate-45 border-primary/50 bg-primary/10' : ''
            }`}
          >
            <Plus className="h-4 w-4" />
          </span>
        </button>
        <div
          className={`grid transition-all duration-500 ease-out ${
            open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
              {a}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export function FaqSection() {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Reveal>
            <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-primary">
              Questions
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-balance font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
