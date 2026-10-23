
import { navigation } from "../../data/navigation"

type NavigationLinksProps = {
  mobile?: boolean
  activeSection: string
}

export default function NavigationLinks({
  mobile = false,
  activeSection,
}: NavigationLinksProps) {
  return (
    <>
      {navigation.map((item, index) => {
        const isActive = item.href === `#${activeSection}`

        if (mobile) {
          return (
            <a
              key={item.href}
              href={item.href}
              aria-current={isActive ? "location" : undefined}
              className={`shrink-0 border-b-2 pb-1 text-xs transition-colors ${
                isActive
                  ? "border-neutral-900 font-semibold text-neutral-900"
                  : "border-transparent text-neutral-500 hover:text-neutral-900"
              }`}
            >
              {item.label}
            </a>
          )
        }

        return (
          <a
            key={item.href}
            href={item.href}
            aria-current={isActive ? "location" : undefined}
            className={`group flex items-center gap-3 rounded-md px-2 py-2 font-mono text-sm transition-colors ${
              isActive
                ? "bg-neutral-100 font-semibold text-neutral-900"
                : "text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900"
            }`}
          >
            <span
              className={`text-xs ${
                isActive
                  ? "text-neutral-900"
                  : "text-neutral-300 group-hover:text-neutral-700"
              }`}
            >
              0{index + 1}
            </span>

            <span>{item.label}</span>

            {isActive && (
              <span
                aria-hidden="true"
                className="ml-auto text-xs text-neutral-900"
              >
                ●
              </span>
            )}
          </a>
        )
      })}
    </>
  )
}
