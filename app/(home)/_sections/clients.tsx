import Image from "next/image"
import { Reveal } from "@/components/motion/reveal"
import { clients } from "@/lib/content/clients"

export function Clients() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
            Clients & Collaborations
          </h2>
          <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-10">
            — teams I&apos;ve shipped with
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map(({ src, alt }) => (
              <div key={alt} className="flex justify-center">
                <Image
                  src={src}
                  alt={alt}
                  width={120}
                  height={60}
                  className="opacity-50 hover:opacity-100 transition-opacity object-contain max-h-14 grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
