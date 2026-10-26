import type { Metadata } from "next";
import { ContactContent } from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact & Appointment",
  description: "Book dental appointment at Bright Smile Dental Care, Dhanmondi, Dhaka. Call or WhatsApp.",
};

export default function ContactPage() {
  return <ContactContent />;
}
