import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().trim().max(120, "Keep your name under 120 characters.").optional().default(""),
  email: z.string().trim().email("Please enter a valid email address").max(254, "Email address is too long."),
  phoneCountryCode: z.literal("+91").default("+91"),
  phone: z.string().trim().regex(/^\d{10}$/, "Please enter a valid phone number"),
  service: z.string().trim().max(100, "Service selection is too long.").optional().default(""),
  message: z.string().trim().max(4000, "Keep your message under 4,000 characters.").optional().default(""),
  sourcePage: z.string().trim().max(300).optional().default("/contact"),
  website: z.string().max(0, "This field must remain empty.").optional().default(""),
  startedAt: z.number().finite().positive("Submission time is missing."),
  turnstileToken: z.string().optional().default(""),
}).strict();

export type LeadFormValues = z.input<typeof leadSchema>;
export type LeadInput = z.output<typeof leadSchema>;
