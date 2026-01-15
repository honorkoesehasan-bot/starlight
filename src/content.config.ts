import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.string(),
		readingTime: z.string().optional(),
		mainKeyword: z.string(),
		secondaryKeywords: z.array(z.string()),
	}),
});

export const collections = { blog };
