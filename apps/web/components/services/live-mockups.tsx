'use client'

import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { Check, Zap } from 'lucide-react'

const ease = 'ease-[cubic-bezier(.16,1,.3,1)]'

/**
 * Plays a mockup only while it is on screen. Server render and reduced motion
 * keep the resting composition, so the card never depends on script to read.
 */
function useLive() {
  const ref = useRef<HTMLDivElement>(null)
  const [live, setLive] = useState(false)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setLive(Boolean(entry?.isIntersecting))
        setStarted(true)
      },
      { threshold: 0.3 },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return { ref, live, started }
}

/** Steps through `durations` on a loop; rests on `restStep` until it first comes into view. */
function useTimeline(durations: readonly number[], restStep: number) {
  const { ref, live, started } = useLive()
  const [step, setStep] = useState(restStep)
  const [cycle, setCycle] = useState(0)
  const reset = useRef(false)

  useEffect(() => {
    // Rewind off-screen so the story starts from the top when it scrolls in.
    if (started && !live && !reset.current) {
      reset.current = true
      setStep(0)
    }
  }, [started, live])

  useEffect(() => {
    if (!live) return
    reset.current = true
    const id = window.setTimeout(() => {
      const next = (step + 1) % durations.length
      setStep(next)
      if (next === 0) setCycle((count) => count + 1)
    }, durations[step])
    return () => window.clearTimeout(id)
  }, [live, step, durations])

  return { ref, step, cycle, started }
}

function CountUp({ value, run }: { value: number; run: boolean }) {
  const [shown, setShown] = useState(value)

  useEffect(() => {
    if (!run) return
    let frame = 0
    const begin = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - begin) / 450, 1)
      setShown(Math.round(value * (1 - Math.pow(1 - progress, 3))))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [run, value])

  return <>{shown}</>
}

// compose → send → respond
const API_STEPS = [500, 140, 160, 160, 260, 700, 2800] as const
const API_REST = API_STEPS.length - 1

