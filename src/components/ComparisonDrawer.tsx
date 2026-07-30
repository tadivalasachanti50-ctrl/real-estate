import React from "react";
import { Property } from "../types";
import { X, Check, ArrowRight, ShieldCheck, Compass, Trash2 } from "lucide-react";

interface ComparisonDrawerProps {
  comparedProperties: Property[];
  onRemoveFromComparison: (id: string) => void;
  onClearComparison: () => void;
  onClose: () => void;
  onSelectProperty: (property: Property) => void;
}

export const ComparisonDrawer: React.FC<ComparisonDrawerProps> = ({
  comparedProperties,
  onRemoveFromComparison,
  onClearComparison,
  onClose,
  onSelectProperty
}) => {
  if (comparedProperties.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 border-t-2 border-amber-500/80 shadow-2xl backdrop-blur-lg text-left p-4 max-h-[80vh] overflow-y-auto">
      <div className="max-w-7xl mx-auto space-y-4">
        
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-base text-white">
              Property Comparison ({comparedProperties.length}/3)
            </span>
            <span className="text-xs text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
              Side-by-Side Analysis
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClearComparison}
              className="text-xs text-slate-400 hover:text-rose-400 flex items-center gap-1"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear All</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Comparison Grid Table */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {comparedProperties.map((p) => (
            <div key={p.id} className="bg-slate-950 p-4 rounded-xl border border-slate-800 relative space-y-3">
              <button
                onClick={() => onRemoveFromComparison(p.id)}
                className="absolute top-2 right-2 p-1 rounded-md bg-slate-800 text-slate-400 hover:text-rose-400"
              >
                <X className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center gap-3">
                <img src={p.images[0]} alt={p.title} className="w-16 h-12 rounded-lg object-cover" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-serif font-bold text-xs text-white line-clamp-1">{p.title}</h4>
                  <p className="text-[11px] text-amber-400 font-bold">{p.priceDisplay}</p>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <div className="flex justify-between">
                  <span className="text-slate-500">Locality:</span>
                  <span className="font-medium text-white">{p.localityArea}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Config:</span>
                  <span className="font-medium text-white">{p.bhk ? `${p.bhk} BHK` : p.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Area:</span>
                  <span className="font-medium text-white">{p.areaSqFt} sq.ft</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Price/sq.ft:</span>
                  <span className="font-medium text-amber-300">₹{p.pricePerSqFt.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">VMRDA Approval:</span>
                  <span className="font-medium text-emerald-400">{p.vmrdaApproved ? "Yes" : "No"}</span>
                </div>
              </div>

              <button
                onClick={() => onSelectProperty(p)}
                className="w-full py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-slate-950 font-semibold text-xs transition-colors"
              >
                Inspect Details
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
