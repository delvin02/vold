'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { ADMIN_SESSION_COOKIE, createSessionCookieValue, verifyPassword } from '@/lib/admin-auth'

export async function login(formData: FormData) {
  const password = String(formData.get('password') ?? '')
  const next = String(formData.get('next') ?? '/admin')

  if (!verifyPassword(password)) {
    redirect(`/admin/login?error=1&next=${encodeURIComponent(next)}`)
  }

  const cookieStore = await cookies()
  cookieStore.set(ADMIN_SESSION_COOKIE.name, createSessionCookieValue(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: ADMIN_SESSION_COOKIE.maxAge,
  })

  redirect(next.startsWith('/admin') ? next : '/admin')
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete(ADMIN_SESSION_COOKIE.name)
  redirect('/admin/login')
}
