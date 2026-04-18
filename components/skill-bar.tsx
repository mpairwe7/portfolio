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
      <div className="flex justify-between mb-2 text-sm">
        <span className="font-medium">{skill}</span>
        <span className="text-muted-foreground tabular-nums font-mono text-xs">
          {percentage}%
        </span>
      </div>
      <Progress value={percentage} className="h-1.5" />
    </div>
  )
}
