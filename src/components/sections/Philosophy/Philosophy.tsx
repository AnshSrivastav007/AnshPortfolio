import Section from '../../ui/Section'
import GlassCard from '../../ui/GlassCard'
import { philosophies } from './Philosophy.data'

export default function Philosophy() {
  return (
    <Section id="philosophy">
      <h2 className="text-3xl md:text-4xl font-semibold text-soft-white mb-12">
        Engineering Philosophy
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {philosophies.map((item) => (
          <GlassCard key={item.title} className="p-6 space-y-3">
            <span className="text-2xl text-blue-accent block">{item.icon}</span>
            <h3 className="text-lg font-semibold text-soft-white">{item.title}</h3>
            <p className="text-sm text-silver leading-relaxed">{item.text}</p>
          </GlassCard>
        ))}
      </div>
    </Section>
  )
}
