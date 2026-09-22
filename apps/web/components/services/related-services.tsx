import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { services, type Service } from '@/lib/services'

export function RelatedServices({ current }: { current: Service }) {
  const others = services.filter((service) => service.slug !== current.slug)

  return (
    <section className="relative z-10 bg-secondary/20">
      <div className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8 lg:py-24">
        <h2 className="mb-10 text-2xl font-medium tracking-[-0.04em] text-foreground sm:text-3xl">
          Other ways we help
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {others.map((service) => {
            const Icon = service.icon

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex items-start justify-between gap-4 rounded-2xl border border-border bg-background p-6 transition hover:-translate-y-1 hover:border-brand/30"
              >
                <div>
                  <span className="flex size-8 items-center justify-center rounded-lg bg-secondary">
                    <Icon className="size-4 text-foreground/75" />
                  </span>
                  <h3 className="mt-4 text-lg font-medium tracking-[-0.03em] text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{service.summary}</p>
                </div>
                <ArrowRight className="mt-1 size-4 shrink-0 text-muted-foreground/50 transition group-hover:translate-x-1 group-hover:text-brand" />
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
