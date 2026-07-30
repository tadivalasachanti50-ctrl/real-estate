import React, { useState } from "react";
import { 
  Building2, 
  MapPin, 
  Calculator, 
  Sparkles, 
  CheckCircle2, 
  Phone,
  Search,
  Calendar,
  Download,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  SlidersHorizontal,
  ChevronDown,
  Bed,
  Bath,
  Maximize2,
  Send,
  Info,
  ShieldCheck,
  AlertCircle,
  HelpCircle,
  FileSpreadsheet
} from "lucide-react";

export const PropertyValuationTool: React.FC = () => {
  // Interactive valuation state
  const [locality, setLocality] = useState<string>("Beach Road");
  const [propertyType, setPropertyType] = useState<string>("Apartment");
  const [sizeSqFt, setSizeSqFt] = useState<number>(1800);
  const [propertyAge, setPropertyAge] = useState<string>("0-3");
  const [dateRange, setDateRange] = useState<string>("May 5 - June 5, 2026");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // AI Chat state
  const [aiPrompt, setAiPrompt] = useState<string>("");
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState<boolean>(false);

  // Calculate live dynamic rate per sqft & overall value
  const getBaseRate = () => {
    let base = 6500;
    if (locality === "Beach Road") base = 11500;
    else if (locality === "Rushikonda") base = 8200;
    else if (locality === "MVP Colony") base = 7500;
    else if (locality === "Madhurawada") base = 5800;
    else if (locality === "Bheemili") base = 3500;
    else if (locality === "Kapuluppada") base = 4200;
    else if (locality === "Waltair Uplands") base = 10800;

    if (propertyType === "Villa") base *= 1.25;
    if (propertyType === "Penthouse") base *= 1.35;
    if (propertyType === "VMRDA Plot") base *= 0.85;

    if (propertyAge === "3-7") base *= 0.92;
    if (propertyAge === "7+") base *= 0.84;

    return Math.round(base);
  };

  const ratePerSqFt = getBaseRate();
  const estimatedTotalValuation = Math.round((sizeSqFt * ratePerSqFt) / 100000); // in Lakhs
  const estimatedTotalCr = (estimatedTotalValuation / 100).toFixed(2);
  const estimatedRentMonthly = Math.round((sizeSqFt * ratePerSqFt * 0.003)); // approx monthly rental return
  const estimatedRoiAnnual = (7.8 + (locality === "Beach Road" ? 4.2 : 2.5)).toFixed(1);

  const handleAiSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiPrompt.trim()) return;
    
    setIsAiLoading(true);
    setTimeout(() => {
      setAiResponse(
        `Based on VMRDA 2026 circle rates and recent land registry data for ${locality}, a ${sizeSqFt} sq.ft ${propertyType} is currently appreciating at ${estimatedRoiAnnual}% annually. Expected 3-year resale capital appreciation: +₹ ${(Number(estimatedTotalCr) * 0.32).toFixed(2)} Cr.`
      );
      setIsAiLoading(false);
    }, 600);
  };

  return (
    <section id="valuation" className="py-16 bg-slate-950 text-slate-900 font-sans border-t border-slate-900 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Outer Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI-Powered Market Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-tight uppercase">
            VIZAG PROPERTY <br />
            <span className="italic font-normal text-amber-300 capitalize text-2xl sm:text-4xl">
              Valuation & Market Analytics Board
            </span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Real-time sub-registrar land benchmarks, rental yield calculations, and FSI index statistics for Visakhapatnam.
          </p>
        </div>

        {/* ========================================================= */}
        {/* DASHBOARD CONTAINER (MATCHING REFERENCE DESIGN) */}
        {/* ========================================================= */}
        <div className="bg-[#F8FAFC] rounded-[2.5rem] p-4 sm:p-8 border border-slate-200 shadow-2xl space-y-6 text-slate-800">
          
          {/* TOP BAR: Overview Title + Search + Date + Export */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-4 border-b border-slate-200/80">
            
            {/* Title */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-800 text-white flex items-center justify-center font-bold shadow-md">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">Overview</h3>
                <p className="text-xs text-slate-500">Live Vizag Sub-Registrar Benchmark Rates</p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex flex-wrap items-center gap-3 text-xs">
              
              {/* Search */}
              <div className="relative flex-1 sm:w-64">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Search property here..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-600/20"
                />
              </div>

              {/* Date Selector */}
              <div className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-xl text-slate-700 font-medium">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                <span>{dateRange}</span>
              </div>

              {/* Export Report Button */}
              <button
                onClick={() => alert("Downloading official Vizag VMRDA Valuation Report PDF...")}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0F5A5C] hover:bg-[#0B484A] text-white font-bold transition-all shadow-md"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Report</span>
              </button>

            </div>

          </div>

          {/* ========================================================= */}
          {/* TOP 4 METRIC CARDS ROW (MATCHING REFERENCE DESIGN) */}
          {/* ========================================================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Card 1: Total Properties */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-sm space-y-3 relative overflow-hidden">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-slate-600">Total Properties Evaluated</span>
                <span className="inline-flex items-center gap-0.5 text-rose-500 font-bold">
                  3.05 <TrendingDown className="w-3 h-3" />
                </span>
              </div>

              <div className="flex items-baseline justify-between">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">5,569</span>
                
                {/* Mini Bar Preview */}
                <div className="flex items-end gap-1 h-8">
                  <span className="w-1.5 h-4 bg-rose-200 rounded-t" />
                  <span className="w-1.5 h-6 bg-rose-400 rounded-t" />
                  <span className="w-1.5 h-8 bg-rose-500 rounded-t" />
                  <span className="w-1.5 h-5 bg-rose-300 rounded-t" />
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] pt-1 border-t border-slate-100">
                <span className="text-rose-500 font-medium">-1k From last month</span>
                <button className="text-teal-700 font-bold hover:underline">View More</button>
              </div>
            </div>

            {/* Card 2: Total Rent */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-sm space-y-3 relative overflow-hidden">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-slate-600">Avg Monthly Rent</span>
                <span className="inline-flex items-center gap-0.5 text-teal-600 font-bold">
                  3.05 <TrendingUp className="w-3 h-3" />
                </span>
              </div>

              <div className="flex items-baseline justify-between">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">₹ {estimatedRentMonthly.toLocaleString()}</span>
                
                {/* Circular Gauge Graphic */}
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <svg className="w-8 h-8 transform -rotate-90">
                    <circle cx="16" cy="16" r="12" stroke="#E2E8F0" strokeWidth="3" fill="transparent" />
                    <circle cx="16" cy="16" r="12" stroke="#0F5A5C" strokeWidth="3" fill="transparent" strokeDasharray="75" strokeDashoffset="25" />
                  </svg>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] pt-1 border-t border-slate-100">
                <span className="text-teal-600 font-medium">+2.7k From last month</span>
                <button className="text-teal-700 font-bold hover:underline">View More</button>
              </div>
            </div>

            {/* Card 3: Total Sale */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-sm space-y-3 relative overflow-hidden">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-slate-600">Recent Land Sales</span>
                <span className="inline-flex items-center gap-0.5 text-teal-600 font-bold">
                  3.05 <TrendingUp className="w-3 h-3" />
                </span>
              </div>

              <div className="flex items-baseline justify-between">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">5,000</span>
                
                {/* Mini Orange/Teal Bar Preview */}
                <div className="flex items-end gap-1 h-8">
                  <span className="w-1.5 h-3 bg-amber-200 rounded-t" />
                  <span className="w-1.5 h-5 bg-amber-400 rounded-t" />
                  <span className="w-1.5 h-8 bg-amber-500 rounded-t" />
                  <span className="w-1.5 h-6 bg-teal-600 rounded-t" />
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] pt-1 border-t border-slate-100">
                <span className="text-teal-600 font-medium">+5k this month</span>
                <button className="text-teal-700 font-bold hover:underline">View More</button>
              </div>
            </div>

            {/* Card 4: Estimated ROI / Total Valuation */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-sm space-y-3 relative overflow-hidden">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-slate-600">Calculated Market Value</span>
                <span className="inline-flex items-center gap-0.5 text-teal-600 font-bold">
                  3.05 <TrendingUp className="w-3 h-3" />
                </span>
              </div>

              <div className="flex items-baseline justify-between">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#0F5A5C] tracking-tight">
                  ₹ {estimatedTotalCr} Cr
                </span>
                
                {/* Circular Gauge Graphic */}
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <svg className="w-8 h-8 transform -rotate-90">
                    <circle cx="16" cy="16" r="12" stroke="#E2E8F0" strokeWidth="3" fill="transparent" />
                    <circle cx="16" cy="16" r="12" stroke="#F59E0B" strokeWidth="3" fill="transparent" strokeDasharray="75" strokeDashoffset="18" />
                  </svg>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] pt-1 border-t border-slate-100">
                <span className="text-teal-600 font-medium">+{estimatedRoiAnnual}% ROI p.a.</span>
                <button className="text-teal-700 font-bold hover:underline">View More</button>
              </div>
            </div>

          </div>

          {/* ========================================================= */}
          {/* TEAL ALERT STRIP (MATCHING REFERENCE DESIGN) */}
          {/* ========================================================= */}
          <div className="bg-[#0F5A5C] text-white rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-amber-300" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs sm:text-sm font-bold tracking-tight">
                  74 VMRDA Layout & Land Title Submissions Recently Updated for {locality}!
                </h4>
                <p className="text-[11px] text-teal-100/80">
                  New sub-registrar land valuation records published. Review benchmark prices before finalizing sales.
                </p>
              </div>
            </div>

            <button
              onClick={() => alert(`Reviewing latest VMRDA Layout records for ${locality}...`)}
              className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-[#0F5A5C] font-extrabold text-xs tracking-wider shrink-0 shadow-md transition-all"
            >
              Review Listings
            </button>

          </div>

          {/* ========================================================= */}
          {/* MIDDLE ROW: CALCULATOR & TREND GRAPH + GROWTH STATS */}
          {/* ========================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left: Interactive Calculator & Price Trends (8 Cols) */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-sm space-y-6 flex flex-col justify-between">
              
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">Vizag Property Valuation Calculator & Trends</h3>
                  <p className="text-xs text-slate-500">Adjust parameters to recalculate benchmark value</p>
                </div>
                
                <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg w-fit">
                  <span>Locality Trend: <strong>Last 12 Months</strong></span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Form Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                
                {/* Locality */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Locality in Vizag</label>
                  <select
                    value={locality}
                    onChange={(e) => setLocality(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-600/30"
                  >
                    <option value="Beach Road">Beach Road & RK Beach</option>
                    <option value="Rushikonda">Rushikonda IT Hill</option>
                    <option value="MVP Colony">MVP Colony</option>
                    <option value="Madhurawada">Madhurawada</option>
                    <option value="Bheemili">Bheemili Coastal Belt</option>
                    <option value="Kapuluppada">Kapuluppada SEZ Zone</option>
                    <option value="Waltair Uplands">Waltair Uplands</option>
                  </select>
                </div>

                {/* Property Category */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Property Type</label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-600/30"
                  >
                    <option value="Apartment">Apartment / Flat</option>
                    <option value="Villa">Independent Villa</option>
                    <option value="Penthouse">Penthouse</option>
                    <option value="VMRDA Plot">VMRDA Open Plot</option>
                  </select>
                </div>

                {/* Area Sq.Ft */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Area (Sq.Ft / Sq.Yds)</label>
                  <input
                    type="number"
                    value={sizeSqFt}
                    onChange={(e) => setSizeSqFt(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs font-bold text-slate-900 font-mono focus:outline-none focus:ring-2 focus:ring-teal-600/30"
                  />
                </div>

                {/* Property Age */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Construction Age</label>
                  <select
                    value={propertyAge}
                    onChange={(e) => setPropertyAge(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-600/30"
                  >
                    <option value="0-3">Brand New (0-3 Yrs)</option>
                    <option value="3-7">Moderately New (3-7 Yrs)</option>
                    <option value="7+">Established (7+ Yrs)</option>
                  </select>
                </div>

              </div>

              {/* Multi-colored Line Graph SVG */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold">Appreciation Trend Chart (2022 - 2026)</span>
                  <span className="font-mono text-teal-700 font-bold">Avg ₹ {ratePerSqFt.toLocaleString()} / sq.ft</span>
                </div>

                <div className="w-full h-32 relative bg-slate-50/50 rounded-xl p-2 border border-slate-100 flex items-center justify-center">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 400 100" preserveAspectRatio="none">
                    {/* Grid lines */}
                    <line x1="0" y1="20" x2="400" y2="20" stroke="#E2E8F0" strokeDasharray="3 3" />
                    <line x1="0" y1="50" x2="400" y2="50" stroke="#E2E8F0" strokeDasharray="3 3" />
                    <line x1="0" y1="80" x2="400" y2="80" stroke="#E2E8F0" strokeDasharray="3 3" />

                    {/* Smooth Multi Lines matching reference */}
                    <path
                      d="M 0 70 Q 100 20 200 60 T 400 30"
                      fill="none"
                      stroke="#F59E0B"
                      strokeWidth="3"
                    />
                    <path
                      d="M 0 50 Q 120 80 240 30 T 400 15"
                      fill="none"
                      stroke="#0F5A5C"
                      strokeWidth="3"
                    />
                    <path
                      d="M 0 30 Q 80 40 180 20 T 400 45"
                      fill="none"
                      stroke="#64748B"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                  </svg>
                </div>
              </div>

              {/* Bottom Metrics Bar matching reference */}
              <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-100 text-left">
                <div>
                  <p className="text-[10px] text-slate-500 font-medium uppercase">Total Valuation</p>
                  <p className="text-sm font-extrabold text-slate-900 font-mono">₹ {estimatedTotalValuation} Lakhs</p>
                  <span className="text-[10px] text-teal-600 font-semibold inline-flex items-center gap-0.5">
                    3.05 <TrendingUp className="w-2.5 h-2.5" />
                  </span>
                </div>

                <div>
                  <p className="text-[10px] text-slate-500 font-medium uppercase">Est. Monthly Rent</p>
                  <p className="text-sm font-extrabold text-slate-900 font-mono">₹ {estimatedRentMonthly.toLocaleString()}</p>
                  <span className="text-[10px] text-teal-600 font-semibold inline-flex items-center gap-0.5">
                    3.05 <TrendingUp className="w-2.5 h-2.5" />
                  </span>
                </div>

                <div>
                  <p className="text-[10px] text-slate-500 font-medium uppercase">Avg Price / Sq.Ft</p>
                  <p className="text-sm font-extrabold text-slate-900 font-mono">₹ {ratePerSqFt.toLocaleString()}</p>
                  <span className="text-[10px] text-rose-500 font-semibold inline-flex items-center gap-0.5">
                    1.05 <TrendingDown className="w-2.5 h-2.5" />
                  </span>
                </div>
              </div>

            </div>

            {/* Right: Growth Statistics (5 Cols) */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-sm space-y-6 flex flex-col justify-between">
              
              {/* Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">Growth Statistics</h3>
                <span className="text-xs text-teal-700 bg-teal-50 font-bold px-2.5 py-1 rounded-md">Yearly</span>
              </div>

              {/* Big Revenue Stat */}
              <div className="space-y-1">
                <p className="text-xs text-slate-500 font-medium">Total Land & Property Growth</p>
                <p className="text-3xl sm:text-4xl font-extrabold text-[#0F5A5C] font-mono tracking-tight">
                  ₹ {(Number(estimatedTotalCr) * 1.48).toFixed(2)} Cr
                </p>
              </div>

              {/* Legend */}
              <div className="flex items-center gap-4 text-xs font-semibold text-slate-600">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-amber-500" />
                  <span>Property Sale</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-teal-700" />
                  <span>Property Rent</span>
                </div>
              </div>

              {/* Bar Chart Breakdown matching reference (Q1, Q2, Q3, Q4) */}
              <div className="grid grid-cols-4 gap-3 items-end h-40 pt-4 bg-slate-50/60 p-3 rounded-xl border border-slate-100">
                
                {/* Q1 */}
                <div className="flex flex-col items-center gap-2 h-full justify-end">
                  <div className="w-full flex items-end gap-1 justify-center h-28">
                    <div className="w-3.5 bg-slate-300 rounded-t h-16" />
                    <div className="w-3.5 bg-amber-500 rounded-t h-20" />
                  </div>
                  <span className="text-[10px] text-slate-500 font-bold">Q1</span>
                </div>

                {/* Q2 */}
                <div className="flex flex-col items-center gap-2 h-full justify-end">
                  <div className="w-full flex items-end gap-1 justify-center h-28">
                    <div className="w-3.5 bg-teal-700 rounded-t h-24" />
                    <div className="w-3.5 bg-amber-500 rounded-t h-28" />
                  </div>
                  <span className="text-[10px] text-slate-500 font-bold">Q2</span>
                </div>

                {/* Q3 */}
                <div className="flex flex-col items-center gap-2 h-full justify-end">
                  <div className="w-full flex items-end gap-1 justify-center h-28">
                    <div className="w-3.5 bg-slate-300 rounded-t h-12" />
                    <div className="w-3.5 bg-amber-500 rounded-t h-18" />
                  </div>
                  <span className="text-[10px] text-slate-500 font-bold">Q3</span>
                </div>

                {/* Q4 */}
                <div className="flex flex-col items-center gap-2 h-full justify-end">
                  <div className="w-full flex items-end gap-1 justify-center h-28">
                    <div className="w-3.5 bg-teal-700 rounded-t h-22" />
                    <div className="w-3.5 bg-amber-500 rounded-t h-26" />
                  </div>
                  <span className="text-[10px] text-slate-500 font-bold">Q4</span>
                </div>

              </div>

              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/60 text-xs text-amber-900 flex items-center gap-2">
                <Info className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Bhogapuram airport corridor projected +18% peak growth in Q4.</span>
              </div>

            </div>

          </div>

          {/* ========================================================= */}
          {/* BOTTOM ROW: LISTING BOARD & AI SUGGESTION DARK CARD */}
          {/* ========================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left: Benchmark Listing Board (8 Cols) */}
            <div className="lg:col-span-8 bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-sm space-y-4">
              
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">Benchmark Listing Board</h3>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                    Newly added
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <button className="text-slate-500 hover:text-slate-800 hidden sm:inline-block">Recent Listed v</button>
                  <button className="text-teal-700 font-bold hover:underline">View All Listings</button>
                </div>
              </div>

              {/* 3 Cards Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                {/* Card 1 */}
                <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200/80 hover:shadow-md transition-all text-left">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
                    alt="Luxury Apartment"
                    className="w-full h-28 object-cover"
                  />
                  <div className="p-3 space-y-1.5">
                    <h4 className="font-bold text-xs text-slate-900 truncate">Beachfront Luxury Flat</h4>
                    <p className="text-[10px] text-slate-500 truncate">Beach Road, Visakhapatnam</p>
                    <p className="text-xs font-extrabold text-amber-600">₹ 1.85 Cr <span className="text-[10px] text-slate-400 font-normal">/ sale</span></p>
                    <div className="flex items-center gap-2 text-[10px] text-slate-500 pt-1 border-t border-slate-200 font-mono">
                      <span>3 Beds</span> • <span>3 Bath</span> • <span>2,100 sqft</span>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200/80 hover:shadow-md transition-all text-left">
                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80"
                    alt="Rushikonda Villa"
                    className="w-full h-28 object-cover"
                  />
                  <div className="p-3 space-y-1.5">
                    <h4 className="font-bold text-xs text-slate-900 truncate">Sea View Hilltop Villa</h4>
                    <p className="text-[10px] text-slate-500 truncate">Rushikonda IT Hill, Vizag</p>
                    <p className="text-xs font-extrabold text-amber-600">₹ 3.25 Cr <span className="text-[10px] text-slate-400 font-normal">/ sale</span></p>
                    <div className="flex items-center gap-2 text-[10px] text-slate-500 pt-1 border-t border-slate-200 font-mono">
                      <span>4 Beds</span> • <span>4 Bath</span> • <span>3,500 sqft</span>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200/80 hover:shadow-md transition-all text-left">
                  <img
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80"
                    alt="VMRDA Plot"
                    className="w-full h-28 object-cover"
                  />
                  <div className="p-3 space-y-1.5">
                    <h4 className="font-bold text-xs text-slate-900 truncate">VMRDA Gated Layout</h4>
                    <p className="text-[10px] text-slate-500 truncate">Bheemili Corridor, Vizag</p>
                    <p className="text-xs font-extrabold text-amber-600">₹ 45 Lakhs <span className="text-[10px] text-slate-400 font-normal">/ plot</span></p>
                    <div className="flex items-center gap-2 text-[10px] text-slate-500 pt-1 border-t border-slate-200 font-mono">
                      <span>Plot</span> • <span>200 Sq.Yds</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Right: AI Suggestion Dark Card (4 Cols) */}
            <div className="lg:col-span-4 bg-[#081B1C] text-white rounded-2xl p-5 sm:p-6 border border-teal-800/60 shadow-xl space-y-4 flex flex-col justify-between relative overflow-hidden">
              
              {/* Background Wave Graphic */}
              <div className="absolute top-0 right-0 left-0 bottom-0 opacity-10 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,50 Q25,20 50,50 T100,50" fill="none" stroke="#F59E0B" strokeWidth="2" />
                  <path d="M0,70 Q25,40 50,70 T100,70" fill="none" stroke="#0F5A5C" strokeWidth="2" />
                </svg>
              </div>

              {/* Header */}
              <div className="relative z-10 flex items-center justify-between border-b border-teal-900/80 pb-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span className="font-bold text-xs tracking-wider uppercase text-amber-300">AI Suggestion Engine</span>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* Message Content */}
              <div className="relative z-10 space-y-2">
                <p className="text-xs sm:text-sm text-emerald-100 font-serif leading-relaxed">
                  "Hi Aman, based on recent transactions, your calculated market valuation for {locality} is up <strong className="text-amber-300">+{estimatedRoiAnnual}%</strong> standard p.a."
                </p>

                {aiResponse && (
                  <div className="p-3 bg-teal-950/80 rounded-xl border border-amber-500/30 text-xs text-amber-200 leading-relaxed font-sans">
                    {aiResponse}
                  </div>
                )}
              </div>

              {/* AI Interactive Prompt Input */}
              <form onSubmit={handleAiSubmit} className="relative z-10 space-y-2 pt-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Ask valuation question..."
                    value={aiPrompt}
                    onChange={(e) => setAiPrompt(e.target.value)}
                    className="w-full pl-3 pr-9 py-2.5 bg-teal-950/90 border border-teal-700/60 rounded-xl text-xs text-white placeholder-teal-400/60 focus:outline-none focus:border-amber-400"
                  />
                  <button
                    type="submit"
                    disabled={isAiLoading}
                    className="absolute right-2 top-2 p-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setAiPrompt("What is 3-year ROI in Rushikonda?");
                    }}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-teal-900/80 text-teal-300 border border-teal-700/60 hover:border-amber-400"
                  >
                    ROI in Rushikonda?
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setAiPrompt("VMRDA plot registration charges in Vizag?");
                    }}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-teal-900/80 text-teal-300 border border-teal-700/60 hover:border-amber-400"
                  >
                    Registration fees?
                  </button>
                </div>
              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
