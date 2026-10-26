"use client";

import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { siteData } from "@/data/site";
import { translations } from "@/lib/i18n";
import { useState } from "react";

const FacebookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

export function Footer() {
  const [lang] = useState<"en" | "bn">("en");
  const t = translations[lang];

  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-teal-500 flex items-center justify-center">
                <span className="text-white font-bold">BS</span>
              </div>
              <div>
                <p className="text-lg font-semibold text-white">
                  {siteData.name}
                </p>
                <p className="text-sm text-slate-400">{siteData.doctor.bmdc}</p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-slate-300">{t.footer_tagline}</p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-slate-800 p-2 hover:bg-teal-600 transition-colors"
              >
                <FacebookIcon />
              </a>
              <a
                href={`tel:${siteData.contact.phone}`}
                className="rounded-full bg-slate-800 p-2 hover:bg-teal-600 transition-colors"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href={siteData.contact.mapEmbed}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-slate-800 p-2 hover:bg-teal-600 transition-colors"
              >
                <MapPin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white">
                  {t.nav_home}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  {t.nav_about}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  {t.nav_services}
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white">
                  {t.nav_gallery}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  {t.nav_contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold">{t.contact_info}</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-teal-400" />
                <span>{siteData.contact.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-teal-400" />
                <a href={`tel:${siteData.contact.phone}`} className="hover:text-white">
                  {siteData.contact.phone}
                </a>
              </li>
            </ul>
            <h4 className="mt-6 text-white font-semibold">{t.opening_hours}</h4>
            <ul className="mt-3 space-y-1 text-sm">
              {siteData.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span>{h.day}</span>
                  <span className="text-slate-400">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-400">
          {t.footer_text}
        </div>
      </div>
    </footer>
  );
}
