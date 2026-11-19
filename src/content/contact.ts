// /contact and /es/contact, including the form's labels and validation messages.

import type { Lang } from "@/lib/i18n";

/** Project types: the value sent with the form is the same in both languages; only the label changes. */
export const PROJECT_TYPES = [
  "custom-software",
  "mobile-app",
  "ai-automation",
  "saas-platform",
  "consultation",
  "other",
] as const;
export type ProjectType = (typeof PROJECT_TYPES)[number];

export interface ContactCopy {
  meta: { title: string; description: string; ogTitle: string; ogDescription: string };
  eyebrow: string;
  title: [string, string, string];
  intro: string;
  emailLabel: string;
  locationLabel: string;
  location: string;
  responseNote: string;
  form: {
    name: string;
    email: string;
    company: string;
    projectType: string;
    projectTypes: Record<ProjectType, string>;
    message: string;
    messagePlaceholder: string;
    /** Shown after a required field's label (screen readers read the word, not the asterisk). */
    required: string;
    submit: string;
    sending: string;
    sent: string;
    errors: { required: string; email: string };
  };
}

export const contactCopy: Record<Lang, ContactCopy> = {
  en: {
    meta: {
      title: "Contact — BlackHawk Technologies",
      description:
        "Get in touch with BlackHawk Technologies to discuss software projects, platforms, mobile apps, or automation ideas.",
      ogTitle: "Contact BlackHawk Technologies",
      ogDescription: "Let's build something intelligent — get in touch.",
    },
    eyebrow: "Contact",
    title: ["Let's build something ", "intelligent", "."],
    intro:
      "Whether you're launching a new product, modernising existing systems, or exploring automation opportunities, we'd love to hear about your project.",
    emailLabel: "Email",
    locationLabel: "Location",
    location: "United Kingdom",
    responseNote:
      "We typically respond within 1–2 business days. For detailed briefs, feel free to include links, documents, or references.",
    form: {
      name: "Full Name",
      email: "Email Address",
      company: "Company Name",
      projectType: "Project type",
      projectTypes: {
        "custom-software": "Custom software",
        "mobile-app": "Mobile app",
        "ai-automation": "AI / Automation",
        "saas-platform": "SaaS platform",
        consultation: "Consultation",
        other: "Other",
      },
      message: "Message",
      messagePlaceholder: "Tell us about your project...",
      required: "required",
      submit: "Send Message",
      sending: "Sending...",
      sent: "Message sent — we'll be in touch shortly.",
      errors: {
        required: "Please fill in this field.",
        email: "Please enter a valid email address.",
      },
    },
  },

  es: {
    meta: {
      title: "Contacto — BlackHawk Technologies",
      description:
        "Escríbele a BlackHawk Technologies para hablar de tu proyecto de software, plataforma, app móvil o automatización.",
      ogTitle: "Contacta a BlackHawk Technologies",
      ogDescription: "Construyamos algo inteligente. Escríbenos.",
    },
    eyebrow: "Contacto",
    title: ["Construyamos algo ", "inteligente", "."],
    intro:
      "Ya sea que estés lanzando un producto nuevo, modernizando tus sistemas o explorando oportunidades de automatización, nos encantaría conocer tu proyecto.",
    emailLabel: "Correo",
    locationLabel: "Ubicación",
    location: "Reino Unido",
    responseNote:
      "Normalmente respondemos en 1 o 2 días hábiles. Si quieres darnos más detalles, puedes incluir enlaces, documentos o referencias.",
    form: {
      name: "Nombre completo",
      email: "Correo electrónico",
      company: "Empresa",
      projectType: "Tipo de proyecto",
      projectTypes: {
        "custom-software": "Software a medida",
        "mobile-app": "App móvil",
        "ai-automation": "IA / Automatización",
        "saas-platform": "Plataforma SaaS",
        consultation: "Consultoría",
        other: "Otro",
      },
      message: "Mensaje",
      messagePlaceholder: "Cuéntanos sobre tu proyecto…",
      required: "obligatorio",
      submit: "Enviar mensaje",
      sending: "Enviando…",
      sent: "Mensaje enviado. Te responderemos pronto.",
      errors: {
        required: "Completa este campo.",
        email: "Ingresa un correo electrónico válido.",
      },
    },
  },
};
