import type { NavItem } from "./types"

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
]

export const sectionIds = navItems.map((n) => n.id)
