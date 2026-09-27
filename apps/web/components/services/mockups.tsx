import { Check, Zap } from 'lucide-react'

import { ApiMockup, IntegrationMockup, QaMockup } from './live-mockups'

export { ApiMockup, IntegrationMockup, QaMockup }

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
