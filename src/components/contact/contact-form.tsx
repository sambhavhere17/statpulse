"use client";

import { useCallback, useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ArrowRight, LoaderCircle, Send } from "lucide-react";
import { leadSchema, type LeadFormValues } from "@/lib/validation/lead";
import { TurnstileWidget } from "@/components/contact/turnstile-widget";

const serviceOptions = [
  ["free-discovery-consultation", "Free Discovery Consultation"],
  ["data-health-check", "Data Health Check"],
  ["business-dashboard", "Business Dashboard"],
  ["reporting-automation", "Reporting Automation"],
  ["monthly-analytics-partner", "Monthly Analytics Partner"],
];

type ContactFormProps = { defaultService?: string };

export function ContactForm({ defaultService = "" }: ContactFormProps) {
  const [startedAt, setStartedAt] = useState(0);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [formStatus, setFormStatus] = useState<{ kind: "success" | "error"; text: string } | null>(null);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      email: "",
      service: defaultService || "free-discovery-consultation",
      message: "",
      website: "",
      startedAt: 0,
      turnstileToken: "",
      sourcePage: "/contact",
    },
  });

  useEffect(() => setStartedAt(Date.now()), []);

  const setTurnstile = useCallback((token: string) => setTurnstileToken(token), []);

  async function onSubmit(values: LeadFormValues) {
    setFormStatus(null);
    const payload = {
      ...values,
      service: values.service || "Free Discovery Consultation",
      sourcePage: window.location.pathname + window.location.search,
      startedAt,
      turnstileToken,
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { ok?: boolean; error?: string; fields?: Record<string, string[]> };
      if (!response.ok || !result.ok) {
        if (result.fields) {
          Object.entries(result.fields).forEach(([field, messages]) => {
            if (messages?.[0] && ["name", "email", "service", "message"].includes(field)) {
              setError(field as "name" | "email" | "service" | "message", { message: messages[0] });
            }
          });
        }
        setFormStatus({ kind: "error", text: result.error || "We couldn’t send your enquiry. Please try again." });
        return;
      }

      setFormStatus({ kind: "success", text: "Thanks. Your enquiry has been saved, and we’ll follow up using the email you provided." });
      document.dispatchEvent(new CustomEvent("statpulse:analytics", { detail: { event: "contact_form_submitted" } }));
    } catch {
      setFormStatus({ kind: "error", text: "We couldn’t reach the contact service. Please try again later." });
    }
  }

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit(onSubmit)}>
      <div className="form-heading"><p className="eyebrow">YOUR PROJECT</p><h2>Tell us about your project</h2><p>Share enough context for a useful first conversation.</p></div>
      <input {...register("sourcePage")} type="hidden" />
      <input {...register("startedAt", { valueAsNumber: true })} type="hidden" value={startedAt} />
      <input {...register("turnstileToken")} type="hidden" value={turnstileToken} />
      <label className="honeypot" htmlFor="company-site">Leave this field empty</label>
      <input autoComplete="off" className="honeypot-input" id="company-site" tabIndex={-1} {...register("website")} />

      <div className="form-field">
        <label htmlFor="lead-name">Name <span>*</span></label>
        <input autoComplete="name" id="lead-name" placeholder="Your name" {...register("name")} aria-invalid={Boolean(errors.name)} />
        {errors.name && <span className="field-error">{errors.name.message}</span>}
      </div>
      <div className="form-field">
        <label htmlFor="lead-email">Email <span>*</span></label>
        <input autoComplete="email" id="lead-email" placeholder="you@company.com" type="email" {...register("email")} aria-invalid={Boolean(errors.email)} />
        {errors.email && <span className="field-error">{errors.email.message}</span>}
      </div>
      <div className="form-field">
        <label htmlFor="lead-service">Service you’re interested in</label>
        <select id="lead-service" {...register("service")} aria-invalid={Boolean(errors.service)}>
          {serviceOptions.map(([value, label]) => <option key={value || "discovery"} value={value}>{label}</option>)}
        </select>
        {errors.service && <span className="field-error">{errors.service.message}</span>}
      </div>
      <div className="form-field">
        <label htmlFor="lead-message">Message <span>*</span></label>
        <textarea id="lead-message" placeholder="What would you like to understand or improve?" rows={5} {...register("message")} aria-invalid={Boolean(errors.message)} />
        {errors.message && <span className="field-error">{errors.message.message}</span>}
      </div>
      <TurnstileWidget onToken={setTurnstile} />
      {formStatus && <p aria-live="polite" className={"form-status form-status--" + formStatus.kind} role={formStatus.kind === "error" ? "alert" : "status"}>{formStatus.text}</p>}
      <button className="button button--primary form-submit" disabled={isSubmitting || startedAt === 0} type="submit">
        {isSubmitting ? <><LoaderCircle aria-hidden="true" className="spin" size={17} /> Sending…</> : <>Send Message <Send aria-hidden="true" size={16} /></>}
      </button>
      <p className="form-consent">By submitting, you’re asking StatPulse Analytics to use these details to respond to your enquiry.</p>
    </form>
  );
}
