const inputClass =
  'w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/20'

export function TextField({
  label,
  name,
  defaultValue,
  placeholder,
  required,
  mono,
  hint,
}: {
  label: string
  name: string
  defaultValue?: string
  placeholder?: string
  required?: boolean
  mono?: boolean
  hint?: string
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-foreground">{label}</span>
      <input
        type="text"
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required={required}
        className={`${inputClass} ${mono ? 'font-mono' : ''}`}
      />
      {hint ? <span className="text-xs text-muted-foreground">{hint}</span> : null}
    </label>
  )
}

export function TextAreaField({
  label,
  name,
  id,
  defaultValue,
  placeholder,
  required,
  rows = 14,
  hint,
  action,
}: {
  label: string
  name: string
  id?: string
  defaultValue?: string
  placeholder?: string
  required?: boolean
  rows?: number
  hint?: string
  action?: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between gap-3">
        <label htmlFor={id ?? name} className="text-sm font-medium text-foreground">
          {label}
        </label>
        {action}
      </div>
      <textarea
        id={id ?? name}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className={`${inputClass} resize-y font-mono leading-relaxed`}
      />
      {hint ? <span className="text-xs text-muted-foreground">{hint}</span> : null}
    </div>
  )
}

export function CheckboxField({
  label,
  name,
  defaultChecked,
  hint,
}: {
  label: string
  name: string
  defaultChecked?: boolean
  hint?: string
}) {
  return (
    <label className="flex items-start gap-3 rounded-lg border border-border bg-secondary/20 p-3.5">
      <input
        type="checkbox"
        name={name}
        defaultChecked={defaultChecked}
        className="mt-0.5 size-4 shrink-0 rounded border-border accent-[var(--brand)]"
      />
      <span className="flex flex-col gap-0.5">
        <span className="text-sm font-medium text-foreground">{label}</span>
        {hint ? <span className="text-xs text-muted-foreground">{hint}</span> : null}
      </span>
    </label>
  )
}

export function AdminButton({
  children,
  variant = 'primary',
  type = 'button',
  className = '',
  formId,
}: {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'danger'
  type?: 'button' | 'submit'
  className?: string
  formId?: string
}) {
  const styles = {
    primary: 'bg-primary text-primary-foreground hover:opacity-90',
    secondary: 'border border-border bg-background text-foreground hover:bg-secondary/40',
    danger: 'border border-destructive/30 bg-destructive/10 text-destructive hover:bg-destructive/15',
  }[variant]

  return (
    <button
      type={type}
      form={formId}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition ${styles} ${className}`}
    >
      {children}
    </button>
  )
}
