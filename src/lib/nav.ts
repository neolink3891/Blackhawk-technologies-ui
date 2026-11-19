import { HOME_ANCHORS } from "@/content/home";

/** Main navigation; "Services" is the custom software & AI sections on the home page. */
export const NAV_LINKS: {
  to: "/" | "/about" | "/products" | "/contact";
  hash?: string;
  label: string;
}[] = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/", hash: HOME_ANCHORS.services, label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];
