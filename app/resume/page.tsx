import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Download, Mail, MapPin, Phone } from "lucide-react"
import { profile } from "@/lib/content/profile"
import { experiences } from "@/lib/content/experience"
import { education } from "@/lib/content/education"
import { skillStacks } from "@/lib/content/skills"
import { certifications } from "@/lib/content/certifications"
import { projects } from "@/lib/content/projects"
import { ionatec } from "@/lib/content/ionatec"

export const metadata: Metadata = {
  title: "Resume",
  description: `Printable resume for ${profile.fullName} — DevSecOps, ML, and Agentic AI Engineer.`,
}

const featured = projects.filter((p) => p.featured)

export default function ResumePage() {
  return (
    <main className="relative z-10 pt-24 pb-24 resume-page">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="flex items-center justify-between mb-10 no-print">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-3 w-3" />
            Back to portfolio
          </Link>
          <Link
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary hover:text-primary/80 transition-colors"
          >
            <Download className="h-3 w-3" />
            PDF version
          </Link>
        </div>

        <header className="mb-10 pb-6 border-b border-border">
          <h1 className="text-4xl font-bold tracking-tight mb-2">
            {profile.fullName}
          </h1>
          <p className="text-base text-muted-foreground mb-4">{profile.title}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground font-mono">
            <span className="inline-flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-primary transition-colors"
              >
                {profile.email}
              </a>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {profile.phone}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {profile.location}
            </span>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground font-mono mt-3">
            <a href={profile.linkedinUrl} className="hover:text-primary">
              linkedin.com/in/{profile.linkedinHandle}
            </a>
            <a href={profile.githubUrl} className="hover:text-primary">
              {profile.githubHandle}
            </a>
            <a href={ionatec.url} className="hover:text-primary">
              {ionatec.url}
            </a>
          </div>
        </header>

        <Section title="Summary">
          <p className="text-sm leading-relaxed text-foreground/90">
            {profile.aboutParagraphs[0]
              .replace(/\*\*/g, "")
              .replace(/&apos;/g, "'")}
          </p>
          <p className="text-sm leading-relaxed text-foreground/90 mt-2">
            {profile.aboutParagraphs[1].replace(/&apos;/g, "'")}
          </p>
        </Section>

        <Section title="Stacks">
          <div className="space-y-2 text-sm">
            {skillStacks.map((stack) => (
              <div key={stack.key}>
                <span className="font-semibold text-foreground">
                  {stack.title}:
                </span>{" "}
                <span className="text-muted-foreground">
                  {stack.tools.join(" · ")}
                </span>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Experience">
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div key={i}>
                <div className="flex items-baseline justify-between gap-4 mb-1">
                  <h3 className="font-semibold">
                    {exp.role} · {exp.company}
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground shrink-0">
                    {exp.period}
                  </span>
                </div>
                <ul className="list-disc pl-5 space-y-0.5 text-sm text-muted-foreground">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="leading-relaxed">
                      {b}
                    </li>
                  ))}
                </ul>
                <p className="text-[11px] font-mono text-muted-foreground/80 mt-1.5 uppercase tracking-wider">
                  {exp.tags.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Flagship Projects">
          <div className="space-y-4">
            {featured.map((p) => (
              <div key={p.slug}>
                <div className="flex items-baseline justify-between gap-4 mb-0.5">
                  <h3 className="font-semibold text-sm">{p.title}</h3>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-primary">
                    {p.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {p.summary}
                </p>
                <p className="text-[11px] font-mono text-muted-foreground/80 mt-1 uppercase tracking-wider">
                  {p.stack.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Education">
          <div className="space-y-3 text-sm">
            {education.map((edu, i) => (
              <div key={i}>
                <div className="flex items-baseline justify-between gap-4">
                  <div>
                    <p className="font-semibold">{edu.degree}</p>
                    <p className="text-muted-foreground">{edu.school}</p>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground shrink-0">
                    {edu.period}
                    {edu.cgpa && ` · CGPA ${edu.cgpa}`}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Certifications">
          <ul className="space-y-1.5 text-sm">
            {certifications.map((c) => (
              <li key={c.name} className="flex items-baseline gap-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-primary shrink-0">
                  {c.status}
                </span>
                <span className="font-medium">{c.name}</span>
                <span className="text-muted-foreground">— {c.issuer}</span>
              </li>
            ))}
          </ul>
        </Section>

        <footer className="mt-10 pt-6 border-t border-border text-xs text-muted-foreground font-mono text-center no-print">
          References available on request.
        </footer>
      </div>
    </main>
  )
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mb-8 resume-section">
      <h2 className="text-[11px] font-mono uppercase tracking-widest text-primary mb-3 pb-1 border-b border-border">
        {title}
      </h2>
      {children}
    </section>
  )
}
