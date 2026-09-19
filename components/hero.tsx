'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ArrowDown, CalendarDays, Clock, MapPin } from 'lucide-react'
import { RegisterButton } from '@/components/register-button'

function Staged({
  children,
  loaded,
  delay,
  className = '',
}: {
  children: React.ReactNode
  loaded: boolean
  delay: number
  className?: string
}) {
  return (
    <div
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        loaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

const eventInfo = [
  { icon: CalendarDays, label: 'Date', value: '26–27 September' },
  { icon: Clock, label: 'Time', value: '10:00 AM – 3:00 PM' },
  { icon: MapPin, label: 'Venue', value: 'SRM Campus' },
]

const floatingLabels = [
  { text: '3D MODELLING', className: 'left-[6%] top-[18%]', accent: 'primary' },
  { text: 'PCB DESIGN', className: 'right-[8%] top-[10%]', accent: 'gold' },
  { text: 'CAD', className: 'left-[10%] bottom-[16%]', accent: 'cyan' },
  { text: 'DESIGN → BUILD', className: 'right-[6%] bottom-[12%]', accent: 'primary' },
]

export function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        {/* Left: copy */}
        <div className="relative z-10 text-center lg:text-left">
          <Staged loaded={loaded} delay={120}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 font-[family-name:var(--font-mono)] text-xs font-medium tracking-[0.25em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
              LEARN • DESIGN • BUILD
            </span>
          </Staged>

          <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            <Staged loaded={loaded} delay={240} className="block">
              <span className="bg-gradient-to-r from-primary to-cyan bg-clip-text text-transparent">
                SOLIDWORKS
              </span>
            </Staged>
            <Staged loaded={loaded} delay={360} className="block text-foreground/90">
              &amp; <span className="text-gold">ALTIUM</span>
            </Staged>
            <Staged loaded={loaded} delay={480} className="block">
              WORKSHOP
            </Staged>
          </h1>

          <Staged loaded={loaded} delay={620}>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground lg:mx-0 lg:text-lg">
              Get hands-on experience with industry-focused CAD and PCB design
              tools. Learn practical workflows, explore real-world design
              processes and build your own ideas.
            </p>
          </Staged>

          <Staged loaded={loaded} delay={740}>
            <dl className="mx-auto mt-8 grid max-w-lg grid-cols-1 gap-3 sm:grid-cols-3 lg:mx-0">
              {eventInfo.map((info) => (
                <div
                  key={info.label}
                  className="group rounded-xl border border-border bg-surface/50 p-4 text-left backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-surface"
                >
                  <info.icon className="h-4 w-4 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <dt className="mt-2 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest text-muted-foreground">
                    {info.label}
                  </dt>
                  <dd className="mt-0.5 text-sm font-semibold text-foreground">
                    {info.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Staged>

          <Staged loaded={loaded} delay={880}>
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <RegisterButton size="lg" />
              <a
                href="#workshop"
                data-cursor="hover"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-6 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50"
              >
                Explore Workshop
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
              </a>
            </div>
          </Staged>
        </div>

        {/* Right: layered visuals */}
        <div className="relative z-10">
          <div
            className={`relative mx-auto aspect-square w-full max-w-[520px] transition-all duration-1000 ease-out ${
              loaded ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            {/* glow ring */}
            <div className="absolute inset-6 rounded-[2rem] bg-gradient-to-tr from-primary/20 via-transparent to-gold/20 blur-2xl" />

            {/* Base SOLIDWORKS visual */}
            <div className="animate-float-slower absolute inset-0 overflow-hidden rounded-[1.75rem] border border-primary/30 shadow-[0_0_60px_-15px_var(--primary)]">
              <Image
                src="/solidworks-cad.png"
                alt="SOLIDWORKS 3D mechanical CAD part with cyan wireframe overlay"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 520px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <span className="absolute left-4 top-4 rounded-md bg-background/70 px-2.5 py-1 font-[family-name:var(--font-mono)] text-[10px] tracking-widest text-primary backdrop-blur">
                SOLIDWORKS
              </span>
            </div>

            {/* Floating ALTIUM PCB visual */}
            <div className="animate-float-slow absolute -bottom-6 -right-4 w-[52%] overflow-hidden rounded-2xl border border-gold/40 shadow-[0_0_50px_-12px_var(--gold)] sm:-right-8">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/altium-pcb.png"
                  alt="ALTIUM PCB circuit board with gold traces and components"
                  fill
                  sizes="270px"
                  className="object-cover"
                />
                <span className="absolute left-3 top-3 rounded-md bg-background/70 px-2 py-0.5 font-[family-name:var(--font-mono)] text-[9px] tracking-widest text-gold backdrop-blur">
                  ALTIUM
                </span>
              </div>
            </div>

            {/* Floating labels */}
            {floatingLabels.map((l, i) => (
              <span
                key={l.text}
                className={`absolute hidden rounded-full border px-3 py-1 font-[family-name:var(--font-mono)] text-[10px] tracking-widest backdrop-blur-sm sm:inline-block ${l.className} ${
                  l.accent === 'gold'
                    ? 'border-gold/40 bg-gold/10 text-gold'
                    : l.accent === 'cyan'
                      ? 'border-cyan/40 bg-cyan/10 text-cyan'
                      : 'border-primary/40 bg-primary/10 text-primary'
                }`}
                style={{
                  animation: `float-slow ${6 + i}s ease-in-out infinite`,
                  animationDelay: `${i * 0.6}s`,
                }}
              >
                {l.text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
