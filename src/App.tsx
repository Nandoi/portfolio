
import MobileHeader from "./components/layout/MobileHeader"
import Sidebar from "./components/layout/Sidebar"

import Hero from "./sections/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import TechStack from "./sections/TechStack"
import BeyondCode from "./sections/BeyondCode"
import Contact from "./sections/Contact"

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Sidebar />
      <MobileHeader />

      <main className="lg:ml-64">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
          <Hero />
          <About />
          <Projects />
          <TechStack />
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
