export const locales = ["en", "ar", "zh"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocaleFromPath(path: string): Locale {
  const segment = path.split("/").filter(Boolean)[0];
  return isLocale(segment) ? segment : "en";
}
