import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "../components/FadeIn";
import LiveProjectButton from "../components/LiveProjectButton";
import { PROJECT_LIVE_LINKS } from "./ProjectsSectionLinks";

const PROJECTS = [
  {
    number: "01",
    name: "FestivLink",
    category: "Event Discovery & Management",
    description:
      "A modern platform for discovering, organizing, and managing festivals and events with an engaging user experience.",
  },
  {
    number: "02",
    name: "ShadowChaty",
    category: "Real-Time Chat Application",
    description:
      "A secure real-time chat platform that enables anonymous conversations with instant messaging features.",
  },
  {
    number: "03",
    name: "YourScrap",
    category: "Smart Recycling Marketplace",
    description:
      "A digital platform that connects users with scrap collectors, simplifying waste management and recycling.",
  },
];

const TOTAL_CARDS = PROJECTS.length;

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const targetScale = 1 - (TOTAL_CARDS - 1 - index) * 0.03;

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.85, targetScale]);

  return (
    <div
      ref={cardRef}
      className="h-[80vh] sm:h-[85vh] sticky top-24 md:top-32"
      style={{ top: `${index * 32}px` }}
    >
      <motion.div
        className="h-full rounded-[32px] sm:rounded-[40px] border border-white/5 bg-[#0A0A0A] p-6 sm:p-10 md:p-12 flex flex-col group hover:border-[#E31E24]/20 transition-all duration-500 shadow-2xl"
        style={{ scale }}
      >
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-start justify-between mb-8 md:mb-12">
          <div className="flex items-start gap-4 md:gap-10">
            {/* Number */}
            <span
              className="text-[#E31E24] font-black leading-none opacity-20 group-hover:opacity-100 transition-opacity duration-500"
              style={{ fontSize: "clamp(3rem, 8vw, 100px)" }}
            >
              {project.number}
            </span>
            <div className="flex flex-col justify-center pt-2 md:pt-4">
              <span
                className="text-[#E31E24] uppercase tracking-[0.3em] font-black text-[10px] sm:text-xs mb-2"
              >
                {project.category}
              </span>
              <h3
                className="text-white font-black uppercase tracking-tight group-hover:text-[#E31E24] transition-colors duration-300"
                style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)" }}
              >
                {project.name}
              </h3>
              <p
                className="text-white/40 leading-relaxed mt-4 max-w-xl"
                style={{ fontSize: "clamp(0.85rem, 1.2vw, 1rem)" }}
              >
                {project.description}
              </p>
            </div>
          </div>
          <div className="flex-shrink-0 mt-8 md:mt-4 w-full md:w-auto">
            <a
              href={PROJECT_LIVE_LINKS[project.name] ?? "#"}
              target="_blank"
              rel="noreferrer"
              className="w-full md:w-auto block"
            >
              <LiveProjectButton />
            </a>
          </div>
        </div>

        {/* Bottom Row - Website iframe */}
        <div className="flex-1 min-h-0 relative group/iframe">
          <div className="w-full h-full rounded-[24px] sm:rounded-[32px] overflow-hidden border border-white/5 bg-black/40 group-hover/iframe:border-[#E31E24]/10 transition-all duration-500">
            {PROJECT_LIVE_LINKS[project.name] ? (
              <iframe
                title={project.name}
                src={PROJECT_LIVE_LINKS[project.name]}
                className="w-full h-full grayscale-[0.9] group-hover/iframe:grayscale-0 transition-all duration-700"
                style={{ minHeight: "240px" }}
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center p-6">
                <span className="text-white/10 uppercase tracking-[0.3em] font-black text-xs">
                  Live demo unavailable
                </span>
              </div>
            )}
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[24px] sm:rounded-[32px] shadow-[inset_0_0_100px_rgba(0,0,0,0.6)]" />
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative bg-[#050505] px-6 md:px-12 pt-24 md:pt-32 pb-24 overflow-hidden"
    >
      {/* Heading */}
      <div className="text-center mb-20 md:mb-32 relative z-10 w-full max-w-7xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-[0.9] tracking-tighter"
            style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
          >
            Projects
          </h2>
        </FadeIn>
      </div>

      {/* Project Cards */}
      <div className="relative z-20 w-full max-w-7xl mx-auto">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} />
        ))}
      </div>

      {/* Dark Premium Background Accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[40%] right-[-5%] w-[60%] h-[60%] bg-[#E31E24] rounded-full blur-[200px] opacity-[0.02] animate-pulse-red" />
        <div className="absolute bottom-[20%] left-[-5%] w-[60%] h-[60%] bg-[#111111] rounded-full blur-[200px] opacity-10" />
      </div>
    </section>
  );
}
