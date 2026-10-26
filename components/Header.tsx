"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, Globe, MessageCircle, Mail, MapPin } from "lucide-react";
import { siteData } from "@/data/site";
import { translations } from "@/lib/i18n";

export function Header() {
  const [lang, setLang] = useState<"en" | "bn">("en");
  const [open, setOpen] = useState(false);
  const t = translations[lang];

  const nav = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact Us" },
  ];

  const whatsappUrl = `https://wa.me/${siteData.contact.whatsapp.replace("+", "")}?text=${encodeURIComponent(
    lang === "en"
      ? "Hello, I would like to book a dental appointment."
      : "নমস্কার, আমি একটি দন্ত অ্যাপয়েন্টমেন্ট বুক করতে চাই।"
  )}`;

  return (
    <header className="w-full">
      <div className="bg-teal-700 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 text-sm gap-2">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href={`tel:${siteData.contact.phone}`} className="hover:underline">
                  {siteData.contact.phone}
                </a>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>{siteData.contact.email}</span>
              </div>
              <div className="hidden lg:flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{siteData.contact.address}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setLang(lang === "en" ? "bn" : "en")}
                className="flex items-center gap-1 hover:underline"
              >
                <Globe className="h-4 w-4" />
                {lang === "en" ? "বাংলা" : "English"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-teal-600 to-emerald-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">BS</span>
              </div>
              <div>
                <p className="text-lg font-bold leading-tight text-slate-900">Bright Smile Dental Care</p>
                <p className="text-xs text-slate-600 leading-tight">Trusted Dental Clinic</p>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} className="text-base font-medium text-slate-700 hover:text-teal-700 transition-colors relative group">
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <a href={`tel:${siteData.contact.phone}`} className="flex items-center gap-2 rounded-full bg-teal-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-teal-700 transition-colors shadow-md">
                <Phone className="h-4 w-4" />
                {t.call_now}
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full border-2 border-emerald-600 px-6 py-2.5 text-sm font-semibold text-emerald-700 hover:bg-emerald-600 hover:text-white transition-colors">
                <MessageCircle className="h-4 w-4" />
                {t.whatsapp_appointment}
              </a>
            </div>

            <button onClick={() => setOpen(!open)} className="lg:hidden rounded-md p-2 text-slate-700 hover:bg-slate-100">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-100 bg-white shadow-lg">
          <nav className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-4 py-3 text-base font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-700">
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-3 mt-2 border-t border-slate-100">
              <button onClick={() => setLang(lang === "en" ? "bn" : "en")} className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                <Globe className="h-4 w-4" />
                {lang === "en" ? "Switch to বাংলা" : "Switch to English"}
              </button>
              <a href={`tel:${siteData.contact.phone}`} className="flex items-center justify-center gap-2 rounded-full bg-teal-600 px-4 py-3 text-sm font-semibold text-white">
                <Phone className="h-4 w-4" />
                {t.call_now}
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-full border-2 border-emerald-600 px-4 py-3 text-sm font-semibold text-emerald-700">
                <MessageCircle className="h-4 w-4" />
                {t.whatsapp_appointment}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
