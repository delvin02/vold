import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import type { Service } from '@/lib/services'
import { MarketingButton } from '../site/button'
import { mockups } from './mockups'

export function ServiceHero({ service }: { service: Service }) {
  const Icon = service.icon
  const Mockup = mockups[service.mockup]

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-[36rem] opacity-0 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:80px_80px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)] dark:opacity-30"
        aria-hidden="true"
      />

      <div className="hero-copy relative z-10 mx-auto max-w-[1240px] px-4 pb-16 pt-16 sm:px-5 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-24 lg:pt-24">
        <Link
          href="/#services"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
        >
          <ArrowRight className="size-3.5 rotate-180" />
          All services
        </Link>

        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <Icon className="size-3.5 text-brand" />
              {service.tag}
            </span>
            <h1 className="mt-6 max-w-xl text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.055em] text-foreground">
              {service.title}
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              {service.detail}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <MarketingButton href="#contact">
                Start a conversation <ArrowRight className="size-4" />
              </MarketingButton>
              <MarketingButton variant="secondary" href="/#services">
                Compare services
              </MarketingButton>
            </div>
          </div>

          <div className="relative">
            <div
              className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-brand/15 opacity-0 blur-3xl dark:opacity-100"
              aria-hidden="true"
            />
            <Mockup />
          </div>
        </div>
      </div>
    </section>
  )
}
