import type { PricingPlan } from "../types";

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "INR 14,999",
    description: "Perfect for simple event pages and invitations.",
    features: [
      "Up to 5 sections",
      "Mobile responsive",
      "Single contact form",
      "Basic SEO setup",
      "1 round revision",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: "INR 29,999",
    description: "Ideal for premium events and business websites.",
    features: [
      "Up to 12 sections",
      "Custom animations",
      "Advanced forms + WhatsApp",
      "Portfolio/blog integration",
      "4 rounds revisions",
    ],
    highlighted: true,
  },
  {
    id: "signature",
    name: "Signature",
    price: "INR 54,999",
    description: "Complete digital experience with advanced workflows.",
    features: [
      "Unlimited sections",
      "Advanced performance optimization",
      "Custom integrations",
      "CMS-like dynamic content",
      "Priority support",
    ],
  },
];
