"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { typingRoles } from "@/lib/content/hero"
import { profile } from "@/lib/content/profile"
import { scrollToSection } from "@/hooks/use-scroll-nav"
import { OrbField } from "@/components/bg/orb-field"
import { GridMesh } from "@/components/bg/grid-mesh"

export function Hero() {
  const [typingIndex, setTypingIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const reduce = useReducedMotion()

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
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <OrbField density="normal" />
      <GridMesh variant="dots" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex lg:hidden justify-center mb-6">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border border-primary/30 shadow-lg">
                <Image
                  src="/images/lauben.jpg"
                  alt={`${profile.fullName} — profile photo`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <p className="text-primary font-mono text-xs tracking-widest uppercase mb-4">
              {profile.greeting}
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-5 tracking-tight leading-[0.95]">
              {profile.fullName}
            </h1>

            <div
              className="text-xl md:text-2xl mb-7 min-h-[2rem]"
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

            <p className="text-muted-foreground mb-8 max-w-lg text-base leading-relaxed">
              {profile.heroTagline}
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="shadow-[0_8px_32px_-12px_hsl(var(--primary)/0.6)]"
              >
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

            <div className="grid grid-cols-3 gap-6 mt-12 max-w-md">
              {profile.heroStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.6 + i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <p
                    className="text-3xl font-mono font-semibold text-primary tabular-nums"
                    aria-label={stat.value}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 font-mono uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="hidden lg:flex justify-center"
            aria-hidden="true"
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-3xl" />
              <div className="relative w-80 h-80 rounded-full overflow-hidden border border-primary/20 shadow-2xl">
                <Image
                  src="/images/lauben.jpg"
                  alt={profile.fullName}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -left-4 glass-surface rounded-xl px-3 py-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_hsl(142_76%_60%)]" />
                  <span className="text-xs font-medium font-mono">
                    {profile.availability}
                  </span>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-xl px-3 py-2 shadow-lg text-xs font-medium font-mono">
                {profile.locationBadge}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
