import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

import { getPublishedPostBySlug, listPublishedPosts } from '@/lib/posts'
import { Nav } from '@/components/site/nav'
import { Footer } from '@/components/site/footer'
import { ContactCta } from '@/components/home/contact-cta'
import { MarkdownContent } from '@/components/blog/markdown-content'

type Params = { slug: string }

export async function generateStaticParams(): Promise<Params[]> {
  const posts = await listPublishedPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPublishedPostBySlug(slug)

  if (!post) {
    return {}
  }

  return {
    title: `${post.title} — Vold`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    ...(post.coverImageUrl
      ? { openGraph: { images: [post.coverImageUrl] }, twitter: { images: [post.coverImageUrl] } }
      : {}),
  }
}

function formatDate(date: Date | null) {
  if (!date) return ''
  return new Intl.DateTimeFormat('en-AU', { day: 'numeric', month: 'long', year: 'numeric' }).format(date)
}

export const revalidate = 60

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const post = await getPublishedPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Nav />

      <article className="relative z-10 mx-auto max-w-[720px] px-5 py-16 lg:py-24">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" />
          All posts
        </Link>

        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="text-sm text-muted-foreground">{formatDate(post.publishedAt)}</span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-2.5 py-1 text-[10px] uppercase tracking-wider text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className={`${post.coverImageUrl ? 'mb-8' : 'mb-10'} text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em] text-foreground`}>
          {post.title}
        </h1>

        {post.coverImageUrl ? (
          <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border bg-secondary">
            <Image src={post.coverImageUrl} alt="" fill sizes="720px" className="object-cover" priority />
          </div>
        ) : null}

        <MarkdownContent content={post.body} />
      </article>

      <ContactCta />
      <Footer />
    </main>
  )
}
