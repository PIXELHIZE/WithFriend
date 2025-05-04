// src/content.config.ts

import { z, defineCollection } from 'astro:content';

const friendsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    avatar: z.string(),
  }),
});

const worksCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    cover: z.string().optional(),
  }),
});

export const collections = {
  friends: friendsCollection,
  works: worksCollection,
};
