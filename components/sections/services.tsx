"use client"

import { Code, Cloud, Smartphone, BarChart3, Shield, Settings } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"

export function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Code,
      title: t.services.items.customDev.title,
      description: t.services.items.customDev.description,
    },
    {
      icon: Cloud,
      title: t.services.items.cloud.title,
      description: t.services.items.cloud.description,
    },
    {
      icon: Smartphone,
      title: t.services.items.mobile.title,
      description: t.services.items.mobile.description,
    },
    {
      icon: BarChart3,
      title: t.services.items.data.title,
      description: t.services.items.data.description,
    },
    {
      icon: Shield,
      title: t.services.items.security.title,
      description: t.services.items.security.description,
    },
    {
      icon: Settings,
      title: t.services.items.devops.title,
      description: t.services.items.devops.description,
    },
  ]

  return (
    <section id="services" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{t.services.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.services.description}
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="bg-card border-border hover:border-primary/50 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
