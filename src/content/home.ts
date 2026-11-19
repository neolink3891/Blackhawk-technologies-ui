// Home page copy (en: UK English; es: neutral Latin American Spanish, "tú"). Positioning, in order: 1) our own
// software products, 2) consultancy and custom software built to order, 3) helping companies bring AI into their
// processes. Product claims are limited to what's live today (store listings, the products' own sites).

import {
  Code2,
  Compass,
  FlaskConical,
  Handshake,
  Layers,
  LifeBuoy,
  Plug,
  Search,
  Shield,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { SEKRO_IMAGES } from "@/lib/sekro";

/** Section anchors (the hero's first button, the "Services" nav link). Same in both languages. */
export const HOME_ANCHORS = { products: "products", services: "services", ai: "ai" } as const;

export interface HomeProduct {
  name: string;
  image: string;
  value: string;
  audience: string;
  status: string;
  platforms: string;
  /** Internal page, or external site (opened in a new tab). */
  link: { page: "sekro" } | { href: string };
  /** Show the App Store and Google Play badges (Sekro). */
  storeBadges?: boolean;
}

interface IconItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface HomeCopy {
  meta: { title: string; description: string };
  hero: { headline: [string, string]; sub: string; primary: string; secondary: string };
  products: {
    eyebrow: string;
    title: string;
    seeAll: string;
    forLabel: string;
    learnMore: string;
    /** Screen-reader text after "Learn more": "about Sekro". */
    about: (name: string) => string;
    items: HomeProduct[];
  };
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    items: (IconItem & { points: string[] })[];
  };
  ai: { eyebrow: string; title: string; intro: string; steps: IconItem[] };
  why: { eyebrow: string; title: string; items: IconItem[] };
  cta: { title: string; body: string; button: string };
}

const productImages = {
  sekro: SEKRO_IMAGES.icon,
  hawksells: "/hawksells/logo.png",
  hawktrack: "/hawktrack/logo.webp",
};
const productLinks = {
  hawksells: { href: "https://hawksells.bhtapp.com" },
  hawktrack: { href: "https://hawktrack.bhtapp.com" },
};

