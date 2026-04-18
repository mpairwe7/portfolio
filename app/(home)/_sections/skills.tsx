"use client"

import { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { BarChart, Cloud, Smartphone } from "lucide-react"
import { GlassCard } from "@/components/glass/glass-card"
import { Reveal } from "@/components/motion/reveal"
import { MotionLift } from "@/components/motion/motion-lift"
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
    <section id="skills" className="py-24 relative" ref={skillsSectionRef}>
      <div className="container mx-auto px-4">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
            My Skills
          </h2>
          <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-10">
            — technical stack & domain expertise
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Reveal delay={0.1}>
            <h3 className="text-lg font-semibold mb-6 font-mono uppercase tracking-wider">
              Technical Proficiency
            </h3>
            <div className="space-y-5">
              {skillBars.map(({ skill, pct }) => (
                <SkillBar
                  key={skill}
                  skill={skill}
                  percentage={skillsAnimated ? pct : 0}
                />
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h3 className="text-lg font-semibold mb-6 font-mono uppercase tracking-wider">
              Domain Expertise
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {domainSkills.map(({ skill, icon: Icon }) => (
                <SkillCard
                  key={skill}
                  skill={skill}
                  icon={<Icon className="h-5 w-5" />}
                />
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4 font-mono uppercase tracking-wider">
                Spoken Languages
              </h3>
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
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {domainCards.map((card, i) => {
            const Icon = DomainIcon[card.iconKey]
            return (
              <Reveal key={card.title} delay={i * 0.1}>
                <MotionLift amount="subtle">
                  <GlassCard
                    variant="card"
                    className={`p-6 border-t-4 ${card.borderColor}`}
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
                    <div className="flex flex-wrap gap-1.5">
                      {card.tags.map((t) => (
                        <Badge
                          key={t}
                          variant="outline"
                          className="text-[10px] font-mono uppercase tracking-wider"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </GlassCard>
                </MotionLift>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
