import { Check, Zap } from 'lucide-react'

export function ApiMockup() {
  return (
    <div className="relative h-full min-h-[240px] overflow-hidden rounded-[20px] border border-border bg-card p-5 shadow-2xl">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div className="flex gap-1.5">
          <i className="size-2 rounded-full bg-[#ff6a7a]" />
          <i className="size-2 rounded-full bg-chart-1" />
          <i className="size-2 rounded-full bg-[#8be28b]" />
        </div>
        <span className="font-mono text-[10px] text-muted-foreground">vold / api</span>
      </div>
      <div className="mt-5 space-y-3 font-mono text-[11px]">
        <p>
          <span className="text-brand">POST</span>{' '}
          <span className="text-card-foreground/70">/v1/organisations</span>
        </p>
        <p className="text-muted-foreground/50">{`{`}</p>
        <p className="pl-4 text-muted-foreground">
          &quot;name&quot;: <span className="text-card-foreground/80">&quot;Northstar&quot;</span>,
        </p>
        <p className="pl-4 text-muted-foreground">
          &quot;plan&quot;: <span className="text-card-foreground/80">&quot;scale&quot;</span>
        </p>
        <p className="text-muted-foreground/50">{`}`}</p>
        <div className="mt-4 flex items-center gap-2 border-t border-border pt-3 text-brand">
          <span className="flex size-4 items-center justify-center rounded-full bg-brand/15">
            <Check className="size-2.5" />
          </span>{' '}
          201 Created <span className="ml-auto text-muted-foreground/60">142ms</span>
        </div>
      </div>
    </div>
  )
}

export function IntegrationMockup() {
  return (
    <div className="relative h-full min-h-[240px] overflow-hidden rounded-[20px] border border-border bg-card p-5 shadow-2xl">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-card-foreground/70">System health</span>
        <span className="rounded-full bg-brand/10 px-2 py-1 text-[10px] text-brand">All systems go</span>
      </div>
      <div className="relative mt-8 flex items-center justify-between">
        <div className="flex size-14 items-center justify-center rounded-2xl border border-border bg-foreground/[0.04] text-xs font-bold text-card-foreground">
          ERP
        </div>
        <div className="mx-3 flex flex-1 items-center">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-brand to-brand" />
          <Zap className="mx-2 size-3 text-brand" />
          <span className="h-px flex-1 bg-gradient-to-r from-brand to-transparent" />
        </div>
        <div className="flex size-14 items-center justify-center rounded-2xl border border-border bg-foreground/[0.04] text-xs font-bold text-card-foreground">
          CRM
        </div>
      </div>
      <div className="mt-10 rounded-xl border border-border bg-foreground/[0.02] p-3">
        <div className="mb-2 flex justify-between text-[10px] text-muted-foreground">
          <span>Events processed</span>
          <span className="text-card-foreground/70">8,492</span>
        </div>
        <div className="flex h-8 items-end gap-1">
          {[22, 35, 28, 50, 42, 62, 57, 76, 68, 92, 82, 100].map((height, index) => (
            <span key={index} className="flex-1 rounded-t bg-brand/70" style={{ height: `${height}%` }} />
          ))}
        </div>
      </div>
    </div>
  )
}

