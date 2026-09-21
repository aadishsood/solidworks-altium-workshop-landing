'use client'

import Image from 'next/image'
import { useRef, type MouseEvent } from 'react'
import { Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'

type ToolCardProps = {
  accent: 'primary' | 'gold'
  title: string
  subtitle: string
  image: string
  imageAlt: string
  features: string[]
  reverse?: boolean
}

function ToolCard({
  accent,
  title,
  subtitle,
  image,
  imageAlt,
  features,
  reverse,
}: ToolCardProps) {
  const imgWrapRef = useRef<HTMLDivElement>(null)

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = imgWrapRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.setProperty('--rx', `${(-y * 6).toFixed(2)}deg`)
    el.style.setProperty('--ry', `${(x * 8).toFixed(2)}deg`)
    el.style.setProperty('--tx', `${(x * 14).toFixed(2)}px`)
    el.style.setProperty('--ty', `${(y * 14).toFixed(2)}px`)
  }

  const onMouseLeave = () => {
    const el = imgWrapRef.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
    el.style.setProperty('--tx', '0px')
    el.style.setProperty('--ty', '0px')
  }

  const isGold = accent === 'gold'
  const accentText = isGold ? 'text-gold' : 'text-primary'
  const accentBorder = isGold ? 'hover:border-gold/50' : 'hover:border-primary/50'
  const accentGlow = isGold
    ? 'hover:shadow-[0_30px_90px_-40px_var(--gold)]'
    : 'hover:shadow-[0_30px_90px_-40px_var(--primary)]'

  return (
    <Reveal variant={reverse ? 'right' : 'left'}>
      <article
        className={`glass-card group relative grid grid-cols-1 items-center gap-8 rounded-3xl border border-border p-6 transition-all duration-500 hover:-translate-y-1.5 md:grid-cols-2 md:p-8 ${accentBorder} ${accentGlow}`}
      >
        {/* Image */}
        <div
          ref={imgWrapRef}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          className={`relative order-1 [perspective:1000px] ${
            reverse ? 'md:order-2' : 'md:order-1'
          }`}
        >
          <div
            className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border transition-transform duration-300 ease-out will-change-transform"
            style={{
              transform:
                'rotateX(var(--rx,0)) rotateY(var(--ry,0)) translateZ(0)',
            }}
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 90vw, 45vw"
              className="scale-110 object-cover transition-transform duration-500 will-change-transform"
              style={{ transform: 'translate(var(--tx,0), var(--ty,0))' }}
            />
            <div
              className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                isGold
                  ? 'bg-gradient-to-tr from-gold/25 to-transparent'
                  : 'bg-gradient-to-tr from-primary/25 to-transparent'
              }`}
            />
          </div>
        </div>

        {/* Content */}
        <div
          className={`order-2 ${reverse ? 'md:order-1' : 'md:order-2'}`}
        >
          <h3
            className={`font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl ${accentText}`}
          >
            {title}
          </h3>
          <p className="mt-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {subtitle}
          </p>

          <p className="mt-5 text-sm text-muted-foreground">
            Participants will learn:
          </p>
          <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {features.map((feature, i) => (
              <li
                key={feature}
                className="flex translate-x-0 items-center gap-2.5 text-sm text-foreground/90 opacity-100 transition-all duration-500 lg:translate-x-[-8px] lg:opacity-0 lg:group-hover:translate-x-0 lg:group-hover:opacity-100"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                    isGold ? 'bg-gold/15 text-gold' : 'bg-primary/15 text-primary'
                  }`}
                >
                  <Check className="h-3 w-3" />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Reveal>
  )
}

export function ToolSections() {
  return (
    <section id="workshop" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-primary">
              The Tools
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-balance font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Two industry-standard platforms, one workshop.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col gap-10">
          <ToolCard
            accent="primary"
            title="SOLIDWORKS"
            subtitle="3D CAD • Mechanical Design"
            image="/solidworks-hero.png"
            imageAlt="SOLIDWORKS exploded-view 3D CAD assembly with blue construction lines"
            features={[
              '3D part modelling',
              'Sketching',
              'Features & operations',
              'Assembly design',
              'Engineering drawings',
              'Workflow best practices',
            ]}
          />
          <ToolCard
            accent="gold"
            title="ALTIUM"
            subtitle="PCB Design • Electronics"
            image="/altium-hero.png"
            imageAlt="ALTIUM PCB layout with routed traces and component footprints"
            reverse
            features={[
              'Schematic creation',
              'Component selection',
              'PCB layout',
              'Component placement',
              'Routing',
              'Design rules',
            ]}
          />
        </div>
      </div>
    </section>
  )
}
