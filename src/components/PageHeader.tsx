import React from "react";
import { ChevronRight, Home, Building2, MapPin, Sparkles } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  badge: string;
  onNavigateHome: () => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  badge,
  onNavigateHome
}) => {
  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800 py-10 px-4 sm:px-6 lg:px-8 text-left">
      <div className="max-w-7xl mx-auto space-y-4">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-1 hover:text-amber-400 transition-colors"
          >
            <Home className="w-3.5 h-3.5 text-amber-400" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-amber-300 font-medium">{title}</span>
        </div>

        {/* Header content */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{badge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white tracking-tight">
            {title}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        </div>

      </div>
    </div>
  );
};
