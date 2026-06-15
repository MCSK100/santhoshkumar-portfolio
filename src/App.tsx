import { useEffect, useRef, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CustomCursor } from './components/effects/CustomCursor'
import { GrainOverlay } from './components/effects/GrainOverlay'
import { Preloader } from './components/effects/Preloader'
import { HudOverlay } from './components/effects/HudOverlay'
import { Navigation } from './components/Navigation'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Experience } from './components/sections/Experience'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import { Achievements } from './components/sections/Achievements'
import { Contact } from './components/sections/Contact'
import { Footer } from './components/sections/Footer'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { useStore } from './store/useStore'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const mainRef = useRef<HTMLDivElement>(null)
  const setMousePosition = useStore((s) => s.setMousePosition)
  const setScrollProgress = useStore((s) => s.setScrollProgress)
  const preloaderDone = useStore((s) => s.preloaderDone)
  useSmoothScroll()

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
      normalizedX: (e.clientX / window.innerWidth) * 2 - 1,
      normalizedY: -(e.clientY / window.innerHeight) * 2 + 1,
    })
  }, [setMousePosition])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setScrollProgress])

  return (
    <div ref={mainRef} className="relative bg-bg-primary min-h-screen overflow-x-hidden">
      {!preloaderDone && <Preloader />}
      <CustomCursor />
      <GrainOverlay />
      <HudOverlay />
      <Navigation />

      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
