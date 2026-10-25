import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { notFound } from "next/navigation";
import { locales } from "@/i18n/config";
import { buildMetadata } from "@/lib/seo";
import { company } from "@/config/company";

export const instant = false;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isArabic = locale === "ar";
  return buildMetadata({
    title: isArabic ? "عن ARTBUILT | خدمات البناء والتشطيب في دبي" : "About ARTBUILT | Construction & Finishing in Dubai",
    description: isArabic
      ? "اكتشف ARTBUILT CONTRACTING L.L.C S.O.C، مع التركيز على التواصل وجودة التنفيذ ومتطلبات العملاء."
      : "Learn about ARTBUILT CONTRACTING L.L.C S.O.C, with a focus on communication, workmanship, and customer requirements.",
    path: "/about",
    locale: isArabic ? "ar" : "en",
  });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as "en" | "ar")) notFound();
  const isArabic = locale === "ar";

  return (
    <main className="mx-auto max-w-6xl px-4 py-12" dir={isArabic ? "rtl" : "ltr"}>
      <nav className="mb-10 text-sm text-slate-600">
        <Link href={`/${locale}`}>{isArabic ? "الرئيسية" : "Home"}</Link>
        <span className="mx-2">/</span>
        <span>{isArabic ? "من نحن" : "About"}</span>
      </nav>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8a6a3b]">{isArabic ? "من نحن" : "About us"}</p>
        <h1 className="mt-4 text-4xl font-black text-slate-900">{isArabic ? "عن ARTBUILT" : "About ARTBUILT"}</h1>
        <div className="mt-6 grid gap-8 lg:grid-cols-2">
          <div className="space-y-5 text-lg leading-8 text-slate-700">
            <p>
              {isArabic
                ? "تقدم ARTBUILT CONTRACTING L.L.C S.O.C مجموعة من خدمات البناء والتشطيب في دبي مع التركيز على التواصل وجودة التنفيذ والاستجابة لمتطلبات العملاء."
                : "ARTBUILT CONTRACTING L.L.C S.O.C provides a range of building and finishing services in Dubai, with a focus on communication, workmanship, and responding to customer requirements."}
            </p>
            <p>
              {isArabic
                ? "مهمتنا تنفيذ متطلبات البناء والتشطيب الداخلي بدقة واحترافية مع الالتزام بمستوى جيد من التنسيق والوضوح خلال المشروع."
                : "Our mission is to deliver careful and professional execution for building and interior finishing requirements while maintaining clear communication and dependable coordination."}
            </p>
            <p>
              {isArabic
                ? "نركز على القيم المتمثلة في الوضوح، جودة التنفيذ، والاهتمام بتفاصيل المشروع واحتياجات العميل."
                : "We focus on communication, workmanship, and attention to detail to align with customer requirements and project goals."}
            </p>
          </div>
          <div className="space-y-4 rounded-[1.5rem] bg-[#f7f3ee] p-6">
            <div className="flex items-center gap-3">
              <BadgeCheck className="h-6 w-6 text-[#8a6a3b]" />
              <h2 className="text-xl font-bold text-slate-900">{isArabic ? "القيم الأساسية" : "Core values"}</h2>
            </div>
            <ul className="space-y-3 text-slate-700">
              <li>• {isArabic ? "التواصل الواضح" : "Clear communication"}</li>
              <li>• {isArabic ? "التنفيذ المهني" : "Professional workmanship"}</li>
              <li>• {isArabic ? "الاستجابة لمتطلبات العميل" : "Customer-focused requirements"}</li>
              <li>• {isArabic ? "الالتزام بالتنسيق" : "Project coordination"}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">{isArabic ? "الأنشطة التجارية المرخصة" : "Licensed business activities"}</h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {company.businessActivities.map((activity) => (
            <li key={activity} className="rounded-2xl border border-slate-200 bg-[#faf7f4] p-4 text-slate-700">
              {activity}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-10 flex justify-center">
        <Link href={`/${locale}/contact`} className="inline-flex items-center gap-2 rounded-full bg-[#0f172a] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1e293b]">
          {isArabic ? "تواصل معنا" : "Contact ARTBUILT"}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </main>
  );
}
