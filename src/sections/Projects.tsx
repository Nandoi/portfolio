import SectionHeading from "../components/common/SectionHeading"
import ProjectCard from "../components/projects/ProjectCard"
import { projects } from "../data/projects"

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-32 border-b border-neutral-200 py-24"
    >
      <SectionHeading
        number="02"
        label="PROJECTS"
        title="Selected work."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}