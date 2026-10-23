import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6"

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Tech Stack", href: "#stack" },
  { label: "Beyond Code", href: "#beyond" },
  { label: "Contact", href: "#contact" },
]

// Replace these examples with your actual public profile URLs.
const socialLinks = [
  { label: "GitHub", href: "https://github.com/Nandoi", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/fernando-iii-vidal-905a73385/", icon: FaLinkedin },
  { label: "Facebook", href: "https://www.facebook.com/fernando.vidal24", icon: FaFacebook },
  { label: "Instagram", href: "https://www.instagram.com/bilogvviii/", icon: FaInstagram },
]

// Use the same profile links on both desktop and mobile.
function SocialLinks({ compact = false }: { compact?: boolean }) {
  return (
    <nav
      aria-label="Social profiles"
      className={compact ? "flex items-center gap-4" : "flex flex-col gap-4"}
    >
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="group flex items-center gap-3 font-mono text-xs text-neutral-500 transition-colors hover:text-neutral-900 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900"
        >
          <Icon aria-hidden="true" className="h-4 w-4 shrink-0" />
          {!compact && (
            <>
              <span>{label}</span>
              <span aria-hidden="true" className="ml-auto text-neutral-300 group-hover:text-neutral-900">↗</span>
            </>
          )}
        </a>
      ))}
    </nav>
  )
}

