import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { services, serviceIndex } from "@/data/services";
import { buildMetadata } from "@/lib/seo";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { locales } from "@/i18n/config";

export const instant = false;

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    services.map((service) => ({
      locale,
      slug: service.slug,
    })),
  );
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const service = serviceIndex[slug];
  if (!service) return {};
  const isArabic = locale === "ar";

  return buildMetadata({
    title: isArabic ? `${service.name.ar} | ARTBUILT` : `${service.name.en} | ARTBUILT`,
    description: isArabic ? service.shortDescription.ar : service.shortDescription.en,
    path: `/services/${slug}`,
    locale: isArabic ? "ar" : "en",
  });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!locales.includes(locale as "en" | "ar")) notFound();
  const service = serviceIndex[slug];
  if (!service) notFound();

  const isArabic = locale === "ar";
  const whatsappLink = buildWhatsAppLink({
    service: service.name[locale as "en" | "ar"],
    message: isArabic ? "مرحباً، أود طلب عرض سعر لخدمة" : "Hello, I would like to request a quotation for the service",
  });

  return (
    <main className="mx-auto max-w-6xl px-4 py-12" dir={isArabic ? "rtl" : "ltr"}>
      <nav className="mb-8 text-sm text-slate-600">
        <Link href={`/${locale}`}>{isArabic ? "الرئيسية" : "Home"}</Link>
        <span className="mx-2">/</span>
        <Link href={`/${locale}/services`}>{isArabic ? "الخدمات" : "Services"}</Link>
        <span className="mx-2">/</span>
        <span>{service.name[locale as "en" | "ar"]}</span>
      </nav>

      <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
        <div className="h-72 overflow-hidden bg-slate-200">
          <img src={service.image} alt={service.name[locale as "en" | "ar" | "zh"]} className="h-full w-full object-cover" />
        </div>
        <div className="p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8a6a3b]">{isArabic ? "الخدمة" : "Service"}</p>
          <h1 className="mt-3 text-4xl font-black text-slate-900">{service.name[locale as "en" | "ar"]}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">{service.summary[locale as "en" | "ar"]}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={`/${locale}/contact?service=${service.slug}`} className="inline-flex items-center gap-2 rounded-full bg-[#0f172a] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1e293b]">
              {isArabic ? "طلب عرض سعر" : "Request a Quote"}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 hover:border-slate-400">
              {isArabic ? "واتساب" : "WhatsApp"}
            </a>
          </div>
        </div>
      </article>

      <section className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">{isArabic ? "التطبيقات الشائعة" : "Typical applications"}</h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            {service.applications.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#8a6a3b]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">{isArabic ? "متطلبات العملاء الشائعة" : "Typical customer requirements"}</h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            {service.customerNeeds.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#8a6a3b]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">{isArabic ? "خدمات ذات صلة" : "Related services"}</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {services.filter((item) => item.slug !== service.slug).slice(0, 5).map((related) => (
            <Link key={related.slug} href={`/${locale}/services/${related.slug}`} className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 hover:border-slate-400">
              {related.name[locale as "en" | "ar"]}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
