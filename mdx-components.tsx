import type { MDXComponents } from "mdx/types"
import { Callout } from "@/components/content/callout"
import { Metric, MetricsGrid } from "@/components/content/metric"
import { StackTag, StackRow } from "@/components/content/stack-tag"
import { CaseHero } from "@/components/content/case-hero"
import { Timeline, Phase } from "@/components/content/timeline"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Callout,
    Metric,
    MetricsGrid,
    StackTag,
    StackRow,
    CaseHero,
    Timeline,
    Phase,
    h1: (props) => (
      <h1 className="text-3xl md:text-4xl font-bold mt-12 mb-4 tracking-tight" {...props} />
    ),
    h2: (props) => (
      <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-3 tracking-tight scroll-mt-24" {...props} />
    ),
    h3: (props) => (
      <h3 className="text-xl font-semibold mt-8 mb-2 tracking-tight scroll-mt-24" {...props} />
    ),
    p: (props) => (
      <p className="leading-relaxed text-foreground/90 my-4" {...props} />
    ),
    a: ({ href, ...rest }) => (
      <a
        href={href}
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
        className="text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
        {...rest}
      />
    ),
    ul: (props) => (
      <ul className="my-4 space-y-1.5 list-disc list-outside pl-6 marker:text-primary/60" {...props} />
    ),
    ol: (props) => (
      <ol className="my-4 space-y-1.5 list-decimal list-outside pl-6 marker:text-primary/60 marker:font-mono" {...props} />
    ),
    li: (props) => <li className="pl-1 text-foreground/90" {...props} />,
    code: (props) => (
      <code
        className="font-mono text-[0.88em] text-primary bg-primary/5 border border-primary/15 px-1.5 py-0.5 rounded"
        {...props}
      />
    ),
    pre: (props) => (
      <pre
        className="my-6 overflow-x-auto rounded-xl border border-border bg-background/60 glass-surface-subtle p-4 text-sm leading-relaxed"
        {...props}
      />
    ),
    blockquote: (props) => (
      <blockquote
        className="my-6 border-l-2 border-primary/40 pl-4 italic text-muted-foreground"
        {...props}
      />
    ),
    hr: () => (
      <hr className="my-10 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    ),
    ...components,
  }
}
