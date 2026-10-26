import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useGitHub } from '../hooks/useGitHub'
import { GITHUB_USERNAME } from '../config/portfolio'

function Counter({ value, duration = 1.2 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = null
    const step = (timestamp) => {
      if (start === null) start = timestamp
      const progress = Math.min((timestamp - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * value))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, value, duration])

  return (
    <span ref={ref} className="font-display text-4xl font-semibold text-white sm:text-5xl">
      {display.toLocaleString()}
    </span>
  )
}

export default function GitHubStats() {
  const { status, user, repos } = useGitHub(GITHUB_USERNAME)

  if (status !== 'ready' && status !== 'empty') return null

  const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0)
  const totalForks = repos.reduce((sum, r) => sum + r.forks_count, 0)

  const stats = [
    { label: 'Public Repositories', value: user?.public_repos ?? repos.length },
    { label: 'Stars Earned', value: totalStars },
    { label: 'Forks', value: totalForks },
    { label: 'Followers', value: user?.followers ?? 0 },
  ]

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="grid grid-cols-2 gap-6 rounded-3xl border border-white/10 bg-base-800/40 p-8 sm:grid-cols-4 sm:p-12">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex flex-col items-center gap-1 text-center"
          >
            <Counter value={stat.value} />
            <span className="text-xs text-gray-400 sm:text-sm">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
