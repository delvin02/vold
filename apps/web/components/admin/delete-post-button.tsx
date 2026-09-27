'use client'

import { AdminButton } from './fields'

export function DeletePostButton({ action, title }: { action: () => void; title: string }) {
  return (
    <form
      action={action}
      onSubmit={(event) => {
        if (!confirm(`Delete "${title}"? This can't be undone.`)) {
          event.preventDefault()
        }
      }}
    >
      <AdminButton variant="danger" type="submit">
        Delete
      </AdminButton>
    </form>
  )
}
