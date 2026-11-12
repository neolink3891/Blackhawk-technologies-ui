// Copy for the Sekro invite page (/sekro/add/<username>). Spanish: "tú", es-ES, as on the other Sekro pages.

import type { Lang } from "@/components/site/LegalPage";

export interface SekroInviteCopy {
  title: (u: string) => string;
  /** The heading after the highlighted "@username". */
  invitedYou: string;
  metaDescription: (u: string) => string;
  summary: string;
  getApp: (u: string) => string;
  openInSekro: string;
  alreadyInstalled: string;
  redirecting: string;
  appStoreButton: string;
  googlePlayTop: string;
  scanTitle: string;
  scanBody: string;
  qrAlt: (u: string) => string;
  ageNote: string;
  learnMore: string;
  invalidTitle: string;
  invalidBody: string;
  languageLabel: string;
  newTab: string;
}

export const sekroInvite: Record<Lang, SekroInviteCopy> = {
  en: {
    title: (u) => `@${u} invited you to Sekro`,
    invitedYou: "invited you to Sekro",
    metaDescription: (u) =>
      `Join @${u} on Sekro: hide photos, videos, voice notes and text inside ordinary images that only the person you choose can open.`,
    summary:
      "Sekro hides photos, videos, voice notes and text inside ordinary images. Only the person you choose can open them.",
    getApp: (u) => `Get Sekro to add @${u} to your contacts.`,
    openInSekro: "Open in Sekro",
    alreadyInstalled: "Already have Sekro?",
    redirecting: "Taking you to the App Store…",
    appStoreButton: "Download on the App Store",
    googlePlayTop: "Get it on",
    scanTitle: "On your phone",
    scanBody: "Scan this code with your phone's camera to open the invite there.",
    qrAlt: (u) => `QR code for @${u}'s Sekro invite link`,
    ageNote: "Sekro is for people aged 18 or over.",
    learnMore: "Learn more about Sekro",
    invalidTitle: "This invite link isn't valid",
    invalidBody: "Check the link you were sent, or ask the person to share it again from the app.",
    languageLabel: "Language",
    newTab: "opens in a new tab",
  },
  es: {
    title: (u) => `@${u} te ha invitado a Sekro`,
    invitedYou: "te ha invitado a Sekro",
    metaDescription: (u) =>
      `Únete a @${u} en Sekro: oculta fotos, vídeos, notas de voz y texto dentro de imágenes normales que solo puede abrir quien tú elijas.`,
    summary:
      "Sekro oculta fotos, vídeos, notas de voz y texto dentro de imágenes normales. Solo puede abrirlos la persona que tú elijas.",
    getApp: (u) => `Descarga Sekro para añadir a @${u} a tus contactos.`,
    openInSekro: "Abrir en Sekro",
    alreadyInstalled: "¿Ya tienes Sekro?",
    redirecting: "Abriendo el App Store…",
    // Matches the words on Apple's es-ES badge artwork.
    appStoreButton: "Consíguelo en el App Store",
    googlePlayTop: "Disponible en",
    scanTitle: "En tu móvil",
    scanBody: "Escanea este código con la cámara del móvil para abrir la invitación allí.",
    qrAlt: (u) => `Código QR del enlace de invitación de @${u} a Sekro`,
    ageNote: "Sekro es solo para mayores de 18 años.",
    learnMore: "Más información sobre Sekro",
    invalidTitle: "Este enlace de invitación no es válido",
    invalidBody:
      "Revisa el enlace que te enviaron o pide a esa persona que vuelva a compartirlo desde la app.",
    languageLabel: "Idioma",
    newTab: "se abre en una pestaña nueva",
  },
};
