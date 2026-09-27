'use client'

import { useState, useTransition } from 'react'

import { uploadPostImage } from '@/app/admin/image-actions'

const ACCEPT = 'image/png,image/jpeg,image/webp,image/gif,image/svg+xml'

export function ThumbnailField({
  name,
  label,
  hint,
  defaultUrl,
}: {
  name: string
  label: string
  hint?: string
  defaultUrl?: string | null
}) {
  const [url, setUrl] = useState(defaultUrl ?? '')
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  function handleFile(file: File) {
    setError(null)
    const formData = new FormData()
    formData.set('file', file)
    startTransition(async () => {
      const result = await uploadPostImage(formData)
      if ('error' in result) {
        setError(result.error)
        return
      }
      setUrl(result.url)
    })
  }

  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-foreground">{label}</span>
      <input type="hidden" name={name} value={url} />

      {url ? (
        <div className="group relative overflow-hidden rounded-lg border border-border">
          {/* eslint-disable-next-line @next/next/no-img-element -- arbitrary uploaded URL, not a static asset */}
          <img src={url} alt="" className="h-40 w-full object-cover" />
          <button
            type="button"
            onClick={() => setUrl('')}
            className="absolute right-2 top-2 rounded-full border border-border bg-background/90 px-2.5 py-1 text-xs font-medium text-foreground opacity-0 transition group-hover:opacity-100 hover:bg-secondary"
          >
            Remove
          </button>
        </div>
      ) : (
        <label className="flex h-40 cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border border-dashed border-border bg-background text-sm text-muted-foreground transition hover:border-brand/40 hover:text-foreground">
          <span>{isPending ? 'Uploading…' : 'Click to upload an image'}</span>
          <span className="text-xs text-muted-foreground/70">PNG, JPEG, WebP, GIF or SVG — up to 8MB</span>
          <input
            type="file"
            accept={ACCEPT}
            className="hidden"
            disabled={isPending}
            onChange={(event) => {
              const file = event.target.files?.[0]
              if (file) handleFile(file)
              event.target.value = ''
            }}
          />
        </label>
      )}

      {error ? <span className="text-xs text-destructive">{error}</span> : null}
      {hint && !error ? <span className="text-xs text-muted-foreground">{hint}</span> : null}
    </div>
  )
}
