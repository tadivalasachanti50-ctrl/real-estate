import React, { useState } from "react";
import { 
  Search, 
  MapPin, 
  Settings, 
  Building2, 
  Leaf, 
  Compass, 
  Award, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Layers,
  ChevronRight,
  Hexagon
} from "lucide-react";
import towersDuskImage from "../assets/images/hero_modern_towers_1784787886345.jpg";
import urbanSkylineImg from "../assets/images/home_urban_skyline_1784788609630.jpg";
import corporateHubImg from "../assets/images/home_corporate_hub_1784788625330.jpg";
import iconicTowerImg from "../assets/images/home_iconic_tower_1784788639305.jpg";
import { ChantiLogo } from "./ChantiLogo";
import { PropertyPurpose } from "../types";

interface HeroProps {
  onSearchSubmit: (filters: {
    purpose: PropertyPurpose | "all";
    locality: string;
    propertyType: string;
    priceRange: string;
  }) => void;
  onOpenSiteVisit: () => void;
  onOpenAIConcierge: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSearchSubmit,
  onOpenSiteVisit,
  onOpenAIConcierge
}) => {
  const [purpose, setPurpose] = useState<PropertyPurpose | "all">("buy");
  const [locality, setLocality] = useState<string>("all");
  const [propertyType, setPropertyType] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<string>("all");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit({
      purpose,
      locality,
      propertyType,
      priceRange
    });
    const propertiesSection = document.getElementById("properties");
    if (propertiesSection) {
      propertiesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="bg-[#0B1320] text-slate-100 font-sans selection:bg-blue-500 selection:text-white overflow-hidden">
      
      {/* ========================================================= */}
      {/* 1. TOP HERO BANNER (MATCHING REFERENCE DESIGN)            */}
      {/* ========================================================= */}
      <div className="relative min-h-[85vh] lg:min-h-[92vh] flex flex-col justify-between overflow-hidden">
        
        {/* Night Skyline Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={towersDuskImage}
            alt="Futuristic Infrastructure Towers Skyline"
            className="w-full h-full object-cover object-center filter brightness-[0.7] contrast-125"
            referrerPolicy="no-referrer"
          />
          {/* Deep Navy Radial & Vertical Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070D18] via-[#070D18]/80 to-[#070D18]/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070D18]/90 via-transparent to-[#0B1320]" />
        </div>

        {/* Top Header / Branding Bar */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 w-full flex items-center justify-between">
          {/* Logo Matching Reference */}
          <ChantiLogo variant="blue" iconSize="w-8 h-8" textSize="md" />

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSiteVisit}
              className="hidden sm:inline-flex px-4 py-2 rounded-lg bg-slate-900/60 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-700/80 backdrop-blur-md transition-all"
            >
              Book Site Visit
            </button>
            <button
              onClick={onOpenAIConcierge}
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-600/30 transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ask AI Advisor</span>
            </button>
          </div>
        </div>

        {/* Main Hero Typography & Call-To-Action (MATCHING REFERENCE) */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full my-auto text-left">
          <div className="max-w-2xl space-y-6">
            
            {/* Title Heading */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-extrabold text-white tracking-tight leading-[1.1] drop-shadow-lg">
              Engineering the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-white">
                Future of Infrastructure
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed max-w-lg">
              Innovative solutions to build a smarter tomorrow in Visakhapatnam. VMRDA approved layouts & premium coastal living.
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#properties"
                className="px-7 py-3 rounded-lg bg-[#3B82F6] hover:bg-blue-500 text-white font-medium text-sm tracking-wide shadow-lg shadow-blue-600/30 transition-all"
              >
                Learn More
              </a>
              <a
                href="#contact"
                className="px-7 py-3 rounded-lg bg-[#111A2E]/80 hover:bg-[#1A2642] text-slate-200 border border-slate-600/80 font-medium text-sm tracking-wide backdrop-blur-md transition-all"
              >
                Contact Us
              </a>
            </div>

          </div>
        </div>

        <div className="h-10 sm:h-16"></div>
      </div>

      {/* ========================================================= */}
      {/* 2. THREE FLOATING FEATURE CARDS (EXACT REFERENCE STYLE)   */}
      {/* ========================================================= */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* CARD 1: Advanced Engineering */}
          <div className="bg-[#111A2E]/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/60 shadow-2xl space-y-4 hover:border-blue-500/50 transition-all text-center sm:text-left group">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400 mx-auto sm:mx-0 group-hover:scale-110 transition-transform">
              <Settings className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-serif font-bold text-white tracking-tight">
                Advanced Engineering
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Forward-thinking technical expertise, complete title verification, and master plan execution.
              </p>
            </div>
          </div>

          {/* CARD 2: Infrastructure Development (ELEVATED HIGHLIGHTED) */}
          <div className="bg-[#15233D] backdrop-blur-2xl rounded-2xl p-8 border-2 border-blue-500/60 shadow-2xl space-y-4 text-center sm:text-left transform lg:-translate-y-3 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-400/30 flex items-center justify-center text-blue-300 mx-auto sm:mx-0 group-hover:scale-110 transition-transform">
              <Building2 className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-serif font-bold text-white tracking-tight">
                Infrastructure Development
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Modernize your built environment with VMRDA-sanctioned gated layouts and commercial hubs.
              </p>
            </div>
          </div>

          {/* CARD 3: Sustainable Solutions */}
          <div className="bg-[#111A2E]/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/60 shadow-2xl space-y-4 hover:border-blue-500/50 transition-all text-center sm:text-left group">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400 mx-auto sm:mx-0 group-hover:scale-110 transition-transform">
              <Leaf className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-serif font-bold text-white tracking-tight">
                Sustainable Solutions
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Eco-friendly and resilient coastal projects engineered for long-term appreciation.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. RECENT PROJECTS GRID (MATCHING REFERENCE DESIGN)       */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 space-y-10">
        
        {/* Section Heading */}
        <div className="text-left space-y-2">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Recent Projects
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Explore our iconic coastal developments and commercial enclaves in Visakhapatnam.
          </p>
        </div>

        {/* 3 Project Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Project 1: Urban Skyline */}
          <div className="group rounded-2xl bg-[#111A2E] border border-slate-800 overflow-hidden shadow-xl hover:border-blue-500/50 transition-all">
            <div className="relative h-60 overflow-hidden">
              <img
                src={urbanSkylineImg}
                alt="Urban Skyline"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320] via-transparent to-transparent" />
            </div>
            <div className="p-5 bg-[#0D1627] text-left border-t border-slate-800">
              <h3 className="text-base font-serif font-bold text-white tracking-wide">
                Urban Skyline
              </h3>
              <p className="text-xs text-slate-400 pt-1">
                Beach Road & RK Beach Enclave
              </p>
            </div>
          </div>

          {/* Project 2: Corporate Hub */}
          <div className="group rounded-2xl bg-[#111A2E] border border-slate-800 overflow-hidden shadow-xl hover:border-blue-500/50 transition-all">
            <div className="relative h-60 overflow-hidden">
              <img
                src={corporateHubImg}
                alt="Corporate Hub"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320] via-transparent to-transparent" />
            </div>
            <div className="p-5 bg-[#0D1627] text-left border-t border-slate-800">
              <h3 className="text-base font-serif font-bold text-white tracking-wide">
                Corporate Hub
              </h3>
              <p className="text-xs text-slate-400 pt-1">
                Rushikonda IT Corridor & SEZ
              </p>
            </div>
          </div>

          {/* Project 3: Iconic Tower */}
          <div className="group rounded-2xl bg-[#111A2E] border border-slate-800 overflow-hidden shadow-xl hover:border-blue-500/50 transition-all">
            <div className="relative h-60 overflow-hidden">
              <img
                src={iconicTowerImg}
                alt="Iconic Tower"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320] via-transparent to-transparent" />
            </div>
            <div className="p-5 bg-[#0D1627] text-left border-t border-slate-800">
              <h3 className="text-base font-serif font-bold text-white tracking-wide">
                Iconic Tower
              </h3>
              <p className="text-xs text-slate-400 pt-1">
                Siripuram Luxury Residential Spire
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* ========================================================= */}
      {/* 4. DRIVING EXCELLENCE & STATS COUNTERS (REFERENCE BOTTOM)  */}
      {/* ========================================================= */}
      <div className="border-t border-slate-800/80 bg-[#080E1A] py-16 sm:py-24 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-white tracking-tight">
              Driving Excellence in Infrastructure
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Delivering unmatched real estate development, VMRDA approvals, and legal verification across Visakhapatnam.
            </p>
          </div>

          {/* Metric Stats Counters */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-4 border-t border-slate-800/60">
            
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400">
                <Compass className="w-7 h-7" />
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-serif font-black text-white font-mono">
                  +300
                </div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-mono">
                  Projects Delivered
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400">
                <Award className="w-7 h-7" />
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-serif font-black text-white font-mono">
                  +25
                </div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-mono">
                  Years Legacy
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-serif font-black text-white font-mono">
                  +100
                </div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-mono">
                  VMRDA Sanctioned Layouts
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ========================================================= */}
      {/* 5. INTERACTIVE PROPERTY SEARCH BAR                        */}
      {/* ========================================================= */}
      <div className="bg-[#0D1627] py-12 border-t border-slate-800 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#131E33] p-6 sm:p-8 rounded-2xl border border-slate-700/80 shadow-2xl space-y-5">
            
            {/* Search Box Header with Logo & Brand Name */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-700/60 pb-4">
              <ChantiLogo variant="blue" iconSize="w-8 h-8" textSize="md" />

              <div className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2 font-mono bg-blue-950/80 px-3.5 py-1.5 rounded-lg border border-blue-800/60 shadow-inner">
                <Search className="w-4 h-4 text-blue-400" />
                <span>Search Portfolio</span>
              </div>
            </div>

            <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-1">
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Purpose</label>
                <select
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value as PropertyPurpose)}
                  className="w-full px-3 py-2 bg-[#0B1320] border border-slate-700 rounded-xl text-white text-xs focus:outline-none focus:border-blue-500"
                >
                  <option value="buy">Buy (Apartments/Villas)</option>
                  <option value="plot">Plot / VMRDA Land</option>
                  <option value="rent">Rent / Lease</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Locality</label>
                <select
                  value={locality}
                  onChange={(e) => setLocality(e.target.value)}
                  className="w-full px-3 py-2 bg-[#0B1320] border border-slate-700 rounded-xl text-white text-xs focus:outline-none focus:border-blue-500"
                >
                  <option value="all">All Locality Hotspots</option>
                  <option value="Beach Road">Beach Road & RK Beach</option>
                  <option value="Rushikonda">Rushikonda IT Corridor</option>
                  <option value="Madhurawada">Madhurawada</option>
                  <option value="Bheemili">Bheemili Coastal Highway</option>
                  <option value="MVP Colony">MVP Colony</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Property Type</label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full px-3 py-2 bg-[#0B1320] border border-slate-700 rounded-xl text-white text-xs focus:outline-none focus:border-blue-500"
                >
                  <option value="all">All Property Types</option>
                  <option value="Apartment">Apartment / Flat</option>
                  <option value="Villa">Independent Villa</option>
                  <option value="Penthouse">Sea View Penthouse</option>
                  <option value="VMRDA Plot">VMRDA Approved Plot</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Budget</label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-3 py-2 bg-[#0B1320] border border-slate-700 rounded-xl text-white text-xs focus:outline-none focus:border-blue-500"
                >
                  <option value="all">Any Budget</option>
                  <option value="under-50">Under ₹ 50 Lakhs</option>
                  <option value="50-100">₹ 50 Lakhs - ₹ 1 Cr</option>
                  <option value="100-200">₹ 1 Cr - ₹ 2 Cr</option>
                  <option value="200-plus">Above ₹ 2 Cr</option>
                </select>
              </div>

              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Filter Properties</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </section>
  );
};
