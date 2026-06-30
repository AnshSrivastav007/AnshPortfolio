import Section from '../../ui/Section'
import Button from '../../ui/Button'
import FloatingPanel from '../../ui/FloatingPanel'
import { heroContent } from './Hero.data'

export default function Hero() {
  return (
    <Section id="hero" className="min-h-screen flex items-center pt-24">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        <div className="space-y-8">
          <p className="text-sm font-medium text-blue-accent tracking-widest uppercase">
            {heroContent.name}
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-soft-white leading-tight">
            {heroContent.headline}
          </h1>
          <div className="flex flex-wrap gap-2">
            {heroContent.tags.map((tag) => (
              <span key={tag} className="text-sm text-silver">{tag}</span>
            ))}
          </div>
          <div className="flex gap-4 pt-4">
            <Button href="#work">View Work</Button>
            <Button href="#contact" variant="outline">Contact</Button>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <FloatingPanel stats={heroContent.stats} className="w-full max-w-xs" />
        </div>
      </div>
    </Section>
  )
}
