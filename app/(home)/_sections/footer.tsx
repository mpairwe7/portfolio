import { socialLinks } from "@/lib/content/socials"
import { profile } from "@/lib/content/profile"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/40 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="font-bold text-lg mb-1">
              <span className="text-primary font-mono">{profile.shortName}</span>{" "}
              · {profile.fullName}
            </p>
            <p className="text-sm text-muted-foreground">
              {profile.footerTagline}
            </p>
            <p className="text-xs text-muted-foreground/70 mt-2 font-mono">
              © {new Date().getFullYear()} {profile.fullName}. All rights
              reserved.
            </p>
          </div>

          <nav aria-label="Social links">
            <ul className="flex space-x-2" role="list">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http") ? "noopener noreferrer" : undefined
                    }
                    aria-label={label}
                    className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-full p-2.5 inline-block glass-surface-subtle hover:border-primary/30"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
