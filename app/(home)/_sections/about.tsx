import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { profile } from "@/lib/content/profile"
import { contactAboutFields } from "@/lib/content/socials"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="section-reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 relative">
            About Me
            <span className="block h-1 w-20 bg-primary mt-4" aria-hidden="true" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative section-reveal">
            <div
              className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/20 to-primary/5 blur-xl"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/images/lauben.jpg"
                alt={`${profile.fullName} — software engineer based in ${profile.location}`}
                width={600}
                height={600}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>

          <div className="section-reveal reveal-delay-1">
            <p
              className="text-lg mb-4 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: profile.aboutParagraphs[0].replace(
                  /\*\*(.+?)\*\*/g,
                  "<strong>$1</strong>"
                ),
              }}
            />
            <p className="text-base mb-4 text-muted-foreground leading-relaxed">
              {profile.aboutParagraphs[1]}
            </p>
            <p className="text-base mb-8 text-muted-foreground leading-relaxed">
              {profile.aboutParagraphs[2]}
            </p>

            <dl className="grid grid-cols-2 gap-4 mb-8 text-sm">
              {contactAboutFields.map(({ label, value }) => (
                <div key={label}>
                  <dt className="font-semibold text-primary text-xs uppercase tracking-wide">
                    {label}
                  </dt>
                  <dd className="text-muted-foreground mt-0.5">{value}</dd>
                </div>
              ))}
            </dl>

            <Button asChild>
              <Link href={profile.resumeUrl} download>
                <Download className="h-4 w-4 mr-2" aria-hidden="true" />
                Download Resume
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
