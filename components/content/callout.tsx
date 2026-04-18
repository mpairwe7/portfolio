import type { ReactNode } from "react"
import { AlertTriangle, Hammer, Info, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

type Tone = "info" | "warn" | "success" | "building"

const TONE_STYLES: Record<Tone, string> = {
  info: "border-blue-500/30 bg-blue-500/5 text-blue-200",
  warn: "border-amber-500/40 bg-amber-500/5 text-amber-200",
  success: "border-green-500/30 bg-green-500/5 text-green-200",
  building: "border-primary/40 bg-primary/5 text-primary",
}

const TONE_ICON: Record<Tone, typeof Info> = {
  info: Info,
  warn: AlertTriangle,
  success: Sparkles,
  building: Hammer,
}

export function Callout({
  tone = "info",
  title,
  children,
}: {
  tone?: Tone
  title?: string
  children: ReactNode
}) {
  const Icon = TONE_ICON[tone]
  return (
    <aside
      className={cn(
        "not-prose my-6 rounded-2xl border px-5 py-4 glass-surface-subtle",
        TONE_STYLES[tone]
      )}
    >
      <div className="flex items-start gap-3">
        <Icon className="h-5 w-5 shrink-0 mt-0.5" aria-hidden="true" />
        <div className="flex-1">
          {title && (
            <p className="font-mono text-[11px] uppercase tracking-widest font-semibold mb-1">
              {title}
            </p>
          )}
          <div className="text-sm text-foreground/90 [&_p]:my-0 [&_p+p]:mt-2 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </aside>
  )
}
