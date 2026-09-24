import { Code2, Database, GitBranch, Globe, ShieldCheck, Wrench, type LucideIcon } from 'lucide-react'

export type ServiceHighlight = {
  title: string
  copy: string
}

export const serviceCategories = ['Build', 'Connect & Scale', 'Maintain & Protect'] as const

export type ServiceCategory = (typeof serviceCategories)[number]

export type Service = {
  slug: string
  navLabel: string
  title: string
  tag: string
  category: ServiceCategory
  summary: string
  detail: string
  icon: LucideIcon
  mockup: 'api' | 'integration' | 'qa' | 'website' | 'maintenance' | 'database'
  highlights: ServiceHighlight[]
}

export const services: Service[] = [
  {
    slug: 'foundation',
    navLabel: 'Foundation',
    title: 'Build the right foundation',
    tag: 'For a new idea',
    category: 'Build',
    summary:
      'We create the behind-the-scenes systems that help your product work reliably as more customers use it.',
    detail:
      'Before you can move fast you need something solid to move on. We design the data models, APIs and application architecture your product will still be running on once it matters — not just the version that gets you to launch.',
    icon: Code2,
    mockup: 'api',
    highlights: [
      { title: 'API design & development', copy: 'No rewrite required when the next client arrives.' },
      { title: 'Web application builds', copy: 'A product to launch, not a prototype to replace.' },
    ],
  },
  {
    slug: 'integrations',
    navLabel: 'Integrations',
    title: 'Make your tools work together',
    tag: 'For growing teams',
    category: 'Connect & Scale',
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
    category: 'Maintain & Protect',
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
  {
    slug: 'website-development',
    navLabel: 'Website Development',
    title: 'Launch a site that works as hard as you do',
    tag: 'For getting online',
    category: 'Build',
    summary:
      'We design and build the marketing site, online store or content-driven website that represents you — fast, easy to update, and built to convert.',
    detail:
      'Your website is often the first impression you get. We build fast, accessible sites — from marketing pages to full online stores — on a foundation your team can actually maintain, with a content workflow that does not need a developer for every change.',
    icon: Globe,
    mockup: 'website',
    highlights: [
      { title: 'Marketing & e-commerce sites', copy: 'Built to convert, not just to launch.' },
      { title: 'Content you can manage', copy: 'Update copy and pages without calling us.' },
    ],
  },
  {
    slug: 'maintenance',
    navLabel: 'Maintenance',
    title: 'Keep it online, updated and secure',
    tag: 'For sites already live',
    category: 'Maintain & Protect',
    summary:
      'We take care of hosting, updates, backups and security so your site or app keeps running reliably without needing your attention.',
    detail:
      'Once something is live, someone still has to keep it that way. We handle hosting, software updates, backups and security patching as an ongoing retainer, and step in fast when something needs fixing — so uptime is our problem, not yours.',
    icon: Wrench,
    mockup: 'maintenance',
    highlights: [
      { title: 'Hosting & uptime monitoring', copy: 'We notice before your customers do.' },
      { title: 'Updates, backups & security patching', copy: 'Handled on schedule, not when it breaks.' },
    ],
  },
  {
    slug: 'database-optimisation',
    navLabel: 'Database Optimisation',
    title: 'Make your database fast again',
    tag: 'For growing datasets',
    category: 'Connect & Scale',
    summary:
      'We tune, monitor and manage the database underneath your product so queries stay fast and growth does not turn into downtime.',
    detail:
      'As data grows, the queries and indexes that worked fine at launch start to strain. We audit and tune your database, fix the slow paths before customers notice them, and put ongoing monitoring in place so performance stays predictable as you scale.',
    icon: Database,
    mockup: 'database',
    highlights: [
      { title: 'Query & index tuning', copy: 'Slow paths found and fixed before customers notice.' },
      { title: 'Ongoing performance monitoring', copy: 'Problems caught while they are still small.' },
    ],
  },
]

export function getService(slug: string) {
  return services.find((service) => service.slug === slug)
}

export function getServiceGroups() {
  return serviceCategories
    .map((category) => ({
      category,
      services: services.filter((service) => service.category === category),
    }))
    .filter((group) => group.services.length > 0)
}
