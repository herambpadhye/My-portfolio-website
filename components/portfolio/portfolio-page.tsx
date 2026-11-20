import { ArrowUp } from "lucide-react"
import { AboutSection, ContactSection, ExperienceSection, HeroSection, ProjectsSection, SkillsSection } from "@/components/portfolio/sections"
import { SiteHeader } from "@/components/portfolio/site-header"
import { socialLinks } from "@/lib/projects"

export function PortfolioPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <div className="section-divider" />
        <AboutSection />
        <div className="section-divider" />
        <SkillsSection />
        <div className="section-divider" />
        <ProjectsSection />
        <div className="section-divider" />
        <ExperienceSection />
        <ContactSection />
      </main>
      <footer className="site-footer section-wrap">
        <a className="footer-brand" href="#home"><span className="brand-mark">h<span>.</span></span><span><b>HERAMB PADHYE</b><small>Full Stack Web Developer</small></span></a>
        <p>Designed &amp; built with care <span>·</span> © {new Date().getFullYear()} Heramb Padhye</p>
        <div className="footer-right">
          <div className="footer-socials"><a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">GH</a><a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">in</a></div>
          <a className="back-to-top" href="#home">Back to top <ArrowUp aria-hidden="true" /></a>
        </div>
      </footer>
    </>
  )
}
