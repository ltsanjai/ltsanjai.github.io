import { motion } from 'framer-motion'
import { profile, aboutHighlights } from '../config/portfolio'

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-5xl px-6 py-28">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="font-display text-3xl font-semibold text-white sm:text-4xl"
      >
        About Me
      </motion.h2>

      <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center gap-4 text-base leading-relaxed text-gray-400"
        >
          {profile.bio.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl border border-white/10 bg-base-800/50 p-8 shadow-glow-violet"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan/10 via-transparent to-violet/10" />
          <ul className="relative flex flex-col gap-5">
            {aboutHighlights.map((h) => (
              <li key={h.label} className="flex items-center gap-3 text-gray-200">
                <span className="text-xl">{h.emoji}</span>
                <span className="text-sm sm:text-base">{h.label}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
