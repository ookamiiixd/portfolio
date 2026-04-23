import { motion, useMotionValue, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const variants: Variants = {
	base: { width: 16, height: 16 },
	big: { width: 40, height: 40 },
};

export function Cursor() {
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const ref = useRef<HTMLDivElement>(null);
	const [isHoverableHovered, setIsHoverableHovered] = useState(false);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			x.set(e.clientX);
			y.set(e.clientY);
		};

		const handleMouseOver = (e: MouseEvent) => {
			let hovered = false;
			if (
				e.target instanceof Element &&
				e.target.closest("a, button, .hoverable")
			) {
				hovered = true;
			}

			setIsHoverableHovered(hovered);
		};

		document.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("mouseover", handleMouseOver);

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseover", handleMouseOver);
		};
	}, [x, y]);

	return (
		<motion.div
			ref={ref}
			style={{ x: x, y: y }}
			variants={variants}
			animate={isHoverableHovered ? "big" : "base"}
			transition={{ type: "spring", damping: 15, stiffness: 75 }}
			className="hidden md:block bg-accent rounded-full fixed top-0 left-0 -translate-1/2 z-50 pointer-events-none mix-blend-difference"
		/>
	);
}
