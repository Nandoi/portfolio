
import { useState } from "react"

export default function Hero() {
  const [photoAvailable, setPhotoAvailable] = useState(true)

  return (
    <section
      id="home"
      className="dot-grid scroll-mt-32 border-b border-neutral-200 py-24 lg:scroll-mt-8 lg:py-32"
    >
      <div className="grid items-center gap-12 md:grid-cols-2">

        {/* Profile Portrait */}
        <div className="relative mx-auto w-full max-w-[350px]">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100">
            {photoAvailable ? (
              <img
                src="/profile.jpg"
                alt="Portrait of Fernando III Vidal"
                onError={() => setPhotoAvailable(false)}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center">
                <span className="font-mono text-8xl text-neutral-300">
                  FV.
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Introduction */}
        <div>
          <p className="mb-5 font-mono text-xs tracking-widest text-neutral-500">
            HELLO, I'M
          </p>

          <h1 className="font-mono text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            Fernando
            <br />
            Vidal<span className="text-neutral-400">.</span>
          </h1>

          <p className="mt-6 font-mono text-sm leading-7 text-neutral-500">
            Information Technology Student
            <br />
            Aspiring Software Developer
          </p>

          <p className="mt-8 max-w-md text-sm leading-8 text-neutral-600">
            I enjoy building things with code, exploring
            new technologies, and turning creative ideas
            into meaningful experiences.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6 font-mono text-sm">
            <a
              href="#projects"
              className="border-b border-neutral-900 pb-1 font-medium transition hover:text-neutral-500"
            >
              View Projects ↗
            </a>

            <a
              href="#about"
              className="text-neutral-500 transition hover:text-neutral-900"
            >
              About Me →
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
