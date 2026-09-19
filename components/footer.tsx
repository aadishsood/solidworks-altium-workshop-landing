'use client'

import type { SVGProps } from 'react'
import { Cpu, CalendarDays, MapPin } from 'lucide-react'
import { useRegistration } from '@/components/registration-context'

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  )
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M4.5 9.5v8" />
      <circle cx="4.5" cy="5" r="1.2" fill="currentColor" stroke="none" />
      <path d="M9 17.5v-4.5a2.5 2.5 0 0 1 5 0v4.5" />
      <path d="M9 9.5v8" />
    </svg>
  )
}

function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <rect x="2.5" y="6" width="19" height="12" rx="3.5" />
      <path d="M10 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none" />
    </svg>
  )
}

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Learn', href: '#learn' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'FAQ', href: '#faq' },
]

const socials = [
  { label: 'Instagram', icon: InstagramIcon, href: '#' },
  { label: 'LinkedIn', icon: LinkedinIcon, href: '#' },
  { label: 'YouTube', icon: YoutubeIcon, href: '#' },
]

export function Footer() {
  const { open } = useRegistration()

  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div
        aria-hidden
        className="tech-grid pointer-events-none absolute inset-0 opacity-20 [mask-image:linear-gradient(to_top,black,transparent)]"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2 font-[family-name:var(--font-display)] text-lg font-bold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
                <Cpu className="h-4 w-4" />
              </span>
              <span>
                SOLIDWORKS <span className="text-muted-foreground">×</span>{' '}
                <span className="text-gold">ALTIUM</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A premium two-day hands-on workshop on 3D CAD and PCB design.
              Learn the tools, follow real design workflows and build your own
              ideas.
            </p>
            <div className="mt-5 flex flex-col gap-1.5 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-primary" />
                26–27 September
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                SRM Campus
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-muted-foreground">
              Navigation
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/80 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={open}
                  data-cursor="hover"
                  className="text-sm font-medium text-primary transition-colors hover:text-cyan"
                >
                  Register
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-muted-foreground">
              Follow
            </h3>
            <div className="mt-4 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  data-cursor="hover"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/50 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:text-primary"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-wide text-muted-foreground">
            © 2026 SOLIDWORKS &amp; ALTIUM Workshop
          </p>
          <p className="text-xs text-muted-foreground">
            Learn • Design • Build
          </p>
        </div>
      </div>
    </footer>
  )
}
