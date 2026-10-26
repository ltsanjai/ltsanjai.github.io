import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'
import { contact } from '../config/portfolio'

const links = [
  { label: 'GitHub', href: contact.github, icon: Github },
  { label: 'Email', href: `mailto:${contact.email}`, icon: Mail },
  { label: 'LinkedIn', href: contact.linkedin, icon: Linkedin },
]

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-4xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-base-800/50 px-8 py-16 text-center sm:px-16"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan/15 via-transparent to-violet/20" />
        <div className="relative flex flex-col items-center gap-5">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Let&apos;s Build Something.
          </h2>
          <p className="max-w-md text-gray-400">
            Have an idea, project, or just want to say hello?
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {links.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel="noreferrer"
                className="group flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-gray-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/40 hover:bg-white/10"
              >
                <Icon size={16} />
                {label}
                <ArrowUpRight
                  size={13}
                  className="text-gray-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
