
import type { IconType } from "react-icons"

import {
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaTable,
  FaCode,
} from "react-icons/fa6"

import {
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si"

export type Skill = {
  name: string
  icon: IconType
}

export type SkillCategory = {
  title: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: FaJava },
      { name: "JavaScript", icon: FaJs },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "React", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Database Technologies",
    skills: [
      { name: "Microsoft SQL Server", icon: FaDatabase },
      { name: "DBeaver", icon: FaTable },
    ],
  },
  {
    title: "Development & Version Control",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "VS Code", icon: FaCode },
    ],
  },
]
