import { createFileRoute } from "@tanstack/react-router";
import { ProductsPage } from "@/components/pages/ProductsPage";
import { productsCopy } from "@/content/products";
import { pageHead } from "@/lib/i18n";

const t = productsCopy.es.meta;

export const Route = createFileRoute("/es/products")({
  head: () =>
    pageHead({
      page: "products",
      lang: "es",
      title: t.title,
      description: t.description,
      ogDescription: t.ogDescription,
    }),
  component: () => <ProductsPage lang="es" />,
});
