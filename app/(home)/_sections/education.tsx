import { Badge } from "@/components/ui/badge"
import { CheckCircle, GraduationCap } from "lucide-react"
import { GlassCard } from "@/components/glass/glass-card"
import { Reveal } from "@/components/motion/reveal"
import { education } from "@/lib/content/education"

export function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-4">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
            Education
          </h2>
          <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-10">
            — academic trajectory
          </p>
        </Reveal>

        <div className="space-y-4">
          {education.map((edu, index) => (
            <Reveal key={`${edu.school}-${index}`} delay={0.05}>
              <div className="flex gap-5">
                <div className="flex flex-col items-center" aria-hidden="true">
                  <div className="bg-primary/10 p-3 rounded-full shrink-0 border border-primary/20">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  {index < education.length - 1 && (
                    <div className="flex-1 w-px bg-gradient-to-b from-primary/20 to-transparent mt-2" />
                  )}
                </div>

                <GlassCard
                  variant="card"
                  className={`flex-1 p-6 mb-4 border-l-4 ${edu.borderColor}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-base font-bold">{edu.degree}</h3>
                      <p className="text-primary font-medium text-sm">
                        {edu.school}
                      </p>
                    </div>
                    <div className="shrink-0 sm:text-right">
                      <p className="text-sm text-muted-foreground font-mono">
                        {edu.period}
                      </p>
                      {edu.cgpa && (
                        <Badge
                          variant="outline"
                          className="mt-1 text-[10px] font-mono uppercase tracking-wider"
                        >
                          CGPA {edu.cgpa}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <ul className="space-y-1">
                    {edu.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle
                          className="h-4 w-4 text-primary/70 mt-0.5 shrink-0"
                          aria-hidden="true"
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
