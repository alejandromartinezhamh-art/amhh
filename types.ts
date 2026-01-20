export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  price?: string;
  features: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  isPopular?: boolean;
  features: string[];
  cta: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}