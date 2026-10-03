import { BackgroundDecor } from '@/components/background-decor'
import { BackToTop } from '@/components/back-to-top'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { PortfolioBoundary } from '@/components/portfolio-boundary'
import { ScrollProgress } from '@/components/scroll-progress'
import { About } from '@/components/sections/about'
import { Contact } from '@/components/sections/contact'
import { Education } from '@/components/sections/education'
import { Experience } from '@/components/sections/experience'
import { Hero } from '@/components/sections/hero'
import { Projects } from '@/components/sections/projects'
import { Skills } from '@/components/sections/skills'

function App() {
  return (
    <div className="relative min-h-screen">
      <BackgroundDecor />
      <PortfolioBoundary>
        <ScrollProgress />
        <Navbar />

        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>

        <Footer />
        <BackToTop />
      </PortfolioBoundary>
    </div>
  )
}

export default App
