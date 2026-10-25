import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters.").max(100),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().min(7, "Phone number is too short.").max(32),
  preferredContact: z.enum(["call", "email", "whatsapp"]),
  service: z.string().min(1, "Please select a service."),
  projectDetails: z.string().trim().min(20, "Please provide a few more details about your project.").max(2000),
  location: z.string().trim().max(200).optional().or(z.literal("")),
  consent: z.boolean().refine((value) => value === true, {
    message: "Consent is required before submitting the form.",
  }),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

export const preferredContactLabels = {
  call: { en: "Call", ar: "اتصال" },
  email: { en: "Email", ar: "بريد إلكتروني" },
  whatsapp: { en: "WhatsApp", ar: "واتساب" },
} as const;
