import Image from "next/image";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f1ea] px-6 py-12 text-slate-900">
      <div className="w-full max-w-xl rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8a6a3b]">ARTBUILT</p>
        <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-900">Choose your language</h1>
        <p className="mt-3 text-base text-slate-600">Select the language for the website.</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Link href="/en" className="rounded-full border border-slate-300 bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800">
            English
          </Link>
          <Link href="/ar" className="rounded-full border border-slate-300 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-900 transition hover:border-slate-400">
            العربية
          </Link>
          <Link href="/zh" className="rounded-full border border-slate-300 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-900 transition hover:border-slate-400">
            中文
          </Link>
        </div>
      </div>
    </main>
  );
}
