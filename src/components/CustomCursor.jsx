import { useEffect, useRef, useState } from 'react'

// Detects a coarse pointer (touch) so the whole feature no-ops on mobile.
function usePointerType() {
  const [isFine, setIsFine] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)')
    setIsFine(mq.matches)
    const handler = (e) => setIsFine(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return isFine
}

export default function CustomCursor() {
  const isFine = usePointerType()
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const spotlightRef = useRef(null)
  const [hovering, setHovering] = useState(false)
  const prefersReducedMotion = useRef(
    typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    if (!isFine || prefersReducedMotion.current) return

    document.documentElement.classList.add('custom-cursor-active')

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ring = { x: pos.x, y: pos.y }
    let raf

    const onMove = (e) => {
      pos.x = e.clientX
      pos.y = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`
      }
      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(34,211,238,0.06), transparent 60%)`
      }
    }

    const loop = () => {
      ring.x += (pos.x - ring.x) * 0.18
      ring.y += (pos.y - ring.y) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(loop)
    }

    const isInteractive = (el) =>
      el.closest('a, button, [role="button"], input, textarea, select, [data-cursor-hover]')

    const onOver = (e) => {
      if (isInteractive(e.target)) setHovering(true)
    }
    const onOut = (e) => {
      if (isInteractive(e.target)) setHovering(false)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver)
    window.addEventListener('mouseout', onOut)
    raf = requestAnimationFrame(loop)

    return () => {
      document.documentElement.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('mouseout', onOut)
      cancelAnimationFrame(raf)
    }
  }, [isFine])

  if (!isFine || prefersReducedMotion.current) return null

  return (
    <>
      <div
        ref={spotlightRef}
        className="pointer-events-none fixed inset-0 z-[60] hidden md:block"
        aria-hidden="true"
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-2 w-2 rounded-full bg-cyan-glow shadow-[0_0_12px_2px_rgba(79,242,255,0.8)] md:block"
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className={`pointer-events-none fixed left-0 top-0 z-[70] hidden rounded-full border md:block transition-[width,height,border-color] duration-200 ease-out ${
          hovering
            ? 'h-12 w-12 border-cyan-glow/70 bg-cyan-glow/5'
            : 'h-8 w-8 border-white/25'
        }`}
        aria-hidden="true"
      />
    </>
  )
}
