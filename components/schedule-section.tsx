'use client'

import { useState } from 'react'
import { CalendarDays, Clock, MapPin } from 'lucide-react'
import { Reveal } from '@/components/reveal'

type Slot = { time: string; session: string; highlight?: boolean }

const schedule: {
  day: string
  date: string
  focus: string
  accent: 'primary' | 'gold'
  slots: Slot[]
}[] = [
  {
    day: 'Day 1',
    date: '26 September',
    focus: 'SOLIDWORKS — 3D CAD',
    accent: 'primary',
    slots: [
      { time: '10:00 – 10:15', session: 'Registration & Welcome' },
      { time: '10:15 – 10:30', session: 'Workshop Introduction' },
      { time: '10:30 – 10:45', session: 'SOLIDWORKS Overview' },
      { time: '10:45 – 11:15', session: 'Interface & Basic Sketching' },
      { time: '11:15 – 12:15', session: '3D Part Modelling — Hands-On', highlight: true },
      { time: '12:15 – 1:15', session: 'Break / Lunch' },
      { time: '1:15 – 2:15', session: 'Assembly Design', highlight: true },
      { time: '2:15 – 3:00', session: 'Engineering Drawing + Q&A' },
    ],
  },
  {
    day: 'Day 2',
    date: '27 September',
    focus: 'ALTIUM — PCB Design',
    accent: 'gold',
    slots: [
      { time: '10:00 – 10:15', session: 'Day 2 Kick-off' },
      { time: '10:15 – 10:30', session: 'PCB Design Introduction' },
      { time: '10:30 – 10:45', session: 'ALTIUM Interface' },
      { time: '10:45 – 11:15', session: 'Schematic Basics' },
      { time: '11:15 – 12:15', session: 'Schematic Capture — Hands-On', highlight: true },
      { time: '12:15 – 1:15', session: 'Break / Lunch' },
      { time: '1:15 – 2:15', session: 'PCB Layout, Placement & Routing', highlight: true },
      { time: '2:15 – 3:00', session: 'Mini Project + Q&A / Wrap-up' },
    ],
  },
]

const meta = [
  { icon: CalendarDays, label: '26–27 September 2026' },
  { icon: Clock, label: '10:00 AM – 3:00 PM' },
  { icon: MapPin, label: 'SRM Campus' },
]

export function ScheduleSection() {
  const [activeDay, setActiveDay] = useState(0)
  const day = schedule[activeDay]
  const isGold = day.accent === 'gold'

  return (
    <section id="schedule" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-primary">
              Two Days
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-balance font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Workshop Schedule
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {meta.map((m) => (
                <span
                  key={m.label}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <m.icon className="h-4 w-4 text-primary" />
                  {m.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Day tabs */}
        <Reveal delay={220}>
          <div className="mx-auto mt-12 flex w-full max-w-md items-center rounded-full border border-border bg-surface/50 p-1.5 backdrop-blur-sm">
            {schedule.map((d, i) => {
              const activeGold = d.accent === 'gold'
              const isActive = activeDay === i
              return (
                <button
                  key={d.day}
                  type="button"
                  data-cursor="hover"
                  onClick={() => setActiveDay(i)}
                  className={`relative flex-1 rounded-full px-4 py-2.5 text-center transition-colors duration-300 ${
                    isActive
                      ? 'text-background'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {isActive && (
                    <span
                      className={`absolute inset-0 rounded-full ${
                        activeGold ? 'bg-gold' : 'bg-primary'
                      }`}
                    />
                  )}
                  <span className="relative flex flex-col">
                    <span className="text-sm font-semibold">{d.day}</span>
                    <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-widest opacity-80">
                      {d.date}
                    </span>
                  </span>
                </button>
              )
            })}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-8 text-center font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <span className={isGold ? 'text-gold' : 'text-primary'}>
              {day.day}
            </span>{' '}
            — {day.focus}
          </p>
        </Reveal>

        {/* Timeline rows */}
        <div key={activeDay} className="mt-8">
          {day.slots.map((slot, i) => (
            <Reveal key={`${activeDay}-${slot.time}`} delay={i * 70} variant="left">
              <div
                className={`group grid grid-cols-[auto_1fr] items-center gap-4 border-t border-border py-5 transition-colors duration-300 sm:grid-cols-[220px_1fr] sm:gap-8 sm:py-6 ${
                  i === day.slots.length - 1 ? 'border-b' : ''
                }`}
              >
                <span
                  className={`font-[family-name:var(--font-mono)] text-base tabular-nums tracking-tight text-muted-foreground transition-colors duration-300 group-hover:text-foreground sm:text-2xl ${
                    isGold
                      ? 'group-hover:!text-gold'
                      : 'group-hover:!text-primary'
                  }`}
                >
                  {slot.time}
                </span>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-pretty text-base font-medium text-foreground/90 sm:text-lg">
                    {slot.session}
                  </span>
                  {slot.highlight && (
                    <span
                      className={`hidden shrink-0 rounded-full border px-3 py-1 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest sm:inline-block ${
                        isGold
                          ? 'border-gold/40 bg-gold/10 text-gold'
                          : 'border-primary/40 bg-primary/10 text-primary'
                      }`}
                    >
                      Hands-On
                    </span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
