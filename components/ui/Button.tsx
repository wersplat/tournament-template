"use client"
import clsx from 'clsx'

export function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
}: {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}) {
  const base = 'inline-flex items-center justify-center rounded-[var(--radius)] font-medium transition-colors'
  const variants = {
    primary: 'bg-[color:var(--primary)] text-black hover:brightness-110',
    secondary: 'bg-[color:var(--secondary)] text-black hover:brightness-110',
    ghost: 'bg-transparent border border-white/10 hover:bg-white/5',
  }
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  }
  return (
    <button onClick={onClick} className={clsx(base, variants[variant], sizes[size], className)}>
      {children}
    </button>
  )
}
