"use client"

import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"

const testimonials = [
  {
    quote: "Autwomates transformed our outdated systems into a modern, scalable platform. Their team's expertise and dedication exceeded our expectations.",
    author: "Sarah Johnson",
    role: "CTO, TechCorp Inc.",
    rating: 5,
  },
  {
    quote: "Working with Autwomates was a game-changer for our startup. They delivered a product that helped us secure our Series A funding.",
    author: "Michael Chen",
    role: "Founder, InnovateLabs",
    rating: 5,
  },
  {
    quote: "The team's attention to detail and commitment to quality is unmatched. They're not just developers; they're true partners in our success.",
    author: "Emily Rodriguez",
    role: "VP of Engineering, DataFlow",
    rating: 5,
  },
]

const trustedBy = [
  "TechCorp",
  "InnovateLabs",
  "DataFlow",
  "CloudFirst",
  "SecureNet",
]

export function Testimonials() {
  const { t } = useLanguage()

  return (
    <section id="testimonials" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{t.testimonials.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.testimonials.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-foreground leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-sm text-muted-foreground mb-8">{t.testimonials.trustedBy}</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {trustedBy.map((company) => (
              <div key={company} className="text-xl font-semibold text-muted-foreground/50">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
