interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export default function GlassCard({ children, className = '', ...props }: GlassCardProps) {
  return (
    <div
      className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
