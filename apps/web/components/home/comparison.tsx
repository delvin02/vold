import { Check, X } from 'lucide-react'

const rows = [
  {
    label: 'Pricing',
    old: 'Billable hours, surprise invoices',
    vold: 'Outcomes, agreed upfront',
  },
  {
    label: 'Scope',
    old: 'A giant transformation programme',
    vold: 'A focused engagement with a visible finish line',
  },
  {
    label: 'Staffing',
    old: 'A pair of hands, no real ownership',
    vold: 'A partner who is accountable for the result',
  },
  {
    label: 'Practices',
    old: 'Growth hacks and dark patterns',
    vold: 'Built with care. No dark patterns.',
  },
]

export function Comparison() {
  return (
    <section className="relative z-10 border-b border-border bg-background">
      <div className="mx-auto max-w-[1240px] px-5 py-24 lg:px-8 lg:py-32">
        <h2 className="mb-14 max-w-2xl text-4xl font-medium tracking-[-0.04em] text-foreground sm:text-6xl">
          The usual way
          <br />
          <span className="text-muted-foreground/60">versus how we work.</span>
        </h2>

        {/* Mobile: stacked cards */}
        <div className="grid gap-3 sm:hidden">
          {rows.map((row) => (
            <div key={row.label} className="overflow-hidden rounded-2xl border border-border">
              <div className="border-b border-border bg-secondary/20 px-4 py-2.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {row.label}
              </div>
              <div className="flex items-start gap-2.5 border-b border-border p-4 text-sm text-muted-foreground">
                <X className="mt-0.5 size-4 shrink-0 text-muted-foreground/50" />
                {row.old}
              </div>
              <div className="flex items-start gap-2.5 bg-brand/[0.03] p-4 text-sm text-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                {row.vold}
              </div>
            </div>
          ))}
        </div>

        {/* Tablet and up: comparison table */}
        <div className="hidden overflow-hidden rounded-[24px] border border-border sm:block">
          <div className="grid grid-cols-[1fr_1.3fr_1.3fr] border-b border-border bg-secondary/20 text-xs uppercase tracking-wider text-muted-foreground">
            <div className="p-4 sm:p-5" />
            <div className="p-4 sm:p-5">The usual way</div>
            <div className="p-4 text-brand sm:p-5">The Vold way</div>
          </div>
          {rows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-[1fr_1.3fr_1.3fr] border-b border-border last:border-b-0"
            >
              <div className="flex items-center p-4 text-sm font-medium text-foreground sm:p-5">
                {row.label}
              </div>
              <div className="flex items-center gap-2.5 border-l border-border p-4 text-sm text-muted-foreground sm:p-5">
                <X className="size-4 shrink-0 text-muted-foreground/50" />
                {row.old}
              </div>
              <div className="flex items-center gap-2.5 border-l border-border bg-brand/[0.03] p-4 text-sm text-foreground sm:p-5">
                <Check className="size-4 shrink-0 text-brand" />
                {row.vold}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
