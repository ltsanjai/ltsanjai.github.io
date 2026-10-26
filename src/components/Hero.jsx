import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Github } from 'lucide-react'
import { profile, contact } from '../config/portfolio'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-28"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <motion.span
          variants={item}
          className="mb-6 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs tracking-wide text-gray-300"
        >
          {profile.badge}
        </motion.span>

        <motion.h1
          variants={item}
          className="font-display text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Hey, I&apos;m{' '}
          <span className="bg-gradient-to-r from-cyan-glow to-violet-glow bg-clip-text text-transparent">
            {profile.name}
          </span>
          .
          <br />
          {profile.tagline}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-balance text-base text-gray-400 sm:text-lg"
        >
          {profile.heroDescription}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-cyan to-violet px-7 py-3 text-sm font-medium text-base-950 shadow-glow-cyan transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            <span className="relative z-10">View My Projects</span>
            <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-700 group-hover:translate-x-full" />
          </a>

          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-gray-200 transition-colors hover:border-white/30 hover:bg-white/5"
          >
            <Github size={16} />
            GitHub
            <ArrowUpRight size={14} className="text-gray-400" />
          </a>
        </motion.div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        onClick={() =>
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        }
        aria-label="Scroll to About section"
        className="absolute bottom-10 flex flex-col items-center gap-2 text-gray-500 transition-colors hover:text-gray-300"
      >
        <span className="text-[11px] tracking-wide">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.button>
    </section>
  )
}
