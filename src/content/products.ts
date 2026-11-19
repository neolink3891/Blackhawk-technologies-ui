// /products and /es/products: page copy and the product cards. Data shared by both languages (icon, image, links,
// status, hidden) sits in `base`; each language adds its own text. Hidden products are kept here but not shown.

import { Home, Lock, ShoppingCart, Users, UtensilsCrossed, type LucideIcon } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { SEKRO_IMAGES } from "@/lib/sekro";

export type SolutionStatus = "available" | "inDevelopment" | "comingSoon";

export interface Solution {
  name: string;
  /** Short line under the name. */
  tagline?: string;
  description: string;
  status: SolutionStatus;
  icon: LucideIcon;
  /** App icon image; shown instead of `icon`. */
  image?: string;
  /** Alt text for `image` (default empty: the product name follows it). */
  imageAlt?: string;
  /** Sekro's own page in this language; makes "Learn more" a link. */
  sekroPage?: boolean;
  /** External product site, opened in a new tab. */
  externalUrl?: string;
  /** Link text for `externalUrl` (default: "Learn more"). */
  linkLabel?: string;
  features?: string[];
  /** Kept in code but not shown on /products (e.g. not ready to announce). */
  hidden?: boolean;
}

type Base = Pick<
  Solution,
  "name" | "status" | "icon" | "image" | "sekroPage" | "externalUrl" | "hidden"
>;
type Text = Pick<Solution, "tagline" | "description" | "imageAlt" | "linkLabel" | "features">;

const base = {
  sekro: {
    name: "Sekro",
    status: "available",
    icon: Lock,
    image: SEKRO_IMAGES.icon,
    sekroPage: true,
  },
  hawksells: {
    name: "HawkSells",
    status: "available",
    icon: ShoppingCart,
    image: "/hawksells/logo.png",
    externalUrl: "https://hawksells.bhtapp.com",
  },
  hawktrack: {
    name: "HawkTrack",
    status: "available",
    icon: Users,
    image: "/hawktrack/logo.webp",
    externalUrl: "https://hawktrack.bhtapp.com",
  },
  // Not shown for now (2026-11-19): the site is positioned on software, and Atlas's hub is hardware.
  atlas: { name: "Atlas", status: "inDevelopment", icon: Home, hidden: true },
  // Not shown for now (2026-11-19).
  getmunching: { name: "GetMunching", status: "comingSoon", icon: UtensilsCrossed, hidden: true },
} satisfies Record<string, Base>;

type ProductKey = keyof typeof base;

export interface ProductsCopy {
  meta: { title: string; description: string; ogDescription: string };
  eyebrow: string;
  /** Heading with a highlighted middle part. */
  title: [string, string, string];
  intro: string;
  status: Record<SolutionStatus, string>;
  learnMore: string;
  custom: { eyebrow: string; title: [string, string, string]; body: string; button: string };
  products: Record<ProductKey, Text>;
}

