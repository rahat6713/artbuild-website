import Link from "next/link";
import { ArrowRight, Building2, Hammer, MessageSquareQuote } from "lucide-react";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { company } from "@/config/company";
import { buildMetadata } from "@/lib/seo";
import { locales } from "@/i18n/config";

export const instant = false;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isChinese = locale === "zh";
  return buildMetadata({
    title: locale === "ar"
      ? "ARTBUILT | خدمات البناء والتشطيب في دبي"
      : isChinese
        ? "ARTBUILT | 建筑与室内装饰服务 | 迪拜"
        : "ARTBUILT | Construction & Interior Finishing in Dubai",
    description:
      locale === "ar"
        ? "خدمات البناء والتشطيب الداخلي في دبي من ARTBUILT CONTRACTING L.L.C S.O.C."
        : isChinese
          ? "ARTBUILT CONTRACTING L.L.C S.O.C 提供迪拜建筑与室内装饰服务。"
          : "Construction and interior finishing services in Dubai from ARTBUILT CONTRACTING L.L.C S.O.C.",
    path: "/",
    locale: locale === "ar" ? "ar" : isChinese ? "zh" : "en",
  });
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as "en" | "ar" | "zh")) notFound();

  const isArabic = locale === "ar";
  const isChinese = locale === "zh";

  return (
    <main className="bg-[#f5f1ea] text-slate-900" dir={isArabic ? "rtl" : "ltr"}>
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <div className="text-left">
              <div className="text-lg font-black uppercase tracking-[0.2em] text-slate-900">ARTBUILT</div>
              <div className="text-[10px] font-medium uppercase tracking-[0.4em] text-[#8a6a3b]">CONTRACTING</div>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <Link href={`/${locale}`}>{isArabic ? "الرئيسية" : isChinese ? "首页" : "Home"}</Link>
            <Link href={`/${locale}/about`}>{isArabic ? "من نحن" : isChinese ? "关于" : "About"}</Link>
            <Link href={`/${locale}/services`}>{isArabic ? "الخدمات" : isChinese ? "服务" : "Services"}</Link>
            <Link href={`/${locale}/projects`}>{isArabic ? "المشاريع" : isChinese ? "项目" : "Projects"}</Link>
            <Link href={`/${locale}/contact`}>{isArabic ? "تواصل" : isChinese ? "联系" : "Contact"}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href={`/${locale}/contact`} className="rounded-full bg-[#0f172a] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1e293b]">
              {isArabic ? "طلب عرض سعر" : isChinese ? "获取报价" : "Request a Quote"}
            </Link>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#8a6a3b]/30 bg-[#f6efe7] px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#8a6a3b]">
            <Building2 className="h-4 w-4" />
            {isArabic ? "مقاولات ومعالجة تشطيب" : isChinese ? "建筑与装饰" : "Construction & Finishing"}
          </div>
          <div className="space-y-5">
            <h1 className="max-w-xl text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">
              {isArabic
                ? "خدمات البناء والتشطيب الداخلي في دبي"
                : isChinese
                  ? "迪拜建筑与室内装饰服务"
                  : "Construction & Interior Finishing Services in Dubai"}
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-700">
              {isArabic
                ? "اكتشف خدمات المقاولات العامة والتصميم الداخلي والبلاط والدهان والأسقف الخفيفة والخشب وغيرها من خدمات المقاولات التي تقدمها ARTBUILT CONTRACTING L.L.C S.O.C."
                : isChinese
                  ? "探索 ARTBUILT CONTRACTING L.L.C S.O.C 提供的建筑承包、室内装饰、瓷砖、油漆、天花板安装、木工及其他承包服务。"
                  : "Explore building contracting, interior decoration, tiling, painting, ceiling installation, carpentry, and other contracting services offered by ARTBUILT CONTRACTING L.L.C S.O.C."}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href={`/${locale}/contact`} className="inline-flex items-center gap-2 rounded-full bg-[#0f172a] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1e293b]">
              {isArabic ? "طلب عرض سعر" : isChinese ? "获取报价" : "Request a Quote"}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={`/${locale}/services`} className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:border-slate-400">
              {isArabic ? "استكشف خدماتنا" : isChinese ? "查看服务" : "Explore Our Services"}
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-slate-600">
            <div>
              <span className="text-xl font-extrabold text-slate-900">9</span>
              <div>{isArabic ? "خدمات مرخصة" : isChinese ? "持证服务" : "Licensed services"}</div>
            </div>
            <div>
              <span className="text-xl font-extrabold text-slate-900">Dubai</span>
              <div>{isArabic ? "خدمة محلية" : isChinese ? "本地服务" : "Local presence"}</div>
            </div>
            <div>
              <span className="text-xl font-extrabold text-slate-900">UAE</span>
              <div>{isArabic ? "الامارات" : isChinese ? "阿联酋" : "United Arab Emirates"}</div>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/60">
          <div className="relative h-[520px] overflow-hidden rounded-[1.5rem]">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80"
              alt="ARTBUILT construction team on site"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1f2937]/70 via-[#4b5563]/25 to-[#e5e7eb]/15" />
            <div className="absolute inset-0 flex h-full flex-col justify-between p-6 text-white">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/80">
                <span>ARTBUILT</span>
                <span>{isArabic ? "رؤية واضحة" : isChinese ? "清晰愿景" : "Clear vision"}</span>
              </div>
              <div className="space-y-3">
                <div className="text-2xl font-bold">{isArabic ? "التنفيذ الواضح" : isChinese ? "务实执行" : "Practical execution"}</div>
                <p className="max-w-xs text-sm text-white/90">
                  {isArabic
                    ? "التنسيق بين أعمال البناء والتشطيب الداخلي وضمان الجودة والوضوح في المتطلبات."
                    : isChinese
                      ? "协调建筑和室内装饰工作，确保沟通清晰、执行务实。"
                      : "Coordinated building and finishing work with clear communication and practical execution."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8a6a3b]">{isArabic ? "خدماتنا" : isChinese ? "我们的服务" : "Our services"}</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">{isArabic ? "خدمات مرخصة وعملية" : isChinese ? "持证且务实的服务" : "Licensed services, tailored to project needs"}</h2>
          </div>
          <Link href={`/${locale}/services`} className="hidden text-sm font-semibold text-[#0f172a] md:inline-flex">
            {isArabic ? "عرض جميع الخدمات" : isChinese ? "查看全部服务" : "See all services"}
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <div key={service.slug} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 h-40 overflow-hidden rounded-2xl bg-slate-200">
                <img src={service.image} alt={service.name[locale as "en" | "ar" | "zh"]} className="h-full w-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{service.name[locale as "en" | "ar" | "zh"]}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{service.shortDescription[locale as "en" | "ar" | "zh"]}</p>
              <Link href={`/${locale}/services/${service.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0f172a]">
                {isArabic ? "اقرأ المزيد" : isChinese ? "了解更多" : "Read more"}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8a6a3b]">{isArabic ? "عن الشركة" : isChinese ? "关于我们" : "About us"}</p>
            <h2 className="text-3xl font-bold text-slate-900">{isArabic ? "التواصل والالتزام وجودة التنفيذ" : isChinese ? "清晰沟通、工艺品质和客户需求" : "Clear communication, workmanship, and customer requirements"}</h2>
            <p className="text-base leading-8 text-slate-700">
              {isArabic
                ? "تقدم ARTBUILT CONTRACTING L.L.C S.O.C مجموعة من خدمات البناء والتشطيب في دبي، مع التركيز على التواصل وجودة التنفيذ والاستجابة لمتطلبات العملاء."
                : isChinese
                  ? "ARTBUILT CONTRACTING L.L.C S.O.C 提供迪拜范围内的建筑与装饰服务，关注沟通、工艺和客户需求。"
                  : "ARTBUILT CONTRACTING L.L.C S.O.C provides a range of building and finishing services in Dubai, with a focus on communication, workmanship, and responding to customer requirements."}
            </p>
            <p className="text-base leading-8 text-slate-700">
              {isArabic
                ? "مهمتنا هي تنفيذ متطلبات البناء والتشطيب الداخلي بدقة واحترافية مع الحفاظ على التواصل الواضح ومتابعة المشروع."
                : isChinese
                  ? "我们的使命是通过专业执行和清晰沟通，为建筑和室内装饰需求提供可靠支持。"
                  : "Our mission is to deliver careful and professional execution for building and interior finishing requirements while maintaining clear communication and project coordination."}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-[#f7f3ee] p-5">
              <Hammer className="mb-3 h-7 w-7 text-[#8a6a3b]" />
              <h3 className="text-lg font-bold text-slate-900">{isArabic ? "الالتزام" : isChinese ? "工艺" : "Workmanship"}</h3>
              <p className="mt-2 text-sm text-slate-600">{isArabic ? "اهتمام بالتنفيذ الدقيق" : isChinese ? "注重精细执行" : "Attention to careful, practical execution."}</p>
            </div>
            <div className="rounded-2xl bg-[#f7f3ee] p-5">
              <MessageSquareQuote className="mb-3 h-7 w-7 text-[#8a6a3b]" />
              <h3 className="text-lg font-bold text-slate-900">{isArabic ? "التواصل" : isChinese ? "沟通" : "Communication"}</h3>
              <p className="mt-2 text-sm text-slate-600">{isArabic ? "استفسارات واضحة ومتطلبات دقيقة" : isChinese ? "清晰沟通与准确需求" : "Clear questions and precise requirements."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8a6a3b]">{isArabic ? "المراحل" : isChinese ? "流程" : "Process"}</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">{isArabic ? "كيف يتم تقديم طلبك؟" : isChinese ? "如何提交需求？" : "How the inquiry process works"}</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: isArabic ? "1. أرسل الاستفسار" : isChinese ? "1. 提交询价" : "1. Send your inquiry", text: isArabic ? "قدم مشروعك ومواصفاته." : isChinese ? "提供您的项目需求和服务要求。" : "Share your project requirements and service request." },
            { title: isArabic ? "2. نراجع التفاصيل" : isChinese ? "2. 审阅详情" : "2. We review the details", text: isArabic ? "نقوم بمراجعة متطلباتك من أجل الاستجابة المناسبة." : isChinese ? "我们将评估需求并给出合适回应。" : "We assess the project scope to respond appropriately." },
            { title: isArabic ? "3. نبدأ التواصل" : isChinese ? "3. 回复沟通" : "3. We reply through your channel", text: isArabic ? "نرد عبر البريد أو الهاتف أو واتساب حسب اختيارك." : isChinese ? "我们会根据您的偏好通过邮件、电话或 WhatsApp 回复。" : "We respond by email, phone, or WhatsApp according to your preference." },
          ].map((step) => (
            <div key={step.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#f1e7d1] text-sm font-bold text-[#8a6a3b]">{step.title.split(".")[0]}</div>
              <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-slate-600">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-[#0f172a] text-slate-200">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div>
            <div className="text-lg font-black uppercase tracking-[0.2em] text-white">ARTBUILT</div>
            <div className="mt-2 text-[10px] font-medium uppercase tracking-[0.4em] text-[#d6b573]">CONTRACTING</div>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
              {isArabic ? "خدمات البناء والتشطيب في دبي." : isChinese ? "迪拜建筑与室内装饰服务。" : "Construction and interior finishing services in Dubai."}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d6b573]">{isArabic ? "روابط" : isChinese ? "链接" : "Links"}</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li><Link href={`/${locale}/about`}>{isArabic ? "من نحن" : isChinese ? "关于" : "About"}</Link></li>
              <li><Link href={`/${locale}/services`}>{isArabic ? "الخدمات" : isChinese ? "服务" : "Services"}</Link></li>
              <li><Link href={`/${locale}/projects`}>{isArabic ? "المشاريع" : isChinese ? "项目" : "Projects"}</Link></li>
              <li><Link href={`/${locale}/contact`}>{isArabic ? "تواصل" : isChinese ? "联系" : "Contact"}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d6b573]">{isArabic ? "تواصل" : isChinese ? "联系" : "Contact"}</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>{company.phone}</li>
              <li>{company.email}</li>
              <li>{company.location}</li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
