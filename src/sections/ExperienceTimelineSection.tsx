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
    <div className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-5 sm:p-7 md:p-10">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
        <div>
          <div className="text-[#D7E2EA] uppercase tracking-wider font-medium opacity-70 text-sm sm:text-base">
            {role}
          </div>
          <h3
            className="text-[#D7E2EA] font-black uppercase tracking-tight mt-1"
            style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)" }}
          >
            {company}
          </h3>
        </div>
        <div
          className="text-[#D7E2EA] uppercase tracking-widest font-medium opacity-80 text-sm sm:text-base"
          style={{ letterSpacing: "0.12em" }}
        >
          {period}
        </div>
      </div>

      <ul className="mt-6 space-y-3 text-[#D7E2EA]">
        {bullets.map((b, idx) => (
          <li
            key={idx}
            className="flex gap-3 items-start"
            style={{ fontSize: "clamp(0.95rem, 1.3vw, 1.15rem)" }}
          >
            <span
              className="mt-2 h-2 w-2 rounded-full bg-[#D7E2EA]"
              style={{ boxShadow: "0 0 18px rgba(215,226,234,0.35)" }}
            />
            <span className="opacity-90">{b}</span>
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
        company: "Focus Edumatics Pvt Ltd",
        role: "Online Tutor",
        period: "Oct 2020 – Nov 2021",
        bullets: [
          "Online tutoring",
          "Student support",
          "Mathematical modeling",
          "Remote education",
        ],
      },
      {
        company: "BrainCert",
        role: "Frontend Developer",
        period: "Mar 2022 – Present",
        bullets: [
          "React.js development",
          "LMS product development",
          "PHP integration",
          "UI component architecture",
          "Frontend optimization",
          "Client-side validation",
          "Responsive web applications",
        ],
      },
    ],
    []
  );

  return (
    <section
      id="experience"
      className="relative bg-[#0C0C0C] min-h-screen flex flex-col justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      {/* Title */}
      <div className="w-full text-center">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Experience
          </h2>
        </FadeIn>
      </div>

      {/* Timeline */}
      <div className="mt-10 sm:mt-14 flex-1 flex items-center justify-center">
        <div className="w-full max-w-5xl">
          <div
            className="flex flex-col md:flex-row md:items-stretch gap-6 md:gap-8"
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

          {/* Subtle connector to keep a timeline feel */}
          <div
            className="hidden md:block mt-8 h-px bg-[#D7E2EA]/25 mx-auto"
            style={{ width: "70%" }}
          />
          <div className="hidden md:flex justify-between mt-2">
            <span className="h-3 w-3 rounded-full bg-[#D7E2EA]" />
            <span className="h-3 w-3 rounded-full bg-[#D7E2EA]" />
          </div>
        </div>
      </div>

      {/* Note: GSAP horizontal ScrollTrigger is not available in dependencies; this keeps the intended timeline feel using existing Framer reveal. */}
    </section>
  );
}

