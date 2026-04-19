import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { Reveal } from "@/components/motion/reveal"
import { profile } from "@/lib/content/profile"
import { contactAboutFields } from "@/lib/content/socials"

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
            About Me
          </h2>
          <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-10">
            — who I am
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative">
              <div
                className="absolute -inset-6 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-2xl"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-2xl glass-surface-subtle p-1">
                <Image
                  src="/images/lauben.jpg"
                  alt={`${profile.fullName} — software engineer based in ${profile.location}`}
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            {profile.aboutParagraphs.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "text-lg mb-4 leading-relaxed"
                    : i === profile.aboutParagraphs.length - 1
                      ? "text-base mb-8 text-muted-foreground leading-relaxed"
                      : "text-base mb-4 text-muted-foreground leading-relaxed"
                }
                dangerouslySetInnerHTML={{
                  __html: p.replace(
                    /\*\*(.+?)\*\*/g,
                    "<strong class='text-foreground'>$1</strong>"
                  ),
                }}
              />
            ))}

            <dl className="grid grid-cols-2 gap-4 mb-8 text-sm">
              {contactAboutFields.map(({ label, value }) => (
                <div key={label}>
                  <dt className="font-mono text-primary text-[10px] uppercase tracking-widest">
                    {label}
                  </dt>
                  <dd className="text-muted-foreground mt-1">{value}</dd>
                </div>
              ))}
            </dl>

            <Button asChild>
              <Link href={profile.resumeUrl} download>
                <Download className="h-4 w-4 mr-2" aria-hidden="true" />
                Download Resume
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
