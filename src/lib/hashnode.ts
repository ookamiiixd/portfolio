import { z } from "astro/zod";
import type { DynamicCardData } from "../components/dynamic-card";

const PostSchema = z.object({
	title: z.string(),
	brief: z.string(),
	url: z.string(),
	publishedAt: z.string(),
	coverImage: z.object({ url: z.string() }),
	tags: z.array(z.object({ name: z.string() })),
});

const PostsSchema = z.object({
	publication: z.object({
		posts: z.object({
			edges: z.array(
				z.object({
					node: PostSchema,
				}),
			),
		}),
	}),
});

const query = `query {
    publication(host: "blog.ookamiiixd.dev") {
        posts(first: 6) {
            edges {
                node {
                    title
                    brief
                    url
                    publishedAt
                    coverImage { url }
                    tags { name }
                }
            }
        }
    }
}`;

export async function fetchPosts() {
	const response = await fetch("https://gql.hashnode.com", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ query }),
	});
	const { data } = await response.json();
	if (!response.ok || !data) {
		throw new Error("Unexpected error fetching posts");
	}

	const parsed = PostsSchema.parse(data);

	return parsed.publication.posts.edges.map((edge) => ({
		title: edge.node.title,
		description: edge.node.brief,
		tags: edge.node.tags.map((tag) => tag.name),
		subtitle: new Date(edge.node.publishedAt).toLocaleDateString("en-US", {
			year: "numeric",
			month: "short",
			day: "numeric",
		}),
		image: edge.node.coverImage.url,
		link: edge.node.url,
	})) satisfies DynamicCardData[];
}
