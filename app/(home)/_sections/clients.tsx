import Image from "next/image"
import { clients } from "@/lib/content/clients"

export function Clients() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="section-reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 relative">
            Clients & Collaborations
            <span className="block h-1 w-20 bg-primary mt-4" aria-hidden="true" />
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center section-reveal">
          {clients.map(({ src, alt }) => (
            <div key={alt} className="flex justify-center">
              <Image
                src={src}
                alt={alt}
                width={120}
                height={60}
                className="opacity-60 hover:opacity-100 transition-opacity object-contain max-h-14"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
