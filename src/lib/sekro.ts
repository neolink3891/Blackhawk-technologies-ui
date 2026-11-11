// Sekro product page: store links and shared paths.

/**
 * Store listings. An empty URL renders that badge as "Coming soon".
 * App Store: region-neutral link (no /us/), so Apple sends each visitor to their own storefront.
 * Google Play, when live: https://play.google.com/store/apps/details?id=com.blackhawktechnologies.sekro
 */
export const SEKRO_LINKS = {
  appStore: "https://apps.apple.com/app/id6832626608",
  googlePlay: "",
};

export const SEKRO_HOME = { en: "/sekro", es: "/es/sekro" } as const;

/** Images in public/sekro (made from the iOS asset catalog and docs/app-store/screenshots). */
export const SEKRO_IMAGES = {
  icon: "/sekro/app-icon.webp",
  ogImage: "/sekro/og-image.jpg",
  // Apple's official black "Download on the App Store" badges, unmodified (toolbox.marketingtools.apple.com:
  // en-us, and es-es, whose artwork reads "Consíguelo en el App Store"). Shown at least 40px tall.
  appStoreBadge: { en: "/sekro/badges/app-store-en.svg", es: "/sekro/badges/app-store-es.svg" },
  screenshot: (lang: "en" | "es", name: string) => `/sekro/screenshots/${lang}/${name}.webp`,
};
