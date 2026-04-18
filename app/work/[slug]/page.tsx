import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { caseStudies, caseStudySlugs } from "@/lib/content/work"
import { CaseHero } from "@/components/content/case-hero"
import { MetricsGrid } from "@/components/content/metric"
import { profile } from "@/lib/content/profile"

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const cs = caseStudies[slug]
  if (!cs) return { title: "Not found" }
  return {
    title: cs.title,
    description: cs.summary,
    openGraph: {
      title: `${cs.title} · ${profile.fullName}`,
      description: cs.summary,
      type: "article",
      publishedTime: cs.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: cs.title,
      description: cs.summary,
    },
  }
}

const mdxImports: Record<string, () => Promise<{ default: React.ComponentType }>> = {
  "mcp-toolkit": () => import("@/content/work/mcp-toolkit.mdx"),
  "rag-evals": () => import("@/content/work/rag-evals.mdx"),
  "secure-gitops": () => import("@/content/work/secure-gitops.mdx"),
  "multi-agent-orchestrator": () =>
    import("@/content/work/multi-agent-orchestrator.mdx"),
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const cs = caseStudies[slug]
  const loader = mdxImports[slug]
  if (!cs || !loader) notFound()

  const { default: Content } = await loader()

  return (
    <main className="relative z-10 pt-28 pb-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <CaseHero
          title={cs.title}
          subtitle={cs.subtitle}
          image={cs.coverImage}
          stack={cs.stack}
          status={cs.status}
          liveUrl={cs.liveUrl}
          repoUrl={cs.repoUrl}
          publishedAt={cs.publishedAt}
          readingMinutes={cs.readingMinutes}
        />

        {cs.metrics && <MetricsGrid items={cs.metrics} />}

        <article className="prose prose-invert max-w-none">
          <Content />
        </article>
      </div>
    </main>
  )
}
