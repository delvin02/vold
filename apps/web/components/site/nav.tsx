'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'

import { getServiceGroups } from '@/lib/services'
import { Wordmark } from './wordmark'
import { MarketingButton } from './button'
import { ThemeToggle } from './theme-toggle'

const navLinks = [
  { href: '/#method', label: 'How we work' },
  { href: '#contact', label: 'Contact' },
]

const serviceGroups = getServiceGroups()

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()
  const isServicesActive = pathname.startsWith('/services')

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) setServicesOpen(false)
  }, [menuOpen])

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-4 py-3.5 sm:px-5 lg:px-8">
        <Wordmark />
        <div className="hidden items-center gap-10 md:flex">
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <div className="group relative">
              <Link
                href="/services"
                aria-current={isServicesActive ? 'page' : undefined}
                className={`flex items-center gap-1 transition hover:text-foreground ${isServicesActive ? 'text-foreground underline underline-offset-4' : ''}`}
              >
                Services
                <ChevronDown className="size-3.5 transition group-hover:rotate-180 group-focus-within:rotate-180" />
              </Link>

              <div className="invisible absolute left-1/2 top-full z-50 w-[600px] -translate-x-1/2 pt-3 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="overflow-hidden rounded-2xl border border-border bg-background p-6 shadow-2xl">
                  <div className="grid grid-cols-3 gap-6">
                    {serviceGroups.map((group) => (
                      <div key={group.category}>
                        <p className="mb-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground/70">
                          {group.category}
                        </p>
                        <div className="flex flex-col gap-1">
                          {group.services.map((service) => {
                            const Icon = service.icon

                            return (
                              <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className="flex items-center gap-2.5 rounded-lg px-2 py-2 text-sm text-foreground/80 transition hover:bg-secondary/40 hover:text-foreground"
                              >
                                <Icon className="size-4 shrink-0 text-foreground/60" />
                                {service.navLabel}
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/services"
                    className="mt-5 block rounded-xl bg-secondary/30 px-4 py-3 text-center text-sm font-medium text-brand transition hover:bg-secondary/50"
                  >
                    View all services
                  </Link>
                </div>
              </div>
            </div>

            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-foreground">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <MarketingButton href="#contact">
              Start a conversation <ArrowRight className="size-4" />
            </MarketingButton>
            <ThemeToggle />
          </div>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="flex size-10 items-center justify-center rounded-full border border-border bg-secondary/30 transition hover:border-brand/40 hover:bg-secondary"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-border bg-background px-4 py-5 sm:px-5 md:hidden">
          <div className="mx-auto flex max-w-[1240px] flex-col gap-1 text-sm text-foreground/70">
            <div>
              <button
                type="button"
                onClick={() => setServicesOpen((open) => !open)}
                aria-expanded={servicesOpen}
                aria-controls="mobile-services-list"
                className={`flex w-full items-center justify-between rounded-lg px-3 py-3 text-left transition hover:bg-secondary/60 hover:text-foreground ${isServicesActive ? 'text-foreground underline underline-offset-4' : ''}`}
              >
                Services
                <ChevronDown className={`size-4 transition ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesOpen && (
                <div id="mobile-services-list" className="ml-3 flex flex-col gap-4 border-l border-border pl-3 pt-1">
                  {serviceGroups.map((group) => (
                    <div key={group.category}>
                      <p className="mb-1 px-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground/60">
                        {group.category}
                      </p>
                      <div className="flex flex-col gap-1">
                        {group.services.map((service) => {
                          const Icon = service.icon

                          return (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-foreground/70 transition hover:bg-secondary/60 hover:text-foreground"
                              onClick={() => setMenuOpen(false)}
                            >
                              <Icon className="size-4 shrink-0 text-foreground/60" />
                              {service.navLabel}
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                  <Link
                    href="/services"
                    className="rounded-lg px-3 py-2.5 font-medium text-brand transition hover:text-brand/80"
                    onClick={() => setMenuOpen(false)}
                  >
                    View all services
                  </Link>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                className="rounded-lg px-3 py-3 transition hover:bg-secondary/60 hover:text-foreground"
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 border-t border-border pt-4">
              <MarketingButton href="#contact" className="w-full">
                Start a conversation <ArrowRight className="size-4" />
              </MarketingButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
