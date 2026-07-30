import React from "react";
import { TESTIMONIALS_DATA } from "../data/testimonials";
import { Star, Quote, CheckCircle2, Award } from "lucide-react";

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-slate-900 border-t border-slate-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Client Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-white">
            Trusted by 500+ Happy Families & NRI Investors
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Read authentic reviews from doctors, business leaders, software engineers, and NRI buyers who trusted Chanti Real Estate for their property investments in Visakhapatnam.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-amber-500/30 transition-all space-y-4 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full flex items-center gap-1 font-mono">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Buyer
                  </span>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm italic leading-relaxed font-serif">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.clientName}
                    className="w-10 h-10 rounded-full object-cover border border-amber-500/40"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-sm font-serif font-bold text-white">{t.clientName}</h4>
                    <p className="text-[11px] text-amber-300">{t.role}</p>
                    <p className="text-[10px] text-slate-500">{t.propertyPurchased}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
