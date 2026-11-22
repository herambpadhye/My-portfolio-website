import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Braces,
  BriefcaseBusiness,
  Check,
  Code2,
  Coffee,
  Database,
  ExternalLink,
  Globe2,
  GraduationCap,
  Layers3,
  MapPin,
  Monitor,
  Server,
  Sparkles,
  Terminal,
  Wrench,
  Zap,
} from "lucide-react"
import { projects, socialLinks, type PortfolioProject } from "@/lib/projects"
import { Reveal } from "@/components/portfolio/reveal"
import { ContactForm } from "@/components/portfolio/contact-form"

const skillGroups = [
  { title: "Programming Languages", icon: Braces, skills: ["JavaScript", "Python", "Java", "C (Basic)"] },
  { title: "Frontend", icon: Monitor, skills: ["React.js", "HTML", "CSS", "EJS"] },
  { title: "Backend", icon: Server, skills: ["Node.js", "Express.js", "Flask", "REST APIs"] },
  { title: "Databases", icon: Database, skills: ["MongoDB", "MySQL", "Firebase"] },
  { title: "Tools & Technologies", icon: Wrench, skills: ["Git", "GitHub", "Socket.IO", "ExcelJS", "Leaflet.js", "Vercel", "ESP32", "Arduino IDE"] },
]

const highlights = [
  { icon: Layers3, title: "Full Stack Development", description: "From thoughtful interfaces to dependable backend logic." },
  { icon: Zap, title: "Problem Solving", description: "Turning real-world needs into useful, focused products." },
  { icon: Globe2, title: "Web Application Development", description: "Building responsive applications people enjoy using." },
]

