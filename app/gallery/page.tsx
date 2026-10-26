import type { Metadata } from "next";
import Image from "next/image";
import { siteData } from "@/data/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photo gallery of Bright Smile Dental Care clinic in Dhanmondi, Dhaka.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
              Gallery
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Our Clinic Gallery
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              A glimpse of our clinic, team, and happy smiles.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {siteData.gallery.map((image, index) => (
              <figure
                key={index}
                className="mb-4 break-inside-avoid overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={800}
                  className="h-auto w-full object-cover"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
