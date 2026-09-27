'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

import { createPost, deletePost, isSlugTaken, readPostForm, updatePost } from '@/lib/posts'

export async function createPostAction(formData: FormData) {
  const input = readPostForm(formData)

  if (!input.title || !input.slug || !input.excerpt || !input.body) {
    redirect('/admin/posts/new?error=missing')
  }

  if (await isSlugTaken(input.slug)) {
    redirect('/admin/posts/new?error=slug')
  }

  const post = await createPost({
    ...input,
    publishedAt: input.published ? new Date() : null,
  })

  revalidatePath('/admin')
  revalidatePath('/blog')
  redirect(`/admin/posts/${post.id}/edit?saved=1`)
}

export async function updatePostAction(id: string, formData: FormData) {
  const input = readPostForm(formData)

  if (!input.title || !input.slug || !input.excerpt || !input.body) {
    redirect(`/admin/posts/${id}/edit?error=missing`)
  }

  if (await isSlugTaken(input.slug, id)) {
    redirect(`/admin/posts/${id}/edit?error=slug`)
  }

  const existingPublishedAt = formData.get('publishedAt')
  const wasPublished = existingPublishedAt === 'true'
  const publishedAt = input.published ? (wasPublished ? undefined : new Date()) : null

  await updatePost(id, {
    ...input,
    ...(publishedAt !== undefined ? { publishedAt } : {}),
  })

  revalidatePath('/admin')
  revalidatePath('/blog')
  revalidatePath(`/blog/${input.slug}`)
  redirect(`/admin/posts/${id}/edit?saved=1`)
}

export async function deletePostAction(id: string) {
  await deletePost(id)
  revalidatePath('/admin')
  revalidatePath('/blog')
  redirect('/admin?deleted=1')
}
