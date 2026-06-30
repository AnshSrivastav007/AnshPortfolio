import GlassCard from './GlassCard'

interface Stat {
  label: string
  value: string
}

interface FloatingPanelProps {
  stats: Stat[]
  className?: string
}

export default function FloatingPanel({ stats, className = '' }: FloatingPanelProps) {
  return (
    <GlassCard className={`p-6 space-y-4 ${className}`}>
      {stats.map((stat) => (
        <div key={stat.label} className="flex justify-between items-center">
          <span className="text-sm text-silver">{stat.label}</span>
          <span className="text-sm font-medium text-soft-white">{stat.value}</span>
        </div>
      ))}
    </GlassCard>
  )
}
