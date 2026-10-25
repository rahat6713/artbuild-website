import { notFound } from "next/navigation";
import Link from "next/link";
import { illustrativeProjects } from "@/data/illustrative-projects";
import { buildMetadata } from "@/lib/seo";
import { locales } from "@/i18n/config";

export const instant = false;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isArabic = locale === "ar";
  const isChinese = locale === "zh";
  return buildMetadata({
    title: isArabic ? "المشاريع | ARTBUILT" : isChinese ? "项目 | ARTBUILT" : "Projects | ARTBUILT",
    description: isArabic
      ? "معرض توضيحي للمشاريع يوضح أنماط التشطيب والتصميم ذات الصلة بمشاريع البناء والديكور."
      : isChinese
        ? "展示建筑、装饰和室内设计灵感的项目画廊。"
        : "Illustrative project gallery covering interior finishing, fit-out, and construction styling concepts.",
    path: "/projects",
    locale: isArabic ? "ar" : isChinese ? "zh" : "en",
  });
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as "en" | "ar" | "zh")) notFound();
  const isArabic = locale === "ar";
  const isChinese = locale === "zh";

  return (
    <main className="mx-auto max-w-7xl px-4 py-12" dir={isArabic ? "rtl" : "ltr"}>
      <nav className="mb-10 text-sm text-slate-600">
        <Link href={`/${locale}`}>{isArabic ? "الرئيسية" : isChinese ? "首页" : "Home"}</Link>
        <span className="mx-2">/</span>
        <span>{isArabic ? "المشاريع" : isChinese ? "项目" : "Projects"}</span>
      </nav>

      <header className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8a6a3b]">{isArabic ? "المعرض" : isChinese ? "项目展示" : "Portfolio"}</p>
        <h1 className="mt-3 text-4xl font-black text-slate-900">{isArabic ? "معرض مشاريع توضيحي" : isChinese ? "项目展示画廊" : "Illustrative Project Gallery"}</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-700">
          {isArabic
            ? "هذا المعرض توضيحي فقط ويستخدم لعرض أساليب التشطيب والديكور المماثلة، دون الادعاء بأن المشروع قد تم تنفيذه فعلياً بواسطة ARTBUILT."
            : isChinese
              ? "此画廊仅用于展示类似的装修和设计风格，不代表 ARTBUILT 已完成实际项目。"
              : "This gallery is illustrative only and is used to present comparable finishing and design styles without claiming any project was completed by ARTBUILT."}
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {illustrativeProjects.map((project) => (
          <article key={project.id} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <div className="h-64 overflow-hidden bg-slate-200">
              <img src={project.image} alt={project.alt[locale as "en" | "ar" | "zh"]} className="h-full w-full object-cover" />
            </div>
            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-[#8a6a3b]">{project.category[locale as "en" | "ar" | "zh"]}</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">{project.title[locale as "en" | "ar" | "zh"]}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{project.summary[locale as "en" | "ar" | "zh"]}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
