import Section from '../../ui/Section'
import { contactData } from './Contact.data'

export default function Contact() {
  return (
    <Section id="contact" className="text-center">
      <h2 className="text-3xl md:text-5xl font-semibold text-soft-white mb-8">
        {contactData.headline}
      </h2>
      <div className="flex justify-center gap-8">
        <a
          href={contactData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-silver hover:text-soft-white transition-colors duration-200"
          aria-label="GitHub Profile"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <span className="text-sm">GitHub</span>
        </a>
        <a
          href={`mailto:${contactData.email}`}
          className="flex items-center gap-2 text-silver hover:text-soft-white transition-colors duration-200"
          aria-label="Send Email"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="text-sm">Email</span>
        </a>
      </div>
    </Section>
  )
}
