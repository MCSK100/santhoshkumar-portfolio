import { useRef, useEffect, useState, useCallback } from "react";

const ALL_GIFS = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

const ROW1_GIFS = ALL_GIFS.slice(0, 11);
const ROW2_GIFS = ALL_GIFS.slice(11);

function tripleArray<T>(arr: T[]): T[] {
  return [...arr, ...arr, ...arr];
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);

  const row1Gifs = tripleArray(ROW1_GIFS);
  const row2Gifs = tripleArray(ROW2_GIFS);

  const handleScroll = useCallback(() => {
    if (!sectionRef.current) return;
    const sectionTop = sectionRef.current.offsetTop;
    const offset =
      (window.scrollY - sectionTop + window.innerHeight) * 0.2;
    setTranslateX(offset);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#050505] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden relative"
    >
      {/* Subtle top/bottom fade */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#050505] to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#050505] to-transparent z-10" />

      {/* Row 1 - moves RIGHT */}
      <div className="flex gap-4 mb-4 relative z-0">
        <div
          className="flex gap-4 will-change-transform flex-shrink-0"
          style={{
            transform: `translateX(${translateX - 400}px)`,
          }}
        >
          {row1Gifs.map((src, i) => (
            <div
              key={`r1-${i}`}
              className="flex-shrink-0 rounded-[24px] overflow-hidden border border-white/5 group hover:border-[#E31E24]/30 transition-all duration-500 shadow-2xl"
              style={{ width: 'clamp(280px, 40vw, 420px)', aspectRatio: '16/10' }}
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - moves LEFT */}
      <div className="flex gap-4 relative z-0">
        <div
          className="flex gap-4 will-change-transform flex-shrink-0"
          style={{
            transform: `translateX(-${translateX - 400}px)`,
          }}
        >
          {row2Gifs.map((src, i) => (
            <div
              key={`r2-${i}`}
              className="flex-shrink-0 rounded-[24px] overflow-hidden border border-white/5 group hover:border-[#E31E24]/30 transition-all duration-500 shadow-2xl"
              style={{ width: 'clamp(280px, 40vw, 420px)', aspectRatio: '16/10' }}
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
