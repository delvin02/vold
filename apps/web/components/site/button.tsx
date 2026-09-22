import Link from 'next/link'

export function MarketingButton({
  children,
  variant = 'primary',
  href = '#contact',
  className = '',
}: {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  href?: string
  className?: string
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5'
  const styles =
    variant === 'primary'
      ? 'bg-primary text-primary-foreground hover:shadow-[0_16px_36px_-12px_var(--brand)]'
      : 'border border-border bg-secondary/40 text-foreground hover:border-brand/40 hover:bg-secondary'

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  )
}
