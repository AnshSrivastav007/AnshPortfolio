export interface PhilosophyItem {
  title: string
  text: string
  icon: string
}

export const philosophies: PhilosophyItem[] = [
  {
    title: 'Architecture',
    text: 'Systems should be simple enough to hold in your head. Every layer must earn its existence. Loose coupling, high cohesion, and clear boundaries.',
    icon: '◇',
  },
  {
    title: 'Debugging',
    text: 'Every bug is a signal. I trace from symptom to root cause with first principles, not guesswork. Hypothesis-driven debugging eliminates uncertainty.',
    icon: '◎',
  },
  {
    title: 'Backend APIs',
    text: 'APIs are contracts. I design for consistency, predictability, and graceful degradation. A great API is boring — it works every time without surprise.',
    icon: '↗',
  },
  {
    title: 'Automation',
    text: 'If a machine can do it, a machine should do it. Automation is leverage: invest once in tooling, save forever in cognitive load.',
    icon: '⟳',
  },
  {
    title: 'Performance',
    text: 'Speed is a feature. I optimize at the architecture level first — the right data structures, the right caching strategy, the right trade-offs.',
    icon: '⚡',
  },
]
