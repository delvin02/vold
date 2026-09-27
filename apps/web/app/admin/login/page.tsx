import { login } from '@/app/admin/auth-actions'
import { AdminButton } from '@/components/admin/fields'

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; next?: string }>
}) {
  const { error, next } = await searchParams

  return (
    <main className="flex min-h-screen items-center justify-center px-5">
      <div className="w-full max-w-sm">
        <p className="mb-1 text-center text-sm font-semibold tracking-[-0.02em] text-foreground">
          Vold Admin
        </p>
        <h1 className="mb-8 text-center text-sm text-muted-foreground">Sign in to manage posts.</h1>

        <form action={login} className="flex flex-col gap-4 rounded-2xl border border-border p-6">
          <input type="hidden" name="next" value={next ?? '/admin'} />
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-foreground">Password</span>
            <input
              type="password"
              name="password"
              required
              autoFocus
              className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground transition focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/20"
            />
          </label>

          {error ? (
            <p className="text-sm text-destructive">That password isn&apos;t right. Try again.</p>
          ) : null}

          <AdminButton type="submit" className="w-full">
            Sign in
          </AdminButton>
        </form>
      </div>
    </main>
  )
}
