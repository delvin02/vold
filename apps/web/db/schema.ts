import { boolean, index, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'

export const posts = pgTable(
  'posts',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    title: text('title').notNull(),
    slug: text('slug').notNull().unique(),
    excerpt: text('excerpt').notNull(),
    body: text('body').notNull(),
    coverImageUrl: text('cover_image_url'),
    tags: text('tags').array().notNull().default([]),
    published: boolean('published').notNull().default(false),
    publishedAt: timestamp('published_at', { withTimezone: true }),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    index('posts_published_published_at_idx').on(table.published, table.publishedAt),
  ],
)

export type Post = typeof posts.$inferSelect
export type NewPost = typeof posts.$inferInsert
