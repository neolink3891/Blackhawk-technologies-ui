import { Link } from "@tanstack/react-router";
import { Hexagon, Linkedin, Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-primary">
              <Hexagon className="h-4 w-4 text-primary-foreground" strokeWidth={2.5} />
            </span>
            BlackHawk Technologies
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Building intelligent software for modern businesses.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[
              { href: "https://www.linkedin.com/", label: "LinkedIn", icon: Linkedin },
              { href: "https://github.com/", label: "GitHub", icon: Github },
              { href: "https://twitter.com/", label: "X (Twitter)", icon: Twitter },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-lg border border-border/60 bg-secondary/40 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Navigate</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/solutions" className="hover:text-foreground">Solutions</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>contactus@bhtapp.com</li>
            <li>United Kingdom</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <p className="mx-auto max-w-7xl px-6 py-6 text-xs text-muted-foreground">
          © 2026 BlackHawk Technologies. All rights reserved.
        </p>
      </div>
    </footer>
  );
}