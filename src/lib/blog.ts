import { z } from "astro/zod";
import type { DynamicCardData } from "../components/dynamic-card";

const PostsSchema = z.array(
	z.object({
		title: z.string(),
		description: z.string(),
		url: z.url(),
		cover_image: z.url().optional(),
		tag_list: z.array(z.string()),
		published_at: z.string(),
	}),
);

export async function fetchPosts() {
	const response = await fetch(
		"https://dev.to/api/articles?username=ookamiiixd&state=all",
	);
	const json = await response.json();
	if (!response.ok || !json) {
		throw new Error("Unexpected error fetching blog posts");
	}

	const posts = PostsSchema.parse(json);
	return posts.map((post) => ({
		title: post.title,
		description: post.description,
		link: post.url,
		image: post.cover_image,
		tags: post.tag_list,
		subtitle: new Date(post.published_at).toLocaleDateString("en-US", {
			year: "numeric",
			month: "short",
			day: "numeric",
		}),
	})) satisfies DynamicCardData[];
}
