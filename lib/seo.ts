import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/config";

export function absoluteUrl(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, siteConfig.siteUrl).toString();
}

export function buildMetadata({
  title,
  description,
  path,
  locale,
  image,
}: {
  title: string;
  description: string;
  path: string;
  locale: Locale;
  image?: string;
}): Metadata {
  const canonical = absoluteUrl(`/${locale}${path}`);
  const ogImage = image ? absoluteUrl(image) : absoluteUrl(siteConfig.defaultImage);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: absoluteUrl(`/en${path}`),
        ar: absoluteUrl(`/ar${path}`),
        "x-default": absoluteUrl(`/en${path}`),
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: locale === "ar" ? "ar_AE" : "en_AE",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    metadataBase: new URL(siteConfig.siteUrl),
    robots: {
      index: true,
      follow: true,
    },
  };
}
