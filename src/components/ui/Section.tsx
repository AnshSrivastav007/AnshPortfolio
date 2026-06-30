interface SectionProps {
  id: string
  children: React.ReactNode
  className?: string
}

export default function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section
      id={id}
      className={`max-w-6xl mx-auto px-6 py-section ${className}`}
    >
      {children}
    </section>
  )
}
