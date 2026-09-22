'use client'

import { Cpu, CalendarDays, Clock, MapPin } from 'lucide-react'
import { useRegistration } from '@/components/registration-context'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Tools', href: '#workshop' },
  { label: 'Curriculum', href: '#learn' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'FAQ', href: '#faq' },
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
                26–27 September 2026
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                10:00 AM – 3:00 PM
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
              Register
            </h3>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Ready to design and build? Open the registration form to reserve
              your place for the workshop.
            </p>
            <button
              type="button"
              onClick={open}
              data-cursor="hover"
              className="mt-5 rounded-full border border-primary/40 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/15"
            >
              Register Now
            </button>
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
