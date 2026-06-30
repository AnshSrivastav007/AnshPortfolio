import { useState } from 'react'
import Section from '../../ui/Section'
import GlassCard from '../../ui/GlassCard'
import { stackData } from './Stack.data'

export default function Stack() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <Section id="stack">
      <h2 className="text-3xl md:text-4xl font-semibold text-soft-white mb-12">
        Stack
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stackData.map((category) => (
          <GlassCard key={category.category} className="p-6">
            <h3 className="text-sm font-medium text-blue-accent uppercase tracking-wider mb-4">
              {category.category}
            </h3>
            <ul className="space-y-3">
              {category.items.map((item) => (
                <li
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setHovered(`${category.category}-${item.name}`)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setHovered(hovered === `${category.category}-${item.name}` ? null : `${category.category}-${item.name}`)}
                >
                  <span className="text-sm text-soft-white font-medium">{item.name}</span>
                  {hovered === `${category.category}-${item.name}` && (
                    <p className="text-xs text-silver mt-1 transition-opacity duration-200">
                      {item.usage}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>
    </Section>
  )
}
