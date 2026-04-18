import { cn } from "@/lib/utils"

type GridMeshProps = {
  className?: string
  variant?: "dots" | "lines"
}

export function GridMesh({ className, variant = "dots" }: GridMeshProps) {
  const patternId = `grid-mesh-${variant}`
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_60%,transparent_100%)]",
        className
      )}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.12] text-foreground"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={patternId}
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            {variant === "dots" ? (
              <circle cx="1" cy="1" r="1" fill="currentColor" />
            ) : (
              <path
                d="M 32 0 L 0 0 0 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            )}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  )
}
