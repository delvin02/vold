import Link from 'next/link'

import { services } from '@/lib/services'
import { Wordmark } from './wordmark'

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-12 px-5 py-10 lg:px-8">
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          <div>
            <Wordmark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground/70">
              Keep business moving with better systems and clearer operations.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-16 gap-y-3 text-sm text-muted-foreground sm:grid-cols-3">
            <div className="flex flex-col gap-3">
              {services.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className="hover:text-foreground">
                  {service.navLabel}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/#method" className="hover:text-foreground">
                How we work
              </Link>
              <Link href="#contact" className="hover:text-foreground">
                Contact
              </Link>
              <a href="mailto:delvin@vold.com.au" className="hover:text-foreground">
                delvin@vold.com.au
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 border-t border-border pt-5 text-xs text-muted-foreground/50 sm:flex-row">
          <span>© 2026 Vold</span>
          <span>Based in Adelaide.</span>
          <span>Built with care. No dark patterns.</span>
        </div>
      </div>
    </footer>
  )
}
