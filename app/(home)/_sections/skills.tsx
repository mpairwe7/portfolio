"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart, Cloud, Smartphone } from "lucide-react"
import { SkillBar } from "@/components/skill-bar"
import { SkillCard } from "@/components/skill-card"
import {
  domainCards,
  domainSkills,
  skillBars,
} from "@/lib/content/skills"
import { profile } from "@/lib/content/profile"

const DomainIcon = {
  cloud: Cloud,
  brain: BarChart,
  phone: Smartphone,
} as const

export function Skills() {
  const [skillsAnimated, setSkillsAnimated] = useState(false)
  const skillsSectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = skillsSectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsAnimated(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-20" ref={skillsSectionRef}>
      <div className="container mx-auto px-4">
        <div className="section-reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 relative">
            My Skills
            <span className="block h-1 w-20 bg-primary mt-4" aria-hidden="true" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="section-reveal reveal-delay-1">
            <h3 className="text-xl font-semibold mb-6">Technical Proficiency</h3>
            <div className="space-y-5">
              {skillBars.map(({ skill, pct }) => (
                <SkillBar
                  key={skill}
                  skill={skill}
                  percentage={skillsAnimated ? pct : 0}
                />
              ))}
            </div>
          </div>

          <div className="section-reveal reveal-delay-2">
            <h3 className="text-xl font-semibold mb-6">Domain Expertise</h3>
            <div className="grid grid-cols-2 gap-4">
              {domainSkills.map(({ skill, icon: Icon }) => (
                <SkillCard
                  key={skill}
                  skill={skill}
                  icon={<Icon className="h-5 w-5" />}
                />
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Spoken Languages</h3>
              <div className="flex gap-3 flex-wrap">
                {profile.languages.map((lang) => (
                  <Badge
                    key={lang}
                    variant="outline"
                    className="px-4 py-2 text-sm"
                  >
                    {lang}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {domainCards.map((card, i) => {
            const Icon = DomainIcon[card.iconKey]
            return (
              <Card
                key={card.title}
                className={`section-reveal reveal-delay-${i + 1} p-6 hover:shadow-lg transition-shadow border-t-4 ${card.borderColor}`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`${card.iconBg} p-3 rounded-full`}>
                    <Icon className={`h-6 w-6 ${card.iconTint}`} />
                  </div>
                  <h4 className="text-base font-semibold">{card.title}</h4>
                </div>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {card.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((t) => (
                    <Badge key={t} variant="outline" className="text-xs">
                      {t}
                    </Badge>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
