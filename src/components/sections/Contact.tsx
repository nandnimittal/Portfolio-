"use client";

import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { contactInfo } from "@/data/portfolio";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setMessage(
        "EmailJS is not configured. Add your keys to .env.local — meanwhile you can email directly."
      );
      return;
    }

    setStatus("loading");
    try {
      await emailjs.sendForm(serviceId, templateId, form, {
        publicKey,
      });
      setStatus("success");
      setMessage("Message sent successfully. I'll get back to you soon!");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again or email me directly.");
    }
  }

  return (
    <section id="contact" className="section-padding scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title="Contact"
          subtitle="Let's connect — open to opportunities in Data Science and software development."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            {[
              {
                icon: Mail,
                label: "Email",
                value: contactInfo.email,
                href: `mailto:${contactInfo.email}`,
              },
              {
                icon: Phone,
                label: "Phone",
                value: contactInfo.phone,
                href: `tel:${contactInfo.phone.replace(/\s/g, "")}`,
              },
              {
                icon: LinkedinIcon,
                label: "LinkedIn",
                value: "nandnimittal05",
                href: contactInfo.linkedin,
              },
              {
                icon: GithubIcon,
                label: "GitHub",
                value: "nandnimittal",
                href: contactInfo.github,
              },
              {
                icon: MapPin,
                label: "Location",
                value: contactInfo.location,
                href: undefined,
              },
            ].map((item) => (
              <GlassCard key={item.label} hover={false} className="flex items-center gap-4">
                <div className="rounded-xl border border-sky-400/20 bg-sky-500/10 p-2.5 text-sky-400">
                  <item.icon size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-sm font-medium text-slate-200 hover:text-sky-300"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-slate-200">
                      {item.value}
                    </p>
                  )}
                </div>
              </GlassCard>
            ))}
          </div>

          <GlassCard hover={false}>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label htmlFor="from_name" className="mb-2 block text-sm text-slate-300">
                  Name
                </label>
                <input
                  id="from_name"
                  name="from_name"
                  type="text"
                  required
                  autoComplete="name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/50 focus:ring-1 focus:ring-sky-400/40"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="from_email" className="mb-2 block text-sm text-slate-300">
                  Email
                </label>
                <input
                  id="from_email"
                  name="from_email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/50 focus:ring-1 focus:ring-sky-400/40"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-y rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/50 focus:ring-1 focus:ring-sky-400/40"
                  placeholder="Tell me about an opportunity or idea..."
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                disabled={status === "loading"}
                className="w-full sm:w-auto"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </Button>

              {message && (
                <p
                  role="status"
                  className={`text-sm ${
                    status === "success" ? "text-emerald-400" : "text-amber-300"
                  }`}
                >
                  {message}
                </p>
              )}
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
