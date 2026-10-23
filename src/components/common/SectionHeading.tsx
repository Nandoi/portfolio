type SectionHeadingProps = {
  number: string
  label: string
  title: string
}

export default function SectionHeading({
  number,
  label,
  title,
}: SectionHeadingProps) {
  return (
    <>
      <p className="mb-4 font-mono text-xs text-neutral-400">
        {number} / {label}
      </p>

      <h2 className="font-mono text-3xl">
        {title}
      </h2>
    </>
  )
}