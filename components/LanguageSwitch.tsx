"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const locales = [
  { code: "en", label: "EN" },
  { code: "ar", label: "AR" },
  { code: "zh", label: "中文" },
] as const;

export function LanguageSwitch({ locale }: { locale: string }) {
  const pathname = usePathname() || "/";
  const segments = pathname.split("/").filter(Boolean);
  const currentLocale =
    segments[0] && locales.some((item) => item.code === segments[0])
      ? segments[0]
      : locale;
  const rest = segments.slice(1).join("/");

  return (
    <div className="flex items-center gap-2 rounded-full border border-slate-300 bg-white/90 p-1 shadow-sm backdrop-blur-sm">
      {locales.map((item) => {
        const isActive = item.code === currentLocale;
        const href = `/${item.code}${rest ? `/${rest}` : ""}`;

        return (
          <Link
            key={item.code}
            href={href}
            className={`inline-flex items-center justify-center rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] transition ${
              isActive
                ? "bg-[#0f172a] text-white shadow-sm"
                : "text-slate-700 hover:text-slate-900"
            }`}
            aria-label={`Switch language to ${item.code === "en" ? "English" : item.code === "ar" ? "Arabic" : "Chinese"}`}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
