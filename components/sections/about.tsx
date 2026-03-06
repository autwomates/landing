"use client"

import { Linkedin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"

const founders = [
  {
    name: "Alejandro J. Zbrun",
    position: "Co-founder",
    image: "/alejandro.png",
    bio: "",
    linkedin: "https://www.linkedin.com/in/alejandro-zbrun/",
  },
  {
    name: "Lisandro Pascuali",
    position: "Co-founder",
    image: "/lisandro.png",
    bio: "",
    linkedin: "https://www.linkedin.com/in/lisandro-pascuali/",
  },
]

export function About() {
  const { t } = useLanguage()

  const values = [
    { title: t.about.values.innovation.title, description: t.about.values.innovation.description },
    { title: t.about.values.quality.title, description: t.about.values.quality.description },
    { title: t.about.values.transparency.title, description: t.about.values.transparency.description },
    { title: t.about.values.partnership.title, description: t.about.values.partnership.description },
  ]

  return (
    <section id="about" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{t.about.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.about.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {founders.map((founder) => (
            <Card key={founder.name} className="bg-card border-border overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                  <div className="w-32 h-32 rounded-full border-2 border-primary/30 flex-shrink-0 overflow-hidden bg-muted">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl font-semibold">{founder.name}</h3>
                    <p className="text-primary font-medium mt-1">{founder.position}</p>
                    {founder.bio && (
                      <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                        {founder.bio}
                      </p>
                    )}
                    <div className="flex gap-3 mt-4 justify-center sm:justify-start">
                      <a
                        href={founder.linkedin}
                        className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                        aria-label={`${founder.name} LinkedIn`}
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold tracking-tight">{t.about.values.title}</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div key={value.title} className="text-center p-6">
              <h4 className="font-semibold text-lg">{value.title}</h4>
              <p className="text-sm text-muted-foreground mt-2">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
