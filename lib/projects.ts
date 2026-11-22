export type PortfolioProject = {
  number: string
  name: string
  category: string
  description: string
  technologies: string[]
  features: string[]
  liveDemoUrl?: string
  githubUrl?: string
  status?: string
  preview: "travel" | "restaurant" | "analytics"
}

// Live demos are deployed; replace the editable GitHub placeholders when repository URLs are available.
export const projects: PortfolioProject[] = [
  {
    number: "01",
    name: "Full Stack Travel & Hospitality Website",
    category: "Full stack platform",
    description:
      "A full-stack travel and hospitality platform designed to simplify travel planning by bringing property discovery, travel options and booking-related services together in one place.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "EJS",
      "JavaScript",
      "REST APIs",
      "Leaflet.js",
    ],
    features: [
      "Authentication & sessions",
      "Property listings & CRUD",
      "Reviews & ratings",
      "Location-based search",
      "Interactive maps",
      "Flights, buses, trains & cruises with booking redirects",
      "Host dashboard",
    ],
    liveDemoUrl: "https://end-to-end-travel-website.vercel.app/listings",
    githubUrl: "https://github.com/YOUR-USERNAME/YOUR-TRAVEL-REPOSITORY",
    preview: "travel",
  },
  {
    number: "02",
    name: "Nom Nom Station",
    category: "Restaurant experience",
    description:
      "A restaurant website designed to showcase the restaurant and its food offerings through an attractive, easy-to-browse experience.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive design"],
    features: [
      "Restaurant-led visual identity",
      "Food and menu showcase",
      "Responsive browsing experience",
      "Clear, friendly navigation",
    ],
    liveDemoUrl: "https://main.restomania.pages.dev/",
    githubUrl: "https://github.com/YOUR-USERNAME/YOUR-NOM-NOM-REPOSITORY",
    preview: "restaurant",
  },
  {
    number: "03",
    name: "Meta Ads Analytics & Reporting Tool",
    category: "Reporting & automation",
    description:
      "An analytics and reporting tool developed during an internship to automate campaign data processing and generate structured Excel reports with actionable insights.",
    technologies: ["JavaScript", "HTML", "CSS", "ExcelJS"],
    features: [
      "CSV & TSV data parsing",
      "Dynamic column detection",
      "Campaign, audience, region & demographic aggregation",
      "Rule-based performance insights",
      "Multi-sheet Excel exports",
      "KPI color scaling for CTR, CPC, CPM, purchases & ROAS",
    ],
    liveDemoUrl: "/meta-ads-analytics.html",
    githubUrl: "https://github.com/YOUR-USERNAME/YOUR-META-ADS-REPOSITORY",
    preview: "analytics",
  },
]

// Add a preferred email address to enable mail links and email-draft submission.
export const contactEmail = "YOUR_EMAIL_ADDRESS"

export const socialLinks = {
  github: "https://github.com/herambpadhye",
  linkedin: "https://linkedin.com/in/heramb-padhye",
}
