import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  Briefcase,
  Contact,
  Cpu,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Link2,
  Mail,
  MapPin,
  Phone,
  Puzzle,
} from "lucide-react"
import { profile } from "@/lib/content/profile"
import { experiences } from "@/lib/content/experience"
import { education } from "@/lib/content/education"
import { ionatec } from "@/lib/content/ionatec"
import styles from "./minicv.module.css"

const PORTFOLIO_URL = "mpairwelauben.me"
const MINICV_PDF = "/mpairwe-lauben-mini-cv.pdf"
const PHOTO = "/images/mpairwe-lauben.png"

export const metadata: Metadata = {
  title: "Mini CV",
  description: `One-page brief C.V. for ${profile.fullName} — Software Engineering student at Makerere University and DevSecOps engineer. Prepared for the Bank of Uganda Hackathon.`,
  alternates: { canonical: "/minicv" },
}

const [firstName, ...rest] = profile.fullName.split(" ")
const lastName = rest.join(" ")

// Curated, hackathon-tailored subset of the full experience list. Order maps
// to the organizers' stated priorities: security engineering → automated
// workflows → demonstrable digital MVP → rapid mobile prototyping. Bullets are
// trimmed to the two most relevant per role to keep the CV to a single page.
const FEATURED: { company: string; bulletIndexes: number[]; tagCount: number }[] =
  [
    { company: "AIBOS Uganda", bulletIndexes: [0, 2], tagCount: 6 },
    { company: "IONATECH", bulletIndexes: [0, 2], tagCount: 6 },
    { company: "Sauti Health", bulletIndexes: [2, 3], tagCount: 6 },
    { company: "Makerere University", bulletIndexes: [0, 3], tagCount: 5 },
  ]

const featuredExperience = FEATURED.map((f) => {
  const exp = experiences.find((e) => e.company === f.company)!
  return {
    company: exp.company,
    role: exp.role,
    period: exp.period,
    bullets: f.bulletIndexes.map((i) => exp.bullets[i]).filter(Boolean),
    tags: exp.tags.slice(0, f.tagCount),
  }
})

// SE, prior CE degree, and the ICT diploma — compact, no highlight bullets.
const eduEntries = education.slice(0, 3)

// Hackathon-relevant skill groupings — leads with security + automation, the
// two backgrounds the poster explicitly calls out, then rapid-build tooling.
const skillGroups: { label: string; tools: string[] }[] = [
  {
    label: "Security Engineering",
    tools: ["Trivy", "Cosign", "Sigstore / SLSA", "OPA", "Vault", "RBAC", "SBOM"],
  },
  {
    label: "Automated Workflows",
    tools: ["GitHub Actions", "Terraform", "ArgoCD", "Kubernetes", "Docker", "CI/CD"],
  },
  {
    label: "Rapid Prototyping",
    tools: ["FastAPI", "Next.js", "Flutter", "React Native", "Supabase", "Firebase"],
  },
  {
    label: "Data & AI",
    tools: ["Python", "PostgreSQL", "scikit-learn", "LangChain", "LangGraph", "RAG"],
  },
]

