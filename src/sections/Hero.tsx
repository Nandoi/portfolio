
import { useState } from "react"

export default function Hero() {
  const [photoAvailable, setPhotoAvailable] = useState(true)

  return (
    <section
      id="home"
      className="dot-grid scroll-mt-32 border-b border-neutral-200 py-12 sm:py-16 lg:scroll-mt-8 lg:py-20"
    >
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10">

        {/* Profile Photo */}
        <div className="mx-auto w-full max-w-[250px] sm:max-w-[280px] md:max-w-[310px]">
          <div className="aspect-[4/5] overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100">
            {photoAvailable ? (
              <img
                src="/profile.jpg"
                alt="Portrait of Fernando Vidal"
                loading="eager"
                fetchPriority="high"
                onError={() => setPhotoAvailable(false)}
                className="h-full w-full object-cover"
                />
            ) : (
              <div className="flex h-full items-center justify-center">
                <span className="font-mono text-6xl text-neutral-300">
                  FV.
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Introduction */}
        <div>
          <p className="mb-3 font-mono text-[10px] tracking-wider text-neutral-400">
            HELLO, I'M
          </p>

          <h1 className="font-mono text-3xl font-medium leading-tight tracking-tight text-neutral-900 sm:text-4xl lg:text-[2.1rem] xl:text-4xl">
            Fernando Vidal<span className="text-neutral-400">.</span>
          </h1>

          <p className="mt-4 text-sm text-neutral-500">
            BSIT Student · Aspiring Software Developer
          </p>

          <div className="mt-6 max-w-lg space-y-4 text-sm leading-7 text-neutral-600">
            <p>
              I'm a BSIT student at
              Bulacan State University, exploring software
              development, and web technologies.
            </p>

            <p>
              I enjoy learning how things work and building
              my skills through practice and creative ideas.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs sm:text-sm">
            <a
              href="#stack"
              className="border-b border-neutral-900 pb-1 text-neutral-900 transition hover:text-neutral-500"
            >
              Explore My Skills ↗
            </a>

            <a
              href="#contact"
              className="text-neutral-500 transition hover:text-neutral-900"
            >
              Get in Touch →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
