import { create } from 'zustand'

interface PortfolioStore {
  isLoaded: boolean
  preloaderDone: boolean
  scrollProgress: number
  activeSection: string
  mousePosition: { x: number; y: number; normalizedX: number; normalizedY: number }
  setLoaded: (loaded: boolean) => void
  setPreloaderDone: (done: boolean) => void
  setScrollProgress: (progress: number) => void
  setActiveSection: (section: string) => void
  setMousePosition: (pos: { x: number; y: number; normalizedX: number; normalizedY: number }) => void
}

export const useStore = create<PortfolioStore>((set) => ({
  isLoaded: false,
  preloaderDone: false,
  scrollProgress: 0,
  activeSection: 'hero',
  mousePosition: { x: 0, y: 0, normalizedX: 0, normalizedY: 0 },
  setLoaded: (loaded) => set({ isLoaded: loaded }),
  setPreloaderDone: (done) => set({ preloaderDone: done }),
  setScrollProgress: (progress) => set({ scrollProgress: progress }),
  setActiveSection: (section) => set({ activeSection: section }),
  setMousePosition: (pos) => set({ mousePosition: pos }),
}))
