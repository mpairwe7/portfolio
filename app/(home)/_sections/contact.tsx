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
import { contactSchema, type ContactFormValues } from "@/lib/content/contact"
import { contactLinks } from "@/lib/content/socials"
import { profile } from "@/lib/content/profile"

const ContactIcon = {
  mail: Mail,
  phone: Phone,
  map: MapPin,
  linkedin: Linkedin,
  github: Github,
} as const

export function Contact() {
  const [formSubmitting, setFormSubmitting] = useState(false)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  })

  const onSubmit = async (_values: ContactFormValues) => {
    setFormSubmitting(true)
    // TODO: wire up to Resend server action (Phase 6)
    await new Promise((r) => setTimeout(r, 1400))
    toast.success("Message sent! I'll get back to you soon. 🚀")
    form.reset()
    setFormSubmitting(false)
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="section-reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 relative">
            Get in Touch
            <span className="block h-1 w-20 bg-primary mt-4" aria-hidden="true" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="section-reveal">
            <p className="text-base mb-8 text-muted-foreground leading-relaxed">
              {profile.contactBlurb}
            </p>
            <address className="not-italic">
              <ul className="space-y-5">
                {contactLinks.map(({ iconKey, label, value, href }) => {
                  const Icon = ContactIcon[iconKey]
                  return (
                    <li key={label} className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full shrink-0">
                        <Icon
                          className="h-5 w-5 text-primary"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{label}</p>
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
                            className="text-muted-foreground hover:text-primary transition-colors text-sm break-all"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground text-sm">
                            {value}
                          </p>
                        )}
                      </div>
                    </li>
                  )
                })}
              </ul>
            </address>
          </div>

          <div className="bg-muted/30 rounded-xl p-6 border border-border section-reveal reveal-delay-1">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            placeholder="Your full name"
                            autoComplete="name"
                            className="w-full px-4 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
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
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            type="email"
                            placeholder="your@email.com"
                            autoComplete="email"
                            className="w-full px-4 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
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
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <input
                          {...field}
                          placeholder="What's this about?"
                          className="w-full px-4 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
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
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <textarea
                          {...field}
                          rows={5}
                          placeholder="Tell me about your project or idea…"
                          className="w-full px-4 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none transition-shadow"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full"
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
          </div>
        </div>
      </div>
    </section>
  )
}