export default function MiniCvPage() {
  return (
    <div className={styles.root}>
      {/* Screen-only toolbar — hidden in print / PDF capture */}
      <div className={styles.toolbar}>
        <Link href="/" className={styles.toolbarLink}>
          <ArrowLeft className={styles.toolbarIcon} />
          Back to portfolio
        </Link>
        <Link href={MINICV_PDF} download className={styles.toolbarLink}>
          <Download className={styles.toolbarIcon} />
          PDF version
        </Link>
      </div>

      <article className={styles.doc}>
        {/* ── Sidebar ──────────────────────────────────────────────── */}
        <aside className={styles.sidebar}>
          <h1 className={styles.name}>
            {firstName}
            <br />
            {lastName}
          </h1>
          <p className={styles.headline}>
            Software Engineering Student, Makerere University · DevSecOps &amp;
            Automation Engineer
          </p>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.photo} src={PHOTO} alt={profile.fullName} />

          <ul className={styles.contacts}>
            <li>
              <Mail className={styles.cIcon} aria-hidden="true" />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <Phone className={styles.cIcon} aria-hidden="true" />
              <span>{profile.phone}</span>
            </li>
            <li>
              <MapPin className={styles.cIcon} aria-hidden="true" />
              <span>{profile.location}</span>
            </li>
            <li>
              <Link2 className={styles.cIcon} aria-hidden="true" />
              <a href={`https://${PORTFOLIO_URL}`}>{PORTFOLIO_URL}</a>
            </li>
            <li>
              <Github className={styles.cIcon} aria-hidden="true" />
              <a href={profile.githubUrl}>{profile.githubHandle}</a>
            </li>
            <li>
              <Linkedin className={styles.cIcon} aria-hidden="true" />
              <a href={profile.linkedinUrl}>{profile.linkedinHandle}</a>
            </li>
            <li>
              <Link2 className={styles.cIcon} aria-hidden="true" />
              <a href={ionatec.url}>{ionatec.url.replace(/^https?:\/\//, "")}</a>
            </li>
          </ul>

          <div className={styles.sideBand}>
            <Contact className={styles.sideBandIcon} aria-hidden="true" />
            <span className={styles.sideBandTitle}>PROFILE</span>
          </div>
          <p className={styles.profileText}>
            Current Software Engineering student at Makerere University and a
            working DevSecOps engineer at AIBOS Uganda. I specialise in security
            engineering and automated workflows — securing CI/CD pipelines,
            infrastructure-as-code, and Kubernetes supply chains — and I ship
            production digital solutions fast, from USSD dispatch backends to
            cross-platform mobile apps. A team anchor who makes a build secure,
            scalable, and deployable.
          </p>
        </aside>

        {/* ── Main column ──────────────────────────────────────────── */}
        <main className={styles.main}>
          {/* Experience */}
          <section className={styles.section}>
            <div className={styles.band}>
              <Briefcase className={styles.bandIcon} aria-hidden="true" />
              <span className={styles.bandTitle}>EXPERIENCE</span>
            </div>
            {featuredExperience.map((exp) => (
              <article key={exp.company} className={styles.entry}>
                <p className={styles.entryTitle}>{exp.company}</p>
                <p className={styles.entrySub}>{exp.role}</p>
                <p className={styles.entryPeriod}>{exp.period}</p>
                <ul className={styles.bullets}>
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <p className={styles.tags}>{exp.tags.join(" · ")}</p>
              </article>
            ))}
          </section>

          {/* Education */}
          <section className={styles.section}>
            <div className={styles.band}>
              <GraduationCap className={styles.bandIcon} aria-hidden="true" />
              <span className={styles.bandTitle}>EDUCATION</span>
            </div>
            {eduEntries.map((edu) => (
              <article key={edu.degree} className={styles.entry}>
                <p className={styles.entryTitle}>{edu.degree}</p>
                <p className={styles.entrySub}>{edu.school}</p>
                <p className={styles.entryPeriod}>
                  {edu.period}
                  {edu.cgpa ? ` · CGPA ${edu.cgpa}` : ""}
                </p>
              </article>
            ))}
          </section>

          {/* Technical Skills */}
          <section className={styles.section}>
            <div className={styles.band}>
              <Cpu className={styles.bandIcon} aria-hidden="true" />
              <span className={styles.bandTitle}>TECHNICAL SKILLS</span>
            </div>
            {skillGroups.map((g) => (
              <div key={g.label} className={styles.skillGroup}>
                <p className={styles.skillLabel}>{g.label}</p>
                <p className={styles.skillTools}>{g.tools.join(", ")}</p>
              </div>
            ))}
          </section>

          {/* Availability */}
          <section className={styles.section}>
            <div className={styles.band}>
              <Puzzle className={styles.bandIcon} aria-hidden="true" />
              <span className={styles.bandTitle}>AVAILABILITY</span>
            </div>
            <p className={styles.availTitle}>Participation Eligibility</p>
            <p className={styles.availMeta}>
              10–13 July 2026 · in person · Kampala
            </p>
            <p className={styles.availText}>
              Eligible as a current student at Makerere University, and ready to
              anchor an assigned team of 3–6 with a demonstrable digital build.
            </p>
          </section>
        </main>
      </article>
    </div>
  )
}
