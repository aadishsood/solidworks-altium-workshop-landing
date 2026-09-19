import { RegistrationProvider } from '@/components/registration-context'
import { AnimatedBackground } from '@/components/animated-background'
import { CustomCursor } from '@/components/custom-cursor'
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
      <AnimatedBackground />
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
