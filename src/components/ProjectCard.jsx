import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Github, Star, GitFork, ArrowUpRight } from 'lucide-react'
import { languageColors } from '../config/portfolio'

function timeAgo(dateString) {
  const date = new Date(dateString)
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000)
  const units = [
    ['year', 31536000],
    ['month', 2592000],
    ['week', 604800],
    ['day', 86400],
  ]
  for (const [label, secs] of units) {
    const value = Math.floor(seconds / secs)
    if (value >= 1) return `${value} ${label}${value > 1 ? 's' : ''} ago`
  }
  return 'today'
}

export default function ProjectCard({ repo }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const rotateX = ((y - rect.height / 2) / rect.height) * -6
    const rotateY = ((x - rect.width / 2) / rect.width) * 6
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`
    card.style.setProperty('--mx', `${x}px`)
    card.style.setProperty('--my', `${y}px`)
  }

  const resetTransform = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)'
  }

  const langColor = languageColors[repo.language] || languageColors.default

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTransform}
      whileHover={{ transition: { duration: 0.2 } }}
      className="group relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-base-800/40 p-6 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 will-change-transform hover:border-cyan/40 hover:shadow-glow-cyan"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(200px circle at var(--mx, 50%) var(--my, 50%), rgba(34,211,238,0.08), transparent 70%)',
        }}
      />

      <div className="relative">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            <Github size={16} className="text-gray-400" />
            <h3 className="font-display text-lg font-medium text-white">{repo.name}</h3>
          </div>
        </div>

        <p className="mb-5 line-clamp-2 min-h-[2.5rem] text-sm text-gray-400">
          {repo.description || 'No description provided.'}
        </p>
      </div>

      <div className="relative flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
          {repo.language && (
            <span className="flex items-center gap-1.5">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: langColor }}
              />
              {repo.language}
            </span>
          )}
          <span className="flex items-center gap-1">
            <Star size={13} /> {repo.stargazers_count}
          </span>
          <span className="flex items-center gap-1">
            <GitFork size={13} /> {repo.forks_count}
          </span>
          <span>Updated {timeAgo(repo.updated_at)}</span>
        </div>

        <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-1.5 rounded-lg border border-white/10 py-2.5 text-sm text-gray-200 transition-colors hover:border-white/25 hover:bg-white/5"
        >
          View Repository
          <ArrowUpRight size={14} />
        </a>
      </div>
    </motion.div>
  )
}
