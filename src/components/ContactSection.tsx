import React, { useState } from "react";
import { ChantiLogo } from "./ChantiLogo";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  Calendar,
  Building2,
  Compass
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    comment: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const poolHeroImage = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80";
  const diningLoungeImage = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80";

  return (
    <section id="contact" className="bg-[#EBF4FA] text-slate-800 font-sans text-left selection:bg-sky-200 selection:text-sky-950">
      
      {/* ========================================================= */}
      {/* 1. TOP HEADER BANNER (LIGHT BLUE CONTACT US HERO)         */}
      {/* ========================================================= */}
      <div className="relative py-20 sm:py-28 flex items-center justify-center overflow-hidden border-b border-sky-200/80 bg-gradient-to-r from-sky-100 via-[#E0F2FE] to-sky-200">
        <img
          src={poolHeroImage}
          alt="Contact Us Background"
          className="absolute inset-0 w-full h-full object-cover opacity-15 filter contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/10 via-sky-100/40 to-[#EBF4FA]" />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-200/80 border border-sky-300 text-sky-900 text-xs font-bold font-mono uppercase tracking-widest">
            <span>Visakhapatnam Real Estate HQ</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black tracking-widest text-slate-900 uppercase">
            CONTACT US
          </h1>
          <p className="text-xs sm:text-sm font-mono tracking-widest text-sky-800 font-bold uppercase max-w-2xl mx-auto">
            Visakhapatnam Property Advisory, VMRDA Approvals & Legal Clearances
          </p>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. MAIN SPLIT CONTACT SECTION (GET IN TOUCH | YOUR DETAILS) */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-start">
          
          {/* ======================================================= */}
          {/* LEFT COLUMN: GET IN TOUCH & DIRECT CONTACT INFORMATION   */}
          {/* ======================================================= */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="space-y-3">
              {/* Eyebrow */}
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-700 font-bold">
                <span className="w-8 h-[2px] bg-sky-600" />
                <span>KEEP CLOSE</span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-slate-900 tracking-tight leading-none">
                Get In Touch
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                Whether you are seeking VMRDA-approved Beach Road plots, luxury coastal villas in Rushikonda, or complete legal title verification in Visakhapatnam, our senior advisory team is at your disposal.
              </p>
            </div>

            {/* 4 Contact Info Cards in Light Blue Aesthetic */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
              
              {/* 1. Address */}
              <div className="p-4 rounded-2xl bg-white border border-sky-200/90 shadow-sm space-y-2 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-sky-700">
                  <div className="p-2 rounded-lg bg-sky-100 text-sky-800">
                    <MapPin className="w-4 h-4 shrink-0" />
                  </div>
                  <span className="font-bold uppercase tracking-wider text-[11px] text-slate-900">Address</span>
                </div>
                <p className="text-slate-600 leading-relaxed text-[11px] pl-1">
                  Chanti Real Estate Towers, Beach Road, Siripuram, Visakhapatnam, AP 530003.
                </p>
              </div>

              {/* 2. Phone */}
              <div className="p-4 rounded-2xl bg-white border border-sky-200/90 shadow-sm space-y-2 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-sky-700">
                  <div className="p-2 rounded-lg bg-sky-100 text-sky-800">
                    <Phone className="w-4 h-4 shrink-0" />
                  </div>
                  <span className="font-bold uppercase tracking-wider text-[11px] text-slate-900">Helpline</span>
                </div>
                <p className="text-slate-600 leading-relaxed font-mono text-[11px] pl-1">
                  (+91) 98765 43210 <br />
                  (+91) 891 255 7799
                </p>
              </div>

              {/* 3. Email */}
              <div className="p-4 rounded-2xl bg-white border border-sky-200/90 shadow-sm space-y-2 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-sky-700">
                  <div className="p-2 rounded-lg bg-sky-100 text-sky-800">
                    <Mail className="w-4 h-4 shrink-0" />
                  </div>
                  <span className="font-bold uppercase tracking-wider text-[11px] text-slate-900">Email</span>
                </div>
                <p className="text-slate-600 leading-relaxed text-[11px] pl-1">
                  contact@chantirealestate.com <br />
                  sales@chantirealestate.com
                </p>
              </div>

              {/* 4. Hours */}
              <div className="p-4 rounded-2xl bg-white border border-sky-200/90 shadow-sm space-y-2 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-sky-700">
                  <div className="p-2 rounded-lg bg-sky-100 text-sky-800">
                    <Clock className="w-4 h-4 shrink-0" />
                  </div>
                  <span className="font-bold uppercase tracking-wider text-[11px] text-slate-900">Office Hours</span>
                </div>
                <p className="text-slate-600 leading-relaxed text-[11px] pl-1">
                  Open 09:00 am IST <br />
                  Closed 08:00 pm IST (Mon - Sun)
                </p>
              </div>

            </div>

            {/* Follow Us Social Links */}
            <div className="pt-4 border-t border-sky-200 space-y-3">
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-sky-800">
                FOLLOW US
              </p>
              <div className="flex items-center gap-3 text-sky-700">
                <a href="#facebook" className="p-2.5 rounded-full bg-white border border-sky-200 hover:bg-sky-600 hover:text-white transition-all shadow-sm">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#instagram" className="p-2.5 rounded-full bg-white border border-sky-200 hover:bg-sky-600 hover:text-white transition-all shadow-sm">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#twitter" className="p-2.5 rounded-full bg-white border border-sky-200 hover:bg-sky-600 hover:text-white transition-all shadow-sm">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#linkedin" className="p-2.5 rounded-full bg-white border border-sky-200 hover:bg-sky-600 hover:text-white transition-all shadow-sm">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* ======================================================= */}
          {/* RIGHT COLUMN: YOUR DETAILS FORM (LIGHT BLUE CARD)       */}
          {/* ======================================================= */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-sky-200 shadow-xl shadow-sky-900/5 space-y-6">
            
            <div className="space-y-1">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
                Your Details
              </h3>
              <p className="text-xs text-slate-500">
                Let us know how to get back to you.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 text-center bg-sky-50 rounded-2xl border border-sky-300 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-sky-600 mx-auto" />
                <h4 className="text-lg font-serif font-bold text-slate-900">Inquiry Received</h4>
                <p className="text-xs text-slate-600">
                  Thank you, <strong>{formState.name}</strong>. Mr. Tadivalasa Chanti's team will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-mono font-bold tracking-widest text-slate-700 uppercase">
                      NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jhon"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 bg-sky-50/60 border border-sky-200 rounded-xl text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-sky-600 focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-mono font-bold tracking-widest text-slate-700 uppercase">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="email@email.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 bg-sky-50/60 border border-sky-200 rounded-xl text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-sky-600 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Subject */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-mono font-bold tracking-widest text-slate-700 uppercase">
                    SUBJECT *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Subject"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-sky-50/60 border border-sky-200 rounded-xl text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-sky-600 focus:bg-white transition-all"
                  />
                </div>

                {/* Row 3: Comments / Questions */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-mono font-bold tracking-widest text-slate-700 uppercase">
                    COMMENTS / QUESTIONS *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Question"
                    value={formState.comment}
                    onChange={(e) => setFormState({ ...formState, comment: e.target.value })}
                    className="w-full p-4 bg-sky-50/60 border border-sky-200 rounded-xl text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-sky-600 focus:bg-white transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="px-8 py-3.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-sky-600/25 active:scale-95"
                  >
                    CONTACT US
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. BOTTOM CTA BANNER: RESERVE A SITE VISIT                */}
      {/* ========================================================= */}
      <div className="relative py-20 sm:py-28 flex items-center justify-center overflow-hidden border-t border-sky-200 bg-gradient-to-r from-sky-900 via-blue-900 to-sky-950 text-white">
        <img
          src={diningLoungeImage}
          alt="Site Visit Lounge Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-20 filter contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sky-950/90 via-sky-900/70 to-sky-950/90" />

        <div className="relative z-10 text-center max-w-3xl mx-auto px-4 space-y-5">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-300 font-bold">
            <span className="w-8 h-[2px] bg-sky-400" />
            <span>BOOK NOW</span>
            <span className="w-8 h-[2px] bg-sky-400" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight text-white uppercase">
            Reserve A Private Site Visit Now
          </h2>

          <p className="text-xs sm:text-sm text-sky-100/90 max-w-xl mx-auto leading-relaxed">
            Experience our premium Beach Road, Rushikonda & Bheemili layouts firsthand with personal chauffeur pickup and legal team briefings.
          </p>

          <div>
            <a
              href="tel:+919876543210"
              className="inline-block px-8 py-4 bg-sky-400 hover:bg-sky-300 text-slate-950 font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all shadow-xl shadow-sky-400/20 active:scale-95"
            >
              MAKE A RESERVATION
            </a>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 4. FOOTER BRAND BAR (DEEP OCEAN SKY FOOTER)               */}
      {/* ========================================================= */}
      <footer className="py-10 bg-[#0B192C] border-t border-sky-950 text-center space-y-5 text-sky-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center space-y-4">
          
          {/* Brand Logo */}
          <ChantiLogo variant="blue" iconSize="w-8 h-8" textSize="lg" />

          {/* Links Row */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] font-mono uppercase tracking-widest text-sky-300/80 pt-1">
            <a href="#facebook" className="hover:text-white transition-colors">FACEBOOK</a>
            <a href="#twitter" className="hover:text-white transition-colors">TWITTER</a>
            <a href="#instagram" className="hover:text-white transition-colors">INSTAGRAM</a>
            <a href="#vmrda" className="hover:text-white transition-colors">VMRDA PORTAL</a>
          </div>

          {/* Copyright */}
          <p className="text-[10px] text-sky-400/60 font-mono pt-1">
            © 2026 Chanti Infrastructure Visakhapatnam. All Rights Reserved
          </p>

        </div>
      </footer>

    </section>
  );
};
