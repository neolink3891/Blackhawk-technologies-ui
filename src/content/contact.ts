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
    errors: { required: string; email: string };
    /** The email the form prepares (in the visitor's language). */
    mail: {
      name: string;
      email: string;
      company: string;
      projectType: string;
      language: string;
      languageValue: string;
      page: string;
      message: string;
      none: string;
      trimmedNote: string;
    };
    /** Shown after the email app is opened. */
    opened: {
      before: string;
      after: string;
      openAgain: string;
      copyAddress: string;
      copied: string;
      copyFailed: string;
    };
    /** Shown when the message was too long for the link and had to be shortened. */
    trimmed: { text: string; copyMessage: string };
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
      errors: {
        required: "Please fill in this field.",
        email: "Please enter a valid email address.",
      },
      mail: {
        name: "Name",
        email: "Email",
        company: "Company",
        projectType: "Project type",
        language: "Language",
        languageValue: "English (en-GB)",
        page: "Page",
        message: "Message",
        none: "—",
        trimmedNote: "[Shortened to fit an email link — please paste your full message here.]",
      },
      opened: {
        before:
          "Your email app should open with your message ready — just press Send there. If it didn't open, email us at",
        after: ".",
        openAgain: "Open your email app again",
        copyAddress: "Copy address",
        copied: "Copied!",
        copyFailed: "Couldn't copy — please select the address",
      },
      trimmed: {
        text: "Your message was too long to fit in an email link, so it's been shortened. Please paste the full text into the email before you send it.",
        copyMessage: "Copy full message",
      },
    },
  },

  es: {
    meta: {
      title: "Contacto — BlackHawk Technologies",
      description:
        "Contáctanos para hablar de tu proyecto de software, plataforma, app móvil o automatización.",
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
      errors: {
        required: "Completa este campo.",
        email: "Ingresa un correo electrónico válido.",
      },
      mail: {
        name: "Nombre",
        email: "Correo",
        company: "Empresa",
        projectType: "Tipo de proyecto",
        language: "Idioma",
        languageValue: "Español (es-419)",
        page: "Página",
        message: "Mensaje",
        none: "—",
        trimmedNote:
          "[Mensaje acortado para que quepa en un enlace de correo: pega aquí tu mensaje completo.]",
      },
      opened: {
        before:
          "Tu app de correo debería abrirse con tu mensaje listo; solo presiona Enviar. Si no se abrió, escríbenos a",
        after: ".",
        openAgain: "Abrir tu app de correo de nuevo",
        copyAddress: "Copiar dirección",
        copied: "¡Copiado!",
        copyFailed: "No se pudo copiar; selecciona la dirección",
      },
      trimmed: {
        text: "Tu mensaje era demasiado largo para un enlace de correo, así que lo acortamos. Pega el texto completo en el correo antes de enviarlo.",
        copyMessage: "Copiar mensaje completo",
      },
    },
  },
};
