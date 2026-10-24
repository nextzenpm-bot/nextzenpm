import type { Metadata } from "next";
import { Camera } from "lucide-react";
import ServicePageLayout from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "Photo Inspection Services",
  description: "Professional property condition photo inspections and detailed reporting services for asset managers and property professionals.",
};

export default function PhotoInspectionPage() {
  return (
    <ServicePageLayout
      icon={Camera}
      iconColor="text-white"
      iconBg="bg-gradient-to-br from-purple-500 to-purple-700"
      title="Photo Inspection"
      tagline="Thorough property condition documentation and photo inspection services that give asset managers and property professionals accurate, reliable property assessments."
      description={`Accurate, timely property condition information is essential for making informed decisions about your real estate portfolio. Whether you need a quick occupancy check, a detailed condition report, or regular inspection updates, NextZen Photo Inspection Services delivers professional documentation you can rely on.

Our trained inspectors follow standardized inspection protocols to capture all required photos and condition details for each property. Reports are completed promptly and delivered in your preferred format, giving you the information you need when you need it.

We service properties across our entire coverage area, providing consistent inspection quality that allows accurate property-to-property comparisons within your portfolio. Our inspection services integrate seamlessly with major property management platforms and work order systems.`}
      features={[
        "Exterior condition photos (all four sides)",
        "Interior room-by-room photo documentation",
        "Roof condition assessment photos",
        "Foundation and structural observation",
        "Utilities and mechanicals condition",
        "Damage and deficiency documentation",
        "Occupancy verification inspections",
        "Vacant property condition checks",
        "Before-and-after service documentation",
        "Detailed written condition reports",
        "GPS-verified inspection timestamps",
        "Digital report delivery in multiple formats",
      ]}
      benefits={[
        { title: "Accurate Property Data", desc: "Reliable, standardized photo documentation gives you accurate, consistent property condition data." },
        { title: "Remote Management", desc: "Manage and make decisions about properties in any location without requiring physical site visits." },
        { title: "Investor Compliance", desc: "Inspection reports meet the documentation requirements of major institutional investors and servicers." },
        { title: "Fast Turnaround", desc: "Prompt inspection completion and report delivery to support your decision-making timelines." },
        { title: "Portfolio-Scale Coverage", desc: "Consistent inspection services across all properties in your portfolio, regardless of geographic spread." },
        { title: "Digital Integration", desc: "Reports delivered in formats compatible with major property management and asset management platforms." },
      ]}
      relatedServices={[
        { name: "Property Preservation", href: "/services/property-preservation" },
        { name: "Property Maintenance", href: "/services/property-maintenance" },
        { name: "Winterization", href: "/services/winterization" },
        { name: "Lock Change & Board-Up", href: "/services/lock-change-board-up" },
        { name: "Other Services", href: "/services/other-services" },
      ]}
    />
  );
}
