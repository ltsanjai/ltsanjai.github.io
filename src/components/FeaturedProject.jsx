import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { featuredProject } from '../config/portfolio'

export default function FeaturedProject() {
  if (!featuredProject) return null

  const { name, description, stack, githubUrl, liveUrl, image } = featuredProject

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7 }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-base-800/50"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan/15 via-transparent to-violet/15" />
      <div className="relative grid gap-0 md:grid-cols-2">
        <div className="relative flex min-h-[220px] items-center justify-center border-b border-white/10 bg-base-900/60 md:min-h-[320px] md:border-b-0 md:border-r">
          {image ? (
            <img src={image} alt={`${name} preview`} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan/10 to-violet/10">
              <span className="font-display text-sm text-gray-500">Project preview</span>
            </div>
          )}
        </div>

        <div className="flex flex-col justify-center gap-5 p-8 md:p-10">
          <span className="w-fit rounded-full border border-white/10 px-3 py-1 text-[11px] text-gray-400">
            Featured project
          </span>
          <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            {name}
          </h3>
          <p className="text-sm leading-relaxed text-gray-400 sm:text-base">{description}</p>

          {stack?.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {stack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          <div className="mt-2 flex flex-wrap gap-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-gray-200 transition-colors hover:border-white/30 hover:bg-white/5"
              >
                <Github size={15} /> GitHub
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan to-violet px-5 py-2.5 text-sm font-medium text-base-950 shadow-glow-cyan transition-transform hover:scale-[1.02]"
              >
                <ExternalLink size={15} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
