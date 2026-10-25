import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/seo";
import { locales } from "@/i18n/config";

export const instant = false;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isArabic = locale === "ar";
  return buildMetadata({
    title: isArabic ? "الخدمات | ARTBUILT" : "Services | ARTBUILT",
    description: isArabic
      ? "اكتشف خدمات ARTBUILT المرخصة في دبي مثل المقاولات العامة، الدهانات، البلاط، التمديدات الكهربائية، الأسقف المعلقة، والنجارة."
      : "Discover ARTBUILT licensed contracting services in Dubai, including building works, painting, tiling, electrical installation, false ceilings, and carpentry.",
    path: "/services",
    locale: isArabic ? "ar" : "en",
  });
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as "en" | "ar")) notFound();
  const isArabic = locale === "ar";

  return (
    <main className="mx-auto max-w-7xl px-4 py-12" dir={isArabic ? "rtl" : "ltr"}>
      <nav className="mb-10 text-sm text-slate-600">
        <Link href={`/${locale}`}>{isArabic ? "الرئيسية" : "Home"}</Link>
        <span className="mx-2">/</span>
        <span>{isArabic ? "الخدمات" : "Services"}</span>
      </nav>

      <header className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8a6a3b]">{isArabic ? "خدماتنا" : "Our services"}</p>
        <h1 className="mt-3 text-4xl font-black text-slate-900">{isArabic ? "خدمات البناء والتشطيب المرخصة" : "Licensed building and finishing services"}</h1>
      </header>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <article key={service.slug} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <div className="h-48 overflow-hidden bg-slate-200">
              <img
                src={service.image}
                alt={service.name[locale as "en" | "ar" | "zh"]}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-slate-900">{service.name[locale as "en" | "ar"]}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{service.shortDescription[locale as "en" | "ar"]}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={`/${locale}/services/${service.slug}`} className="inline-flex items-center gap-2 rounded-full bg-[#0f172a] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1e293b]">
                  {isArabic ? "اقرأ المزيد" : "Learn more"}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href={`/${locale}/contact?service=${service.slug}`} className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 hover:border-slate-400">
                  {isArabic ? "طلب عرض سعر" : "Request a quote"}
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
