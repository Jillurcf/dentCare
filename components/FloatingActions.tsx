"use client";

import { Phone, MessageCircle } from "lucide-react";
import { siteData } from "@/data/site";
import { useState } from "react";
import { translations } from "@/lib/i18n";

export function FloatingActions() {
  const [lang] = useState<"en" | "bn">("en");
  const t = translations[lang];
  const whatsappUrl = `https://wa.me/${siteData.contact.whatsapp.replace("+", "")}?text=${encodeURIComponent(
    lang === "en"
      ? "Hello, I would like to book a dental appointment."
      : "নমস্কার, আমি একটি দন্ত অ্যাপয়েন্টমেন্ট বুক করতে চাই।"
  )}`;

  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-2 sm:hidden z-50">
      <a
        href={`tel:${siteData.contact.phone}`}
        className="flex items-center gap-2 rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-lg"
      >
        <Phone className="h-4 w-4" />
        {t.call_now}
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-lg"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp
      </a>
    </div>
  );
}
