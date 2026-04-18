import { cn } from "@/lib/utils"

type HairlineProps = {
  orientation?: "horizontal" | "vertical"
  className?: string
}

export function Hairline({
  orientation = "horizontal",
  className,
}: HairlineProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none block",
        orientation === "horizontal"
          ? "h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent dark:via-white/10"
          : "w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent dark:via-white/10",
        className
      )}
    />
  )
}
