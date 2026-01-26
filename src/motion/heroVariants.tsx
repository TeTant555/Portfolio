import type { Variants } from "motion/react"

// staggered entrance for the hero copy
export const heroContainer: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      delayChildren: 0.08,
      ease: [0.42, 0, 0.58, 1],
    },
  },
}

export const heroCopy: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const heroBadge: Variants = {
  hidden: {
    opacity: 0,
    y: -16,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.52,
      ease: [0.33, 1, 0.68, 1],
    },
  },
}

export const heroButtons: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.48,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export const heroMedia: Variants = {
  hidden: {
    opacity: 0,
    x: 64,
    rotate: -2,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    x: 0,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.28,
    },
  },
}