import React from "react";

interface ChantiLogoProps {
  className?: string;
  iconSize?: string;
  variant?: "gold" | "white" | "dark" | "blue";
  showText?: boolean;
  textSize?: "sm" | "md" | "lg";
}

export const ChantiLogoIcon: React.FC<{ className?: string; fillClass?: string }> = ({
  className = "w-9 h-9",
  fillClass = "fill-current"
}) => {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`${className} ${fillClass} shrink-0`}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Chanti Infrastructure Logo"
    >
      {/* Horizon Arch */}
      <path d="M 20 160 Q 100 135 180 160 Q 100 148 20 160 Z" />

      {/* Middle Main Skyscraper */}
      {/* Front Face (with vertical windows/stripes) */}
      <polygon points="76,55 106,38 106,145 76,148" />
      {/* Vertical window stripes on middle building */}
      <line x1="84" y1="58" x2="84" y2="147" stroke="black" strokeWidth="2.5" />
      <line x1="92" y1="53" x2="92" y2="146" stroke="black" strokeWidth="2.5" />
      <line x1="100" y1="48" x2="100" y2="145" stroke="black" strokeWidth="2.5" />

      {/* Right Wall of Middle Building */}
      <polygon points="106,38 126,52 126,144 106,145" />

      {/* Left Skyscraper (with diagonal slatted balconies) */}
      <polygon points="61,75 92,62 92,148 61,152" />
      {/* Diagonal balcony stripes on left building */}
      <polygon points="63,90 90,78 90,83 63,95" fill="black" />
      <polygon points="63,101 90,89 90,94 63,106" fill="black" />
      <polygon points="63,112 90,100 90,105 63,117" fill="black" />
      <polygon points="63,123 90,111 90,116 63,128" fill="black" />
      <polygon points="63,134 90,122 90,127 63,139" fill="black" />
      <polygon points="63,145 90,133 90,138 63,150" fill="black" />

      {/* Right Small Skyscraper (with window grid) */}
      <polygon points="126,102 143,108 143,149 126,145" />

      {/* Grid windows on right building */}
      <rect x="129" y="108" width="5" height="5" fill="black" rx="0.5" />
      <rect x="136" y="110" width="5" height="5" fill="black" rx="0.5" />
      
      <rect x="129" y="116" width="5" height="5" fill="black" rx="0.5" />
      <rect x="136" y="118" width="5" height="5" fill="black" rx="0.5" />

      <rect x="129" y="124" width="5" height="5" fill="black" rx="0.5" />
      <rect x="136" y="126" width="5" height="5" fill="black" rx="0.5" />

      <rect x="129" y="132" width="5" height="5" fill="black" rx="0.5" />
      <rect x="136" y="134" width="5" height="5" fill="black" rx="0.5" />

      <rect x="129" y="140" width="5" height="5" fill="black" rx="0.5" />
      <rect x="136" y="142" width="5" height="5" fill="black" rx="0.5" />
    </svg>
  );
};

export const ChantiLogo: React.FC<ChantiLogoProps> = ({
  className = "",
  iconSize = "w-10 h-10",
  variant = "gold",
  showText = true,
  textSize = "md"
}) => {
  let textColorClass = "text-white";
  let subTextColorClass = "text-amber-400/90";
  let iconColorClass = "text-amber-400";

  if (variant === "white") {
    textColorClass = "text-white";
    subTextColorClass = "text-slate-300";
    iconColorClass = "text-white";
  } else if (variant === "dark") {
    textColorClass = "text-slate-900";
    subTextColorClass = "text-slate-600";
    iconColorClass = "text-slate-900";
  } else if (variant === "blue") {
    textColorClass = "text-white";
    subTextColorClass = "text-blue-400";
    iconColorClass = "text-blue-400";
  }

  const titleSizes = {
    sm: "text-base sm:text-lg",
    md: "text-lg sm:text-xl",
    lg: "text-2xl sm:text-3xl"
  };

  const subSizes = {
    sm: "text-[9px]",
    md: "text-[10px]",
    lg: "text-xs"
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icon Badge Container */}
      <div className={`p-1.5 rounded-xl border flex items-center justify-center transition-all ${
        variant === "gold"
          ? "bg-gradient-to-b from-amber-500/20 to-amber-950/40 border-amber-500/40 text-amber-400 shadow-md shadow-amber-500/10"
          : variant === "blue"
          ? "bg-blue-600/20 border-blue-500/40 text-blue-400 shadow-md"
          : variant === "dark"
          ? "bg-slate-100 border-slate-300 text-slate-900"
          : "bg-white/10 border-white/20 text-white"
      }`}>
        <ChantiLogoIcon className={iconSize} fillClass={iconColorClass} />
      </div>

      {showText && (
        <div className="flex flex-col text-left leading-none">
          <span className={`font-serif font-extrabold tracking-widest uppercase ${titleSizes[textSize]} ${textColorClass}`}>
            CHANTI
          </span>
          <span className={`font-mono font-bold tracking-[0.2em] uppercase pt-1 ${subSizes[textSize]} ${subTextColorClass}`}>
            INFRASTRUCTURE
          </span>
        </div>
      )}
    </div>
  );
};
