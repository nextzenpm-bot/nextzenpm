import type { Metadata } from "next";
import { Building2 } from "lucide-react";
import ServicePageLayout from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "Property Preservation Services",
  description: "Professional property preservation services for vacant and distressed properties — securing, maintenance, debris removal, and full preservation tasks.",
};

export default function PropertyPreservationPage() {
  return (
    <ServicePageLayout
      icon={Building2}
      iconColor="text-white"
      iconBg="bg-gradient-to-br from-blue-500 to-blue-700"
      title="Property Preservation"
      tagline="Comprehensive care and protection for vacant, distressed, and bank-owned properties. We secure, maintain, and preserve your real estate assets."
      description={`Property preservation is a critical service for any portfolio containing vacant, foreclosed, or bank-owned properties. Left unattended, vacant properties quickly deteriorate — attracting vandalism, sustaining weather damage, and declining in value.

NextZen Property Maintenance provides end-to-end property preservation services that meet or exceed HUD, FHA, and investor guidelines. Our trained specialists assess, secure, and maintain properties to the highest standards, ensuring your assets are protected and compliant at every stage.

From initial securing and winterization to ongoing inspections and maintenance, our team delivers consistent, fully documented results that give property managers and asset managers complete confidence in the condition of their portfolios.`}
      features={[
        "Initial property inspections & assessment",
        "Securing doors, windows, and access points",
        "Lock changes and re-keying",
        "Board-up services for broken openings",
        "Debris removal and trash-out",
        "Lawn care and exterior maintenance",
        "Winterization services",
        "Utility disconnection coordination",
        "HUD code compliance work",
        "Before & after photo documentation",
        "Work order reporting and tracking",
        "Recurring property check-ins",
      ]}
      benefits={[
        { title: "Protect Asset Value", desc: "Prevent deterioration and maintain property value through proactive, consistent preservation care." },
        { title: "HUD/FHA Compliant", desc: "All work is performed to meet or exceed HUD, FHA, and investor preservation guidelines." },
        { title: "Full Documentation", desc: "Comprehensive photo reports and work order documentation for every task completed." },
        { title: "Rapid Response", desc: "Fast mobilization to secure and stabilize properties as soon as they enter your portfolio." },
        { title: "Reduce Liability", desc: "Properly secured and maintained properties significantly reduce liability exposure for owners." },
        { title: "Consistent Standards", desc: "Uniform service quality across all properties in your portfolio, regardless of location." },
      ]}
      relatedServices={[
        { name: "Lock Change & Board-Up", href: "/services/lock-change-board-up" },
        { name: "Trash-Out & Debris Removal", href: "/services/trash-out-debris-removal" },
        { name: "Winterization", href: "/services/winterization" },
        { name: "Photo Inspection", href: "/services/photo-inspection" },
        { name: "Property Maintenance", href: "/services/property-maintenance" },
      ]}
    />
  );
}
