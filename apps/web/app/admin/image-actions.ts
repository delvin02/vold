'use server'

import { put } from '@vercel/blob'

const MAX_BYTES = 8 * 1024 * 1024 // 8MB
const ALLOWED_TYPES = new Set(['image/png', 'image/jpeg', 'image/webp', 'image/gif', 'image/svg+xml'])

export async function uploadPostImage(
  formData: FormData,
): Promise<{ url: string } | { error: string }> {
  const file = formData.get('file')

  if (!(file instanceof File) || file.size === 0) {
    return { error: 'No file received.' }
  }

  if (!ALLOWED_TYPES.has(file.type)) {
    return { error: 'Use a PNG, JPEG, WebP, GIF or SVG image.' }
  }

  if (file.size > MAX_BYTES) {
    return { error: 'Image is larger than 8MB.' }
  }

  const blob = await put(`posts/${crypto.randomUUID()}-${file.name}`, file, {
    access: 'public',
    addRandomSuffix: false,
  })

  return { url: blob.url }
}
