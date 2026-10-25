import { notFound } from "next/navigation";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { locales } from "@/i18n/config";
import { company } from "@/config/company";
import { ContactForm } from "@/components/contact/ContactForm";

export const instant = false;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isArabic = locale === "ar";
  return buildMetadata({
    title: isArabic ? "تواصل معنا | ARTBUILT" : "Contact & Request a Quote | ARTBUILT",
    description: isArabic
      ? "تواصل مع ARTBUILT لطلب عرض سعر أو الاستفسار عن خدمات البناء والتشطيب في دبي."
      : "Contact ARTBUILT to request a quotation or ask about contracting and finishing services in Dubai.",
    path: "/contact",
    locale: isArabic ? "ar" : "en",
  });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as "en" | "ar")) notFound();
  const isArabic = locale === "ar";

  return (
    <main className="mx-auto max-w-6xl px-4 py-12" dir={isArabic ? "rtl" : "ltr"}>
      <nav className="mb-10 text-sm text-slate-600">
        <Link href={`/${locale}`}>{isArabic ? "الرئيسية" : "Home"}</Link>
        <span className="mx-2">/</span>
        <span>{isArabic ? "تواصل" : "Contact"}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8a6a3b]">{isArabic ? "تواصل" : "Contact"}</p>
          <h1 className="mt-3 text-4xl font-black text-slate-900">{isArabic ? "طلب عرض سعر" : "Request a Quote"}</h1>
          <p className="mt-4 text-base leading-7 text-slate-700">
            {isArabic
              ? "أخبرنا عن مشروعك ونوع الخدمة المطلوبة، وسنراجع الاستفسار من خلال القناة التي تختارها."
              : "Tell us about your project and the service required. We will review your inquiry and respond through your preferred channel."}
          </p>
          <ul className="mt-8 space-y-4 text-sm text-slate-700">
            <li><strong>{isArabic ? "الهاتف" : "Phone"}:</strong> {company.phone}</li>
            <li><strong>Email:</strong> {company.email}</li>
            <li><strong>{isArabic ? "الموقع" : "Location"}:</strong> {company.location}</li>
          </ul>
        </aside>

        <ContactForm locale={locale as "en" | "ar"} />
      </div>
    </main>
  );
}
