"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { company } from "@/config/company";
import { services } from "@/data/services";
import { contactFormSchema, type ContactFormInput } from "@/lib/validation";

export function ContactForm({ locale }: { locale: "en" | "ar" }) {
  const isArabic = locale === "ar";
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      preferredContact: "email",
      consent: false,
      service: "",
    },
  });

  const onSubmit = async (data: ContactFormInput) => {
    setSubmitState("loading");
    setServerMessage("");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, locale, sourcePage: "/contact" }),
    });

    const result = await response.json();

    if (!response.ok) {
      setSubmitState("error");
      setServerMessage(result.error || (isArabic ? "حدث خطأ في إرسال الرسالة." : "There was an error sending the message."));
      return;
    }

    setSubmitState("success");
    setServerMessage(
      isArabic
        ? "تم استلام الرسالة بنجاح. سنراجع طلبك ونتواصل معك عبر القناة المختارة."
        : "Your inquiry has been received. We will review your request and respond using your selected contact method.",
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">{isArabic ? "الاسم" : "Name"}</label>
          <input {...register("name")} className="w-full rounded-xl border border-slate-300 px-4 py-3" />
          {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
          <input type="email" {...register("email")} className="w-full rounded-xl border border-slate-300 px-4 py-3" />
          {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">{isArabic ? "رقم الهاتف" : "Phone number"}</label>
          <input {...register("phone")} className="w-full rounded-xl border border-slate-300 px-4 py-3" />
          {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">{isArabic ? "طريقة التواصل المفضلة" : "Preferred contact method"}</label>
          <select {...register("preferredContact")} className="w-full rounded-xl border border-slate-300 px-4 py-3">
            <option value="email">Email</option>
            <option value="call">Call</option>
            <option value="whatsapp">WhatsApp</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-slate-700">{isArabic ? "الخدمة المطلوبة" : "Requested service"}</label>
          <select {...register("service")} className="w-full rounded-xl border border-slate-300 px-4 py-3">
            <option value="">{isArabic ? "اختر الخدمة" : "Select a service"}</option>
            {services.map((service) => (
              <option key={service.slug} value={service.name.en}>{service.name[locale]}</option>
            ))}
          </select>
          {errors.service && <p className="mt-2 text-sm text-red-600">{errors.service.message}</p>}
        </div>
        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-slate-700">{isArabic ? "تفاصيل المشروع" : "Project details"}</label>
          <textarea {...register("projectDetails")} rows={5} className="w-full rounded-xl border border-slate-300 px-4 py-3" />
          {errors.projectDetails && <p className="mt-2 text-sm text-red-600">{errors.projectDetails.message}</p>}
        </div>
        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-slate-700">{isArabic ? "موقع المشروع (اختياري)" : "Project location (optional)"}</label>
          <input {...register("location")} className="w-full rounded-xl border border-slate-300 px-4 py-3" />
        </div>
        <div className="md:col-span-2 flex items-start gap-3 rounded-xl bg-slate-50 p-4">
          <input type="checkbox" {...register("consent")} className="mt-1" />
          <label className="text-sm text-slate-700">{isArabic ? "أوافق على التواصل معي بخصوص هذا الاستفسار." : "I agree to be contacted regarding this inquiry."}</label>
        </div>
        {errors.consent && <p className="md:col-span-2 text-sm text-red-600">{errors.consent.message}</p>}
      </div>

      {submitState !== "idle" && (
        <div className={`mt-5 flex items-center gap-2 rounded-xl px-4 py-3 text-sm ${submitState === "success" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"}`}>
          {submitState === "success" ? <CheckCircle2 className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
          {serverMessage}
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-4">
        <button type="submit" disabled={submitState === "loading"} className="rounded-full bg-[#0f172a] px-6 py-3 text-sm font-semibold text-white disabled:opacity-50">
          {submitState === "loading" ? (isArabic ? "جارٍ الإرسال..." : "Sending...") : isArabic ? "إرسال الطلب" : "Submit inquiry"}
        </button>
        <a href={`https://wa.me/${company.phoneE164.replace(/\s+/g, "")}`} target="_blank" rel="noreferrer" className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900">
          WhatsApp
        </a>
      </div>
    </form>
  );
}
