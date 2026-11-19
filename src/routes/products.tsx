import { createFileRoute } from "@tanstack/react-router";
import { ProductsPage } from "@/components/pages/ProductsPage";
import { productsCopy } from "@/content/products";
import { pageHead } from "@/lib/i18n";

const t = productsCopy.en.meta;

export const Route = createFileRoute("/products")({
  head: () =>
    pageHead({
      page: "products",
      lang: "en",
      title: t.title,
      description: t.description,
      ogDescription: t.ogDescription,
    }),
  component: () => <ProductsPage lang="en" />,
});
