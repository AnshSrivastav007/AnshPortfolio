import { useEffect, useState } from 'react'
import { useActiveSection } from '../../hooks/useActiveSection'

interface NavbarProps {
  sections: readonly string[]
}

const labels: Record<string, string> = {
  hero: 'Home',
  work: 'Work',
  philosophy: 'Philosophy',
  stack: 'Stack',
  timeline: 'Timeline',
  contact: 'Contact',
}

export default function Navbar({ sections }: NavbarProps) {
  const active = useActiveSection([...sections])
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-lg bg-black/60 border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="text-sm font-semibold text-soft-white hover:text-blue-accent transition-colors">
          AS
        </a>
        <ul className="flex items-center gap-8">
          {sections.filter(s => s !== 'hero').map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`text-sm transition-colors duration-200 ${
                  active === section
                    ? 'text-soft-white font-medium'
                    : 'text-silver hover:text-soft-white'
                }`}
              >
                {labels[section] || section}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
