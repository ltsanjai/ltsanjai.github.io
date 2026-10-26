import { motion } from 'framer-motion'
import { Code2, Github, Figma, Terminal, GitBranch } from 'lucide-react'
import { skillGroups } from '../config/portfolio'

const iconOverrides = {
  GitHub: Github,
  Git: GitBranch,
  Figma: Figma,
  Linux: Terminal,
}

function SkillIcon({ name }) {
  const Icon = iconOverrides[name] || Code2
  return <Icon size={18} className="text-cyan-glow" />
}

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
          Tech I Work With
        </h2>
      </motion.div>

      <div className="mt-12 flex flex-col gap-10">
        {skillGroups.map((group) => (
          <div key={group.group}>
            <h3 className="mb-4 text-sm uppercase tracking-wider text-gray-500">
              {group.group}
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {group.skills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  whileHover={{ y: -3 }}
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-base-800/40 px-4 py-3.5 transition-colors hover:border-cyan/40"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 transition-shadow group-hover:shadow-glow-cyan">
                    <SkillIcon name={skill} />
                  </span>
                  <span className="text-sm text-gray-200">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
