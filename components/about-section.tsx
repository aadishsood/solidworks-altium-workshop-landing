import { GraduationCap, Wrench, Factory } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const features = [
  {
    icon: GraduationCap,
    title: 'Beginner Friendly',
    body: 'No advanced prior experience required. We start from the fundamentals and build up.',
  },
  {
    icon: Wrench,
    title: 'Hands-On',
    body: 'Learn by actually creating designs — not just watching slides.',
  },
  {
    icon: Factory,
    title: 'Industry Focused',
    body: 'Understand practical engineering workflows used in the real world.',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-primary">
              About the Workshop
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-balance font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Build Skills. Create Real-World Designs.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              This workshop introduces participants to practical CAD and PCB
              design workflows using SOLIDWORKS and ALTIUM. The focus is on
              understanding the tools, following real design processes and
              applying the concepts through hands-on activities.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 120} variant="up">
              <article className="group h-full rounded-2xl border border-border bg-surface/50 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_20px_60px_-25px_var(--primary)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/25 transition-all duration-300 group-hover:scale-110 group-hover:ring-primary/50">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
