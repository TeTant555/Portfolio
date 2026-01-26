import type { Variants } from "motion/react";

export const techStackSectionVariants: Variants = {
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
			duration: 0.75,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};

export const techStackColumnVariants: Variants = {
	hidden: {
		opacity: 0,
		y: 32,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			delay: 0.12,
			ease: [0.4, 0, 0.2, 1],
		},
	},
};

export const techStackCardListVariants: Variants = {
	hidden: {
		opacity: 1,
	},
	visible: {
		opacity: 1,
		transition: {
			delayChildren: 0.28,
			staggerChildren: 0.14,
		},
	},
};

export const techStackCardItemVariants: Variants = {
	hidden: {
		opacity: 0,
		x: -32,
		rotate: -2,
	},
	visible: {
		opacity: 1,
		x: 0,
		rotate: 0,
		transition: {
			type: "spring",
			stiffness: 160,
			damping: 26,
			mass: 0.8,
		},
	},
};

export const techStackRightColumnVariants: Variants = {
	hidden: {
		opacity: 0,
		y: 24,
		scale: 0.96,
	},
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.7,
			delay: 0.35,
			ease: [0.34, 1.56, 0.64, 1],
		},
	},
};

export const techStackLottieVariants: Variants = {
	hidden: {
		opacity: 0,
		scale: 0.9,
		rotate: -6,
	},
	visible: {
		opacity: 1,
		scale: 1,
		rotate: 0,
		transition: {
			type: "spring",
			stiffness: 140,
			damping: 24,
		},
	},
};

export const techStackButtonVariants: Variants = {
	hidden: {
		opacity: 0,
		y: 20,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			delay: 0.18,
			ease: [0.4, 0, 0.2, 1],
		},
	},
};
