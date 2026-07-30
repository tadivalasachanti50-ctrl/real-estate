import React from "react";
import { 
  Building2, 
  MapPin, 
  FileCheck2, 
  Globe2, 
  Compass, 
  TrendingUp, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  Layers,
  Award,
  Paintbrush
} from "lucide-react";
import heroImage from "../assets/images/hero_vizag_realestate_1784723406185.jpg";

interface ServicesSectionProps {
  onOpenSiteVisit: () => void;
  onOpenAIConcierge: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenSiteVisit,
  onOpenAIConcierge
}) => {
  return (
    <section id="services" className="py-16 bg-[#1A3326] text-slate-100 font-sans border-t border-emerald-900/60 overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* ========================================================= */}
        {/* TOP HERO HEADER SECTION (MATCHING REFERENCE DESIGN) */}
        {/* ========================================================= */}
        <div className="relative bg-gradient-to-r from-[#214030] via-[#1A3326] to-[#142B1F] rounded-[2.5rem] p-8 sm:p-12 border border-emerald-800/40 shadow-2xl overflow-hidden">
          
          {/* Subtle Organic Leaf Decor Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-900/80 border border-emerald-700/60 text-emerald-300 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Full-Spectrum Advisory</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-white tracking-tight leading-tight">
              Real Estate <br />
              <span className="italic font-normal text-amber-300">Services & Solutions</span>
            </h2>

            <p className="text-emerald-100/80 text-xs sm:text-sm leading-relaxed max-w-lg font-light">
              End-to-end guidance for luxury homebuyers, investors, and NRIs in Visakhapatnam. From VMRDA legal title verification to authentic Vastu Shastra consultation and private site visits.
            </p>

            {/* Warm Gold Pill CTA Button */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenSiteVisit}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-amber-500/20 transition-all transform hover:-translate-y-0.5"
              >
                Inquire Services
              </button>
              
              <button
                onClick={onOpenAIConcierge}
                className="px-6 py-3.5 rounded-full bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-700/60 text-emerald-200 text-xs sm:text-sm font-semibold transition-all"
              >
                Consult AI Assistant
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 4-COLUMN DARK TEAL PILL BAR (MATCHING REFERENCE DESIGN) */}
        {/* ========================================================= */}
        <div className="bg-[#12261C] rounded-[2rem] p-6 sm:p-8 border border-emerald-800/40 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
            {/* Column 1 */}
            <div className="space-y-3 text-left">
              <div className="w-12 h-12 rounded-full border border-emerald-500/50 bg-emerald-900/40 flex items-center justify-center text-amber-300">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-serif font-bold text-white uppercase tracking-wider">
                Luxury Sourcing
              </h3>
              <p className="text-[11px] text-emerald-200/70 leading-relaxed font-light">
                Exclusive access to sea-facing penthouses, beachfront villas, and VMRDA gated layouts in Vizag.
              </p>
            </div>

            {/* Column 2 */}
            <div className="space-y-3 text-left">
              <div className="w-12 h-12 rounded-full border border-emerald-500/50 bg-emerald-900/40 flex items-center justify-center text-amber-300">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-serif font-bold text-white uppercase tracking-wider">
                Legal & VMRDA
              </h3>
              <p className="text-[11px] text-emerald-200/70 leading-relaxed font-light">
                Comprehensive title deed audit by advocate experts ensuring 100% encumbrance-free ownership.
              </p>
            </div>

            {/* Column 3 */}
            <div className="space-y-3 text-left">
              <div className="w-12 h-12 rounded-full border border-emerald-500/50 bg-emerald-900/40 flex items-center justify-center text-amber-300">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-serif font-bold text-white uppercase tracking-wider">
                NRI Desk
              </h3>
              <p className="text-[11px] text-emerald-200/70 leading-relaxed font-light">
                Dedicated remote assistance for NRIs in USA, Gulf & Singapore with virtual walkthroughs & POA.
              </p>
            </div>

            {/* Column 4 */}
            <div className="space-y-3 text-left">
              <div className="w-12 h-12 rounded-full border border-emerald-500/50 bg-emerald-900/40 flex items-center justify-center text-amber-300">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-serif font-bold text-white uppercase tracking-wider">
                100% Vastu
              </h3>
              <p className="text-[11px] text-emerald-200/70 leading-relaxed font-light">
                Architectural orientation audit for East and North facing entrances promoting prosperity.
              </p>
            </div>

          </div>
        </div>

        {/* ========================================================= */}
        {/* BENTO GRID OF COLORFUL RICH CARDS (MATCHING REFERENCE DESIGN) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Sage Green Card */}
          <div className="bg-[#3D5A45] text-white rounded-[2rem] p-6 sm:p-8 space-y-4 border border-emerald-600/40 shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-emerald-900/60 border border-emerald-400/50 flex items-center justify-center text-amber-300">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif font-bold tracking-tight">
              Premium Property Portfolio
            </h3>
            <p className="text-xs text-emerald-100/80 leading-relaxed">
              Curated selection of sea-facing flats, independent hilltop villas, and prime VMRDA open plots in Beach Road, Rushikonda, and Madhurawada.
            </p>
          </div>

          {/* Card 2: Dark Cocoa / Espresso Card */}
          <div className="bg-[#2D201A] text-white rounded-[2rem] p-6 sm:p-8 space-y-4 border border-amber-900/40 shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-amber-950/80 border border-amber-700/50 flex items-center justify-center text-amber-400">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif font-bold tracking-tight">
              Joint Venture & Land Development
            </h3>
            <p className="text-xs text-amber-100/70 leading-relaxed">
              Partnering with land owners across Visakhapatnam to develop luxury residential layouts and commercial complexes with maximum equity return.
            </p>
          </div>

          {/* Card 3: Terracotta / Warm Bronze Card */}
          <div className="bg-[#7A4E2F] text-white rounded-[2rem] p-6 sm:p-8 space-y-4 border border-amber-700/50 shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-amber-900/60 border border-amber-400/50 flex items-center justify-center text-amber-200">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif font-bold tracking-tight">
              High-Yield ROI Advisory
            </h3>
            <p className="text-xs text-amber-100/80 leading-relaxed">
              Strategic real estate investments targeting 12%-18% annual capital growth along Bhogapuram International Airport and Kapuluppada SEZ corridors.
            </p>
          </div>

          {/* Card 4: High Resolution Sunlight Photography Card */}
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-64 md:h-auto border border-emerald-800/40 group">
            <img
              src={heroImage}
              alt="Coastal Villa Visakhapatnam"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] font-mono text-amber-300 uppercase tracking-widest font-bold">VIP Service</span>
              <h4 className="text-base font-serif font-bold text-white">Chauffeur Site Inspection</h4>
              <p className="text-xs text-slate-300 line-clamp-1">Complimentary luxury vehicle pickup across Visakhapatnam.</p>
            </div>
          </div>

          {/* Card 5: Dark Cocoa Card */}
          <div className="bg-[#2D201A] text-white rounded-[2rem] p-6 sm:p-8 space-y-4 border border-amber-900/40 shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-amber-950/80 border border-amber-700/50 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif font-bold tracking-tight">
              100% Clear Title Verification
            </h3>
            <p className="text-xs text-amber-100/70 leading-relaxed">
              Thorough scrutiny of link documents, encumbrance certificates, master plan approvals, and revenue records prior to agreement.
            </p>
          </div>

          {/* Card 6: Warm Sand / Beige Card */}
          <div className="bg-[#D1B898] text-slate-900 rounded-[2rem] p-6 sm:p-8 space-y-4 border border-amber-200/60 shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-amber-400">
              <Paintbrush className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif font-bold tracking-tight text-slate-950">
              Turnkey Interior & Handover
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed">
              Complete post-purchase support including interior design execution, property management, tenant onboarding, and resale facilitation.
            </p>
          </div>

        </div>

        {/* Bottom Label */}
        <div className="text-center pt-4">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
            Chanti Real Estate Services • Visakhapatnam, Andhra Pradesh
          </span>
        </div>

      </div>
    </section>
  );
};
