import { navigation } from "../../data/navigation"

type NavigationLinksProps = {
  mobile?: boolean
}

export default function NavigationLinks({
  mobile = false,
}: NavigationLinksProps) {
  if (mobile) {
    return (
      <>
        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="shrink-0 text-xs text-neutral-500"
          >
            {item.label}
          </a>
        ))}
      </>
    )
  }

  return (
    <>
      {navigation.map((item, index) => (
        <a
          key={item.href}
          href={item.href}
          className="group flex items-center gap-3 font-mono text-sm text-neutral-500 transition hover:text-black"
        >
          <span className="text-xs text-neutral-300 group-hover:text-black">
            0{index + 1}
          </span>

          {item.label}
        </a>
      ))}
    </>
  )
}