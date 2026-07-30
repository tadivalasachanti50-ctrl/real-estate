import React, { useState } from "react";
import { VIZAG_LOCALITIES } from "../data/locations";
import { 
  MapPin, 
  TrendingUp, 
  ArrowRight, 
  Compass, 
  Building2, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck,
  Building,
  Plane,
  Waves
} from "lucide-react";

interface LocalityGuideProps {
  onSelectLocality: (localityName: string) => void;
}

export const LocalityGuide: React.FC<LocalityGuideProps> = ({ onSelectLocality }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filteredLocalities = VIZAG_LOCALITIES.filter((loc) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "oceanfront") {
      return loc.id === "beach-road" || loc.id === "bheemili" || loc.id === "rushikonda";
    }
    if (selectedFilter === "it-tech") {
      return loc.id === "rushikonda" || loc.id === "kapuluppada" || loc.id === "madhurawada";
    }
    if (selectedFilter === "plots") {
      return loc.id === "bheemili" || loc.id === "kapuluppada" || loc.id === "madhurawada";
    }
    return true;
  });

  return (
    <section id="localities" className="py-16 bg-slate-950 border-t border-slate-900 text-left font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* ========================================================= */}
        {/* HEADER SECTION (MATCHING VELLARO REFERENCE DESIGN) */}
        {/* ========================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-800">
          
          {/* Left Title */}
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              <span>Coastal Growth Corridors</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-tight uppercase leading-tight">
              PRIME LOCALITIES <br />
              <span className="italic font-normal text-amber-300 capitalize text-2xl sm:text-4xl">
                in Visakhapatnam
              </span>
            </h2>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <button
                onClick={() => setSelectedFilter("all")}
                className={`px-4 py-2 text-xs font-bold font-mono tracking-widest border transition-all rounded-lg uppercase ${
                  selectedFilter === "all"
                    ? "bg-amber-500 text-slate-950 border-amber-500 shadow-lg"
                    : "bg-slate-900 text-slate-300 border-slate-700 hover:border-amber-400"
                }`}
              >
                ALL CORRIDORS
              </button>

              <button
                onClick={() => setSelectedFilter("oceanfront")}
                className={`px-4 py-2 text-xs font-bold font-mono tracking-widest border transition-all rounded-lg uppercase ${
                  selectedFilter === "oceanfront"
                    ? "bg-amber-500 text-slate-950 border-amber-500 shadow-lg"
                    : "bg-slate-900 text-slate-300 border-slate-700 hover:border-amber-400"
                }`}
              >
                OCEANFRONT
              </button>

              <button
                onClick={() => setSelectedFilter("it-tech")}
                className={`px-4 py-2 text-xs font-bold font-mono tracking-widest border transition-all rounded-lg uppercase ${
                  selectedFilter === "it-tech"
                    ? "bg-amber-500 text-slate-950 border-amber-500 shadow-lg"
                    : "bg-slate-900 text-slate-300 border-slate-700 hover:border-amber-400"
                }`}
              >
                IT & TECH HUB
              </button>

              <button
                onClick={() => setSelectedFilter("plots")}
                className={`px-4 py-2 text-xs font-bold font-mono tracking-widest border transition-all rounded-lg uppercase ${
                  selectedFilter === "plots"
                    ? "bg-amber-500 text-slate-950 border-amber-500 shadow-lg"
                    : "bg-slate-900 text-slate-300 border-slate-700 hover:border-amber-400"
                }`}
              >
                VMRDA PLOT BELT
              </button>
            </div>
          </div>

          {/* Right Subtitle & Info */}
          <div className="max-w-md space-y-2 lg:text-right">
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Explore land appreciation benchmarks, VMRDA layout status, distance to Bhogapuram International Airport, and GITAM university proximity.
            </p>
            <div className="text-xs font-mono text-amber-400">
              Showing <strong>{filteredLocalities.length}</strong> strategic investment zones
            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* STACKED FULL-WIDTH LUXURY CARDS (MATCHING VELLARO STYLE) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 gap-8 sm:gap-10">
          {filteredLocalities.map((loc) => (
            <div
              key={loc.id}
              className="group relative w-full h-[380px] sm:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-800 hover:border-amber-500/50 shadow-2xl transition-all duration-500 text-left cursor-pointer"
              onClick={() => onSelectLocality(loc.name)}
            >
              {/* Background High Resolution Photography */}
              <img
                src={loc.image}
                alt={loc.name}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                referrerPolicy="no-referrer"
              />

              {/* Dark Ambient Gradient Vignette for Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/40" />

              {/* TOP BAR: Location Pin (Left) & Growth Rate (Right) */}
              <div className="absolute top-4 sm:top-6 left-4 sm:left-8 right-4 sm:right-8 flex items-center justify-between z-10">
                
                {/* Location Tag */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-slate-200 text-xs font-semibold shadow-lg">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{loc.name}, Visakhapatnam</span>
                </div>

                {/* Annual Growth Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 text-xs font-bold backdrop-blur-md shadow-lg">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  <span>+{loc.annualGrowth} Appreciation</span>
                </div>

              </div>

              {/* MIDDLE & BOTTOM CARD CONTENT */}
              <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 z-10 space-y-4">
                
                {/* Title & Tagline */}
                <div className="space-y-1.5 max-w-3xl">
                  <h3 className="text-2xl sm:text-4xl font-serif font-extrabold text-white uppercase tracking-tight drop-shadow-md">
                    {loc.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 font-light drop-shadow line-clamp-1">
                    {loc.tagline}
                  </p>
                </div>

                {/* Outlined Translucent Feature Chips */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {loc.keyHighlights.map((highlight, idx) => (
                    <div 
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/60 border border-slate-700/80 backdrop-blur-md text-slate-200 text-xs font-mono"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Description snippet */}
                <p className="text-xs text-slate-300 max-w-2xl line-clamp-2 leading-relaxed hidden sm:block">
                  {loc.description}
                </p>

                {/* BOTTOM ROW: Rate Left + White Button Right */}
                <div className="flex items-end justify-between pt-3 border-t border-slate-800/80">
                  
                  {/* Price Tag with Italic "avg rate" */}
                  <div className="flex items-baseline gap-2">
                    <span className="italic font-serif text-slate-300 text-xs sm:text-sm">avg land rate</span>
                    <span className="text-xl sm:text-3xl font-serif font-extrabold text-white tracking-tight drop-shadow-md">
                      {loc.avgPricePerSqFt}
                    </span>
                  </div>

                  {/* White Action Button Right */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectLocality(loc.name);
                    }}
                    className="px-5 py-2.5 rounded-lg bg-white hover:bg-slate-100 text-slate-950 font-extrabold text-xs tracking-wider uppercase shadow-xl transition-all flex items-center gap-2 shrink-0"
                  >
                    <span>EXPLORE LOCALITY</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
