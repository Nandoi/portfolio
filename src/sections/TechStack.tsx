import SectionHeading from "../components/common/SectionHeading"
import { skills } from "../data/skills"

export default function TechStack() {
  return (
    <section
      id="stack"
      className="scroll-mt-32 border-b border-neutral-200 py-24"
    >
      <SectionHeading
        number="03"
        label="TECH STACK"
        title="Tools I'm learning."
      />

      <div className="mt-8 flex flex-wrap gap-3">
        {skills.map((tool) => (
          <span
            key={tool}
            className="rounded-md border border-neutral-200 px-4 py-2 font-mono text-xs text-neutral-600"
          >
            {tool}
          </span>
        ))}
      </div>
    </section>
  )
}