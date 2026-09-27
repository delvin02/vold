import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { listPublishedPosts } from '@/lib/posts'
import { Nav } from '@/components/site/nav'
import { Footer } from '@/components/site/footer'
import { ContactCta } from '@/components/home/contact-cta'

export const metadata: Metadata = {
  title: 'Blog — Vold',
  description: 'Notes on shipping software, fixing systems and keeping business moving.',
  alternates: { canonical: '/blog' },
}

function formatDate(date: Date | null) {
  if (!date) return ''
  return new Intl.DateTimeFormat('en-AU', { day: 'numeric', month: 'long', year: 'numeric' }).format(date)
}

export const revalidate = 60

export default async function BlogIndexPage() {
  const posts = await listPublishedPosts()

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Nav />

      <section className="relative overflow-hidden border-b border-border">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-[36rem] opacity-0 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:80px_80px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)] dark:opacity-30"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-[1240px] px-4 pb-16 pt-16 sm:px-5 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-24 lg:pt-24">
          <h1 className="max-w-2xl text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.04em] text-foreground">
            Notes from the work.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            What we learn fixing slow, disconnected or confusing software — written down as we go.
          </p>
        </div>
      </section>

      <section className="relative z-10 bg-background">
        <div className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8 lg:py-24">
          {posts.length === 0 ? (
            <div className="rounded-[24px] border border-dashed border-border p-16 text-center">
              <p className="text-muted-foreground">Nothing published yet — check back soon.</p>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col justify-between overflow-hidden rounded-[24px] border border-border bg-foreground/[0.015] transition-all duration-500 hover:-translate-y-1 hover:border-brand/30 hover:bg-foreground/[0.03]"
                >
                  {post.coverImageUrl ? (
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-secondary">
                      <Image
                        src={post.coverImageUrl}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  ) : null}
                  <div className="flex flex-1 flex-col justify-between gap-8 p-6 sm:p-7">
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-xs text-muted-foreground">{formatDate(post.publishedAt)}</span>
                        {post.tags[0] ? (
                          <span className="rounded-full border border-border px-2.5 py-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                            {post.tags[0]}
                          </span>
                        ) : null}
                      </div>
                      <h2 className="mt-5 text-xl font-medium tracking-[-0.03em] text-foreground">
                        {post.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm text-foreground/65 transition group-hover:text-brand">
                      Read more <ArrowRight className="size-3.5 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <ContactCta />
      <Footer />
    </main>
  )
}
