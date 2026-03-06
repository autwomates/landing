import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { About } from "@/components/sections/about"
import { Projects } from "@/components/sections/projects"
import { Testimonials } from "@/components/sections/testimonials"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"
import { siteConfig } from "@/config/site.config"

export default function Home() {
  const { sections } = siteConfig

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header sections={sections} />
      {sections.showHero && <Hero sections={sections} />}
      {sections.showServices && <Services />}
      {sections.showAbout && <About />}
      {sections.showProjects && <Projects />}
      {sections.showTestimonials && <Testimonials />}
      {sections.showContact && <Contact />}
      <Footer sections={sections} />
    </main>
  )
}
