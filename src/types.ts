export type PestCategory = 
  | 'termite'
  | 'rodent'
  | 'general'
  | 'cockroach'
  | 'bedbug'
  | 'ant'
  | 'mosquito'
  | 'commercial'
  | 'preventive';

export interface ServiceItem {
  id: string;
  name: string;
  category: PestCategory;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  symptoms: string[];
  treatmentSteps: string[];
  duration: string;
  warranty: string;
  ecoRating: string;
  startingPrice: string;
  featured?: boolean;
}

export interface InspectionBooking {
  id?: string;
  pestType: string;
  propertyType: 'residential' | 'commercial';
  propertySize: string;
  preferredDate: string;
  preferredTime: string;
  urgency: 'routine' | 'urgent' | 'emergency';
  fullName: string;
  phone: string;
  email: string;
  streetAddress: string;
  city: string;
  notes?: string;
  selectedPlan?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  date: string;
  review: string;
  avatar: string;
  serviceReceived: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  tagline: string;
  popular?: boolean;
  highlightColor?: string;
  features: string[];
  shortFeatures?: string[];
  coverage: string;
  guaranteeText: string;
  ctaText: string;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  experience: string;
  rating: number;
  reviewsCount: number;
  photo: string;
  licenseNumber: string;
  specialties: string[];
  quote: string;
}

export interface TrustBadgeItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export interface PestPediaItem {
  id: string;
  name: string;
  scientificName: string;
  category: string;
  commonSigns: string[];
  riskLevel: 'Low' | 'Moderate' | 'High' | 'Severe';
  recommendedAction: string;
  preventionTip: string;
}
