import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/data/site";
import { ArrowRight, BadgeCheck, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "About the Doctor",
  description: "Learn about Dr. Rahim Uddin, BMDC registered dentist in Dhanmondi, Dhaka with 15+ years of experience.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
              About
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              About Dr. Rahim Uddin
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Compassionate, patient-focused dental care in Dhanmondi, Dhaka.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative overflow-hidden rounded-3xl shadow-xl" style={{ aspectRatio: "4/5" }}>
              <Image
                src={siteData.doctor.image}
                alt={siteData.doctor.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                {siteData.doctor.name}
              </h2>
              <p className="mt-2 text-lg text-slate-600">
                {siteData.doctor.title} • {siteData.doctor.bmdc}
              </p>
              <p className="mt-6 leading-relaxed text-slate-600">
                {siteData.doctor.bio}
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-xl border border-slate-200 p-4">
                  <GraduationCap className="h-8 w-8 text-teal-600" />
                  <div>
                    <p className="text-sm font-semibold">Qualified Surgeon</p>
                    <p className="text-xs text-slate-500">BDS, FCPS (Prosthodontics)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-slate-200 p-4">
                  <BadgeCheck className="h-8 w-8 text-teal-600" />
                  <div>
                    <p className="text-sm font-semibold">BMDC Registered</p>
                    <p className="text-xs text-slate-500">{siteData.doctor.bmdc}</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-700"
                >
                  Book Appointment
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Our Chamber
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Located in the heart of Dhanmondi, Dhaka, our modern dental chamber is designed for your comfort and safety. We follow strict sterilization protocols and use quality materials for every treatment.
              </p>
              <dl className="mt-8 space-y-4">
                <div>
                  <dt className="text-sm font-semibold text-slate-900">Address</dt>
                  <dd className="mt-1 text-slate-600">{siteData.contact.address}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-slate-900">Phone</dt>
                  <dd className="mt-1 text-slate-600">{siteData.contact.phone}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-slate-900">Hours</dt>
                  <dd className="mt-1 text-slate-600">
                    {siteData.hours.map((h) => (
                      <p key={h.day}>
                        {h.day}: {h.time}
                      </p>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
            <div className="relative overflow-hidden rounded-3xl shadow-xl" style={{ aspectRatio: "16/10" }}>
              <Image
                src="/images/clinic.jpg"
                alt="Bright Smile Dental Care clinic interior"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
