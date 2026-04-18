import Link from "next/link"

export default function NotFound() {
  return (
    <main className="relative z-10 min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
          404 · case study not found
        </p>
        <h1 className="text-4xl font-bold mb-4 tracking-tight">
          That case study is not published.
        </h1>
        <p className="text-muted-foreground mb-8">
          It may have been renamed, unpublished, or it hasn&apos;t been written
          yet. Check the portfolio for the latest list.
        </p>
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-primary hover:text-primary/80 transition-colors"
        >
          ← Back to work
        </Link>
      </div>
    </main>
  )
}