function HeroVisual() {
  return (
    <div className="hero-art" aria-label="Illustrated code editor showing a web application component" role="img">
      <div className="hero-orbit hero-orbit-one" />
      <div className="hero-orbit hero-orbit-two" />
      <div className="code-window">
        <div className="code-window-top">
          <div className="window-dots" aria-hidden="true"><i /><i /><i /></div>
          <span className="code-file"><Code2 aria-hidden="true" /> portfolio.tsx</span>
          <span className="code-branch">main</span>
        </div>
        <div className="code-body" aria-hidden="true">
          <div className="code-line"><span className="line-number">01</span><span><b>const</b> <em>developer</em> = {'{'}</span></div>
          <div className="code-line"><span className="line-number">02</span><span className="indent"><i>name</i>: <strong>&quot;Heramb Padhye&quot;</strong>,</span></div>
          <div className="code-line"><span className="line-number">03</span><span className="indent"><i>role</i>: <strong>&quot;Full Stack Developer&quot;</strong>,</span></div>
          <div className="code-line"><span className="line-number">04</span><span className="indent"><i>basedIn</i>: <strong>&quot;Pune, India&quot;</strong>,</span></div>
          <div className="code-line"><span className="line-number">05</span><span className="indent"><i>building</i>: <b>[</b></span></div>
          <div className="code-line"><span className="line-number">06</span><span className="indent-two"><strong>&quot;thoughtful interfaces&quot;</strong>,</span></div>
          <div className="code-line"><span className="line-number">07</span><span className="indent-two"><strong>&quot;useful products&quot;</strong></span></div>
          <div className="code-line"><span className="line-number">08</span><span className="indent"><b>]</b></span></div>
          <div className="code-line"><span className="line-number">09</span><span>{'}'}<span className="cursor" /></span></div>
        </div>
        <div className="code-window-bottom"><span><span className="status-dot" /> Full Stack Web Developer</span><span>UTF-8&nbsp; · &nbsp;TypeScript</span></div>
      </div>
      <div className="float-chip chip-react"><span className="chip-symbol">✳</span> React.js</div>
      <div className="float-chip chip-node"><span className="chip-symbol">⬡</span> Node.js</div>
      <div className="visual-caption"><span className="caption-line" /> CURIOUS BY DEFAULT</div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section id="home" className="hero-section section-wrap">
      <div className="hero-copy">
        <Reveal immediate className="hero-intro">
          <span className="eyebrow"><span className="eyebrow-dot" /> FULL STACK WEB DEVELOPER</span>
        </Reveal>
        <Reveal immediate delay={0.08}>
          <h1>Building Digital Experiences <span>That Make an Impact.</span></h1>
        </Reveal>
        <Reveal immediate delay={0.16}>
          <p className="hero-description">I&apos;m a Full Stack Web Developer passionate about building modern, responsive and user-focused web applications. I enjoy turning ideas into functional digital products using modern web technologies.</p>
        </Reveal>
        <Reveal immediate delay={0.24} className="hero-actions">
          <a className="button-primary" href="#projects">View my work <ArrowRight aria-hidden="true" /></a>
          <a className="button-secondary" href="#contact">Contact me <ArrowUpRight aria-hidden="true" /></a>
        </Reveal>
        <Reveal immediate delay={0.32} className="hero-meta">
          <span className="location-label"><MapPin aria-hidden="true" /> Pune, India</span>
          <span className="meta-divider" />
          <a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub profile (opens in a new tab)"><span className="social-monogram" aria-hidden="true">GH</span></a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile (opens in a new tab)"><span className="social-monogram" aria-hidden="true">in</span></a>
        </Reveal>
      </div>
      <Reveal immediate delay={0.18} from="right" className="hero-visual-wrap"><HeroVisual /></Reveal>
      <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDownRight aria-hidden="true" /></a>
      <div className="hero-index" aria-hidden="true">01 / 06</div>
    </section>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="section-wrap about-section section-block">
      <div className="section-heading-row">
        <Reveal><div className="section-kicker">01 — A LITTLE ABOUT ME</div></Reveal>
        <Reveal delay={0.08}><h2 className="section-title">A Little About Me</h2></Reveal>
      </div>
      <div className="about-content">
        <Reveal className="about-copy">
          <p className="large-copy">I&apos;m Heramb Padhye, a Full Stack Web Developer and BE Electronics &amp; Telecommunication graduate.</p>
          <p>I enjoy developing practical web applications, exploring modern technologies and creating digital experiences that solve real-world problems. My interests include frontend development, backend engineering, database management and building scalable web applications.</p>
          <a className="text-link" href="#experience">A bit about my journey <ArrowRight aria-hidden="true" /></a>
        </Reveal>
        <div className="highlight-grid">
          {highlights.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={index * 0.08}>
              <article className="highlight-card">
                <span className="highlight-icon"><Icon aria-hidden="true" /></span>
                <div><h3>{title}</h3><p>{description}</p></div>
                <ArrowUpRight className="highlight-arrow" aria-hidden="true" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="section-wrap section-block skills-section">
      <Reveal><div className="section-kicker">02 — THE TOOLKIT</div></Reveal>
      <div className="skills-heading">
        <Reveal><h2 className="section-title">Tools for the <span>whole stack.</span></h2></Reveal>
        <Reveal delay={0.08}><p className="section-intro">A flexible toolkit for taking an idea from the first component to the final deploy.</p></Reveal>
      </div>
      <div className="skills-grid">
        {skillGroups.map(({ title, icon: Icon, skills }, index) => (
          <Reveal key={title} delay={index * 0.07}>
            <article className="skill-card">
              <div className="skill-card-head"><span className="skill-icon"><Icon aria-hidden="true" /></span><h3>{title}</h3></div>
              <ul className="skill-tags">{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </article>
          </Reveal>
        ))}
      </div>
      <p className="skills-note"><Sparkles aria-hidden="true" /> Always learning, always adding another tool to the kit.</p>
    </section>
  )
}

function TravelPreview() {
  return (
    <div className="project-preview travel-preview" aria-label="Travel platform interface preview">
      <div className="mock-browser-bar"><span className="mock-brand">TRAVEL<span> &amp; STAYS</span></span><span className="mock-nav">Stays&nbsp;&nbsp; Experiences&nbsp;&nbsp; <b>Sign in</b></span></div>
      <div className="travel-scene"><div className="travel-sun" /><div className="travel-mountain mountain-back" /><div className="travel-mountain mountain-front" /><div className="travel-house"><i /><b /><span /></div><div className="travel-label"><span>YOUR NEXT CHAPTER</span><strong>Find a place<br />to feel at home.</strong></div><div className="map-pin-mock"><MapPin aria-hidden="true" /></div></div>
      <div className="travel-search"><span>Where to?</span><span>Check in</span><span>Guests</span><b><ArrowRight aria-hidden="true" /></b></div>
    </div>
  )
}

function RestaurantPreview() {
  return (
    <div className="project-preview restaurant-preview" aria-label="Nom Nom Station restaurant website preview">
      <div className="restaurant-nav"><span className="restaurant-logo">NOM NOM <i>STATION</i></span><span>MENU&nbsp;&nbsp;&nbsp; OUR STORY&nbsp;&nbsp;&nbsp; CONTACT</span><b>ORDER NOW <ArrowUpRight aria-hidden="true" /></b></div>
      <div className="restaurant-stage"><div className="restaurant-copy"><span>GOOD FOOD. GOOD MOOD.</span><strong>Made fresh.<br /><i>Made for you.</i></strong><small>Comfort food, made with a little extra love.</small><b>EXPLORE THE MENU <ArrowRight aria-hidden="true" /></b></div><div className="food-art"><div className="food-plate"><div className="food-bun bun-top" /><div className="food-lettuce" /><div className="food-patty" /><div className="food-bun bun-bottom" /><span className="food-tomato" /><span className="food-fries fries-one" /><span className="food-fries fries-two" /></div></div><span className="restaurant-side-note">FRESH DAILY · MADE WITH HEART</span></div>
      <div className="restaurant-bottom"><span>BURGERS · BOWLS · SIDES</span><span>GOOD THINGS, COMING RIGHT UP <ArrowRight aria-hidden="true" /></span></div>
    </div>
  )
}

function AnalyticsPreview() {
  return (
    <div className="project-preview analytics-preview" aria-label="Meta Ads campaign reporting dashboard preview">
      <div className="analytics-sidebar"><span className="analytics-logo"><i />META<br /><small>ADS</small></span><i /><i /><i /><i /><i /><div className="analytics-avatar">HP</div></div>
      <div className="analytics-main"><div className="analytics-top"><span>Campaign overview <small>Last 30 days ▾</small></span><b>EXPORT XLSX <ArrowUpRight aria-hidden="true" /></b></div><div className="analytics-stats"><div><small>SPEND</small><b>—</b><i>—</i></div><div><small>IMPRESSIONS</small><b>—</b><i>—</i></div><div><small>ROAS</small><b>—</b><i>—</i></div></div><div className="chart-card"><div><span>Performance over time</span><small>Spend&nbsp;&nbsp; Revenue</small></div><svg viewBox="0 0 360 92" preserveAspectRatio="none" aria-hidden="true"><path className="chart-fill" d="M0 75 C28 62 34 70 56 55 S93 56 112 42 S147 53 169 33 S207 40 225 26 S257 41 278 18 S316 25 333 13 S350 18 360 7 V92 H0Z" /><path className="chart-line" d="M0 75 C28 62 34 70 56 55 S93 56 112 42 S147 53 169 33 S207 40 225 26 S257 41 278 18 S316 25 333 13 S350 18 360 7" /></svg></div></div>
    </div>
  )
}

function ProjectPreview({ type }: { type: PortfolioProject["preview"] }) {
  if (type === "travel") return <TravelPreview />
  if (type === "restaurant") return <RestaurantPreview />
  return <AnalyticsPreview />
}

function isConfiguredUrl(url?: string) {
  const isHttpsUrl = Boolean(url && /^https:\/\//.test(url) && !url.includes("YOUR-") && !url.includes("YOUR_"))
  const isLocalPath = Boolean(url && url.startsWith("/") && !url.startsWith("//"))
  return isHttpsUrl || isLocalPath
}

function ProjectLink({ url, label, icon }: { url?: string; label: string; icon: "demo" | "github" }) {
  const Icon = icon === "demo" ? ExternalLink : Code2
  if (!isConfiguredUrl(url)) {
    return <span className="project-link project-link-unavailable"><Icon aria-hidden="true" />{label}<small>URL needed</small></span>
  }
  return <a className={icon === "demo" ? "project-link project-link-primary" : "project-link"} href={url} target="_blank" rel="noreferrer"><Icon aria-hidden="true" />{label}<ArrowUpRight aria-hidden="true" /></a>
}

function ProjectCard({ project, index }: { project: PortfolioProject; index: number }) {
  return (
    <Reveal delay={index * 0.1}>
      <article className={`project-card project-card-${project.preview}`}>
        <div className="project-preview-wrap"><ProjectPreview type={project.preview} /><span className="project-number">{project.number}</span><span className="project-placeholder-label">UI preview placeholder</span></div>
        <div className="project-card-content">
          <div className="project-category-row"><span>{project.category}</span>{project.status && <span className="coming-soon"><span />{project.status}</span>}</div>
          <h3>{project.name}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-tags">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
          <div className="project-features" aria-label={`${project.name} key features`}>
            {project.features.map((feature) => <span key={feature}><Check aria-hidden="true" />{feature}</span>)}
          </div>
          <div className="project-actions">
            {project.status ? <span className="coming-soon-note"><Sparkles aria-hidden="true" /> In progress</span> : <ProjectLink url={project.liveDemoUrl} label="Live Demo" icon="demo" />}
            {project.status ? null : <ProjectLink url={project.githubUrl} label="GitHub" icon="github" />}
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="section-wrap section-block projects-section">
      <Reveal><div className="section-kicker">03 — SELECTED WORK</div></Reveal>
      <div className="projects-heading">
        <Reveal><h2 className="section-title">Things I&apos;ve <span>Built</span></h2></Reveal>
        <Reveal delay={0.08}><p className="section-intro">Some of the projects I&apos;ve worked on, combining functionality, creativity and problem-solving.</p></Reveal>
      </div>
      <div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.number} project={project} index={index} />)}</div>
      <p className="project-link-note"><ExternalLink aria-hidden="true" /> GitHub repository URLs can be updated in <code>lib/projects.ts</code>.</p>
    </section>
  )
}