export const productsCopy: Record<Lang, ProductsCopy> = {
  en: {
    meta: {
      title: "Products — BlackHawk Technologies",
      description:
        "Software products by BlackHawk Technologies: Sekro, HawkSells and HawkTrack. We also build custom software and help businesses adopt AI.",
      ogDescription:
        "Sekro, HawkSells and HawkTrack: software products built and run by BlackHawk Technologies.",
    },
    eyebrow: "Products",
    title: ["Software we ", "build and run", "."],
    intro:
      "Our own products, live today. Need something that doesn't exist yet? We build that too.",
    status: { available: "Available", inDevelopment: "In Development", comingSoon: "Coming Soon" },
    learnMore: "Learn more",
    custom: {
      eyebrow: "Custom software & AI",
      title: ["Built bespoke for your ", "operations", "."],
      body: "Beyond our own products, we offer consultancy, build custom software to order, and help businesses bring AI into their everyday processes.",
      button: "See our services",
    },
    products: {
      sekro: {
        tagline: "Hidden in plain sight.",
        description:
          "Hide photos, videos, voice notes and text inside ordinary images. Only the person you choose can open them. End-to-end encrypted, for iPhone and Android.",
        features: [
          "End-to-End Encrypted",
          "Locked to Your Recipients",
          "Screenshot & Recording Protection",
          "Delete Everywhere",
          "iPhone & Android",
        ],
      },
      hawksells: {
        tagline: "You Post. HawkSells.",
        description:
          "An AI sales assistant for businesses that sell on Facebook and Instagram. It replies to every comment and message 24/7, answers from your own products, prices and delivery options, and delivers qualified leads with the order total. Available in Central America.",
        linkLabel: "Visit HawkSells",
        features: [
          "Replies to Comments & Messages 24/7",
          "Answers From Your Catalogue, Prices & Delivery Zones",
          "Qualified, Verified Leads With Order Total",
          "Publish & Schedule Facebook and Instagram Posts",
          "Pay per Lead With Credits, No Monthly Fee",
        ],
      },
      hawktrack: {
        tagline: "Workforce attendance, simplified.",
        // Facts as stated on hawktrack.bhtapp.com. The iPhone app isn't on the App Store yet and Android is on
        // the way: no store or platform claims here.
        description:
          "Plan the week's shifts, let staff check in from their phone by QR code, NFC tag or location, and see missed check-ins and breaks as alerts. 30-day free trial.",
        imageAlt: "HawkTrack logo",
        linkLabel: "Visit HawkTrack",
        features: [
          "Weekly Shift Planning",
          "Check-In by QR Code, NFC Tag or Location",
          "Check-Ins, Breaks & Check-Outs on One Dashboard",
          "Alerts for Missed Check-Ins & Breaks",
          "30-Day Free Trial",
        ],
      },
      atlas: {
        description:
          "An upcoming smart home and home integration platform built around the Atlas Hub — connecting devices, automating routines, and providing unified mobile control.",
        features: [
          "Home Automation",
          "Device Integration",
          "Mobile Control",
          "Smart Notifications",
          "Secure Connectivity",
        ],
      },
      getmunching: {
        description:
          "An upcoming food and ordering platform connecting food businesses, local vendors, and customers through a simple, modern digital experience.",
        features: [
          "Food Ordering",
          "Vendor Management",
          "Customer Engagement",
          "Mobile Experience",
          "Real-Time Updates",
        ],
      },
    },
  },

  es: {
    meta: {
      title: "Productos — BlackHawk Technologies",
      description:
        "Productos de software de BlackHawk Technologies: Sekro, HawkSells y HawkTrack. También desarrollamos software a medida y ayudamos a las empresas a adoptar la IA.",
      ogDescription:
        "Sekro, HawkSells y HawkTrack: productos de software que BlackHawk Technologies crea y opera.",
    },
    eyebrow: "Productos",
    title: ["Software que ", "creamos y operamos", "."],
    intro:
      "Nuestros propios productos, disponibles hoy. ¿Necesitas algo que todavía no existe? También lo construimos.",
    status: { available: "Disponible", inDevelopment: "En desarrollo", comingSoon: "Próximamente" },
    learnMore: "Más información",
    custom: {
      eyebrow: "Software a medida e IA",
      title: ["Hecho a la medida de tu ", "operación", "."],
      body: "Además de nuestros productos, ofrecemos consultoría, desarrollamos software a medida y ayudamos a las empresas a llevar la IA a sus procesos diarios.",
      button: "Ver nuestros servicios",
    },
    products: {
      sekro: {
        tagline: "Oculto a simple vista.",
        description:
          "Oculta fotos, videos, notas de voz y texto dentro de imágenes comunes. Solo la persona que tú elijas puede abrirlos. Con cifrado de extremo a extremo, para iPhone y Android.",
        features: [
          "Cifrado de extremo a extremo",
          "Solo para tus destinatarios",
          "Protección contra capturas y grabaciones de pantalla",
          "Eliminar para todos",
          "iPhone y Android",
        ],
      },
      hawksells: {
        tagline: "Tú publicas. HawkSells vende.",
        description:
          "Un asistente de ventas con IA para negocios que venden por Facebook e Instagram. Responde cada comentario y mensaje las 24 horas, contesta con tus propios productos, precios y opciones de entrega, y te entrega clientes potenciales calificados con el total del pedido. Disponible en Centroamérica.",
        linkLabel: "Visitar HawkSells",
        features: [
          "Responde comentarios y mensajes 24/7",
          "Responde con tu catálogo, precios y zonas de entrega",
          "Clientes potenciales calificados y verificados, con el total del pedido",
          "Publica y programa posts en Facebook e Instagram",
          "Pagas por cliente potencial con créditos, sin mensualidad",
        ],
      },
      hawktrack: {
        tagline: "Control de asistencia, sin complicaciones.",
        description:
          "Planifica los turnos de la semana, deja que tu equipo marque asistencia desde su teléfono con código QR, etiqueta NFC o ubicación, y recibe alertas de registros y descansos omitidos. 30 días de prueba gratis.",
        imageAlt: "Logo de HawkTrack",
        linkLabel: "Visitar HawkTrack",
        features: [
          "Planificación semanal de turnos",
          "Registro con código QR, etiqueta NFC o ubicación",
          "Entradas, descansos y salidas en un solo panel",
          "Alertas de registros y descansos omitidos",
          "30 días de prueba gratis",
        ],
      },
      atlas: {
        description:
          "Una plataforma de automatización del hogar en desarrollo, construida en torno al Atlas Hub: conecta dispositivos, automatiza rutinas y ofrece control desde el celular.",
        features: [
          "Automatización del hogar",
          "Integración de dispositivos",
          "Control desde el celular",
          "Notificaciones inteligentes",
          "Conexión segura",
        ],
      },
      getmunching: {
        description:
          "Una plataforma de pedidos de comida en camino, que conecta negocios de comida, vendedores locales y clientes con una experiencia digital simple y moderna.",
        features: [
          "Pedidos de comida",
          "Gestión de vendedores",
          "Relación con clientes",
          "Experiencia móvil",
          "Actualizaciones en tiempo real",
        ],
      },
    },
  },
};

/** The product cards for a language, in order, hidden ones included (filter on `hidden` to show). */
export const solutionsFor = (lang: Lang): Solution[] =>
  (Object.keys(base) as ProductKey[]).map((k) => ({
    ...base[k],
    ...productsCopy[lang].products[k],
  }));
