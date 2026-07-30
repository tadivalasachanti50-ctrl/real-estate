import React from "react";
import { Property } from "../types";
import { 
  MapPin, 
  Bed, 
  Bath, 
  Maximize2, 
  Heart, 
  Check, 
  Compass, 
  ShieldCheck, 
  ArrowRight,
  Share2,
  Car
} from "lucide-react";

interface PropertyCardProps {
  property: Property;
  isFavorite: boolean;
  isCompared: boolean;
  onToggleFavorite: (id: string) => void;
  onToggleCompare: (id: string) => void;
  onSelectProperty: (property: Property) => void;
  onOpenSiteVisit: (property: Property) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  isFavorite,
  isCompared,
  onToggleFavorite,
  onToggleCompare,
  onSelectProperty,
  onOpenSiteVisit
}) => {
  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: `${property.title} in ${property.location} - ${property.priceDisplay} | Chanti Real Estate`,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Property link copied to clipboard!");
    }
  };

  return (
    <div 
      className="group relative w-full h-[380px] sm:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-800 hover:border-amber-500/50 shadow-2xl transition-all duration-500 text-left cursor-pointer"
      onClick={() => onSelectProperty(property)}
    >
      {/* Background High Resolution Photography */}
      <img
        src={property.images[0]}
        alt={property.title}
        className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
        referrerPolicy="no-referrer"
      />

      {/* Dark Ambient Gradient Vignette for Perfect Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/40" />

      {/* TOP BAR: Location Pin (Left) & Badges + Actions (Right) */}
      <div className="absolute top-4 sm:top-6 left-4 sm:left-8 right-4 sm:right-8 flex items-center justify-between z-10">
        
        {/* Top-Left Location Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-slate-200 text-xs font-semibold shadow-lg">
          <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>{property.location}</span>
        </div>

        {/* Top-Right Badges & Favorite / Share */}
        <div className="flex items-center gap-2">
          {property.featured && (
            <span className="hidden sm:inline-block bg-white text-slate-950 font-extrabold text-[11px] uppercase tracking-wider px-3 py-1 rounded-md shadow-lg">
              New Listing
            </span>
          )}

          {property.vmrdaApproved && (
            <span className="bg-slate-950/90 text-amber-300 border border-amber-500/50 font-semibold text-[11px] px-2.5 py-1 rounded-md flex items-center gap-1 backdrop-blur-md shadow-lg">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              VMRDA
            </span>
          )}

          {/* Favorite Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(property.id);
            }}
            className={`p-2 rounded-lg backdrop-blur-md transition-all shadow-md ${
              isFavorite 
                ? "bg-rose-500 text-white" 
                : "bg-slate-950/80 text-slate-300 hover:text-rose-400 border border-slate-700"
            }`}
            title={isFavorite ? "Remove from saved" : "Save property"}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? "fill-current" : ""}`} />
          </button>

          {/* Compare Toggle */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleCompare(property.id);
            }}
            className={`p-2 rounded-lg backdrop-blur-md transition-all shadow-md border ${
              isCompared
                ? "bg-amber-500 text-slate-950 border-amber-500 font-bold"
                : "bg-slate-950/80 text-slate-300 border-slate-700 hover:text-amber-400"
            }`}
            title={isCompared ? "Compared" : "Add to comparison"}
          >
            <Check className="w-4 h-4" />
          </button>

          {/* Share */}
          <button
            type="button"
            onClick={handleShare}
            className="p-2 rounded-lg bg-slate-950/80 text-slate-300 hover:text-amber-300 border border-slate-700 backdrop-blur-md transition-all shadow-md"
            title="Share"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* MIDDLE & BOTTOM CARD CONTENT (MATCHING VELLARO REFERENCE DESIGN) */}
      <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 z-10 space-y-4">
        
        {/* Title & Description */}
        <div className="space-y-1.5 max-w-3xl">
          <h3 className="text-2xl sm:text-4xl font-serif font-extrabold text-white uppercase tracking-tight drop-shadow-md">
            {property.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 max-w-2xl font-light drop-shadow">
            {property.tagline}
          </p>
        </div>

        {/* Translucent Outlined Spec Chips */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {property.bhk && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/60 border border-slate-700/80 backdrop-blur-md text-slate-200 text-xs font-mono">
              <Bed className="w-3.5 h-3.5 text-amber-400" />
              <span>{property.bhk} BHK</span>
            </div>
          )}

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/60 border border-slate-700/80 backdrop-blur-md text-slate-200 text-xs font-mono">
            <Bath className="w-3.5 h-3.5 text-amber-400" />
            <span>3 Baths</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/60 border border-slate-700/80 backdrop-blur-md text-slate-200 text-xs font-mono">
            <Car className="w-3.5 h-3.5 text-amber-400" />
            <span>2 Parking</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/60 border border-slate-700/80 backdrop-blur-md text-slate-200 text-xs font-mono">
            <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
            <span>{property.areaSqFt.toLocaleString()} sq.ft / sq.yds</span>
          </div>

          {property.vastuCompliant && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/60 border border-amber-500/40 backdrop-blur-md text-amber-300 text-xs font-mono">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span>{property.facing} Vastu</span>
            </div>
          )}
        </div>

        {/* BOTTOM ROW: Price Left + Action Button Right */}
        <div className="flex items-end justify-between pt-2 border-t border-slate-800/80">
          
          {/* Price Tag with Italic "from" */}
          <div className="flex items-baseline gap-2">
            <span className="italic font-serif text-slate-300 text-sm sm:text-base">from</span>
            <span className="text-2xl sm:text-3xl font-serif font-extrabold text-white tracking-tight drop-shadow-md">
              {property.priceDisplay}
            </span>
          </div>

          {/* Action Buttons Right */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onOpenSiteVisit(property);
              }}
              className="hidden sm:inline-block px-4 py-2.5 rounded-lg bg-slate-900/90 hover:bg-slate-900 text-amber-300 font-bold text-xs border border-amber-500/40 backdrop-blur-md transition-all"
            >
              Book Visit
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSelectProperty(property);
              }}
              className="px-5 py-2.5 rounded-lg bg-white hover:bg-slate-100 text-slate-950 font-extrabold text-xs tracking-wider uppercase shadow-xl transition-all flex items-center gap-2"
            >
              <span>VIEW PROPERTY</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
