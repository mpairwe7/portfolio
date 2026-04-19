import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Download, Github, Globe, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { profile } from "@/lib/content/profile"
import { experiences } from "@/lib/content/experience"
import { education } from "@/lib/content/education"
import { skillStacks } from "@/lib/content/skills"
import { certifications } from "@/lib/content/certifications"
import { references } from "@/lib/content/references"
import { ionatec } from "@/lib/content/ionatec"

export const metadata: Metadata = {
  title: "Resume",
  description: `Printable resume for ${profile.fullName} — DevSecOps, ML, and Agentic AI Engineer.`,
  alternates: { canonical: "/resume" },
}

const [firstName, ...rest] = profile.fullName.split(" ")
const lastName = rest.join(" ")

// Flatten all featured-stack tools into a compact sidebar skill list
const skillList = skillStacks
  .filter((s) => s.featured)
  .flatMap((s) => s.tools)
  .concat(
    skillStacks
      .filter((s) => !s.featured)
      .flatMap((s) => s.tools)
  )

export default function ResumePage() {
  return (
    <div className="resume-root">
      {/* Screen-only toolbar */}
      <div className="resume-toolbar no-print">
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

      <article className="resume-doc">
        {/* ── Sidebar ─────────────────────────────────────────── */}
        <aside className="resume-side">
          <div className="resume-avatar">
            <Image
              src="/images/author1.jpg"
              alt={profile.fullName}
              width={160}
              height={160}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          <div className="resume-name">
            <p>{firstName.toUpperCase()}</p>
            <p>{lastName.toUpperCase()}</p>
          </div>
          <p className="resume-title">
            DEVSECOPS · ML · AGENTIC AI ENGINEER
          </p>

          <SideSection title="About">
            <p className="resume-about">
              DevSecOps engineer and applied ML practitioner. Co-founder of
              Iona Institute of Technology (ionatec.com). By day, CI/CD, cloud,
              and security posture at AIBOS Uganda. Outside: training models,
              building agentic systems on the Claude Agent SDK and LangGraph,
              and instrumenting MCP servers that expose tools to LLMs.
            </p>
          </SideSection>

          <SideSection title="Skills">
            <ul className="resume-skills">
              {skillList.map((s) => (
                <li key={s}>{s.toUpperCase()}</li>
              ))}
            </ul>
          </SideSection>

          <SideSection title="Links">
            <ul className="resume-links">
              <li>
                <Linkedin className="resume-link-icon" aria-hidden="true" />
                <span>
                  <span className="resume-link-label">LinkedIn</span>
                  <a href={profile.linkedinUrl}>{profile.linkedinHandle}</a>
                </span>
              </li>
              <li>
                <Github className="resume-link-icon" aria-hidden="true" />
                <span>
                  <span className="resume-link-label">GitHub</span>
                  <a href={profile.githubUrl}>{profile.githubHandle}</a>
                </span>
              </li>
              <li>
                <Globe className="resume-link-icon" aria-hidden="true" />
                <span>
                  <span className="resume-link-label">Ionatec</span>
                  <a href={ionatec.url}>{ionatec.url.replace(/^https?:\/\//, "")}</a>
                </span>
              </li>
            </ul>
          </SideSection>

          <SideSection title="Languages">
            <ul className="resume-plain">
              {profile.languages.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </SideSection>

          <SideSection title="Personal Details">
            <dl className="resume-personal">
              <div>
                <dt>Date of Birth</dt>
                <dd>{profile.dob}</dd>
              </div>
              <div>
                <dt>Nationality</dt>
                <dd>{profile.nationality}</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{profile.location}</dd>
              </div>
            </dl>
          </SideSection>

          <SideSection title="References">
            <ul className="resume-refs">
              {references.map((r) => (
                <li key={r.name}>
                  <p className="resume-ref-name">{r.name}</p>
                  <p className="resume-ref-role">{r.role}</p>
                  <p className="resume-ref-inst">{r.institution}</p>
                </li>
              ))}
            </ul>
          </SideSection>
        </aside>

        {/* ── Main ─────────────────────────────────────────────── */}
        <main className="resume-main">
          <header className="resume-header">
            <ul className="resume-contact">
              <li>
                <MapPin className="resume-h-icon" aria-hidden="true" />
                {profile.location}
              </li>
              <li>
                <Phone className="resume-h-icon" aria-hidden="true" />
                {profile.phone}
              </li>
              <li>
                <Mail className="resume-h-icon" aria-hidden="true" />
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
            </ul>
          </header>

          <MainSection title="Work Experience">
            <div className="resume-exp-list">
              {experiences.map((exp, i) => (
                <article key={`${exp.company}-${i}`} className="resume-exp">
                  <div className="resume-exp-left">
                    <p className="resume-exp-company">{exp.company}</p>
                    <p className="resume-exp-loc">Kampala</p>
                    <p className="resume-exp-period">{exp.period}</p>
                  </div>
                  <div className="resume-exp-right">
                    <h3 className="resume-exp-role">{exp.role.toUpperCase()}</h3>
                    <ul className="resume-exp-bullets">
                      {exp.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                    <p className="resume-exp-tags">{exp.tags.join(" · ")}</p>
                  </div>
                </article>
              ))}
            </div>
          </MainSection>

          <MainSection title="Education">
            <div className="resume-edu-list">
              {education.map((edu, i) => (
                <article key={`${edu.school}-${i}`} className="resume-exp">
                  <div className="resume-exp-left">
                    <p className="resume-exp-company">{edu.school}</p>
                    <p className="resume-exp-period">{edu.period}</p>
                    {edu.cgpa && <p className="resume-exp-loc">CGPA {edu.cgpa}</p>}
                  </div>
                  <div className="resume-exp-right">
                    <h3 className="resume-exp-role">{edu.degree}</h3>
                    <ul className="resume-exp-bullets">
                      {edu.highlights.map((h, j) => (
                        <li key={j}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </MainSection>

          <MainSection title="Certifications">
            <ul className="resume-certs">
              {certifications.map((c) => (
                <li key={c.name}>
                  <span className="resume-cert-status">{c.status}</span>
                  <span className="resume-cert-name">{c.name}</span>
                  <span className="resume-cert-issuer">— {c.issuer}</span>
                </li>
              ))}
            </ul>
          </MainSection>
        </main>
      </article>
    </div>
  )
}

function SideSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="resume-side-section">
      <h2 className="resume-side-h">{title.toUpperCase()}</h2>
      {children}
    </section>
  )
}

function MainSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="resume-main-section">
      <h2 className="resume-main-h">{title.toUpperCase()}</h2>
      <span className="resume-main-hr" aria-hidden="true" />
      {children}
    </section>
  )
}
