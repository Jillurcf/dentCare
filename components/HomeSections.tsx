"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BadgeCheck, Clock, ShieldCheck } from "lucide-react";
import { siteData } from "@/data/site";
import { translations } from "@/lib/i18n";
import { useState } from "react";
import * as Icons from "lucide-react";

export function HomeHero() {
  const [lang] = useState<"en" | "bn">("en");
  const t = translations[lang];

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-dentist.jpg"
          alt="Dental clinic background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-900/50"></div>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-2xl">
          <p className="inline-flex items-center rounded-full bg-teal-500/20 px-4 py-1.5 text-sm font-medium text-teal-300 ring-1 ring-teal-400/30">
            {siteData.doctor.name} • {siteData.doctor.bmdc}
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Quality Dental Care For Your Whole Family
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-200">
            Bright Smile Dental Care provides gentle, affordable and comprehensive dental
            services in Dhanmondi, Dhaka. Your oral health is our top priority.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-600/30 hover:bg-teal-700 transition-colors"
            >
              {t.book_now}
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-8 py-3.5 text-base font-semibold text-white ring-1 ring-white/30 hover:bg-white/20 transition-colors"
            >
              {t.view_services}
            </Link>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-xl bg-white/10 backdrop-blur p-4 ring-1 ring-white/20">
              <Clock className="h-8 w-8 text-teal-400" />
              <div>
                <p className="text-base font-semibold text-white">15+ Years</p>
                <p className="text-sm text-slate-300">Experience</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-white/10 backdrop-blur p-4 ring-1 ring-white/20">
              <BadgeCheck className="h-8 w-8 text-teal-400" />
              <div>
                <p className="text-base font-semibold text-white">BMDC Registered</p>
                <p className="text-sm text-slate-300">Certified</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-white/10 backdrop-blur p-4 ring-1 ring-white/20">
              <ShieldCheck className="h-8 w-8 text-teal-400" />
              <div>
                <p className="text-base font-semibold text-white">Safe & Hygienic</p>
                <p className="text-sm text-slate-300">Modern Clinic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesPreview() {
  const [lang] = useState<"en" | "bn">("en");
  const t = translations[lang];
  const preview = siteData.services.slice(0, 6);

  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {t.our_services}
            </h2>
            <p className="mt-2 text-lg text-slate-600">{t.services_subtitle}</p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800"
          >
            {t.view_all_services}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((service) => {
            const Icon = (Icons as any)[service.icon] || Icons.Stethoscope;
            return (
              <Link
                key={service.id}
                href="/services"
                className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-48 w-full overflow-hidden" style={{ position: "relative", minHeight: "192px" }}>
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    className="transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-teal-50 p-2">
                      <Icon className="h-5 w-5 text-teal-700" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {service.name}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">
                    {service.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function DoctorIntro() {
  const [lang] = useState<"en" | "bn">("en");
  const t = translations[lang];

  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-teal-100" />
            <div className="relative overflow-hidden rounded-3xl shadow-xl" style={{ aspectRatio: "4/5" }}>
              <Image
                src={siteData.doctor.image}
                alt={siteData.doctor.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
              {t.about_doctor}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {siteData.doctor.name}
            </h2>
            <p className="mt-2 text-lg text-slate-600">
              {siteData.doctor.title} • {siteData.doctor.bmdc}
            </p>
            <p className="mt-6 text-slate-600 leading-relaxed">
              {siteData.doctor.bio}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
              >
                {t.learn_more}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                {t.book_appointment}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const [lang] = useState<"en" | "bn">("en");
  const t = translations[lang];

  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t.patient_reviews}
          </h2>
          <p className="mt-2 text-lg text-slate-600">{t.reviews_subtitle}</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {siteData.testimonials.map((review) => (
            <figure
              key={review.name}
              className="flex h-full flex-col justify-between rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200"
            >
              <div>
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Icons.Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-slate-700">
                  “{review.text}”
                </blockquote>
              </div>
              <figcaption className="mt-6">
                <p className="font-semibold text-slate-900">{review.name}</p>
                <p className="text-sm text-slate-500">{review.location}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaSection() {
  const [lang] = useState<"en" | "bn">("en");
  const t = translations[lang];
  const whatsappUrl = `https://wa.me/${siteData.contact.whatsapp.replace("+", "")}?text=${encodeURIComponent(
    lang === "en"
      ? "Hello, I would like to book a dental appointment."
      : "নমস্কার, আমি একটি দন্ত অ্যাপয়েন্টমেন্ট বুক করতে চাই।"
  )}`;

  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-teal-600 to-emerald-600 px-6 py-12 text-center text-white shadow-xl sm:px-12 lg:px-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t.ready_to_smile}
          </h2>
          <p className="mt-3 text-lg text-teal-50">{t.ready_subtitle}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-teal-700 hover:bg-teal-50 transition-colors"
            >
              {t.book_appointment}
            </Link>
            <a
              href={`tel:${siteData.contact.phone}`}
              className="inline-flex items-center gap-2 rounded-full bg-teal-700/40 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-700/60 transition-colors"
            >
              {t.call_now}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-700/40 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700/60 transition-colors"
            >
              {t.whatsapp_appointment}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
