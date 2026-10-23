
import { useEffect, useState } from "react"
import { navigation } from "../data/navigation"

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null)

    if (sections.length === 0) return

    const updateActiveSection = () => {
      const atBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 4

      // Always highlight Contact at the bottom.
      if (atBottom) {
        setActiveSection(sections[sections.length - 1].id)
        return
      }

      const referenceLine = window.innerHeight * 0.35

      const currentSection = [...sections]
        .reverse()
        .find(
          (section) =>
            section.getBoundingClientRect().top <= referenceLine
        )

      // No navigation item is highlighted in the hero.
      setActiveSection(currentSection?.id ?? "")
    }

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    })
    window.addEventListener("resize", updateActiveSection)

    const frameId = window.requestAnimationFrame(updateActiveSection)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener("scroll", updateActiveSection)
      window.removeEventListener("resize", updateActiveSection)
    }
  }, [])

  return activeSection
}
