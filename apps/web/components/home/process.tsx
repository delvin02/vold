import { ArrowDown, ArrowRight, FlaskConical, Rocket, Search } from 'lucide-react'

const workflowSteps = [
  {
    number: '01',
    icon: Search,
    title: 'Name the problem',
    copy:
      'We start with the real bottleneck: the workflow that stalls, the data that gets lost, or the process that keeps breaking under pressure.',
    tags: ['Bottleneck identified', 'Root cause named', 'Priorities clear'],
  },
  {
    number: '02',
    icon: FlaskConical,
    title: 'Test the smallest useful fix',
    copy:
      'We map the simplest change that creates momentum, then validate it before scaling anything wider.',
    tags: ['Smallest useful fix', 'Validated early', 'Momentum created'],
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Ship what keeps things moving',
    copy:
      'The result is working software, clearer ownership, and a system that is easier to use and easier to trust.',
    tags: ['Working software', 'Clear ownership', 'Built to trust'],
  },
]

function ProcessIllustration(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <line x1="0.607422" y1="2.57422" x2="21.5762" y2="2.57422" className="stroke-brand" strokeWidth="4" />
      <line x1="19.5762" y1="19.624" x2="19.5762" y2="4.57422" className="stroke-brand" strokeWidth="4" />
    </svg>
  )
}

export function Process() {
  return (
    <section id="method" className="relative z-10 border-y border-border bg-secondary/20">
      <div className="relative mx-auto max-w-[1240px] px-5 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-6 lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:col-span-2 lg:h-fit lg:py-8">
            <h2 className="flex items-center gap-4 text-4xl font-medium tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl">
              <span className="inline-flex items-center whitespace-nowrap">
                Our process
                <ProcessIllustration className="ml-2 inline-block size-5 md:size-8 lg:ml-3 lg:size-10" />
              </span>
              <span aria-hidden="true" className="h-px flex-1 bg-border" />
            </h2>

            <p className="mt-7 max-w-sm text-base leading-relaxed text-muted-foreground">
              We start by naming the problem clearly, then we move from understanding to action
              with the smallest useful fix and a path that keeps things moving.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-sm text-foreground/75 transition hover:text-brand"
            >
              <span className="inline-flex size-6 items-center justify-center rounded-full border border-brand/40 bg-brand/10">
                <ArrowRight className="size-3.5" />
              </span>
              Get in touch
            </a>
          </div>

          <ul className="col-span-4 flex w-full flex-col lg:pl-12">
            {workflowSteps.map((step, index) => {
              const StepIcon = step.icon

              return (
                <li key={step.number} className="contents">
                  <div className="group relative overflow-hidden rounded-[24px] border border-border bg-foreground/[0.015] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand/30 hover:bg-foreground/[0.03] sm:p-8">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
                      <div className="flex size-10 shrink-0 items-center justify-center border border-border bg-background font-mono text-sm text-foreground/80 transition-colors group-hover:border-brand/40 sm:size-12">
                        {step.number}
                      </div>

                      <div className="max-w-2xl">
                        <h3 className="mb-3 flex items-center gap-2.5 text-xl font-medium tracking-[-0.04em] text-foreground sm:mb-4 sm:text-2xl lg:text-3xl">
                          <StepIcon className="size-5 shrink-0 text-brand sm:size-6" />
                          {step.title}
                        </h3>
                        <p className="text-base leading-relaxed text-muted-foreground">{step.copy}</p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {step.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-border px-2.5 py-1 text-[10px] uppercase tracking-wider text-muted-foreground transition-colors group-hover:border-brand/30 group-hover:text-foreground/80"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {index < workflowSteps.length - 1 ? (
                    <div aria-hidden="true" className="flex justify-center py-3">
                      <ArrowDown className="size-4 text-muted-foreground/40" />
                    </div>
                  ) : null}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
