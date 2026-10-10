import FloatingPetals from './components/ui/FloatingPetals'
import Navbar        from './components/layout/Navbar'
import Footer        from './components/layout/Footer'
import Hero          from './components/sections/Hero'
import About         from './components/sections/About'
import WorkAndSkills from './components/sections/WorkAndSkills'
import Education     from './components/sections/Education'
import Contact       from './components/sections/Contact'
import CaseStudyPage from './components/pages/CaseStudyPage'

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '')
  if (path === '/case-studies/cashbelle') return <CaseStudyPage slug="cashbelle" />
  if (path === '/case-studies/goddess-plan') return <CaseStudyPage slug="goddess-plan" />

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
