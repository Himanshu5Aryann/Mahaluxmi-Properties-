export type PropertyCategory = "Buy" | "Rent" | "Residential" | "Commercial" | "Plots" | "Agriculture Land";

export interface Property {
  id: string;
  name: string;
  location: string;
  type: string;
  price: string;
  area: string;
  bedrooms?: number;
  bathrooms?: number;
  parking?: string;
  categories: PropertyCategory[];
  image: string;
  gallery: string[];
  features: string[];
  amenities: string[];
  nearby: string[];
  description: string;
}

export const properties: Property[] = [
  {
    id: "p1",
    name: "Model Town Garden Residency",
    location: "Model Town, Panipat",
    type: "Apartment",
    price: "\u20b9 72 Lakh*",
    area: "1,450 sq.ft",
    bedrooms: 3,
    bathrooms: 2,
    parking: "1 Covered",
    categories: ["Buy", "Residential"],
    image:
      "https://images.pexels.com/photos/7546651/pexels-photo-7546651.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    gallery: [
      "https://images.pexels.com/photos/7546651/pexels-photo-7546651.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      "https://images.pexels.com/photos/7587864/pexels-photo-7587864.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      "https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    ],
    features: ["Modular Kitchen", "Vastu Compliant", "Gated Society", "Power Backup"],
    amenities: ["24x7 Security", "Lift Access", "Children's Play Area", "Community Hall"],
    nearby: ["Model Town Market", "Delhi-Panipat Road access", "Panipat Junction"],
    description:
      "A well-planned 3BHK apartment with bright living spaces, practical modern finishes and a secure residential setting in Model Town, suited to families seeking a well-connected Panipat address.",
  },
  {
    id: "p2",
    name: "Sector 13-17 Courtyard Villa",
    location: "Sector 13-17, Panipat",
    type: "Villa",
    price: "\u20b9 2.1 Crore*",
    area: "3,200 sq.ft",
    bedrooms: 4,
    bathrooms: 4,
    parking: "2 Covered",
    categories: ["Buy", "Residential"],
    image:
      "https://images.pexels.com/photos/8082328/pexels-photo-8082328.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    gallery: [
      "https://images.pexels.com/photos/8082328/pexels-photo-8082328.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      "https://images.pexels.com/photos/26556326/pexels-photo-26556326.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      "https://images.pexels.com/photos/7031879/pexels-photo-7031879.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    ],
    features: ["Private Lawn", "Double Height Ceiling", "Premium Fittings", "Servant Room"],
    amenities: ["Landscaped Garden", "CCTV Surveillance", "Solar Ready", "Home Theatre Room"],
    nearby: ["Sector 13-17 market", "Schools and neighbourhood parks", "Panipat city centre"],
    description:
      "An expansive 4BHK villa with a private lawn, generous living areas and premium interiors in Sector 13-17, designed for families who value space and privacy.",
  },
  {
    id: "p3",
    name: "GT Road Business Centre",
    location: "GT Road, Panipat",
    type: "Office Space",
    price: "\u20b9 48,000/month*",
    area: "1,100 sq.ft",
    parking: "Shared",
    categories: ["Rent", "Commercial"],
    image:
      "https://images.pexels.com/photos/5511098/pexels-photo-5511098.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    gallery: [
      "https://images.pexels.com/photos/5511098/pexels-photo-5511098.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      "https://images.pexels.com/photos/13219418/pexels-photo-13219418.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    ],
    features: ["Main Market Frontage", "Central AC Ready", "High Footfall Zone", "Fire Safety Compliant"],
    amenities: ["24x7 Access", "Dedicated Parking", "Backup Power", "Pantry Space"],
    nearby: ["GT Road commercial belt", "Panipat Bus Stand", "NH-44 access"],
    description:
      "A flexible commercial office suite on Panipat's GT Road, suited to professional firms seeking visible frontage, convenient road access and shared parking.",
  },
  {
    id: "p4",
    name: "Ram Lal Chowk Retail Shop",
    location: "Ram Lal Chowk, Panipat",
    type: "Shop",
    price: "\u20b9 42 Lakh*",
    area: "420 sq.ft",
    categories: ["Buy", "Commercial"],
    image:
      "https://images.pexels.com/photos/37224965/pexels-photo-37224965.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    gallery: [
      "https://images.pexels.com/photos/37224965/pexels-photo-37224965.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      "https://images.pexels.com/photos/27459248/pexels-photo-27459248.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    ],
    features: ["Ground Floor Shop", "Street-Facing Frontage", "Established Trading Area", "Clear Title"],
    amenities: ["Local Retail Footfall", "Nearby Banks & ATMs", "Public Transport Access"],
    nearby: ["Ram Lal Chowk market", "GT Road", "Panipat Bus Stand"],
    description:
      "A ready-to-use ground-floor shop near Ram Lal Chowk, suitable for a neighbourhood retailer, service business or compact showroom in Panipat.",
  },
  {
    id: "p5",
    name: "Sector 12 Residential Plot",
    location: "Sector 12, Panipat",
    type: "Plot / Land",
    price: "\u20b9 78 Lakh*",
    area: "250 sq.yd",
    categories: ["Buy", "Plots"],
    image:
      "https://images.pexels.com/photos/38574684/pexels-photo-38574684.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    gallery: [
      "https://images.pexels.com/photos/38574684/pexels-photo-38574684.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      "https://images.pexels.com/photos/36422828/pexels-photo-36422828.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    ],
    features: ["Clear Title & Approved", "Rectangular Plot", "Road Facing", "Ready for Construction"],
    amenities: ["Electricity Connection Nearby", "Water Supply Access", "Sector Road Access"],
    nearby: ["Sector 12 market", "Neighbourhood schools", "Panipat city centre"],
    description:
      "A residential plot in Sector 12 with a regular layout and road access, offering a practical option for buyers planning to build a home in Panipat.",
  },
  {
    id: "p6",
    name: "Tehsil Camp Family Apartment",
    location: "Tehsil Camp, Panipat",
    type: "Apartment",
    price: "\u20b9 17,000/month*",
    area: "1,050 sq.ft",
    bedrooms: 2,
    bathrooms: 2,
    parking: "1 Open",
    categories: ["Rent", "Residential"],
    image:
      "https://images.pexels.com/photos/7031714/pexels-photo-7031714.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    gallery: [
      "https://images.pexels.com/photos/7031714/pexels-photo-7031714.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      "https://images.pexels.com/photos/6636320/pexels-photo-6636320.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      "https://images.pexels.com/photos/27051764/pexels-photo-27051764.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    ],
    features: ["Semi-Furnished", "Balcony View", "Family Preferred", "Ready to Move"],
    amenities: ["Lift Access", "Security Guard", "Water Storage", "Nearby Park"],
    nearby: ["Tehsil Camp Main Road", "Local market and schools", "Panipat Junction"],
    description:
      "A comfortable semi-furnished 2BHK apartment for rent in Tehsil Camp, with practical storage and everyday amenities for a small family or working professional.",
  },
  {
    id: "p7",
    name: "Samalkha Agricultural Land",
    location: "Samalkha, Haryana",
    type: "Agricultural Land",
    price: "\u20b9 3.25 Crore*",
    area: "2 acres",
    categories: ["Buy", "Agriculture Land"],
    image:
      "https://images.pexels.com/photos/38574684/pexels-photo-38574684.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    gallery: [
      "https://images.pexels.com/photos/38574684/pexels-photo-38574684.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      "https://images.pexels.com/photos/36422828/pexels-photo-36422828.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    ],
    features: ["Agricultural Parcel", "Roadside Approach", "Suitable for Farming", "Site Inspection Available"],
    amenities: ["Road Access", "Open Land", "Nearby Samalkha Town"],
    nearby: ["Samalkha town", "Samalkha railway station", "NH-44 corridor"],
    description:
      "A two-acre agricultural parcel near Samalkha for buyers exploring farming or long-term land investment. Verify land use, title and access during due diligence.",
  },
  {
    id: "p8",
    name: "Assandh Road Independent House",
    location: "Assandh Road, Panipat",
    type: "Independent House",
    price: "\u20b9 88 Lakh*",
    area: "2,200 sq.ft",
    bedrooms: 3,
    bathrooms: 3,
    parking: "2 Open",
    categories: ["Buy", "Residential"],
    image:
      "https://images.pexels.com/photos/8082328/pexels-photo-8082328.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    gallery: [
      "https://images.pexels.com/photos/8082328/pexels-photo-8082328.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      "https://images.pexels.com/photos/26556326/pexels-photo-26556326.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      "https://images.pexels.com/photos/7031879/pexels-photo-7031879.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    ],
    features: ["Independent Entry", "Family-Sized Living Room", "Vastu Compliant", "Ready to Move"],
    amenities: ["Private Parking", "Terrace Access", "Nearby Daily Essentials"],
    nearby: ["Assandh Road corridor", "Sector 11 market", "Panipat city centre"],
    description:
      "A practical 3-bedroom independent house near Assandh Road, with private parking and a ready-to-move layout for families looking to own a home in Panipat.",
  },
];

