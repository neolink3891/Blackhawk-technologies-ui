import {
  Users, Home, UtensilsCrossed, PhoneCall, Terminal, Code2, Sparkles, Lock, ShoppingCart,
  type LucideIcon,
} from "lucide-react";
import { SEKRO_IMAGES } from "@/lib/sekro";

export type SolutionStatus = "Available" | "Available on iOS" | "In Development" | "Coming Soon";

export interface Solution {
  name: string;
  /** Short line under the name (products with a tagline). */
  tagline?: string;
  description: string;
  status: SolutionStatus;
  icon: LucideIcon;
  /** App icon image; shown instead of `icon`. */
  image?: string;
  /** Product page; makes "Learn more" a link. */
  href?: "/sekro";
  /** External product site, opened in a new tab (instead of `href`). */
  externalUrl?: string;
  /** Link text for `externalUrl` (default "Learn more"). */
  linkLabel?: string;
  features?: string[];
}

export const solutions: Solution[] = [
  {
    name: "Sekro",
    tagline: "Hidden in plain sight.",
    description:
      "Hide photos, videos, voice notes and text inside ordinary images. Only the person you choose can open them. End-to-end encrypted, for iPhone and Android.",
    // On the App Store; Google Play to follow (see SEKRO_LINKS).
    status: "Available on iOS",
    icon: Lock,
    image: SEKRO_IMAGES.icon,
    href: "/sekro",
    features: [
      "End-to-End Encrypted",
      "Locked to Your Recipients",
      "Screenshot & Recording Protection",
      "Delete Everywhere",
      "iPhone & Android",
    ],
  },
  {
    name: "HawkSells",
    tagline: "You Post. HawkSells.",
    description:
      "An AI sales assistant for businesses that sell on Facebook and Instagram. It replies to every comment and message 24/7, answers from your own products, prices and delivery options, and delivers qualified leads with the order total. Live, launching in Central America.",
    status: "Available",
    icon: ShoppingCart,
    image: "/hawksells/logo.png",
    externalUrl: "https://hawksells.bhtapp.com",
    linkLabel: "Visit HawkSells",
    features: [
      "Replies to Comments & Messages 24/7",
      "Answers From Your Catalogue, Prices & Delivery Zones",
      "Qualified, Verified Leads With Order Total",
      "Publish & Schedule Facebook and Instagram Posts",
      "Pay per Lead With Credits, No Monthly Fee",
    ],
  },
  {
    name: "HawkTrack",
    description:
      "A workforce and attendance tracking platform for managing employee check-ins, NFC and location-based attendance, workplace presence, and operational visibility.",
    status: "Available",
    icon: Users,
    features: [
      "Employee Check-In & Check-Out",
      "NFC Attendance",
      "Location Verification",
      "Workforce Analytics",
      "Real-Time Visibility",
    ],
  },
  {
    name: "Atlas",
    description:
      "An upcoming smart home and home integration platform built around the Atlas Hub — connecting devices, automating routines, and providing unified mobile control.",
    status: "In Development",
    icon: Home,
    features: [
      "Home Automation",
      "Device Integration",
      "Mobile Control",
      "Smart Notifications",
      "Secure Connectivity",
    ],
  },
  {
    name: "GetMunching",
    description:
      "An upcoming food and ordering platform connecting food businesses, local vendors, and customers through a simple, modern digital experience.",
    status: "Coming Soon",
    icon: UtensilsCrossed,
    features: [
      "Food Ordering",
      "Vendor Management",
      "Customer Engagement",
      "Mobile Experience",
      "Real-Time Updates",
    ],
  },
  {
    name: "Custom Software Development",
    description:
      "Bespoke web, mobile, backend, API, automation, and cloud software development for businesses that need tailored digital systems.",
    status: "Available",
    icon: Code2,
  },
  {
    name: "AI & Automation Solutions",
    description:
      "Intelligent tools using AI, data processing, workflow automation, speech processing, and decision-support systems.",
    status: "Available",
    icon: Sparkles,
  },
];