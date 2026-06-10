import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const TITLES = [
  "Frontend Developer",
  "React.js Developer",
  "UI Engineer",
  "Creative Web Developer",
  "JavaScript Specialist",
];

export default function AnimatedJobTitles() {
  const reducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  const durationMs = 2500;

  useEffect(() => {
    if (reducedMotion) return;
    const id = window.setInterval(() => {
      setIndex((v) => (v + 1) % TITLES.length);
    }, durationMs);
    return () => window.clearInterval(id);
  }, [reducedMotion]);

  const current = useMemo(() => TITLES[index], [index]);

  if (reducedMotion) {
    return (
      <div className="text-white/60 uppercase tracking-[0.3em] font-black text-[0.95rem] sm:text-[1.05rem] md:text-[1.2rem] text-center">
        Frontend Developer
      </div>
    );
  }

  return (
    <div className="relative text-center">
      <motion.div
        key={current}
        initial={{ opacity: 0, y: 15, filter: 'blur(10px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={{ opacity: 0, y: -15, filter: 'blur(10px)' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-[#E31E24] uppercase tracking-[0.4em] font-black"
        style={{ 
          fontSize: "clamp(0.95rem, 2vw, 1.5rem)",
          textShadow: "0 0 20px rgba(227,30,36,0.3)"
        }}
      >
        {current}
      </motion.div>
    </div>
  );
}
