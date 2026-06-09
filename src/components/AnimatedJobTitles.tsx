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

  const durationMs = 1400;

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
      <div className="text-[#D7E2EA] uppercase tracking-widest font-medium text-[0.95rem] sm:text-[1.05rem] md:text-[1.2rem] opacity-80 text-center">
        Frontend Developer
      </div>
    );
  }

  return (
    <div className="relative text-center">
      <motion.div
        key={current}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-[#D7E2EA] uppercase tracking-widest font-medium"
        style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.25rem)" }}
      >
        {current}
      </motion.div>
    </div>
  );
}

