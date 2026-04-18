"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Menu, Moon, Sun, X } from "lucide-react"
import { navItems } from "@/lib/content/nav"
import { profile } from "@/lib/content/profile"
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
          ? "bg-background/90 backdrop-blur-md shadow-sm border-b border-border/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <button
          onClick={scrollToTop}
          className="font-bold text-xl text-primary hover:opacity-75 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
          aria-label="Go to top"
        >
          {profile.shortName}
        </button>

        <ul className="hidden md:flex items-center space-x-6" role="list">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => handleNav(id)}
                aria-current={activeSection === id ? "page" : undefined}
                className={`relative text-sm transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm px-1 ${
                  activeSection === id
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                    activeSection === id ? "w-full" : "w-0"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
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
          className="md:hidden bg-background/95 backdrop-blur-md border-t border-border"
        >
          <ul className="flex flex-col py-2" role="list">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => handleNav(id)}
                  aria-current={activeSection === id ? "page" : undefined}
                  className={`w-full text-left px-6 py-3 text-sm transition-colors hover:text-primary hover:bg-muted ${
                    activeSection === id
                      ? "text-primary font-semibold bg-muted/50"
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
