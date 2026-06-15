import { ArrowUp } from 'lucide-react'

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-16 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-mono font-bold text-lg tracking-wider mb-2">
              <span className="text-accent-red">SK</span> — SANTHOSH KUMAR
            </h3>
            <p className="font-mono text-text-muted text-[10px] tracking-[0.2em] uppercase">Creative Frontend Engineer · Coimbatore, India</p>
          </div>

          <div className="flex items-center gap-8">
            {[
              { label: 'Subject', href: '#about' },
              { label: 'Dossier', href: '#experience' },
              { label: 'Evidence', href: '#projects' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' }) }}
                className="font-mono text-[10px] tracking-[0.15em] uppercase text-text-muted hover:text-white transition-colors duration-300"
                data-cursor-hover
              >
                {link.label}
              </a>
            ))}
          </div>

          <button onClick={scrollToTop} className="project-strip p-3 rounded-full hover:border-accent-red/30 hover:text-accent-red transition-all duration-300" data-cursor-hover>
            <ArrowUp size={16} />
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-text-muted text-[10px] tracking-wider">© 2026 SANTHOSH KUMAR. ALL RIGHTS RESERVED.</p>
          <p className="font-mono text-text-muted text-[10px] tracking-wider">
            CRAFTED WITH <span className="text-accent-red">REACT</span> & <span className="text-accent-red">THREE.JS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
