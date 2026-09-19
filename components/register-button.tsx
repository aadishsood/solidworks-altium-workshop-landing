'use client'

import { ArrowRight } from 'lucide-react'
import { useRegistration } from '@/components/registration-context'

export function RegisterButton({
  className = '',
  label = 'Register Now',
  size = 'md',
}: {
  className?: string
  label?: string
  size?: 'sm' | 'md' | 'lg'
}) {
  const { open } = useRegistration()

  const sizing =
    size === 'lg'
      ? 'px-7 py-3.5 text-base'
      : size === 'sm'
        ? 'px-4 py-2 text-sm'
        : 'px-5 py-2.5 text-sm'

  return (
    <button
      type="button"
      data-cursor="hover"
      onClick={open}
      className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary font-semibold text-primary-foreground shadow-[0_0_0_0_rgba(47,140,255,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-8px_var(--primary)] active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${sizing} ${className}`}
    >
      <span
        aria-hidden
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
      />
      <span className="relative">{label}</span>
      <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </button>
  )
}
