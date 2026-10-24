import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import ServicePageLayout from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "Cleaning Services",
  description: "Professional interior cleaning, deep cleaning, and move-out cleaning services for managed and vacant properties.",
};

export default function CleaningServicesPage() {
  return (
    <ServicePageLayout
      icon={Sparkles}
      iconColor="text-white"
      iconBg="bg-gradient-to-br from-cyan-500 to-cyan-700"
      title="Cleaning Services"
      tagline="Professional-grade cleaning for managed properties — from move-out deep cleans to routine interior cleaning that leaves every property spotless."
      description={`A clean property is a marketable property. Whether preparing for a new tenant, completing a move-out, or maintaining occupied properties, NextZen Cleaning Services delivers consistently high standards that property managers and asset managers depend on.

Our cleaning teams are trained, background-checked, and equipped with professional-grade products and equipment. We handle everything from basic interior cleaning to full move-out deep cleans, ensuring every surface, room, and detail meets your standards.

We understand the urgency of property turnovers and work quickly and efficiently to minimize downtime between tenants. Every cleaning job is documented with before-and-after photos, giving you complete transparency and a clear record for your files.`}
      features={[
        "Full interior cleaning (all rooms)",
        "Kitchen deep cleaning (appliances, surfaces, cabinets)",
        "Bathroom sanitation and disinfection",
        "Carpet cleaning and vacuuming",
        "Floor mopping and scrubbing",
        "Window cleaning (interior)",
        "Baseboard and vent cleaning",
        "Closet and storage area cleaning",
        "Garage sweeping and cleaning",
        "Move-out cleaning packages",
        "Trash removal and debris disposal",
        "Photo documentation of completed work",
      ]}
      benefits={[
        { title: "Faster Turnovers", desc: "Professional cleaning speeds up property turnovers, reducing vacancy time and lost rental income." },
        { title: "Move-In Ready", desc: "Properties are thoroughly cleaned and prepared for new tenants or buyers to the highest standards." },
        { title: "Consistent Quality", desc: "Standardized cleaning checklists ensure every property receives the same high level of service." },
        { title: "Fully Documented", desc: "Before and after photos provide clear evidence of condition and completed work for your records." },
        { title: "Reliable Scheduling", desc: "We work around your timeline to clean properties quickly and efficiently when needed." },
        { title: "Professional Products", desc: "Commercial-grade cleaning products deliver superior results compared to standard cleaning services." },
      ]}
      relatedServices={[
        { name: "Trash-Out & Debris Removal", href: "/services/trash-out-debris-removal" },
        { name: "Property Maintenance", href: "/services/property-maintenance" },
        { name: "Property Preservation", href: "/services/property-preservation" },
        { name: "Photo Inspection", href: "/services/photo-inspection" },
        { name: "Handyman Services", href: "/services/handyman-services" },
      ]}
    />
  );
}
