import { NextResponse } from "next/server";
import { z } from "zod";
import { createLead, syncLeadToCRM } from "@/lib/crm";
import { sendLeadNotification } from "@/lib/email";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email(),
  phone: z.string().trim().min(7).max(32),
  preferredContact: z.enum(["call", "email", "whatsapp"]),
  service: z.string().min(1).max(200),
  projectDetails: z.string().trim().min(20).max(2000),
  location: z.string().trim().max(200).optional().or(z.literal("")),
  consent: z.boolean(),
  locale: z.enum(["en", "ar"]),
  sourcePage: z.string().max(200).default("/contact"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Check the form details and try again." },
        { status: 400 },
      );
    }

    const data = parsed.data;

    const payload = {
      name: data.name,
      email: data.email,
      telephone: data.phone,
      preferredContactMethod: data.preferredContact,
      requestedService: data.service,
      projectDescription: data.projectDetails,
      projectLocation: data.location || undefined,
      websiteLanguage: data.locale,
      sourcePage: data.sourcePage,
      consent: data.consent,
      submittedAt: new Date().toISOString(),
    };

    const lead = await createLead(payload);
    const emailResult = await sendLeadNotification(payload);
    const crmResult = await syncLeadToCRM(payload);

    if (!lead || !lead.ok) {
      return NextResponse.json({ error: "Lead was not accepted safely." }, { status: 500 });
    }

    return NextResponse.json({
      ok: true,
      message: "Inquiry received.",
      leadId: lead.leadId,
      emailStatus: emailResult?.status || "not-configured",
      crmStatus: crmResult?.status || "not-configured",
    });
  } catch (error) {
    console.error("Contact submission error", error);
    return NextResponse.json({ error: "Unexpected server error." }, { status: 500 });
  }
}
