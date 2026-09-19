'use client'

import { useState } from 'react'
import {
  ArrowRight,
  Check,
  Code2,
  Gauge,
  Menu,
  ShieldCheck,
  X,
  Zap,
  GitBranch,
} from 'lucide-react'

const offers = [
  {
    number: '01',
    title: 'Build the right foundation',
    description:
      'We create the behind-the-scenes systems that help your product work reliably as more customers use it.',
    icon: Code2,
    tag: 'For a new idea',
  },
  {
    number: '02',
    title: 'Make your tools work together',
    description:
      'We connect the software you already use so information moves smoothly and your team spends less time copying and checking data.',
    icon: GitBranch,
    tag: 'For growing teams',
  },
  {
    number: '03',
    title: 'Remove the worry from releases',
    description:
      'We test, improve and check your product so you can make changes with confidence instead of crossing your fingers.',
    icon: ShieldCheck,
    tag: 'For busy businesses',
  },
]

const capabilities = [
  ['API design & development', 'Interfaces your team can build on.'],
  ['Systems integration', 'Less swivel-chair work. Fewer brittle handoffs.'],
  ['Automated testing & QA', 'Confidence that survives the next release.'],
  ['Technical SEO & performance', 'Faster experiences, easier to find.'],
  ['Web application builds', 'From first commit to a useful product.'],
  ['Technical discovery', 'A sharper answer before expensive work starts.'],
]

function Wordmark() {
  return (
    <a href="#top" className="flex items-center" aria-label="Vold home">
      <span className="text-[19px] font-semibold tracking-[-0.07em] text-white">VOLD</span>
    </a>
  )
}

