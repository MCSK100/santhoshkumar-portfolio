import GlassCTAButton from "./cta/GlassCTAButton";

interface LiveProjectButtonProps {
  className?: string;
}

export default function LiveProjectButton({
  className = "",
}: LiveProjectButtonProps) {
  return (
    <GlassCTAButton className={className} variant="secondary">
      Live Project
    </GlassCTAButton>
  );
}

