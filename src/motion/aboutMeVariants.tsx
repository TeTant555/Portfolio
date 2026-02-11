import type { Variants } from "motion/react";

export const aboutSectionVariants: Variants = {
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
			duration: 0.85,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};

export const aboutHeaderStagger: Variants = {
	hidden: {
		opacity: 0,
		y: 16,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.12,
			delayChildren: 0.06,
		},
	},
};

export const aboutHeaderItem: Variants = {
	hidden: {
		opacity: 0,
		y: 12,
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

export const aboutContentGrid: Variants = {
	hidden: {
		opacity: 1,
	},
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.18,
			delayChildren: 0.12,
		},
	},
};

export const aboutProfileCard: Variants = {
	hidden: {
		opacity: 0,
		y: 28,
		rotate: -1,
	},
	visible: {
		opacity: 1,
		y: 0,
		rotate: 0,
		transition: {
			duration: 0.75,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};

export const aboutListStagger: Variants = {
	hidden: {
		opacity: 1,
	},
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.08,
		},
	},
};

export const aboutListItem: Variants = {
	hidden: {
		opacity: 0,
		y: 10,
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

export const aboutTagStagger: Variants = {
	hidden: {
		opacity: 1,
	},
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.08,
			delayChildren: 0.08,
		},
	},
};

export const aboutTagItem: Variants = {
	hidden: {
		opacity: 0,
		scale: 0.94,
	},
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.4,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};

export const aboutFocusList: Variants = {
	hidden: {
		opacity: 1,
	},
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.14,
			delayChildren: 0.1,
		},
	},
};

export const aboutFocusItem: Variants = {
	hidden: {
		opacity: 0,
		x: 18,
		y: 14,
	},
	visible: {
		opacity: 1,
		x: 0,
		y: 0,
		transition: {
			duration: 0.6,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};
