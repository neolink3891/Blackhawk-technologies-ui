import { useState, type FormEvent, type InvalidEvent } from "react";
import { Check, Copy, Mail, MapPin, Send } from "lucide-react";
import { type ContactCopy, contactCopy, PROJECT_TYPES, type ProjectType } from "@/content/contact";
import type { Lang } from "@/lib/i18n";
import { buildMailto, CONTACT_EMAIL } from "@/lib/mailto";

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
  const [result, setResult] = useState<{
    url: string;
    trimmed: boolean;
    fullMessage: string;
  } | null>(null);
  const validation = validationHandlers(f.errors);

  // Builds the email and opens the visitor's email app (mailto:). Nothing is sent by the site: the visitor presses
  // Send in their own app, so there's no "Message sent" here.
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();
    const m = f.mail;
    const projectType = f.projectTypes[get("projectType") as ProjectType] ?? get("projectType");
    const message = get("message");
    const mail = buildMailto({
      tag: lang === "es" ? "ES" : "EN",
      projectType,
      name: get("name"),
      details: [
        [m.name, get("name")],
        [m.email, get("email")],
        [m.company, get("company") || m.none],
        [m.projectType, projectType],
        [m.language, m.languageValue],
        [m.page, window.location.href],
      ],
      messageLabel: m.message,
      message,
      trimmedNote: m.trimmedNote,
    });
    setResult({ url: mail.url, trimmed: mail.trimmed, fullMessage: message });
    window.location.href = mail.url;
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
                  <p className="text-sm font-medium">{CONTACT_EMAIL}</p>
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
            {result && (
              <div
                role="status"
                className="mt-6 space-y-3 rounded-lg border border-primary/40 bg-primary/10 px-4 py-3 text-sm text-foreground"
              >
                <p>
                  {f.opened.before}{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-medium text-primary underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  {f.opened.after}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <CopyButton text={CONTACT_EMAIL} label={f.opened.copyAddress} copy={f.opened} />
                  <a href={result.url} className="font-medium text-primary underline">
                    {f.opened.openAgain}
                  </a>
                </div>
                {result.trimmed && (
                  <div className="border-t border-primary/30 pt-3">
                    <p>{f.trimmed.text}</p>
                    <div className="mt-2">
                      <CopyButton
                        text={result.fullMessage}
                        label={f.trimmed.copyMessage}
                        copy={f.opened}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.01] md:w-auto"
            >
              {f.submit} <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

/** Copies text to the clipboard, with "Copied!" (or a fallback hint) as feedback. */
function CopyButton({
  text,
  label,
  copy,
}: {
  text: string;
  label: string;
  copy: Pick<ContactCopy["form"]["opened"], "copied" | "copyFailed">;
}) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setState("copied");
        } catch {
          setState("failed");
        }
        setTimeout(() => setState("idle"), 2500);
      }}
      className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background/60 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/50"
    >
      {state === "copied" ? (
        <Check className="h-3.5 w-3.5 text-primary" />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
      <span aria-live="polite">
        {state === "copied" ? copy.copied : state === "failed" ? copy.copyFailed : label}
      </span>
    </button>
  );
}
