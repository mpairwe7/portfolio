import { Card } from "@/components/ui/card"
import { references } from "@/lib/content/references"

export function References() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="section-reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
            References
            <span className="block h-1 w-20 bg-primary mt-4" aria-hidden="true" />
          </h2>
          <p className="text-muted-foreground mb-12 text-sm">
            Available upon request — full contact details provided on inquiry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {references.map((ref, i) => (
            <Card
              key={ref.name}
              className={`section-reveal reveal-delay-${i + 1} p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center`}
            >
              <div
                className={`w-14 h-14 rounded-full bg-gradient-to-br ${ref.gradient} flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 shadow-md`}
                aria-hidden="true"
              >
                {ref.initial}
              </div>
              <h3 className="font-semibold text-sm">{ref.name}</h3>
              <p className="text-xs text-primary mt-1 font-medium">{ref.role}</p>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                {ref.institution}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
