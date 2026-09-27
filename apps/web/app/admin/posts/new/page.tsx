import { createPostAction } from '@/app/admin/post-actions'
import { AdminHeader } from '@/components/admin/admin-header'
import { CheckboxField, TextAreaField, TextField, AdminButton } from '@/components/admin/fields'
import { ThumbnailField } from '@/components/admin/thumbnail-field'
import { InsertImageButton } from '@/components/admin/insert-image-button'

const ERROR_MESSAGES: Record<string, string> = {
  missing: 'Title, slug, excerpt and body are all required.',
  slug: 'That slug is already taken by another post.',
}

export default async function NewPostPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const { error } = await searchParams

  return (
    <>
      <AdminHeader backHref="/admin" backLabel="Posts" />
      <div className="mx-auto max-w-[720px] px-5 py-10">
        <h1 className="mb-8 text-2xl font-medium tracking-[-0.03em] text-foreground">New post</h1>

        {error ? (
          <p className="mb-6 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
            {ERROR_MESSAGES[error] ?? 'Something went wrong.'}
          </p>
        ) : null}

        <form action={createPostAction} className="flex flex-col gap-6">
          <TextField label="Title" name="title" placeholder="How we shipped the new checkout" required />
          <TextField
            label="Slug"
            name="slug"
            mono
            placeholder="how-we-shipped-the-new-checkout"
            hint="Leave blank to generate one from the title."
          />
          <TextField
            label="Excerpt"
            name="excerpt"
            placeholder="A one or two sentence summary shown on the blog index."
            required
          />
          <ThumbnailField
            name="coverImageUrl"
            label="Thumbnail"
            hint="Shown on the blog index card and at the top of the post. Optional."
          />
          <TextAreaField
            label="Body"
            name="body"
            id="post-body"
            placeholder="Write in Markdown — headings, lists and links all work."
            required
            action={<InsertImageButton targetId="post-body" />}
          />
          <TextField label="Tags" name="tags" placeholder="engineering, product, process" hint="Comma-separated." />
          <CheckboxField
            label="Published"
            name="published"
            hint="Unpublished posts are only visible here in the admin."
          />

          <div className="flex justify-end gap-3 border-t border-border pt-6">
            <AdminButton type="submit">Create post</AdminButton>
          </div>
        </form>
      </div>
    </>
  )
}
