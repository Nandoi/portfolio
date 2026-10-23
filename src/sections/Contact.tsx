
import SectionHeading from "../components/common/SectionHeading"
import { FaGithub, FaLinkedin } from "react-icons/fa6"

const contactLinks = [
  {
    name: "GitHub",
    description: "github.com/Nandoi",
    url: "https://github.com/Nandoi",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    description: "Professional connections",
    url: "https://www.linkedin.com/in/fernando-iii-vidal-905a73385/",
    icon: FaLinkedin,
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[70vh] scroll-mt-32 py-16 lg:py-20"
    >
      <SectionHeading
        number="06"
        label="CONTACT"
        title="Let's connect."
      />

      <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-500">
        Interested in connecting, sharing ideas, or collaborating?
        Feel free to reach out through my profiles.
      </p>

      {/* Contact Links */}
      <div className="mt-10 max-w-2xl border-t border-neutral-200">
        {contactLinks.map((contact) => {
          const Icon = contact.icon

          return (
            <a
              key={contact.name}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 border-b border-neutral-200 px-2 py-5 transition-colors duration-200 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              <div className="flex min-w-0 items-center gap-4">

                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-neutral-100 transition-colors group-hover:bg-neutral-200">
                  <Icon
                    aria-hidden="true"
                    className="h-5 w-5 text-neutral-700"
                  />
                </div>

                {/* Information */}
                <div className="min-w-0">
                  <h3 className="text-sm font-medium text-neutral-800">
                    {contact.name}
                  </h3>

                  <p className="mt-1 truncate text-xs text-neutral-400">
                    {contact.description}
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <span
                aria-hidden="true"
                className="shrink-0 text-lg text-neutral-400 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-neutral-900"
              >
                ↗
              </span>
            </a>
          )
        })}
      </div>

      {/* Closing Note */}
      <div className="mt-10 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-neutral-500" />

        <p className="font-mono text-xs tracking-wide text-neutral-400">
          ALWAYS LEARNING, ALWAYS BUILDING.
        </p>
      </div>
    </section>
  )
}
