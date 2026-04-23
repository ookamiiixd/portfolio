import { motion } from "motion/react";
import mail from "../assets/socials/mail.svg";
import { childrenVariants, parentVariants } from "../lib/animation";

export function Contact() {
	return (
		<motion.section
			id="contact"
			className="relative px-6 md:px-12 py-24 md:py-32 border-t overflow-hidden border-muted/20"
			variants={parentVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.5 }}
		>
			<div className="relative z-10 max-w-2xl">
				<motion.p
					className="reveal text-[10px] tracking-[.28em] uppercase text-muted mb-5"
					variants={childrenVariants}
				>
					Get in touch
				</motion.p>
				<h2 className="reveal rd1 font-display leading-[0.88] mb-6 text-[clamp(56px,8vw,120px)]">
					<motion.span variants={childrenVariants}>
						Got an
						<br />
					</motion.span>
					<motion.span className="text-accent" variants={childrenVariants}>
						idea?
					</motion.span>
				</h2>
				<motion.p
					className="reveal rd2 font-serif italic text-white/50 text-lg leading-relaxed mb-10 max-w-md"
					variants={childrenVariants}
				>
					I'm currently open to new freelance work and full-time opportunities.
					Let's build something great together.
				</motion.p>
				<motion.a
					href="mailto:ookamiiixd@gmail.com"
					className="clip-corner inline-flex items-center gap-2 bg-accent text-background px-6 py-3.5 text-[11px] tracking-[.15em] uppercase font-medium hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(232,255,71,0.28)] transition-[translate,box-shadow] duration-300"
					variants={childrenVariants}
				>
					<img
						src={mail.src}
						alt="Email"
						className="size-4 invert"
						loading="lazy"
					/>
					ookamiiixd@gmail.com
				</motion.a>
			</div>
			<motion.div
				className="absolute -bottom-5 -left-2.5 font-display leading-none select-none pointer-events-none text-transparent text-[22vw] [-webkit-text-stroke:1px_rgba(255,255,255,.04)]"
				variants={childrenVariants}
			>
				HMU
			</motion.div>
		</motion.section>
	);
}
