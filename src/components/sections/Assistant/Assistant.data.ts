export interface QAPair {
  keywords: string[]
  answer: string
}

export const qaData: QAPair[] = [
  {
    keywords: ['build', 'what', 'does', 'do', 'work'],
    answer: 'Ansh builds reliable backend systems — APIs, automation pipelines, and platform infrastructure. He specializes in turning complex requirements into clean, maintainable architectures.',
  },
  {
    keywords: ['autfix', 'bug', 'autonomous', 'fixing'],
    answer: 'AutFix is an autonomous bug-fixing pipeline. It detects, classifies, and patches common bug patterns using static analysis and runtime metrics, cutting MTTR by 73%.',
  },
  {
    keywords: ['privault', 'privacy', 'security'],
    answer: 'Privault is a zero-trust data isolation layer with field-level encryption and audit logging. It achieved SOC 2 compliance and eliminated data leak incidents.',
  },
  {
    keywords: ['remote', 'work', 'hub', 'platform'],
    answer: 'RemoteWorkHubApp is a modular platform for asynchronous collaboration — task management, real-time sync, and automated reporting. Shipped to 12 teams, reducing meeting overhead by 40%.',
  },
  {
    keywords: ['strength', 'skill', 'good', 'expert', 'engineering'],
    answer: 'His core strengths are: Architecture (clean system design), Debugging (first-principles root cause analysis), Backend APIs (REST, FastAPI, Node.js), Automation (CI/CD, Infrastructure as Code), and Performance (architecture-level optimization).',
  },
  {
    keywords: ['stack', 'tech', 'technology', 'use'],
    answer: 'Frontend: React, TypeScript, TailwindCSS, Vite. Backend: Node.js, Python, FastAPI. Database: PostgreSQL, MongoDB, Redis, SQLite. Infrastructure: Docker, AWS, GitHub Actions, Nginx.',
  },
  {
    keywords: ['contact', 'email', 'github', 'hire', 'opportunity'],
    answer: 'Connect on GitHub: https://github.com/AnshSrivastav007 or email ansh.652r@gmail.com',
  },
]

export const fallbackAnswer = 'Ask me about what Ansh builds, his projects, strengths, tech stack, or how to get in touch!'
