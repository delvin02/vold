import { ArrowRight } from 'lucide-react'

import { MarketingButton } from '../site/button'

export function ContactCta() {
  return (
    <section id="contact" className="relative z-10 border-t border-border">
      <div className="mx-auto max-w-[1240px] px-5 py-28 text-center lg:px-8 lg:py-40">
        <h2 className="mx-auto max-w-4xl text-5xl font-medium tracking-[-0.08em] text-foreground sm:text-7xl lg:text-8xl">
          Let&apos;s make it
          <br />
          <span className="text-muted-foreground/60">make sense.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
          Tell us what is stuck, slow or harder than it should be. We will come back with a useful
          first answer.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <MarketingButton href="mailto:delvin@vold.com.au">
            delvin@vold.com.au <ArrowRight className="size-4" />
          </MarketingButton>
          <MarketingButton variant="secondary" href="/#services">
            See the services
          </MarketingButton>
        </div>
      </div>
    </section>
  )
}
