import { Nav } from '@/components/site/nav'
import { Footer } from '@/components/site/footer'
import { Hero } from '@/components/home/hero'
import { ServiceRail } from '@/components/home/service-rail'
import { Process } from '@/components/home/process'
import { ContactCta } from '@/components/home/contact-cta'

export default function Page() {
  return (
    <main id="top" className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <Nav />
      <Hero />
      <ServiceRail />
      <Process />
      <ContactCta />
      <Footer />
    </main>
  )
}
