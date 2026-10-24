import type { Metadata } from "next";
import ContactPageClient from "@/components/contact/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact NextZen Property Maintenance — business inquiries, service requests, and vendor inquiries. We respond within 24 hours.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
