"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { typingRoles } from "@/lib/content/hero"
import { profile } from "@/lib/content/profile"
import { scrollToSection } from "@/hooks/use-scroll-nav"

export function Hero() {
  const [typingIndex, setTypingIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setDisplayedText(typingRoles[0])
      return
    }
    const currentRole = typingRoles[typingIndex]
    let timeout: ReturnType<typeof setTimeout>
    if (!isDeleting) {
      if (displayedText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1))
        }, 80)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2200)
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, 45)
      } else {
        setIsDeleting(false)
        setTypingIndex((prev) => (prev + 1) % typingRoles.length)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, typingIndex])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 to-background" />
        <div className="absolute inset-0 bg-[url('/images/header.jpg')] bg-cover bg-center bg-fixed opacity-10" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex lg:hidden justify-center mb-6">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-primary/30 shadow-lg">
                <Image
                  src="/images/lauben.jpg"
                  alt={`${profile.fullName} — profile photo`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <p className="text-primary font-medium mb-2 animate-fade-in">
              {profile.greeting}
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in tracking-tight">
              {profile.fullName}
            </h1>

            <div
              className="text-xl md:text-2xl mb-6 animate-fade-in-delay min-h-[2rem]"
              aria-live="polite"
              aria-label={`I'm a ${displayedText}`}
            >
              <span className="text-muted-foreground">I'm a </span>
              <span className="text-primary font-semibold">
                {displayedText}
                <span
                  className="inline-block w-[2px] h-5 bg-primary ml-0.5 animate-pulse"
                  aria-hidden="true"
                />
              </span>
            </div>

            <p className="text-muted-foreground mb-8 max-w-lg text-base animate-fade-in-delay leading-relaxed">
              {profile.heroTagline}
            </p>

            <div className="flex flex-wrap gap-3 animate-fade-in-delay-2">
              <Button onClick={() => scrollToSection("contact")} size="lg">
                Get in touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("work")}
              >
                View my work
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <Link href={profile.resumeUrl} download>
                  <Download className="h-4 w-4 mr-2" aria-hidden="true" />
                  Resume
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12 animate-fade-in-delay-2">
              {profile.heroStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p
                    className="text-3xl font-bold text-primary"
                    aria-label={stat.value}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex justify-center" aria-hidden="true">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/30 to-primary/5 blur-2xl" />
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <Image
                  src="/images/lauben.jpg"
                  alt={profile.fullName}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-background border border-border rounded-xl px-3 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-medium">
                    {profile.availability}
                  </span>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-xl px-3 py-2 shadow-lg text-xs font-medium">
                {profile.locationBadge}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