export const propertyFilters: { label: string; value: "All" | PropertyCategory }[] = [
  { label: "All", value: "All" },
  { label: "Buy", value: "Buy" },
  { label: "Rent", value: "Rent" },
  { label: "Residential", value: "Residential" },
  { label: "Commercial", value: "Commercial" },
  { label: "Plots", value: "Plots" },
  { label: "Agriculture Land", value: "Agriculture Land" },
];

export interface Testimonial {
  name: string;
  review: string;
  rating: number;
  reviewCount: string;
  time: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Amit Jaiswal",
    review: "Really experienced staff great service best property dealer panipat",
    rating: 5,
    reviewCount: "5 reviews",
    time: "2 years ago",
  },
  {
    name: "Sandy Panwar",
    review: "Best property dealer panipat great service",
    rating: 5,
    reviewCount: "4 reviews",
    time: "2 years ago",
  },
  {
    name: "Rohit Kumar Saini",
    review: "Wow service one of the best properties dealer panipat",
    rating: 5,
    reviewCount: "Local Guide · 10 reviews",
    time: "2 years ago",
  },
];

export const faqs = [
  {
    q: "How can I buy a property through Mahaluxmi Properties?",
    a: "Simply share your requirement through our enquiry form or call our office directly. Our team will understand your needs, shortlist verified properties in Panipat and nearby areas, arrange visits and guide you through the entire purchase process till registry.",
  },
  {
    q: "Do you help customers sell properties?",
    a: "Yes. We assist property owners in listing, marketing and finding genuine buyers for their residential, commercial or plot properties, while managing negotiations and paperwork transparently.",
  },
  {
    q: "Do you provide rental properties?",
    a: "Yes, we help tenants find suitable rental homes and assist owners in finding reliable tenants across Panipat and nearby Haryana regions.",
  },
  {
    q: "Do you deal in commercial properties?",
    a: "Yes. We handle commercial shops, offices and showroom spaces for both buying/selling and leasing purposes.",
  },
  {
    q: "Which locations do you cover?",
    a: "Mahaluxmi Properties serves Panipat and surrounding areas, with local market knowledge across the region.",
  },
  {
    q: "Can I list my property with Mahaluxmi Properties?",
    a: "Absolutely. Reach out to our team with your property details and our experts will guide you on listing, pricing and marketing your property to genuine buyers or tenants.",
  },
  {
    q: "Can I schedule a property visit?",
    a: "Yes, once you share your requirement, our team will coordinate a convenient time to schedule a site visit for shortlisted properties.",
  },
  {
    q: "Do you assist with documentation?",
    a: "Yes, we provide complete support with documentation, verification and registry-related processes to ensure a smooth and transparent transaction.",
  },
  {
    q: "How can I submit my property requirement?",
    a: "You can use the requirement form on this website, call us directly, or message us on WhatsApp. Our team will get in touch with suitable options.",
  },
  {
    q: "How can I contact Mahaluxmi Properties?",
    a: "You can call us at 08221900054, email mahaluxmiproperties@gmail.com, or visit our office at Villa No A, 145, TDI city, Panipat, Faridpur, Haryana 132140.",
  },
];

export const services = [
  {
    title: "Property Buying",
    desc: "End-to-end assistance in finding and purchasing the right residential or commercial property.",
  },
  {
    title: "Property Selling",
    desc: "Strategic marketing and genuine buyer connections to help you sell at the right value.",
  },
  {
    title: "Property Rental",
    desc: "Helping tenants and owners connect for hassle-free residential and commercial rentals.",
  },
  {
    title: "Property Leasing",
    desc: "Structured long-term leasing solutions for residential and commercial spaces.",
  },
  {
    title: "Residential Property",
    desc: "Apartments, houses and villas across Panipat's most sought-after neighbourhoods.",
  },
  {
    title: "Commercial Property",
    desc: "Offices, shops and showroom spaces suited for growing businesses.",
  },
  {
    title: "Plot & Land",
    desc: "Verified residential and agricultural plots with clear titles for confident investment.",
  },
  {
    title: "Property Consultation",
    desc: "Honest, experience-backed advice to help you make informed property decisions.",
  },
  {
    title: "Investment Guidance",
    desc: "Market insights and guidance to help you identify sound long-term property investments.",
  },
];
