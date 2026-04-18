import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, ChevronRight } from "lucide-react"
import { experiences } from "@/lib/content/experience"

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="section-reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 relative">
            Work Experience
            <span className="block h-1 w-20 bg-primary mt-4" aria-hidden="true" />
          </h2>
        </div>

        <div className="relative">
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-px hidden md:block"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${index}`}
                className={`section-reveal relative flex flex-col md:flex-row gap-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 top-6"
                  aria-hidden="true"
                />

                <div
                  className={`hidden md:flex w-1/2 items-start pt-5 ${
                    index % 2 === 0
                      ? "justify-end pr-10 text-right"
                      : "justify-start pl-10"
                  }`}
                >
                  <div>
                    <p className="text-sm font-semibold text-primary">
                      {exp.period}
                    </p>
                    <Badge variant="secondary" className="mt-1 text-xs">
                      {exp.type}
                    </Badge>
                  </div>
                </div>

                <div
                  className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}
                >
                  <Card
                    className={`p-6 hover:shadow-lg transition-all duration-300 border-l-4 ${exp.borderColor}`}
                  >
                    <div className="mb-3">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="text-lg font-bold">{exp.role}</h3>
                          <p className="text-primary font-medium text-sm">
                            {exp.company}
                          </p>
                        </div>
                        <Briefcase
                          className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 md:hidden">
                        {exp.period} · {exp.type}
                      </p>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {exp.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <ChevronRight
                            className="h-4 w-4 text-primary mt-0.5 shrink-0"
                            aria-hidden="true"
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
