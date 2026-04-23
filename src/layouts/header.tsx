import {
	motion,
	stagger,
	useMotionValueEvent,
	useScroll,
	type Variants,
} from "motion/react";
import { createContext, useContext, useEffect, useState } from "react";
import { navigationLinks } from "../data/navigation";

interface MobileMenuContextValue {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenuContext = createContext<MobileMenuContextValue>({
	open: false,
	setOpen: () => {},
});

function useMobileMenu() {
	return useContext(MobileMenuContext);
}

const navVariants: Variants = {
	scrolled: {
		background: "rgba(8,8,13,0.8)",
		backdropFilter: "blur(10px)",
		borderBottom: "1px solid rgba(255,255,255,0.1)",
	},
	top: {
		background: "#08080d",
		backdropFilter: "none",
		borderBottom: "none",
	},
};

export function Header() {
	const { scrollY } = useScroll();
	const [isScrolled, setIsScrolled] = useState(false);
	useMotionValueEvent(scrollY, "change", (latest) => {
		setIsScrolled(latest > 50);
	});

	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setMobileMenuOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<MobileMenuContext.Provider
			value={{ open: isMobileMenuOpen, setOpen: setMobileMenuOpen }}
		>
			<motion.header initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
				<motion.nav
					className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center gap-4 px-6 md:px-12 py-5"
					variants={navVariants}
					animate={isScrolled && !isMobileMenuOpen ? "scrolled" : "top"}
				>
					<a
						href="/"
						className="flex-none gap-3 font-display text-xl tracking-widest text-accent"
					>
						OOKAMIIIXD.
					</a>
					<ul className="hidden md:flex gap-8 whitespace-nowrap overflow-x-auto">
						{navigationLinks.map((link) => (
							<li key={link.href}>
								<a
									href={link.href}
									className="text-muted hover:text-white text-[11px] tracking-[.18em] uppercase transition-colors relative group"
									{...(link.newTab
										? { target: "_blank", rel: "noopener noreferrer" }
										: {})}
								>
									{link.label}
									<span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
								</a>
							</li>
						))}
					</ul>
					<MobileMenuTrigger />
				</motion.nav>
				<MobileMenu />
			</motion.header>
		</MobileMenuContext.Provider>
	);
}

function MobileMenuTrigger() {
	const { open, setOpen } = useMobileMenu();

	return (
		<motion.button
			type="button"
			className="md:hidden flex flex-col gap-1.25 p-1"
			initial="inactive"
			animate={open ? "active" : "inactive"}
			onClick={() => setOpen((prev) => !prev)}
		>
			<motion.div
				className="w-6 h-px bg-white"
				variants={{
					inactive: { rotate: 0, y: 0 },
					active: { rotate: 45, y: 6 },
				}}
			/>
			<motion.div
				className="h-px bg-accent"
				variants={{
					inactive: { width: 16 },
					active: { width: 0 },
				}}
			/>
			<motion.div
				className="w-6 h-px bg-white"
				variants={{
					inactive: { rotate: 0, y: 0 },
					active: { rotate: -45, y: -6 },
				}}
			/>
			<span className="sr-only">Toggle mobile menu</span>
		</motion.button>
	);
}

const mobileMenuVariants: Variants = {
	hidden: { opacity: 0, display: "none" },
	visible: {
		opacity: 1,
		display: "flex",
		transition: { delayChildren: stagger(0.1) },
	},
};

const mobileMenuItemVariants: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 },
};

function MobileMenu() {
	const { open, setOpen } = useMobileMenu();

	return (
		<motion.div
			className="fixed inset-0 z-40 bg-background backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden overflow-y-auto"
			variants={mobileMenuVariants}
			initial="hidden"
			animate={open ? "visible" : "hidden"}
		>
			{navigationLinks.map((link) => (
				<motion.a
					key={link.href}
					href={link.href}
					className="font-display text-5xl hover:text-accent transition-colors duration-300"
					onClick={() => setOpen(false)}
					variants={mobileMenuItemVariants}
					{...(link.newTab
						? { target: "_blank", rel: "noopener noreferrer" }
						: {})}
				>
					{link.label}
				</motion.a>
			))}
		</motion.div>
	);
}
