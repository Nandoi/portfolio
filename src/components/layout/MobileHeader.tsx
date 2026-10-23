
import SocialLinks from "../common/SocialLinks"
import NavigationLinks from "../common/NavigationLinks"

type MobileHeaderProps = {
  activeSection: string
}

export default function MobileHeader({
  activeSection,
}: MobileHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 px-4 py-3 backdrop-blur sm:px-6 sm:py-4 lg:hidden">

      <div className="flex items-center justify-between gap-4">
        <a
          href="#home"
          className="shrink-0 font-mono text-sm font-semibold sm:text-base"
        >
          Fernando.
        </a>

        <SocialLinks compact />
      </div>

      <nav
        aria-label="Mobile navigation"
        className="-mx-4 mt-3 flex gap-4 overflow-x-auto overscroll-x-contain px-4 pb-1 sm:-mx-6 sm:px-6"
      >
        <NavigationLinks
          mobile
          activeSection={activeSection}
        />
      </nav>
    </header>
  )
}
