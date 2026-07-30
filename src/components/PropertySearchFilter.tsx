import React from "react";
import { FilterState, PropertyPurpose } from "../types";
import { 
  Search, 
  ArrowUpDown, 
  RotateCcw, 
  ShieldCheck, 
  Compass,
  SlidersHorizontal 
} from "lucide-react";

interface PropertySearchFilterProps {
  filters: FilterState;
  onFilterChange: (updated: Partial<FilterState>) => void;
  onResetFilters: () => void;
  totalResults: number;
}

export const PropertySearchFilter: React.FC<PropertySearchFilterProps> = ({
  filters,
  onFilterChange,
  onResetFilters,
  totalResults
}) => {
  return (
    <div className="space-y-8 text-left mb-10">
      
      {/* ========================================================= */}
      {/* HEADER MATCHING REFERENCE DESIGN: WHICH OPTION is right for you? */}
      {/* ========================================================= */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-800">
        
        {/* Left: Title + Option Buttons */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-tight uppercase leading-tight">
            WHICH OPTION <br />
            <span className="italic font-normal text-amber-300 capitalize text-2xl sm:text-4xl">
              is right for you?
            </span>
          </h2>

          {/* Clean Rectangular Filter Tabs [ LIVE ] [ INVEST ] [ RENT ] */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <button
              onClick={() => onFilterChange({ purpose: "buy" })}
              className={`px-5 py-2 text-xs font-bold font-mono tracking-widest border transition-all rounded-lg uppercase ${
                filters.purpose === "buy" || filters.purpose === "all"
                  ? "bg-amber-500 text-slate-950 border-amber-500 shadow-lg"
                  : "bg-slate-900/80 text-slate-300 border-slate-700 hover:border-amber-400"
              }`}
            >
              LIVE (BUY)
            </button>

            <button
              onClick={() => onFilterChange({ purpose: "plot" })}
              className={`px-5 py-2 text-xs font-bold font-mono tracking-widest border transition-all rounded-lg uppercase ${
                filters.purpose === "plot"
                  ? "bg-amber-500 text-slate-950 border-amber-500 shadow-lg"
                  : "bg-slate-900/80 text-slate-300 border-slate-700 hover:border-amber-400"
              }`}
            >
              INVEST (PLOT)
            </button>

            <button
              onClick={() => onFilterChange({ purpose: "rent" })}
              className={`px-5 py-2 text-xs font-bold font-mono tracking-widest border transition-all rounded-lg uppercase ${
                filters.purpose === "rent"
                  ? "bg-amber-500 text-slate-950 border-amber-500 shadow-lg"
                  : "bg-slate-900/80 text-slate-300 border-slate-700 hover:border-amber-400"
              }`}
            >
              RENT / LEASE
            </button>

            {filters.purpose !== "all" && (
              <button
                onClick={() => onFilterChange({ purpose: "all" })}
                className="px-3 py-2 text-[11px] font-semibold text-amber-400 hover:underline"
              >
                View All
              </button>
            )}
          </div>
        </div>

        {/* Right: Subtitle explanation & count */}
        <div className="max-w-md space-y-2 lg:text-right">
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
            Select your goal and receive a curated selection of VMRDA-sanctioned beachfront villas, plots, and luxury penthouses tailored to your request.
          </p>
          <div className="text-xs font-mono text-amber-400">
            Showing <strong>{totalResults}</strong> curated properties in Visakhapatnam
          </div>
        </div>

      </div>

      {/* ========================================================= */}
      {/* DETAILED FILTER BAR (SEARCH, LOCALITY, BUDGET, SORT) */}
      {/* ========================================================= */}
      <div className="bg-slate-900 border border-slate-800 p-4 sm:p-5 rounded-2xl shadow-xl space-y-4">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          
          {/* Search Input */}
          <div className="lg:col-span-2 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search by name, locality (Beach Road, Rushikonda)..."
              value={filters.searchQuery}
              onChange={(e) => onFilterChange({ searchQuery: e.target.value })}
              className="w-full pl-10 pr-4 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white text-xs placeholder-slate-500 focus:outline-none focus:border-amber-400"
            />
          </div>

          {/* Locality Dropdown */}
          <div>
            <select
              value={filters.locality}
              onChange={(e) => onFilterChange({ locality: e.target.value })}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-amber-400"
            >
              <option value="all">All Locality Hotspots</option>
              <option value="Beach Road">Beach Road</option>
              <option value="Rushikonda">Rushikonda</option>
              <option value="Madhurawada">Madhurawada</option>
              <option value="Bheemili">Bheemili</option>
              <option value="MVP Colony">MVP Colony</option>
              <option value="Kapuluppada">Kapuluppada</option>
              <option value="Waltair Uplands">Waltair Uplands</option>
            </select>
          </div>

          {/* BHK Config */}
          <div>
            <select
              value={filters.bhk}
              onChange={(e) => onFilterChange({ bhk: e.target.value })}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-amber-400"
            >
              <option value="all">Any BHK Configuration</option>
              <option value="2">2 BHK</option>
              <option value="3">3 BHK</option>
              <option value="4">4 BHK & Penthouses</option>
            </select>
          </div>

          {/* Sort By */}
          <div>
            <select
              value={filters.sortBy}
              onChange={(e) => onFilterChange({ sortBy: e.target.value as any })}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
            >
              <option value="featured">Sort: Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>

        </div>

        {/* Checkboxes Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-800 text-xs text-slate-300">
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-1.5 cursor-pointer hover:text-amber-300">
              <input
                type="checkbox"
                checked={filters.vmrdaOnly}
                onChange={(e) => onFilterChange({ vmrdaOnly: e.target.checked })}
                className="accent-amber-500 w-4 h-4 rounded"
              />
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>VMRDA Sanctioned</span>
            </label>

            <label className="flex items-center gap-1.5 cursor-pointer hover:text-amber-300">
              <input
                type="checkbox"
                checked={filters.vastuOnly}
                onChange={(e) => onFilterChange({ vastuOnly: e.target.checked })}
                className="accent-amber-500 w-4 h-4 rounded"
              />
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span>100% Vastu</span>
            </label>
          </div>

          <button
            onClick={onResetFilters}
            className="text-amber-400 hover:text-amber-300 flex items-center gap-1 underline"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Filters</span>
          </button>
        </div>

      </div>

    </div>
  );
};
