"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  once?: boolean
  from?: "up" | "left" | "right"
  immediate?: boolean
}

export function Reveal({
  children,
  className,
  delay = 0,
  once = true,
  from = "up",
  immediate = false,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion()
  const offset = from === "left" ? -22 : from === "right" ? 22 : 18
  const initial = prefersReducedMotion ? false : { opacity: 0, y: from === "up" ? offset : 0, x: from === "up" ? 0 : offset }
  const visible = { opacity: 1, x: 0, y: 0 }
  const transition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const }

  return (
    <motion.div
      className={className}
      initial={initial}
      {...(immediate ? { animate: visible } : { whileInView: visible, viewport: { once, amount: 0.18 } })}
      transition={transition}
    >
      {children}
    </motion.div>
  )
}
