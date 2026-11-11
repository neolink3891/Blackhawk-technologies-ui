// Sekro product page: store links and shared paths.

/**
 * Store listings. Neither is public yet: an empty URL renders that badge as "Coming soon".
 * Google Play, when live: https://play.google.com/store/apps/details?id=com.blackhawktechnologies.sekro
 */
export const SEKRO_LINKS = {
  appStore: "",
  googlePlay: "",
};

export const SEKRO_HOME = { en: "/sekro", es: "/es/sekro" } as const;

/** Images in public/sekro (made from the iOS asset catalog and docs/app-store/screenshots). */
export const SEKRO_IMAGES = {
  icon: "/sekro/app-icon.webp",
  ogImage: "/sekro/og-image.jpg",
  screenshot: (lang: "en" | "es", name: string) => `/sekro/screenshots/${lang}/${name}.webp`,
};
