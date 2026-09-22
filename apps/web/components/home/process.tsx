import { ArrowRight } from 'lucide-react'

const workflowSteps = [
  {
    number: '01',
    title: 'Name the problem',
    copy:
      'We start with the real bottleneck: the workflow that stalls, the data that gets lost, or the process that keeps breaking under pressure.',
  },
  {
    number: '02',
    title: 'Test the smallest useful fix',
    copy:
      'We map the simplest change that creates momentum, then validate it before scaling anything wider.',
  },
  {
    number: '03',
    title: 'Ship what keeps things moving',
    copy:
      'The result is working software, clearer ownership, and a system that is easier to use and easier to trust.',
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
      <div className="mx-auto max-w-[1240px] px-5 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-6 lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:col-span-2 lg:h-fit lg:py-8">
            <div className="relative w-fit text-5xl font-medium tracking-[-0.08em] text-foreground lg:text-7xl">
              <h2>Our process</h2>
              <span className="absolute -right-3 top-0 text-brand lg:-right-12 lg:top-2">
                <ProcessIllustration className="size-5 md:size-8 lg:size-10" />
              </span>
            </div>

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

          <ul className="relative col-span-4 w-full lg:pl-12">
            {workflowSteps.map((step) => (
              <li
                key={step.number}
                className="relative flex flex-col justify-between gap-8 border-t border-border py-8 md:flex-row md:items-start lg:py-10"
              >
                <div className="flex size-12 items-center justify-center border border-border bg-background font-mono text-sm text-foreground/80">
                  {step.number}
                </div>

                <div className="max-w-2xl md:pr-10">
                  <h3 className="mb-4 text-2xl font-medium tracking-[-0.05em] text-foreground lg:text-3xl">
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">{step.copy}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
