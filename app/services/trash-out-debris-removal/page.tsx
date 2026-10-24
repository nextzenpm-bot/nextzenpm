import type { Metadata } from "next";
import { Trash2 } from "lucide-react";
import ServicePageLayout from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "Trash-Out & Debris Removal Services",
  description: "Professional junk removal, debris cleanout, and full property trash-out services for managed and vacant properties.",
};

export default function TrashOutPage() {
  return (
    <ServicePageLayout
      icon={Trash2}
      iconColor="text-white"
      iconBg="bg-gradient-to-br from-amber-500 to-amber-700"
      title="Trash-Out & Debris Removal"
      tagline="Complete junk removal, debris cleanout, and full property trash-out services that clear properties quickly and prepare them for the next stage."
      description={`Vacant and foreclosed properties often contain abandoned belongings, accumulated debris, and unwanted items that must be removed before the property can be cleaned, repaired, or remarketed. A thorough, professional trash-out is the essential first step in the property preparation process.

NextZen Trash-Out & Debris Removal provides comprehensive cleanout services — from single-room junk removal to complete whole-property trash-outs. Our crews work efficiently to remove all abandoned items, debris, and waste materials, leaving properties clean and ready for the next step.

We handle everything from furniture and appliances to general junk, yard waste, and construction debris. All removals are properly disposed of in compliance with local regulations, and every job is documented with before-and-after photos.`}
      features={[
        "Full property trash-out services",
        "Furniture removal and disposal",
        "Appliance removal and disposal",
        "General junk and debris removal",
        "Yard waste and outdoor debris removal",
        "Construction debris cleanout",
        "Garage and basement cleanouts",
        "Attic cleanout services",
        "Hazardous material identification",
        "Donation coordination for usable items",
        "Proper disposal and recycling",
        "Before and after photo documentation",
      ]}
      benefits={[
        { title: "Faster Property Turnaround", desc: "Quick debris removal accelerates the entire property preparation timeline for sale or re-rental." },
        { title: "Proper Disposal", desc: "All debris is disposed of in compliance with local regulations, eliminating liability risks." },
        { title: "Efficient Large-Scale Jobs", desc: "Experienced crews handle large trash-outs efficiently, often completing in a single scheduled visit." },
        { title: "Full Documentation", desc: "Before-and-after photos provide clear evidence of property condition change for your records." },
        { title: "Combined Service Savings", desc: "Bundle trash-out with cleaning or preservation services for coordinated, cost-effective property preparation." },
        { title: "Flexible Scheduling", desc: "We work around your timeline and can accommodate urgent trash-out needs with fast mobilization." },
      ]}
      relatedServices={[
        { name: "Cleaning Services", href: "/services/cleaning-services" },
        { name: "Property Preservation", href: "/services/property-preservation" },
        { name: "Lawn Care & Landscaping", href: "/services/lawn-care-landscaping" },
        { name: "Property Maintenance", href: "/services/property-maintenance" },
        { name: "Photo Inspection", href: "/services/photo-inspection" },
      ]}
    />
  );
}
