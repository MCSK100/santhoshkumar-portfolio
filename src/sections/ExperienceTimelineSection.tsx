import { useMemo } from "react";
import FadeIn from "../components/FadeIn";

type TimelineCardProps = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

function TimelineCard({
  company,
  role,
  period,
  bullets,
}: TimelineCardProps) {
  return (
    <div className="rounded-[32px] border border-white/5 bg-white/[0.02] backdrop-blur-xl p-8 sm:p-12 group hover:border-[#E31E24]/20 transition-all duration-500 h-full">
      <div className="flex flex-col gap-4">
        <div className="text-[#E31E24] uppercase tracking-[0.3em] font-black text-[10px] sm:text-xs">
          {role}
        </div>
        <h3
          className="text-white font-black uppercase tracking-tight group-hover:text-[#E31E24] transition-colors duration-300"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
        >
          {company}
        </h3>
        <div
          className="text-white/30 uppercase tracking-[0.2em] font-black text-[10px] sm:text-xs"
        >
          {period}
        </div>
      </div>

      <ul className="mt-10 space-y-4">
        {bullets.map((b, idx) => (
          <li
            key={idx}
            className="flex gap-4 items-start"
            style={{ fontSize: "clamp(0.85rem, 1.2vw, 1rem)" }}
          >
            <span
              className="mt-1.5 h-1 w-1 rounded-full bg-[#E31E24] group-hover:shadow-[0_0_8px_#E31E24] transition-all duration-300 flex-shrink-0"
            />
            <span className="text-white/40 group-hover:text-white/70 transition-colors duration-300 leading-relaxed">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ExperienceTimelineSection() {
  const cards = useMemo(
    () => [
      {
        company: "BrainCert",
        role: "Frontend Developer",
        period: "Mar 2022 – Present",
        bullets: [
          "React.js development & LMS product engineering",
          "Built high-performance reusable UI components",
          "PHP integration & full-stack collaboration",
          "Optimized web applications for scale and speed",
          "Developed responsive and accessible interfaces",
        ],
      },
      {
        company: "Focus Edumatics Pvt Ltd",
        role: "Online Tutor",
        period: "Oct 2020 – Nov 2021",
        bullets: [
          "Delivered online tutoring and student support",
          "Applied mathematical modeling for education",
          "Facilitated remote learning experiences",
          "Managed student progress and feedback",
        ],
      },
    ],
    []
  );

  return (
    <section
      id="experience"
      className="relative bg-[#050505] min-h-screen flex flex-col justify-center px-6 md:px-12 py-24 md:py-32 overflow-hidden"
    >
      {/* Dark Premium Background Accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[30%] right-[-10%] w-[50%] h-[50%] bg-[#E31E24] rounded-full blur-[150px] opacity-[0.02] animate-pulse-red" />
        <div className="absolute bottom-[30%] left-[-10%] w-[50%] h-[50%] bg-[#111111] rounded-full blur-[150px] opacity-10" />
      </div>

      {/* Title */}
      <div className="w-full text-center relative z-10 max-w-7xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-[0.9] tracking-tighter"
            style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
          >
            Experience
          </h2>
        </FadeIn>
      </div>

      {/* Timeline */}
      <div className="mt-20 md:mt-32 flex-1 flex items-center justify-center relative z-10 w-full max-w-7xl mx-auto">
        <div className="w-full">
          <div
            className="flex flex-col md:flex-row md:items-stretch gap-8"
            aria-label="Experience timeline"
          >
            {cards.map((c, i) => (
              <div key={c.company} className="md:w-1/2">
                <FadeIn delay={i * 0.15} y={30}>
                  <TimelineCard {...c} />
                </FadeIn>
              </div>
            ))}
          </div>

          {/* Premium Timeline Accent */}
          <div className="hidden md:block mt-20 relative">
            <div className="h-px w-full bg-white/5" />
            <div className="absolute top-1/2 left-0 -translate-y-1/2 h-0.5 w-32 bg-[#E31E24] blur-[1px]" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 h-0.5 w-32 bg-[#E31E24] blur-[1px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
