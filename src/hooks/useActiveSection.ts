
import { useEffect, useState } from "react"
import { navigation } from "../data/navigation"

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null)

    if (sections.length === 0) return

    const updateActiveSection = () => {
      const referenceLine = window.innerHeight * 0.35

      const currentSection = [...sections]
        .reverse()
        .find(
          (section) =>
            section.getBoundingClientRect().top <= referenceLine
        )

      setActiveSection(currentSection?.id ?? "home")
    }

    const observer = new IntersectionObserver(
      updateActiveSection,
      {
        rootMargin: "-35% 0px -60% 0px",
        threshold: 0,
      }
    )

    sections.forEach((section) => observer.observe(section))

    window.addEventListener("resize", updateActiveSection)

    return () => {
      observer.disconnect()
      window.removeEventListener("resize", updateActiveSection)
    }
  }, [])

  return activeSection
}
