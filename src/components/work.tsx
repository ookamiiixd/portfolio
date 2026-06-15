import { motion } from "motion/react";
import { noteworthyProjects, projects } from "../data/projects";
import { childrenVariants, parentVariants } from "../lib/animation";
import { DynamicCard } from "./dynamic-card";

export function Work() {
	return (
		<section
			id="work"
			className="relative px-6 md:px-12 py-24 md:py-32 overflow-hidden border-t border-muted/20"
		>
			<motion.div
				variants={parentVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
			>
				<motion.div
					className="ghost-num absolute top-4 right-6 md:right-12 select-none"
					variants={childrenVariants}
				>
					02
				</motion.div>
				<div className="relative z-10">
					<div className="reveal flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
						<motion.div variants={childrenVariants}>
							<p className="flex items-center gap-2 text-[10px] tracking-[.28em] uppercase text-accent mb-3">
								<span className="text-muted">{"//"}</span> Selected Work
							</p>
							<h2 className="font-display leading-none text-[clamp(40px,6vw,78px)]">
								Work
							</h2>
						</motion.div>
						<motion.a
							href="https://github.com/ookamiiixd"
							target="_blank"
							className="text-muted hover:text-white text-[11px] tracking-[.15em] uppercase flex items-center gap-2 transition-colors"
							rel="noopener"
							variants={childrenVariants}
						>
							GitHub ↗
						</motion.a>
					</div>
				</div>
			</motion.div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{projects.map((project, i) => (
					<DynamicCard key={i} data={project} custom={i} />
				))}
			</div>

			<motion.div
				className="mt-24"
				variants={childrenVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
			>
				<p className="text-center text-[10px] tracking-[.28em] uppercase text-muted mb-12">
					{"//"} Some Other Noteworthy Projects
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{noteworthyProjects.map((project, i) => (
						<DynamicCard key={i} data={project} custom={i} />
					))}
				</div>
			</motion.div>
		</section>
	);
}
