import { Github, Linkedin, Mail } from 'lucide-react'
import { profile, contact } from '../config/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-sm text-gray-500 sm:flex-row sm:justify-between">
      <p>Designed &amp; built by {profile.name}.</p>

      <div className="flex items-center gap-4">
        <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-gray-200">
          <Github size={16} />
        </a>
        <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-gray-200">
          <Linkedin size={16} />
        </a>
        <a href={`mailto:${contact.email}`} aria-label="Email" className="transition-colors hover:text-gray-200">
          <Mail size={16} />
        </a>
      </div>

      <p>© {year} {profile.name}</p>
    </footer>
  )
}
