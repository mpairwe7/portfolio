import type { ReactNode } from "react"

export function Timeline({ children }: { children: ReactNode }) {
  return (
    <ol className="not-prose my-8 space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-primary/40 before:via-primary/20 before:to-transparent">
      {children}
    </ol>
  )
}

export function Phase({
  label,
  title,
  children,
}: {
  label: string
  title: string
  children: ReactNode
}) {
  return (
    <li className="relative pl-10">
      <span
        aria-hidden="true"
        className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center font-mono text-[10px] text-primary"
      >
        ●
      </span>
      <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-1">
        {label}
      </p>
      <h4 className="font-semibold mb-2">{title}</h4>
      <div className="text-sm text-muted-foreground leading-relaxed [&_p]:my-0 [&_p+p]:mt-2">
        {children}
      </div>
    </li>
  )
}
