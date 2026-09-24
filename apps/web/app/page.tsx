import type { Metadata } from 'next'

import { Nav } from '@/components/site/nav'
import { Footer } from '@/components/site/footer'
import { Hero } from '@/components/home/hero'
import { ServicesBento } from '@/components/home/services-bento'
import { Comparison } from '@/components/home/comparison'
import { Process } from '@/components/home/process'
import { ContactCta } from '@/components/home/contact-cta'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

export default function Page() {
  return (
    <main id="top" className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <ServicesBento />
      <Comparison />
      <Process />
      <ContactCta />
      <Footer />
    </main>
  )
}