function Button({
  children,
  variant = 'primary',
  href = '#contact',
}: {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  href?: string
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${variant === 'primary'
          ? 'bg-white text-black hover:bg-[#8ba4ff]'
          : 'border border-white/15 bg-white/[0.04] text-white hover:border-white/30 hover:bg-white/[0.08]'
        }`}
    >
      {children}
    </a>
  )
}

function ApiMockup() {
  return (
    <div className="relative h-full min-h-[240px] overflow-hidden rounded-[20px] border border-white/10 bg-[#172433] p-5 shadow-2xl shadow-violet-950/20">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex gap-1.5">
          <i className="size-2 rounded-full bg-[#ff6a7a]" />
          <i className="size-2 rounded-full bg-[#ffc857]" />
          <i className="size-2 rounded-full bg-[#8be28b]" />
        </div>
        <span className="font-mono text-[10px] text-white/35">vold / api</span>
      </div>
      <div className="mt-5 space-y-3 font-mono text-[11px]">
        <p>
          <span className="text-[#8ba4ff]">POST</span>{' '}
          <span className="text-white/70">/v1/organisations</span>
        </p>
        <p className="text-white/35">{`{`}</p>
        <p className="pl-4 text-[#bfadff]">
          &quot;name&quot;: <span className="text-[#b8c7e8]">&quot;Northstar&quot;</span>,
        </p>
        <p className="pl-4 text-[#bfadff]">
          &quot;plan&quot;: <span className="text-[#b8c7e8]">&quot;scale&quot;</span>
        </p>
        <p className="text-white/35">{`}`}</p>
        <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-3 text-[#b8c7e8]">
          <span className="flex size-4 items-center justify-center rounded-full bg-[#b8c7e8]/15">
            <Check className="size-2.5" />
          </span>{' '}
          201 Created <span className="ml-auto text-white/30">142ms</span>
        </div>
      </div>
    </div>
  )
}

function IntegrationMockup() {
  return (
    <div className="relative h-full min-h-[240px] overflow-hidden rounded-[20px] border border-white/10 bg-[#172433] p-5 shadow-2xl shadow-emerald-950/20">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-white/55">System health</span>
        <span className="rounded-full bg-[#b8c7e8]/10 px-2 py-1 text-[10px] text-[#b8c7e8]">
          All systems go
        </span>
      </div>
      <div className="relative mt-8 flex items-center justify-between">
        <div className="flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-xs font-bold">
          ERP
        </div>
        <div className="mx-3 flex flex-1 items-center">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#b8c7e8] to-[#b8c7e8]" />
          <Zap className="mx-2 size-3 text-[#b8c7e8]" />
          <span className="h-px flex-1 bg-gradient-to-r from-[#b8c7e8] to-transparent" />
        </div>
        <div className="flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-xs font-bold">
          CRM
        </div>
      </div>
      <div className="mt-10 rounded-xl border border-white/8 bg-white/[0.03] p-3">
        <div className="mb-2 flex justify-between text-[10px] text-white/35">
          <span>Events processed</span>
          <span className="text-white/60">8,492</span>
        </div>
        <div className="flex h-8 items-end gap-1">
          {[22, 35, 28, 50, 42, 62, 57, 76, 68, 92, 82, 100].map((height, index) => (
            <span
              key={index}
              className="flex-1 rounded-t bg-[#b8c7e8]/70"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function QaMockup() {
  return (
    <div className="relative h-full min-h-[240px] overflow-hidden rounded-[20px] border border-white/10 bg-[#172433] p-5 shadow-2xl shadow-amber-950/20">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <span className="text-xs font-medium text-white/55">Release check</span>
        <span className="font-mono text-[10px] text-white/30">#1842</span>
      </div>
      <div className="mt-5 space-y-2.5">
        {[
          ['API contract tests', 'passed'],
          ['Checkout flow', 'passed'],
          ['Lighthouse audit', 'passed'],
          ['Regression suite', 'running'],
        ].map(([label, status]) => (
          <div
            key={label}
            className="flex items-center gap-3 rounded-lg border border-white/6 bg-white/[0.025] px-3 py-2.5 text-[11px]"
          >
            <span
              className={`flex size-4 items-center justify-center rounded-full ${status === 'passed' ? 'bg-[#8ba4ff]/15 text-[#8ba4ff]' : 'bg-[#ffc857]/15 text-[#ffc857]'
                }`}
            >
              {status === 'passed' ? (
                <Check className="size-2.5" />
              ) : (
                <span className="size-1.5 animate-pulse rounded-full bg-current" />
              )}
            </span>
            <span className="text-white/60">{label}</span>
            <span className="ml-auto font-mono text-[9px] uppercase text-white/30">{status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main
      id="top"
      className="min-h-screen overflow-hidden bg-[#0f1720] text-[#f4f7fb] selection:bg-[#7c8cff] selection:text-white"
    >
      <div className="pointer-events-none fixed inset-0 -z-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:80px_80px] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />
      <div className="hero-mesh pointer-events-none absolute inset-x-[-15%] top-[-16rem] -z-0 h-[48rem] opacity-35" aria-hidden="true">
        <div className="hero-mesh__orb hero-mesh__orb--violet" />
        <div className="hero-mesh__orb hero-mesh__orb--blue" />
        <div className="hero-mesh__orb hero-mesh__orb--pink" />
        <div className="hero-mesh__orb hero-mesh__orb--cyan" />
        <div className="hero-mesh__glow" />
      </div>

      <nav className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#0f1720]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-4 py-3.5 sm:px-5 lg:px-8">
          <Wordmark />
          <div className="hidden items-center gap-8 text-sm text-white/50 md:flex">
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#method" className="transition hover:text-white">
              How we work
            </a>
            <a href="#proof" className="transition hover:text-white">
              Proof
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <Button variant="secondary" href="#contact">
              Get a demo
            </Button>
            <Button href="#services">
              See the work <ArrowRight className="size-4" />
            </Button>
          </div>
          <button
            className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition hover:border-white/25 hover:bg-white/[0.08] md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#0f1720] px-4 py-5 sm:px-5 md:hidden">
            <div className="mx-auto flex max-w-[1240px] flex-col gap-1 text-sm text-white/70">
              <a
                className="rounded-lg px-3 py-3 transition hover:bg-white/[0.06] hover:text-white"
                href="#services"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </a>
              <a
                className="rounded-lg px-3 py-3 transition hover:bg-white/[0.06] hover:text-white"
                href="#method"
                onClick={() => setMenuOpen(false)}
              >
                How we work
              </a>
              <a
                className="rounded-lg px-3 py-3 transition hover:bg-white/[0.06] hover:text-white"
                href="#proof"
                onClick={() => setMenuOpen(false)}
              >
                Proof
              </a>
              <a
                className="rounded-lg px-3 py-3 transition hover:bg-white/[0.06] hover:text-white"
                href="#contact"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
              <div className="mt-3 grid grid-cols-2 gap-2 border-t border-white/10 pt-4">
                <Button variant="secondary" href="#contact">
                  Get a demo
                </Button>
                <Button href="#services">
                  See the work <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <section className="relative z-10 mx-auto max-w-[1240px] px-4 pb-16 pt-16 sm:px-5 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-32 lg:pt-32">
        <div className="grid items-end gap-10 sm:gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-20">
          <div className="hero-copy">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-white/45">
              <span className="size-1.5 animate-pulse rounded-full bg-[#7c8cff]" />
              Independent software partner
            </div>
            <h1 className="max-w-4xl text-[clamp(3rem,15vw,8.4rem)] font-medium leading-[0.88] tracking-[-0.085em] sm:text-[clamp(3.6rem,9vw,8.4rem)]">
              Turn stuck
              <br />
              <span className="text-[#7c8cff]">into moving.</span>
            </h1>
          </div>

          <div className="max-w-md pb-1 lg:pb-3">
            <p className="mb-8 text-lg leading-relaxed text-white/55">
              Vold helps businesses fix slow, disconnected or confusing software. We explain things plainly, do the hard work and leave you with something that works.
            </p>
            <div className="grid grid-cols-1 gap-3 min-[420px]:flex min-[420px]:flex-wrap">
              <Button href="#contact">
                Start a conversation <ArrowRight className="size-4" />
              </Button>
              <Button variant="secondary" href="#services">
                Explore services
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-2 text-xs text-white/35">
              <span className="size-1.5 rounded-full bg-[#b8c7e8]" />
              Adelaide · Australia-wide · Remote-first
            </div>
          </div>
        </div>

        <div className="mt-16 flex items-center gap-4 border-y border-white/10 py-6 text-xs text-white/35 lg:mt-24">
          <Gauge className="size-4 text-[#8ba4ff]" />
          <span>Built around outcomes, not billable hours.</span>
          <span className="ml-auto hidden font-mono text-white/20 sm:block">01 / 04</span>
        </div>
      </section>

      <section id="services" className="relative z-10 border-y border-white/10">
        <div className="mx-auto max-w-[1240px] px-5 py-24 lg:px-8 lg:py-32">
          <div className="mb-14 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[#8ba4ff]">The useful middle</p>
              <h2 className="max-w-2xl text-4xl font-medium tracking-[-0.06em] text-white sm:text-6xl">
                The practical help
                <br />
                <span className="text-white/35">between idea and results.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/45">
              Not a giant transformation programme. Not a pair of hands. Focused technical work with a finish line you can see.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {offers.map((offer) => {
              const Icon = offer.icon

              return (
                <article
                  key={offer.number}
                  className="group rounded-[24px] border border-white/10 bg-white/[0.025] p-4 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.045]"
                >
                  <div className="mb-4">
                    <div className="mb-6 flex items-center justify-between px-1">
                      <span className="font-mono text-xs text-white/25">{offer.number}</span>
                      <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-wider text-white/35">
                        {offer.tag}
                      </span>
                    </div>
                    {offer.number === '01' ? <ApiMockup /> : offer.number === '02' ? <IntegrationMockup /> : <QaMockup />}
                  </div>

                  <div className="px-1 pb-2 pt-2">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex size-8 items-center justify-center rounded-lg bg-white/8">
                        <Icon className="size-4 text-white/75" />
                      </span>
                      <h3 className="text-xl font-medium tracking-[-0.04em]">{offer.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-white/45">{offer.description}</p>
                    <a
                      href="#contact"
                      className="mt-6 inline-flex items-center gap-2 text-sm text-white/65 transition group-hover:text-[#8ba4ff]"
                    >
                      Talk it through <ArrowRight className="size-3.5 transition group-hover:translate-x-1" />
                    </a>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="method" className="relative z-10 mx-auto max-w-[1240px] px-5 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[#8ba4ff]">The Vold method</p>
            <h2 className="max-w-md text-4xl font-medium tracking-[-0.06em] sm:text-6xl">
              Small team.
              <br />
              Sharp edges.
            </h2>
            <p className="mt-6 max-w-sm leading-relaxed text-white/45">
              You do not need to speak tech to work with us. We explain the options, keep the decisions visible and show progress as we go.
            </p>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {[
              ['01', 'Start with the risk', 'We turn the brief into a small, testable piece of work — with the unknowns named before the build begins.'],
              ['02', 'Build the thin slice', 'The first useful path ships early. You see the work, not a slide deck about the work.'],
              ['03', 'Leave it better', 'Every engagement ends with working software, documentation and a clear next step — even if that step is not us.'],
            ].map(([num, title, copy]) => (
              <div key={num} className="grid gap-5 py-7 sm:grid-cols-[60px_1fr] sm:gap-8">
                <span className="font-mono text-xs text-[#8ba4ff]">{num}</span>
                <div>
                  <h3 className="text-xl tracking-[-0.03em]">{title}</h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/45">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proof" className="relative z-10 border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-[1240px] px-5 py-24 lg:px-8 lg:py-32">
          <div className="mb-14 grid gap-6 lg:grid-cols-[1fr_0.65fr]">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[#8ba4ff]">No invented proof</p>
              <h2 className="max-w-3xl text-4xl font-medium tracking-[-0.06em] sm:text-6xl">
                Credibility you can
                <br />
                <span className="text-white/35">inspect yourself.</span>
              </h2>
            </div>
            <p className="max-w-sm self-end text-sm leading-relaxed text-white/45">
              Vold is new. We will not pretend otherwise. The work, method and technical standard are the proof — and they are open to scrutiny.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ['Public work', 'Open-source building blocks and useful experiments — not a portfolio of logos we cannot name.', 'View the repo'],
              ['A clear rate card', 'Straightforward pricing anchors and scope boundaries before a meeting.', 'See how we price'],
              ['A written standard', 'A public engineering checklist for APIs, integrations and releases.', 'Read the standard'],
            ].map(([title, copy, link], index) => (
              <article key={title} className="group rounded-2xl border border-white/10 bg-[#0f1720] p-6 transition hover:border-white/25">
                <span className="font-mono text-xs text-white/25">0{index + 1}</span>
                <h3 className="mt-12 text-xl tracking-[-0.03em]">{title}</h3>
                <p className="mt-3 min-h-20 text-sm leading-relaxed text-white/45">{copy}</p>
                <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm text-white/65 group-hover:text-[#8ba4ff]">
                  {link} <ArrowRight className="size-3.5 transition group-hover:translate-x-1" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-5 py-24 lg:px-8 lg:py-32">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[#8ba4ff]">Capability map</p>
            <h2 className="text-4xl font-medium tracking-[-0.06em] sm:text-6xl">
              What we can
              <br />
              <span className="text-white/35">untangle.</span>
            </h2>
          </div>
          <span className="hidden font-mono text-xs text-white/25 sm:block">06 capabilities</span>
        </div>

        <div className="grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(([title, copy], index) => (
            <div key={title} className="group border-b border-r border-white/10 p-6 transition hover:bg-white/[0.035] sm:p-8">
              <div className="mb-12 flex justify-between">
                <span className="font-mono text-xs text-white/25">0{index + 1}</span>
                <ArrowRight className="size-4 -rotate-45 text-white/20 transition group-hover:translate-x-1 group-hover:rotate-0 group-hover:text-[#8ba4ff]" />
              </div>
              <h3 className="text-lg tracking-[-0.03em]">{title}</h3>
              <p className="mt-2 text-sm text-white/40">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-[1240px] px-5 py-28 text-center lg:px-8 lg:py-40">
          <p className="mb-5 text-xs uppercase tracking-[0.22em] text-[#8ba4ff]">Have a knot to untangle?</p>
          <h2 className="mx-auto max-w-4xl text-5xl font-medium tracking-[-0.08em] sm:text-7xl lg:text-8xl">
            Let&apos;s make it
            <br />
            <span className="text-white/35">make sense.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-white/45">
            Tell us what is stuck, slow or harder than it should be. We will come back with a useful first answer.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button href="mailto:hello@vold.com.au">
              hello@vold.com.au <ArrowRight className="size-4" />
            </Button>
            <Button variant="secondary" href="#services">
              See the services
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-12 px-5 py-10 lg:px-8">
          <div className="flex flex-col justify-between gap-8 sm:flex-row">
            <div>
              <Wordmark />
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/35">
                Independent software engineering for the systems that matter.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-16 gap-y-3 text-sm text-white/45">
              <a href="#services" className="hover:text-white">
                Services
              </a>
              <a href="#method" className="hover:text-white">
                Method
              </a>
              <a href="#proof" className="hover:text-white">
                Proof
              </a>
              <a href="mailto:hello@vold.com.au" className="hover:text-white">
                Email
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-3 border-t border-white/10 pt-5 text-xs text-white/25 sm:flex-row">
            <span>© 2026 Vold Pty Ltd. Adelaide, Australia.</span>
            <span>Built with care. No dark patterns.</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
