export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* moving tech grid */}
      <div className="tech-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_75%)]" />

      {/* slow radial glows */}
      <div className="animate-pulse-glow absolute -left-40 top-[-10%] h-[520px] w-[520px] rounded-full bg-primary/20 blur-[120px]" />
      <div
        className="animate-pulse-glow absolute -right-40 top-[30%] h-[460px] w-[460px] rounded-full bg-gold/15 blur-[120px]"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="animate-pulse-glow absolute left-1/2 bottom-[-10%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan/15 blur-[120px]"
        style={{ animationDelay: '4s' }}
      />
    </div>
  )
}
