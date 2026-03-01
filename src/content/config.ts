import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.string().transform((str) => new Date(str)),
		tag: z.string(),
		icon: z.string(),
		featured: z.boolean().optional().default(false),
		author: z.string().default('HELFLAB Team'),
		readTime: z.string().optional(),
	}),
});

const portfolio = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.string().transform((str) => new Date(str)),
		tag: z.string(),
		icon: z.string(),
		featured: z.boolean().optional().default(false),
		client: z.string().optional(),
	}),
});

export const collections = { blog, portfolio };
