import { createFileRoute, redirect } from "@tanstack/react-router";

// /solutions was renamed /products (2026-11): permanent redirect for old links and search results.
export const Route = createFileRoute("/solutions")({
  beforeLoad: () => {
    throw redirect({ to: "/products", statusCode: 301 });
  },
});
