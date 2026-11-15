export type ProductCategory = 
  | 'all'
  | 'printing'
  | 'branding'
  | 'signage'
  | 'merch'
  | 'gifting';

export interface ProductSpec {
  label: string;
  value: string;
}

export interface PricingTier {
  quantity: number;
  unitPrice: number; // in INR
  label: string;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  image: string;
  badge?: string;
  moq: string;
  turnaround: string;
  specs: ProductSpec[];
  finishes?: string[];
  paperWeights?: string[];
  pricingTiers: PricingTier[];
  popularAddons?: string[];
  highlight?: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  image: string;
  turnaround: string;
  volume: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  stars: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface OrderStatusStep {
  title: string;
  description: string;
  date: string;
  status: 'completed' | 'current' | 'pending';
}

export interface TrackedOrder {
  orderId: string;
  clientName: string;
  productName: string;
  quantity: number;
  estimatedDelivery: string;
  steps: OrderStatusStep[];
}
