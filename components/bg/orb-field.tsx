import { Orb } from "@/components/glass/orb"
import { cn } from "@/lib/utils"

type OrbFieldProps = {
  className?: string
  density?: "sparse" | "normal" | "dense"
}

export function OrbField({ className, density = "normal" }: OrbFieldProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <Orb
        color="amber"
        size="xl"
        speed="slow"
        className="-top-40 -left-40"
      />
      <Orb
        color="ember"
        size="lg"
        speed="normal"
        className="top-1/3 -right-32"
      />
      {density !== "sparse" && (
        <Orb
          color="gold"
          size="md"
          speed="fast"
          className="bottom-0 left-1/3"
        />
      )}
      {density === "dense" && (
        <Orb
          color="shadow"
          size="lg"
          speed="slow"
          className="top-2/3 left-1/2"
        />
      )}
    </div>
  )
}
