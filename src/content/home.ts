// Home page copy. Positioning, in order: 1) our own software products, 2) consultancy and custom software built to
// order, 3) helping companies bring AI into their processes. Product claims are limited to what's live today
// (store listings, the products' own sites); see src/lib/solutions.ts for the fuller product cards.

import { Code2, Compass, FlaskConical, LifeBuoy, Plug, Search, Workflow } from "lucide-react";
import { SEKRO_IMAGES } from "@/lib/sekro";

export const HOME_META = {
  title: "BlackHawk Technologies — Software products, custom development and AI adoption",
  description:
    "BlackHawk Technologies is a UK software company. We build our own products (Sekro, HawkSells and HawkTrack), develop custom software to order, and help businesses put AI to work in their everyday processes.",
};

export const hero = {
  /** "Software that runs your business"; the second part is highlighted. */
  headline: ["Software that", "runs your business"],
  sub: "We build our own products — Sekro, HawkSells and HawkTrack — and help companies design custom software and put AI to work in their everyday processes.",
  primary: "Explore our products",
  secondary: "Talk to us",
};

/** Section anchors (the hero's first button, the "Services" nav link). */
export const HOME_ANCHORS = { products: "products", services: "services", ai: "ai" } as const;

export interface HomeProduct {
  name: string;
  image: string;
  value: string;
  audience: string;
  status: "Available";
  platforms: string;
  /** Internal page, or external site (opened in a new tab). */
  link: { to: "/sekro" } | { href: string };
  /** Show the App Store and Google Play badges (Sekro). */
  storeBadges?: boolean;
}

export const productsSection = {
  eyebrow: "Our products",
  title: "Software we build and run ourselves.",
  seeAll: "See all products",
  forLabel: "For",
  learnMore: "Learn more",
  newTab: "opens in a new tab",
};

export const homeProducts: HomeProduct[] = [
  {
    name: "Sekro",
    image: SEKRO_IMAGES.icon,
    value:
      "Hide photos, videos, voice notes and text inside ordinary images, end-to-end encrypted.",
    audience: "Adults (18+) who want to share private things with one chosen person.",
    status: "Available",
    platforms: "iPhone and Android",
    link: { to: "/sekro" },
    storeBadges: true,
  },
  {
    name: "HawkSells",
    image: "/hawksells/logo.png",
    value:
      "An AI sales assistant that answers every comment and message 24/7 and hands you qualified leads.",
    audience: "Businesses that sell on Facebook and Instagram.",
    status: "Available",
    platforms: "Web, for Facebook and Instagram · launching in Central America",
    link: { href: "https://hawksells.bhtapp.com" },
  },
  {
    name: "HawkTrack",
    image: "/hawktrack/logo.webp",
    value:
      "Plan shifts and let staff check in by QR code, NFC tag or location, with alerts for missed check-ins.",
    audience: "Businesses that run shifts and need to track attendance and breaks.",
    status: "Available",
    // No store or platform claims for the mobile apps yet (see src/lib/solutions.ts).
    platforms: "Web · 30-day free trial",
    link: { href: "https://hawktrack.bhtapp.com" },
  },
];

export const servicesSection = {
  eyebrow: "Custom software & consultancy",
  title: "Software built to order, and the advice to get it right.",
  intro:
    "When an off-the-shelf product doesn't fit, we design and build one that does, and help you decide what to build first.",
  items: [
    {
      icon: Compass,
      title: "Consultancy & technical strategy",
      desc: "Clear technical advice before you commit budget: what to build, how, and in what order.",
      points: [
        "Technical audits",
        "Architecture & roadmaps",
        "Build-or-buy advice",
        "Security & scalability reviews",
      ],
    },
    {
      icon: Code2,
      title: "Custom software, built to order",
      desc: "Applications designed and built around how your business works.",
      points: ["Web applications", "Mobile apps", "APIs & backends", "Cloud platforms"],
    },
    {
      icon: Plug,
      title: "System integration",
      desc: "Connect the tools you already use, so data flows between them without copy and paste.",
      points: [
        "Third-party integrations",
        "Legacy system modernisation",
        "Business process integration",
        "Data migration",
      ],
    },
  ],
};

export const aiSection = {
  eyebrow: "AI for your business",
  title: "Bring AI into your processes",
  intro:
    "A practical path from the first idea to a tool your team uses every day. We build AI into our own products too, like HawkSells.",
  steps: [
    {
      icon: Search,
      title: "Assess",
      desc: "Find where AI saves time: we look at how your team works and pick the tasks worth automating.",
    },
    {
      icon: FlaskConical,
      title: "Pilot",
      desc: "Prove it on one process, with your real data and a clear measure of success.",
    },
    {
      icon: Workflow,
      title: "Integrate",
      desc: "Connect it to your existing systems, so it fits into everyday work.",
    },
    {
      icon: LifeBuoy,
      title: "Support",
      desc: "Train your team, monitor the results and keep improving.",
    },
  ],
};

export const ctaSection = {
  title: "Need software built, or want to bring AI into your business?",
  body: "Tell us what you need, from a custom system or technical advice to a first AI project, and we'll get back to you.",
  button: "Talk to us",
};
