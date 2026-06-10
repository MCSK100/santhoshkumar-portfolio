import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "../components/FadeIn";
import LiveProjectButton from "../components/LiveProjectButton";
import { PROJECT_LIVE_LINKS } from "./ProjectsSectionLinks";

const PROJECTS = [
  {
    number: "01",
    name: "FestivLink",
    category: "Event Discovery & Festival Management Platform",
    description:
      "A modern platform for discovering, organizing, and managing festivals and events with an engaging user experience and seamless event navigation.",
  },
  {
    number: "02",
    name: "ShadowChaty",
    category: "Anonymous Real-Time Chat Application",
    description:
      "A secure real-time chat platform that enables anonymous one-on-one and public conversations with instant messaging and privacy-focused communication features.",
  },
  {
    number: "03",
    name: "YourScrap",
    category: "Smart Scrap Collection & Recycling Marketplace",
    description:
      "A digital platform that connects users with scrap collectors, simplifying waste management and promoting sustainable recycling through convenient online scheduling.",
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
      className="h-[85vh] sticky top-24 md:top-32"
      style={{ top: `${index * 32}px` }}
    >
      <motion.div
        className="h-full rounded-[40px] sm:rounded-[50px] border border-white/5 bg-[#0A0A0A] p-6 sm:p-8 md:p-10 flex flex-col group hover:border-[#E31E24]/30 transition-all duration-500"
        style={{ scale }}
      >
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-start justify-between mb-8">
          <div className="flex items-start gap-4 md:gap-8">
            {/* Number */}
            <span
              className="text-[#E31E24] font-black leading-none opacity-20 group-hover:opacity-100 transition-opacity duration-500"
              style={{ fontSize: "clamp(3rem, 10vw, 120px)" }}
            >
              {project.number}
            </span>
            <div className="flex flex-col justify-center pt-2 md:pt-4">
              <span
                className="text-[#E31E24] uppercase tracking-[0.2em] font-black text-xs sm:text-sm mb-2"
              >
                {project.category}
              </span>
              <h3
                className="text-white font-black uppercase group-hover:text-[#E31E24] transition-colors duration-300"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
              >
                {project.name}
              </h3>
              <p
                className="text-white/50 leading-relaxed mt-4 max-w-2xl"
                style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)" }}
              >
                {project.description}
              </p>
            </div>
          </div>
          <div className="flex-shrink-0 mt-6 md:mt-4 w-full md:w-auto">
            <a
              href={PROJECT_LIVE_LINKS[project.name] ?? "#"}
              target="_blank"
              rel="noreferrer"
              className={
                PROJECT_LIVE_LINKS[project.name]
                  ? "w-full md:w-auto"
                  : "pointer-events-none w-full md:w-auto"
              }
            >
              <LiveProjectButton />
            </a>
          </div>
        </div>

        {/* Bottom Row - Website iframe */}
        <div className="flex-1 min-h-0 relative group/iframe">
          <div className="w-full h-full rounded-[32px] overflow-hidden border border-white/5 bg-black/40 group-hover/iframe:border-[#E31E24]/20 transition-all duration-500">
            {PROJECT_LIVE_LINKS[project.name] ? (
              <iframe
                title={project.name}
                src={PROJECT_LIVE_LINKS[project.name]}
                className="w-full h-full grayscale-[0.8] group-hover/iframe:grayscale-0 transition-all duration-700"
                style={{ minHeight: "300px" }}
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center p-6">
                <span className="text-white/20 uppercase tracking-widest font-black">
                  Live demo unavailable
                </span>
              </div>
            )}
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[32px] shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" />
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative bg-[#050505] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20"
    >
      {/* Heading */}
      <FadeIn delay={0} y={40} className="text-center mb-16 sm:mb-24">
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Projects
        </h2>
      </FadeIn>

      {/* Project Cards */}
      <div className="relative z-10">
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
