import { motion, type Variants } from "motion/react";
import folder from "../assets/folder.svg";

export interface DynamicCardData {
	title: string;
	description: string;
	tags: string[];
	subtitle?: string;
	image?: string;
	link?: string;
}

export interface DynamicCardProps
	extends React.ComponentProps<typeof motion.a> {
	data: DynamicCardData;
}

const variants: Variants = {
	hidden: { opacity: 0, y: 40 },
	visible: (i = 0) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1], delay: i * 0.2 },
	}),
};

const imageVariants: Variants = {
	hidden: { scale: 1.1 },
	visible: { scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export function DynamicCard({ data, ...props }: DynamicCardProps) {
	return (
		<motion.a
			href={data.link ?? "#"}
			target={data.link ? "_blank" : undefined}
			rel={data.link ? "noopener noreferrer" : undefined}
			className="hoverable relative bg-surface border overflow-hidden group border-muted/20 flex flex-col  hover:bg-accent/5 transition-colors duration-300"
			variants={variants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.5 }}
			onClick={(e) => {
				if (!data.link) e.preventDefault();
			}}
			{...props}
		>
			{data.image && (
				<motion.img
					src={data.image}
					alt={data.title}
					className="flex-none w-full h-44 md:h-52 object-cover md:grayscale md:group-hover:grayscale-0 transition-[filter,opacity,scale] duration-700 opacity-60 md:group-hover:opacity-100 md:group-hover:scale-110"
					loading="lazy"
					variants={imageVariants}
				/>
			)}
			<div className="p-6 md:p-7 relative z-10 flex flex-col h-full">
				{!data.image && (
					<img
						src={folder.src}
						alt="Folder"
						className="size-10 mb-3"
						loading="lazy"
					/>
				)}
				{data.subtitle && (
					<p className="text-[10px] tracking-[.2em] text-muted mb-2">
						{data.subtitle}
					</p>
				)}
				<h3 className="flex-none font-display text-3xl tracking-wide mb-2 line-clamp-2">
					{data.title}
				</h3>
				<p className="flex-1 font-serif italic text-white/50 text-sm leading-relaxed mb-5 line-clamp-3">
					{data.description}
				</p>
				<div className="flex-none flex flex-wrap gap-1.5">
					{data.tags.map((tag) => (
						<span
							key={tag}
							className="text-[9px] tracking-[.15em] uppercase px-2.5 py-1 border text-muted border-muted/20"
						>
							{tag}
						</span>
					))}
				</div>
			</div>
			{data.link && (
				<span className="absolute bottom-2 right-4 text-accent text-xl group-hover:bottom-4 transition-all duration-300">
					↗
				</span>
			)}
			<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
		</motion.a>
	);
}
