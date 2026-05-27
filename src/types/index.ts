export type NavItem = {
  label: string;
  path: string;
};

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
  bullets: string[];
};

export type ProjectCategory =
  | "All"
  | "Wedding Websites"
  | "Business Websites"
  | "Reunion Websites"
  | "Housewarming Websites"
  | "Invitation Websites";

export type ProjectItem = {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  image: string;
  tags: string[];
  slug: string;
  createdAt?: unknown;
};

export type PricingPlan = {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  createdAt?: unknown;
};

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  createdAt?: unknown;
};

export type Testimonial = {
  id: string;
  name: string;
  projectType: string;
  quote: string;
  rating: number;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type ContactSubmission = {
  id?: string;
  name: string;
  email: string;
  phone: string;
  websiteType: string;
  message: string;
  createdAt?: unknown;
};

export type FeedbackSubmission = {
  id?: string;
  name: string;
  email: string;
  rating: number;
  message: string;
  createdAt?: unknown;
};
