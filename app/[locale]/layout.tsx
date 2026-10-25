import type { Metadata } from "next";
import { Inter, Noto_Naskh_Arabic } from "next/font/google";
import "@/app/globals.css";
import { locales } from "@/i18n/config";
import { LanguageSwitch } from "@/components/LanguageSwitch";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const arabic = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "ARTBUILT CONTRACTING L.L.C S.O.C",
  description: "Construction and interior finishing services in Dubai.",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isArabic = locale === "ar";

  return (
    <div
      className={`${inter.variable} ${arabic.variable} min-h-screen bg-[#f5f1ea] text-slate-900 antialiased`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="fixed right-4 top-4 z-50">
        <LanguageSwitch locale={locale} />
      </div>
      {children}
    </div>
  );
}
