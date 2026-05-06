"use client"

import { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import {
  ArrowUpRight,
  Briefcase,
  Building2,
  Copy,
  Download,
  FileText,
  Github,
  GraduationCap,
  HeartPulse,
  Home,
  Layers,
  Linkedin,
  Mail,
  Rocket,
  ShieldCheck,
  Twitter,
  Wrench,
} from "lucide-react"
import { toast } from "sonner"
import { OPEN_COMMAND_PALETTE } from "@/lib/command-events"
import { navItems } from "@/lib/content/nav"
import { profile } from "@/lib/content/profile"
import { ionatec } from "@/lib/content/ionatec"
import { sauti } from "@/lib/content/sauti"
import { projects } from "@/lib/content/projects"
import { caseStudies, caseStudySlugs } from "@/lib/content/work"

const NAV_ICON = {
  home: Home,
  ionatec: Building2,
  sauti: HeartPulse,
  work: Briefcase,
  skills: Layers,
  experience: Wrench,
  education: GraduationCap,
  about: FileText,
  contact: Mail,
} as const

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((o) => !o)
      }
    }
    const handleOpenEvent = () => setOpen(true)
    document.addEventListener("keydown", handleKey)
    window.addEventListener(OPEN_COMMAND_PALETTE, handleOpenEvent)
    return () => {
      document.removeEventListener("keydown", handleKey)
      window.removeEventListener(OPEN_COMMAND_PALETTE, handleOpenEvent)
    }
  }, [])

  const run = useCallback((fn: () => void) => {
    setOpen(false)
    setTimeout(fn, 50)
  }, [])

  const jumpSection = (id: string) => {
    if (typeof window === "undefined") return
    if (window.location.pathname !== "/") {
      router.push(`/#${id}`)
      return
    }
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      toast.success(`Copied ${profile.email}`)
    } catch {
      toast.error("Could not copy — the email is on the contact section.")
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open command palette"
        className="hidden md:inline-flex fixed bottom-8 left-8 z-40 items-center gap-2 glass-surface-subtle px-3 py-2 rounded-full text-xs font-mono text-muted-foreground hover:text-foreground transition-colors border-border/60"
      >
        <span className="opacity-70">Search ·</span>
        <kbd className="px-1.5 py-0.5 bg-primary/10 border border-primary/20 rounded text-primary text-[10px]">
          ⌘K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search sections, projects, actions…" />
        <CommandList className="max-h-[420px]">
          <CommandEmpty>No results. Press Esc to close.</CommandEmpty>

          <CommandGroup heading="Navigate">
            {navItems.map(({ id, label }) => {
              const Icon = NAV_ICON[id as keyof typeof NAV_ICON] ?? Home
              return (
                <CommandItem
                  key={id}
                  value={`nav ${label}`}
                  onSelect={() => run(() => jumpSection(id))}
                >
                  <Icon className="mr-2 h-4 w-4" aria-hidden="true" />
                  Go to {label}
                </CommandItem>
              )
            })}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Actions">
            <CommandItem value="action copy email" onSelect={() => run(copyEmail)}>
              <Copy className="mr-2 h-4 w-4" />
              Copy email
              <CommandShortcut>e</CommandShortcut>
            </CommandItem>
            <CommandItem
              value="action download resume"
              onSelect={() =>
                run(() => {
                  window.open(profile.resumeUrl, "_blank")
                })
              }
            >
              <Download className="mr-2 h-4 w-4" />
              Download resume
            </CommandItem>
            <CommandItem
              value="action visit ionatec"
              onSelect={() => run(() => window.open(ionatec.url, "_blank"))}
            >
              <Building2 className="mr-2 h-4 w-4" />
              Visit {ionatec.shortName}
              <ArrowUpRight className="ml-auto h-3.5 w-3.5 text-muted-foreground" />
            </CommandItem>
            <CommandItem
              value="action visit sauti health"
              onSelect={() => run(() => window.open(sauti.url, "_blank"))}
            >
              <HeartPulse className="mr-2 h-4 w-4" />
              Visit {sauti.name}
              <ArrowUpRight className="ml-auto h-3.5 w-3.5 text-muted-foreground" />
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Case studies">
            {caseStudySlugs.map((slug) => {
              const cs = caseStudies[slug]
              return (
                <CommandItem
                  key={slug}
                  value={`case ${cs.title}`}
                  onSelect={() => run(() => router.push(`/work/${slug}`))}
                >
                  <Rocket className="mr-2 h-4 w-4" />
                  <div className="flex flex-col">
                    <span>{cs.title}</span>
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                      {cs.status} · {cs.category}
                    </span>
                  </div>
                </CommandItem>
              )
            })}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Projects">
            {projects.map((p) => (
              <CommandItem
                key={p.slug}
                value={`project ${p.title} ${p.stack.join(" ")}`}
                onSelect={() =>
                  run(() => {
                    if (p.caseStudySlug) {
                      router.push(`/work/${p.caseStudySlug}`)
                    } else if (p.liveUrl) {
                      window.open(p.liveUrl, "_blank")
                    } else if (p.repoUrl) {
                      window.open(p.repoUrl, "_blank")
                    } else {
                      jumpSection("work")
                    }
                  })
                }
              >
                <ShieldCheck className="mr-2 h-4 w-4" />
                <div className="flex flex-col min-w-0">
                  <span className="truncate">{p.title}</span>
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                    {p.status} · {p.category}
                  </span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Socials">
            <CommandItem
              value="social github"
              onSelect={() => run(() => window.open(profile.githubUrl, "_blank"))}
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
              <ArrowUpRight className="ml-auto h-3.5 w-3.5 text-muted-foreground" />
            </CommandItem>
            <CommandItem
              value="social linkedin"
              onSelect={() =>
                run(() => window.open(profile.linkedinUrl, "_blank"))
              }
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
              <ArrowUpRight className="ml-auto h-3.5 w-3.5 text-muted-foreground" />
            </CommandItem>
            <CommandItem
              value="social twitter x"
              onSelect={() =>
                run(() => window.open(profile.twitterUrl, "_blank"))
              }
            >
              <Twitter className="mr-2 h-4 w-4" />
              Twitter / X
              <ArrowUpRight className="ml-auto h-3.5 w-3.5 text-muted-foreground" />
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
