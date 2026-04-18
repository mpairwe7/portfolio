import Link from "next/link"
import { ArrowUpRight, Building2, Rocket } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { GlassCard } from "@/components/glass/glass-card"
import { Reveal } from "@/components/motion/reveal"
import { ionatec } from "@/lib/content/ionatec"

export function Ionatec() {
  return (
    <section id="ionatec" className="py-24 relative">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="flex items-baseline gap-3 mb-3">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Ionatec
            </h2>
            <span className="text-sm font-mono text-muted-foreground">
              /ai·oʊ·nə·tɛk/
            </span>
          </div>
          <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-10">
            — my startup · co-founded
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <GlassCard variant="hero" className="p-8 md:p-12 relative overflow-hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-16 w-96 h-96 rounded-full blur-3xl opacity-60"
              style={{
                backgroundImage:
                  "radial-gradient(closest-side, hsl(38 95% 60% / 0.35), transparent 70%)",
              }}
            />

            <div className="relative grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
              <div className="md:col-span-3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 border border-primary/30 p-3 rounded-xl">
                    <Building2 className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{ionatec.name}</h3>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mt-0.5">
                      {ionatec.role}
                    </p>
                  </div>
                </div>

                <p className="text-lg md:text-xl leading-relaxed mb-5 text-foreground/90">
                  {ionatec.tagline}
                </p>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  {ionatec.mission}
                </p>

                <p className="text-sm text-muted-foreground italic mb-6 border-l-2 border-primary/30 pl-4">
                  {ionatec.founderLine}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href={ionatec.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Visit {ionatec.shortName}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                  <div className="flex items-center gap-2 glass-surface-subtle px-3 py-1.5 rounded-full">
                    <Rocket className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                    <span className="text-xs font-mono">{ionatec.status}</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
                  What we ship
                </h4>
                <ul className="space-y-2 mb-6">
                  {ionatec.products.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2 text-sm text-foreground/90"
                    >
                      <span
                        className="text-primary mt-1 select-none"
                        aria-hidden="true"
                      >
                        ▸
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>

                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
                  Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {ionatec.stack.map((s) => (
                    <Badge
                      key={s}
                      variant="outline"
                      className="text-[10px] font-mono uppercase tracking-wider border-primary/20 bg-primary/5"
                    >
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  )
}
