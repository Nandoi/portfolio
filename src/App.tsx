
import Sidebar from "./components/layout/Sidebar"
import MobileHeader from "./components/layout/MobileHeader"

import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import TechStack from "./sections/TechStack"
import GithubContributions from "./sections/GithubContributions"
import Certificates from "./sections/Certificates"
import BeyondCode from "./sections/BeyondCode"
import Contact from "./sections/Contact"

import useActiveSection from "./hooks/useActiveSection"

function App() {
  const activeSection = useActiveSection()

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Sidebar activeSection={activeSection} />
      <MobileHeader activeSection={activeSection} />

      <main className="lg:ml-64">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
          <Hero />
          <Projects />
          <TechStack />
          <GithubContributions />
          <Certificates />
          <BeyondCode />
          <Contact />

          <footer className="border-t border-neutral-200 py-8 font-mono text-xs text-neutral-400">
            Made with curiosity. © {new Date().getFullYear()} Fernando.
          </footer>
        </div>
      </main>
    </div>
  )
}

export default App
