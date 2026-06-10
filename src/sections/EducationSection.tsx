import { useCallback, useRef, useState } from "react";
import FadeIn from "../components/FadeIn";

export default function EducationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const handleMove = useCallback((e: React.PointerEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    const ry = (px - 0.5) * 12; // left/right
    const rx = -(py - 0.5) * 10; // up/down

    setTilt({ rx, ry });
  }, []);

  const handleLeave = useCallback(() => {
    setTilt({ rx: 0, ry: 0 });
  }, []);

  return (
    <section
      id="education"
      className="relative bg-[#050505] px-6 md:px-12 py-24 md:py-32 overflow-hidden"
    >
      {/* Dark Premium Background Accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-[#E31E24] rounded-full blur-[150px] opacity-[0.02] animate-pulse-red" />
        <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-[#111111] rounded-full blur-[150px] opacity-10" />
      </div>

      <div className="text-center relative z-10 w-full max-w-7xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-[0.9] tracking-tighter"
            style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
          >
            Education
          </h2>
        </FadeIn>
      </div>

      <div className="mx-auto mt-20 md:mt-32 max-w-4xl relative z-10">
        <div
          ref={ref}
          onPointerMove={handleMove}
          onPointerLeave={handleLeave}
          className="mx-auto rounded-[32px] border border-white/5 bg-white/[0.02] backdrop-blur-xl p-10 sm:p-16 md:p-20 group hover:border-[#E31E24]/20 transition-all duration-500"
          style={{
            transformStyle: "preserve-3d",
            transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
            transition: "transform 120ms ease-out",
          }}
        >
          <div className="relative">
            <div className="text-[#E31E24] uppercase tracking-[0.4em] font-black text-[10px] sm:text-xs mb-6">
              Bachelor&apos;s Degree
            </div>
            <h3 className="text-white font-black uppercase tracking-tight group-hover:text-[#E31E24] transition-colors duration-300" style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)" }}>
              Computer Technology
            </h3>
            <div className="mt-6 text-white/50 leading-relaxed font-medium" style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.2rem)" }}>
              Dr. N.G.P Arts and Science College
              <div className="text-white/20 uppercase tracking-[0.3em] text-[10px] sm:text-xs mt-3 font-black">Coimbatore, India</div>
            </div>

            <div className="mt-16 flex items-end justify-between border-t border-white/5 pt-12">
              <div className="text-white/10 uppercase tracking-[0.5em] text-[10px] sm:text-xs font-black">
                CGPA
              </div>
              <div className="text-white font-black leading-none group-hover:text-[#E31E24] transition-colors duration-300" style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}>
                7.1
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
