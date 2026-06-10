import FadeIn from "../components/FadeIn";
import AnimatedText from "../components/AnimatedText";
import ContactButton from "../components/ContactButton";

const ABOUT_TEXT =
  "I'm Santhosh Kumar, a Frontend Developer with 4+ years of experience creating responsive, scalable, and high-performance web applications. Currently working at BrainCert where I develop and maintain LMS platforms, reusable React components, interactive user interfaces, and performance-optimized web experiences. I enjoy transforming complex ideas into intuitive digital experiences using modern frontend technologies.";

function Stat({
  label,
  value,
  suffix = "",
}: {
  label: string;
  value: number;
  suffix?: string;
}) {
  return (
    <div className="text-center group">
      <div
        className="text-white font-black group-hover:text-[#E31E24] transition-colors duration-300"
        style={{ fontSize: "clamp(1.5rem, 4vw, 2.2rem)" }}
      >
        {value}
        {suffix}
      </div>
      <div
        className="mt-2 text-white/30 uppercase tracking-[0.2em] font-black group-hover:text-white/50 transition-colors duration-300"
        style={{ fontSize: "clamp(0.6rem, 1vw, 0.75rem)" }}
      >
        {label}
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-24 bg-[#050505] overflow-hidden"
    >
      {/* Premium Dark Background Accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-[#E31E24] rounded-full blur-[150px] opacity-[0.03] animate-pulse-red" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-[#111111] rounded-full blur-[150px] opacity-20" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center max-w-7xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="text-center w-full">
          <h2
            className="hero-heading font-black uppercase leading-[0.9] tracking-tighter"
            style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
          >
            ABOUT ME
          </h2>
        </FadeIn>

        {/* Gap */}
        <div className="h-12 sm:h-16 md:h-20" />

        {/* Animated Paragraph */}
        <div className="max-w-[800px] w-full text-center px-4">
          <AnimatedText
            text={ABOUT_TEXT}
            className="text-white/60 font-medium leading-relaxed"
            style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.2rem)" }}
          />
        </div>

        {/* Animated Stats */}
        <div className="mt-20 sm:mt-24 md:mt-32 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
            <Stat label="Years Experience" value={4} />
            <Stat label="Projects Delivered" value={50} />
            <Stat label="Technologies" value={15} />
            <Stat label="Reusable Components" value={100} suffix="+" />
          </div>
        </div>

        {/* Gap */}
        <div className="h-20 sm:h-24 md:h-32" />

        {/* Contact Button */}
        <FadeIn delay={0.4} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