export function ApiMockup() {
  const { ref, step, started } = useTimeline(API_STEPS, API_REST)
  const responded = step === API_REST
  const lines = [
    <p key="open" className="text-muted-foreground/50">{`{`}</p>,
    <p key="name" className="pl-4 text-muted-foreground">
      &quot;name&quot;: <span className="text-card-foreground/80">&quot;Northstar&quot;</span>,
    </p>,
    <p key="plan" className="pl-4 text-muted-foreground">
      &quot;plan&quot;: <span className="text-card-foreground/80">&quot;scale&quot;</span>
    </p>,
    <p key="close" className="text-muted-foreground/50">{`}`}</p>,
  ]

  return (
    <div
      ref={ref}
      className="relative h-full min-h-[240px] overflow-hidden rounded-[20px] border border-border bg-card p-5 shadow-2xl"
    >
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
          <span className={`text-brand transition-opacity duration-300 ${step === 5 ? 'animate-pulse' : ''}`}>
            POST
          </span>{' '}
          <span className="text-card-foreground/70">/v1/organisations</span>
        </p>
        {lines.map((line, index) => {
          const shown = step > index
          return (
            <div
              key={line.key}
              className={`transition-[opacity,transform] ${ease} ${
                shown ? 'translate-x-0 opacity-100 duration-300' : '-translate-x-1 opacity-0 duration-150'
              }`}
            >
              {line}
            </div>
          )
        })}
        <div className="relative mt-4 border-t border-border pt-3">
          {step === 5 ? (
            // The request travels along the divider it is waiting on.
            <span className="absolute inset-x-0 -top-px h-px overflow-hidden" aria-hidden="true">
              <span className="absolute inset-y-0 left-0 w-2/5 animate-[mock-sweep_700ms_cubic-bezier(.45,0,.55,1)_infinite] bg-gradient-to-r from-transparent via-brand to-transparent" />
            </span>
          ) : null}
          <div
            className={`flex items-center gap-2 text-brand transition-[opacity,transform] ${ease} ${
              responded ? 'translate-y-0 opacity-100 duration-500' : 'translate-y-1 opacity-0 duration-150'
            }`}
          >
            <span className="flex size-4 items-center justify-center rounded-full bg-brand/15">
              {responded ? <Check className="size-2.5 animate-[mock-pop_400ms_cubic-bezier(.16,1,.3,1)_both]" /> : null}
            </span>{' '}
            201 Created{' '}
            <span className="ml-auto tabular-nums text-muted-foreground/60">
              <CountUp value={142} run={started && responded} />
              ms
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

const PACKET_MS = 1400

export function IntegrationMockup() {
  const { ref, live } = useLive()
  const [events, setEvents] = useState(8492)
  const [arrivals, setArrivals] = useState(0)
  const [bars, setBars] = useState([22, 35, 28, 50, 42, 62, 57, 76, 68, 92, 82, 100])

  useEffect(() => {
    if (!live) return
    // Fires as each packet lands, so the count and chart answer the motion above them.
    const id = window.setInterval(() => {
      setArrivals((count) => count + 1)
      setEvents((count) => count + 3 + Math.floor(Math.random() * 9))
      setBars((current) => {
        const last = current[current.length - 1] ?? 60
        const next = Math.min(100, Math.max(30, last + Math.round(Math.random() * 44 - 24)))
        return [...current.slice(1), next]
      })
    }, PACKET_MS)
    return () => window.clearInterval(id)
  }, [live])

  return (
    <div
      ref={ref}
      className="relative h-full min-h-[240px] overflow-hidden rounded-[20px] border border-border bg-card p-5 shadow-2xl"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-card-foreground/70">System health</span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-2 py-1 text-[10px] text-brand">
          <span className={`size-1.5 rounded-full bg-brand ${live ? 'animate-pulse' : ''}`} />
          All systems go
        </span>
      </div>
      <div className="relative mt-8 flex items-center justify-between">
        <div className="flex size-14 items-center justify-center rounded-2xl border border-border bg-foreground/[0.04] text-xs font-bold text-card-foreground">
          ERP
        </div>
        <div className="relative mx-3 flex flex-1 items-center">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-brand to-brand" />
          <Zap className="mx-2 size-3 text-brand" />
          <span className="h-px flex-1 bg-gradient-to-r from-brand to-transparent" />
          {live ? (
            <span className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
              <span
                className="absolute inset-y-0 left-0 w-full animate-[mock-packet_var(--packet)_cubic-bezier(.45,0,.55,1)_infinite]"
                style={{ '--packet': `${PACKET_MS}ms` } as CSSProperties}
              >
                <span className="absolute right-0 top-1/2 flex -translate-y-1/2 items-center">
                  <span className="h-px w-5 bg-gradient-to-r from-transparent to-brand" />
                  <span className="size-1.5 rounded-full bg-brand" />
                </span>
              </span>
            </span>
          ) : null}
        </div>
        <div className="relative flex size-14 items-center justify-center rounded-2xl border border-border bg-foreground/[0.04] text-xs font-bold text-card-foreground">
          CRM
          {arrivals > 0 ? (
            <span
              key={arrivals}
              className="pointer-events-none absolute -inset-px animate-[mock-fade-out_700ms_ease-out_both] rounded-2xl border border-brand bg-brand/10"
              aria-hidden="true"
            />
          ) : null}
        </div>
      </div>
      <div className="mt-10 rounded-xl border border-border bg-foreground/[0.02] p-3">
        <div className="mb-2 flex justify-between text-[10px] text-muted-foreground">
          <span>Events processed</span>
          <span className="tabular-nums text-card-foreground/70">{events.toLocaleString('en-AU')}</span>
        </div>
        <div className="flex h-8 items-end gap-1">
          {bars.map((height, index) => (
            <span
              key={index}
              className={`flex-1 rounded-t bg-brand/70 transition-[height] duration-500 ${ease}`}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const QA_CHECKS = ['API contract tests', 'Checkout flow', 'Lighthouse audit', 'Regression suite'] as const
// queued → each check runs in turn → all passed
const QA_STEPS = [450, 900, 800, 1000, 1600, 2200] as const
const QA_REST = 4

type CheckStatus = 'queued' | 'running' | 'passed'

export function QaMockup() {
  const { ref, step, cycle, started } = useTimeline(QA_STEPS, QA_REST)
  const statusOf = (index: number): CheckStatus =>
    index < step - 1 ? 'passed' : index === step - 1 ? 'running' : 'queued'

  return (
    <div
      ref={ref}
      className="relative h-full min-h-[240px] overflow-hidden rounded-[20px] border border-border bg-card p-5 shadow-2xl"
    >
      <div className="flex items-center justify-between border-b border-border pb-4">
        <span className="text-xs font-medium text-card-foreground/70">Release check</span>
        <span key={cycle} className="animate-[mock-pop_400ms_ease-out_both] font-mono text-[10px] text-muted-foreground">
          #{1842 + cycle}
        </span>
      </div>
      <div className="mt-5 space-y-2.5">
        {QA_CHECKS.map((label, index) => {
          const status = statusOf(index)
          return (
            <div
              key={label}
              className={`relative overflow-hidden rounded-lg border bg-foreground/[0.015] px-3 py-2.5 text-[11px] transition-colors duration-300 ${
                status === 'running' ? 'border-chart-1/40' : 'border-border'
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex size-4 items-center justify-center rounded-full transition-colors duration-300 ${
                    status === 'passed'
                      ? 'bg-brand/15 text-brand'
                      : status === 'running'
                        ? 'bg-chart-1/15 text-chart-1'
                        : 'border border-border text-transparent'
                  }`}
                >
                  {status === 'passed' ? (
                    <Check className="size-2.5 animate-[mock-pop_400ms_cubic-bezier(.16,1,.3,1)_both]" />
                  ) : status === 'running' ? (
                    <span className="size-1.5 animate-pulse rounded-full bg-current" />
                  ) : null}
                </span>
                <span
                  className={`transition-colors duration-300 ${
                    status === 'queued' ? 'text-card-foreground/40' : 'text-card-foreground/70'
                  }`}
                >
                  {label}
                </span>
                <span className="ml-auto font-mono text-[9px] uppercase text-muted-foreground">{status}</span>
              </div>
              {status === 'running' ? (
                <span className="absolute inset-x-0 bottom-0 h-[2px] bg-border" aria-hidden="true">
                  <span
                    key={`${cycle}-${step}`}
                    className="block h-full origin-left animate-[mock-progress_var(--run)_linear_both] bg-chart-1"
                    style={{ '--run': `${started ? QA_STEPS[step] : 4200}ms` } as CSSProperties}
                  />
                </span>
              ) : null}
            </div>
          )
        })}
      </div>
    </div>
  )
}
