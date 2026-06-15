import hoptima from "../assets/works/hoptima.png";
import ispilot from "../assets/works/ispilot.png";
import meowditation from "../assets/works/meowditation.png";
import payment from "../assets/works/payment.png";
import portfolio from "../assets/works/portfolio.png";
import wavvy from "../assets/works/wavvy.png";
import type { DynamicCardData } from "../components/dynamic-card";

export const projects = [
	{
		title: "Portfolio (This Site)",
		subtitle: "Apr 2026",
		description:
			"The very website you're on right now! My very first attempt at a personal portfolio site. It's a constantly evolving project where I experiment with new ideas and techniques to showcase my work and personality.",
		tags: ["Astro", "React", "TypeScript", "Framer Motion"],
		link: "https://github.com/ookamiiixd/portfolio",
		image: portfolio.src,
	},
	{
		title: "Wavvy (baileys-api)",
		subtitle: "Sep 2021 - Present",
		description:
			"Self-hosted WhatsApp API gateway wrapping Baileys into a clean REST API with a dashboard. Rebuilt from scratch with Effect-TS, OpenTelemetry, React + TanStack.",
		tags: ["Effect", "TypeScript", "React", "OpenAPI"],
		link: "https://github.com/ookamiiixd/baileys-api",
		image: wavvy.src,
	},
	{
		title: "ISPilot Landing Page",
		subtitle: "Mar 2026",
		description:
			"The landing page part of the ISPilot project. All-in-one ISP management solution with a modern boxy UI, i18n, dark/light mode. Built with React + TanStack Router.",
		tags: ["React", "TanStack Router", "TypeScript"],
		link: "https://ispilot-landing.ookamiiixd.dev",
		image: ispilot.src,
	},
	{
		title: "Meowditation",
		subtitle: "Sep 2025",
		description:
			"An iOS app designed to provide immediate, accessible relief for acute stress and anxiety — anytime, anywhere. Built around a friendly virtual cat character named Odi, it offers a suite of science-backed features for quick therapeutic relief through an engaging interface.",
		tags: ["Swift", "SwiftUI", "Haptic Feedback"],
		image: meowditation.src,
	},
	{
		title: "Hoptima",
		subtitle: "Nov 2024 - Dec 2024",
		description:
			"An AI-powered Android app designed to simplify the property search process in Yogyakarta, helping users find the best house match based on their preferences and budget through real-time ML-driven recommendations.",
		tags: ["Android", "Kotlin", "Android Jetpack"],
		link: "https://github.com/Hoptima/android",
		image: hoptima.src,
	},
	{
		title: "TsabitNET Payment",
		subtitle: "Jan 2024 - Mar 2024",
		description:
			"An internal full-stack web app for managing client payments and subscriptions for a local ISP company, built solo as a freelance project. Developed with Remix, it supports both automatic payments via Tripay payment gateway and manual payment submissions, with automatic WhatsApp notifications for customer updates.",
		tags: ["React", "Remix", "TypeScript", "Payment Gateway"],
		image: payment.src,
	},
] satisfies DynamicCardData[];

export const noteworthyProjects = [
	{
		title: "Yoimiya",
		description:
			"A discord bot for simulating Genshin Impact's wish (gacha) system",
		tags: ["TypeScript", "Discord.js", "Node.js"],
		link: "https://github.com/ookamiiixd/yoimiya",
	},
	{
		title: "java-audio-player",
		description:
			"Simple desktop audio player built with JavaFX, supporting common audio formats",
		tags: ["Java", "JavaFX", "Maven"],
		link: "https://github.com/ookamiiixd/java-audio-player",
	},
	{
		title: "simple-image-resize-merge",
		description:
			"Simple CLI tool for resizing and merging images in common paper sizes.",
		tags: ["TypeScript", "CLI", "Sharp"],
		link: "https://github.com/ookamiiixd/simple-image-resize-merge",
	},
] satisfies DynamicCardData[];
