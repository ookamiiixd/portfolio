import { motion } from "motion/react";
import avatar from "../assets/avatar.png";
import avatarContainer from "../assets/avatar-container.svg";
import { childrenVariants, parentVariants } from "../lib/animation";

export function Hero() {
	return (
		<motion.section
			id="hero"
			className="min-h-screen relative overflow-hidden grid lg:grid-cols-2 gap-6 pb-16 pt-20 md:pt-28"
			variants={parentVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
		>
			<motion.div
				className="flex flex-col justify-end px-6 md:px-12 relative z-10"
				variants={parentVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
			>
				<motion.p
					className="flex items-center gap-3 text-[11px] tracking-[.22em] uppercase text-muted mb-5"
					variants={childrenVariants}
				>
					<span className="w-8 h-px bg-accent inline-block shrink-0" />
					Hey, I'm
				</motion.p>
				<h1 className="font-display leading-[0.9] mb-5 text-[clamp(60px,9vw,120px)]">
					<motion.span
						className="block text-transparent [-webkit-text-stroke:1.5px_rgba(240,240,240,.18)]"
						variants={childrenVariants}
					>
						ROYHAN
					</motion.span>
					<motion.span className="block" variants={childrenVariants}>
						ABDUR<em className="not-italic text-accent">ROHIM</em>
					</motion.span>
				</h1>
				<motion.p
					className="font-serif italic text-muted text-lg leading-relaxed max-w-md mb-3"
					variants={childrenVariants}
				>
					Full-Stack Developer & Tech Enthusiast — I love taking wild ideas and
					making them real on the web.
				</motion.p>
				<motion.p
					className="font-mono text-[11px] tracking-[.15em] text-muted mb-10"
					variants={childrenVariants}
				>
					Semarang, Central Java, Indonesia
				</motion.p>
				<motion.div
					className="flex flex-wrap gap-4 items-center"
					variants={childrenVariants}
				>
					<a
						href="#work"
						className="clip-corner bg-accent text-background px-6 py-3.5 text-[11px] tracking-[.15em] uppercase font-medium hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(232,255,71,0.28)] transition-all duration-200"
					>
						See My Work
					</a>
					<a
						href="#contact"
						className="text-muted hover:text-white text-[11px] tracking-[.15em] uppercase transition-colors flex items-center gap-2"
					>
						Say hello ↗
					</a>
				</motion.div>
			</motion.div>

			<motion.div
				className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-px z-10 bg-linear-to-b from-transparent via-muted/20 to-transparent"
				variants={childrenVariants}
			/>

			<div className="order-first lg:order-last flex relative items-center justify-center">
				<motion.div
					className="hoverable relative w-80 h-80 xl:w-96 xl:h-96 group"
					variants={childrenVariants}
				>
					<div className="absolute inset-0 flex items-center justify-center z-10">
						<div className="w-44 h-44 xl:w-52 xl:h-52 rounded-full overflow-hidden border relative border-muted/20 group-hover:scale-105 transition-all duration-300">
							<img
								src={avatar.src}
								alt="Avatar"
								className="w-full h-full object-cover md:grayscale md:contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-300"
							/>
						</div>
					</div>
					<img
						src={avatarContainer.src}
						alt="Avatar Container"
						className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite] group-hover:[animation-play-state:paused]"
					/>
				</motion.div>
			</div>

			<motion.div
				className="absolute top-20 lg:top-auto lg:bottom-10 right-6 lg:right-12 flex flex-col items-center gap-3 text-[10px] tracking-[.2em] uppercase text-muted [writing-mode:vertical-rl]"
				variants={childrenVariants}
			>
				<motion.span
					className="w-px h-15 bg-linear-to-b from-accent to-transparent"
					initial={{ scaleY: 0, originY: 0 }}
					animate={{ scaleY: 1, originY: 0 }}
					transition={{
						duration: 1.5,
						repeat: Infinity,
						repeatType: "reverse",
						ease: "easeInOut",
					}}
				/>
				Scroll
			</motion.div>
		</motion.section>
	);
}
