import { ArrowRight, Gauge } from 'lucide-react'

import { MarketingButton } from '../site/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-[54rem] opacity-0 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:80px_80px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)] dark:opacity-40"
        aria-hidden="true"
      />
      <div className="hero-mesh pointer-events-none absolute inset-x-[-15%] top-[-16rem] -z-0 h-[48rem] opacity-0 dark:opacity-35" aria-hidden="true">
        <div className="hero-mesh__orb hero-mesh__orb--violet" />
        <div className="hero-mesh__orb hero-mesh__orb--blue" />
        <div className="hero-mesh__orb hero-mesh__orb--pink" />
        <div className="hero-mesh__glow" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-[40rem] overflow-hidden opacity-60" aria-hidden="true">
        <div className="hero-beam" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1240px] px-4 pb-16 pt-20 text-center sm:px-5 sm:pb-24 sm:pt-28 lg:px-8 lg:pb-32 lg:pt-36">
        <div className="hero-copy mx-auto max-w-4xl">
          <h1 className="text-[clamp(3rem,11vw,7.5rem)] font-medium leading-[0.92] tracking-[-0.06em]">
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

        <div className="mx-auto mt-16 flex max-w-3xl items-center justify-center gap-4 border-y border-border py-6 text-xs text-muted-foreground/80 lg:mt-24">
          <Gauge className="size-4 text-brand" />
          <span>Built around outcomes, not billable hours.</span>
        </div>
      </div>
    </section>
  )
}
