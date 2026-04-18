"use client"

import { useEffect, useState } from "react"
import { sectionIds } from "@/lib/content/nav"

export function useScrollNav() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      setShowBackToTop(window.scrollY > 700)
      const current = sectionIds.find((id) => {
        const el = document.getElementById(id)
        if (!el) return false
        const { top, bottom } = el.getBoundingClientRect()
        return top <= 100 && bottom >= 100
      })
      if (current) setActiveSection(current)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return { scrolled, activeSection, showBackToTop }
}

export function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: "smooth" })
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" })
}
