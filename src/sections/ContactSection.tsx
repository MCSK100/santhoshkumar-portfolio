import { useCallback, useEffect, useState } from "react";
import FadeIn from "../components/FadeIn";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_GITHUB_URL,
  CONTACT_LINKEDIN_URL,
} from "../types/contact";
import RESUME_PDF from "../SanthoshKumar Resume FrontEnd Developer-1.pdf.pdf";


function buildMailto(email: string) {
  return `mailto:${email}`;
}

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function ContactSection() {
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const onHash = () => {
      if (window.location.hash === "#contact") scrollToId("contact");
    };
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const handleContactCTA = useCallback(() => {
    setHasInteracted(true);
    scrollToId("contact");
  }, []);

  return (
    <section
      id="contact"
      className="relative bg-[#050505] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 overflow-hidden"
    >
      {/* Dark Premium Background Accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#E31E24] rounded-full blur-[180px] opacity-[0.04] animate-pulse-red" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#111111] rounded-full blur-[150px] opacity-20" />
      </div>

      <div className="relative z-10">
        <div className="text-center">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight"
              style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
            >
              Contact Me
            </h2>
          </FadeIn>
        </div>

        <div className="mx-auto mt-12 sm:mt-16 max-w-5xl">
          <FadeIn delay={0.2} y={20}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="rounded-[32px] border border-white/5 bg-white/[0.02] backdrop-blur-xl p-6 sm:p-10">
                  <div className="text-white uppercase tracking-[0.2em] font-black" style={{ fontSize: "clamp(1.2rem, 2vw, 1.4rem)" }}>
                    Let’s build <span className="text-[#E31E24]">something great</span>
                  </div>
                  <p className="mt-4 text-white/50" style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)" }}>
                    Reach out using the links below. I respond quickly.
                  </p>

                  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a
                      href={buildMailto(CONTACT_EMAIL)}
                      className="group rounded-[24px] border border-white/5 bg-black/40 hover:border-[#E31E24]/30 transition-all duration-300 px-6 py-5"
                    >
                      <div className="text-white/40 font-black uppercase tracking-wider text-xs group-hover:text-[#E31E24] transition-colors">Email</div>
                      <div className="mt-2 text-white font-medium break-all">{CONTACT_EMAIL}</div>
                      <div className="mt-3 text-white/30 text-xs uppercase tracking-widest group-hover:text-white/60 transition-colors">Send a message</div>
                    </a>

                    <a
                      href={`tel:+${CONTACT_PHONE}`}
                      className="group rounded-[24px] border border-white/5 bg-black/40 hover:border-[#E31E24]/30 transition-all duration-300 px-6 py-5"
                    >
                      <div className="text-white/40 font-black uppercase tracking-wider text-xs group-hover:text-[#E31E24] transition-colors">Phone</div>
                      <div className="mt-2 text-white font-medium">{CONTACT_PHONE}</div>
                      <div className="mt-3 text-white/30 text-xs uppercase tracking-widest group-hover:text-white/60 transition-colors">Call / WhatsApp</div>
                    </a>

                    <a
                      href={RESUME_PDF}
                      download="SanthoshKumar-Resume.pdf"
                      className="group rounded-[24px] border border-white/5 bg-black/40 hover:border-[#E31E24]/30 transition-all duration-300 px-6 py-5 sm:col-span-2 flex flex-col items-center text-center"
                    >
                      <div className="text-white/40 font-black uppercase tracking-wider text-xs group-hover:text-[#E31E24] transition-colors">Resume</div>
                      <div className="mt-2 text-white font-medium text-lg">Download / View PDF</div>
                      <div className="mt-3 text-white/30 text-xs uppercase tracking-widest group-hover:text-white/60 transition-colors">Updated for 2024</div>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={handleContactCTA}
                    className="sr-only"
                    aria-hidden={hasInteracted ? "true" : "false"}
                  >
                    Scroll to contact
                  </button>
                </div>
              </div>

              <div>
                <div className="rounded-[32px] border border-white/5 bg-white/[0.02] backdrop-blur-xl p-6 sm:p-10 h-full">
                  <div className="text-white uppercase tracking-[0.2em] font-black" style={{ fontSize: "clamp(1.05rem, 1.7vw, 1.2rem)" }}>
                    Connect
                  </div>

                  <div className="mt-8 space-y-4">
                    <a
                      href={CONTACT_GITHUB_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="group block rounded-[24px] border border-white/5 bg-black/40 hover:border-[#E31E24]/30 transition-all duration-300 px-6 py-5"
                    >
                      <div className="text-white font-semibold group-hover:text-[#E31E24] transition-colors">GitHub</div>
                      <div className="mt-1 text-white/40 text-sm">
                        {CONTACT_GITHUB_URL.replace("https://", "")}
                      </div>
                    </a>

                    <a
                      href={CONTACT_LINKEDIN_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="group block rounded-[24px] border border-white/5 bg-black/40 hover:border-[#E31E24]/30 transition-all duration-300 px-6 py-5"
                    >
                      <div className="text-white font-semibold group-hover:text-[#E31E24] transition-colors">LinkedIn</div>
                      <div className="mt-1 text-white/40 text-sm">
                        {CONTACT_LINKEDIN_URL.replace("https://", "")}
                      </div>
                    </a>
                  </div>

                  <div className="mt-10 text-white/40 text-sm leading-relaxed uppercase tracking-widest text-center">
                    Available for freelance & full-time roles.
                  </div>

                  <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "Person",
                      name: "Santhosh Kumar",
                      email: CONTACT_EMAIL,
                      telephone: CONTACT_PHONE,
                      url: CONTACT_GITHUB_URL,
                      sameAs: [CONTACT_GITHUB_URL, CONTACT_LINKEDIN_URL],
                      jobTitle: "Frontend Developer",
                    }),
                  }} />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
