"use client"

import { useEffect, useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const SHORTCUTS: { keys: string[]; label: string }[] = [
  { keys: ["⌘", "K"], label: "Open command palette" },
  { keys: ["Ctrl", "K"], label: "Open command palette · Windows / Linux" },
  { keys: ["?"], label: "Show this overlay" },
  { keys: ["Esc"], label: "Close overlay or palette" },
  { keys: ["t"], label: "Toggle theme (in command palette)" },
]

export function ShortcutOverlay() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null
      const isTyping =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable
      if (isTyping) return
      if (e.key === "?") {
        e.preventDefault()
        setOpen((o) => !o)
      }
    }
    document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="glass-surface-strong max-w-md border-border/60">
        <div className="space-y-1">
          <p className="text-[10px] font-mono uppercase tracking-widest text-primary mb-1">
            keyboard shortcuts
          </p>
          <h2 className="text-lg font-semibold mb-4">Quick keys</h2>
          <ul className="space-y-3">
            {SHORTCUTS.map(({ keys, label }) => (
              <li
                key={label}
                className="flex items-center justify-between gap-4 text-sm"
              >
                <span className="text-muted-foreground">{label}</span>
                <span className="flex items-center gap-1">
                  {keys.map((k) => (
                    <kbd
                      key={k}
                      className="px-2 py-0.5 rounded border border-border bg-background/50 font-mono text-xs text-foreground"
                    >
                      {k}
                    </kbd>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  )
}
