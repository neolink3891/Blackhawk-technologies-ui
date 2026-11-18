import type { LinkHTMLAttributes } from "react";

// BlackHawk logo images (src/assets/blackhawk-logo.png is the master; these WebPs are what the site serves).
import icon2x from "@/assets/blackhawk-icon@2x.webp";
import logoLg2x from "@/assets/blackhawk-logo-lg@2x.webp";
import logo2x from "@/assets/blackhawk-logo@2x.webp";
import logo3x from "@/assets/blackhawk-logo@3x.webp";

/** Tailwind's `sm` breakpoint: the navbar shows the icon below it and the full logo from it up. */
export const SM_UP = "(min-width: 640px)";
export const BELOW_SM = "(max-width: 639.98px)";

export const navIcon = { src: icon2x, width: 48, height: 48 };
/** Full logo in the navbar, 56px high (lg@2x is 339×112). */
export const navLogo = {
  src: logoLg2x,
  srcSet: `${logoLg2x} 2x, ${logo3x} 3x`,
  width: 170,
  height: 56,
};
/** Full logo in the footer, 44px high (@2x is 266×88). */
export const footerLogo = {
  src: logo2x,
  srcSet: `${logo2x} 2x, ${logo3x} 3x`,
  width: 133,
  height: 44,
};

/** Preloads for the navbar logo (above the fold): the media queries mean each viewport fetches only the image it
 *  shows. The navbar uses <picture>, which React doesn't preload itself. */
export const navLogoPreloads: LinkHTMLAttributes<HTMLLinkElement>[] = [
  { rel: "preload", as: "image", href: navIcon.src, media: BELOW_SM, fetchPriority: "high" },
  {
    rel: "preload",
    as: "image",
    href: navLogo.src,
    imageSrcSet: navLogo.srcSet,
    media: SM_UP,
    fetchPriority: "high",
  },
];
