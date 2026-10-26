import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/data/site";
import * as Icons from "lucide-react";
import { ArrowRight, Stethoscope } from "lucide-react";

export const metadata: Metadata = {
  title: "Dental Services",
  description: "Dental services in Dhanmondi, Dhaka: checkup, scaling, filling, root canal, braces, implants, whitening, extraction.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
              Services
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              All Dental Services
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Comprehensive, gentle dental treatments for the whole family.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid gap-6 md:grid-cols-2">
            {siteData.services.map((service) => {
              const Icon = (Icons as any)[service.icon] || Stethoscope;
              return (
                <article
                  key={service.id}
                  className="grid overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 sm:grid-cols-2"
                >
                  <div className="relative h-64 sm:h-[320px] overflow-hidden" style={{ position: "relative" }}>
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-teal-50 p-2">
                        <Icon className="h-5 w-5 text-teal-700" />
                      </div>
                      <h2 className="text-xl font-semibold text-slate-900">
                        {service.name}
                      </h2>
                    </div>
                    <p className="mt-4 text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-6">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800"
                      >
                        Book for this service
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="mt-12 overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-10 text-center text-white sm:px-12">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Not sure which service you need?
            </h2>
            <p className="mt-2 text-slate-300">
              Book a consultation and we'll guide you to the right treatment.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-600"
              >
                Book Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
