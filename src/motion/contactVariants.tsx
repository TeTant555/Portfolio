import type { Variants } from "motion/react";

export const contactSectionVariants: Variants = {
	hidden: {
		opacity: 0,
		y: 40,
		filter: "blur(12px)",
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

export const contactHeaderStagger: Variants = {
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

export const contactHeaderItem: Variants = {
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

export const contactCardsGrid: Variants = {
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

export const contactCardVariants: Variants = {
	hidden: {
		opacity: 0,
		y: 30,
		rotate: -1.2,
	},
	visible: {
		opacity: 1,
		y: 0,
		rotate: 0,
		transition: {
			duration: 0.8,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};

export const contactChannelList: Variants = {
	hidden: {
		opacity: 1,
	},
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.12,
			delayChildren: 0.08,
		},
	},
};

export const contactChannelItem: Variants = {
	hidden: {
		opacity: 0,
		x: -18,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};

export const contactFormStagger: Variants = {
	hidden: {
		opacity: 1,
	},
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.12,
		},
	},
};

export const contactFormItem: Variants = {
	hidden: {
		opacity: 0,
		y: 14,
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
