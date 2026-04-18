import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { StackRow } from "./stack-tag"
import { GlassCard } from "@/components/glass/glass-card"

export function CaseHero({
  title,
  subtitle,
  image,
  stack,
  status,
  liveUrl,
  repoUrl,
  publishedAt,
  readingMinutes,
}: {
  title: string
  subtitle: string
  image: string
  stack: string[]
  status: "shipped" | "in-progress" | "archived"
  liveUrl?: string
  repoUrl?: string
  publishedAt: string
  readingMinutes: number
}) {
  return (
    <div className="not-prose">
      <Link
        href="/#work"
        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-8"
      >
        <ArrowLeft className="h-3 w-3" />
        Back to work
      </Link>

      <div className="flex items-center gap-3 mb-4 text-xs font-mono uppercase tracking-widest text-muted-foreground">
        <span>{publishedAt}</span>
        <span aria-hidden="true">·</span>
        <span>{readingMinutes} min read</span>
        <span aria-hidden="true">·</span>
        <span className="text-primary">{status}</span>
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight leading-[1.05]">
        {title}
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-6">
        {subtitle}
      </p>

      <StackRow items={stack} />

      <div className="flex flex-wrap items-center gap-4 mb-10">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            Live
          </a>
        )}
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-4 w-4" />
            Source
          </a>
        )}
      </div>

      <GlassCard variant="hero" className="overflow-hidden relative aspect-[21/9] mb-12">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 1024px"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
      </GlassCard>
    </div>
  )
}
