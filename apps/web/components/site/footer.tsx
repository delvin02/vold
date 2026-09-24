import Link from 'next/link'

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
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <Link href="/services" className="hover:text-foreground">
              Services
            </Link>
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

        <div className="flex flex-col justify-between gap-3 border-t border-border pt-5 text-xs text-muted-foreground/50 sm:flex-row">
          <span>© 2026 Vold</span>
          <span>Based in Adelaide.</span>
          <span>Built with care. No dark patterns.</span>
        </div>
      </div>
    </footer>
  )
}
