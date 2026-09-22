import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { services } from '@/lib/services'
import { mockups } from '../services/mockups'

export function ServiceRail() {
  return (
    <section id="services" className="relative z-10 border-y border-border bg-background">
      <div className="mx-auto max-w-[1240px] px-5 py-24 lg:px-8 lg:py-32">
        <div className="mb-14 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <h2 className="max-w-2xl text-4xl font-medium tracking-[-0.06em] text-foreground sm:text-6xl">
            The practical help
            <br />
            <span className="text-muted-foreground/60">between idea and results.</span>
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Not a giant transformation programme. Not a pair of hands. Focused technical work with
            a finish line you can see — each one its own engagement.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            const Mockup = mockups[service.mockup]

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group block rounded-[24px] border border-border bg-foreground/[0.015] p-4 transition-all duration-500 hover:-translate-y-1 hover:border-brand/30 hover:bg-foreground/[0.03]"
              >
                <div className="mb-4">
                  <div className="mb-6 flex items-center justify-end px-1">
                    <span className="rounded-full border border-border px-2.5 py-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                      {service.tag}
                    </span>
                  </div>
                  <div className="pointer-events-none transition-transform duration-500 group-hover:scale-[1.02]">
                    <Mockup />
                  </div>
                </div>

                <div className="px-1 pb-2 pt-2">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex size-8 items-center justify-center rounded-lg bg-secondary">
                      <Icon className="size-4 text-foreground/75" />
                    </span>
                    <h3 className="text-xl font-medium tracking-[-0.04em] text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{service.summary}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm text-foreground/65 transition group-hover:text-brand">
                    See how it works <ArrowRight className="size-3.5 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
