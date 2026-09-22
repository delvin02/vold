import { ArrowRight, Gauge } from 'lucide-react'

import { MarketingButton } from '../site/button'

export function Hero() {
  return (
    <section className="relative z-10 overflow-hidden bg-background">
      <div
        className="pointer-events-none absolute inset-0 -z-20 opacity-0 dark:opacity-70"
        aria-hidden="true"
      >
        <div className="starfield absolute inset-0" />
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[46rem] opacity-0 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent_75%)] dark:opacity-30"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[36rem] overflow-hidden opacity-0 dark:opacity-100"
        aria-hidden="true"
      >
        <div className="horizon-arc" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1240px] px-4 pb-28 pt-20 text-center sm:px-5 sm:pb-36 sm:pt-28 lg:px-8 lg:pb-48 lg:pt-36">
        <div className="hero-copy mx-auto max-w-4xl">
          <h1 className="text-[clamp(3rem,11vw,7.5rem)] font-medium leading-[0.94] tracking-[-0.04em]">
            Keep <span className="text-brand">business moving.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Vold helps businesses fix slow, disconnected or confusing software. We explain things
            plainly, do the hard work and leave you with something that works.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <MarketingButton href="#contact">
              Start a conversation <ArrowRight className="size-4" />
            </MarketingButton>
            <MarketingButton variant="secondary" href="#services">
              Explore services
            </MarketingButton>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-muted-foreground/70">
            <span className="size-1.5 rounded-full bg-brand" />
            Adelaide · Australia-wide · Remote-first
          </div>
        </div>
      </div>
    </section>
  )
}
