import { useState, type FormEvent, type InvalidEvent } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { type ContactCopy, contactCopy, PROJECT_TYPES } from "@/content/contact";
import { HTML_LANG, type Lang } from "@/lib/i18n";

type Field = HTMLInputElement | HTMLTextAreaElement;

/** Browser validation, with the message in the page's language instead of the browser's. */
function validationHandlers(errors: ContactCopy["form"]["errors"]) {
  return {
    onInvalid: (e: InvalidEvent<Field>) => {
      const el = e.currentTarget;
      el.setCustomValidity(el.validity.valueMissing ? errors.required : errors.email);
    },
    onInput: (e: FormEvent<Field>) => e.currentTarget.setCustomValidity(""),
  };
}

const inputClass =
  "mt-2 w-full rounded-lg border border-border bg-input/40 px-4 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/30";

export function ContactPage({ lang }: { lang: Lang }) {
  const t = contactCopy[lang];
  const f = t.form;
  const [submitting, setSubmitting] = useState(false);
  const validation = validationHandlers(f.errors);

  // NOTE: the form doesn't send anything yet (no email or API behind it). When it does, the hidden `lang` field
  // carries the visitor's language (en-GB / es-419) into the message.
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success(f.sent);
      (e.target as HTMLFormElement).reset();
    }, 600);
  }

  const label = (text: string, htmlFor: string, required?: boolean) => (
    <label htmlFor={htmlFor} className="text-sm font-medium text-foreground">
      {text}
      {required && (
        <>
          <span aria-hidden="true" className="text-primary">
            {" "}
            *
          </span>
          <span className="sr-only"> ({f.required})</span>
        </>
      )}
    </label>
  );

  return (
    <>
      <Toaster />
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">{t.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            {t.title[0]}
            <span className="text-gradient">{t.title[1]}</span>
            {t.title[2]}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">{t.intro}</p>
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
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {t.emailLabel}
                  </p>
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
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {t.locationLabel}
                  </p>
                  <p className="text-sm font-medium">{t.location}</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-border/60 bg-secondary/30 p-6 text-sm text-muted-foreground">
              {t.responseNote}
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-border/60 bg-gradient-card p-8 shadow-elegant"
          >
            <input type="hidden" name="lang" value={HTML_LANG[lang]} />
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                {label(f.name, "contact-name", true)}
                <input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  required
                  className={inputClass}
                  {...validation}
                />
              </div>
              <div>
                {label(f.email, "contact-email", true)}
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={inputClass}
                  {...validation}
                />
              </div>
              <div>
                {label(f.company, "contact-company")}
                <input
                  id="contact-company"
                  name="company"
                  autoComplete="organization"
                  className={inputClass}
                />
              </div>
              <div>
                {label(f.projectType, "contact-project-type")}
                <select
                  id="contact-project-type"
                  name="projectType"
                  className={inputClass.replace(" placeholder:text-muted-foreground/70", "")}
                >
                  {PROJECT_TYPES.map((v) => (
                    <option key={v} value={v} className="bg-background">
                      {f.projectTypes[v]}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-4">
              {label(f.message, "contact-message", true)}
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder={f.messagePlaceholder}
                className={`${inputClass} py-3`}
                {...validation}
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.01] disabled:opacity-60 md:w-auto"
            >
              {submitting ? f.sending : f.submit} <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
