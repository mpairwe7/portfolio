import type { LucideIcon } from "lucide-react"

export type ProjectCategory =
  | "agentic"
  | "devsecops"
  | "mlops"
  | "cloud"
  | "iot"
  | "mobile"
  | "web"
  | "desktop"

export type ProjectStatus = "shipped" | "in-progress" | "archived"

export type Project = {
  slug: string
  title: string
  summary: string
  image: string
  category: ProjectCategory
  stack: string[]
  metrics?: { label: string; value: string }[]
  liveUrl?: string
  repoUrl?: string
  status: ProjectStatus
  featured: boolean
  caseStudySlug?: string
}

export type ProjectTab = {
  value: "all" | ProjectCategory
  label: string
}

export type CaseStudy = {
  slug: string
  title: string
  subtitle: string
  summary: string
  coverImage: string
  category: ProjectCategory
  stack: string[]
  metrics?: { label: string; value: string }[]
  status: ProjectStatus
  liveUrl?: string
  repoUrl?: string
  publishedAt: string
  readingMinutes: number
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
