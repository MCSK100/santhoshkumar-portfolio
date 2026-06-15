import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Menu, X } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const navItems = [
  { label: 'Subject', href: '#about' },
  { label: 'Dossier', href: '#experience' },
  { label: 'Arsenal', href: '#skills' },
  { label: 'Evidence', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(navRef.current, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 3, ease: 'power3.out' })
    }
  }, [])

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-bg-primary/80 backdrop-blur-xl border-b border-white/[0.04]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="font-mono font-bold text-lg tracking-wider hover:text-accent-red transition-colors duration-300" data-cursor-hover>
              <span className="text-accent-red">SK</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} onClick={(e) => { e.preventDefault(); scrollToSection(item.href) }} className="font-mono text-[10px] tracking-[0.2em] uppercase text-text-muted hover:text-white transition-colors duration-300 relative group" data-cursor-hover>
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent-red transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white p-2" data-cursor-hover>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-bg-primary/95 backdrop-blur-xl transition-all duration-500 md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-10">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => { e.preventDefault(); scrollToSection(item.href) }}
              className="font-mono text-2xl tracking-[0.2em] uppercase font-light text-white hover:text-accent-red transition-colors duration-300"
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 60}ms` : '0ms',
                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(30px)',
                opacity: isMobileMenuOpen ? 1 : 0,
                transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
