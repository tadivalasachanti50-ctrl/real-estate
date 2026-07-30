import React, { useState } from "react";
import { Property } from "../types";
import { 
  X, 
  MapPin, 
  Bed, 
  Bath, 
  Maximize2, 
  Compass, 
  ShieldCheck, 
  CheckCircle2, 
  PhoneCall, 
  Download, 
  Calendar, 
  Calculator, 
  Share2, 
  Heart,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Building2,
  FileText
} from "lucide-react";

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onOpenSiteVisit: (property: Property) => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({
  property,
  onClose,
  isFavorite,
  onToggleFavorite,
  onOpenSiteVisit
}) => {
  if (!property) return null;

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [activeTab, setActiveTab] = useState<"overview" | "floorplan" | "amenities" | "location">("overview");

  // Calculate sample EMI for this property price
  const principal = property.priceInLakhs * 100000 * 0.8; // 80% loan
  const monthlyInterestRate = 0.085 / 12; // 8.5% interest rate
  const totalMonths = 20 * 12; // 20 years
  const emi = Math.round(
    (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths)) /
    (Math.pow(1 + monthlyInterestRate, totalMonths) - 1)
  );

  const handleDownloadBrochure = () => {
    alert(`Downloading Official e-Brochure & VMRDA Plan for ${property.title}...`);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hello Chanti Real Estate! I am interested in viewing ${property.title} (${property.priceDisplay}) located in ${property.location}. Please share complete details.`);
    window.open(`https://wa.me/919876543210?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-slate-900 border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden my-6 text-left max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 bg-slate-950 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <span className="bg-amber-500 text-slate-950 font-black text-sm px-3 py-1 rounded-lg">
              {property.priceDisplay}
            </span>
            <div className="hidden sm:block">
              <h2 className="text-base sm:text-lg font-serif font-bold text-white truncate max-w-md">
                {property.title}
              </h2>
              <p className="text-xs text-slate-400 truncate">{property.location}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleFavorite(property.id)}
              className={`p-2 rounded-xl border transition-colors ${
                isFavorite 
                  ? "bg-rose-500 text-white border-rose-500" 
                  : "bg-slate-800 text-slate-300 border-slate-700 hover:text-rose-400"
              }`}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? "fill-current" : ""}`} />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6 flex-1">
          
          {/* Main Gallery Carousel */}
          <div className="space-y-3">
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
              <img
                src={property.images[activeImageIdx]}
                alt={`${property.title} - Image ${activeImageIdx + 1}`}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />

              {/* Prev / Next buttons */}
              {property.images.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImageIdx((prev) => (prev === 0 ? property.images.length - 1 : prev - 1))}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white backdrop-blur-md border border-slate-700"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setActiveImageIdx((prev) => (prev === property.images.length - 1 ? 0 : prev + 1))}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white backdrop-blur-md border border-slate-700"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Badges Overlay */}
              <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                {property.vmrdaApproved && (
                  <span className="bg-slate-900/90 text-amber-300 border border-amber-500/40 text-xs font-semibold px-2.5 py-1 rounded-lg backdrop-blur-md flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                    VMRDA Approved L.P.
                  </span>
                )}
                {property.vastuCompliant && (
                  <span className="bg-slate-900/90 text-emerald-400 border border-emerald-500/40 text-xs font-semibold px-2.5 py-1 rounded-lg backdrop-blur-md flex items-center gap-1">
                    <Compass className="w-3.5 h-3.5" />
                    100% Vastu Compliant
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail Strip */}
            {property.images.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {property.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`relative w-20 h-16 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                      activeImageIdx === idx ? "border-amber-400 scale-105" : "border-slate-800 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Key Specs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-slate-950 rounded-xl border border-slate-800 text-slate-200">
            {property.bhk && (
              <div className="flex items-center gap-2">
                <Bed className="w-5 h-5 text-amber-400" />
                <div>
                  <p className="text-[10px] text-slate-400 uppercase">Configuration</p>
                  <p className="font-bold text-sm text-white">{property.bhk} BHK Luxury</p>
                </div>
              </div>
            )}

            <div className="flex items-center gap-2">
              <Maximize2 className="w-5 h-5 text-amber-400" />
              <div>
                <p className="text-[10px] text-slate-400 uppercase">Total Area</p>
                <p className="font-bold text-sm text-white">{property.areaSqFt} sq.ft</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-amber-400" />
              <div>
                <p className="text-[10px] text-slate-400 uppercase">Facing</p>
                <p className="font-bold text-sm text-white">{property.facing} Facing</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-amber-400" />
              <div>
                <p className="text-[10px] text-slate-400 uppercase">Possession</p>
                <p className="font-bold text-sm text-white">{property.possessionDate}</p>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-slate-800">
            {[
              { id: "overview", label: "Property Overview" },
              { id: "floorplan", label: "Floor Plan & Layout" },
              { id: "amenities", label: "Key Features & Amenities" },
              { id: "location", label: "Vizag Location & Map" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2.5 text-xs sm:text-sm font-semibold border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-amber-400 text-amber-300 bg-amber-500/10"
                    : "border-transparent text-slate-400 hover:text-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="space-y-4">
            {activeTab === "overview" && (
              <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                <p>{property.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                    <h4 className="font-serif font-bold text-white text-sm mb-2 text-amber-300">
                      Approval & Legal Status
                    </h4>
                    <ul className="space-y-2 text-xs">
                      <li className="flex items-center justify-between">
                        <span className="text-slate-400">RERA Registration No:</span>
                        <span className="font-mono font-bold text-white">{property.reraNumber}</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="text-slate-400">VMRDA Approved:</span>
                        <span className="text-emerald-400 font-bold">Verified Clear Title</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="text-slate-400">Bank Loan Eligibility:</span>
                        <span className="text-white">Up to 80% (SBI, HDFC, ICICI)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                    <h4 className="font-serif font-bold text-white text-sm mb-2 text-amber-300">
                      Estimated Monthly EMI
                    </h4>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-slate-400">80% Loan @ 8.5% p.a. (20 Yrs)</span>
                      <span className="text-base font-bold text-amber-400">₹ {emi.toLocaleString()} / mo</span>
                    </div>
                    <p className="text-[11px] text-slate-500">
                      Sample calculation. Contact Chanti Real Estate for customized bank loan rates.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "floorplan" && (
              <div className="space-y-3">
                {property.floorPlanUrl ? (
                  <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 p-2 text-center">
                    <img
                      src={property.floorPlanUrl}
                      alt="Architectural Floor Plan"
                      className="max-h-96 mx-auto object-contain rounded-lg"
                      referrerPolicy="no-referrer"
                    />
                    <p className="text-xs text-slate-400 mt-2">
                      Architectural blueprint designed according to classic Vastu Shastra principles.
                    </p>
                  </div>
                ) : (
                  <div className="p-8 text-center bg-slate-950 rounded-xl border border-slate-800">
                    <FileText className="w-10 h-10 text-amber-400 mx-auto mb-2 opacity-80" />
                    <p className="text-sm font-semibold text-white">VMRDA Sanctioned Layout Available</p>
                    <p className="text-xs text-slate-400 mt-1">
                      Download the official e-brochure to view high-resolution floor plans and plot dimensions.
                    </p>
                  </div>
                )}
              </div>
            )}

            {activeTab === "amenities" && (
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white text-sm mb-3">Key Highlights</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {property.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-white text-sm mb-3">Lifestyle Amenities</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {property.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-xs text-slate-300">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "location" && (
              <div className="space-y-3">
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span><strong>Exact Address:</strong> {property.address}</span>
                </div>

                <div>
                  <h4 className="font-bold text-white text-sm mb-2">Nearby Vizag Landmarks</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {property.nearbyLandmarks.map((lm, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2.5 bg-slate-950 rounded-lg border border-slate-800 text-xs">
                        <span className="text-slate-300">{lm.name}</span>
                        <span className="font-bold text-amber-400 font-mono">{lm.distance}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Modal Sticky Footer CTA */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <button
            onClick={handleDownloadBrochure}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 border border-slate-700"
          >
            <Download className="w-4 h-4 text-amber-400" />
            <span>Download Brochure</span>
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleWhatsApp}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg"
            >
              <span>WhatsApp Inquiry</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenSiteVisit(property);
              }}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Free Site Visit</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
