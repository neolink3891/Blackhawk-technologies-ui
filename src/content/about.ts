// /about and /es/about.

import { Lightbulb, ShieldCheck, TrendingUp, Wrench, type LucideIcon } from "lucide-react";
import type { Lang } from "@/lib/i18n";

export interface AboutCopy {
  meta: { title: string; description: string; ogTitle: string; ogDescription: string };
  eyebrow: string;
  title: [string, string, string];
  intro: string;
  mission: { eyebrow: string; quote: string };
  values: {
    eyebrow: string;
    title: string;
    items: { icon: LucideIcon; title: string; desc: string }[];
  };
  cta: { title: string; body: string; button: string };
}

const icons = [Lightbulb, Wrench, ShieldCheck, TrendingUp];

export const aboutCopy: Record<Lang, AboutCopy> = {
  en: {
    meta: {
      title: "About — BlackHawk Technologies",
      description:
        "BlackHawk Technologies is a UK-based software company focused on building reliable, scalable, and intelligent software systems.",
      ogTitle: "About BlackHawk Technologies",
      ogDescription:
        "A software company focused on reliable, scalable, and intelligent digital systems.",
    },
    eyebrow: "About us",
    title: ["About ", "BlackHawk Technologies", "."],
    intro:
      "BlackHawk Technologies is a software development company focused on creating intelligent digital solutions that help organisations streamline operations, improve efficiency, and embrace innovation.",
    mission: {
      eyebrow: "Our mission",
      quote:
        "“To transform business ideas into robust, intelligent, and scalable digital products.”",
    },
    values: {
      eyebrow: "What we value",
      title: "Principles that shape how we build.",
      items: [
        {
          icon: icons[0],
          title: "Practical Innovation",
          desc: "Building technology that solves real business challenges.",
        },
        {
          icon: icons[1],
          title: "Quality Engineering",
          desc: "Delivering maintainable, scalable, and reliable systems.",
        },
        {
          icon: icons[2],
          title: "Security & Trust",
          desc: "Developing solutions with security and resilience at their core.",
        },
        {
          icon: icons[3],
          title: "Continuous Improvement",
          desc: "Always evolving technology, processes, and products.",
        },
      ],
    },
    cta: {
      title: "Ready to work together?",
      body: "Tell us about your project and we'll get back to you.",
      button: "Contact us",
    },
  },

  es: {
    meta: {
      title: "Quiénes somos — BlackHawk Technologies",
      description:
        "BlackHawk Technologies es una empresa de software del Reino Unido dedicada a crear sistemas de software confiables, escalables e inteligentes.",
      ogTitle: "Conoce a BlackHawk Technologies",
      ogDescription:
        "Una empresa de software dedicada a crear sistemas digitales confiables, escalables e inteligentes.",
    },
    eyebrow: "Quiénes somos",
    title: ["Conoce a ", "BlackHawk Technologies", "."],
    intro:
      "BlackHawk Technologies es una empresa de desarrollo de software que crea soluciones digitales inteligentes para ayudar a las organizaciones a simplificar sus operaciones, ser más eficientes y adoptar la innovación.",
    mission: {
      eyebrow: "Nuestra misión",
      quote:
        "“Convertir ideas de negocio en productos digitales sólidos, inteligentes y escalables.”",
    },
    values: {
      eyebrow: "Lo que valoramos",
      title: "Los principios que guían cómo construimos.",
      items: [
        {
          icon: icons[0],
          title: "Innovación práctica",
          desc: "Tecnología que resuelve problemas reales de negocio.",
        },
        {
          icon: icons[1],
          title: "Ingeniería de calidad",
          desc: "Sistemas fáciles de mantener, escalables y confiables.",
        },
        {
          icon: icons[2],
          title: "Seguridad y confianza",
          desc: "Soluciones con la seguridad y la resiliencia como base.",
        },
        {
          icon: icons[3],
          title: "Mejora continua",
          desc: "Nuestra tecnología, procesos y productos siempre evolucionan.",
        },
      ],
    },
    cta: {
      title: "¿Trabajamos juntos?",
      body: "Cuéntanos sobre tu proyecto y te responderemos.",
      button: "Contáctanos",
    },
  },
};
