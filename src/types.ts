export type PropertyPurpose = "buy" | "rent" | "plot" | "commercial";

export type PropertyType = 
  | "Apartment"
  | "Villa"
  | "Penthouse"
  | "VMRDA Plot"
  | "Commercial Space"
  | "Duplex Villa"
  | "Gated Layout";

export type PropertyStatus = "Ready to Move" | "Under Construction" | "New Launch";

export interface Property {
  id: string;
  title: string;
  tagline: string;
  purpose: PropertyPurpose;
  type: PropertyType;
  status: PropertyStatus;
  priceDisplay: string;
  priceInLakhs: number; // numeric for filtering (e.g. 85 for 85L, 250 for 2.5 Cr)
  location: string; // e.g. "Beach Road, Visakhapatnam"
  localityArea: string; // e.g. "Beach Road", "Rushikonda", "MVP Colony", "Madhurawada", "Bheemili", "Kapuluppada", "Waltair Uplands"
  bhk?: number;
  bathrooms?: number;
  areaSqFt: number;
  pricePerSqFt: number;
  facing: "East" | "North" | "North-East" | "West" | "South";
  vastuCompliant: boolean;
  vmrdaApproved: boolean;
  reraApproved: boolean;
  reraNumber: string;
  featured: boolean;
  images: string[];
  floorPlanUrl?: string;
  videoUrl?: string;
  virtual3DUrl?: string;
  description: string;
  keyFeatures: string[];
  amenities: string[];
  nearbyLandmarks: { name: string; distance: string }[];
  possessionDate: string;
  address: string;
  coordinates: { lat: number; lng: number };
}

export interface VizagLocality {
  id: string;
  name: string;
  tagline: string;
  avgPricePerSqFt: string;
  annualGrowth: string;
  keyHighlights: string[];
  description: string;
  image: string;
  suitableFor: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string; // e.g. "Software Architect & NRI Buyer (USA)", "Doctor, MVP Colony", "Business Owner"
  location: string;
  propertyPurchased: string;
  comment: string;
  rating: number;
  avatar: string;
  verified: boolean;
  date: string;
}

export interface FilterState {
  purpose: PropertyPurpose | "all";
  locality: string;
  propertyType: string;
  minPrice: number;
  maxPrice: number;
  bhk: string; // "all", "1", "2", "3", "4", "4+"
  status: string; // "all", "Ready to Move", "Under Construction", "New Launch"
  vmrdaOnly: boolean;
  vastuOnly: boolean;
  searchQuery: string;
  sortBy: "price-asc" | "price-desc" | "newest" | "featured";
}

export interface SiteVisitRequest {
  fullName: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  propertyId?: string;
  propertyTitle?: string;
  pickupRequired: boolean;
  pickupLocation?: string;
  notes?: string;
}

export interface PropertyValuationRequest {
  propertyNameOrArea: string;
  locality: string;
  propertyType: string;
  sizeSqFt: number;
  bhkOrAge: string;
  ownerName: string;
  phone: string;
}
