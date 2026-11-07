import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().trim().min(2, "Enter at least 2 characters.").max(120, "Keep your name under 120 characters."),
  email: z.string().trim().email("Enter a valid email address.").max(254, "Email address is too long."),
  service: z.string().trim().min(1, "Choose a service.").max(100, "Service selection is too long."),
  message: z.string().trim().min(10, "Tell us a little more (at least 10 characters).").max(4000, "Keep your message under 4,000 characters."),
  sourcePage: z.string().trim().max(300).optional().default("/contact"),
  website: z.string().max(0, "This field must remain empty.").optional().default(""),
  startedAt: z.number().finite().positive("Submission time is missing."),
  turnstileToken: z.string().optional().default(""),
}).strict();

export type LeadFormValues = z.input<typeof leadSchema>;
export type LeadInput = z.output<typeof leadSchema>;
