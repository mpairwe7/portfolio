import { Progress } from "@/components/ui/progress"

export function SkillBar({
  skill,
  percentage,
}: {
  skill: string
  percentage: number
}) {
  return (
    <div>
      <div className="flex justify-between mb-1.5 text-sm">
        <span className="font-medium">{skill}</span>
        <span className="text-muted-foreground tabular-nums">{percentage}%</span>
      </div>
      <Progress value={percentage} className="h-2" />
    </div>
  )
}
