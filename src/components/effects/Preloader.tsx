import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useStore } from '../../store/useStore'
import { playLoadingSound, playCompleteSound } from '../../utils/audio'

const terminalLines = [
  '> INITIALIZING SYSTEM...',
  '> LOADING PORTFOLIO DATA...',
  '> ESTABLISHING SECURE CONNECTION...',
  '> DECRYPTING FILES...',
  '> ACCESS GRANTED',
]

export const Preloader = () => {
  const [progress, setProgress] = useState(0)
  const [terminalText, setTerminalText] = useState('')
  const [terminalLineIndex, setTerminalLineIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const setPreloaderDone = useStore((s) => s.setPreloaderDone)
  const setLoaded = useStore((s) => s.setLoaded)

  const hasExitedRef = useRef(false)
  const soundPlayedRef = useRef(false)

  // Play loading sound ONCE when component mounts
  useEffect(() => {
    if (!soundPlayedRef.current) {
      soundPlayedRef.current = true
      playLoadingSound()
    }
  }, [])

  // Terminal typewriter effect
  useEffect(() => {
    if (terminalLineIndex >= terminalLines.length) return
    const line = terminalLines[terminalLineIndex]
    let charIndex = 0

    const typeInterval = setInterval(() => {
      if (charIndex <= line.length) {
        setTerminalText(line.slice(0, charIndex))
        charIndex++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => {
          setTerminalLineIndex((prev) => prev + 1)
        }, 150)
      }
    }, 25)

    return () => clearInterval(typeInterval)
  }, [terminalLineIndex])

  // Failsafe: never keep the app behind the preloader forever.
  useEffect(() => {
    const MIN_VISIBLE_MS = 800
    const MAX_WAIT_MS = 2000

    const startTs = Date.now()

    const idleInterval = window.setInterval(() => {
      try {
        gsap.to(containerRef.current, {
          keyframes: [
            { autoAlpha: 1, duration: 0.01 },
            { scale: 1.005, duration: 0.15, ease: 'power2.out' },
            { scale: 1, duration: 0.15, ease: 'power2.in' },
          ],
        })
      } catch {
        // ignore
      }
    }, 1200)

    const scheduleExit = () => {
      const elapsed = Date.now() - startTs
      const remaining = Math.max(0, MIN_VISIBLE_MS - elapsed)
      window.setTimeout(() => {
        exitLoader()
      }, remaining)
    }

    if (document.readyState === 'complete') {
      scheduleExit()
    } else {
      window.addEventListener('load', scheduleExit, { once: true })
    }

    const timeoutId = window.setTimeout(() => {
      exitLoader()
    }, MAX_WAIT_MS)

    return () => {
      window.clearTimeout(timeoutId)
      window.clearInterval(idleInterval)
      window.removeEventListener('load', scheduleExit as any)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Progress animation - runs independently and reaches 100%
  useEffect(() => {

    let current = 0
    const targets = [12, 28, 45, 62, 78, 92, 100]
    let targetIndex = 0
    let animationFrame: number

    const animate = () => {
      if (targetIndex >= targets.length) {
        setProgress(100)
        exitLoader()
        return
      }

      const target = targets[targetIndex]
      const duration = 400 + Math.random() * 300

      gsap.to({ val: current }, {
        val: target,
        duration: duration / 1000,
        ease: 'power2.out',
        onUpdate: function () {
          current = Math.floor(this.targets()[0].val)
          setProgress(current)
        },
        onComplete: () => {
          targetIndex++
          if (targetIndex < targets.length) {
            setTimeout(animate, 100 + Math.random() * 150)
          }
        }
      })
    }

    const timer = setTimeout(() => {
      animate()
    }, 300)

    return () => {
      clearTimeout(timer)
      gsap.killTweensOf({ val: current })
    }
  }, [])

  const exitLoader = () => {
    if (hasExitedRef.current) return
    hasExitedRef.current = true

    // Guard: ensure elements exist before animating
    const curtainTop = document.querySelector('.curtain-top')
    const curtainBottom = document.querySelector('.curtain-bottom')
    const preloaderInner = document.querySelector('.preloader-inner')
    if (!curtainTop || !curtainBottom || !preloaderInner) return

    const tl = gsap.timeline({ defaults: { overwrite: 'auto' } })

    gsap.set(curtainTop, { y: '-100%', autoAlpha: 1 })
    gsap.set(curtainBottom, { y: '100%', autoAlpha: 1 })
    gsap.set(preloaderInner, { opacity: 0, autoAlpha: 0 })

    tl.to(preloaderInner, { opacity: 0, duration: 0.12, ease: 'power2.in' })
    tl.to(
      curtainTop,
      {
        y: '-100%',
        duration: 0.35,
        ease: 'power4.inOut',
      },
      0
    )
    tl.to(
      curtainBottom,
      {
        y: '100%',
        duration: 0.35,
        ease: 'power4.inOut',
      },
      0
    )

    // Play completion sound and show Game Loaded notification
    tl.call(() => {
      playCompleteSound()
      // Show Game Loaded toast
      const toast = document.createElement('div')
      toast.className = 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[300] px-8 py-4 bg-bg-primary/95 border border-accent-red/30 rounded-lg backdrop-blur-md'
      toast.innerHTML = '<div class="font-mono text-center"><div class="text-accent-red text-xs tracking-[0.4em] mb-2">SYSTEM READY</div><div class="text-white text-2xl font-bold tracking-wider">GAME LOADED</div></div>'
      document.body.appendChild(toast)
      gsap.fromTo(toast, { scale: 0.8, opacity: 0, autoAlpha: 0 }, { scale: 1, opacity: 1, autoAlpha: 1, duration: 0.4, ease: 'back.out' })
      gsap.to(toast, { scale: 0.8, opacity: 0, autoAlpha: 0, duration: 0.3, delay: 2, ease: 'power2.in', onComplete: () => toast.remove() })
      
      if (containerRef.current) {
        containerRef.current.style.pointerEvents = 'none'
        containerRef.current.style.visibility = 'hidden'
      }
      setPreloaderDone(true)
      setLoaded(true)
    })
  }


  return (
    <div ref={containerRef} className="fixed inset-0 z-[200]">
      {/* Main content behind curtains */}
      <div className="preloader-inner absolute inset-0 bg-bg-primary flex flex-col items-center justify-center">
        {/* Noise */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent-red/5 rounded-full blur-[200px]" />

        {/* Left side - Terminal */}
        <div className="absolute left-8 sm:left-16 top-1/2 -translate-y-1/2 max-w-xs">
          <div className="terminal-block">
            {terminalLines.slice(0, terminalLineIndex).map((line, i) => (
              <div key={i} className="hud-label mb-1 opacity-60">{line}</div>
            ))}
            <div className="hud-label">
              {terminalText}
              <span className="inline-block w-[7px] h-[13px] bg-accent-red ml-0.5 align-middle" style={{ animation: 'flicker 1s step-end infinite' }} />
            </div>
          </div>
        </div>

        {/* Center - Counter + Radar */}
        <div className="flex flex-col items-center">
          {/* Radar */}
          <div className="radar-box mb-8">
            <div className="radar-sweep" />
            <div className="radar-circle w-[80%] h-[80%] top-[10%] left-[10%]" />
            <div className="radar-circle w-[50%] h-[50%] top-[25%] left-[25%]" />
            <div className="radar-circle w-[20%] h-[20%] top-[40%] left-[40%]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-accent-red rounded-full" />
          </div>

          {/* Counter with game-like animation */}
          <div className="relative">
            <span className="text-white text-[80px] sm:text-[120px] md:text-[160px] font-bold tracking-tighter leading-none font-mono"
              style={{ fontVariantNumeric: 'tabular-nums' }}>
              {String(progress).padStart(3, '0')}
            </span>
            <span className="absolute top-4 sm:top-6 right-[-12px] sm:right-[-16px] text-accent-red text-2xl sm:text-3xl font-light">%</span>
          </div>

          {/* Progress line */}
          <div className="mt-6 w-40 h-[1px] bg-white/10 origin-left">
            <div
              className="h-full bg-accent-red transition-none"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Label */}
          <div className="mt-6">
            <span className="text-text-muted text-[10px] tracking-[0.4em] uppercase font-mono">INITIALIZING</span>
          </div>
        </div>

        {/* Right side - Matrix-style data */}
        <div className="absolute right-8 sm:right-16 top-1/2 -translate-y-1/2 text-right hidden sm:block">
            <div className="font-mono text-[9px] text-text-muted/40 leading-relaxed tracking-wider">
            <div>SYS.PORTFOLIO</div>
            <div className="text-accent-red/40">v2.0.26</div>
            <div className="mt-2">STATUS: LOADING</div>
            <div>ENGINE: REACT+GSAP</div>
            <div className="mt-2">PROTOCOL: SECURE</div>
            <div className="text-accent-red/40">ENCRYPTION: AES</div>
          </div>
        </div>

        {/* Bottom metadata */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-between px-8 sm:px-16">
          <span className="text-text-muted text-[9px] tracking-[0.3em] uppercase font-mono">PORTFOLIO//2026</span>
          <span className="text-text-muted text-[9px] tracking-[0.3em] uppercase font-mono">SANTHOSH KUMAR</span>
        </div>
      </div>

      {/* Curtain Top */}
      <div className="curtain-top loader-curtain curtain-top" />

      {/* Curtain Bottom */}
      <div className="curtain-bottom loader-curtain curtain-bottom" />
    </div>
  )
}
