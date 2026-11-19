// schema.org MobileApplication for /sekro and /es/sekro (JSON-LD in <head>).
import { HTML_LANG, type Lang } from "@/lib/i18n";
import { sekroProduct } from "@/content/sekro/product";
import { SEKRO_HOME, SEKRO_IMAGES, SEKRO_LINKS } from "@/lib/sekro";
import { SITE_URL } from "@/lib/site";

/** Store listings as given for structured data (the App Store one is the canonical /us/ listing URL). */
const STORE_URLS = ["https://apps.apple.com/us/app/sekro/id6832626608", SEKRO_LINKS.googlePlay];

export function sekroJsonLd(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Sekro",
    description: sekroProduct[lang].metaDescription,
    url: `${SITE_URL}${SEKRO_HOME[lang]}`,
    image: `${SITE_URL}${SEKRO_IMAGES.icon}`,
    inLanguage: HTML_LANG[lang],
    operatingSystem: "iOS, Android",
    applicationCategory: "CommunicationApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "GBP" },
    publisher: { "@type": "Organization", name: "BlackHawk Technologies Ltd", url: SITE_URL },
    sameAs: STORE_URLS,
    downloadUrl: STORE_URLS,
  };
}

/** A <script type="application/ld+json"> entry for a route's head(). `<` is escaped so the JSON can never close
 *  the script element. */
export const sekroJsonLdScript = (lang: Lang) => ({
  type: "application/ld+json",
  children: JSON.stringify(sekroJsonLd(lang)).replace(/</g, "\\u003c"),
});
