import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { GlassCard } from "@/components/glass/glass-card"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import type { Project } from "@/lib/content/types"
import { cn } from "@/lib/utils"

const STATUS_STYLES = {
  shipped: "bg-green-500/15 text-green-400 border-green-500/25",
  "in-progress": "bg-primary/15 text-primary border-primary/30",
  archived: "bg-muted text-muted-foreground border-border",
} as const

const STATUS_LABEL = {
  shipped: "shipped",
  "in-progress": "building",
  archived: "archived",
} as const

export function ProjectCard({
  slug,
  title,
  summary,
  image,
  stack,
  metrics,
  liveUrl,
  repoUrl,
  status,
  caseStudySlug,
}: Project) {
  const hasMetrics = metrics && metrics.length > 0
  const visibleStack = stack.slice(0, 4)
  const extraCount = stack.length - visibleStack.length

  return (
    <GlassCard
      variant="card"
      className="group h-full flex flex-col overflow-hidden"
    >
      <div className="relative overflow-hidden h-44 shrink-0">
        <Image
          src={image || "/images/carreer.jpg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="absolute top-3 left-3">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider border backdrop-blur-md",
              STATUS_STYLES[status]
            )}
          >
            <span
              aria-hidden="true"
              className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"
            />
            {STATUS_LABEL[status]}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1 gap-4">
        <div>
          <h3
            className="text-base font-semibold leading-snug mb-2"
            data-project-slug={slug}
          >
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {summary}
          </p>
        </div>

        {hasMetrics && (
          <div className="grid grid-cols-2 gap-2 pt-3 border-t border-border/40">
            {metrics.slice(0, 2).map((m) => (
              <div key={m.label}>
                <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  {m.label}
                </p>
                <p className="text-sm font-mono font-semibold text-foreground tabular-nums mt-0.5">
                  {m.value}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-1 mt-auto">
          {visibleStack.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="text-[10px] font-mono uppercase tracking-wider bg-background/40"
            >
              {tag}
            </Badge>
          ))}
          {extraCount > 0 && (
            <Badge
              variant="outline"
              className="text-[10px] font-mono tabular-nums bg-background/40"
            >
              +{extraCount}
            </Badge>
          )}
        </div>

        <div className="flex items-center gap-3 pt-2">
          {caseStudySlug && (
            <Link
              href={`/work/${caseStudySlug}`}
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-primary hover:text-primary/80 transition-colors"
            >
              Case study
              <ArrowRight className="h-3 w-3" />
            </Link>
          )}
          <div className="flex items-center gap-2 ml-auto">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${title} live`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} source`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </GlassCard>
  )
}
