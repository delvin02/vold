'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight, Menu, X } from 'lucide-react'

import { Wordmark } from './wordmark'
import { MarketingButton } from './button'

const navLinks = [
  { href: '/#services', label: 'Services', activeWhen: (pathname: string) => pathname.startsWith('/services') },
  { href: '/#method', label: 'How we work' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-4 py-3.5 sm:px-5 lg:px-8">
        <Wordmark />
        <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {navLinks.map((link) => {
            const isActive = link.activeWhen?.(pathname) ?? false

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`transition hover:text-foreground ${isActive ? 'text-foreground' : ''}`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <MarketingButton variant="secondary" href="/#services">
            See the work
          </MarketingButton>
          <MarketingButton href="#contact">
            Start a conversation <ArrowRight className="size-4" />
          </MarketingButton>
        </div>
        <button
          className="flex size-10 items-center justify-center rounded-full border border-border bg-secondary/30 transition hover:border-brand/40 hover:bg-secondary md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-border bg-background px-4 py-5 sm:px-5 md:hidden">
          <div className="mx-auto flex max-w-[1240px] flex-col gap-1 text-sm text-foreground/70">
            {navLinks.map((link) => {
              const isActive = link.activeWhen?.(pathname) ?? false

              return (
                <Link
                  key={link.href}
                  className={`rounded-lg px-3 py-3 transition hover:bg-secondary/60 hover:text-foreground ${isActive ? 'text-foreground' : ''}`}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="mt-3 flex flex-col gap-2 border-t border-border pt-4">
              <MarketingButton href="#contact" className="w-full">
                Start a conversation <ArrowRight className="size-4" />
              </MarketingButton>
              <MarketingButton variant="secondary" href="/#services" className="w-full">
                See the work
              </MarketingButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
