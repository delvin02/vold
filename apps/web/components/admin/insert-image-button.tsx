'use client'

import { useState, useTransition } from 'react'
import { ImagePlus } from 'lucide-react'

import { uploadPostImage } from '@/app/admin/image-actions'

const ACCEPT = 'image/png,image/jpeg,image/webp,image/gif,image/svg+xml'

function insertAtCursor(textarea: HTMLTextAreaElement, snippet: string) {
  const start = textarea.selectionStart ?? textarea.value.length
  const end = textarea.selectionEnd ?? textarea.value.length
  const before = textarea.value.slice(0, start)
  const after = textarea.value.slice(end)
  const needsLeadingBreak = before.length > 0 && !before.endsWith('\n\n')
  const insertion = `${needsLeadingBreak ? '\n\n' : ''}${snippet}\n\n`

  textarea.value = before + insertion + after
  const cursor = (before + insertion).length
  textarea.focus()
  textarea.setSelectionRange(cursor, cursor)
}

export function InsertImageButton({ targetId }: { targetId: string }) {
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
      const textarea = document.getElementById(targetId)
      if (textarea instanceof HTMLTextAreaElement) {
        insertAtCursor(textarea, `![](${result.url})`)
      }
    })
  }

  return (
    <div className="flex items-center gap-2">
      <label className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground transition hover:border-brand/40 hover:text-foreground">
        <ImagePlus className="size-3.5" />
        {isPending ? 'Uploading…' : 'Insert image'}
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
      {error ? <span className="text-xs text-destructive">{error}</span> : null}
    </div>
  )
}
