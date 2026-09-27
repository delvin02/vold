import { notFound } from 'next/navigation'
import Link from 'next/link'

import { deletePostAction, updatePostAction } from '@/app/admin/post-actions'
import { getPostById } from '@/lib/posts'
import { AdminHeader } from '@/components/admin/admin-header'
import { CheckboxField, TextAreaField, TextField, AdminButton } from '@/components/admin/fields'
import { DeletePostButton } from '@/components/admin/delete-post-button'
import { ThumbnailField } from '@/components/admin/thumbnail-field'
import { InsertImageButton } from '@/components/admin/insert-image-button'

const ERROR_MESSAGES: Record<string, string> = {
  missing: 'Title, slug, excerpt and body are all required.',
  slug: 'That slug is already taken by another post.',
}

export default async function EditPostPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>
  searchParams: Promise<{ error?: string; saved?: string }>
}) {
  const { id } = await params
  const { error, saved } = await searchParams
  const post = await getPostById(id)

  if (!post) {
    notFound()
  }

  const boundUpdate = updatePostAction.bind(null, post.id)
  const boundDelete = deletePostAction.bind(null, post.id)

  return (
    <>
      <AdminHeader backHref="/admin" backLabel="Posts" />
      <div className="mx-auto max-w-[720px] px-5 py-10">
        <div className="mb-8 flex items-center justify-between gap-4">
          <h1 className="text-2xl font-medium tracking-[-0.03em] text-foreground">Edit post</h1>
          {post.published ? (
            <Link
              href={`/blog/${post.slug}`}
              target="_blank"
              className="text-sm text-brand hover:text-brand/80"
            >
              View live →
            </Link>
          ) : null}
        </div>

        {saved ? (
          <p className="mb-6 rounded-lg border border-brand/30 bg-brand/10 px-4 py-3 text-sm text-brand">
            Saved.
          </p>
        ) : null}
        {error ? (
          <p className="mb-6 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
            {ERROR_MESSAGES[error] ?? 'Something went wrong.'}
          </p>
        ) : null}

        <form id="edit-post-form" action={boundUpdate} className="flex flex-col gap-6">
          <input type="hidden" name="publishedAt" value={post.publishedAt ? 'true' : 'false'} />
          <TextField label="Title" name="title" defaultValue={post.title} required />
          <TextField label="Slug" name="slug" mono defaultValue={post.slug} required />
          <TextField label="Excerpt" name="excerpt" defaultValue={post.excerpt} required />
          <ThumbnailField
            name="coverImageUrl"
            label="Thumbnail"
            hint="Shown on the blog index card and at the top of the post. Optional."
            defaultUrl={post.coverImageUrl}
          />
          <TextAreaField
            label="Body"
            name="body"
            id="post-body"
            defaultValue={post.body}
            required
            action={<InsertImageButton targetId="post-body" />}
          />
          <TextField label="Tags" name="tags" defaultValue={post.tags.join(', ')} hint="Comma-separated." />
          <CheckboxField
            label="Published"
            name="published"
            defaultChecked={post.published}
            hint="Unpublished posts are only visible here in the admin."
          />
        </form>

        {/* Deliberately siblings, not nested: HTML forbids a <form> inside another <form>.
            The save button associates back to #edit-post-form via the `form` attribute. */}
        <div className="flex items-center justify-between border-t border-border pt-6">
          <DeletePostButton action={boundDelete} title={post.title} />
          <AdminButton type="submit" formId="edit-post-form">
            Save changes
          </AdminButton>
        </div>
      </div>
    </>
  )
}
