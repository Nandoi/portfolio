
import SectionHeading from "../components/common/SectionHeading"
import { FaGithub, FaLinkedin } from "react-icons/fa6"

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[85vh] scroll-mt-32 py-24"
    >
      <SectionHeading
        number="06"
        label="CONTACT"
        title="Let's connect."
      />

      <p className="mt-6 max-w-xl text-sm leading-7 text-neutral-500">
        Interested in connecting or talking about technology?
        Feel free to reach out through my profiles.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="https://github.com/Nandoi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-lg border border-neutral-200 px-5 py-3 font-mono text-sm text-neutral-700 transition hover:border-neutral-400 hover:bg-neutral-50"
        >
          <FaGithub aria-hidden="true" />
          GitHub ↗
        </a>

        <a
          href="https://www.linkedin.com/in/fernando-iii-vidal-905a73385/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-lg border border-neutral-200 px-5 py-3 font-mono text-sm text-neutral-700 transition hover:border-neutral-400 hover:bg-neutral-50"
        >
          <FaLinkedin aria-hidden="true" />
          LinkedIn ↗
        </a>
      </div>
    </section>
  )
}
