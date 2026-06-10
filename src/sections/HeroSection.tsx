import FadeIn from "../components/FadeIn";
import Magnet from "../components/Magnet";
import ContactButton from "../components/ContactButton";
import AnimatedJobTitles from "../components/AnimatedJobTitles";
import GlassCTAButton from "../components/cta/GlassCTAButton";
import PORTRAIT_URL from "../mcsk-port.png";

const NAV_LINKS = ["About", "Projects", "Contact"];

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col overflow-x-clip bg-[#050505]">
      {/* Premium background graphics - 3D Black themed */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Grid pattern with subtle red glow */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(227,30,36,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(227,30,36,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)",
          }}
        />

        {/* 3D-like animated shades/blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#111111] rounded-full blur-[120px] opacity-40 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#0A0A0A] rounded-full blur-[120px] opacity-40 animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Premium Red Accent Glows */}
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-[#E31E24] rounded-full blur-[180px] opacity-[0.08] animate-pulse-red" />
        <div className="absolute bottom-[20%] left-[10%] w-[30%] h-[30%] bg-[#E31E24] rounded-full blur-[180px] opacity-[0.08] animate-pulse-red" style={{ animationDelay: '1s' }} />
      </div>

      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 z-20 relative">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-white/80 font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-all duration-300 hover:text-[#E31E24] hover:tracking-[0.2em]"
            >
              {link}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <div className="overflow-hidden w-full relative z-10 mt-12 sm:mt-8 md:mt-0">
        <div className="relative">
          <div className="hero-heading font-black uppercase tracking-tight leading-none w-full text-[10vw] sm:text-[11vw] md:text-[12vw] lg:text-[13.5vw] px-6 md:px-10">
            HI, I'M
          </div>
          <div className="hero-heading font-black uppercase tracking-tight leading-none w-full text-[8vw] sm:text-[9vw] md:text-[10vw] lg:text-[11.5vw] mt-2 px-6 md:px-10">
            SANTHOSH KUMAR
          </div>

          <div className="mt-6 sm:mt-8 px-6 md:px-10">
            <AnimatedJobTitles />
          </div>
        </div>
      </div>

      {/* Hero Portrait */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-[60%] -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0"
      >
        <Magnet padding={150} strength={3} className="w-full">
          <div className="relative group">
            {/* Subtle glow behind portrait */}
            <div className="absolute inset-0 bg-[#E31E24] rounded-full blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-700" />
            <img
              src={PORTRAIT_URL}
              alt="Santhosh Kumar"
              className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              loading="eager"
            />
          </div>
        </Magnet>
      </FadeIn>

      {/* Bottom Bar */}
      <div className="mt-auto flex flex-col md:flex-row justify-between items-start md:items-end px-6 md:px-10 pb-10 md:pb-12 z-20 relative gap-8 md:gap-0">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-white/60 font-light uppercase tracking-wide leading-relaxed max-w-[420px] sm:max-w-[520px] md:max-w-[620px]"
            style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.05rem)" }}
          >
            Results-driven <span className="text-white font-medium">Frontend Developer</span> with 4+ years of experience building scalable, high-performance web applications. Specialized in <span className="text-[#E31E24]">React.js</span> and modern user experiences.
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20} className="w-full md:w-auto">
          <div className="flex flex-wrap gap-4">
            <ContactButton />
            <GlassCTAButton variant="download">
              Download Resume
            </GlassCTAButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
