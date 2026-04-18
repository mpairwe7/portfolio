import { GlassCard } from "@/components/glass/glass-card"
import { Reveal } from "@/components/motion/reveal"
import { MotionLift } from "@/components/motion/motion-lift"
import { references } from "@/lib/content/references"

export function References() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
            References
          </h2>
          <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-10">
            — full contact details provided on inquiry
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {references.map((ref, i) => (
            <Reveal key={ref.name} delay={i * 0.08}>
              <MotionLift amount="normal" className="h-full">
                <GlassCard variant="card" className="p-6 h-full text-center">
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${ref.gradient} flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 shadow-lg`}
                    aria-hidden="true"
                  >
                    {ref.initial}
                  </div>
                  <h3 className="font-semibold text-sm">{ref.name}</h3>
                  <p className="text-xs text-primary mt-1 font-medium">
                    {ref.role}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    {ref.institution}
                  </p>
                </GlassCard>
              </MotionLift>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
