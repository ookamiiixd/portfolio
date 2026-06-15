import { motion, type Variants } from "motion/react";
import { experiences } from "../data/experiences";
import { childrenVariants, parentVariants } from "../lib/animation";

const variants: Variants = {
	hidden: { opacity: 0, x: -40 },
	visible: (i = 0) => ({
		opacity: 1,
		x: 0,
		transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1], delay: i * 0.2 },
	}),
};

export function Experience() {
	return (
		<motion.section
			id="experience"
			className="relative px-6 md:px-12 py-24 md:py-32 overflow-hidden border-t border-muted/20"
			variants={parentVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.25 }}
		>
			<motion.div
				className="ghost-num absolute top-4 left-6 md:left-12 select-none"
				variants={childrenVariants}
			>
				03
			</motion.div>
			<div className="relative z-10">
				<motion.p
					className="flex items-center gap-2 text-[10px] tracking-[.28em] uppercase text-accent mb-5"
					variants={childrenVariants}
				>
					<span className="text-muted">{"//"}</span> Background
				</motion.p>
				<motion.h2
					className="font-display leading-none mb-16 text-[clamp(40px,6vw,78px)]"
					variants={childrenVariants}
				>
					EXPERIENCE
				</motion.h2>

				<div className="max-w-3xl">
					<div className="relative pl-6">
						<div className="absolute top-0 left-0 w-px h-full bg-linear-to-b from-accent to-accent/20" />
						{experiences.map((exp, i) => (
							<motion.div
								key={i}
								className="relative mb-12 pl-4"
								variants={variants}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.5 }}
							>
								<div className="absolute top-0.75 -left-1 size-2 bg-accent rounded-full shadow-accent shadow" />

								<p className="text-[10px] tracking-[.18em] uppercase text-accent mb-1">
									{exp.duration}
								</p>
								<h3 className="font-display text-3xl tracking-wide mb-1 uppercase">
									{exp.title}
								</h3>
								<p className="text-[11px] text-muted tracking-wide mb-4">
									{exp.company}
								</p>
								<p className="font-serif italic text-white/55 text-[15px] leading-relaxed mb-4">
									{exp.description}
								</p>
								<div className="flex flex-wrap gap-1.5">
									{exp.skills.map((skill) => (
										<span
											key={skill}
											className="text-[9px] tracking-[.15em] uppercase px-2 py-0.5 border text-muted border-muted/20"
										>
											{skill}
										</span>
									))}
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</motion.section>
	);
}
