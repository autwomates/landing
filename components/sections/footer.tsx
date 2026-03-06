"use client"

import { Github, Linkedin, Twitter } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import type { SiteConfig } from "@/config/site.config"

const socialLinks = [
  { icon: Twitter, href: "", label: "Twitter" },
  { icon: Linkedin, href: "", label: "LinkedIn" },
  { icon: Github, href: "", label: "GitHub" },
]

type FooterProps = {
  sections: SiteConfig["sections"]
}

export function Footer({ sections }: FooterProps) {
  const { t } = useLanguage()

  const footerLinks = {
    services: [
      { label: t.services.items.customDev.title, href: "#services" },
      { label: t.services.items.cloud.title, href: "#services" },
      { label: t.services.items.mobile.title, href: "#services" },
      { label: t.services.items.data.title, href: "#services" },
    ],
    company: [
      { label: t.footer.aboutUs, href: "#about" },
      ...(sections.showProjects ? [{ label: t.nav.projects, href: "#projects" }] : []),
      ...(sections.showTestimonials ? [{ label: t.nav.testimonials, href: "#testimonials" }] : []),
      { label: t.nav.contact, href: "#contact" },
    ],
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="text-xl font-bold tracking-tight">Au<span className="text-primary font-semibold italic ml-[-0.06em] mr-[0.04em]">two</span>mates</span>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.filter((social) => social.href).map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t.footer.services}</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t.footer.company}</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Autwomates. {t.footer.copyright}
          </p>
          <p className="text-sm text-muted-foreground">
            {t.footer.builtWith}
          </p>
        </div>
      </div>
    </footer>
  )
}
