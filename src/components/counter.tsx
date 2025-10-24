import type { ReactNode } from 'react'

export function Counter({
  children,
  className,
  onClick,
  onAbort,
}: {
  value?: boolean
  children?: ReactNode
  className?: string
  onClick?: () => void
  onAbort?: () => void
}) {
  return (
    <div className={className}>
      <button onClick={onClick} onAbort={onAbort}>
        button
      </button>
      {children}
    </div>
  )
}
