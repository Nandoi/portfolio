import SectionHeading from "../components/common/SectionHeading"

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-32 border-b border-neutral-200 py-24"
    >
      <SectionHeading
        number="01"
        label="ABOUT"
        title="A little about me."
      />

      <p className="mt-6 max-w-2xl text-sm leading-8 text-neutral-600">
        I'm an Information Technology student at Bulacan
        State University, learning software development,
        database systems, and the technologies behind
        modern applications. This portfolio documents
        my projects and growth as a developer.
      </p>
    </section>
  )
}