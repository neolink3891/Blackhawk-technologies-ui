import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — BlackHawk Technologies" },
      { name: "description", content: "Get in touch with BlackHawk Technologies to discuss software projects, platforms, mobile apps, or automation ideas." },
      { property: "og:title", content: "Contact BlackHawk Technologies" },
      { property: "og:description", content: "Let's build something intelligent — get in touch." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Message sent — we'll be in touch shortly.");
      (e.target as HTMLFormElement).reset();
    }, 600);
  }

  return (
    <>
      <Toaster />
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Let's build something <span className="text-gradient">intelligent</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">
            Whether you're launching a new product, modernising existing systems, or exploring automation opportunities, we'd love to hear about your project.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <div className="rounded-2xl border border-border/60 bg-gradient-card p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-secondary text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
                  <p className="text-sm font-medium">contactus@bhtapp.com</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-border/60 bg-gradient-card p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-secondary text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Location</p>
                  <p className="text-sm font-medium">United Kingdom</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-border/60 bg-secondary/30 p-6 text-sm text-muted-foreground">
              We typically respond within 1–2 business days. For detailed briefs, feel free to include links, documents, or references.
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-border/60 bg-gradient-card p-8 shadow-elegant">
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Full Name" name="name" required />
              <Field label="Email Address" name="email" type="email" required />
              <Field label="Company Name" name="company" />
              <SelectField label="Project type" name="projectType" options={[
                "Custom software", "Mobile app", "AI / Automation", "SaaS platform", "Consultation", "Other",
              ]} />
            </div>
            <div className="mt-4">
              <label className="text-sm font-medium text-foreground">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell us about your project..."
                className="mt-2 w-full rounded-lg border border-border bg-input/40 px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.01] disabled:opacity-60 md:w-auto"
            >
              {submitting ? "Sending..." : "Send Message"} <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground">{label}{required && <span className="text-primary"> *</span>}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full rounded-lg border border-border bg-input/40 px-4 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground">{label}</label>
      <select
        name={name}
        className="mt-2 w-full rounded-lg border border-border bg-input/40 px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
      >
        {options.map((o) => <option key={o} className="bg-background">{o}</option>)}
      </select>
    </div>
  );
}