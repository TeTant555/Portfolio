import type { Variants } from "motion/react";

export const educationSectionVariants: Variants = {
	hidden: {
		opacity: 0,
		y: 40,
		filter: "blur(10px)",
	},
	visible: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: {
			duration: 0.8,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};

export const educationHeaderStagger: Variants = {
	hidden: {
		opacity: 0,
		y: 20,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.12,
			delayChildren: 0.08,
		},
	},
};

export const educationHeaderItem: Variants = {
	hidden: {
		opacity: 0,
		y: 16,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.55,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};

export const educationTimelineVariants: Variants = {
	hidden: {
		opacity: 0,
		scaleY: 0,
		transformOrigin: "top",
	},
	visible: {
		opacity: 1,
		scaleY: 1,
		transition: {
			duration: 0.9,
			delay: 0.15,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};

export const educationListVariants: Variants = {
	hidden: {
		opacity: 1,
	},
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.1,
		},
	},
};

export const educationCardVariants: Variants = {
	hidden: {
		opacity: 0,
		y: 28,
		x: -12,
		filter: "blur(8px)",
	},
	visible: {
		opacity: 1,
		y: 0,
		x: 0,
		filter: "blur(0px)",
		transition: {
			duration: 0.8,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};

export const educationDotVariants: Variants = {
	hidden: {
		opacity: 0,
		scale: 0.6,
	},
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			type: "spring",
			stiffness: 170,
			damping: 18,
			mass: 0.7,
		},
	},
};

export const educationCardContentStagger: Variants = {
	hidden: {
		opacity: 1,
	},
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.08,
			delayChildren: 0.05,
		},
	},
};

export const educationCardContentItem: Variants = {
	hidden: {
		opacity: 0,
		y: 12,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.45,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};
