import { Property } from "../types";

// Import local generated images
import heroImage from "../assets/images/hero_vizag_realestate_1784723406185.jpg";
import luxuryVillaImage from "../assets/images/luxury_villa_vizag_1784723420489.jpg";
import gatedCommunityImage from "../assets/images/gated_community_layout_1784723442629.jpg";

export const PROPERTIES_DATA: Property[] = [
  {
    id: "chanti-ocean-heights",
    title: "Chanti Ocean Heights - Penthouse & Ultra Luxury Apartments",
    tagline: "Unobstructed 270° Panoramic Bay of Bengal Sea View on Beach Road",
    purpose: "buy",
    type: "Penthouse",
    status: "Ready to Move",
    priceDisplay: "₹ 3.85 Cr",
    priceInLakhs: 385,
    location: "Beach Road, Near Novotel, Visakhapatnam",
    localityArea: "Beach Road",
    bhk: 4,
    bathrooms: 5,
    areaSqFt: 3850,
    pricePerSqFt: 10000,
    facing: "East",
    vastuCompliant: true,
    vmrdaApproved: true,
    reraApproved: true,
    reraNumber: "P03290010482",
    featured: true,
    images: [
      heroImage,
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    floorPlanUrl: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    virtual3DUrl: "https://my.matterport.com/show/?m=sample",
    description: "Chanti Ocean Heights stands as an architectural beacon along the iconic Beach Road promenade in Visakhapatnam. Offering world-class 4BHK penthouses and sea-facing luxury apartments, every home features floor-to-ceiling soundproof acoustic glass windows, private plunge pools on expansive cantilever balconies, and direct sunrise views over the Bay of Bengal.",
    keyFeatures: [
      "270-degree Unobstructed Sea View",
      "Private Deck with Jacuzzi & Plunge Pool",
      "Italian Marble Flooring & Smart Home Automation",
      "3 Dedicated Basement Car Parks with EV Fast Charging",
      "Triple-height Grand Entrance Lobby with Concierge Desk"
    ],
    amenities: [
      "Sky Infinity Pool overlooking RK Beach",
      "State-of-the-art Fitness Center & Steam Sauna",
      "Private Movie Screening Theater (18 Seats)",
      "Clubhouse with Rooftop Lounge & Cafe",
      "24/7 Multi-tier Biometric Security & CCTV",
      "100% DG Power Backup for All Points"
    ],
    nearbyLandmarks: [
      { name: "Novotel Varun Beach Hotel", distance: "0.3 km" },
      { name: "Submarine Museum & RK Beach", distance: "0.8 km" },
      { name: "Waltair Club", distance: "2.1 km" },
      { name: "Apollo Hospitals, Arilova", distance: "5.5 km" },
      { name: "Visakhapatnam Airport", distance: "14 km" }
    ],
    possessionDate: "Immediate Possession",
    address: "Door No. 10-28-4, Beach Road, Opposite Park Hotel, Visakhapatnam, AP 530002",
    coordinates: { lat: 17.712, lng: 83.318 }
  },
  {
    id: "chanti-palm-villas-rushikonda",
    title: "Chanti Palm Meadows - Independent Hilltop Luxury Villa",
    tagline: "Serene Ocean & Hill View Gated Villa Community near IT Hill",
    purpose: "buy",
    type: "Villa",
    status: "Ready to Move",
    priceDisplay: "₹ 2.45 Cr",
    priceInLakhs: 245,
    location: "Rushikonda IT Hill Corridor, Visakhapatnam",
    localityArea: "Rushikonda",
    bhk: 4,
    bathrooms: 4,
    areaSqFt: 3200,
    pricePerSqFt: 7656,
    facing: "North-East",
    vastuCompliant: true,
    vmrdaApproved: true,
    reraApproved: true,
    reraNumber: "P03290021890",
    featured: true,
    images: [
      luxuryVillaImage,
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
    ],
    floorPlanUrl: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80",
    description: "Nestled in the tranquil green foothills of Rushikonda, Chanti Palm Meadows provides independent 4BHK triplex luxury villas. Enjoy cool ocean breezes, private garden lawns, solar power integration, and close proximity to Rushikonda Blue Flag Beach and the bustling IT Hill Tech Park.",
    keyFeatures: [
      "Triplex Villa with Private Elevators",
      "Private Rooftop Garden & Barbecue Area",
      "Solar Rooftop Power System (5kW Grid-tied)",
      "Individual Borewell & Municipal Water Line",
      "100% Vastu Compliant Architectural Blueprint"
    ],
    amenities: [
      "Gated Community with 24/7 Security Patrol",
      "Clubhouse with Badminton & Squash Court",
      "Temperature Controlled Swimming Pool",
      "Children's Play Zone & Jogging Track",
      "Underground Electrical CCT Cable Lines"
    ],
    nearbyLandmarks: [
      { name: "Rushikonda Blue Flag Beach", distance: "1.2 km" },
      { name: "Millennium IT Towers / Tech Park", distance: "1.5 km" },
      { name: "GITAM Deemed University", distance: "2.8 km" },
      { name: "Yendada Junction", distance: "3.5 km" }
    ],
    possessionDate: "Ready to Move",
    address: "Plot 42-45, Chanti Palm Meadows, Hill No. 2, Rushikonda, Visakhapatnam, AP 530045",
    coordinates: { lat: 17.781, lng: 83.382 }
  },
  {
    id: "chanti-emerald-greens-bheemili",
    title: "Chanti Emerald Greens - VMRDA Approved Beachfront Plots",
    tagline: "Prime Investment Oceanfront Layout on Vizag-Bheemili Beach Road",
    purpose: "plot",
    type: "VMRDA Plot",
    status: "Ready to Move",
    priceDisplay: "₹ 48 Lakhs",
    priceInLakhs: 48,
    location: "Vizag-Bheemili Coastal Highway, Bheemili",
    localityArea: "Bheemili",
    areaSqFt: 2400, // 267 sq yards
    pricePerSqFt: 2000,
    facing: "East",
    vastuCompliant: true,
    vmrdaApproved: true,
    reraApproved: true,
    reraNumber: "P03290034211",
    featured: true,
    images: [
      gatedCommunityImage,
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Chanti Emerald Greens is a fully developed, VMRDA-approved 35-acre gated township plot layout located directly along the scenic Vizag-Bheemili 6-lane coastal corridor. With 40ft & 60ft wide blacktop roads, underground drainage, avenue plantations, and immediate registration, it represents the most sought-after land investment in Vizag.",
    keyFeatures: [
      "100% VMRDA & RERA Approved Layout with L.P. No.",
      "Clear Title Deeds & Spot Bank Loan Assistance up to 75%",
      "40ft and 60ft Blacktop Roads with LED Street Lighting",
      "Underground Water & Drainage Piping Network",
      "Compound Wall Encircling Entire Township"
    ],
    amenities: [
      "Grand Entrance Arch with Security Cabin",
      "Avenue Plantation & Central Theme Park",
      "Children Play Equipment & Walking Track",
      "Overhead Water Tank with High Pressure Supply",
      "24/7 Security Supervision"
    ],
    nearbyLandmarks: [
      { name: "Bheemili Beach & Heritage Fort", distance: "2.5 km" },
      { name: "INS Kalinga Naval Station", distance: "4.0 km" },
      { name: "Proposed Bhogapuram Int'l Airport", distance: "18 km" },
      { name: "Tagarapuvalasa Junction", distance: "8.0 km" }
    ],
    possessionDate: "Immediate Registration",
    address: "Survey No. 128/1, Coastal Road, Bheemunipatnam, Visakhapatnam, AP 531163",
    coordinates: { lat: 17.892, lng: 83.451 }
  },
  {
    id: "chanti-skyline-madhurawada",
    title: "Chanti Skyline Towers - 3BHK Gated Community Flat",
    tagline: "Modern High-Rise Apartment in High-Growth Madhurawada Hub",
    purpose: "buy",
    type: "Apartment",
    status: "Under Construction",
    priceDisplay: "₹ 82 Lakhs",
    priceInLakhs: 82,
    location: "Midhilapuri Colony, Madhurawada, Visakhapatnam",
    localityArea: "Madhurawada",
    bhk: 3,
    bathrooms: 3,
    areaSqFt: 1650,
    pricePerSqFt: 4969,
    facing: "North",
    vastuCompliant: true,
    vmrdaApproved: true,
    reraApproved: true,
    reraNumber: "P03290041120",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
    ],
    floorPlanUrl: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
    description: "Located in the heart of Madhurawada, Vizag's fastest expanding residential corridor, Chanti Skyline Towers offers beautifully designed 3BHK flats with zero wasted space, maximum natural cross-ventilation, and 30+ lifestyle amenities.",
    keyFeatures: [
      "Zero Common Wall Architecture for Complete Privacy",
      "Spacious Balconies with Panoramic Valley Views",
      "Teakwood Main Door & Premium UPVC Windows",
      "Covered Stilt Parking Slot included in Price",
      "100% Vastu Approved Floor Plans"
    ],
    amenities: [
      "Clubhouse with Air-conditioned Gym & Party Hall",
      "Swimming Pool with Kids Wading Basin",
      "Badminton Court & Indoor Games Room",
      "Solar Water Heater Supply for Bathrooms",
      "Piped Gas Network & Rainwater Harvesting"
    ],
    nearbyLandmarks: [
      { name: "Dr. YSR ACA-VDCA Cricket Stadium", distance: "1.5 km" },
      { name: "Pydah College & Sanketika Engg College", distance: "2.0 km" },
      { name: "Car Shed Junction", distance: "1.8 km" },
      { name: "Health City Arilova", distance: "6.0 km" }
    ],
    possessionDate: "December 2026",
    address: "Main Road, Midhilapuri Vuda Layout, Madhurawada, Visakhapatnam, AP 530048",
    coordinates: { lat: 17.803, lng: 83.352 }
  },
  {
    id: "chanti-regency-mvp-colony",
    title: "Chanti Regency - Executive 3BHK Apartment in Prime MVP",
    tagline: "Exclusive Low-Density Luxury Residence in Vizag's Premier Locality",
    purpose: "buy",
    type: "Apartment",
    status: "Ready to Move",
    priceDisplay: "₹ 1.35 Cr",
    priceInLakhs: 135,
    location: "Sector 3, MVP Colony, Visakhapatnam",
    localityArea: "MVP Colony",
    bhk: 3,
    bathrooms: 3,
    areaSqFt: 2100,
    pricePerSqFt: 6428,
    facing: "East",
    vastuCompliant: true,
    vmrdaApproved: true,
    reraApproved: true,
    reraNumber: "P03290059910",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "MVP Colony is renowned as Vizag's most prestigious, peaceful, and fully developed residential enclave. Chanti Regency is a boutique 5-story residence with only 10 total families, offering spacious 2100 sq.ft 3BHK flats with premium woodwork and prime connectivity.",
    keyFeatures: [
      "Only 2 Apartments per Floor for Maximum Exclusivity",
      "High Ceiling (10.5 ft) with POP False Ceiling",
      "Dedicated Servant/Utility Room with Attached Bath",
      "Reserved Underground Parking for 2 Cars",
      "Abundant Municipal Water & Borewell Backup"
    ],
    amenities: [
      "8-Passenger Schindler High-speed Elevator",
      "Rooftop Terrace Garden & Party Area",
      "24/7 CCTV & Security Guard Station",
      "Power Backup Generator for Full Flat Light/Fan"
    ],
    nearbyLandmarks: [
      { name: "MVP Double Road Shopping District", distance: "0.2 km" },
      { name: "AS Raja College & Samata College", distance: "0.5 km" },
      { name: "Tenneti Park & Beach Road", distance: "1.8 km" },
      { name: "Vizag Railway Station", distance: "7.0 km" }
    ],
    possessionDate: "Ready to Move",
    address: "Plot 88, Sector 3, MVP Colony, Visakhapatnam, AP 530017",
    coordinates: { lat: 17.742, lng: 83.331 }
  },
  {
    id: "chanti-kapuluppada-ocean-plots",
    title: "Chanti Bay View Enclave - Kapuluppada Premium Plots",
    tagline: "Hillside Ocean View Plots in Vizag's High-Value IT & Resort Zone",
    purpose: "plot",
    type: "VMRDA Plot",
    status: "New Launch",
    priceDisplay: "₹ 62 Lakhs",
    priceInLakhs: 62,
    location: "Kapuluppada IT SEZ Hilltop, Visakhapatnam",
    localityArea: "Kapuluppada",
    areaSqFt: 2160, // 240 sq yards
    pricePerSqFt: 2870,
    facing: "North-East",
    vastuCompliant: true,
    vmrdaApproved: true,
    reraApproved: true,
    reraNumber: "P03290067789",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Located right behind the Kapuluppada IT SEZ and close to upcoming luxury resorts, Chanti Bay View Enclave is a hill-slope gated layout providing direct sightlines of the sea. Ideal for custom independent villa construction or high-return plot investment.",
    keyFeatures: [
      "Elevated Topography offering permanent Ocean Vistas",
      "VMRDA Approved L.P. No. 18/2025",
      "50ft Wide Main Sector Roads with Paver Blocks",
      "Solar Street Lighting & Underground Fiber Cable Conduit",
      "Instant Registration & Title Verification Certificate Provided"
    ],
    amenities: [
      "Gated Security Entry Gate with Smart Boom Barrier",
      "Lush Green Central Park with Amphitheater",
      "Jogging & Cycling Tracks",
      "Underground Drainage Network"
    ],
    nearbyLandmarks: [
      { name: "Kapuluppada IT SEZ Campus", distance: "0.8 km" },
      { name: "Rushikonda Beach", distance: "4.5 km" },
      { name: "Lawson's Bay / Tenneti Park", distance: "9.0 km" }
    ],
    possessionDate: "Immediate Registration",
    address: "Kapuluppada Layout Road, Visakhapatnam, AP 530045",
    coordinates: { lat: 17.825, lng: 83.398 }
  },
  {
    id: "chanti-commercial-plaza-waltair",
    title: "Chanti Corporate Hub - Prime Retail & Office Space",
    tagline: "High Street Commercial Space in Waltair Uplands Business District",
    purpose: "commercial",
    type: "Commercial Space",
    status: "Ready to Move",
    priceDisplay: "₹ 2.90 Cr",
    priceInLakhs: 290,
    location: "Waltair Main Road, Near Siripuram, Visakhapatnam",
    localityArea: "Waltair Uplands",
    areaSqFt: 2800,
    pricePerSqFt: 10357,
    facing: "East",
    vastuCompliant: true,
    vmrdaApproved: true,
    reraApproved: true,
    reraNumber: "P03290078821",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Waltair Uplands and Siripuram represent Vizag's most affluent commercial and banking district. Chanti Corporate Hub offers premium bare-shell commercial floors suitable for MNC corporate offices, bank branches, luxury showrooms, or diagnostic centers with high rental yield potential.",
    keyFeatures: [
      "High Visibility Main Road Frontage with Glass Facade",
      "Grand Floor Height of 12 Feet for Showroom Elegance",
      "Centralized VRV Air-Conditioning Piping Provision",
      "Dedicated Basement Parking Allocation for Staff & Clients",
      "High Estimated Rental Yield (7.5% - 8.2% per annum in Vizag)"
    ],
    amenities: [
      "2 High-Speed Passenger Elevators + 1 Service Lift",
      "100% DG Power Backup including Heavy Machinery Load",
      "24/7 Security Guarding & CCTV Monitoring",
      "Fire Hydrant & Sprinkler Safety Compliance"
    ],
    nearbyLandmarks: [
      { name: "Siripuram Circle & Sampath Vinayaka Temple", distance: "0.4 km" },
      { name: " Dutt Island Shopping Mall", distance: "0.6 km" },
      { name: "Andhra University Main Gate", distance: "1.0 km" }
    ],
    possessionDate: "Immediate Possession",
    address: "Waltair Main Road, Opposite HSBC Building, Visakhapatnam, AP 530003",
    coordinates: { lat: 17.728, lng: 83.315 }
  },
  {
    id: "chanti-haven-yendada",
    title: "Chanti Haven Enclave - 4BHK Duplex Villa in Yendada",
    tagline: "Gated Luxury Duplex Villa with Private Swimming Pool",
    purpose: "buy",
    type: "Duplex Villa",
    status: "Ready to Move",
    priceDisplay: "₹ 1.95 Cr",
    priceInLakhs: 195,
    location: "Yendada Main Road, Visakhapatnam",
    localityArea: "Yendada",
    bhk: 4,
    bathrooms: 4,
    areaSqFt: 2950,
    pricePerSqFt: 6610,
    facing: "North",
    vastuCompliant: true,
    vmrdaApproved: true,
    reraApproved: true,
    reraNumber: "P03290081234",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
    ],
    floorPlanUrl: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=800&q=80",
    description: "Yendada is strategically positioned between MVP Colony and Rushikonda, making it a prime residential hotspot. Chanti Haven Enclave consists of 12 luxury gated duplex villas with private garden lawns, modular kitchens, and contemporary architectural finishes.",
    keyFeatures: [
      "Gated Community Villa with Private Lawn",
      "Full Modular Kitchen with Chimney & Hettich Fittings",
      "Master Bedroom with Walk-in Closet & Wooden Flooring",
      "2 Car Covered Portico Parking",
      "Solar Water Heater & Underground Sump Storage"
    ],
    amenities: [
      "Community Swimming Pool & Clubhouse",
      "Solar Perimeter Security Fencing",
      "Intercom Connection to Security Gate",
      "Manicured Central Landscape Garden"
    ],
    nearbyLandmarks: [
      { name: "GITAM Hospital & University", distance: "1.5 km" },
      { name: "Rushikonda Beach", distance: "3.0 km" },
      { name: "Health City Arilova", distance: "4.0 km" }
    ],
    possessionDate: "Ready to Move",
    address: "Chanti Haven, Yendada Junction, Visakhapatnam, AP 530045",
    coordinates: { lat: 17.765, lng: 83.358 }
  }
];
