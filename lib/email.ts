import nodemailer from "nodemailer";
import { company } from "@/config/company";

export type EmailDeliveryResult = {
  ok: boolean;
  status: "accepted" | "not-configured" | "failed";
  messageId?: string;
};

export async function sendLeadNotification(payload: {
  name: string;
  email: string;
  telephone: string;
  preferredContactMethod: string;
  requestedService: string;
  projectDescription: string;
  projectLocation?: string;
  websiteLanguage: string;
  sourcePage: string;
  consent: boolean;
  submittedAt?: string;
}): Promise<EmailDeliveryResult> {
  const providerKey = process.env.EMAIL_PROVIDER_API_KEY;
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL || company.email;
  const senderEmail = process.env.CONTACT_SENDER_EMAIL;

  if (!providerKey || !recipient || !senderEmail) {
    return { ok: false, status: "not-configured" };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.sendgrid.net",
      port: Number(process.env.EMAIL_PORT || 587),
      secure: false,
      auth: {
        user: senderEmail,
        pass: providerKey,
      },
    });

    const info = await transporter.sendMail({
      from: `${process.env.EMAIL_FROM_NAME || "ARTBUILT CONTRACTING"} <${senderEmail}>`,
      to: recipient,
      replyTo: process.env.EMAIL_REPLY_TO || company.email,
      subject: `New inquiry from ${payload.name}`,
      text: [
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Phone: ${payload.telephone}`,
        `Preferred contact: ${payload.preferredContactMethod}`,
        `Requested service: ${payload.requestedService}`,
        `Project details: ${payload.projectDescription}`,
        `Project location: ${payload.projectLocation || "Not provided"}`,
        `Website language: ${payload.websiteLanguage}`,
        `Source page: ${payload.sourcePage}`,
        `Consent: ${payload.consent ? "Yes" : "No"}`,
        `Submitted at: ${payload.submittedAt || new Date().toISOString()}`,
      ].join("\n"),
    });

    return { ok: true, status: "accepted", messageId: info.messageId };
  } catch (error) {
    console.error("Email delivery failed", error);
    return { ok: false, status: "failed" };
  }
}
