import type { NavItem } from "../types";

export const siteConfig = {
  brand: "MomentCrafts",
  tagline: "Your Vision, Our Creation",
  description:
    "Premium custom websites for weddings, businesses, invitations, reunions, and milestone celebrations.",
  phone: "+91 6304411886",
  secondaryPhone: "+91 9494039564",
  email: "momentcraftswebsites@gmail.com",
  location: "India",
  whatsappPrimary: "916304411886",
  whatsappSecondary: "919494039564",
  whatsappNumbers: ["916304411886", "919494039564"],
  instagramUrl:
    "https://www.instagram.com/momentcrafts.in?utm_source=qr&igsh=MWNydGNkb2U3d2ttaQ==",
  adminEmails: ["admin@momentcrafts.in", "momentcraftswebsites@gmail.com"],
};

export const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Our Work", path: "/work" },
  { label: "Pricing", path: "/pricing" },
  { label: "About Us", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "Contact Us", path: "/contact" },
];

export const websiteTypeOptions = [
  "Business",
  "Wedding Invitation",
  "Wedding Site",
  "Reunion",
  "Birthday",
  "House Warming",
  "Others",
] as const;
