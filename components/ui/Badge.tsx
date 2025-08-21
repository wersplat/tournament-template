import clsx from 'clsx'

type Props = {
  children: React.ReactNode
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  className?: string
}

export function Badge({ children, color = 'default', className }: Props) {
  const styles: Record<NonNullable<Props['color']>, string> = {
    default: 'border-[color:var(--muted)]/30 text-[color:var(--muted)]',
    primary: 'border-[color:var(--primary)]/30 text-[color:var(--primary)]',
    secondary: 'border-[color:var(--secondary)]/30 text-[color:var(--secondary)]',
    success: 'border-emerald-500/30 text-emerald-300',
    warning: 'border-amber-500/30 text-amber-300',
    danger: 'border-rose-500/30 text-rose-300',
  }
  return (
    <span className={clsx('inline-flex items-center px-2 py-0.5 rounded-full border text-xs', styles[color], className)}>
      {children}
    </span>
  )
}
