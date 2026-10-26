import type { Metadata } from "next";
import { Inter, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bright Smile Dental Care | Dentist in Dhanmondi, Dhaka",
    template: "%s | Bright Smile Dental Care",
  },
  description:
    "Trusted dental clinic in Dhanmondi, Dhaka. General dentistry, scaling, fillings, root canal, braces, implants, and teeth whitening by Dr. Rahim Uddin (BMDC Registered).",
  keywords: [
    "dentist dhaka",
    "dental clinic dhanmondi",
    "teeth cleaning dhaka",
    "root canal dhaka",
    "braces bangladesh",
    "dental implant dhaka",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brightsmilebd.com",
    siteName: "Bright Smile Dental Care",
    title: "Bright Smile Dental Care | Dentist in Dhanmondi, Dhaka",
    description:
      "Gentle, affordable dental care in Dhanmondi, Dhaka. Book appointments by call or WhatsApp.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Bright Smile Dental Care",
    image: "https://brightsmilebd.com/images/clinic.jpg",
    "@id": "https://brightsmilebd.com",
    url: "https://brightsmilebd.com",
    telephone: "+8801712345678",
    address: {
      "@type": "PostalAddress",
      streetAddress: "House 12, Road 5, Dhanmondi",
      addressLocality: "Dhaka",
      postalCode: "1205",
      addressCountry: "BD",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 23.7461,
      longitude: 90.3742,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Saturday",
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
        ],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    sameAs: ["https://www.facebook.com/", "https://www.google.com/maps"],
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${hindSiliguri.variable} font-sans antialiased bg-white text-slate-900`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
