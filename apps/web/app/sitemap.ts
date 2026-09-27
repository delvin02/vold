import type { MetadataRoute } from 'next'

import { services } from '@/lib/services'
import { listPublishedPosts } from '@/lib/posts'
import { SITE_URL } from '@/lib/site'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/services`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/blog`, changeFrequency: 'weekly', priority: 0.8 },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const posts = await listPublishedPosts()
  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    changeFrequency: 'monthly',
    priority: 0.6,
    lastModified: post.updatedAt,
  }))

  return [...staticRoutes, ...serviceRoutes, ...postRoutes]
}
