export interface Project {
  title: string
  tag: string
  link: string
  challenge: string
  solution: string
  impact: string
}

export const projects: Project[] = [
  {
    title: 'AutFix',
    tag: 'Autonomous Bug Fixing',
    link: 'https://github.com/AnshSrivastav007',
    challenge: 'Bugs in distributed systems take hours to diagnose and fix manually, causing significant downtime.',
    solution: 'Built an autonomous pipeline that detects, classifies, and patches common bug patterns using static analysis and runtime metrics.',
    impact: 'Automated detection and patching of common bug patterns using static analysis and runtime metrics.',
  },
  {
    title: 'Privault',
    tag: 'Privacy Engineering',
    link: 'https://github.com/AnshSrivastav007',
    challenge: 'User data exposure risks in multi-tenant SaaS platforms with complex access patterns.',
    solution: 'Designed a zero-trust data isolation layer with field-level encryption and audit logging.',
    impact: 'Built toward SOC 2 compliance with field-level encryption and audit logging.',
  },
  {
    title: 'RemoteWorkHubApp',
    tag: 'Platform Engineering',
    link: 'https://github.com/AnshSrivastav007',
    challenge: 'Remote teams lacked a unified platform for asynchronous collaboration and workflow automation.',
    solution: 'Architected a modular platform integrating task management, real-time sync, and automated reporting.',
    impact: 'A modular platform built for async collaboration, task management, and automated reporting.',
  },
]
