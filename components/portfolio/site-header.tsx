"use client"

import { useState } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { socialLinks } from "@/lib/projects"

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Contact", "contact"],
]

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="nav-shell">
        <a className="brand" href="#home" aria-label="Heramb Padhye, home" onClick={() => setIsOpen(false)}>
          <span className="brand-mark">h<span>.</span></span>
          <span className="brand-name">HERAMB PADHYE</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#contact">
          Let&apos;s Connect <ArrowUpRight aria-hidden="true" />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <nav id="mobile-navigation" className={`mobile-nav${isOpen ? " is-open" : ""}`} aria-label="Mobile navigation" aria-hidden={!isOpen}>
        {links.map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={() => setIsOpen(false)} tabIndex={isOpen ? 0 : -1}>
            {label}
          </a>
        ))}
        <div className="mobile-socials">
          <a href={socialLinks.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </nav>
    </header>
  )
}
