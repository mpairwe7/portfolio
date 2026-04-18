import { Award, GraduationCap, ShieldCheck } from "lucide-react"
import { GlassCard } from "@/components/glass/glass-card"
import { Reveal } from "@/components/motion/reveal"
import { certifications } from "@/lib/content/certifications"
import { cn } from "@/lib/utils"

const STATUS_ICON = {
  earned: ShieldCheck,
  planned: GraduationCap,
  expired: Award,
} as const

const STATUS_STYLES = {
  earned: "border-green-500/25 text-green-400 bg-green-500/5",
  planned: "border-primary/25 text-primary bg-primary/5",
  expired: "border-muted text-muted-foreground bg-muted/20",
} as const

const STATUS_LABEL = {
  earned: "earned",
  planned: "studying",
  expired: "expired",
} as const

export function Certifications() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
            Certifications
          </h2>
          <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-10">
            — earned · studying · on the roadmap
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => {
            const Icon = STATUS_ICON[cert.status]
            return (
              <Reveal key={cert.name} delay={i * 0.05}>
                <GlassCard variant="card" intensity="low" className="p-5 h-full">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 border border-primary/20 p-2.5 rounded-xl shrink-0">
                      <Icon
                        className="h-5 w-5 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={cn(
                            "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-widest border",
                            STATUS_STYLES[cert.status]
                          )}
                        >
                          {STATUS_LABEL[cert.status]}
                        </span>
                        {cert.year && (
                          <span className="text-[10px] font-mono text-muted-foreground">
                            {cert.year}
                          </span>
                        )}
                        {cert.code && (
                          <span className="text-[10px] font-mono text-muted-foreground">
                            · {cert.code}
                          </span>
                        )}
                      </div>
                      <h3 className="font-semibold text-sm leading-snug">
                        {cert.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.2}>
          <p className="text-xs text-muted-foreground mt-8 font-mono">
            Certifications added as they&apos;re earned. Most training happens
            in-work; CNCF / AWS exams scheduled across 2026.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
