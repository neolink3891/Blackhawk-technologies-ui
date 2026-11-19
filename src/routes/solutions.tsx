import { createFileRoute, redirect } from "@tanstack/react-router";

// /solutions was renamed /products (2026-11): permanent redirect for old links and search results, keeping the
// query string (e.g. utm_ campaign parameters).
export const Route = createFileRoute("/solutions")({
  beforeLoad: ({ location }) => {
    throw redirect({ to: "/products", search: location.search, statusCode: 301 });
  },
});
