import type { ProjectItem } from "../types";

export const projectCategories = [
  "All",
  "Wedding Websites",
  "Housewarming Websites",
  "Invitation Websites",
  "Reunion Websites",
  "Business Websites",
] as const;

export const projects: ProjectItem[] = [
  {
    id: "p1",
    title: "Rahul & Priya",
    category: "Wedding Websites",
    description: "A beautiful wedding website with story, RSVP, and gallery.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    tags: ["RSVP", "Countdown", "Gallery"],
    slug: "rahul-priya",
  },
  {
    id: "p2",
    title: "Our New Home",
    category: "Housewarming Websites",
    description: "A modern invite website for family and friends.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Invite", "Map", "Guest List"],
    slug: "our-new-home",
  },
  {
    id: "p3",
    title: "InnovateX Solutions",
    category: "Business Websites",
    description: "A professional business website for an IT services company.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    tags: ["B2B", "Services", "Contact"],
    slug: "innovatex-solutions",
  },
  {
    id: "p4",
    title: "Mehendi Celebration",
    category: "Invitation Websites",
    description: "Digital invitation with event details, countdown, and RSVP.",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80",
    tags: ["Invite", "Timeline", "RSVP"],
    slug: "mehendi-celebration",
  },
  {
    id: "p5",
    title: "Friends Forever 25",
    category: "Reunion Websites",
    description: "Reunion website to reconnect and celebrate together.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    tags: ["Memories", "Agenda", "Register"],
    slug: "friends-forever-25",
  },
  {
    id: "p6",
    title: "Aarav Birthday Bash",
    category: "Invitation Websites",
    description: "A colorful birthday invitation with fun event details.",
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=80",
    tags: ["Birthday", "Details", "RSVP"],
    slug: "aarav-birthday-bash",
  },
];
