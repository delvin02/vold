import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getService, services } from '@/lib/services'
import { Nav } from '@/components/site/nav'
import { Footer } from '@/components/site/footer'
import { ServiceHero } from '@/components/services/service-hero'
import { Highlights } from '@/components/services/highlights'
import { RelatedServices } from '@/components/services/related-services'
import { ContactCta } from '@/components/home/contact-cta'

type Params = { slug: string }

export function generateStaticParams(): Params[] {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)

  if (!service) {
    return {}
  }

  return {
    title: `${service.title} — Vold`,
    description: service.summary,
  }
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const service = getService(slug)

  if (!service) {
    notFound()
  }

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <ServiceHero service={service} />
      <Highlights highlights={service.highlights} />
      <RelatedServices current={service} />
      <ContactCta />
      <Footer />
    </main>
  )
}
