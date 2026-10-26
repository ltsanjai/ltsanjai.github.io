import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, AlertTriangle, FolderGit2 } from 'lucide-react'
import { useGitHub } from '../hooks/useGitHub'
import { GITHUB_USERNAME, contact } from '../config/portfolio'
import ProjectCard from './ProjectCard'
import FeaturedProject from './FeaturedProject'

const MAIN_LANGUAGES = ['Python', 'JavaScript', 'Dart']

function categorize(language) {
  if (!language) return 'Other'
  return MAIN_LANGUAGES.includes(language) ? language : 'Other'
}

export default function Projects() {
  const { status, repos, error } = useGitHub(GITHUB_USERNAME)
  const [filter, setFilter] = useState('All')

  const filters = useMemo(() => {
    const present = new Set(repos.map((r) => categorize(r.language)))
    return ['All', ...MAIN_LANGUAGES.filter((l) => present.has(l)), ...(present.has('Other') ? ['Other'] : [])]
  }, [repos])

  const filtered = useMemo(() => {
    if (filter === 'All') return repos
    return repos.filter((r) => categorize(r.language) === filter)
  }, [repos, filter])

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
          Things I&apos;ve Built
        </h2>
        <p className="mt-3 max-w-xl text-gray-400">
          A collection of projects and experiments from my GitHub.
        </p>
      </motion.div>

      <div className="mt-14">
        <FeaturedProject />
      </div>

      {status === 'ready' && filters.length > 2 && (
        <div className="mt-14 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-1.5 text-xs transition-colors ${
                filter === f
                  ? 'border-cyan/50 bg-cyan/10 text-cyan-glow'
                  : 'border-white/10 text-gray-400 hover:border-white/25 hover:text-gray-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      )}

      <div className="mt-8">
        {status === 'loading' && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-52 animate-pulse rounded-2xl border border-white/5 bg-base-800/40"
              />
            ))}
          </div>
        )}

        {status === 'error' && (
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-base-800/40 py-16 text-center">
            <AlertTriangle className="text-amber-400" size={22} />
            <p className="max-w-md text-sm text-gray-400">{error}</p>
          </div>
        )}

        {status === 'empty' && (
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-base-800/40 py-16 text-center">
            <FolderGit2 className="text-gray-500" size={22} />
            <p className="text-sm text-gray-400">
              No public repositories to show yet — check back soon.
            </p>
          </div>
        )}

        {status === 'ready' && (
          <motion.div
            layout
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((repo, i) => (
                <motion.div
                  key={repo.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                >
                  <ProjectCard repo={repo} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {status === 'ready' && (
        <div className="mt-12 flex justify-center">
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm text-gray-300 transition-colors hover:text-white"
          >
            View all on GitHub
            <ArrowUpRight size={15} />
          </a>
        </div>
      )}
    </section>
  )
}
