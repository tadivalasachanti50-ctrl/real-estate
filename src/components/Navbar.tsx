import React, { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Heart, 
  Sparkles, 
  Building2, 
  Menu, 
  X, 
  Compass, 
  Calculator, 
  ShieldCheck,
  Search,
  CheckCircle2
} from "lucide-react";
import { ChantiLogo } from "./ChantiLogo";

interface NavbarProps {
  favoriteCount: number;
  comparisonCount: number;
  onOpenFavorites: () => void;
  onOpenComparison: () => void;
  onOpenAIConcierge: () => void;
  onOpenSiteVisit: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  favoriteCount,
  comparisonCount,
  onOpenFavorites,
  onOpenComparison,
  onOpenAIConcierge,
  onOpenSiteVisit,
  activeSection,
  setActiveSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "properties", label: "Properties" },
    { id: "localities", label: "Vizag Localities" },
    { id: "services", label: "Our Services" },
    { id: "valuation", label: "Valuation Tool" },
    { id: "calculator", label: "EMI Calculator" },
    { id: "about", label: "About Chanti" },
    { id: "contact", label: "Contact Us" }
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-amber-500/20 text-white shadow-xl">
      {/* Top Banner Bar */}
      <div className="bg-gradient-to-r from-amber-950 via-slate-900 to-amber-950 text-xs py-1.5 px-4 border-b border-amber-500/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
            <span className="flex items-center gap-1.5 text-amber-300 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              100% VMRDA & RERA Approved Projects in Visakhapatnam
            </span>
            <span className="hidden md:inline text-slate-500">•</span>
            <span className="flex items-center gap-1 text-slate-300">
              <MapPin className="w-3 h-3 text-amber-400" />
              Waltair Uplands & Beach Road, Vizag
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <a 
              href="tel:+919876543210" 
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors font-semibold text-amber-200"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              +91 98765 43210
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href="mailto:info@chantirealestate.com" 
              className="hidden sm:flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3 h-3 text-amber-400" />
              info@chantirealestate.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <div 
            onClick={() => handleNavClick("hero")} 
            className="cursor-pointer group hover:opacity-95 transition-opacity"
          >
            <ChantiLogo variant="gold" iconSize="w-8 h-8" textSize="md" />
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors relative py-1 ${
                  activeSection === link.id
                    ? "text-amber-400 font-semibold"
                    : "text-slate-300 hover:text-amber-300"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* AI Concierge Button */}
            <button
              onClick={onOpenAIConcierge}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 text-xs font-semibold transition-all shadow-sm hover:border-amber-400"
              title="Ask AI Property Concierge"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>AI Concierge</span>
            </button>

            {/* Favorites Icon */}
            <button
              onClick={onOpenFavorites}
              className="relative p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-rose-400 hover:bg-slate-700 transition-colors border border-slate-700"
              title="Saved Properties"
            >
              <Heart className="w-4 h-4" />
              {favoriteCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {favoriteCount}
                </span>
              )}
            </button>

            {/* Comparison Badge */}
            {comparisonCount > 0 && (
              <button
                onClick={onOpenComparison}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800 text-amber-400 border border-amber-500/40 text-xs font-medium hover:bg-slate-700"
              >
                <span>Compare</span>
                <span className="bg-amber-500 text-slate-950 font-bold px-1.5 py-0.2 rounded text-[10px]">
                  {comparisonCount}
                </span>
              </button>
            )}

            {/* Schedule Site Visit CTA */}
            <button
              onClick={onOpenSiteVisit}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-semibold text-xs shadow-md shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Free Site Visit</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenAIConcierge}
              className="p-2 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-200 border border-slate-700"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-amber-500/20 px-4 py-4 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left py-2 px-3 rounded-lg text-sm font-medium ${
                  activeSection === link.id
                    ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                    : "text-slate-300 hover:bg-slate-800"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenFavorites();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-slate-800 text-slate-200 text-sm"
            >
              <span className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-400" />
                Saved Properties
              </span>
              <span className="bg-rose-500 text-white font-bold px-2 py-0.5 rounded-full text-xs">
                {favoriteCount}
              </span>
            </button>
            <button
              onClick={() => {
                onOpenSiteVisit();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-sm"
            >
              <Compass className="w-4 h-4" />
              Schedule Free Site Visit
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
