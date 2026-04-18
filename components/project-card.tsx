import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import type { Project } from "@/lib/content/types"

export function ProjectCard({
  title,
  description,
  image,
  tags,
  link,
  github,
}: Project) {
  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
      <div className="relative overflow-hidden h-48 shrink-0">
        <Image
          src={image || "/images/carreer.jpg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {(link || github) && (
          <div
            className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-hidden="true"
          >
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
                className="bg-primary text-primary-foreground p-2 rounded-full hover:scale-110 transition-transform"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
                className="bg-white text-black p-2 rounded-full hover:scale-110 transition-transform"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
          </div>
        )}
      </div>
      <CardContent className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-base font-semibold leading-snug">{title}</h3>
          <div className="flex gap-1 shrink-0">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} live`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} source code on GitHub`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
          {description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
