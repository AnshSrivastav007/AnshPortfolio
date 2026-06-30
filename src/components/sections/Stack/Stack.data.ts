export interface StackItem {
  name: string
  usage: string
}

export interface StackCategory {
  category: string
  items: StackItem[]
}

export const stackData: StackCategory[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', usage: 'Component architecture for 3 production projects' },
      { name: 'TypeScript', usage: 'Type-safe development across all projects' },
      { name: 'TailwindCSS', usage: 'Utility-first styling for rapid UI development' },
      { name: 'Vite', usage: 'Build tooling and dev server for React projects' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', usage: 'REST APIs and microservices architecture' },
      { name: 'Python', usage: 'Automation scripts and data processing pipelines' },
      { name: 'FastAPI', usage: 'High-performance async API endpoints' },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'PostgreSQL', usage: 'Primary relational database for production services' },
      { name: 'MongoDB', usage: 'Document storage for flexible schema requirements' },
      { name: 'Redis', usage: 'Caching layer and pub/sub messaging' },
      { name: 'SQLite', usage: 'Embedded storage for CLI tools and prototypes' },
    ],
  },
  {
    category: 'Infrastructure',
    items: [
      { name: 'Docker', usage: 'Containerized deployments for consistent environments' },
      { name: 'AWS', usage: 'Cloud infrastructure for scalable services' },
      { name: 'GitHub Actions', usage: 'CI/CD automation for testing and deployment' },
      { name: 'Nginx', usage: 'Reverse proxy and load balancing configuration' },
    ],
  },
  {
    category: 'Developer Tools',
    items: [
      { name: 'Git', usage: 'Version control and collaborative development' },
      { name: 'VS Code', usage: 'Primary IDE with custom workflows' },
      { name: 'Figma', usage: 'Design collaboration and UI prototyping' },
      { name: 'Postman', usage: 'API testing and documentation' },
      { name: 'Linux', usage: 'Daily driver OS and server environments' },
    ],
  },
]
