import Link from 'next/link'
import ReactMarkdown, { type Components } from 'react-markdown'

const components: Components = {
  h1: ({ children }) => (
    <h2 className="mb-5 mt-12 text-3xl font-medium tracking-[-0.03em] text-foreground first:mt-0">
      {children}
    </h2>
  ),
  h2: ({ children }) => (
    <h2 className="mb-4 mt-10 text-2xl font-medium tracking-[-0.03em] text-foreground first:mt-0">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mb-3 mt-8 text-xl font-medium tracking-[-0.02em] text-foreground">{children}</h3>
  ),
  p: ({ children }) => <p className="mb-5 text-base leading-relaxed text-muted-foreground">{children}</p>,
  a: ({ href, children }) => (
    <Link
      href={href ?? '#'}
      className="text-brand underline decoration-brand/30 underline-offset-4 transition hover:decoration-brand"
    >
      {children}
    </Link>
  ),
  ul: ({ children }) => (
    <ul className="mb-5 list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-5 list-decimal space-y-2 pl-5 text-base leading-relaxed text-muted-foreground">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="pl-1">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="mb-5 border-l-2 border-brand/40 pl-5 text-base italic leading-relaxed text-foreground/80">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-[0.85em] text-foreground">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="mb-5 overflow-x-auto rounded-xl border border-border bg-card p-4 font-mono text-sm text-card-foreground [&_code]:rounded-none [&_code]:bg-transparent [&_code]:p-0">
      {children}
    </pre>
  ),
  strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
  hr: () => <hr className="my-10 border-border" />,
  img: ({ src, alt }) =>
    typeof src === 'string' ? (
      // eslint-disable-next-line @next/next/no-img-element -- arbitrary author-uploaded URL, arbitrary aspect ratio
      <img
        src={src}
        alt={alt ?? ''}
        loading="lazy"
        className="mb-6 w-full rounded-xl border border-border"
      />
    ) : null,
}

export function MarkdownContent({ content }: { content: string }) {
  return <ReactMarkdown components={components}>{content}</ReactMarkdown>
}
