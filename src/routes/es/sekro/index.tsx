import { createFileRoute } from "@tanstack/react-router";
import { SekroProductPage } from "@/components/site/SekroProductPage";
import { sekroProduct } from "@/content/sekro/product";
import { SEKRO_HOME, SEKRO_IMAGES } from "@/lib/sekro";
import { SITE_URL } from "@/lib/site";

const t = sekroProduct.es;

export const Route = createFileRoute("/es/sekro/")({
  head: () => ({
    meta: [
      { title: t.metaTitle },
      { name: "description", content: t.metaDescription },
      { property: "og:title", content: t.metaTitle },
      { property: "og:description", content: t.metaDescription },
      { property: "og:url", content: `${SITE_URL}${SEKRO_HOME.es}` },
      { property: "og:locale", content: "es_ES" },
      { property: "og:image", content: `${SITE_URL}${SEKRO_IMAGES.ogImage}` },
      { property: "og:image:alt", content: "Sekro" },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}${SEKRO_HOME.es}` },
      { rel: "alternate", hrefLang: "en", href: `${SITE_URL}${SEKRO_HOME.en}` },
      { rel: "alternate", hrefLang: "es", href: `${SITE_URL}${SEKRO_HOME.es}` },
    ],
  }),
  component: () => <SekroProductPage lang="es" />,
});
