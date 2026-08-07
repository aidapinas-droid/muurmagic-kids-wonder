import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Instagram, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function Contact() {
  const [sending, setSending] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Bericht verstuurd! We reageren binnen 1 werkdag. ✨");
      (e.target as HTMLFormElement).reset();
    }, 700);
  }

  return (
    <section id="contact" className="relative bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="font-body text-sm font-bold uppercase tracking-widest text-primary">
              Neem contact op
            </p>
            <h2 className="mt-2 font-display text-4xl font-black tracking-tight text-foreground sm:text-5xl">
              Samen maken we iets magisch.
            </h2>
            <p className="mt-4 font-body text-base text-muted-foreground">
              Een ontwerp op maat voor de babykamer? Een verjaardagsdecor met naam?
              Stuur ons een bericht — we houden van een creatieve uitdaging.
            </p>

            <div className="mt-8 space-y-4">
              <ContactItem icon={Mail} label="hello@muurmagic.com" href="mailto:hello@muurmagic.com" />
              <ContactItem icon={MapPin} label="Studio Amsterdam, NL" />
              <ContactItem icon={Instagram} label="@muurmagic" href="https://instagram.com" />
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-border/60 bg-card p-6 shadow-card sm:p-8 lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Je naam">
                <Input required name="name" placeholder="Sanne Jansen" className="h-12 rounded-xl border-border bg-muted/40 font-body" />
              </Field>
              <Field label="E-mailadres">
                <Input required type="email" name="email" placeholder="sanne@voorbeeld.nl" className="h-12 rounded-xl border-border bg-muted/40 font-body" />
              </Field>
            </div>
            <div className="mt-4">
              <Field label="Waar kunnen we mee helpen?">
                <Textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Vertel over de kamer of het feest waar je van droomt..."
                  className="rounded-xl border-border bg-muted/40 font-body"
                />
              </Field>
            </div>
            <Button
              type="submit"
              disabled={sending}
              size="lg"
              className="mt-6 h-14 w-full rounded-full bg-gradient-magic font-body text-base font-bold text-primary-foreground shadow-soft hover:opacity-90 sm:w-auto sm:px-10"
            >
              {sending ? "Versturen..." : "Verstuur bericht"}
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block font-body text-sm font-bold text-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}

function ContactItem({
  icon: Icon,
  label,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href?: string;
}) {
  const inner = (
    <>
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-mint/30 text-mint-foreground">
        <Icon className="h-5 w-5" />
      </span>
      <span className="font-body text-base font-semibold text-foreground">{label}</span>
    </>
  );
  if (href) {
    return (
      <a href={href} className="flex items-center gap-3 transition-opacity hover:opacity-80">
        {inner}
      </a>
    );
  }
  return <div className="flex items-center gap-3">{inner}</div>;
}
