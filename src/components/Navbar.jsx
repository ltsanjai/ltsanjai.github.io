import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { profile } from '../config/portfolio'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex justify-center transition-all duration-500 ${
        scrolled ? 'pt-3' : 'pt-5'
      }`}
    >
      <nav
        className={`flex w-[92%] max-w-5xl items-center justify-between rounded-2xl border px-5 py-3 transition-all duration-500 ${
          scrolled
            ? 'border-white/10 bg-base-900/80 shadow-lg shadow-black/30 backdrop-blur-xl'
            : 'border-white/5 bg-base-900/40 backdrop-blur-lg'
        }`}
      >
        <button
          onClick={() => scrollTo('home')}
          className="font-display text-lg font-semibold tracking-tight text-white"
        >
          {profile.name === '[YOUR NAME]' ? 'yourname.dev' : profile.name}
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="relative px-4 py-2 text-sm text-gray-300 transition-colors hover:text-white"
            >
              {link.label}
              {active === link.id && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-cyan-glow to-violet-glow"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-xs text-gray-400">Available for opportunities</span>
        </div>

        <button
          className="text-white md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="glass absolute left-1/2 top-[4.5rem] w-[92%] -translate-x-1/2 rounded-2xl p-3 md:hidden"
          >
            <div className="mb-2 flex items-center gap-2 px-3 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs text-gray-400">Available for opportunities</span>
            </div>
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`block w-full rounded-lg px-3 py-3 text-left text-sm transition-colors ${
                  active === link.id
                    ? 'bg-white/5 text-white'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
