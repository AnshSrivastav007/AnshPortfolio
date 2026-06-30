interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'outline'
  onClick?: () => void
  href?: string
  className?: string
}

export default function Button({ children, variant = 'primary', onClick, href, className = '' }: ButtonProps) {
  const base = 'inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300'
  const variants = {
    primary: 'bg-blue-accent text-white hover:bg-blue-600',
    outline: 'border border-white/20 text-soft-white hover:bg-white/5',
  }

  if (href) {
    return (
      <a href={href} className={`${base} ${variants[variant]} ${className}`}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  )
}
