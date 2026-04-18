"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Github, Linkedin, Loader2, Mail, MapPin, Phone } from "lucide-react"
import { toast } from "sonner"
import { GlassCard } from "@/components/glass/glass-card"
import { Reveal } from "@/components/motion/reveal"
import { contactSchema, type ContactFormValues } from "@/lib/content/contact"
import { contactLinks } from "@/lib/content/socials"
import { profile } from "@/lib/content/profile"
import { sendContact } from "@/app/actions/send-contact"

const ContactIcon = {
  mail: Mail,
  phone: Phone,
  map: MapPin,
  linkedin: Linkedin,
  github: Github,
} as const

export function Contact() {
  const [formSubmitting, setFormSubmitting] = useState(false)
  const [honeypot, setHoneypot] = useState("")

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  })

  const onSubmit = async (values: ContactFormValues) => {
    setFormSubmitting(true)
    try {
      const result = await sendContact({ ...values, website: honeypot })
      if (result.ok) {
        toast.success("Message sent! I'll get back within 48 hours.")
        form.reset()
        setHoneypot("")
      } else {
        toast.error(result.error)
      }
    } catch {
      toast.error("Network error. Please try again — or email directly.")
    } finally {
      setFormSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-10">
            — let&apos;s build something
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Reveal>
            <p className="text-base mb-8 text-muted-foreground leading-relaxed">
              {profile.contactBlurb}
            </p>
            <address className="not-italic">
              <ul className="space-y-4">
                {contactLinks.map(({ iconKey, label, value, href }) => {
                  const Icon = ContactIcon[iconKey]
                  return (
                    <li key={label} className="flex items-center gap-4">
                      <div className="bg-primary/10 border border-primary/20 p-3 rounded-full shrink-0">
                        <Icon
                          className="h-5 w-5 text-primary"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                          {label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            target={
                              href.startsWith("http") ? "_blank" : undefined
                            }
                            rel={
                              href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="text-foreground hover:text-primary transition-colors text-sm break-all"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-foreground text-sm">{value}</p>
                        )}
                      </div>
                    </li>
                  )
                })}
              </ul>
            </address>
          </Reveal>

          <Reveal delay={0.12}>
            <GlassCard variant="form" className="p-6">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-5"
                  noValidate
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                            Name
                          </FormLabel>
                          <FormControl>
                            <input
                              {...field}
                              placeholder="Your full name"
                              autoComplete="name"
                              className="w-full px-4 py-2.5 rounded-md border border-input bg-background/50 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-all"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                            Email
                          </FormLabel>
                          <FormControl>
                            <input
                              {...field}
                              type="email"
                              placeholder="your@email.com"
                              autoComplete="email"
                              className="w-full px-4 py-2.5 rounded-md border border-input bg-background/50 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-all"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                          Subject
                        </FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            placeholder="What's this about?"
                            className="w-full px-4 py-2.5 rounded-md border border-input bg-background/50 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-all"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                          Message
                        </FormLabel>
                        <FormControl>
                          <textarea
                            {...field}
                            rows={5}
                            placeholder="Tell me about your project or idea…"
                            className="w-full px-4 py-2.5 rounded-md border border-input bg-background/50 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary resize-none transition-all"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    className="absolute left-[-9999px] w-px h-px opacity-0 pointer-events-none"
                  />

                  <Button
                    type="submit"
                    className="w-full shadow-[0_8px_32px_-12px_hsl(var(--primary)/0.5)]"
                    disabled={formSubmitting}
                  >
                    {formSubmitting ? (
                      <>
                        <Loader2
                          className="h-4 w-4 mr-2 animate-spin"
                          aria-hidden="true"
                        />
                        Sending…
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </Form>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
