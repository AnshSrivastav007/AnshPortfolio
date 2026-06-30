export interface TimelineEvent {
  year: string
  title: string
  description: string
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: '2023',
    title: 'Learning',
    description: 'Started the journey into software engineering — algorithms, data structures, and systems programming.',
  },
  {
    year: '2024',
    title: 'Systems',
    description: 'Built CLI tools, automation scripts, and first REST APIs. Linux daily driver.',
  },
  {
    year: '2025',
    title: 'Backend',
    description: 'Production backend services, database design, and API architecture at scale.',
  },
  {
    year: '2026',
    title: 'Automation & Production',
    description: 'CI/CD pipelines, infrastructure as code, and shipped multi-service platforms optimized for performance and reliability.',
  },
]
