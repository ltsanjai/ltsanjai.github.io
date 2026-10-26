import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { currentlyLearning } from '../config/portfolio'

export default function CurrentlyLearning() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="font-display text-2xl font-semibold text-white sm:text-3xl"
      >
        Currently Exploring
      </motion.h2>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {currentlyLearning.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="flex flex-col gap-3 rounded-xl border border-white/10 bg-base-800/40 p-5"
          >
            <Sparkles size={16} className="text-violet-glow" />
            <h3 className="text-sm font-medium text-white">{item.title}</h3>
            <p className="text-xs leading-relaxed text-gray-500">{item.note}</p>
            <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-white/5">
              <motion.div
                initial={{ width: '0%' }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.2 + i * 0.06, ease: 'easeOut' }}
                className="h-full rounded-full bg-gradient-to-r from-cyan to-violet"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
