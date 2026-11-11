// Copy for the Sekro product page (/sekro, /es/sekro). Every claim was checked (Nov 2026) against the iOS app,
// the Android app and sekro-api; keep it in step with them. UI wording follows the apps' string catalogs
// (en-GB / es-ES). Spanish: "tú", es-ES spelling ("vídeo"), as on the other Sekro pages.

import type { Lang } from "@/components/site/LegalPage";

export interface SekroProductCopy {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  tagline: string;
  summary: string;
  badges: { appStoreTop: string; googlePlayTop: string; comingSoon: string; appStoreAlt: string };
  howTitle: string;
  howSteps: { title: string; body: string }[];
  hideTitle: string;
  hideItems: { title: string; body: string }[];
  featuresTitle: string;
  features: { key: FeatureKey; title: string; body: string }[];
  screenshotsTitle: string;
  screenshots: { file: string; caption: string; alt: string }[];
  ageNote: string;
  linksTitle: string;
  links: { privacy: string; terms: string; deleteAccount: string; childSafety: string; support: string };
  languageLabel: string;
  alternateLabel: string;
}

export type FeatureKey = "e2e" | "recipients" | "keys" | "contacts" | "capture" | "watermark" | "deleteEverywhere";

export const sekroProduct: Record<Lang, SekroProductCopy> = {
  en: {
    metaTitle: "Sekro — Hidden in plain sight | BlackHawk Technologies",
    metaDescription:
      "Hide photos, videos, voice notes and text inside ordinary images. Only the person you choose can open them. End-to-end encrypted, for iPhone and Android.",
    eyebrow: "A BlackHawk Technologies app",
    tagline: "Hidden in plain sight.",
    summary:
      "Hide photos, videos, voice notes and text inside ordinary images. Only the person you choose can open them.",
    badges: {
      appStoreTop: "Download on the",
      googlePlayTop: "Get it on",
      comingSoon: "Coming soon",
      appStoreAlt: "Download on the App Store",
    },
    howTitle: "How it works",
    howSteps: [
      {
        title: "Choose what to hide, and who can open it",
        body: "Pick a photo, video, audio or text, a cover image, and the contacts it's for.",
      },
      {
        title: "Sekro encrypts it on your phone",
        body: "It's end-to-end encrypted on your device and hidden inside the cover image, which still looks like an ordinary picture.",
      },
      {
        title: "Share the image anywhere",
        body: "Send it in a Sekro chat, or save and share the image however you like. Only your recipients can reveal it, in Sekro.",
      },
    ],
    hideTitle: "What you can hide",
    hideItems: [
      { title: "Photos", body: "Any photo you choose." },
      { title: "Videos", body: "Up to 7 minutes." },
      { title: "Voice notes and audio", body: "Record a voice note or pick an audio file, up to 10 minutes." },
      { title: "Text", body: "Up to 5,000 characters." },
      {
        title: "A hidden note",
        body: "Optional, up to 5,000 characters, with a photo, video or audio. Revealed together with it.",
      },
    ],
    featuresTitle: "Private by design",
    features: [
      {
        key: "e2e",
        title: "End-to-end encrypted",
        body: "What you hide, and your chat messages, are encrypted on your phone before they leave it. Our servers can't decrypt them.",
      },
      {
        key: "recipients",
        title: "Locked to your recipients, and signed",
        body: "Each Sekro opens only for the people you made it for, and for you. It's signed, so they know it came from you and hasn't been changed. Anyone else sees “This Sekro isn't for you.”",
      },
      {
        key: "keys",
        title: "Your keys follow your account",
        body: "Your encryption keys are backed up to your account, encrypted with a Sekro passphrase that never leaves your device, so you keep access on a new phone.",
      },
      {
        key: "contacts",
        title: "Contacts only",
        body: "You chat with, and make Sekros for, people you've accepted as contacts. No one else can message you.",
      },
      {
        key: "capture",
        title: "Screenshot and recording protection",
        body: "While something is revealed, screenshots and screen recordings don't capture it. If Sekro detects one, the content locks again and the sender is told.",
      },
      {
        key: "watermark",
        title: "Optional watermark",
        body: "Turn on “Show watermark when viewing” and recipients see their @username and the time over what they reveal. Not on your own copies.",
      },
      {
        key: "deleteEverywhere",
        title: "Delete everywhere",
        body: "Take back a video or voice note you made: it's removed from every chat you sent it to and from our servers, and stops working everywhere.",
      },
    ],
    screenshotsTitle: "A look inside",
    screenshots: [
      {
        file: "2-create",
        caption: "Choose the secret, the cover and who it's for",
        alt: "Sekro's Create secret media screen: a photo to hide, a sunflower cover image, an optional hidden note and the watermark switch.",
      },
      {
        file: "3-chat",
        caption: "Send it in a chat: it looks like any picture",
        alt: "A Sekro chat with a sunflower image marked as secret media, with “Tap to reveal”.",
      },
      {
        file: "4-reveal-watermark",
        caption: "Revealed only for the recipient, watermarked",
        alt: "A revealed photo of a mountain lake with the viewer's username and the time watermarked over it, and its hidden note.",
      },
      {
        file: "6-open-not-for-you",
        caption: "Anyone else can't open it",
        alt: "Sekro's Open screen showing a hot-air balloon image with the message “This Sekro isn't for you.”",
      },
    ],
    ageNote: "Sekro is for people aged 18 or over.",
    linksTitle: "Help and legal",
    links: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      deleteAccount: "Delete your account",
      childSafety: "Child safety",
      support: "Support",
    },
    languageLabel: "Language",
    alternateLabel: "Leer en español",
  },
  es: {
    metaTitle: "Sekro — Oculto a simple vista | BlackHawk Technologies",
    metaDescription:
      "Oculta fotos, vídeos, notas de voz y texto dentro de imágenes normales. Solo quien tú elijas puede abrirlos. Cifrado de extremo a extremo, para iPhone y Android.",
    eyebrow: "Una app de BlackHawk Technologies",
    tagline: "Oculto a simple vista.",
    summary:
      "Oculta fotos, vídeos, notas de voz y texto dentro de imágenes normales. Solo quien tú elijas puede abrirlos.",
    badges: {
      appStoreTop: "Descárgalo en el",
      googlePlayTop: "Disponible en",
      comingSoon: "Próximamente",
      // Matches the words on Apple's es-ES badge artwork.
      appStoreAlt: "Consíguelo en el App Store",
    },
    howTitle: "Cómo funciona",
    howSteps: [
      {
        title: "Elige qué ocultar y quién puede abrirlo",
        body: "Escoge una foto, un vídeo, un audio o un texto, una imagen de portada y los contactos a los que va dirigido.",
      },
      {
        title: "Sekro lo cifra en tu teléfono",
        body: "Se cifra de extremo a extremo en tu dispositivo y se oculta dentro de la imagen de portada, que sigue pareciendo una imagen normal.",
      },
      {
        title: "Comparte la imagen donde quieras",
        body: "Envíala en un chat de Sekro, o guárdala y compártela como prefieras. Solo tus destinatarios pueden revelarla, en Sekro.",
      },
    ],
    hideTitle: "Qué puedes ocultar",
    hideItems: [
      { title: "Fotos", body: "Cualquier foto que elijas." },
      { title: "Vídeos", body: "De hasta 7 minutos." },
      { title: "Notas de voz y audio", body: "Graba una nota de voz o elige un archivo de audio, de hasta 10 minutos." },
      { title: "Texto", body: "De hasta 5.000 caracteres." },
      {
        title: "Una nota oculta",
        body: "Opcional, de hasta 5.000 caracteres, con una foto, un vídeo o un audio. Se revela junto con ellos.",
      },
    ],
    featuresTitle: "Privado por diseño",
    features: [
      {
        key: "e2e",
        title: "Cifrado de extremo a extremo",
        body: "Lo que ocultas, y tus mensajes del chat, se cifran en tu teléfono antes de salir de él. Nuestros servidores no pueden descifrarlos.",
      },
      {
        key: "recipients",
        title: "Solo para tus destinatarios, y firmado",
        body: "Cada Sekro solo se abre para las personas para las que lo creaste, y para ti. Va firmado, así que saben que es tuyo y que nadie lo ha modificado. Cualquier otra persona ve «Este Sekro no es para ti.»",
      },
      {
        key: "keys",
        title: "Tus claves van con tu cuenta",
        body: "Tus claves de cifrado se guardan en tu cuenta, cifradas con una frase de contraseña de Sekro que nunca sale de tu dispositivo, para que no pierdas el acceso al cambiar de teléfono.",
      },
      {
        key: "contacts",
        title: "Solo contactos",
        body: "Chateas y creas Sekros solo con personas que has aceptado como contactos. Nadie más puede escribirte.",
      },
      {
        key: "capture",
        title: "Protección contra capturas y grabaciones",
        body: "Mientras algo está revelado, las capturas y grabaciones de pantalla no lo recogen. Si Sekro detecta una, el contenido se vuelve a bloquear y se avisa a quien lo envió.",
      },
      {
        key: "watermark",
        title: "Marca de agua opcional",
        body: "Activa «Mostrar marca de agua al verlo» y quien lo reciba verá su @usuario y la hora sobre lo que revela. No aparece en tus propias copias.",
      },
      {
        key: "deleteEverywhere",
        title: "Eliminar en todas partes",
        body: "Retira un vídeo o una nota de voz que hayas creado: se elimina de todos los chats a los que lo enviaste y de nuestros servidores, y deja de funcionar en todas partes.",
      },
    ],
    screenshotsTitle: "Por dentro",
    screenshots: [
      {
        file: "2-create",
        caption: "Elige el secreto, la portada y para quién es",
        alt: "La pantalla Crear contenido secreto de Sekro: una foto para ocultar, una portada con un girasol, una nota oculta opcional y el interruptor de la marca de agua.",
      },
      {
        file: "3-chat",
        caption: "Envíalo en un chat: parece una imagen cualquiera",
        alt: "Un chat de Sekro con una imagen de un girasol marcada como contenido secreto, con «Toca para revelar».",
      },
      {
        file: "4-reveal-watermark",
        caption: "Revelado solo para el destinatario, con marca de agua",
        alt: "Una foto revelada de un lago de montaña con el nombre de usuario de quien la ve y la hora en marca de agua, y su nota oculta.",
      },
      {
        file: "6-open-not-for-you",
        caption: "Nadie más puede abrirlo",
        alt: "La pantalla Abrir de Sekro con una imagen de globos aerostáticos y el mensaje «Este Sekro no es para ti.»",
      },
    ],
    ageNote: "Sekro es para personas de 18 años o más.",
    linksTitle: "Ayuda e información legal",
    links: {
      privacy: "Política de privacidad",
      terms: "Términos del servicio",
      deleteAccount: "Eliminar tu cuenta",
      childSafety: "Protección infantil",
      support: "Soporte",
    },
    languageLabel: "Idioma",
    alternateLabel: "Read in English",
  },
};
