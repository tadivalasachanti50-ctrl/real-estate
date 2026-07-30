import React, { useState } from "react";
import { X, Sparkles, Send, Bot, User, CheckCircle2, Building2, MapPin } from "lucide-react";

interface AIConciergeModalProps {
  onClose: () => void;
  onOpenSiteVisit: () => void;
}

export const AIConciergeModal: React.FC<AIConciergeModalProps> = ({
  onClose,
  onOpenSiteVisit
}) => {
  const [userQuery, setUserQuery] = useState("");
  const [locality, setLocality] = useState("Rushikonda");
  const [budget, setBudget] = useState("₹ 1 Crore - ₹ 2 Crores");
  const [loading, setLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState<string | null>(null);

  const handleAskAI = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userQuery.trim() && !locality) return;

    setLoading(true);
    setAiResponse(null);

    try {
      const res = await fetch("/api/ai-concierge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userQuery: userQuery || `Recommend top properties in ${locality} with budget ${budget}`,
          locality,
          budget
        })
      });

      const data = await res.json();
      setAiResponse(data.recommendation || "Welcome to Chanti Real Estate! Please call +91 98765 43210 for VIP site visit booking.");
    } catch (err) {
      setAiResponse("Thank you for consulting Chanti Real Estate. Visakhapatnam's market is rapidly growing in Beach Road, Rushikonda, and Madhurawada. Contact us directly at +91 98765 43210 for tailored options.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-amber-500/40 rounded-2xl shadow-2xl overflow-hidden text-left my-6">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-base sm:text-lg text-white">
                AI Real Estate Advisor - Chanti Real Estate
              </h2>
              <p className="text-[11px] text-slate-400">
                Powered by Gemini AI • Visakhapatnam Property Intelligence
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-5 max-h-[75vh] overflow-y-auto">
          
          <p className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-3 rounded-xl border border-slate-800">
            👋 Welcome! Ask me anything about property prices, VMRDA layouts, investment growth areas, or specific requirements in Visakhapatnam.
          </p>

          <form onSubmit={handleAskAI} className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1 uppercase">Target Locality</label>
                <select
                  value={locality}
                  onChange={(e) => setLocality(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white text-xs focus:outline-none focus:border-amber-400"
                >
                  <option value="Beach Road">Beach Road & RK Beach</option>
                  <option value="Rushikonda">Rushikonda IT Hill</option>
                  <option value="Madhurawada">Madhurawada</option>
                  <option value="Bheemili">Bheemili Coastal Highway</option>
                  <option value="MVP Colony">MVP Colony</option>
                  <option value="Kapuluppada">Kapuluppada</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1 uppercase">Budget Preference</label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white text-xs focus:outline-none focus:border-amber-400"
                >
                  <option value="Under ₹ 50 Lakhs">Under ₹ 50 Lakhs</option>
                  <option value="₹ 50 Lakhs - ₹ 1 Crore">₹ 50 Lakhs - ₹ 1 Crore</option>
                  <option value="₹ 1 Crore - ₹ 2 Crores">₹ 1 Crore - ₹ 2 Crores</option>
                  <option value="Above ₹ 2 Crores">Above ₹ 2 Crores (Luxury)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1 uppercase">Your Specific Question / Requirement</label>
              <textarea
                rows={3}
                placeholder="E.g., I am looking for a 3BHK flat near GITAM University or Rushikonda IT Park with 100% Vastu and sea view..."
                value={userQuery}
                onChange={(e) => setUserQuery(e.target.value)}
                className="w-full p-3 bg-slate-950 border border-slate-700 rounded-xl text-white text-xs placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
            >
              {loading ? (
                <span>Generating AI Advice...</span>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Ask AI Property Advisor</span>
                </>
              )}
            </button>
          </form>

          {/* AI Response Output */}
          {aiResponse && (
            <div className="p-4 bg-slate-950 rounded-xl border border-amber-500/30 space-y-3">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-bold border-b border-slate-800 pb-2">
                <Bot className="w-4 h-4 text-amber-400" />
                <span>Chanti Real Estate AI Advisory Note</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed whitespace-pre-line font-sans">
                {aiResponse}
              </p>

              <div className="pt-2 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => {
                    onClose();
                    onOpenSiteVisit();
                  }}
                  className="px-4 py-2 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs"
                >
                  Schedule Site Visit
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
