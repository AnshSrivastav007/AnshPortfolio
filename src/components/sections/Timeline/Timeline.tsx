import Section from '../../ui/Section'
import GlassCard from '../../ui/GlassCard'
import { useScrollReveal } from '../../../hooks/useScrollReveal'
import { TimelineEvent, timelineEvents } from './Timeline.data'

function TimelineNode({ event, index }: { event: TimelineEvent; index: number }) {
  const { ref, visible } = useScrollReveal()
  const isLeft = index % 2 === 0
  const isLast = index === timelineEvents.length - 1

  return (
    <div className="w-full">
      <div
        ref={ref}
        className={`flex items-center gap-4 md:gap-8 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        } ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
      >
        <div className="flex-1">
          <GlassCard className="p-5 hidden md:block">
            <span className="text-xs text-blue-accent font-medium">{event.year}</span>
            <h3 className="text-base font-semibold text-soft-white mt-1">{event.title}</h3>
            <p className="text-sm text-silver mt-1">{event.description}</p>
          </GlassCard>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-3 h-3 rounded-full bg-blue-accent ring-4 ring-black z-10" />
          {!isLast && <div className="w-px h-16 md:h-24 bg-white/10" />}
        </div>
        <div className="flex-1 hidden md:block" />
      </div>
      <div className="md:hidden pl-12 -mt-4 pb-4">
        <GlassCard className="p-4">
          <span className="text-xs text-blue-accent font-medium">{event.year}</span>
          <h3 className="text-base font-semibold text-soft-white mt-1">{event.title}</h3>
          <p className="text-sm text-silver mt-1">{event.description}</p>
        </GlassCard>
      </div>
    </div>
  )
}

export default function Timeline() {
  return (
    <Section id="timeline">
      <h2 className="text-3xl md:text-4xl font-semibold text-soft-white mb-12">
        Timeline
      </h2>
      <div className="flex flex-col items-center">
        {timelineEvents.map((event, index) => (
          <TimelineNode key={event.title} event={event} index={index} />
        ))}
      </div>
    </Section>
  )
}
