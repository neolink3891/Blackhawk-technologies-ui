import { createFileRoute } from "@tanstack/react-router";
import { hreflangLinks, OG_LOCALE } from "@/lib/i18n";
import { SekroProductPage } from "@/components/site/SekroProductPage";
import { sekroProduct } from "@/content/sekro/product";
import { SEKRO_HOME, SEKRO_IMAGES } from "@/lib/sekro";
import { sekroJsonLdScript } from "@/lib/sekro-jsonld";
import { SITE_URL } from "@/lib/site";

const t = sekroProduct.en;

export const Route = createFileRoute("/sekro/")({
  head: () => ({
    meta: [
      { title: t.metaTitle },
      { name: "description", content: t.metaDescription },
      { property: "og:title", content: t.metaTitle },
      { property: "og:description", content: t.metaDescription },
      { property: "og:url", content: `${SITE_URL}${SEKRO_HOME.en}` },
      { property: "og:locale", content: OG_LOCALE.en },
      { property: "og:image", content: `${SITE_URL}${SEKRO_IMAGES.ogImage}` },
      { property: "og:image:alt", content: "Sekro" },
    ],
    links: hreflangLinks("sekro", "en"),
    scripts: [sekroJsonLdScript("en")],
  }),
  component: () => <SekroProductPage lang="en" />,
});
