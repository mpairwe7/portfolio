"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectCard } from "@/components/project-card"
import { Reveal } from "@/components/motion/reveal"
import { MotionLift } from "@/components/motion/motion-lift"
import { projectTabs, projects } from "@/lib/content/projects"

export function Projects() {
  return (
    <section id="work" className="py-24 relative">
      <div className="container mx-auto px-4">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
            My Work
          </h2>
          <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-10">
            — selected projects
          </p>
        </Reveal>

        <Tabs defaultValue="all" className="mb-12">
          <Reveal delay={0.1}>
            <TabsList className="mb-8 flex flex-wrap h-auto gap-1 glass-surface-subtle p-1.5 rounded-full w-fit">
              {projectTabs.map(({ value, label }) => (
                <TabsTrigger
                  key={value}
                  value={value}
                  className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm text-xs font-mono uppercase tracking-wider px-4"
                >
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Reveal>

          {projectTabs.map(({ value }) => (
            <TabsContent
              key={value}
              value={value}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {(value === "all"
                ? projects
                : projects.filter((p) => p.categories.includes(value))
              ).map((project, i) => (
                <Reveal key={project.title} delay={Math.min(i * 0.08, 0.32)}>
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
