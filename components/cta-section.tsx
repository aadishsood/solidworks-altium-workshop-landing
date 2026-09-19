import { CalendarDays, MapPin } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { RegisterButton } from '@/components/register-button'

export function CtaSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface/60 px-6 py-16 text-center backdrop-blur-sm sm:px-16">
            <div
              aria-hidden
              className="tech-grid absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
            />
            <div
              aria-hidden
              className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]"
            />
            <div className="relative">
              <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-cyan">
                Limited Seats
              </span>
              <h2 className="mx-auto mt-4 max-w-2xl text-balance font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Ready to design and build with{' '}
                <span className="bg-gradient-to-r from-primary to-cyan bg-clip-text text-transparent">
                  SOLIDWORKS
                </span>{' '}
                &amp; <span className="text-gold">ALTIUM</span>?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-pretty text-muted-foreground">
                Reserve your spot for the two-day hands-on workshop. Bring your
                curiosity — we&apos;ll bring the tools, the guidance and the
                projects.
              </p>

              <div className="mt-9 flex justify-center">
                <RegisterButton size="lg" />
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
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
          </div>
        </Reveal>
      </div>
    </section>
  )
}
