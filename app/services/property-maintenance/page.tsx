import type { Metadata } from "next";
import { Wrench } from "lucide-react";
import ServicePageLayout from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "Property Maintenance Services",
  description: "Routine property maintenance and general repair services — HVAC, plumbing, electrical, carpentry, and more for managed properties.",
};

export default function PropertyMaintenancePage() {
  return (
    <ServicePageLayout
      icon={Wrench}
      iconColor="text-white"
      iconBg="bg-gradient-to-br from-indigo-500 to-indigo-700"
      title="Property Maintenance"
      tagline="Reliable routine maintenance and general repair services that keep your managed properties in excellent condition and protect long-term asset value."
      description={`Consistent, professional property maintenance is the foundation of a well-managed portfolio. Whether you need routine upkeep, responsive repairs, or scheduled maintenance programs, NextZen delivers dependable service that minimizes disruption and maximizes property performance.

Our maintenance teams handle a comprehensive range of tasks — from minor repairs and plumbing fixes to carpentry, drywall, painting, and HVAC servicing. We work efficiently and professionally, completing work orders on time with full photo documentation.

As a trusted vendor partner, we align our processes with your workflow — accepting work orders through your preferred systems, providing timely updates, and delivering consistent results across your entire property portfolio.`}
      features={[
        "Plumbing repairs and leak fixes",
        "Electrical light repairs and switch replacement",
        "Carpentry and door repairs",
        "Drywall patching and repair",
        "Interior and exterior painting",
        "HVAC filter replacement and servicing",
        "Caulking and weatherproofing",
        "Flooring repairs and replacement",
        "Fixture installation and replacement",
        "Gutter cleaning and repair",
        "Work order management integration",
        "Photo documentation on all jobs",
      ]}
      benefits={[
        { title: "Minimize Vacancy Time", desc: "Fast turnaround on repairs and maintenance keeps properties rent-ready and reduces costly vacancy periods." },
        { title: "Protect Long-Term Value", desc: "Proactive maintenance prevents small issues from becoming expensive major repairs." },
        { title: "Streamlined Workflow", desc: "We integrate with your work order systems for seamless communication and tracking." },
        { title: "Single Vendor Simplicity", desc: "Handle multiple maintenance needs with one trusted vendor, reducing administrative overhead." },
        { title: "Certified Professionals", desc: "Background-checked, skilled technicians who meet your vendor qualification standards." },
        { title: "Transparent Reporting", desc: "Detailed job reports with before-and-after photos ensure full accountability on every task." },
      ]}
      relatedServices={[
        { name: "Property Preservation", href: "/services/property-preservation" },
        { name: "Handyman Services", href: "/services/handyman-services" },
        { name: "Cleaning Services", href: "/services/cleaning-services" },
        { name: "Winterization", href: "/services/winterization" },
        { name: "Photo Inspection", href: "/services/photo-inspection" },
      ]}
    />
  );
}
