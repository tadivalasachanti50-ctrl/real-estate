import React, { useState, useMemo, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { PageHeader } from "./components/PageHeader";
import { PropertySearchFilter } from "./components/PropertySearchFilter";
import { PropertyCard } from "./components/PropertyCard";
import { PropertyModal } from "./components/PropertyModal";
import { ComparisonDrawer } from "./components/ComparisonDrawer";
import { LocalityGuide } from "./components/LocalityGuide";
import { ServicesSection } from "./components/ServicesSection";
import { AboutFounder } from "./components/AboutFounder";
import { EMICalculator } from "./components/EMICalculator";
import { PropertyValuationTool } from "./components/PropertyValuationTool";
import { AIConciergeModal } from "./components/AIConciergeModal";
import { Testimonials } from "./components/Testimonials";
import { SiteVisitModal } from "./components/SiteVisitModal";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

import { PROPERTIES_DATA } from "./data/properties";
import { Property, FilterState, PropertyPurpose } from "./types";
import { 
  Heart, 
  X, 
  Trash2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Building2, 
  Compass, 
  Calculator, 
  Phone, 
  CheckCircle2, 
  MapPin, 
  Award,
  TrendingUp,
  FileCheck
} from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  
  // Filter state
  const [filters, setFilters] = useState<FilterState>({
    purpose: "all",
    locality: "all",
    propertyType: "all",
    minPrice: 0,
    maxPrice: 500,
    bhk: "all",
    status: "all",
    vmrdaOnly: false,
    vastuOnly: false,
    searchQuery: "",
    sortBy: "featured"
  });

  // Modals & Drawers
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [siteVisitProperty, setSiteVisitProperty] = useState<Property | null>(null);
  const [siteVisitOpen, setSiteVisitOpen] = useState(false);
  const [aiConciergeOpen, setAiConciergeOpen] = useState(false);
  const [favoritesModalOpen, setFavoritesModalOpen] = useState(false);

  // Favorites & Comparison state
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("chanti_favorites");
      return saved ? JSON.parse(saved) : ["chanti-ocean-heights", "chanti-palm-villas-rushikonda"];
    } catch {
      return ["chanti-ocean-heights"];
    }
  });

  const [comparisonList, setComparisonList] = useState<string[]>([]);

  useEffect(() => {
    try {
      localStorage.setItem("chanti_favorites", JSON.stringify(favorites));
    } catch (e) {}
  }, [favorites]);

  const handleToggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleToggleCompare = (id: string) => {
    setComparisonList((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        if (prev.length >= 3) {
          alert("You can compare up to 3 properties at a time.");
          return prev;
        }
        return [...prev, id];
      }
    });
  };

  // Filter & Sort Logic
  const filteredProperties = useMemo(() => {
    return PROPERTIES_DATA.filter((p) => {
      if (filters.purpose !== "all" && p.purpose !== filters.purpose) return false;
      
      if (filters.locality !== "all" && 
          !p.localityArea.toLowerCase().includes(filters.locality.toLowerCase()) && 
          !p.location.toLowerCase().includes(filters.locality.toLowerCase())) {
        return false;
      }

      if (filters.propertyType !== "all" && p.type !== filters.propertyType) return false;

      if (filters.bhk !== "all") {
        if (filters.bhk === "4" && (p.bhk || 0) < 4) return false;
        if (filters.bhk !== "4" && String(p.bhk) !== filters.bhk) return false;
      }

      if (filters.vmrdaOnly && !p.vmrdaApproved) return false;
      if (filters.vastuOnly && !p.vastuCompliant) return false;

      if (filters.searchQuery.trim()) {
        const query = filters.searchQuery.toLowerCase();
        const matchTitle = p.title.toLowerCase().includes(query);
        const matchLoc = p.location.toLowerCase().includes(query);
        const matchTagline = p.tagline.toLowerCase().includes(query);
        if (!matchTitle && !matchLoc && !matchTagline) return false;
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === "price-asc") return a.priceInLakhs - b.priceInLakhs;
      if (filters.sortBy === "price-desc") return b.priceInLakhs - a.priceInLakhs;
      if (filters.sortBy === "featured") return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      return 0;
    });
  }, [filters]);

  const handleHeroSearch = ({
    purpose,
    locality,
    propertyType
  }: {
    purpose: PropertyPurpose | "all";
    locality: string;
    propertyType: string;
    priceRange: string;
  }) => {
    setFilters((prev) => ({
      ...prev,
      purpose,
      locality,
      propertyType
    }));
    setActiveSection("properties");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLocalitySelect = (localityName: string) => {
    let cleanName = localityName;
    if (localityName.includes("Beach Road")) cleanName = "Beach Road";
    else if (localityName.includes("Rushikonda")) cleanName = "Rushikonda";
    else if (localityName.includes("Madhurawada")) cleanName = "Madhurawada";
    else if (localityName.includes("Bheemili")) cleanName = "Bheemili";
    else if (localityName.includes("MVP")) cleanName = "MVP Colony";
    else if (localityName.includes("Kapuluppada")) cleanName = "Kapuluppada";

    setFilters((prev) => ({
      ...prev,
      locality: cleanName
    }));

    setActiveSection("properties");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const favoritePropertiesList = useMemo(() => {
    return PROPERTIES_DATA.filter((p) => favorites.includes(p.id));
  }, [favorites]);

  const comparedPropertiesList = useMemo(() => {
    return PROPERTIES_DATA.filter((p) => comparisonList.includes(p.id));
  }, [comparisonList]);

  // Navigate handler that scrolls to top
  const navigateTo = (page: string) => {
    setActiveSection(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* Sticky Header Navigation */}
      <Navbar
        favoriteCount={favorites.length}
        comparisonCount={comparisonList.length}
        onOpenFavorites={() => setFavoritesModalOpen(true)}
        onOpenComparison={() => {}}
        onOpenAIConcierge={() => setAiConciergeOpen(true)}
        onOpenSiteVisit={() => {
          setSiteVisitProperty(null);
          setSiteVisitOpen(true);
        }}
        activeSection={activeSection}
        setActiveSection={navigateTo}
      />

      {/* ========================================================= */}
      {/* DYNAMIC PAGE VIEWS */}
      {/* ========================================================= */}

      {/* 1. HOME PAGE VIEW */}
      {(activeSection === "hero" || activeSection === "home") && (
        <div>
          {/* Hero Banner */}
          <Hero
            onSearchSubmit={handleHeroSearch}
            onOpenSiteVisit={() => {
              setSiteVisitProperty(null);
              setSiteVisitOpen(true);
            }}
            onOpenAIConcierge={() => setAiConciergeOpen(true)}
          />

          {/* Featured Properties Teaser */}
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-900">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 gap-4 text-left">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-2">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Handpicked Portfolio</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-white">
                  Featured Properties in Visakhapatnam
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Top oceanfront penthouses, VMRDA plots, and luxury villas across Beach Road & Rushikonda.
                </p>
              </div>

              <button
                onClick={() => navigateTo("properties")}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-amber-500/10 transition-all shrink-0"
              >
                <span>View All Properties ({PROPERTIES_DATA.length})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {PROPERTIES_DATA.slice(0, 3).map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  isFavorite={favorites.includes(property.id)}
                  isCompared={comparisonList.includes(property.id)}
                  onToggleFavorite={handleToggleFavorite}
                  onToggleCompare={handleToggleCompare}
                  onSelectProperty={setSelectedProperty}
                  onOpenSiteVisit={(p) => {
                    setSiteVisitProperty(p);
                    setSiteVisitOpen(true);
                  }}
                />
              ))}
            </div>
          </section>

          {/* Why Choose Chanti Real Estate Pillars */}
          <section className="py-16 bg-slate-900/60 border-t border-slate-800 text-left">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
              <div className="text-center max-w-3xl mx-auto space-y-2">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-semibold">
                  Why Chanti Real Estate
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-white">
                  Visakhapatnam's Most Trusted Property Advisors
                </h2>
                <p className="text-xs sm:text-sm text-slate-400">
                  Over 18 years of transparent legal verification, 100% VMRDA sanction compliance, and personalized customer care.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-white text-base">100% Clear Legal Title</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Every property is thoroughly audited by legal experts for encumbrances, title flow, and VMRDA layout sanction.
                  </p>
                </div>

                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-white text-base">100% Vastu Compliant</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Vastu-certified East and North facing entrances designed for optimal light, ventilation, and prosperity.
                  </p>
                </div>

                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-white text-base">Free VIP Chauffeur Visit</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Complimentary luxury pickup and drop service across Visakhapatnam for hassle-free site inspections.
                  </p>
                </div>

                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-white text-base">High Appreciation Corridors</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Strategic investments in Rushikonda IT Hill, Kapuluppada SEZ, and Bheemili Beach Highway.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Explore Other Pages Quick Portal */}
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-900 text-left">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-white">
                Explore Dedicated Real Estate Portals
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Access detailed market intelligence, calculators, and advisory services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div 
                onClick={() => navigateTo("localities")}
                className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all cursor-pointer space-y-4 group"
              >
                <div className="flex items-center justify-between">
                  <MapPin className="w-8 h-8 text-amber-400 group-hover:scale-110 transition-transform" />
                  <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-white">Vizag Locality Guide Page</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Explore land rates, infrastructure,GITAM University, and IT park distances across Rushikonda, Beach Road & Madhurawada.
                  </p>
                </div>
                <span className="text-xs font-semibold text-amber-400 underline inline-block">Open Locality Guide →</span>
              </div>

              <div 
                onClick={() => navigateTo("valuation")}
                className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all cursor-pointer space-y-4 group"
              >
                <div className="flex items-center justify-between">
                  <Building2 className="w-8 h-8 text-amber-400 group-hover:scale-110 transition-transform" />
                  <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-white">Property Valuation Tool Page</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Calculate estimated market valuation for flats, villas, or VMRDA layouts in Visakhapatnam based on current market trends.
                  </p>
                </div>
                <span className="text-xs font-semibold text-amber-400 underline inline-block">Open Valuation Tool →</span>
              </div>

              <div 
                onClick={() => navigateTo("calculator")}
                className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all cursor-pointer space-y-4 group"
              >
                <div className="flex items-center justify-between">
                  <Calculator className="w-8 h-8 text-amber-400 group-hover:scale-110 transition-transform" />
                  <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-white">Home Loan EMI Calculator Page</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Calculate monthly EMIs, view amortization schedules, and compare SBI, HDFC & ICICI home loan interest rates in Vizag.
                  </p>
                </div>
                <span className="text-xs font-semibold text-amber-400 underline inline-block">Open EMI Calculator →</span>
              </div>

            </div>
          </section>

          {/* About Founder Presentation Section */}
          <AboutFounder />

          {/* Testimonials */}
          <Testimonials />

          {/* Contact Section */}
          <ContactSection />
        </div>
      )}

      {/* 2. PROPERTIES CATALOGUE PAGE */}
      {activeSection === "properties" && (
        <div>
          <PageHeader
            title="Properties Catalogue"
            subtitle="Browse handpicked oceanfront penthouses, independent villas, VMRDA-approved plots, and commercial properties in Visakhapatnam."
            badge="100% VMRDA & Legal Verified"
            onNavigateHome={() => navigateTo("hero")}
          />

          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
            {/* Search and Filters */}
            <PropertySearchFilter
              filters={filters}
              onFilterChange={(updated) => setFilters((prev) => ({ ...prev, ...updated }))}
              onResetFilters={() =>
                setFilters({
                  purpose: "all",
                  locality: "all",
                  propertyType: "all",
                  minPrice: 0,
                  maxPrice: 500,
                  bhk: "all",
                  status: "all",
                  vmrdaOnly: false,
                  vastuOnly: false,
                  searchQuery: "",
                  sortBy: "featured"
                })
              }
              totalResults={filteredProperties.length}
            />

            {/* Property Cards Stack */}
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 gap-8 sm:gap-10">
                {filteredProperties.map((property) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    isFavorite={favorites.includes(property.id)}
                    isCompared={comparisonList.includes(property.id)}
                    onToggleFavorite={handleToggleFavorite}
                    onToggleCompare={handleToggleCompare}
                    onSelectProperty={setSelectedProperty}
                    onOpenSiteVisit={(p) => {
                      setSiteVisitProperty(p);
                      setSiteVisitOpen(true);
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="p-12 text-center bg-slate-900 rounded-2xl border border-slate-800 space-y-4">
                <Sparkles className="w-10 h-10 text-amber-400 mx-auto opacity-70" />
                <h3 className="text-lg font-serif font-bold text-white">No Properties Match Your Filter Criteria</h3>
                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  Try adjusting your locality, BHK config, or budget filters to view available properties in Visakhapatnam.
                </p>
                <button
                  onClick={() =>
                    setFilters({
                      purpose: "all",
                      locality: "all",
                      propertyType: "all",
                      minPrice: 0,
                      maxPrice: 500,
                      bhk: "all",
                      status: "all",
                      vmrdaOnly: false,
                      vastuOnly: false,
                      searchQuery: "",
                      sortBy: "featured"
                    })
                  }
                  className="px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </main>
        </div>
      )}

      {/* 3. VIZAG LOCALITY GUIDE PAGE */}
      {activeSection === "localities" && (
        <div>
          <PageHeader
            title="Visakhapatnam Locality & Growth Guide"
            subtitle="In-depth market trends, land appreciation rates, infrastructure projects, and lifestyle metrics across Vizag's prime growth corridors."
            badge="Coastal Market Intelligence"
            onNavigateHome={() => navigateTo("hero")}
          />
          <LocalityGuide onSelectLocality={handleLocalitySelect} />
        </div>
      )}

      {/* 4. OUR SERVICES PAGE */}
      {activeSection === "services" && (
        <div>
          <PageHeader
            title="Our Real Estate Advisory Services"
            subtitle="Comprehensive end-to-end property solutions including VMRDA legal verification, NRI investment desk, joint venture development, and interior design."
            badge="Full-Spectrum Advisory"
            onNavigateHome={() => navigateTo("hero")}
          />
          <ServicesSection
            onOpenSiteVisit={() => {
              setSiteVisitProperty(null);
              setSiteVisitOpen(true);
            }}
            onOpenAIConcierge={() => setAiConciergeOpen(true)}
          />
        </div>
      )}

      {/* 5. VALUATION TOOL PAGE */}
      {activeSection === "valuation" && (
        <div>
          <PageHeader
            title="Instant Property Valuation Tool"
            subtitle="Estimate the current market price of your flat, house, or plot in Visakhapatnam using local neighborhood benchmark data."
            badge="Smart Estimation Engine"
            onNavigateHome={() => navigateTo("hero")}
          />
          <PropertyValuationTool />
        </div>
      )}

      {/* 6. EMI CALCULATOR PAGE */}
      {activeSection === "calculator" && (
        <div>
          <PageHeader
            title="Home Loan & EMI Calculator"
            subtitle="Plan your property purchase in Visakhapatnam with real-time interest calculation, amortization schedule, and bank rate comparisons."
            badge="Financial Planning Tool"
            onNavigateHome={() => navigateTo("hero")}
          />
          <EMICalculator />
        </div>
      )}

      {/* 7. ABOUT CHANTI PAGE */}
      {activeSection === "about" && (
        <div>
          <PageHeader
            title="About Chanti Real Estate & Founder"
            subtitle="18+ years of shaping Visakhapatnam's real estate skyline with trust, 100% legal transparency, and client-first commitment."
            badge="Founder & Legacy"
            onNavigateHome={() => navigateTo("hero")}
          />
          <AboutFounder />
        </div>
      )}

      {/* 8. CONTACT PAGE */}
      {activeSection === "contact" && (
        <div>
          <PageHeader
            title="Contact Chanti Real Estate Headquarters"
            subtitle="Visit our corporate office in Waltair Uplands, Visakhapatnam, or reach out directly for property inquiries and layout site visits."
            badge="Corporate Office"
            onNavigateHome={() => navigateTo("hero")}
          />
          <ContactSection />
        </div>
      )}

      {/* Footer */}
      <Footer onNavClick={navigateTo} />

      {/* Property Modal */}
      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
          isFavorite={favorites.includes(selectedProperty.id)}
          onToggleFavorite={handleToggleFavorite}
          onOpenSiteVisit={(p) => {
            setSiteVisitProperty(p);
            setSiteVisitOpen(true);
          }}
        />
      )}

      {/* Floating Comparison Drawer */}
      <ComparisonDrawer
        comparedProperties={comparedPropertiesList}
        onRemoveFromComparison={handleToggleCompare}
        onClearComparison={() => setComparisonList([])}
        onClose={() => setComparisonList([])}
        onSelectProperty={setSelectedProperty}
      />

      {/* AI Property Concierge Modal */}
      {aiConciergeOpen && (
        <AIConciergeModal
          onClose={() => setAiConciergeOpen(false)}
          onOpenSiteVisit={() => {
            setAiConciergeOpen(false);
            setSiteVisitProperty(null);
            setSiteVisitOpen(true);
          }}
        />
      )}

      {/* Free Site Visit Booking Modal */}
      {siteVisitOpen && (
        <SiteVisitModal
          property={siteVisitProperty}
          onClose={() => setSiteVisitOpen(false)}
        />
      )}

      {/* Saved Favorites Drawer/Modal */}
      {favoritesModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-amber-500/40 rounded-2xl shadow-2xl p-6 text-left max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-rose-500 fill-current" />
                <h3 className="text-lg font-serif font-bold text-white">Your Saved Properties ({favoritePropertiesList.length})</h3>
              </div>
              <button
                onClick={() => setFavoritesModalOpen(false)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {favoritePropertiesList.length > 0 ? (
              <div className="space-y-3">
                {favoritePropertiesList.map((p) => (
                  <div key={p.id} className="flex items-center justify-between p-3 bg-slate-950 rounded-xl border border-slate-800">
                    <div className="flex items-center gap-3">
                      <img src={p.images[0]} alt={p.title} className="w-16 h-12 rounded-lg object-cover" referrerPolicy="no-referrer" />
                      <div>
                        <h4 className="font-serif font-bold text-xs text-white line-clamp-1">{p.title}</h4>
                        <p className="text-[11px] text-amber-400 font-bold">{p.priceDisplay} • {p.location}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setFavoritesModalOpen(false);
                          setSelectedProperty(p);
                        }}
                        className="px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs"
                      >
                        Inspect
                      </button>
                      <button
                        onClick={() => handleToggleFavorite(p.id)}
                        className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-rose-400"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-400 text-center py-6">
                You haven't saved any properties yet. Click the heart icon on any property card to bookmark it here.
              </p>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
