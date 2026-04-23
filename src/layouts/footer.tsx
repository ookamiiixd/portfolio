import { motion } from "motion/react";
import heart from "../assets/heart.svg";
import { socialLinks } from "../data/navigation";
import { childrenVariants, parentVariants } from "../lib/animation";

export function Footer() {
	return (
		<footer className="px-6 md:px-12 py-8 border-t border-muted/20">
			<motion.div
				className="flex flex-col sm:flex-row justify-between items-center gap-5"
				variants={parentVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
			>
				<motion.a
					href="/"
					className="font-display text-lg tracking-widest text-accent"
					variants={childrenVariants}
				>
					OOKAMIIIXD.
				</motion.a>

				<motion.div
					className="flex items-center gap-5"
					variants={childrenVariants}
				>
					{socialLinks.map((social) => (
						<a
							key={social.name}
							href={social.link}
							target="_blank"
							rel="noopener noreferrer"
							title={social.name}
							className="text-muted hover:text-accent transition-colors"
						>
							<img
								src={social.image}
								alt={social.name}
								className="size-5"
								loading="lazy"
							/>
						</a>
					))}
				</motion.div>

				<motion.a
					href="https://github.com/ookamiiixd/portfolio"
					target="_blank"
					rel="noopener noreferrer"
					className="text-[11px] text-muted inline-flex items-center gap-1.5 hover:underline"
					variants={childrenVariants}
				>
					Made with{" "}
					<img src={heart.src} alt="Heart" className="size-3" loading="lazy" />{" "}
					by yours truly
				</motion.a>
			</motion.div>
		</footer>
	);
}
