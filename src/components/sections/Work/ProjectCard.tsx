import { useState } from 'react'
import GlassCard from '../../ui/GlassCard'
import type { Project } from './Work.data'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <GlassCard
      className={`overflow-hidden transition-all duration-500 cursor-pointer ${
        expanded ? 'scale-[1.01]' : 'hover:scale-[1.005]'
      }`}
      onClick={() => setExpanded(!expanded)}
      role="button"
      tabIndex={0}
      onKeyDown={(e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setExpanded(!expanded)
        }
      }}
      aria-expanded={expanded}
    >
      <div className="p-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-semibold text-soft-white hover:text-blue-accent transition-colors inline-block"
              onClick={(e) => e.stopPropagation()}
            >
              {project.title}
            </a>
            <p className="text-sm text-silver mt-1">{project.tag}</p>
          </div>
          <span className="text-blue-accent text-xl transition-transform duration-300" style={{
            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
            display: 'inline-block',
          }}>
            ↓
          </span>
        </div>
        <div
          className="grid transition-all duration-500 overflow-hidden"
          style={{
            gridTemplateRows: expanded ? '1fr' : '0fr',
            opacity: expanded ? 1 : 0,
          }}
        >
          <div className="min-h-0 space-y-4 pt-4 border-t border-white/10">
            <div>
              <p className="text-xs font-medium text-silver uppercase tracking-wider mb-1">Challenge</p>
              <p className="text-sm text-soft-white">{project.challenge}</p>
            </div>
            <div>
              <p className="text-xs font-medium text-silver uppercase tracking-wider mb-1">Solution</p>
              <p className="text-sm text-soft-white">{project.solution}</p>
            </div>
            <div>
              <p className="text-xs font-medium text-silver uppercase tracking-wider mb-1">Impact</p>
              <p className="text-sm text-blue-accent font-medium">{project.impact}</p>
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  )
}
