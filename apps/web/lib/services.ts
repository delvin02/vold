import { Code2, GitBranch, ShieldCheck, type LucideIcon } from 'lucide-react'

export type ServiceHighlight = {
  title: string
  copy: string
}

export type Service = {
  slug: string
  navLabel: string
  title: string
  tag: string
  summary: string
  detail: string
  icon: LucideIcon
  mockup: 'api' | 'integration' | 'qa'
  highlights: ServiceHighlight[]
}

export const services: Service[] = [
  {
    slug: 'foundation',
    navLabel: 'Foundation',
    title: 'Build the right foundation',
    tag: 'For a new idea',
    summary:
      'We create the behind-the-scenes systems that help your product work reliably as more customers use it.',
    detail:
      'Before you can move fast you need something solid to move on. We design the data models, APIs and application architecture your product will still be running on once it matters — not just the version that gets you to launch.',
    icon: Code2,
    mockup: 'api',
    highlights: [
      { title: 'API design & development', copy: 'Interfaces your team can build on.' },
      { title: 'Web application builds', copy: 'From first commit to a useful product.' },
    ],
  },
  {
    slug: 'integrations',
    navLabel: 'Integrations',
    title: 'Make your tools work together',
    tag: 'For growing teams',
    summary:
      'We connect the software you already use so information moves smoothly and your team spends less time copying and checking data.',
    detail:
      'Most operational drag comes from systems that were never meant to talk to each other. We map how data actually moves through your business, then wire the connections so it does that on its own — reliably, and in the background.',
    icon: GitBranch,
    mockup: 'integration',
    highlights: [
      { title: 'Systems integration', copy: 'Less swivel-chair work. Fewer brittle handoffs.' },
      { title: 'Technical discovery', copy: 'A sharper answer before expensive work starts.' },
    ],
  },
  {
    slug: 'reliability',
    navLabel: 'Reliability',
    title: 'Remove the worry from releases',
    tag: 'For busy businesses',
    summary:
      'We test, improve and check your product so you can make changes with confidence instead of crossing your fingers.',
    detail:
      'Shipping should feel routine, not risky. We put automated checks and performance guardrails around your product so every release is verified before it reaches a customer, and slow pages get caught before they cost you one.',
    icon: ShieldCheck,
    mockup: 'qa',
    highlights: [
      { title: 'Automated testing & QA', copy: 'Confidence that survives the next release.' },
      { title: 'Technical SEO & performance', copy: 'Faster experiences, easier to find.' },
    ],
  },
]

export function getService(slug: string) {
  return services.find((service) => service.slug === slug)
}
