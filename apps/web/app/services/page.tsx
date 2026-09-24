import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { services } from '@/lib/services'
import { Nav } from '@/components/site/nav'
import { Footer } from '@/components/site/footer'
import { ContactCta } from '@/components/home/contact-cta'

export const metadata: Metadata = {
  title: 'Services — Vold',
  description: 'Every way Vold helps businesses fix slow, disconnected or confusing software.',
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
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
            Every way we help
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Focused, outcome-based engagements — not a giant transformation programme. Pick the
            one that matches where you are, or talk to us if you are not sure.
          </p>
        </div>
      </section>

      <section className="relative z-10 bg-background">
        <div className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon

              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex flex-col justify-between gap-8 rounded-[24px] border border-border bg-foreground/[0.015] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand/30 hover:bg-foreground/[0.03] sm:p-7"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex size-9 items-center justify-center rounded-lg bg-secondary">
                        <Icon className="size-4.5 text-foreground/75" />
                      </span>
                      <span className="rounded-full border border-border px-2.5 py-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                        {service.tag}
                      </span>
                    </div>
                    <h2 className="mt-5 text-xl font-medium tracking-[-0.03em] text-foreground">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {service.summary}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm text-foreground/65 transition group-hover:text-brand">
                    See how it works <ArrowRight className="size-3.5 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <ContactCta />
      <Footer />
    </main>
  )
}
