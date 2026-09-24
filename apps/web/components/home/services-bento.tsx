import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { services } from '@/lib/services'
import { mockups } from '../services/mockups'

export function ServicesBento() {
  const [featured, ...rest] = services.slice(0, 3)

  if (!featured) {
    return null
  }

  const Icon = featured.icon
  const FeaturedMockup = mockups[featured.mockup]

  return (
    <section id="services" className="relative z-10 border-y border-border bg-background">
      <div className="mx-auto max-w-[1240px] px-5 py-24 lg:px-8 lg:py-32">
        <div className="mb-14 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <h2 className="max-w-2xl text-4xl font-medium tracking-[-0.04em] text-foreground sm:text-6xl">
            The practical help
            <br />
            <span className="text-muted-foreground/60">between idea and results.</span>
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Not a giant transformation programme. Not a pair of hands. Focused technical work with
            a finish line you can see — each one its own engagement.
          </p>
        </div>

        <div className="grid gap-4">
          <Link
            href={`/services/${featured.slug}`}
            className="group grid gap-8 overflow-hidden rounded-[28px] border border-border bg-foreground/[0.015] p-6 transition-all duration-500 hover:border-brand/30 hover:bg-foreground/[0.03] sm:p-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-4 lg:p-10"
          >
            <div className="order-2 lg:order-1">
              <span className="rounded-full border border-border px-2.5 py-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                {featured.tag}
              </span>
              <div className="mt-5 flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-lg bg-secondary">
                  <Icon className="size-4.5 text-foreground/75" />
                </span>
                <h3 className="text-2xl font-medium tracking-[-0.03em] text-foreground sm:text-3xl">
                  {featured.title}
                </h3>
              </div>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                {featured.summary}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm text-foreground/65 transition group-hover:text-brand">
                See how it works <ArrowRight className="size-3.5 transition group-hover:translate-x-1" />
              </span>
            </div>
            <div className="order-1 pointer-events-none transition-transform duration-500 group-hover:scale-[1.02] lg:order-2">
              <FeaturedMockup />
            </div>
          </Link>

          <div className="grid gap-4 sm:grid-cols-2">
            {rest.map((service) => {
              const ServiceIcon = service.icon
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
                        <ServiceIcon className="size-4 text-foreground/75" />
                      </span>
                      <h3 className="text-xl font-medium tracking-[-0.03em] text-foreground">
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

        <div className="mt-8 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-foreground/75 transition hover:text-brand"
          >
            See all {services.length} services <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
