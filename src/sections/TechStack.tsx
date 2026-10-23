
import SectionHeading from "../components/common/SectionHeading"
import { skillCategories } from "../data/skills"

export default function TechStack() {
  return (
    <section
      id="stack"
      className="scroll-mt-32 border-b border-neutral-200 py-24"
    >
      <SectionHeading
        number="02"
        label="TECH STACK"
        title="Tools & Technologies."
      />

      <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-500">
        A collection of technologies I use, practice, and
        continue to explore throughout my development journey.
      </p>

      <div className="mt-12 space-y-12">
        {skillCategories.map((category) => (
          <div key={category.title}>

            {/* Category heading */}
            <div className="mb-5 flex items-center justify-between border-b border-neutral-200 pb-3">
              <h3 className="font-mono text-sm font-medium text-neutral-800">
                {category.title}
              </h3>

              <span className="font-mono text-xs text-neutral-400">
                {String(category.skills.length).padStart(2, "0")}
              </span>
            </div>

            {/* Technology cards */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {category.skills.map((skill) => {
                const Icon = skill.icon

                return (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-300 hover:bg-neutral-50"
                  >
                    <Icon
                      aria-hidden="true"
                      className="h-5 w-5 shrink-0 text-neutral-600 transition-colors group-hover:text-neutral-900"
                    />

                    <span className="text-sm font-medium text-neutral-700 group-hover:text-neutral-900">
                      {skill.name}
                    </span>
                  </div>
                )
              })}
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}
