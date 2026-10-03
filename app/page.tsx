import { RegistrationProvider } from '@/components/registration-context'
import { CustomCursor } from '@/components/custom-cursor'
import { ShapeWaves } from '@/components/shape-waves'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { AboutSection } from '@/components/about-section'
import { ToolSections } from '@/components/tool-sections'
import { LearnSection } from '@/components/learn-section'
import { ScheduleSection } from '@/components/schedule-section'
import { CtaSection } from '@/components/cta-section'
import { FaqSection } from '@/components/faq-section'
import { Footer } from '@/components/footer'
import { RegistrationModal } from '@/components/registration-modal'

export default function Page() {
  return (
    <RegistrationProvider>
      <CustomCursor />
      <ShapeWaves className="pointer-events-none fixed inset-0 -z-10 opacity-[0.18] sm:opacity-[0.22]" />
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ToolSections />
        <LearnSection />
        <ScheduleSection />
        <CtaSection />
        <FaqSection />
      </main>
      <Footer />
      <RegistrationModal />
    </RegistrationProvider>
  )
}
