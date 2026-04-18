"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectCard } from "@/components/project-card"
import { Reveal } from "@/components/motion/reveal"
import { MotionLift } from "@/components/motion/motion-lift"
import { projectTabs, projects } from "@/lib/content/projects"

const featured = projects.filter((p) => p.featured)

export function Projects() {
  return (
    <section id="work" className="py-24 relative">
      <div className="container mx-auto px-4">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
            My Work
          </h2>
          <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-10">
            — {featured.length} flagship · {projects.length - featured.length} shipped
          </p>
        </Reveal>

        {/* Featured — flagship "building in public" */}
        <div className="mb-16">
          <Reveal delay={0.05}>
            <div className="flex items-baseline gap-3 mb-6">
              <h3 className="text-xl font-semibold font-mono uppercase tracking-wider">
                Flagship
              </h3>
              <span className="text-xs font-mono text-muted-foreground">
                building in public
              </span>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.08}>
                <MotionLift amount="subtle" className="h-full">
                  <ProjectCard {...project} />
                </MotionLift>
              </Reveal>
            ))}
          </div>
        </div>

        {/* All shipped work — filterable */}
        <Reveal>
          <div className="flex items-baseline gap-3 mb-6">
            <h3 className="text-xl font-semibold font-mono uppercase tracking-wider">
              Portfolio
            </h3>
            <span className="text-xs font-mono text-muted-foreground">
              filter by category
            </span>
          </div>
        </Reveal>

        <Tabs defaultValue="all" className="mb-12">
          <Reveal delay={0.05}>
            <div className="mb-8 -mx-4 px-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <TabsList className="inline-flex h-auto gap-1 glass-surface-subtle p-1.5 rounded-full max-w-full">
                {projectTabs.map(({ value, label }) => (
                  <TabsTrigger
                    key={value}
                    value={value}
                    className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm text-xs font-mono uppercase tracking-wider px-4 whitespace-nowrap"
                  >
                    {label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </Reveal>

          {projectTabs.map(({ value }) => (
            <TabsContent
              key={value}
              value={value}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {(value === "all"
                ? projects
                : projects.filter((p) => p.category === value)
              ).map((project, i) => (
                <Reveal key={project.slug} delay={Math.min(i * 0.06, 0.32)}>
                  <MotionLift amount="subtle" className="h-full">
                    <ProjectCard {...project} />
                  </MotionLift>
                </Reveal>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
