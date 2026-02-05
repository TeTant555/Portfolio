import type { Variants } from "motion/react";

export const projectsSectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const projectsIntroStaggerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.05,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.18,
      delayChildren: 0.12,
    },
  },
};

export const projectsIntroItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const carouselAuroraVariants: Variants = {
  initial: {
    opacity: 0.35,
    backgroundPosition: "0% 50%",
  },
  animate: {
    opacity: [0.25, 0.5, 0.3],
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 30,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

export const activeCardAuraVariants: Variants = {
  inactive: {
    filter: "blur(1.2px)",
    y: 0,
    transition: {
      filter: { duration: 0.18, ease: [0.16, 1, 0.3, 1] },
      y: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
    },
  },
  active: {
    y: [-1, 0, -1],
    filter: "blur(0px)",
    transition: {
      filter: { duration: 0.16, ease: [0.16, 1, 0.3, 1] },
      y: {
        duration: 8.2,
        ease: [0.42, 0, 0.58, 1],
        repeat: Infinity,
      },
    },
  },
};

export const cardContentStaggerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
    filter: "blur(10px)",
  },
  inactive: {
    opacity: 0.62,
    y: 0,
    filter: "blur(2px)",
    transition: {
      filter: { duration: 0.16, ease: [0.16, 1, 0.3, 1] },
      opacity: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.12,
      delayChildren: 0.1,
      filter: { duration: 0.18, ease: [0.16, 1, 0.3, 1] },
      opacity: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
      y: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  },
};

export const cardContentItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
    filter: "blur(8px)",
  },
  inactive: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const imageRevealVariants: Variants = {
  hidden: {
    opacity: 0.9,
    scale: 1.06,
    filter: "saturate(0.9) contrast(0.95)",
  },
  inactive: {
    opacity: 0.75,
    scale: 1.02,
    filter: "saturate(0.88) contrast(0.92)",
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "saturate(1) contrast(1)",
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 26,
      mass: 1,
    },
  },
};

export const shineSweepVariants: Variants = {
  initial: {
    x: "-140%",
    opacity: 0,
  },
  animate: {
    x: ["-140%", "140%"],
    opacity: [0, 0.55, 0],
    transition: {
      duration: 3.4,
      ease: [0.16, 1, 0.3, 1],
      repeat: Infinity,
      repeatDelay: 3.6,
    },
  },
};

export const githubCtaVariants: Variants = {
  rest: {
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
  hover: {
    y: -2,
    scale: 1.01,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
  pulse: {
    scale: [1, 1.018, 1],
    transition: {
      duration: 4.8,
      ease: [0.42, 0, 0.58, 1],
      repeat: Infinity,
    },
  },
};

export const githubCtaGlowVariants: Variants = {
  initial: {
    opacity: 0.25,
    filter: "blur(12px)",
  },
  animate: {
    opacity: [0.18, 0.55, 0.22],
    filter: ["blur(14px)", "blur(18px)", "blur(14px)"],
    transition: {
      duration: 5.0,
      ease: [0.42, 0, 0.58, 1],
      repeat: Infinity,
    },
  },
};

export const navButtonVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.04,
    transition: { type: "spring", stiffness: 220, damping: 20 },
  },
  tap: { scale: 0.96 },
};

export const dotVariants: Variants = {
  inactive: {
    scale: 1,
    opacity: 0.6,
  },
  active: {
    scale: 1.04,
    opacity: 1,
  },
  hover: {
    scale: 1.12,
    opacity: 0.95,
    transition: { type: "spring", stiffness: 240, damping: 22 },
  },
};
