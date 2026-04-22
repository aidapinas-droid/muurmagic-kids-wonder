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
      toast.success("Message sent! We'll be in touch within 1 working day. ✨");
      (e.target as HTMLFormElement).reset();
    }, 700);
  }

  return (
    <section id="contact" className="relative bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="font-body text-sm font-bold uppercase tracking-widest text-primary">
              Get in touch
            </p>
            <h2 className="mt-2 font-display text-4xl font-black tracking-tight text-foreground sm:text-5xl">
              Let's make something magical together.
            </h2>
            <p className="mt-4 font-body text-base text-muted-foreground">
              Custom design for a nursery? A birthday backdrop with a name? Drop
              us a line — we love a creative challenge.
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
              <Field label="Your name">
                <Input required name="name" placeholder="Sophie Rivers" className="h-12 rounded-xl border-border bg-muted/40 font-body" />
              </Field>
              <Field label="Email">
                <Input required type="email" name="email" placeholder="sophie@example.com" className="h-12 rounded-xl border-border bg-muted/40 font-body" />
              </Field>
            </div>
            <div className="mt-4">
              <Field label="What's on your mind?">
                <Textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Tell us about the room or party you're dreaming up..."
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
              {sending ? "Sending..." : "Send message"}
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
