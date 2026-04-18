"use client"

import { ArrowUp } from "lucide-react"
import { scrollToTop, useScrollNav } from "@/hooks/use-scroll-nav"

export function BackToTop() {
  const { showBackToTop } = useScrollNav()

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 bg-primary text-primary-foreground p-3 rounded-full shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
        showBackToTop
          ? "opacity-100 scale-100"
          : "opacity-0 scale-0 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  )
}
