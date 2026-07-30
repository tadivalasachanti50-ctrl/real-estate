import React, { useState } from "react";
import founderImage from "../assets/images/founder_chanti_portrait_1784723456459.jpg";
import luxuryVilla from "../assets/images/luxury_villa_vizag_1784723420489.jpg";
import heroVizag from "../assets/images/hero_vizag_realestate_1784723406185.jpg";
import gatedCommunity from "../assets/images/gated_community_layout_1784723442629.jpg";
import { 
  Award, 
  ShieldCheck, 
  HeartHandshake, 
  Users, 
  Sparkles, 
  ArrowRight, 
  ChevronRight, 
  Building2, 
  MapPin, 
  CheckCircle2, 
  TrendingUp, 
  Quote, 
  Layers, 
  SlidersHorizontal,
  Check,
  Star
} from "lucide-react";

export const AboutFounder: React.FC = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<"Option One" | "Option Two">("Option One");

  // Auxiliary high-res Unsplash architectural pictures for presentation slides
  const poolInterior = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80";
  const woodInterior = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80";
  const curvedTower = "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80";
  const patioSunset = "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80";
  const modernGlassVilla = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80";

  return (
    <section id="about" className="py-16 bg-[#8C461E] text-slate-100 font-sans border-t border-[#A55223] text-left selection:bg-amber-400 selection:text-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Badge & Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-950/40 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
            <HeartHandshake className="w-3.5 h-3.5 text-amber-400" />
            <span>Chanti Real Estate • Visionary Presentation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-tight uppercase leading-tight">
            ABOUT CHANTI REAL ESTATE <br />
            <span className="italic font-normal text-amber-200 capitalize text-2xl sm:text-4xl">
              Presentation Template & Coastal Vision
            </span>
          </h2>
          <p className="text-amber-100/80 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Founded by <strong>Tadivalasa Chanti</strong>, Chanti Real Estate pioneers 100% legal clarity, VMRDA-approved masterplans, and high-appreciation coastal assets in Visakhapatnam.
          </p>
        </div>

        {/* ========================================================= */}
        {/* MAIN HERO PRESENTATION CARD (MATCHING TOP CARD IN REF)    */}
        {/* ========================================================= */}
        <div className="bg-[#24201D] rounded-[2rem] p-6 sm:p-10 border border-[#3D3631] shadow-2xl relative overflow-hidden text-amber-50 space-y-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Big Typography Section */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1">
                <p className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
                  Founder & Managing Director • Tadivalasa Chanti
                </p>
                <h1 className="text-5xl sm:text-7xl font-serif font-black tracking-tight text-[#F3E8DD] leading-none">
                  Real <br />
                  Estate
                </h1>
              </div>

              <p className="text-amber-200/90 text-sm sm:text-base font-light tracking-wide max-w-md leading-relaxed">
                Modern Real Estate Presentation Template & Architectural Excellence in Visakhapatnam
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById("slides-deck");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-6 py-3 rounded-full bg-[#B85D19] hover:bg-[#a04e12] text-white font-bold text-xs flex items-center gap-2 shadow-lg transition-all group"
                >
                  <span>Next Slides</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/60 border border-amber-500/30 text-xs text-amber-300">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>15+ Years Pioneering Vizag Real Estate</span>
                </div>
              </div>
            </div>

            {/* Right Large Framed Architectural Photograph */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#4A413A] shadow-2xl bg-slate-900 aspect-[4/3] lg:aspect-[3/4]">
                <img
                  src={poolInterior}
                  alt="Modern Real Estate Interior"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Overlaid Founder Portrait Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#1C1917]/95 backdrop-blur-md rounded-xl border border-amber-500/40 flex items-center gap-3">
                  <img
                    src={founderImage}
                    alt="Tadivalasa Chanti"
                    className="w-12 h-12 rounded-lg object-cover border border-amber-400 shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-xs font-serif font-bold text-amber-300">Tadivalasa Chanti</h4>
                    <p className="text-[10px] text-slate-300 font-mono">Founder & Managing Director</p>
                    <p className="text-[9px] text-amber-400/80">Chanti Real Estate Vizag</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* ========================================================= */}
        {/* PRESENTATION SLIDES GRID (MATCHING 8 SLIDES IN REFERENCE)  */}
        {/* ========================================================= */}
        <div id="slides-deck" className="space-y-6 pt-4">
          
          <div className="flex items-center justify-between pb-2 border-b border-amber-500/30 text-amber-100">
            <h3 className="text-xl font-serif font-bold flex items-center gap-2">
              <Layers className="w-5 h-5 text-amber-400" />
              <span>Chanti Real Estate Portfolio Slide Deck</span>
            </h3>
            <span className="text-xs font-mono text-amber-200">8 Presentation Slides</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* ======================================================= */}
            {/* SLIDE 1: FROM VISION TO PROPERTY                        */}
            {/* ======================================================= */}
            <div className="bg-[#1F1C19] rounded-2xl p-5 border border-[#3A332C] shadow-xl text-amber-50 space-y-4 flex flex-col justify-between">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between text-[10px] font-mono text-amber-300/80 border-b border-slate-800 pb-2">
                <span>Real Estate</span>
                <span>Presentation Template</span>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span className="w-2 h-2 rounded-full bg-slate-600" />
                  <span className="w-2 h-2 rounded-full bg-slate-600" />
                </div>
              </div>

              {/* Title */}
              <h4 className="text-2xl font-serif font-bold text-[#F3E8DD]">
                From Vision to Property
              </h4>

              {/* 3 Thumbnail Images Row */}
              <div className="grid grid-cols-3 gap-2">
                <div className="space-y-1">
                  <div className="rounded-lg overflow-hidden h-16 border border-slate-700">
                    <img src={luxuryVilla} alt="Option One" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <p className="text-[9px] font-mono text-slate-400 text-center">Option One</p>
                </div>

                <div className="space-y-1">
                  <div className="rounded-lg overflow-hidden h-16 border border-slate-700">
                    <img src={heroVizag} alt="Option Two" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <p className="text-[9px] font-mono text-slate-400 text-center">Option Two</p>
                </div>

                <div className="space-y-1">
                  <div className="rounded-lg overflow-hidden h-16 border border-slate-700">
                    <img src={gatedCommunity} alt="Option Three" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <p className="text-[9px] font-mono text-slate-400 text-center">Option Three</p>
                </div>
              </div>

              {/* Stat & Description Footer */}
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between gap-4">
                <div className="text-left">
                  <span className="text-3xl font-serif font-extrabold text-amber-400 font-mono">₹ 850 Cr+</span>
                  <p className="text-[10px] text-slate-400">Total Portfolio Value Handled</p>
                </div>
                <p className="text-[10px] text-slate-300 max-w-[200px] text-right leading-tight">
                  Tadivalasa Chanti's visionary trajectory in turning raw coastal land into prime assets.
                </p>
              </div>

            </div>

            {/* ======================================================= */}
            {/* SLIDE 2: COMFORT SPACE, MINIMALIST LOOK                 */}
            {/* ======================================================= */}
            <div className="bg-[#1F1C19] rounded-2xl p-5 border border-[#3A332C] shadow-xl text-amber-50 space-y-4 flex flex-col justify-between">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between text-[10px] font-mono text-amber-300/80 border-b border-slate-800 pb-2">
                <span>Presentation Template</span>
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">Slide 02</span>
              </div>

              <div className="grid grid-cols-12 gap-3 items-center">
                {/* Image Left */}
                <div className="col-span-5 rounded-xl overflow-hidden h-36 border border-slate-700">
                  <img src={woodInterior} alt="Comfort Space" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>

                {/* Content Right */}
                <div className="col-span-7 space-y-2">
                  <h4 className="text-lg font-serif font-bold text-[#F3E8DD] leading-tight">
                    Comfort Space, Minimalist Look
                  </h4>

                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                    <p className="text-[11px] font-bold text-amber-300 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-400" /> Innovative Designs
                    </p>
                    <p className="text-[10px] text-slate-300 leading-snug">
                      100% VMRDA & GVMC layout certifications. Designed with sustainable materials & Vastu alignment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
                <span>Visakhapatnam Premier Architecture</span>
                <span className="text-amber-400 font-bold">100% Clear Titles</span>
              </div>

            </div>

            {/* ======================================================= */}
            {/* SLIDE 3: COMFORT SPACE, MINIMALIST LOOK (VARIANT 2)     */}
            {/* ======================================================= */}
            <div className="bg-[#1F1C19] rounded-2xl p-5 border border-[#3A332C] shadow-xl text-amber-50 space-y-4 flex flex-col justify-between">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between text-[10px] font-mono text-amber-300/80 border-b border-slate-800 pb-2">
                <span>Real Estate</span>
                <span>Presentation Template</span>
              </div>

              {/* Pool Banner Image */}
              <div className="rounded-xl overflow-hidden h-24 border border-slate-700 relative">
                <img src={poolInterior} alt="Pool Terrace" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent flex items-center px-4">
                  <span className="text-xs font-serif font-bold text-amber-300">Comfort Space & Elegance</span>
                </div>
              </div>

              {/* 2 Options Column */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div 
                  onClick={() => setSelectedOption("Option One")}
                  className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                    selectedOption === "Option One"
                      ? "bg-amber-500/20 border-amber-400 text-white"
                      : "bg-slate-900 border-slate-800 text-slate-400"
                  }`}
                >
                  <p className="font-bold text-[11px] text-amber-300">Option One</p>
                  <p className="text-[10px] mt-0.5">100% Legal Clear Title Audit for every plot & home.</p>
                </div>

                <div 
                  onClick={() => setSelectedOption("Option Two")}
                  className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                    selectedOption === "Option Two"
                      ? "bg-amber-500/20 border-amber-400 text-white"
                      : "bg-slate-900 border-slate-800 text-slate-400"
                  }`}
                >
                  <p className="font-bold text-[11px] text-amber-300">Option Two</p>
                  <p className="text-[10px] mt-0.5">Zero Hidden Charges with full registration assistance.</p>
                </div>
              </div>

            </div>

            {/* ======================================================= */}
            {/* SLIDE 4: FROM PRIME LOCATIONS TO PERFECT DESIGNS        */}
            {/* ======================================================= */}
            <div className="bg-[#1F1C19] rounded-2xl p-5 border border-[#3A332C] shadow-xl text-amber-50 space-y-4 flex flex-col justify-between">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between text-[10px] font-mono text-amber-300/80 border-b border-slate-800 pb-2">
                <span>Real Estate</span>
                <span>Presentation Template</span>
              </div>

              <div className="grid grid-cols-12 gap-3 items-center">
                <div className="col-span-6 space-y-2">
                  <h4 className="text-lg font-serif font-bold text-[#F3E8DD] leading-tight">
                    From Prime Locations to Perfect Designs
                  </h4>
                  <p className="text-[10px] text-slate-300 leading-relaxed">
                    Beach Road, Rushikonda, MVP Colony & Bheemili prime coastal corridors.
                  </p>
                </div>

                <div className="col-span-6 grid grid-cols-2 gap-1.5">
                  <div className="rounded-lg overflow-hidden h-24 border border-slate-700">
                    <img src={curvedTower} alt="Skyline" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="rounded-lg overflow-hidden h-24 border border-slate-700">
                    <img src={modernGlassVilla} alt="Glass Villa" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>

              <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-[10px] text-amber-300 font-mono text-center">
                High Appreciation Corridors • VMRDA Sanctioned
              </div>

            </div>

            {/* ======================================================= */}
            {/* SLIDE 5: COMMERCIAL SPACE & LUXURY ESTATES               */}
            {/* ======================================================= */}
            <div className="bg-[#1F1C19] rounded-2xl p-5 border border-[#3A332C] shadow-xl text-amber-50 space-y-4 flex flex-col justify-between">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between text-[10px] font-mono text-amber-300/80 border-b border-slate-800 pb-2">
                <span>Presentation Template</span>
                <span className="text-amber-400 font-bold">+140 Projects</span>
              </div>

              <div className="space-y-1">
                <h4 className="text-2xl font-serif font-bold text-[#F3E8DD]">
                  Commercial Space & Luxury Estates
                </h4>
                <p className="text-[11px] text-slate-300">
                  Over 140 commercial spaces, penthouses, and gated layouts handed over in Visakhapatnam.
                </p>
              </div>

              <div className="rounded-xl overflow-hidden h-28 border border-slate-700 relative">
                <img src={patioSunset} alt="Patio Sunset" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-xs font-mono font-bold text-amber-300">+140 Projects Handed Over</span>
                </div>
              </div>

            </div>

            {/* ======================================================= */}
            {/* SLIDE 6: TURNING LOCATIONS INTO LEGACIES               */}
            {/* ======================================================= */}
            <div className="bg-[#1F1C19] rounded-2xl p-5 border border-[#3A332C] shadow-xl text-amber-50 space-y-4 flex flex-col justify-between">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between text-[10px] font-mono text-amber-300/80 border-b border-slate-800 pb-2">
                <span>Real Estate</span>
                <span>Presentation Template</span>
              </div>

              <div className="grid grid-cols-12 gap-3 items-center">
                <div className="col-span-6 space-y-2">
                  <h4 className="text-lg font-serif font-bold text-[#F3E8DD] leading-tight">
                    Turning Locations into Legacies, One Home at a Time
                  </h4>
                  <p className="text-[10px] text-slate-300">
                    Trusted by 500+ families and NRI investors worldwide.
                  </p>
                </div>

                {/* Stacked Subtitle 01, 02, 03 */}
                <div className="col-span-6 space-y-1.5 text-[10px]">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <p className="font-bold text-amber-300">01. VMRDA Approved</p>
                    <p className="text-slate-400 text-[9px]">100% legal clear title guarantee.</p>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <p className="font-bold text-amber-300">02. Strategic Growth</p>
                    <p className="text-slate-400 text-[9px]">High ROI in Beach Road & Rushikonda.</p>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <p className="font-bold text-amber-300">03. Full Assistance</p>
                    <p className="text-slate-400 text-[9px]">Bank loans & hassle-free registration.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* ======================================================= */}
            {/* SLIDE 7: WHERE EVERY DETAIL TELLS A STORY               */}
            {/* ======================================================= */}
            <div className="bg-[#1F1C19] rounded-2xl p-5 border border-[#3A332C] shadow-xl text-amber-50 space-y-4 flex flex-col justify-between">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between text-[10px] font-mono text-amber-300/80 border-b border-slate-800 pb-2">
                <span>Real Estate</span>
                <span>Presentation Template</span>
              </div>

              <h4 className="text-2xl font-serif font-bold text-[#F3E8DD]">
                Where Every Detail Tells a Story
              </h4>

              {/* 2 Stat Boxes */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-[#2A2521] border border-[#423A34] text-center space-y-1">
                  <span className="text-3xl font-serif font-extrabold text-amber-400 font-mono">128+</span>
                  <p className="text-[11px] font-bold text-amber-100">Key Clients</p>
                  <p className="text-[9px] text-slate-400">High-net-worth investors & homebuyers.</p>
                </div>

                <div className="p-4 rounded-xl bg-[#2A2521] border border-[#423A34] text-center space-y-1">
                  <span className="text-3xl font-serif font-extrabold text-amber-400 font-mono">74%</span>
                  <p className="text-[11px] font-bold text-amber-100">NRI Portfolio</p>
                  <p className="text-[9px] text-slate-400">Trusted remote investment desk.</p>
                </div>
              </div>

            </div>

            {/* ======================================================= */}
            {/* SLIDE 8: YOUR HOME, YOUR HAVEN                          */}
            {/* ======================================================= */}
            <div className="bg-[#1F1C19] rounded-2xl p-5 border border-[#3A332C] shadow-xl text-amber-50 space-y-4 flex flex-col justify-between">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between text-[10px] font-mono text-amber-300/80 border-b border-slate-800 pb-2">
                <span>Real Estate</span>
                <span>Presentation Template</span>
              </div>

              <div className="space-y-1">
                <h4 className="text-2xl font-serif font-bold text-[#F3E8DD]">
                  Your Home, Your Haven
                </h4>
                <p className="text-[11px] text-slate-300">
                  Lorem ipsum is simply dummy text of the printing and typesetting industry. Chanti Real Estate brings peace of mind to home ownership in Vizag.
                </p>
              </div>

              <div className="rounded-xl overflow-hidden h-24 border border-slate-700 relative">
                <img src={modernGlassVilla} alt="Your Home Haven" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent flex items-center p-4">
                  <button className="px-4 py-1.5 rounded-full bg-amber-500 text-slate-950 font-bold text-xs shadow hover:bg-amber-400 transition-all">
                    Inquire Now
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Quote Block Footer */}
        <div className="p-6 rounded-2xl bg-[#24201D] border border-[#3D3631] text-amber-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1 max-w-2xl">
            <h4 className="font-serif font-bold text-lg text-amber-300">
              "Building Trust & Legal Transparency Across Visakhapatnam"
            </h4>
            <p className="text-xs text-slate-300">
              Direct consultation with Tadivalasa Chanti & legal team for land titles, layout permissions, and registration.
            </p>
          </div>
          <a
            href="tel:+919876543210"
            className="px-6 py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-all shadow-lg shrink-0"
          >
            Schedule Founder Call
          </a>
        </div>

      </div>
    </section>
  );
};
