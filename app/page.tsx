import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import TrustIndicators from "@/components/home/TrustIndicators";
import CompanyOverview from "@/components/home/CompanyOverview";
import ServicesSection from "@/components/home/ServicesSection";
import WhoWeServe from "@/components/home/WhoWeServe";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ServiceProcess from "@/components/home/ServiceProcess";
import ServiceAreas from "@/components/home/ServiceAreas";
import QualityAssurance from "@/components/home/QualityAssurance";
import StatsSection from "@/components/home/StatsSection";
import BeforeAfterGallery from "@/components/home/BeforeAfterGallery";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import QuoteCTA from "@/components/home/QuoteCTA";
import HomeContactSection from "@/components/home/HomeContactSection";

export const metadata: Metadata = {
  title: "NextZen Property Maintenance | Professional Property Preservation & Field Services",
  description:
    "Full-spectrum property preservation, turn maintenance, cleaning, landscaping, winterization, and inspection services for property managers, asset managers, and national vendor coordinators.",
};

export default function HomePage() {
  return (
    <>
      {/* 2. Hero Section (Main Headline & Primary CTA) */}
      <HeroSection />

      {/* 3. Trust Indicators / Client Logos & Compliance */}
      <TrustIndicators />

      {/* 4. About the Company / Company Overview */}
      <CompanyOverview />

      {/* 5. Our Services */}
      <ServicesSection />

      {/* 6. Who We Serve / Target Clients */}
      <WhoWeServe />

      {/* 7. Why Choose Us */}
      <WhyChooseUs />

      {/* 8. How It Works / Service Process */}
      <ServiceProcess />

      {/* 9. Service Areas / Geographic Coverage */}
      <ServiceAreas />

      {/* 10. Quality Assurance & Work Documentation */}
      <QualityAssurance />

      {/* 11. Company Experience & Key Statistics */}
      <StatsSection />

      {/* 12. Project Portfolio / Before-and-After Gallery */}
      <BeforeAfterGallery />

      {/* 13. Client Testimonials & Reviews */}
      <TestimonialsSection />

      {/* 14. Frequently Asked Questions (FAQ) */}
      <FAQSection />

      {/* 15. Request a Quote / Get Started CTA */}
      <QuoteCTA />

      {/* 16. Contact Section (Embedded Intake & Dispatch Desk) */}
      <HomeContactSection />
    </>
  );
}
