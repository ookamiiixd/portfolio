import { motion } from "motion/react";
import { useLayoutEffect, useRef, useState } from "react";
import { techs } from "../data/tech";
import { childrenVariants, parentVariants } from "../lib/animation";

export function About() {
	return (
		<motion.section
			id="about"
			className="relative px-6 md:px-12 py-24 md:py-36 overflow-hidden"
			variants={parentVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.25 }}
		>
			<motion.div
				className="ghost-num absolute top-8 left-6 md:left-12 select-none"
				variants={childrenVariants}
			>
				01
			</motion.div>
			<div className="grid md:grid-cols-[auto_1fr] gap-4 md:gap-16">
				<div className="relative z-10">
					<motion.p
						className="flex items-center gap-2 text-[10px] tracking-[.28em] uppercase text-accent mb-5"
						variants={childrenVariants}
					>
						<span className="text-muted">{"//"}</span> About Me
					</motion.p>
					<h2 className="font-display leading-[0.92] mb-12 text-[clamp(40px,6vw,78px)]">
						<motion.span variants={childrenVariants}>
							BUILDER
							<br />
						</motion.span>
						<motion.span
							className="font-serif italic text-muted text-[.72em] [-webkit-text-stroke:0] tracking-[0]"
							variants={childrenVariants}
						>
							by nature,
						</motion.span>
						<br />
						<motion.span variants={childrenVariants}>
							SHIPPER
							<br />
						</motion.span>
						<motion.span
							className="font-serif italic text-muted text-[.72em] [-webkit-text-stroke:0] tracking-[0]"
							variants={childrenVariants}
						>
							by obsession
						</motion.span>
					</h2>
				</div>
				<div>
					<motion.p
						className="font-serif italic text-white/60 text-[17px] leading-[1.75] mb-5"
						variants={childrenVariants}
					>
						I'm a software engineer with over{" "}
						<strong className="text-white font-normal not-italic">
							3 years of experience
						</strong>{" "}
						building and shipping full-stack web apps that actually work. I love
						the challenge of taking a wild idea and making it a reality on the
						web.
					</motion.p>
					<motion.p
						className="font-serif italic text-white/60 text-[17px] leading-[1.75] mb-5"
						variants={childrenVariants}
					>
						My secret sauce is{" "}
						<strong className="text-white font-normal not-italic">
							Effect-TS
						</strong>{" "}
						— I'm a big fan of writing rock-solid, type-safe, reliable code. On
						the frontend I reach for{" "}
						<strong className="text-white font-normal not-italic">React</strong>{" "}
						and love building systems that feel as good as they perform.
					</motion.p>
					<motion.p
						className="font-serif italic text-white/60 text-[17px] leading-[1.75]"
						variants={childrenVariants}
					>
						Lately I've also been diving into{" "}
						<strong className="text-white font-normal not-italic">
							Swift/SwiftUI
						</strong>{" "}
						and{" "}
						<strong className="text-white font-normal not-italic">
							Kotlin
						</strong>{" "}
						for mobile, and even tried building a simple 2D platformer in Godot
					</motion.p>
				</div>
			</div>
			<TechStack />
		</motion.section>
	);
}

const techSlices = Array.from({ length: 3 }, (_, i) =>
	techs.slice(
		Math.ceil((i * techs.length) / 3),
		Math.ceil(((i + 1) * techs.length) / 3),
	),
);

function TechStack() {
	return (
		<motion.div
			className="mt-10"
			variants={childrenVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.5 }}
		>
			<p className="text-center text-[10px] tracking-[.28em] uppercase text-muted mb-12">
				{"//"} Tech That I Have Worked With
			</p>
			<div className="grid gap-6">
				{techSlices.map((slice, i) => (
					<Marquee
						key={i}
						speed={40 + i * 20}
						direction={i % 2 === 0 ? "left" : "right"}
					>
						{slice.map((tech) => (
							<div
								key={tech.name}
								className="hoverable flex items-center gap-3 px-4 py-3 rounded-lg border border-white/5 bg-white/2 hover:border-accent/40 hover:bg-accent/5 transition-all duration-300"
							>
								<img
									src={tech.logo}
									alt={tech.name}
									className="h-5 w-auto transition-all duration-300"
									loading="lazy"
								/>
								<span className="text-sm font-medium text-white/70 transition-colors duration-300 whitespace-nowrap">
									{tech.name}
								</span>
							</div>
						))}
					</Marquee>
				))}
			</div>
		</motion.div>
	);
}

interface MarqueeProps {
	speed?: number;
	direction?: "left" | "right";
	children: React.ReactNode;
}

function Marquee({ children, speed = 80, direction = "left" }: MarqueeProps) {
	const trackRef = useRef<HTMLDivElement>(null);
	const [distance, setDistance] = useState(0);

	useLayoutEffect(() => {
		const el = trackRef.current;
		if (!el) return;

		const updateDistance = () => setDistance(el.scrollWidth / 2);

		updateDistance();

		const observer = new ResizeObserver(updateDistance);
		observer.observe(el);

		return () => observer.disconnect();
	}, []);

	const duration = distance > 0 ? distance / speed : 0;

	return (
		<div className="overflow-hidden group mask-[linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]">
			<motion.div
				ref={trackRef}
				className="flex w-max items-center"
				animate={
					distance
						? { x: direction === "left" ? [0, -distance] : [-distance, 0] }
						: { x: 0 }
				}
				transition={
					distance
						? {
								duration,
								ease: "linear",
								repeat: Infinity,
								repeatType: "loop",
							}
						: undefined
				}
			>
				<div className="flex items-center gap-8 pr-8">{children}</div>
				<div className="flex items-center gap-8 pr-8" aria-hidden="true">
					{children}
				</div>
			</motion.div>
		</div>
	);
}
