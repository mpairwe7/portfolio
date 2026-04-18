import type React from "react"
import { GlassCard } from "@/components/glass/glass-card"

export function SkillCard({
  skill,
  icon,
}: {
  skill: string
  icon: React.ReactNode
}) {
  return (
    <GlassCard
      variant="card"
      intensity="low"
      className="p-4 flex items-center gap-3 cursor-default"
    >
      <div
        className="bg-primary/10 p-2.5 rounded-full text-primary shrink-0"
        aria-hidden="true"
      >
        {icon}
      </div>
      <span className="font-medium text-sm">{skill}</span>
    </GlassCard>
  )
}
