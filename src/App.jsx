import { useEffect } from 'react'
import FloatingPetals from './components/ui/FloatingPetals'
import Navbar        from './components/layout/Navbar'
import Footer        from './components/layout/Footer'
import Hero          from './components/sections/Hero'
import About         from './components/sections/About'
import WorkAndSkills from './components/sections/WorkAndSkills'
import Education     from './components/sections/Education'
import Contact       from './components/sections/Contact'
import CaseStudyPage from './components/pages/CaseStudyPage'
import ServicePage from './components/pages/ServicePage'
import AdminVaCaseStudyPage from './components/pages/AdminVaCaseStudyPage'
import EmailNewsletterCaseStudyPage from './components/pages/EmailNewsletterCaseStudyPage'

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '')
  useEffect(() => {
    if (path) return
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (!id || id === 'home') {
      if (id === 'home') window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`)
      window.history.scrollRestoration = 'manual'
      const frame = requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'auto' }))
      return () => cancelAnimationFrame(frame)
    }
    const frame = requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: 'auto' }))
    return () => cancelAnimationFrame(frame)
  }, [path])
  if (path === '/case-studies/cashbelle') return <CaseStudyPage slug="cashbelle" />
  if (path === '/case-studies/goddess-plan') return <CaseStudyPage slug="goddess-plan" />
  if (path === '/services/creative') return <ServicePage slug="creative" />
  if (path === '/services/digital') return <ServicePage slug="digital" />
  if (path === '/services/business') return <ServicePage slug="business" />
  if (path === '/projects/admin-va-email-management') return <AdminVaCaseStudyPage />
  if (path === '/projects/email-newsletter') return <EmailNewsletterCaseStudyPage />

  return (
    <div className="relative">
      <FloatingPetals />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <WorkAndSkills />
        <Education />
        <Contact />
      </main>

      <Footer className="relative z-10" />
    </div>
  )
}
