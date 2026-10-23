import { socialLinks } from "../../data/socials"

type SocialLinksProps = {
  compact?: boolean
}

export default function SocialLinks({
  compact = false,
}: SocialLinksProps) {
  return (
    <nav
      aria-label="Social profiles"
      className={
        compact
          ? "flex items-center gap-4"
          : "flex flex-col gap-4"
      }
    >
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="group flex items-center gap-3 font-mono text-xs text-neutral-500 transition-colors hover:text-neutral-900 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900"
        >
          <Icon
            aria-hidden="true"
            className="h-4 w-4 shrink-0"
          />

          {!compact && (
            <>
              <span>{label}</span>
              <span
                aria-hidden="true"
                className="ml-auto text-neutral-300 group-hover:text-neutral-900"
              >
                ↗
              </span>
            </>
          )}
        </a>
      ))}
    </nav>
  )
}