export const homeCopy: Record<Lang, HomeCopy> = {
  en: {
    meta: {
      title: "BlackHawk Technologies — Software products, custom development and AI adoption",
      description:
        "BlackHawk Technologies is a UK software company. We build our own products (Sekro, HawkSells and HawkTrack), develop custom software to order, and help businesses put AI to work in their everyday processes.",
    },
    hero: {
      headline: ["Software that", "runs your business"],
      sub: "We build our own products — Sekro, HawkSells and HawkTrack — and help companies design custom software and put AI to work in their everyday processes.",
      primary: "Explore our products",
      secondary: "Talk to us",
    },
    products: {
      eyebrow: "Our products",
      title: "Software we build and run ourselves.",
      seeAll: "See all products",
      forLabel: "For",
      learnMore: "Learn more",
      about: (name) => `about ${name}`,
      items: [
        {
          name: "Sekro",
          image: productImages.sekro,
          value:
            "Hide photos, videos, voice notes and text inside ordinary images, end-to-end encrypted.",
          audience: "Adults (18+) who want to share private things with one chosen person.",
          status: "Available",
          platforms: "iPhone and Android",
          link: { page: "sekro" },
          storeBadges: true,
        },
        {
          name: "HawkSells",
          image: productImages.hawksells,
          value:
            "An AI sales assistant that answers every comment and message 24/7 and hands you qualified leads.",
          audience: "Businesses that sell on Facebook and Instagram.",
          status: "Available",
          platforms: "Web, for Facebook and Instagram · available in Central America",
          link: productLinks.hawksells,
        },
        {
          name: "HawkTrack",
          image: productImages.hawktrack,
          value:
            "Plan shifts and let staff check in by QR code, NFC tag or location, with alerts for missed check-ins.",
          audience: "Businesses that run shifts and need to track attendance and breaks.",
          status: "Available",
          // No store or platform claims for the mobile apps yet.
          platforms: "Web · 30-day free trial",
          link: productLinks.hawktrack,
        },
      ],
    },
    services: {
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
    },
    ai: {
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
    },
    why: {
      eyebrow: "Why choose us",
      title: "Why businesses choose BlackHawk Technologies.",
      items: [
        {
          icon: ShieldCheck,
          title: "Reliable Solutions",
          desc: "Building software designed for long-term stability and performance.",
        },
        {
          icon: Shield,
          title: "Security First",
          desc: "Security and data protection considered from day one.",
        },
        {
          icon: Layers,
          title: "Scalable Architecture",
          desc: "Systems built to grow alongside businesses.",
        },
        {
          icon: Handshake,
          title: "Partnership Approach",
          desc: "Long-term collaboration focused on delivering measurable value.",
        },
      ],
    },
    cta: {
      title: "Need software built, or want to bring AI into your business?",
      body: "Tell us what you need, from a custom system or technical advice to a first AI project, and we'll get back to you.",
      button: "Talk to us",
    },
  },

  es: {
    meta: {
      title: "BlackHawk Technologies — Productos de software, desarrollo a medida e IA",
      description:
        "BlackHawk Technologies es una empresa de software del Reino Unido. Creamos nuestros propios productos (Sekro, HawkSells y HawkTrack), desarrollamos software a medida y ayudamos a las empresas a poner la IA a trabajar en sus procesos diarios.",
    },
    hero: {
      headline: ["Software que", "impulsa tu negocio"],
      sub: "Creamos nuestros propios productos —Sekro, HawkSells y HawkTrack— y ayudamos a las empresas a diseñar software a medida y a poner la IA a trabajar en sus procesos diarios.",
      primary: "Conoce nuestros productos",
      secondary: "Hablemos",
    },
    products: {
      eyebrow: "Nuestros productos",
      title: "Software que creamos y operamos nosotros mismos.",
      seeAll: "Ver todos los productos",
      forLabel: "Para",
      learnMore: "Más información",
      about: (name) => `sobre ${name}`,
      items: [
        {
          name: "Sekro",
          image: productImages.sekro,
          value:
            "Oculta fotos, videos, notas de voz y texto dentro de imágenes comunes, con cifrado de extremo a extremo.",
          audience: "Adultos (18+) que quieren compartir algo privado con una sola persona.",
          status: "Disponible",
          platforms: "iPhone y Android",
          link: { page: "sekro" },
          storeBadges: true,
        },
        {
          name: "HawkSells",
          image: productImages.hawksells,
          value:
            "Un asistente de ventas con IA que responde cada comentario y mensaje las 24 horas y te entrega clientes potenciales calificados.",
          audience: "Negocios que venden por Facebook e Instagram.",
          status: "Disponible",
          platforms: "Web, para Facebook e Instagram · disponible en Centroamérica",
          link: productLinks.hawksells,
        },
        {
          name: "HawkTrack",
          image: productImages.hawktrack,
          value:
            "Planifica turnos y deja que tu equipo marque asistencia con código QR, etiqueta NFC o ubicación, con alertas cuando falta un registro.",
          audience:
            "Negocios que trabajan por turnos y necesitan controlar asistencia y descansos.",
          status: "Disponible",
          platforms: "Web · 30 días de prueba gratis",
          link: productLinks.hawktrack,
        },
      ],
    },
    services: {
      eyebrow: "Software a medida y consultoría",
      title: "Software hecho a tu medida, y la asesoría para hacerlo bien.",
      intro:
        "Cuando un producto estándar no se ajusta a lo que necesitas, diseñamos y construimos uno que sí lo haga, y te ayudamos a decidir qué construir primero.",
      items: [
        {
          icon: Compass,
          title: "Consultoría y estrategia tecnológica",
          desc: "Asesoría técnica clara antes de comprometer tu presupuesto: qué construir, cómo y en qué orden.",
          points: [
            "Auditorías técnicas",
            "Arquitectura y hojas de ruta",
            "Asesoría para desarrollar o comprar",
            "Revisiones de seguridad y escalabilidad",
          ],
        },
        {
          icon: Code2,
          title: "Software a medida",
          desc: "Aplicaciones diseñadas y construidas en torno a cómo trabaja tu empresa.",
          points: ["Aplicaciones web", "Apps móviles", "APIs y backends", "Plataformas en la nube"],
        },
        {
          icon: Plug,
          title: "Integración de sistemas",
          desc: "Conectamos las herramientas que ya usas para que los datos fluyan entre ellas, sin copiar y pegar.",
          points: [
            "Integraciones con terceros",
            "Modernización de sistemas heredados",
            "Integración de procesos de negocio",
            "Migración de datos",
          ],
        },
      ],
    },
    ai: {
      eyebrow: "IA para tu negocio",
      title: "Lleva la IA a tus procesos",
      intro:
        "Un camino práctico desde la primera idea hasta una herramienta que tu equipo usa todos los días. También integramos IA en nuestros propios productos, como HawkSells.",
      steps: [
        {
          icon: Search,
          title: "Evaluar",
          desc: "Descubre dónde la IA te ahorra tiempo: analizamos cómo trabaja tu equipo y elegimos las tareas que vale la pena automatizar.",
        },
        {
          icon: FlaskConical,
          title: "Probar",
          desc: "Lo comprobamos en un solo proceso, con tus datos reales y una forma clara de medir el éxito.",
        },
        {
          icon: Workflow,
          title: "Integrar",
          desc: "Lo conectamos con los sistemas que ya usas, para que forme parte del trabajo diario.",
        },
        {
          icon: LifeBuoy,
          title: "Acompañar",
          desc: "Capacitamos a tu equipo, medimos los resultados y seguimos mejorando.",
        },
      ],
    },
    why: {
      eyebrow: "Por qué elegirnos",
      title: "Por qué las empresas eligen BlackHawk Technologies.",
      items: [
        {
          icon: ShieldCheck,
          title: "Soluciones confiables",
          desc: "Software pensado para funcionar de forma estable y con buen rendimiento a largo plazo.",
        },
        {
          icon: Shield,
          title: "La seguridad primero",
          desc: "Seguridad y protección de datos desde el primer día.",
        },
        {
          icon: Layers,
          title: "Arquitectura escalable",
          desc: "Sistemas que crecen junto con tu negocio.",
        },
        {
          icon: Handshake,
          title: "Socios a largo plazo",
          desc: "Una colaboración duradera, enfocada en resultados que se pueden medir.",
        },
      ],
    },
    cta: {
      title: "¿Necesitas software a medida o quieres llevar la IA a tu negocio?",
      body: "Cuéntanos qué necesitas —un sistema a medida, asesoría técnica o un primer proyecto de IA— y te responderemos.",
      button: "Hablemos",
    },
  },
};
