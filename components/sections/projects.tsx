"use client"

import { ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"

export function Projects() {
  const { t } = useLanguage()

  const projects = [
    {
      title: t.projects.items.ecommerce.title,
      description: t.projects.items.ecommerce.description,
      tags: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
      image: "/project-1.jpg",
    },
    {
      title: t.projects.items.healthcare.title,
      description: t.projects.items.healthcare.description,
      tags: ["React", "Python", "MongoDB", "Docker"],
      image: "/project-2.jpg",
    },
    {
      title: t.projects.items.fintech.title,
      description: t.projects.items.fintech.description,
      tags: ["React Native", "Go", "Redis", "Kubernetes"],
      image: "/project-3.jpg",
    },
    {
      title: t.projects.items.iot.title,
      description: t.projects.items.iot.description,
      tags: ["Vue.js", "Rust", "InfluxDB", "MQTT"],
      image: "/project-4.jpg",
    },
  ]

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{t.projects.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.projects.description}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="bg-card border-border overflow-hidden group cursor-pointer hover:border-accent/50 transition-colors">
              <div className="aspect-video bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">{t.projects.preview}</span>
                </div>
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ExternalLink className="h-8 w-8 text-accent" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
