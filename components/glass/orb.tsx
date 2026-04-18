import { cn } from "@/lib/utils"

type OrbColor = "amber" | "ember" | "shadow" | "gold"
type OrbSize = "sm" | "md" | "lg" | "xl"

type OrbProps = {
  color?: OrbColor
  size?: OrbSize
  className?: string
  speed?: "slow" | "normal" | "fast"
}

const colorToGradient: Record<OrbColor, string> = {
  amber:
    "radial-gradient(closest-side, hsl(38 95% 60% / 0.35), hsl(38 95% 60% / 0) 70%)",
  ember:
    "radial-gradient(closest-side, hsl(18 80% 50% / 0.25), hsl(18 80% 50% / 0) 70%)",
  gold:
    "radial-gradient(closest-side, hsl(45 90% 55% / 0.22), hsl(45 90% 55% / 0) 70%)",
  shadow:
    "radial-gradient(closest-side, hsl(260 40% 30% / 0.2), hsl(260 40% 30% / 0) 70%)",
}

const sizeClass: Record<OrbSize, string> = {
  sm: "w-64 h-64",
  md: "w-[28rem] h-[28rem]",
  lg: "w-[40rem] h-[40rem]",
  xl: "w-[56rem] h-[56rem]",
}

const speedClass = {
  slow: "animate-orb-drift-slow",
  normal: "animate-orb-drift",
  fast: "animate-orb-drift-fast",
} as const

export function Orb({
  color = "amber",
  size = "lg",
  speed = "normal",
  className,
}: OrbProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl opacity-80",
        sizeClass[size],
        speedClass[speed],
        className
      )}
      style={{ backgroundImage: colorToGradient[color] }}
    />
  )
}
