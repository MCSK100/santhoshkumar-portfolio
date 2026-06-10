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
        style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
      >
        {value}
        {suffix}
      </div>
      <div
        className="mt-2 text-white/40 uppercase tracking-widest group-hover:text-white/60 transition-colors duration-300"
        style={{ fontSize: "clamp(0.75rem, 1.2vw, 0.95rem)" }}
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
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-[#050505] overflow-hidden"
    >
      {/* Premium Dark Background Accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-[#E31E24] rounded-full blur-[150px] opacity-[0.03] animate-pulse-red" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-[#111111] rounded-full blur-[150px] opacity-20" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="text-center">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            ABOUT ME
          </h2>
        </FadeIn>

        {/* Gap */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Animated Paragraph */}
        <div className="max-w-[700px] w-full text-center px-4">
          <AnimatedText
            text={ABOUT_TEXT}
            className="text-white/70 font-medium leading-relaxed"
            style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
          />
        </div>

        {/* Animated Stats */}
        <div className="mt-16 sm:mt-20 md:mt-24 w-full max-w-5xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
            <Stat label="Years Experience" value={4} />
            <Stat label="Projects Delivered" value={50} />
            <Stat label="Technologies" value={15} />
            <Stat label="Reusable Components" value={100} suffix="+" />
          </div>
        </div>

        {/* Gap */}
        <div className="h-16 sm:h-20 md:h-24" />

        {/* Contact Button */}
        <FadeIn delay={0.4} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
