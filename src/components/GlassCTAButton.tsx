interface GlassCTAButtonProps {
  className?: string;
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
}

export default function GlassCTAButton({
  className = "",
  children,
  href,
  variant = "primary",
}: GlassCTAButtonProps) {
  const base =
    "group rounded-full font-medium uppercase tracking-widest transition-all duration-200 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#D7E2EA]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

  const variantStyles =
    variant === "primary"
      ? "text-[#EAF1FF] bg-white/5 border border-white/10 hover:bg-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_18px_50px_rgba(0,0,0,0.55)]"
      : "text-white bg-black/20 border border-white/15 hover:bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_18px_50px_rgba(0,0,0,0.55)]";

  const sheenLayer =
    "absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.18)_40%,rgba(255,255,255,0)_70%)] translate-x-[-60%] group-hover:translate-x-[60%] transition-transform duration-700";

  const glow =
    "after:content-[''] after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_top,rgba(255,77,0,0.35),rgba(255,45,85,0.0)_60%)] after:opacity-70 group-hover:after:opacity-100 after:pointer-events-none";

  const contentPadding =
    "px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base inline-block";

  const node = (
    <button
      type="button"
      className={`${base} ${variantStyles} relative overflow-hidden ${glow} ${className}`}
    >
      <span className={sheenLayer} aria-hidden="true" />
      <span className={contentPadding}>{children}</span>
    </button>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="inline-block">
        {node}
      </a>
    );
  }

  return node;
}

