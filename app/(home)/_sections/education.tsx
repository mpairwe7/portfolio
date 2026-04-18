import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, GraduationCap } from "lucide-react"
import { education } from "@/lib/content/education"

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="section-reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 relative">
            Education
            <span className="block h-1 w-20 bg-primary mt-4" aria-hidden="true" />
          </h2>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={`${edu.school}-${index}`}
              className="flex gap-5 section-reveal"
            >
              <div className="flex flex-col items-center" aria-hidden="true">
                <div className="bg-primary/10 p-3 rounded-full shrink-0">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                {index < education.length - 1 && (
                  <div className="flex-1 w-px bg-border mt-2" />
                )}
              </div>

              <Card
                className={`flex-1 p-6 mb-4 hover:shadow-lg transition-shadow border-l-4 ${edu.borderColor}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-base font-bold">{edu.degree}</h3>
                    <p className="text-primary font-medium text-sm">
                      {edu.school}
                    </p>
                  </div>
                  <div className="shrink-0 sm:text-right">
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                    {edu.cgpa && (
                      <Badge variant="outline" className="mt-1 text-xs">
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
                        className="h-4 w-4 text-green-500 mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
