import clsx from 'clsx'

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={clsx('rounded-[var(--radius)] bg-[color:var(--card)] border border-white/10', className)}>
      {children}
    </div>
  )
}
