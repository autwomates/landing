export const siteConfig = {
  // Company Info
  companyName: "Autwomates",
  tagline: "Software Solutions",

  // Section Visibility - set to false to hide a section
  sections: {
    showHero: true,
    showServices: true,
    showAbout: true,
    showProjects: false,
    showTestimonials: false,
    showContact: true,
  },

  // Contact Info
  contact: {
    email: "autwomates@gmail.com",
    phone: "+54 3492 511411",
    address: "Rafaela, Santa Fe - Argentina",
  },

  // Social Links
  social: {
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
}

export type SiteConfig = typeof siteConfig
