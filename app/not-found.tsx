import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center gap-8 px-6 py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8a6a3b]">404</p>
      <h1 className="text-4xl font-bold text-slate-900">Page not found</h1>
      <p className="max-w-xl text-lg text-slate-600">
        The page you requested could not be found. Please return to the homepage or use the navigation to explore ARTBUILT services.
      </p>
      <Link href="/en" className="rounded-full bg-[#0f172a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1e293b]">
        Return home
      </Link>
    </main>
  );
}
