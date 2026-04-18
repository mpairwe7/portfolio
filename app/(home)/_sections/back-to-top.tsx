"use client"

import { ArrowUp } from "lucide-react"
import { scrollToTop, useScrollNav } from "@/hooks/use-scroll-nav"

export function BackToTop() {
  const { showBackToTop } = useScrollNav()

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-40 bg-primary text-primary-foreground p-3 rounded-full shadow-[0_8px_32px_-8px_hsl(var(--primary)/0.6)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
        showBackToTop
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-90 translate-y-2 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  )
}
