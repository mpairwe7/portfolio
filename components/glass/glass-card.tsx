import { cva, type VariantProps } from "class-variance-authority"
import { forwardRef, type HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

const glassCardVariants = cva(
  "relative rounded-[calc(var(--radius)+4px)] overflow-hidden transition-all duration-300",
  {
    variants: {
      variant: {
        card: "glass-surface hover:border-primary/30 hover:shadow-[0_8px_40px_-16px_hsl(var(--primary)/0.3)]",
        hero: "glass-surface-strong",
        palette: "glass-surface-strong",
        form: "glass-surface",
        bare: "",
      },
      intensity: {
        low: "",
        med: "",
        high: "",
      },
    },
    compoundVariants: [
      { intensity: "low", className: "backdrop-blur-md" },
      { intensity: "high", className: "backdrop-blur-3xl" },
    ],
    defaultVariants: {
      variant: "card",
      intensity: "med",
    },
  }
)

export interface GlassCardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassCardVariants> {}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant, intensity, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(glassCardVariants({ variant, intensity }), className)}
      {...props}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-white/20"
      />
      {children}
    </div>
  )
)
GlassCard.displayName = "GlassCard"
