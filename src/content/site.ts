// Site-wide copy: header, footer, language switcher, the Spanish hint, 404 and error pages.
// English is UK English; Spanish is neutral Latin American Spanish with "tú".

import type { Lang } from "@/lib/i18n";

export const siteCopy = {
  en: {
    nav: {
      home: "Home",
      products: "Products",
      services: "Services",
      about: "About",
      contact: "Contact",
    },
    headerCta: "Get in touch",
    toggleMenu: "Toggle menu",
    logoAlt: "BlackHawk Technologies",
    language: {
      label: "Language",
      /** Read aloud for the other language's link. */
      switchTo: "Ver esta página en español",
    },
    footer: {
      tagline: "Software products, custom development and AI for modern businesses.",
      navigate: "Navigate",
      sekro: "Sekro",
      sekroLinks: {
        about: "About Sekro",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        deleteAccount: "Delete your account",
        childSafety: "Child safety",
      },
      contact: "Contact",
      location: "United Kingdom",
      rights: "All rights reserved.",
    },
    notFound: {
      title: "Page not found",
      body: "The page you're looking for doesn't exist or has been moved.",
      home: "Go home",
    },
    error: {
      title: "This page didn't load",
      body: "Something went wrong on our end. You can try refreshing or head back home.",
      retry: "Try again",
      home: "Go home",
    },
    newTab: "opens in a new tab",
  },
  es: {
    nav: {
      home: "Inicio",
      products: "Productos",
      services: "Servicios",
      about: "Quiénes somos",
      contact: "Contacto",
    },
    headerCta: "Contáctanos",
    toggleMenu: "Abrir o cerrar el menú",
    logoAlt: "BlackHawk Technologies",
    language: {
      label: "Idioma",
      switchTo: "View this page in English",
    },
    footer: {
      tagline: "Productos de software, desarrollo a medida e IA para empresas modernas.",
      navigate: "Navegación",
      sekro: "Sekro",
      sekroLinks: {
        about: "Sobre Sekro",
        privacy: "Política de privacidad",
        terms: "Términos del servicio",
        deleteAccount: "Eliminar tu cuenta",
        childSafety: "Protección infantil",
      },
      contact: "Contacto",
      location: "Reino Unido",
      rights: "Todos los derechos reservados.",
    },
    notFound: {
      title: "Página no encontrada",
      body: "La página que buscas no existe o cambió de dirección.",
      home: "Volver al inicio",
    },
    error: {
      title: "No pudimos cargar esta página",
      body: "Algo salió mal de nuestro lado. Intenta recargarla o vuelve al inicio.",
      retry: "Intentar de nuevo",
      home: "Ir al inicio",
    },
    newTab: "se abre en una pestaña nueva",
  },
} satisfies Record<Lang, unknown>;

/** The hint shown on English pages to visitors whose browser (or saved choice) prefers Spanish. Always Spanish. */
export const langHint = {
  question: "¿Prefieres español?",
  link: "Ver esta página en español",
  dismiss: "Cerrar",
};