export function QaMockup() {
  const checks = [
    ['API contract tests', 'passed'],
    ['Checkout flow', 'passed'],
    ['Lighthouse audit', 'passed'],
    ['Regression suite', 'running'],
  ] as const

  return (
    <div className="relative h-full min-h-[240px] overflow-hidden rounded-[20px] border border-border bg-card p-5 shadow-2xl">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <span className="text-xs font-medium text-card-foreground/70">Release check</span>
        <span className="font-mono text-[10px] text-muted-foreground">#1842</span>
      </div>
      <div className="mt-5 space-y-2.5">
        {checks.map(([label, status]) => (
          <div key={label} className="rounded-lg border border-border bg-foreground/[0.015] px-3 py-2.5 text-[11px]">
            <div className="flex items-center gap-3">
              <span
                className={`flex size-4 items-center justify-center rounded-full ${
                  status === 'passed' ? 'bg-brand/15 text-brand' : 'bg-chart-1/15 text-chart-1'
                }`}
              >
                {status === 'passed' ? (
                  <Check className="size-2.5" />
                ) : (
                  <span className="size-1.5 animate-pulse rounded-full bg-current" />
                )}
              </span>
              <span className="text-card-foreground/70">{label}</span>
              <span className="ml-auto font-mono text-[9px] uppercase text-muted-foreground">{status}</span>
            </div>
            {status === 'running' ? (
              <div className="mt-2 h-[3px] overflow-hidden rounded-full bg-border">
                <div className="timer-line h-full rounded-full bg-chart-1" />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}

export function WebsiteMockup() {
  return (
    <div className="relative h-full min-h-[240px] overflow-hidden rounded-[20px] border border-border bg-card p-5 shadow-2xl">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div className="flex gap-1.5">
          <i className="size-2 rounded-full bg-[#ff6a7a]" />
          <i className="size-2 rounded-full bg-chart-1" />
          <i className="size-2 rounded-full bg-[#8be28b]" />
        </div>
        <span className="font-mono text-[10px] text-muted-foreground">yourcompany.com</span>
      </div>
      <div className="mt-5 flex items-center justify-between">
        <div className="h-2 w-10 rounded-full bg-card-foreground/70" />
        <div className="flex gap-3">
          <div className="h-2 w-8 rounded-full bg-muted-foreground/30" />
          <div className="h-2 w-8 rounded-full bg-muted-foreground/30" />
          <div className="h-2 w-8 rounded-full bg-muted-foreground/30" />
        </div>
      </div>
      <div className="mt-6 space-y-2">
        <div className="h-3 w-3/4 rounded-full bg-card-foreground/80" />
        <div className="h-3 w-1/2 rounded-full bg-card-foreground/50" />
      </div>
      <div className="mt-4 h-7 w-28 rounded-full bg-brand" />
      <div className="mt-6 grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-12 rounded-lg border border-border bg-foreground/[0.03]" />
        ))}
      </div>
    </div>
  )
}

export function MaintenanceMockup() {
  return (
    <div className="relative h-full min-h-[240px] overflow-hidden rounded-[20px] border border-border bg-card p-5 shadow-2xl">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <span className="text-xs font-medium text-card-foreground/70">Site status</span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-2 py-1 text-[10px] text-brand">
          <span className="size-1.5 rounded-full bg-brand" />
          Online
        </span>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3 text-[11px]">
        <div className="rounded-lg border border-border bg-foreground/[0.02] p-3">
          <p className="text-muted-foreground">Uptime (30d)</p>
          <p className="mt-1 font-mono text-lg text-card-foreground">99.98%</p>
        </div>
        <div className="rounded-lg border border-border bg-foreground/[0.02] p-3">
          <p className="text-muted-foreground">Last backup</p>
          <p className="mt-1 font-mono text-lg text-card-foreground">2h ago</p>
        </div>
      </div>
      <div className="mt-4 space-y-2.5">
        {[
          ['Security patches', 'up to date'],
          ['SSL certificate', 'valid'],
        ].map(([label, status]) => (
          <div
            key={label}
            className="flex items-center gap-3 rounded-lg border border-border bg-foreground/[0.015] px-3 py-2.5 text-[11px]"
          >
            <span className="flex size-4 items-center justify-center rounded-full bg-brand/15 text-brand">
              <Check className="size-2.5" />
            </span>
            <span className="text-card-foreground/70">{label}</span>
            <span className="ml-auto font-mono text-[9px] uppercase text-muted-foreground">{status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function DatabaseMockup() {
  return (
    <div className="relative h-full min-h-[240px] overflow-hidden rounded-[20px] border border-border bg-card p-5 shadow-2xl">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <span className="text-xs font-medium text-card-foreground/70">Query performance</span>
        <span className="font-mono text-[10px] text-muted-foreground">customers.search</span>
      </div>
      <div className="mt-5 space-y-3 font-mono text-[11px]">
        <div className="flex items-center justify-between rounded-lg border border-border bg-foreground/[0.02] px-3 py-2.5">
          <span className="text-muted-foreground/70">Before</span>
          <span className="text-card-foreground/70">1,240ms</span>
        </div>
        <div className="flex items-center justify-between rounded-lg border border-brand/30 bg-brand/5 px-3 py-2.5">
          <span className="text-brand">After</span>
          <span className="text-brand">38ms</span>
        </div>
      </div>
      <div className="mt-5 flex items-center gap-2 border-t border-border pt-4 text-[10px] text-muted-foreground">
        <Zap className="size-3 text-brand" />
        Index added on <span className="text-card-foreground/70">customers(email)</span>
      </div>
    </div>
  )
}

export const mockups = {
  api: ApiMockup,
  integration: IntegrationMockup,
  qa: QaMockup,
  website: WebsiteMockup,
  maintenance: MaintenanceMockup,
  database: DatabaseMockup,
} as const
