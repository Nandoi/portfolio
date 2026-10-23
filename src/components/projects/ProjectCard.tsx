import type { Project } from "../../types/project"

type ProjectCardProps = {
  project: Project
  index: number
}

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border border-neutral-200 transition hover:-translate-y-1 hover:shadow-md">
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
  )
}