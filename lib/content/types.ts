import type { LucideIcon } from "lucide-react"

export type ProjectCategory =
  | "cloud"
  | "iot"
  | "ml"
  | "mobile"
  | "web"
  | "desktop"

export type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  categories: ProjectCategory[]
  link?: string
  github?: string
}

export type ProjectTab = {
  value: "all" | ProjectCategory
  label: string
}

export type SkillBar = {
  skill: string
  pct: number
}

export type DomainSkill = {
  skill: string
  icon: LucideIcon
}

export type DomainCard = {
  iconKey: "cloud" | "brain" | "phone"
  iconTint: string
  iconBg: string
  borderColor: string
  title: string
  desc: string
  tags: string[]
}

export type Experience = {
  company: string
  role: string
  period: string
  type: "Full-time" | "Part-time" | "Internship" | "Contract"
  borderColor: string
  bullets: string[]
  tags: string[]
}

export type EducationEntry = {
  school: string
  degree: string
  period: string
  cgpa: string
  borderColor: string
  highlights: string[]
}

export type Reference = {
  name: string
  role: string
  institution: string
  initial: string
  gradient: string
}

export type Client = {
  src: string
  alt: string
}

export type NavItem = {
  id: string
  label: string
}

export type SocialLink = {
  href: string
  icon: LucideIcon
  label: string
}

export type ContactLink = {
  iconKey: "mail" | "phone" | "map" | "linkedin" | "github"
  label: string
  value: string
  href: string | null
}
