import Section from '../../ui/Section'
import ProjectCard from './ProjectCard'
import { projects } from './Work.data'

export default function Work() {
  return (
    <Section id="work">
      <h2 className="text-3xl md:text-4xl font-semibold text-soft-white mb-12">
        Selected Work
      </h2>
      <div className="space-y-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  )
}
