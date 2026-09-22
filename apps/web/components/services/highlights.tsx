import { ArrowRight } from 'lucide-react'

import type { ServiceHighlight } from '@/lib/services'

export function Highlights({ highlights }: { highlights: ServiceHighlight[] }) {
  return (
    <section className="relative z-10 border-b border-border bg-background">
      <div className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8 lg:py-24">
        <h2 className="mb-10 text-2xl font-medium tracking-[-0.04em] text-foreground sm:text-3xl">
          What&apos;s included
        </h2>
        <div className="grid border-l border-t border-border sm:grid-cols-2">
          {highlights.map((highlight) => (
            <div
              key={highlight.title}
              className="group border-b border-r border-border p-6 transition hover:bg-secondary/30 sm:p-8"
            >
              <div className="mb-12 flex justify-end">
                <ArrowRight className="size-4 -rotate-45 text-muted-foreground/50 transition group-hover:translate-x-1 group-hover:rotate-0 group-hover:text-brand" />
              </div>
              <h3 className="text-lg tracking-[-0.03em] text-foreground">{highlight.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{highlight.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
