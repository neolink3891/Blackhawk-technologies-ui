import { useEffect, useRef, useState, type FormEvent, type InvalidEvent } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import {
  type ContactCopy,
  contactCopy,
  PROJECT_TYPE_EMAIL_LABELS,
  PROJECT_TYPES,
  type ProjectType,
} from "@/content/contact";
import { FORMSPREE_PRIVACY_URL, submitToFormspree } from "@/lib/formspree";
import { siteCopy } from "@/content/site";
import { HTML_LANG, type Lang } from "@/lib/i18n";

type Field = HTMLInputElement | HTMLTextAreaElement;

/** Minimum time between showing the form and sending it (bots fill forms instantly). */
const MIN_FORM_MS = 3000;

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
  const [failure, setFailure] = useState<keyof ContactCopy["form"]["failure"] | null>(null);
  const startedAt = useRef(0);
  const validation = validationHandlers(f.errors);

  // When the form was shown: anything sent within a few seconds is almost certainly a bot.
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  // Posted straight to Formspree, which emails contactus@bhtapp.com. Success is shown only on a 2xx from Formspree.
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const get = (k: string) => String(fd.get(k) ?? "").trim();
    setFailure(null);
    if (Date.now() - startedAt.current < MIN_FORM_MS) {
      setFailure("tooFast");
      return;
    }
    const name = get("name").replace(/[\r\n]+/g, " ");
    const email = get("email");
    const type = PROJECT_TYPE_EMAIL_LABELS[get("projectType") as ProjectType] ?? get("projectType");
    setSubmitting(true);
    const res = await submitToFormspree({
      _subject: `[Website ${lang === "es" ? "ES" : "EN"}] ${type} — ${name}`,
      _replyto: email,
      // Honeypot: Formspree discards submissions where this is filled in.
      _gotcha: get("website"),
      name,
      email,
      company: get("company"),
      projectType: type,
      message: get("message"),
      language: HTML_LANG[lang],
      page: window.location.href,
    });
    setSubmitting(false);
    if (res.ok) {
      toast.success(f.sent);
      form.reset();
    } else {
      setFailure(res.reason);
    }
  }

  const [privacyBefore, privacyAfter] = f.privacy.split("{formspree}");

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
            className="relative rounded-2xl border border-border/60 bg-gradient-card p-8 shadow-elegant"
          >
            <input type="hidden" name="lang" value={HTML_LANG[lang]} />
            {/* Honeypot: hidden from people, filled in by bots. */}
            <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">
              <label htmlFor="contact-website">{f.honeypot}</label>
              <input
                id="contact-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
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
            {failure && (
              <div
                role="alert"
                className="mt-6 rounded-lg border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm text-foreground"
              >
                {f.failure[failure]} {f.failure.fallback}{" "}
                <a
                  href="mailto:contactus@bhtapp.com"
                  className="font-medium text-primary underline"
                >
                  contactus@bhtapp.com
                </a>
                .
              </div>
            )}
            <button
              type="submit"
              disabled={submitting}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.01] disabled:opacity-60 md:w-auto"
            >
              {submitting ? f.sending : f.submit} <Send className="h-4 w-4" />
            </button>
            <p className="mt-4 text-xs text-muted-foreground">
              {privacyBefore}
              <a
                href={FORMSPREE_PRIVACY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                Formspree
                <span className="sr-only"> ({siteCopy[lang].newTab})</span>
              </a>
              {privacyAfter}
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
