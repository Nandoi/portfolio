export default function Hero() {
  return (
    <section
      id="home"
      className="dot-grid scroll-mt-32 border-b border-neutral-200 py-24 lg:scroll-mt-8 lg:py-36"
    >
      <div className="grid items-center gap-12 md:grid-cols-2">

        {/* Profile picture placeholder */}
        <div className="flex aspect-[4/5] max-h-[430px] items-center justify-center overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100">
          <span className="font-mono text-8xl font-light text-neutral-300">
            FV.
          </span>
        </div>

        {/* Personal introduction */}
        <div>
          <p className="mb-5 font-mono text-xs text-neutral-500">
            HELLO, I'M
          </p>

          <h1 className="font-mono text-4xl font-medium tracking-tight sm:text-5xl">
            Fernando
            <br />
            Vidal
            <span className="text-neutral-400">.</span>
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
  )
}