import Link from 'next/link'

import { logout } from '@/app/admin/auth-actions'
import { AdminButton } from './fields'

export function AdminHeader({ backHref, backLabel }: { backHref?: string; backLabel?: string }) {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-[960px] items-center justify-between px-5 py-4">
        <div className="flex items-center gap-4">
          <Link
            href="/admin"
            prefetch={false}
            className="text-sm font-semibold tracking-[-0.02em] text-foreground"
          >
            Vold Admin
          </Link>
          {backHref ? (
            <>
              <span className="text-border">/</span>
              <Link
                href={backHref}
                prefetch={false}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {backLabel}
              </Link>
            </>
          ) : null}
        </div>
        <form action={logout}>
          <AdminButton variant="secondary" type="submit">
            Log out
          </AdminButton>
        </form>
      </div>
    </header>
  )
}
