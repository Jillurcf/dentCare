"use client";

import { siteData } from "@/data/site";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { FormEvent } from "react";

export function ContactContent() {
  const whatsappUrl = `https://wa.me/${siteData.contact.whatsapp.replace("+", "")}?text=${encodeURIComponent(
    "Hello, I would like to book a dental appointment. Name: [Your Name], Phone: [Your Phone], Preferred Date: [Date], Message: [Details]"
  )}`;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const date = formData.get("date");
    const message = formData.get("message");
    const text = `Hello, I would like to book a dental appointment.\nName: ${name}\nPhone: ${phone}\nPreferred Date: ${date}\nMessage: ${message || "-"}`;
    window.open(
      `https://wa.me/${siteData.contact.whatsapp.replace("+", "")}?text=${encodeURIComponent(
        text
      )}`,
      "_blank"
    );
  };

  return (
    <>
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
              Contact
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Contact & Appointment
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Reach out to book your dental visit. Quick response via call or WhatsApp.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Contact Information</h2>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3 rounded-xl border border-slate-200 p-4">
                  <MapPin className="h-6 w-6 text-teal-600" />
                  <div>
                    <p className="font-semibold">Chamber Address</p>
                    <p className="text-slate-600">{siteData.contact.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-slate-200 p-4">
                  <Phone className="h-6 w-6 text-teal-600" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a
                      href={`tel:${siteData.contact.phone}`}
                      className="text-teal-700 hover:underline"
                    >
                      {siteData.contact.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-slate-200 p-4">
                  <MessageCircle className="h-6 w-6 text-teal-600" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-700 hover:underline"
                    >
                      Message on WhatsApp
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-slate-200 p-4">
                  <Clock className="h-6 w-6 text-teal-600" />
                  <div>
                    <p className="font-semibold">Opening Hours</p>
                    <div className="text-slate-600">
                      {siteData.hours.map((h) => (
                        <p key={h.day}>
                          {h.day}: {h.time}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold text-slate-900">Our Location</h3>
                <div className="mt-4 overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200">
                  <iframe
                    src={siteData.contact.mapEmbed}
                    width="100%"
                    height="320"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
                <div className="p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-slate-900">Appointment Request</h2>
                  <p className="mt-2 text-slate-600">
                    Fill in your details and we'll get back to you via WhatsApp.
                  </p>
                  <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name" className="text-sm font-medium text-slate-700">
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="text-sm font-medium text-slate-700">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        required
                        type="tel"
                        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="date" className="text-sm font-medium text-slate-700">
                        Preferred Date
                      </label>
                      <input
                        id="date"
                        name="date"
                        type="date"
                        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="text-sm font-medium text-slate-700">
                        Message (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-700"
                    >
                      Send via WhatsApp
                    </button>
                    <p className="text-center text-xs text-slate-500">
                      We'll confirm your appointment by phone or WhatsApp.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
