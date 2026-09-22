import { ArrowRight } from 'lucide-react'

import { MarketingButton } from '../site/button'

export function ContactCta() {
  return (
    <section id="contact" className="relative z-10 overflow-hidden border-t border-border bg-background">
      <div className="relative mx-auto max-w-[1240px] px-5 py-16 lg:px-8 lg:py-24">
        <div className="relative overflow-hidden rounded-[32px] border border-border bg-foreground/[0.015]">
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-0 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_65%_65%_at_50%_35%,black,transparent_75%)] dark:opacity-50"
            aria-hidden="true"
          />
          <span className="watermark-text pointer-events-none absolute -bottom-14 left-1/2 -z-0 -translate-x-1/2 select-none">
            VOLD
          </span>

          <div className="relative px-6 py-20 text-center sm:px-10 sm:py-28 lg:py-32">
            <h2 className="mx-auto max-w-4xl text-5xl font-medium tracking-[-0.04em] text-foreground sm:text-7xl lg:text-8xl">
              Let&apos;s make it
              <br />
              <span className="text-muted-foreground/60">make sense.</span>
            </h2>
            <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
              Tell us what is stuck, slow or harder than it should be. We will come back with a
              useful first answer.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <span className="glow-ring relative inline-flex overflow-hidden rounded-full p-[1.5px]">
                <MarketingButton href="mailto:delvin@vold.com.au" className="relative z-[1]">
                  delvin@vold.com.au <ArrowRight className="size-4" />
                </MarketingButton>
              </span>
              <MarketingButton variant="secondary" href="/#services">
                See the services
              </MarketingButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
