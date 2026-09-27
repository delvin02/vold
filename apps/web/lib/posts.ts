import { and, desc, eq, isNotNull, ne } from 'drizzle-orm'

import { getDb } from '@/db'
import { posts, type NewPost, type Post } from '@/db/schema'

export function readPostForm(formData: FormData) {
  const title = String(formData.get('title') ?? '').trim()
  const rawSlug = String(formData.get('slug') ?? '').trim()
  const excerpt = String(formData.get('excerpt') ?? '').trim()
  const body = String(formData.get('body') ?? '').trim()
  const tagsRaw = String(formData.get('tags') ?? '').trim()
  const coverImageUrl = String(formData.get('coverImageUrl') ?? '').trim()
  const published = formData.get('published') === 'on'

  const tags = tagsRaw
    ? tagsRaw
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean)
    : []

  return {
    title,
    slug: slugify(rawSlug || title),
    excerpt,
    body,
    tags,
    published,
    coverImageUrl: coverImageUrl || null,
  }
}

export function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

export async function listPublishedPosts(): Promise<Post[]> {
  const db = getDb()
  return db
    .select()
    .from(posts)
    .where(and(eq(posts.published, true), isNotNull(posts.publishedAt)))
    .orderBy(desc(posts.publishedAt))
}

export async function getPublishedPostBySlug(slug: string): Promise<Post | undefined> {
  const db = getDb()
  const [post] = await db
    .select()
    .from(posts)
    .where(and(eq(posts.slug, slug), eq(posts.published, true)))
    .limit(1)
  return post
}

export async function listAllPosts(): Promise<Post[]> {
  const db = getDb()
  return db.select().from(posts).orderBy(desc(posts.createdAt))
}

export async function getPostById(id: string): Promise<Post | undefined> {
  const db = getDb()
  const [post] = await db.select().from(posts).where(eq(posts.id, id)).limit(1)
  return post
}

export async function isSlugTaken(slug: string, excludeId?: string): Promise<boolean> {
  const db = getDb()
  const rows = await db
    .select({ id: posts.id })
    .from(posts)
    .where(excludeId ? and(eq(posts.slug, slug), ne(posts.id, excludeId)) : eq(posts.slug, slug))
    .limit(1)
  return rows.length > 0
}

export async function createPost(input: NewPost): Promise<Post> {
  const db = getDb()
  const [post] = await db.insert(posts).values(input).returning()
  if (!post) throw new Error('Failed to create post')
  return post
}

export async function updatePost(id: string, input: Partial<NewPost>): Promise<Post> {
  const db = getDb()
  const [post] = await db
    .update(posts)
    .set({ ...input, updatedAt: new Date() })
    .where(eq(posts.id, id))
    .returning()
  if (!post) throw new Error('Post not found')
  return post
}

export async function deletePost(id: string): Promise<void> {
  const db = getDb()
  await db.delete(posts).where(eq(posts.id, id))
}
