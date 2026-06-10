import RESUME_PDF from "../../SanthoshKumar Resume FrontEnd Developer-1.pdf.pdf";

interface GlassCTAButtonProps {
  className?: string;
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "download";
}

export default function GlassCTAButton({
  className = "",
  children,
  href,
  variant = "primary",
}: GlassCTAButtonProps) {
  const base =
    "group rounded-full font-medium uppercase tracking-widest transition-all duration-300 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#E31E24]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent relative overflow-hidden";

  const variantStyles =
    variant === "primary"
      ? "text-white bg-[#E31E24] border border-[#E31E24]/20 hover:bg-[#B3171B] shadow-[0_10px_30px_rgba(227,30,36,0.3)]"
      : variant === "download"
      ? "text-white bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
      : "text-white bg-black/40 border border-white/10 hover:bg-white/5 backdrop-blur-md";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = RESUME_PDF;
    link.download = "SanthoshKumar-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const sheenLayer =
    "absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.2)_40%,rgba(255,255,255,0)_70%)] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out";

  const contentPadding =
    "px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base inline-block relative z-10";

  const button = (
    <button
      type="button"
      className={`${base} ${variantStyles} ${className}`}
      onClick={variant === "download" ? handleDownload : undefined}
    >
      <span className={sheenLayer} aria-hidden="true" />
      <span className={contentPadding}>{children}</span>
    </button>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="inline-block">
        {button}
      </a>
    );
  }

  return button;
}