export function ExperienceSection() {
  return (
    <section id="experience" className="section-wrap section-block experience-section">
      <Reveal><div className="section-kicker">04 — EXPERIENCE & EDUCATION</div></Reveal>
      <div className="experience-heading"><Reveal><h2 className="section-title">Professional <span>Experience</span></h2></Reveal></div>
      <div className="journey-grid">
        <Reveal>
          <article className="journey-card experience-card">
            <div className="journey-card-top"><span className="journey-icon"><BriefcaseBusiness aria-hidden="true" /></span><span className="journey-period">JUL — AUG 2026</span></div>
            <div className="journey-label">PROFESSIONAL EXPERIENCE</div>
            <h3>Intern</h3>
            <p className="journey-org">Arriba Media Technologies Pvt. Ltd.</p>
            <div className="journey-project"><Terminal aria-hidden="true" /><span>Meta Ads Analytics &amp; Reporting Tool</span></div>
            <p className="journey-description">Developed a tool to automate campaign data processing and Excel report generation. Implemented dynamic CSV/TSV parsing, campaign performance aggregation, rule-based insights and multi-sheet exports using JavaScript, HTML, CSS and ExcelJS.</p>
            <div className="journey-date"><span>13 July 2026</span><span className="date-line" /><span>14 August 2026</span></div>
          </article>
        </Reveal>
        <Reveal delay={0.1}>
          <article className="journey-card education-card">
            <div className="journey-card-top"><span className="journey-icon"><GraduationCap aria-hidden="true" /></span><span className="journey-period">2022 — 2026</span></div>
            <div className="journey-label">EDUCATION</div>
            <h3>B.E. Electronics &amp;<br />Telecommunication</h3>
            <p className="journey-org">P.E.S. Modern College of Engineering</p>
            <div className="education-detail"><span><Coffee aria-hidden="true" /> Savitribai Phule Pune University</span><span><Check aria-hidden="true" /> CGPA <b>8.40</b></span></div>
            <div className="education-mark" aria-hidden="true">B.E.</div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section id="contact" className="section-wrap section-block contact-section">
      <Reveal><div className="contact-kicker"><span className="eyebrow-dot" /> 05 — YOUR NEXT BIG IDEA</div></Reveal>
      <div className="contact-layout">
        <div className="contact-copy">
          <Reveal><h2>Have a Project<br />in Mind? <span>Let&apos;s Talk.</span></h2></Reveal>
          <Reveal delay={0.08}><p>I&apos;m always open to discussing exciting projects, development opportunities and collaborations. Have something in mind? I&apos;d love to hear about it.</p></Reveal>
          <Reveal delay={0.16}>
            <div className="contact-socials">
              <a href={socialLinks.github} target="_blank" rel="noreferrer"><span className="social-text-mark" aria-hidden="true">GH</span><span>GitHub<small>github.com/herambpadhye</small></span><ArrowUpRight aria-hidden="true" /></a>
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer"><span className="social-text-mark" aria-hidden="true">in</span><span>LinkedIn<small>linkedin.com/in/heramb-padhye</small></span><ArrowUpRight aria-hidden="true" /></a>
              <div className="contact-email"><span className="email-icon">@</span><span>Email<small>Address to be added</small></span><span className="email-edit">EDIT IN CONFIG</span></div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.12} className="contact-form-wrap"><ContactForm /></Reveal>
      </div>
      <div className="contact-glow" aria-hidden="true" />
    </section>
  )
}
