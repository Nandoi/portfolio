import SocialLinks from "../common/SocialLinks"
import NavigationLinks from "../common/NavigationLinks"

export default function MobileHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 px-5 py-4 backdrop-blur lg:hidden">
      <div className="flex items-center justify-between gap-4">
        <a
          href="#home"
          className="font-mono font-semibold"
        >
          Fernando.
        </a>

        <SocialLinks compact />
      </div>

      <nav
        aria-label="Mobile navigation"
        className="mt-3 flex gap-5 overflow-x-auto pb-1"
      >
        <NavigationLinks mobile />
      </nav>
    </header>
  )
}