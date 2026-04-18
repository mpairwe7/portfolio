"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectCard } from "@/components/project-card"
import { projectTabs, projects } from "@/lib/content/projects"

export function Projects() {
  return (
    <section id="work" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="section-reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 relative">
            My Work
            <span className="block h-1 w-20 bg-primary mt-4" aria-hidden="true" />
          </h2>
        </div>

        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="mb-8 flex flex-wrap h-auto gap-1">
            {projectTabs.map(({ value, label }) => (
              <TabsTrigger key={value} value={value}>
                {label}
              </TabsTrigger>
            ))}
          </TabsList>

          {projectTabs.map(({ value }) => (
            <TabsContent
              key={value}
              value={value}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {(value === "all"
                ? projects
                : projects.filter((p) => p.categories.includes(value))
              ).map((project, i) => (
                <div
                  key={project.title}
                  className={`section-reveal reveal-delay-${Math.min(i + 1, 4)}`}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
