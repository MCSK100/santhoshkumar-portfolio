import { useCallback, useRef, useState } from "react";
import FadeIn from "../components/FadeIn";

export default function EducationSection() {
  return null;

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
      className="relative bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 overflow-hidden"
    >
      <div className="text-center">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Education
          </h2>
        </FadeIn>
      </div>

      <div className="mx-auto mt-12 sm:mt-16 max-w-4xl">
        <div
          ref={ref}
          onPointerMove={handleMove}
          onPointerLeave={handleLeave}
          className="mx-auto rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA]/25 bg-white/5 backdrop-blur-md p-6 sm:p-8 md:p-10"
          style={{
            transformStyle: "preserve-3d",
            transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
            transition: "transform 120ms ease-out",
          }}
        >
          <div className="relative">
            <div
              className="absolute inset-0 pointer-events-none rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{
                background:
                  "radial-gradient(900px circle at 20% 10%, rgba(182,0,168,0.25), transparent 45%), radial-gradient(800px circle at 80% 70%, rgba(0,190,255,0.15), transparent 50%)",
                opacity: 0.9,
              }}
            />
            <div className="relative">
              <div className="text-[#D7E2EA] uppercase tracking-widest font-medium opacity-80 text-sm sm:text-base">
                Bachelor&apos;s Degree
              </div>
              <h3 className="text-[#D7E2EA] font-black uppercase tracking-tight mt-2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
                Computer Technology
              </h3>
              <div className="mt-4 text-[#D7E2EA] opacity-90" style={{ fontSize: "clamp(1rem, 2vw, 1.3rem)" }}>
                Dr. N.G.P Arts and Science College
                <div className="opacity-70">Coimbatore</div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="text-[#D7E2EA]/70 uppercase tracking-widest text-xs sm:text-sm">
                  CGPA
                </div>
                <div className="text-[#D7E2EA] font-black" style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}>
                  7.1
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

