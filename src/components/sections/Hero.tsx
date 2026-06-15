import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import { useStore } from '../../store/useStore'

gsap.registerPlugin(ScrollTrigger)

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const floatingRef = useRef<HTMLDivElement>(null)
  const [showContent, setShowContent] = useState(false)
  const preloaderDone = useStore((s) => s.preloaderDone)

  useEffect(() => {
    if (!preloaderDone) return
    const timer = setTimeout(() => setShowContent(true), 200)
    return () => clearTimeout(timer)
  }, [preloaderDone])

  useEffect(() => {
    if (!showContent) return
    const tl = gsap.timeline({ delay: 0.3 })

    // Hero label
    tl.fromTo('.hero-case-label',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    )

    // Title chars with blur
    const titleChars = titleRef.current?.querySelectorAll('.char')
    if (titleChars) {
      tl.fromTo(titleChars,
        { y: 80, opacity: 0, filter: 'blur(10px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.2, stagger: 0.04, ease: 'power4.out' },
        '-=0.4'
      )
    }

    // Subtitle
    tl.fromTo(subtitleRef.current,
      { y: 40, opacity: 0, filter: 'blur(8px)' },
      { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power3.out' },
      '-=0.6'
    )

    // Floating data elements
    tl.fromTo('.floating-data',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' },
      '-=0.4'
    )

    // CTA buttons
    tl.fromTo('.hero-cta',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
      '-=0.3'
    )

    // Scroll indicator
    tl.fromTo('.scroll-indicator',
      { opacity: 0 },
      { opacity: 1, duration: 0.8 },
      '-=0.2'
    )

    // Parallax on scroll
    if (heroRef.current) {
      gsap.to('.hero-title-group', {
        y: -120, opacity: 0,
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: '35% top', scrub: 1 }
      })
      gsap.to(floatingRef.current, {
        y: -60,
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: '45% top', scrub: 1.5 }
      })
    }

    return () => { tl.kill() }
  }, [showContent])

  const name = 'SANTHOSH KUMAR'

  return (
    <section ref={heroRef} id="hero" className="section-fullscreen relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent-red/[0.03] rounded-full blur-[250px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-1/4 w-[500px] h-[500px] bg-accent-crimson/[0.05] rounded-full blur-[200px] pointer-events-none" />

      {/* Grid */}
      <div className="absolute inset-0 hero-grid-bg opacity-30 pointer-events-none" />

      {/* Scanner line */}
      <div className="scanner-line" />

      {/* Main content */}
      <div className={`relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center transition-all duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>

        {/* Case label */}
        <div className="hero-case-label mb-8 opacity-0">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-accent-red/20 rounded bg-accent-red/[0.05]">
            <span className="live-dot" />
<span className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent-red">Frontend Developer</span>
            <span className="font-mono text-[10px] tracking-[0.15em] text-text-muted">// {new Date().getFullYear()}</span>
          </div>
        </div>

        {/* Title group */}
        <div className="hero-title-group">
          <h1
            ref={titleRef}
            className="font-serif font-bold text-3xl sm:text-4xl md:text-6xl lg:text-[4.5rem] xl:text-[5.6rem] tracking-[0.03em] text-white mb-6 leading-[0.95]"
          >
            {name.split('').map((char, i) => (
              <span key={i} className="char inline-block" style={{ display: char === ' ' ? 'inline' : 'inline-block' }}>
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>

          <div ref={subtitleRef} className="space-y-3 mb-10 opacity-0">
            <p className="text-sm sm:text-base md:text-lg tracking-[0.01em] text-text-muted leading-relaxed max-w-3xl mx-auto">
              Frontend Developer with 4+ years of experience building scalable web applications, LMS platforms, and interactive user experiences.
              Specialized in React.js, JavaScript, Next.js, and modern frontend architecture with a passion for performance optimization and clean UI development.
            </p>
          </div>
        </div>

        {/* Floating data elements */}
        <div ref={floatingRef} className="relative w-full max-w-5xl mb-12">
          {/* GPS Coordinates - left */}
          <div className="floating-data absolute -left-2 sm:left-0 top-0 px-4 py-3 bg-bg-primary/80 border border-white/[0.06] rounded-lg backdrop-blur-sm opacity-0 hidden sm:block">
<div className="font-mono text-[9px] text-text-muted tracking-wider mb-1">LOCATION</div>
            <div className="font-mono text-[11px] text-text-secondary">
              10.59.15.9936° N,
              76.56.20.6982° E
            </div>
            <div className="font-mono text-[9px] text-accent-red mt-1">COIMBATORE, IN</div>
          </div>

          {/* Photo with scan frame - center */}
          <div className="relative mx-auto max-w-2xl">
            <div className="absolute inset-0 bg-accent-red/[0.06] blur-[120px] rounded-full scale-75 pointer-events-none" />

            <div className="relative border border-white/[0.06] rounded-xl overflow-hidden backdrop-blur-sm bg-white/[0.015]">
              {/* Scan frame corners */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-accent-red/40 z-10" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-accent-red/40 z-10" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-accent-red/40 z-10" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-accent-red/40 z-10" />

              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-bg-secondary">
                <img
                  src="/port-hero-section.png"
                  alt="Santhosh Kumar"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/30 via-transparent to-transparent" />

                {/* Scan line overlay */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute left-0 right-0 h-[1px] bg-accent-red/20" style={{ animation: 'scanner 4s linear infinite' }} />
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-end justify-between">
                    <div className="text-left">
                      <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-text-muted mb-1">SUBJECT PROFILE</p>
                        <p className="text-white text-sm max-w-xs leading-relaxed">
                          4+ years building modern web apps with React, WebGL & cloud technologies
                        </p>
                    </div>
                    <div className="font-mono text-[9px] text-accent-red">
                      ID: SK-2000
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Code terminal - right */}
          <div className="floating-data absolute -right-2 sm:right-0 bottom-0 px-4 py-3 bg-bg-primary/80 border border-white/[0.06] rounded-lg backdrop-blur-sm opacity-0 hidden sm:block">
            <div className="font-mono text-[9px] text-text-muted tracking-wider mb-1">STACK</div>
              <div className="font-mono text-[10px] text-text-secondary space-y-0.5">
                <div><span className="text-accent-red">const</span> stack = [</div>
                <div className="pl-3">"React", "Javascript",</div>
                <div className="pl-3">"html", "css"</div>
                <div>];</div>
              </div>
          </div>

          {/* Floating tech tags */}
          <div className="floating-data absolute left-[5%] top-[15%] px-3 py-1.5 bg-bg-primary/90 border border-white/10 rounded-md font-mono text-[10px] text-text-secondary tracking-wider uppercase backdrop-blur-sm opacity-0">
            REACT.js
          </div>
          <div className="floating-data absolute right-[5%] top-[25%] px-3 py-1.5 bg-bg-primary/90 border border-white/10 rounded-md font-mono text-[10px] text-text-secondary tracking-wider uppercase backdrop-blur-sm opacity-0">
            JAVASCRIPT
          </div>
          <div className="floating-data absolute left-[10%] bottom-[30%] px-3 py-1.5 bg-bg-primary/90 border border-white/10 rounded-md font-mono text-[10px] text-text-secondary tracking-wider uppercase backdrop-blur-sm opacity-0">
            HTML
          </div>
          <div className="floating-data absolute right-[10%] bottom-[20%] px-3 py-1.5 bg-bg-primary/90 border border-white/10 rounded-md font-mono text-[10px] text-text-secondary tracking-wider uppercase backdrop-blur-sm opacity-0">
            CSS
          </div>
        </div>

        {/* CTA + Social */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="#projects"
              className="hero-cta inline-flex items-center gap-2 px-6 py-3 bg-accent-red/20 border border-accent-red/30 text-white font-mono text-[11px] tracking-[0.2em] uppercase rounded hover:bg-accent-red/30 transition-all duration-300 opacity-0"
              data-cursor-hover
            >
              View Projects
            </a>

            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="hero-cta inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-text-secondary font-mono text-[11px] tracking-[0.2em] uppercase rounded hover:border-white/20 hover:text-white transition-all duration-300 opacity-0"
              data-cursor-hover
              aria-label="Download Resume"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="hero-cta inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-text-secondary font-mono text-[11px] tracking-[0.2em] uppercase rounded hover:border-white/20 hover:text-white transition-all duration-300 opacity-0"
              data-cursor-hover
            >
              Contact Me
            </a>
          </div>

          <div className="flex gap-4">
            {[
              { icon: Github, href: 'https://github.com/MCSK100', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/santhosh-kumar-8a8a8a8a/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:santhoshkumar.mariappan@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent-red transition-colors duration-300 p-2"
                data-cursor-hover
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0">
        <span className="font-mono text-[9px] tracking-[0.35em] uppercase text-text-muted">Scroll Down</span>
        <ChevronDown className="text-accent-red animate-bounce" size={16} />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent pointer-events-none" />
    </section>
  )
}
