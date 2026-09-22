import { Box, Layers, FileText, Workflow, CircuitBoard, Rocket } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const items = [
  {
    num: '01',
    icon: Box,
    title: '3D Modelling',
    body: 'Create and modify basic mechanical parts.',
  },
  {
    num: '02',
    icon: Layers,
    title: 'Assembly Design',
    body: 'Understand how components come together in an assembly.',
  },
  {
    num: '03',
    icon: FileText,
    title: 'Engineering Drawings',
    body: 'Understand technical drawings and dimensions.',
  },
  {
    num: '04',
    icon: Workflow,
    title: 'Schematic Design',
    body: 'Understand the fundamentals of electronic schematic design.',
  },
  {
    num: '05',
    icon: CircuitBoard,
    title: 'PCB Layout',
    body: 'Learn the basics of component placement and routing.',
  },
  {
    num: '06',
    icon: Rocket,
    title: 'Hands-On Project',
    body: 'Apply the concepts through a guided practical activity.',
  },
]

export function LearnSection() {
  return (
    <section id="learn" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-primary">
              Curriculum
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-balance font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              What You&apos;ll Learn
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.num} delay={(i % 3) * 100} variant="scale">
              <article className="glass-card group relative h-full rounded-2xl border border-border p-7 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_24px_70px_-30px_var(--primary)]">
                <span className="pointer-events-none absolute -right-2 -top-4 font-[family-name:var(--font-display)] text-7xl font-bold text-foreground/[0.05] transition-colors duration-300 group-hover:text-primary/15">
                  {item.num}
                </span>
                <item.icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:-translate-y-1" />
                <div className="mt-6 font-[family-name:var(--font-mono)] text-xs tracking-widest text-muted-foreground transition-colors duration-300 group-hover:text-gold">
                  {item.num}
                </div>
                <h3 className="mt-1 font-[family-name:var(--font-display)] text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
