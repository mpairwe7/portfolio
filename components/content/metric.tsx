import { GlassCard } from "@/components/glass/glass-card"

export function Metric({
  label,
  value,
  sub,
}: {
  label: string
  value: string
  sub?: string
}) {
  return (
    <GlassCard variant="card" intensity="low" className="p-5">
      <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
      <p className="text-2xl font-mono font-semibold text-primary tabular-nums mt-1">
        {value}
      </p>
      {sub && (
        <p className="text-xs text-muted-foreground mt-1 font-mono">{sub}</p>
      )}
    </GlassCard>
  )
}

export function MetricsGrid({
  items,
}: {
  items: { label: string; value: string; sub?: string }[]
}) {
  return (
    <div className="not-prose grid grid-cols-2 md:grid-cols-4 gap-3 my-8">
      {items.map((m) => (
        <Metric key={m.label} {...m} />
      ))}
    </div>
  )
}
