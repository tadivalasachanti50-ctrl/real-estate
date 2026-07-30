import React from "react";
import { ShieldCheck, Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import { ChantiLogo } from "./ChantiLogo";

interface FooterProps {
  onNavClick: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-xs py-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <ChantiLogo variant="gold" iconSize="w-8 h-8" textSize="md" />

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm pt-2">
              Visakhapatnam's premier infrastructure and real estate advisory firm, specializing in VMRDA-approved layouts, oceanfront sea-facing penthouses, gated apartments, and commercial investments across Beach Road, Rushikonda, Madhurawada, and Bheemili.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-slate-300">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>100% Clear Title Verification & VMRDA Sanctioned</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2">
              {["hero", "properties", "localities", "services", "calculator", "valuation", "about", "contact"].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => onNavClick(id)}
                    className="capitalize hover:text-amber-300 transition-colors"
                  >
                    {id === "hero" ? "Home" : id === "calculator" ? "EMI Calculator" : id === "valuation" ? "Valuation Tool" : id}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Prime Localities */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider">
              Vizag Hotspots
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>Beach Road & RK Beach</li>
              <li>Rushikonda IT Corridor</li>
              <li>Madhurawada Township</li>
              <li>Bheemili Coastal Highway</li>
              <li>MVP Colony Enclave</li>
              <li>Kapuluppada SEZ</li>
            </ul>
          </div>

          {/* Office Info */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider">
              Corporate Office
            </h4>
            <div className="space-y-2 text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Waltair Main Road, Opposite HSBC, Visakhapatnam, AP 530003</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+919876543210" className="text-amber-300 hover:underline">+91 98765 43210</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>info@chantirealestate.com</span>
              </p>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            © 2026 Chanti Real Estate. All rights reserved. RERA Registered Agency. Designed & Built for Visakhapatnam Real Estate Excellence.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
