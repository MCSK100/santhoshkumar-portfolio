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
      style={{ top: `${index * 28}px` }}
    >
      <motion.div
        className="h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col"
        style={{ scale }}
      >
        {/* Top Row */}
        <div className="flex items-start justify-between mb-4 sm:mb-6">
          <div className="flex items-start gap-3 sm:gap-4 md:gap-6 flex-wrap">
            {/* Number */}
            <span
              className="text-[#D7E2EA] font-black leading-none"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
            >
              {project.number}
            </span>
            <div className="flex flex-col justify-center pt-2 sm:pt-4">
              <span
                className="text-[#D7E2EA] uppercase tracking-wider font-medium opacity-60"
                style={{ fontSize: "clamp(0.7rem, 1.2vw, 1rem)" }}
              >
                {project.category}
              </span>
              <h3
                className="text-[#D7E2EA] font-medium uppercase"
                style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
              >
                {project.name}
              </h3>
              <p
                className="text-[#D7E2EA] opacity-70 leading-relaxed mt-2 max-w-[42rem]"
                style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.15rem)" }}
              >
                {project.description}
              </p>

            </div>
          </div>
          <div className="flex-shrink-0 pt-2 sm:pt-4">
            <a
              href={PROJECT_LIVE_LINKS[project.name] ?? "#"}
              target="_blank"
              rel="noreferrer"
              className={
                PROJECT_LIVE_LINKS[project.name]
                  ? ""
                  : "pointer-events-none"
              }
            >
              <LiveProjectButton />
            </a>
          </div>

        </div>

        {/* Bottom Row - Website iframe */}
        <div className="flex gap-3 sm:gap-4 flex-1 min-h-0">
          <div className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden border border-[#D7E2EA]/30">
            {PROJECT_LIVE_LINKS[project.name] ? (
              <iframe
                title={project.name}
                src={PROJECT_LIVE_LINKS[project.name]}
                className="w-full h-full"
                style={{ minHeight: "420px" }}
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center p-6">
                <span className="text-[#D7E2EA] uppercase tracking-wider font-medium opacity-70">
                  Live demo unavailable
                </span>
              </div>
            )}
          </div>
        </div>

      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20"
    >
      {/* Heading */}
      <FadeIn delay={0} y={40} className="text-center mb-16 sm:mb-20 md:mb-28">
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Projects
        </h2>

      </FadeIn>

      {/* Project Cards */}
      <div className="relative">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
