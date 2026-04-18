"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Menu, Moon, Search, Sun, X } from "lucide-react"
import { navItems } from "@/lib/content/nav"
import { profile } from "@/lib/content/profile"
import { openCommandPalette } from "@/lib/command-events"
import {
  scrollToSection,
  scrollToTop,
  useScrollNav,
} from "@/hooks/use-scroll-nav"

export function Nav() {
  const { scrolled, activeSection } = useScrollNav()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleNav = (id: string) => {
    scrollToSection(id)
    setMobileMenuOpen(false)
  }

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-surface-subtle py-3 border-b-0"
          : "bg-transparent py-5 border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <button
          onClick={scrollToTop}
          className="font-bold text-xl font-mono text-primary hover:opacity-75 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm tracking-tight"
          aria-label="Go to top"
        >
          {profile.shortName}
        </button>

        <ul className="hidden md:flex items-center space-x-1" role="list">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => handleNav(id)}
                aria-current={activeSection === id ? "page" : undefined}
                className={`relative text-sm px-3 py-1.5 rounded-full transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  activeSection === id
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {label}
                {activeSection === id && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 rounded-full bg-primary/10 border border-primary/20"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={openCommandPalette}
            aria-label="Open command palette"
            className="relative"
          >
            <Search className="h-5 w-5" />
          </Button>
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label={
                theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen((o) => !o)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-nav"
          className="md:hidden glass-surface-strong border-t border-border/40"
        >
          <ul className="flex flex-col py-2" role="list">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => handleNav(id)}
                  aria-current={activeSection === id ? "page" : undefined}
                  className={`w-full text-left px-6 py-3 text-sm transition-colors hover:text-primary hover:bg-primary/5 ${
                    activeSection === id
                      ? "text-primary font-semibold bg-primary/5"
                      : "text-muted-foreground"
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
