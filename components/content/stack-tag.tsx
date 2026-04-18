import { Badge } from "@/components/ui/badge"

export function StackTag({ children }: { children: string }) {
  return (
    <Badge
      variant="outline"
      className="text-[10px] font-mono uppercase tracking-wider"
    >
      {children}
    </Badge>
  )
}

export function StackRow({ items }: { items: string[] }) {
  return (
    <div className="not-prose flex flex-wrap gap-1.5 my-4">
      {items.map((t) => (
        <StackTag key={t}>{t}</StackTag>
      ))}
    </div>
  )
}
