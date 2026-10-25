import { company } from "@/config/company";

export function buildWhatsAppLink({
  message,
  service,
}: {
  message?: string;
  service?: string;
}) {
  const text = message || company.whatsappMessage.en;
  const base = `https://wa.me/${company.phoneE164.replace(/\s+/g, "")}`;
  const payload = encodeURIComponent(text + (service ? `\nService: ${service}` : ""));
  return `${base}?text=${payload}`;
}