const projects = [
  {
    title: "BulSU eCash",
    description:
      "A campus cashless payment system using student wallets and ID cards.",
    tags: ["Java", "SQL", "OOP"],
    status: "In Development",
  },
  {
    title: "Roblox Game Prototype",
    description:
      "Experimenting with cozy gameplay, musical interactions, and creature collection.",
    tags: ["Luau", "Roblox Studio"],
    status: "Prototype",
  },
]

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Desktop Sidebar */}
      <aside className="fixed inset-y-0 left-0 hidden w-64 flex-col justify-between overflow-y-auto border-r border-neutral-200 bg-white px-8 py-10 lg:flex">
        <div>
          <a
            href="#home"
            className="font-mono text-base font-semibold tracking-tight"
          >
            Fernando III Vidal<span className="text-neutral-400">.</span>
          </a>

          <p className="mt-3 text-xs text-neutral-400">
            Student / Developer / Creator
          </p>

          {/* External profiles: open in a new tab */}
          <div className="mt-10 border-b border-neutral-200 pb-8">
            <SocialLinks />
          </div>

          {/* Internal sections: scroll within this page */}
          <nav aria-label="Main navigation" className="mt-10 flex flex-col gap-5">
            {navigation.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="group flex items-center gap-3 font-mono text-sm text-neutral-500 transition hover:text-black"
              >
                <span className="text-xs text-neutral-300 group-hover:text-black">
                  0{index + 1}
                </span>
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-neutral-200 pt-6">
          <p className="text-xs leading-6 text-neutral-500">
            Learning. Building. Creating.
          </p>
          <p className="mt-3 font-mono text-xs text-neutral-400">
            © {new Date().getFullYear()} Fernando
          </p>
        </div>
      </aside>

      {/* Mobile Navigation */}
      <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 px-5 py-4 backdrop-blur lg:hidden">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="font-mono font-semibold">
            Fernando.
          </a>
          <SocialLinks compact />
        </div>

        <nav aria-label="Mobile navigation" className="mt-3 flex gap-5 overflow-x-auto pb-1">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 text-xs text-neutral-500"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      {/* Main Content */}
      <main className="lg:ml-64">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">

          {/* Hero */}
          <section
            id="home"
            className="dot-grid scroll-mt-32 border-b border-neutral-200 py-24 lg:scroll-mt-8 lg:py-36"
          >
            <div className="grid items-center gap-12 md:grid-cols-2">
              {/* Portrait Placeholder */}
              <div className="flex aspect-[4/5] max-h-[430px] items-center justify-center overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100">
                <span className="font-mono text-8xl font-light text-neutral-300">
                  FV.
                </span>
              </div>

              {/* Introduction */}
              <div>
                <p className="mb-5 font-mono text-xs text-neutral-500">
                  HELLO, I'M
                </p>

                <h1 className="font-mono text-4xl font-medium tracking-tight sm:text-5xl">
                  Fernando
                  <br />
                  Vidal<span className="text-neutral-400">.</span>
                </h1>

                <p className="mt-5 font-mono text-xs text-neutral-500">
                  Information Technology Student
                  <br />
                  Aspiring Software Developer
                </p>

                <p className="mt-8 max-w-md text-sm leading-8 text-neutral-600">
                  I enjoy building things with code, exploring
                  new technologies, and turning creative ideas
                  into meaningful experiences.
                </p>

                <div className="mt-8 flex flex-wrap gap-6 font-mono text-sm">
                  <a
                    href="#projects"
                    className="border-b border-neutral-900 pb-1 transition hover:text-neutral-500"
                  >
                    View Projects ↗
                  </a>

                  <a
                    href="#about"
                    className="text-neutral-500 hover:text-black"
                  >
                    More About Me →
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* About */}
          <section id="about" className="scroll-mt-32 border-b border-neutral-200 py-24">
            <p className="mb-4 font-mono text-xs text-neutral-400">
              01 / ABOUT
            </p>
            <h2 className="font-mono text-3xl">A little about me.</h2>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-neutral-600">
              I'm an Information Technology student at Bulacan
              State University, learning software development,
              database systems, and the technologies behind
              modern applications. This portfolio documents
              my projects and growth as a developer.
            </p>
          </section>

          {/* Projects */}
          <section id="projects" className="scroll-mt-32 border-b border-neutral-200 py-24">
            <p className="mb-4 font-mono text-xs text-neutral-400">
              02 / PROJECTS
            </p>

            <h2 className="font-mono text-3xl">Selected work.</h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className="group overflow-hidden rounded-xl border border-neutral-200 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-48 items-center justify-center bg-neutral-100">
                    <span className="font-mono text-6xl text-neutral-300">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="p-6">
                    <p className="font-mono text-xs text-neutral-400">
                      {project.status}
                    </p>

                    <h3 className="mt-3 font-mono text-lg font-medium">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-neutral-600">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-neutral-100 px-3 py-1 font-mono text-xs text-neutral-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Tech Stack */}
          <section id="stack" className="scroll-mt-32 border-b border-neutral-200 py-24">
            <p className="mb-4 font-mono text-xs text-neutral-400">
              03 / TECH STACK
            </p>

            <h2 className="font-mono text-3xl">Tools I'm learning.</h2>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Java", "SQL", "HTML", "CSS",
                "JavaScript", "TypeScript", "React", "Git"
              ].map((tool) => (
                <span
                  key={tool}
                  className="rounded-md border border-neutral-200 px-4 py-2 font-mono text-xs text-neutral-600"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>

          {/* Personal Interests */}
          <section id="beyond" className="scroll-mt-32 border-b border-neutral-200 py-24">
            <p className="mb-4 font-mono text-xs text-neutral-400">
              04 / BEYOND CODE
            </p>

            <h2 className="font-mono text-3xl">Beyond the keyboard.</h2>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-neutral-600">
              When I'm not coding, you'll probably find me
              building Gundam model kits, gaming, or exploring
              new creative projects.
            </p>
          </section>

          {/* Contact */}
          <section id="contact" className="scroll-mt-32 py-24">
            <p className="mb-4 font-mono text-xs text-neutral-400">
              05 / CONTACT
            </p>

            <h2 className="font-mono text-3xl">Let's connect.</h2>

            <p className="mt-6 text-sm text-neutral-600">
              Professional contact links will be added here.
            </p>
          </section>

          <footer className="border-t border-neutral-200 py-8 font-mono text-xs text-neutral-400">
            Made with curiosity. © {new Date().getFullYear()} Fernando.
          </footer>
        </div>
      </main>
    </div>
  )
}

export default App
