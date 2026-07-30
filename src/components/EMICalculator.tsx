import React, { useState } from "react";
import { 
  Calculator, 
  IndianRupee, 
  PieChart, 
  ShieldCheck, 
  PhoneCall, 
  Building2,
  Calendar,
  SlidersHorizontal,
  Banknote,
  TrendingUp,
  Percent,
  Coins,
  Building,
  Filter,
  Check,
  ChevronRight,
  Info
} from "lucide-react";

export const EMICalculator: React.FC = () => {
  // Primary interactive inputs
  const [propertyValue, setPropertyValue] = useState<number>(10000000); // 1 Crore
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20); // 20%
  const [interestRate, setInterestRate] = useState<number>(8.5); // 8.5%
  const [tenureYears, setTenureYears] = useState<number>(20); // 20 years
  const [selectedBank, setSelectedBank] = useState<string>("SBI");
  const [selectedYear, setSelectedYear] = useState<string>("2026");
  const [selectedQuarter, setSelectedQuarter] = useState<string>("Q1");

  // Calculations
  const downPayment = (propertyValue * downPaymentPercent) / 100;
  const loanAmount = propertyValue - downPayment;
  const monthlyInterestRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;

  const emi = Math.round(
    (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths)) /
    (Math.pow(1 + monthlyInterestRate, totalMonths) - 1)
  );

  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - loanAmount;
  const interestPercentage = Math.round((totalInterest / totalPayment) * 100);
  const principalPercentage = 100 - interestPercentage;

  const formatINR = (val: number) => {
    if (val >= 10000000) {
      return `₹ ${(val / 10000000).toFixed(2)} Cr`;
    } else if (val >= 100000) {
      return `₹ ${(val / 100000).toFixed(2)} L`;
    } else {
      return `₹ ${val.toLocaleString('en-IN')}`;
    }
  };

  return (
    <section id="calculator" className="py-16 bg-[#2B2D2F] text-slate-900 font-sans border-t border-slate-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Calculator className="w-3.5 h-3.5" />
            <span>Vizag Property Financial Planning</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-tight uppercase">
            HOME LOAN & EMI <br />
            <span className="italic font-normal text-amber-300 capitalize text-2xl sm:text-4xl">
              Financial Intelligence Dashboard
            </span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Real-time monthly installment calculator, interest-to-principal breakdown, and partner bank rate comparison for Visakhapatnam homebuyers.
          </p>
        </div>

        {/* ========================================================= */}
        {/* DASHBOARD CONTAINER (MATCHING EXACT REFERENCE IMAGE STYLE) */}
        {/* ========================================================= */}
        <div className="bg-[#1C1E20] rounded-[2rem] p-4 sm:p-6 border border-slate-700/60 shadow-2xl space-y-6">
          
          {/* Main Dashboard Grid: Left Sidebar + Right Main Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* ========================================================= */}
            {/* LEFT SIDEBAR: LOGO + FILTERS & BANK SELECTORS */}
            {/* ========================================================= */}
            <div className="lg:col-span-3 bg-[#EAEAEA] rounded-2xl p-4 border border-slate-300/80 space-y-5 text-slate-800">
              
              {/* Logo / Header in Sidebar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-300">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#0F5A5C] text-white flex items-center justify-center font-serif font-extrabold text-sm shadow">
                    CRE
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-slate-900 tracking-tight leading-none">Chanti Finance</h4>
                    <p className="text-[10px] text-slate-500 font-mono">EMI Dashboard</p>
                  </div>
                </div>
                <SlidersHorizontal className="w-4 h-4 text-slate-500" />
              </div>

              {/* Year Selectors */}
              <div className="space-y-1.5">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Benchmark Year</p>
                <div className="flex items-center gap-2">
                  {["2026", "2027"].map((yr) => (
                    <button
                      key={yr}
                      onClick={() => setSelectedYear(yr)}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-bold font-mono transition-all ${
                        selectedYear === yr
                          ? "bg-[#0F5A5C] text-white shadow"
                          : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                      }`}
                    >
                      {yr}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tenure Selection Vertical Pills */}
              <div className="space-y-1.5">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Loan Tenure (Years)</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-1.5">
                  {[5, 10, 15, 20, 25, 30].map((t) => (
                    <button
                      key={t}
                      onClick={() => setTenureYears(t)}
                      className={`py-1.5 px-3 rounded-lg text-xs font-bold font-mono text-left transition-all flex items-center justify-between ${
                        tenureYears === t
                          ? "bg-[#0F5A5C] text-white shadow"
                          : "bg-slate-200/80 text-slate-700 hover:bg-slate-300"
                      }`}
                    >
                      <span>{t} Yrs</span>
                      {tenureYears === t && <Check className="w-3 h-3 text-amber-300" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Partner Banks Selection */}
              <div className="space-y-1.5 pt-2 border-t border-slate-300">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Partner Bank Rates</p>
                <div className="space-y-1.5">
                  {[
                    { name: "SBI Bank", rate: 8.5 },
                    { name: "HDFC Bank", rate: 8.6 },
                    { name: "ICICI Bank", rate: 8.75 },
                    { name: "Axis Bank", rate: 8.8 },
                    { name: "LIC Housing", rate: 8.4 }
                  ].map((bk) => (
                    <button
                      key={bk.name}
                      onClick={() => {
                        setSelectedBank(bk.name);
                        setInterestRate(bk.rate);
                      }}
                      className={`w-full py-2 px-3 rounded-lg text-xs font-bold text-left transition-all flex items-center justify-between ${
                        selectedBank === bk.name
                          ? "bg-[#0F5A5C] text-white shadow"
                          : "bg-slate-200/80 text-slate-700 hover:bg-slate-300"
                      }`}
                    >
                      <span>{bk.name}</span>
                      <span className="font-mono text-[11px] opacity-90">{bk.rate}% p.a.</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider Input for Property Value */}
              <div className="space-y-2 pt-2 border-t border-slate-300">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-700">Property Price</span>
                  <span className="font-mono font-extrabold text-[#0F5A5C]">{formatINR(propertyValue)}</span>
                </div>
                <input
                  type="range"
                  min="2000000"
                  max="50000000"
                  step="500000"
                  value={propertyValue}
                  onChange={(e) => setPropertyValue(Number(e.target.value))}
                  className="w-full accent-[#0F5A5C] h-1.5 bg-slate-300 rounded-lg cursor-pointer"
                />
              </div>

              {/* Down Payment % Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-700">Down Payment</span>
                  <span className="font-mono font-extrabold text-[#B85D19]">{downPaymentPercent}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="50"
                  step="5"
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full accent-[#B85D19] h-1.5 bg-slate-300 rounded-lg cursor-pointer"
                />
              </div>

            </div>

            {/* ========================================================= */}
            {/* RIGHT MAIN PANEL: TOP BAR + TILES + CHARTS */}
            {/* ========================================================= */}
            <div className="lg:col-span-9 space-y-5">
              
              {/* TOP HEADER BAR: SALES DASHBOARD / TITLE + QUARTER TABS */}
              <div className="bg-[#EAEAEA] rounded-2xl p-4 border border-slate-300/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-900">
                
                {/* Title */}
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#0F5A5C] text-white">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-extrabold tracking-tight uppercase">HOME LOAN EMI DASHBOARD</h3>
                    <p className="text-[11px] text-slate-500 font-mono">Simulated Loan Projections for {selectedBank}</p>
                  </div>
                </div>

                {/* Quarter Pills [ Q1 ] [ Q2 ] [ Q3 ] [ Q4 ] */}
                <div className="flex items-center gap-1.5">
                  {["Q1", "Q2", "Q3", "Q4"].map((q) => (
                    <button
                      key={q}
                      onClick={() => setSelectedQuarter(q)}
                      className={`px-4 py-1.5 rounded-lg text-xs font-bold font-mono transition-all uppercase ${
                        selectedQuarter === q
                          ? "bg-[#0F5A5C] text-white shadow"
                          : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                      }`}
                    >
                      {q}
                    </button>
                  ))}
                </div>

              </div>

              {/* ========================================================= */}
              {/* 4 TOP METRIC CARDS (LIGHT WHITE CARDS MATCHING REFERENCE) */}
              {/* ========================================================= */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* Card 1: Monthly EMI */}
                <div className="bg-[#F8FAFC] rounded-2xl p-4 border border-slate-200 shadow-md space-y-3 relative">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">MONTHLY EMI</span>
                    <Banknote className="w-5 h-5 text-[#0F5A5C]" />
                  </div>

                  <div>
                    <span className="text-2xl font-extrabold text-slate-900 font-mono tracking-tight">
                      ₹ {emi.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-[10px] text-slate-500 pt-1 border-t border-slate-200">
                    <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">8.5% p.a.</span>
                    <span>COMPARE TO BUDGET</span>
                  </div>
                </div>

                {/* Card 2: Principal Loan */}
                <div className="bg-[#F8FAFC] rounded-2xl p-4 border border-slate-200 shadow-md space-y-3 relative">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">PRINCIPAL LOAN</span>
                    <TrendingUp className="w-5 h-5 text-[#B85D19]" />
                  </div>

                  <div>
                    <span className="text-2xl font-extrabold text-slate-900 font-mono tracking-tight">
                      {formatINR(loanAmount)}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-[10px] text-slate-500 pt-1 border-t border-slate-200">
                    <span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 font-bold">{100 - downPaymentPercent}% Loan</span>
                    <span>APPROVED BENEFIT</span>
                  </div>
                </div>

                {/* Card 3: Total Interest */}
                <div className="bg-[#F8FAFC] rounded-2xl p-4 border border-slate-200 shadow-md space-y-3 relative">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">TOTAL INTEREST</span>
                    <Coins className="w-5 h-5 text-amber-600" />
                  </div>

                  <div>
                    <span className="text-2xl font-extrabold text-slate-900 font-mono tracking-tight">
                      {formatINR(totalInterest)}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-[10px] text-slate-500 pt-1 border-t border-slate-200">
                    <span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 font-bold">{interestPercentage}% Ratio</span>
                    <span>OVER TENURE</span>
                  </div>
                </div>

                {/* Card 4: Total Amount Payable */}
                <div className="bg-[#F8FAFC] rounded-2xl p-4 border border-slate-200 shadow-md space-y-3 relative">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">TOTAL PAYABLE</span>
                    <Percent className="w-5 h-5 text-[#0F5A5C]" />
                  </div>

                  <div>
                    <span className="text-2xl font-extrabold text-[#0F5A5C] font-mono tracking-tight">
                      {formatINR(totalPayment)}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-[10px] text-slate-500 pt-1 border-t border-slate-200">
                    <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">100% Total</span>
                    <span>PRINCIPAL + INTEREST</span>
                  </div>
                </div>

              </div>

              {/* ========================================================= */}
              {/* MIDDLE ROW: LINE GRAPH (LEFT) & DONUT PIE CHART (RIGHT) */}
              {/* ========================================================= */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
                
                {/* Left Card: REVENUE ACTUAL VS BUDGET / LOAN AMORTIZATION SCHEDULE */}
                <div className="md:col-span-7 bg-[#F8FAFC] rounded-2xl p-5 border border-slate-200 shadow-md space-y-4 flex flex-col justify-between">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                      LOAN AMORTIZATION ACTUAL VS BUDGET
                    </h4>
                    <div className="flex items-center gap-3 text-[10px] font-bold">
                      <span className="inline-flex items-center gap-1 text-[#0F5A5C]">
                        <span className="w-2.5 h-0.5 bg-[#0F5A5C] rounded" /> Principal
                      </span>
                      <span className="inline-flex items-center gap-1 text-[#B85D19]">
                        <span className="w-2.5 h-0.5 bg-[#B85D19] rounded" /> Interest
                      </span>
                    </div>
                  </div>

                  {/* Multi-wave Line Graph SVG matching reference design */}
                  <div className="w-full h-36 relative bg-slate-100/60 rounded-xl p-2 border border-slate-200/60 flex items-center justify-center">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 400 120" preserveAspectRatio="none">
                      {/* Grid Lines */}
                      <line x1="0" y1="20" x2="400" y2="20" stroke="#CBD5E1" strokeDasharray="3 3" />
                      <line x1="0" y1="60" x2="400" y2="60" stroke="#CBD5E1" strokeDasharray="3 3" />
                      <line x1="0" y1="100" x2="400" y2="100" stroke="#CBD5E1" strokeDasharray="3 3" />

                      {/* Smooth Wavy Line 1: Teal */}
                      <path
                        d="M 0 80 Q 70 20 140 70 T 280 30 T 400 90"
                        fill="none"
                        stroke="#0F5A5C"
                        strokeWidth="3"
                      />
                      {/* Smooth Wavy Line 2: Burnt Orange */}
                      <path
                        d="M 0 30 Q 80 100 160 20 T 300 80 T 400 35"
                        fill="none"
                        stroke="#B85D19"
                        strokeWidth="3"
                      />
                    </svg>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-1">
                    <span>Yr 1</span>
                    <span>Yr 5</span>
                    <span>Yr 10</span>
                    <span>Yr 15</span>
                    <span>Yr {tenureYears}</span>
                  </div>
                </div>

                {/* Right Card: PROFIT BY PRODUCTS / INTEREST BREAKDOWN DONUT PIE */}
                <div className="md:col-span-5 bg-[#F8FAFC] rounded-2xl p-5 border border-slate-200 shadow-md space-y-4 flex flex-col justify-between">
                  <div className="border-b border-slate-200 pb-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                      LOAN BREAKDOWN RATIO
                    </h4>
                  </div>

                  {/* Donut Graphic + Legend */}
                  <div className="flex items-center justify-between gap-4">
                    {/* SVG Donut */}
                    <div className="relative w-28 h-28 flex items-center justify-center shrink-0">
                      <svg className="w-28 h-28 transform -rotate-90">
                        <circle cx="56" cy="56" r="40" stroke="#0F5A5C" strokeWidth="18" fill="transparent" />
                        <circle 
                          cx="56" 
                          cy="56" 
                          r="40" 
                          stroke="#B85D19" 
                          strokeWidth="18" 
                          fill="transparent" 
                          strokeDasharray="251" 
                          strokeDashoffset={251 - (251 * interestPercentage) / 100} 
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                        <span className="text-xs font-extrabold text-slate-900 font-mono">{formatINR(totalPayment)}</span>
                      </div>
                    </div>

                    {/* Breakdown List */}
                    <div className="space-y-2 text-xs font-mono">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded bg-[#0F5A5C]" />
                          <span className="font-bold text-slate-800">Principal</span>
                        </div>
                        <p className="text-slate-600 font-extrabold pl-4">{principalPercentage}% ({formatINR(loanAmount)})</p>
                      </div>

                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded bg-[#B85D19]" />
                          <span className="font-bold text-slate-800">Interest</span>
                        </div>
                        <p className="text-slate-600 font-extrabold pl-4">{interestPercentage}% ({formatINR(totalInterest)})</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-900 font-medium">
                    Pre-payment option reduces total interest by ~18%.
                  </div>
                </div>

              </div>

              {/* ========================================================= */}
              {/* BOTTOM ROW: 3 CARDS (BARS, RADAR, HORIZONTAL BARS) */}
              {/* ========================================================= */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                
                {/* Bottom Card 1: REVENUE BY COUNTRY / LOCALITY BUDGET MATCH */}
                <div className="bg-[#F8FAFC] rounded-2xl p-4 border border-slate-200 shadow-md space-y-3">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-800 border-b border-slate-200 pb-1.5">
                    LOCALITY ELIGIBILITY BENCHMARK
                  </h4>
                  <div className="flex items-end justify-between gap-1.5 h-24 pt-2">
                    {[
                      { name: "Beach Rd", h: "85%" },
                      { name: "Rushi", h: "70%" },
                      { name: "Madhura", h: "95%" },
                      { name: "MVP", h: "60%" },
                      { name: "Bheemili", h: "90%" }
                    ].map((bar) => (
                      <div key={bar.name} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                        <div className="w-full bg-[#B85D19] rounded-t" style={{ height: bar.h }} />
                        <span className="text-[9px] font-bold text-slate-600 truncate">{bar.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card 2: REVENUE BY SEGMENTS / RADAR SPIDER GRAPH */}
                <div className="bg-[#F8FAFC] rounded-2xl p-4 border border-slate-200 shadow-md space-y-3">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-800 border-b border-slate-200 pb-1.5">
                    BORROWER RISK & ELIGIBILITY INDEX
                  </h4>
                  <div className="h-24 flex items-center justify-center relative">
                    <svg className="w-24 h-24" viewBox="0 0 100 100">
                      <polygon points="50,10 90,35 80,85 20,85 10,35" fill="none" stroke="#CBD5E1" strokeWidth="1.5" />
                      <polygon points="50,25 75,42 68,75 32,75 25,42" fill="none" stroke="#CBD5E1" strokeWidth="1.5" />
                      <polygon points="50,15 85,38 72,80 25,78 18,36" fill="rgba(15,90,92,0.2)" stroke="#0F5A5C" strokeWidth="2" />
                    </svg>
                  </div>
                </div>

                {/* Bottom Card 3: UNITS SOLD BY PRODUCTS / PARTNER BANK COMPARISON */}
                <div className="bg-[#F8FAFC] rounded-2xl p-4 border border-slate-200 shadow-md space-y-3">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-800 border-b border-slate-200 pb-1.5">
                    TOP PARTNER BANK INTEREST RATES
                  </h4>
                  <div className="space-y-1.5 text-[11px] font-mono">
                    {[
                      { name: "SBI Bank", rate: "8.50%", width: "85%" },
                      { name: "HDFC Bank", rate: "8.60%", width: "88%" },
                      { name: "ICICI Bank", rate: "8.75%", width: "92%" },
                      { name: "Axis Bank", rate: "8.80%", width: "95%" }
                    ].map((bk) => (
                      <div key={bk.name} className="space-y-0.5">
                        <div className="flex justify-between font-bold text-slate-700 text-[10px]">
                          <span>{bk.name}</span>
                          <span>{bk.rate}</span>
                        </div>
                        <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full bg-[#0F5A5C] rounded-full" style={{ width: bk.width }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
