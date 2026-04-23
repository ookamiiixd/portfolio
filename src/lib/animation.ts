import { stagger, type Variants } from "motion";

export const parentVariants: Variants = {
	hidden: {},
	visible: {
		transition: {
			delayChildren: stagger(0.12),
		},
	},
};

export const childrenVariants: Variants = {
	hidden: { opacity: 0, y: 32 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
	},
};
