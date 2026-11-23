"use client"

import { useState, type FormEvent } from "react"
import { ArrowUpRight, Send } from "lucide-react"
import { contactEmail } from "@/lib/projects"

function hasConfiguredEmail() {
  return /^\S+@\S+\.\S+$/.test(contactEmail) && !contactEmail.includes("YOUR_")
}

export function ContactForm() {
  const [message, setMessage] = useState("")
  const [emailDraftUrl, setEmailDraftUrl] = useState("")

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get("name") ?? "")
    const senderEmail = String(formData.get("email") ?? "")
    const subject = String(formData.get("subject") ?? "")
    const body = String(formData.get("message") ?? "")

    if (!hasConfiguredEmail()) {
      setEmailDraftUrl("")
      setMessage("This form is not connected to an email service yet. Add a real email address in lib/projects.ts to prepare an email draft.")
      return
    }

    const mailto = new URL(`mailto:${contactEmail}`)
    mailto.searchParams.set("subject", subject || `Portfolio inquiry from ${name}`)
    mailto.searchParams.set("body", `Name: ${name}\nEmail: ${senderEmail}\n\n${body}`)
    const draftUrl = mailto.toString()
    setEmailDraftUrl(draftUrl)
    setMessage("Your email draft is ready. Select Open email draft to open it in your mail app.")
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-heading"><span>LET&apos;S MAKE IT HAPPEN</span><p>Tell me a little about what you&apos;re thinking.</p></div>
      <div className="form-row">
        <label>Name<input name="name" type="text" autoComplete="name" placeholder="Your name" required /></label>
        <label>Email<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
      </div>
      <label>Subject<input name="subject" type="text" placeholder="What&apos;s this about?" required /></label>
      <label>Message<textarea name="message" rows={4} placeholder="A few details about your idea..." required /></label>
      <button className="button-primary form-submit" type="submit">Prepare email draft <Send aria-hidden="true" /></button>
      <div className={`form-feedback${message ? " is-visible" : ""}`} role="status" aria-live="polite">
        <span>{message}</span>
        {emailDraftUrl && <a className="form-draft-link" href={emailDraftUrl} target="_blank" rel="noopener noreferrer">Open email draft <ArrowUpRight aria-hidden="true" /></a>}
      </div>
      <p className="form-note">This site does not send messages directly. Review and send the prefilled draft in your email app.</p>
    </form>
  )
}
