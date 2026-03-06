"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { t } = useLanguage()

  const stats = [
    { value: "150+", label: t.hero.stats.projects },
    { value: "50+", label: t.hero.stats.clients },
    { value: "10+", label: t.hero.stats.experience },
    { value: "99%", label: t.hero.stats.satisfaction },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-secondary rounded-full text-muted-foreground">
          {t.hero.badge}
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance max-w-4xl mx-auto">
          {t.hero.title}
          <span className="text-primary">{t.hero.titleHighlight}</span>
        </h1>
        
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
          {t.hero.description}
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild>
            <a href="#contact">
              {t.hero.startProject}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#projects">{t.hero.viewWork}</a>
          </Button>
        </div>
        
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl sm:text-4xl font-bold text-primary">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
