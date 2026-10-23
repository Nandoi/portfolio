import SocialLinks from "../common/SocialLinks"
import NavigationLinks from "../common/NavigationLinks"

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 hidden w-64 flex-col justify-between overflow-y-auto border-r border-neutral-200 bg-white px-8 py-10 lg:flex">
      <div>
        <a
          href="#home"
          className="font-mono text-base font-semibold tracking-tight"
        >
          Fernando III Vidal
          <span className="text-neutral-400">.</span>
        </a>

        <p className="mt-3 text-xs text-neutral-400">
          Student / Developer / Creator
        </p>

        {/* Social profiles */}
        <div className="mt-10 border-b border-neutral-200 pb-8">
          <SocialLinks />
        </div>

        {/* Internal navigation */}
        <nav
          aria-label="Main navigation"
          className="mt-10 flex flex-col gap-5"
        >
          <NavigationLinks />
        </nav>
      </div>

      {/* Sidebar footer */}
      <div className="border-t border-neutral-200 pt-6">
        <p className="text-xs leading-6 text-neutral-500">
          Learning. Building. Creating.
        </p>

        <p className="mt-3 font-mono text-xs text-neutral-400">
          © {new Date().getFullYear()} Fernando
        </p>
      </div>
    </aside>
  )
}