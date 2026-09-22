import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SOLIDWORKS & ALTIUM Workshop — 26–27 September 2026 | SRM Campus',
  description:
    'A premium two-day hands-on workshop on SOLIDWORKS 3D CAD and ALTIUM PCB design. 26–27 September 2026, 10:00 AM – 3:00 PM at SRM Campus. Learn, design and build.',
  keywords: [
    'SOLIDWORKS',
    'ALTIUM',
    'workshop',
    'CAD',
    'PCB design',
    '3D modelling',
    'SRM Campus',
  ],
  openGraph: {
    title: 'SOLIDWORKS & ALTIUM Workshop',
    description:
      'Hands-on CAD and PCB design workshop. 26–27 September 2026 at SRM Campus.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#06111c' },
    { media: '(prefers-color-scheme: light)', color: '#eef5fb' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
