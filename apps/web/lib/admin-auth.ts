import { createHmac, timingSafeEqual } from 'crypto'

const COOKIE_NAME = 'vold_admin_session'
const SESSION_VALUE = 'admin'
const MAX_AGE_SECONDS = 60 * 60 * 24 * 7

function getSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET
  if (!secret) throw new Error('ADMIN_SESSION_SECRET is not set')
  return secret
}

function sign(value: string) {
  return createHmac('sha256', getSecret()).update(value).digest('hex')
}

export function createSessionCookieValue() {
  return `${SESSION_VALUE}.${sign(SESSION_VALUE)}`
}

export function verifySessionCookieValue(cookieValue: string | undefined): boolean {
  if (!cookieValue) return false
  const [value, signature] = cookieValue.split('.')
  if (!value || !signature) return false

  const expected = sign(value)
  const expectedBuf = Buffer.from(expected)
  const actualBuf = Buffer.from(signature)
  if (expectedBuf.length !== actualBuf.length) return false

  return value === SESSION_VALUE && timingSafeEqual(expectedBuf, actualBuf)
}

export function verifyPassword(password: string): boolean {
  const expected = process.env.ADMIN_PASSWORD
  if (!expected) throw new Error('ADMIN_PASSWORD is not set')

  const expectedBuf = Buffer.from(expected)
  const actualBuf = Buffer.from(password)
  if (expectedBuf.length !== actualBuf.length) return false

  return timingSafeEqual(expectedBuf, actualBuf)
}

export const ADMIN_SESSION_COOKIE = {
  name: COOKIE_NAME,
  maxAge: MAX_AGE_SECONDS,
}
