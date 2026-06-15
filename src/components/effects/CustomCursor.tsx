import { useEffect, useRef, useCallback, useState } from 'react'
import gsap from 'gsap'
import { Howl } from 'howler'

// Sound removed (no sound effects)
const hoverSound = null as any
const clickSound = null as any
const magneticSound = null as any


export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const dataRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const isVisible = useRef(false)
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [hoverText, setHoverText] = useState<string | null>(null)
  const lastHoverTarget = useRef<HTMLElement | null>(null)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    pos.current = { x: e.clientX, y: e.clientY }

    if (!isVisible.current) {
      isVisible.current = true
      gsap.to(cursorRef.current, { opacity: 1, scale: 1, duration: 0.3 })
      gsap.to(dotRef.current, { opacity: 1, scale: 1, duration: 0.3 })
      gsap.to(glowRef.current, { opacity: 1, duration: 0.3 })
      gsap.to(dataRef.current, { opacity: 1, duration: 0.3 })
    }

    gsap.to(cursorRef.current, { x: e.clientX, y: e.clientY, duration: 0.15, ease: 'power2.out' })
    gsap.to(dotRef.current, { x: e.clientX, y: e.clientY, duration: 0.05, ease: 'none' })
    gsap.to(glowRef.current, { x: e.clientX, y: e.clientY, duration: 0.4, ease: 'power3.out' })
    gsap.to(dataRef.current, { x: e.clientX + 20, y: e.clientY - 20, duration: 0.2, ease: 'power2.out' })

    setCoords({ x: Math.round(e.clientX), y: Math.round(e.clientY) })
  }, [])

  const handleMouseLeave = useCallback(() => {
    isVisible.current = false
    gsap.to(cursorRef.current, { opacity: 0, scale: 0.5, duration: 0.3 })
    gsap.to(dotRef.current, { opacity: 0, scale: 0.5, duration: 0.3 })
    gsap.to(glowRef.current, { opacity: 0, duration: 0.3 })
    gsap.to(dataRef.current, { opacity: 0, duration: 0.3 })
  }, [])

  useEffect(() => {
    if (window.innerWidth < 768) return

    document.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)

    const addHoverListeners = () => {
      document.querySelectorAll('a, button, [data-cursor-hover]').forEach((el) => {
        if (el === lastHoverTarget.current) return

        el.addEventListener('mouseenter', () => {
          lastHoverTarget.current = el as HTMLElement
          gsap.to(cursorRef.current, { scale: 2.5, borderColor: 'rgba(255,26,26,0.8)', duration: 0.3 })
          gsap.to(dotRef.current, { scale: 0, duration: 0.2 })
          gsap.to(glowRef.current, { scale: 2, opacity: 0.6, duration: 0.3 })


          const text = el.getAttribute('data-cursor-text')
          if (text) setHoverText(text)
        })
        el.addEventListener('mouseleave', () => {
          gsap.to(cursorRef.current, { scale: 1, borderColor: 'rgba(255,26,26,0.5)', duration: 0.3 })
          gsap.to(dotRef.current, { scale: 1, duration: 0.2 })
          gsap.to(glowRef.current, { scale: 1, opacity: 1, duration: 0.3 })
          setHoverText(null)
          lastHoverTarget.current = null
        })

      })
    }

    addHoverListeners()
    const observer = new MutationObserver(addHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      observer.disconnect()
    }
  }, [handleMouseMove, handleMouseLeave])

  if (typeof window !== 'undefined' && window.innerWidth < 768) return null

  return (
    <>
      {/* Main cursor ring */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full border border-accent-red/50 pointer-events-none z-[9999] mix-blend-difference hidden md:block opacity-0"
        style={{ willChange: 'transform' }}
      />

      {/* Inner dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full bg-accent-red pointer-events-none z-[9999] hidden md:block opacity-0"
        style={{ willChange: 'transform' }}
      />

      {/* Glow */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-24 h-24 -ml-12 -mt-12 rounded-full pointer-events-none z-[9998] hidden md:block opacity-0"
        style={{
          background: 'radial-gradient(circle, rgba(255,26,26,0.15) 0%, transparent 70%)',
          willChange: 'transform',
        }}
      />

      {/* Coordinate data display */}
      <div
        ref={dataRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block opacity-0"
        style={{ willChange: 'transform' }}
      >
        <div className="font-mono text-[9px] text-accent-red/60 tracking-wider bg-bg-primary/60 px-2 py-1 rounded backdrop-blur-sm border border-white/[0.04]">
          {hoverText ? (
            <span className="text-accent-red">{hoverText}</span>
          ) : (
            <span>X:{coords.x} Y:{coords.y}</span>
          )}
        </div>
      </div>
    </>
  )
}
