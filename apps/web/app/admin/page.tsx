import Link from 'next/link'
import { Plus } from 'lucide-react'

import { listAllPosts } from '@/lib/posts'
import { AdminHeader } from '@/components/admin/admin-header'

function formatDate(date: Date | null) {
  if (!date) return '—'
  return new Intl.DateTimeFormat('en-AU', { day: 'numeric', month: 'short', year: 'numeric' }).format(date)
}

export default async function AdminPostsPage({
  searchParams,
}: {
  searchParams: Promise<{ deleted?: string }>
}) {
  const { deleted } = await searchParams
  const posts = await listAllPosts()

  return (
    <>
      <AdminHeader />
      <div className="mx-auto max-w-[960px] px-5 py-10">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-medium tracking-[-0.03em] text-foreground">Posts</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {posts.length} {posts.length === 1 ? 'post' : 'posts'} total
            </p>
          </div>
          <Link
            href="/admin/posts/new"
            prefetch={false}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            <Plus className="size-4" />
            New post
          </Link>
        </div>

        {deleted ? (
          <p className="mb-6 rounded-lg border border-border bg-secondary/20 px-4 py-3 text-sm text-muted-foreground">
            Post deleted.
          </p>
        ) : null}

        {posts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border p-12 text-center">
            <p className="text-sm text-muted-foreground">No posts yet.</p>
            <Link
              href="/admin/posts/new"
              prefetch={false}
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-brand/80"
            >
              <Plus className="size-4" />
              Write your first post
            </Link>
          </div>
        ) : (
          <div className="overflow-hidden rounded-2xl border border-border">
            {posts.map((post, index) => (
              <Link
                key={post.id}
                href={`/admin/posts/${post.id}/edit`}
                prefetch={false}
                className={`flex items-center justify-between gap-4 px-5 py-4 transition hover:bg-secondary/30 ${
                  index !== posts.length - 1 ? 'border-b border-border' : ''
                }`}
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-foreground">{post.title}</p>
                  <p className="mt-1 truncate font-mono text-xs text-muted-foreground">/blog/{post.slug}</p>
                </div>
                <div className="flex shrink-0 items-center gap-4">
                  <span className="text-xs text-muted-foreground">{formatDate(post.publishedAt)}</span>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider ${
                      post.published
                        ? 'bg-brand/10 text-brand'
                        : 'bg-secondary text-muted-foreground'
                    }`}
                  >
                    {post.published ? 'Published' : 'Draft'}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
