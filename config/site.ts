export const siteConfig = {
  name: "ARTBUILT CONTRACTING L.L.C S.O.C",
  defaultLocale: "en",
  locales: ["en", "ar", "zh"],
  localeLabels: {
    en: "English",
    ar: "العربية",
    zh: "中文",
  },
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://artbuilduae.vercel.app",
  defaultImage: "/images/og-card.jpg",
  title: "ARTBUILT CONTRACTING L.L.C S.O.C",
  description:
    "Construction and interior finishing services in Dubai, including building contracting, tiling, plastering, painting, electrical works, false ceilings, carpentry, and sanitary installation.",
};

export const productionHostValidation = {
  allowedHosts: ["localhost", "127.0.0.1", "artbuilduae.vercel.app"],
};
