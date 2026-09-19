'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = mounted ? resolvedTheme === 'dark' : true

  return (
    <button
      type="button"
      aria-label={
        !mounted
          ? 'Toggle theme'
          : isDark
            ? 'Switch to light mode'
            : 'Switch to dark mode'
      }
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`group relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/60 text-foreground transition-all duration-300 hover:border-primary/60 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${className}`}
    >
      {mounted && (
        <>
          <Sun
            className={`absolute h-[18px] w-[18px] transition-all duration-500 ${
              isDark
                ? 'scale-0 -rotate-90 opacity-0'
                : 'scale-100 rotate-0 opacity-100'
            }`}
          />
          <Moon
            className={`absolute h-[18px] w-[18px] transition-all duration-500 ${
              isDark
                ? 'scale-100 rotate-0 opacity-100'
                : 'scale-0 rotate-90 opacity-0'
            }`}
          />
        </>
      )}
    </button>
  )
}
