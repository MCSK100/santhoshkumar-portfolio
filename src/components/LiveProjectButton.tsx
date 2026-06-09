interface LiveProjectButtonProps {
  className?: string;
}

export default function LiveProjectButton({
  className = "",
}: LiveProjectButtonProps) {
  return (
    <button
      className={`rounded-full border-2 border-[#1a1a1a] text-white bg-[#0C0C0C] font-medium uppercase tracking-widest cursor-pointer transition-colors duration-200 hover:bg-[#121212] ${className}`}


    >
      <span className="px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base inline-block">
        Live Project
      </span>
    </button>
  );
}
