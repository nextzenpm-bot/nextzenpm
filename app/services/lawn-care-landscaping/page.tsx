import type { Metadata } from "next";
import { Leaf } from "lucide-react";
import ServicePageLayout from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "Lawn Care & Landscaping Services",
  description: "Professional lawn care, grass cutting, trimming, and exterior landscaping services for managed and vacant properties.",
};

export default function LawnCarePage() {
  return (
    <ServicePageLayout
      icon={Leaf}
      iconColor="text-white"
      iconBg="bg-gradient-to-br from-green-500 to-green-700"
      title="Lawn Care & Landscaping"
      tagline="Professional lawn maintenance and exterior cleanup that enhances curb appeal and ensures your properties always make a great first impression."
      description={`A well-maintained exterior is one of the most visible indicators of a property's condition. Overgrown lawns, untrimmed hedges, and cluttered exterior spaces not only reduce curb appeal but can also signal neglect to neighbors, municipalities, and potential buyers or tenants.

NextZen Lawn Care & Landscaping provides complete exterior maintenance for residential and commercial properties across our service area. Our experienced grounds teams handle everything from regular grass cutting to full exterior cleanup and landscaping services.

We understand the cyclical nature of lawn care and can establish regular maintenance schedules that keep your properties looking their best throughout the year. All work is documented with before-and-after photos to confirm service completion and quality.`}
      features={[
        "Grass cutting and mowing",
        "Edging along sidewalks and driveways",
        "Hedge and shrub trimming",
        "Weed removal and weed control",
        "Leaf blowing and cleanup",
        "Debris removal from exterior",
        "Gutter cleaning",
        "Exterior walkway clearing",
        "Seasonal cleanups (spring/fall)",
        "Snow removal services",
        "Mulching and ground cover",
        "Photo documentation of all work",
      ]}
      benefits={[
        { title: "Enhanced Curb Appeal", desc: "Well-maintained exteriors attract quality tenants and buyers while maintaining neighborhood standards." },
        { title: "Municipal Compliance", desc: "Avoid code violations and municipal fines that arise from overgrown or neglected exterior conditions." },
        { title: "Regular Scheduling", desc: "Establish recurring maintenance visits that keep properties consistently maintained without manual oversight." },
        { title: "Faster Marketability", desc: "Properties with great curb appeal sell and rent faster, reducing carrying costs and vacancy periods." },
        { title: "Bulk Portfolio Pricing", desc: "Competitive pricing for property managers with multiple properties requiring regular maintenance." },
        { title: "All-Season Service", desc: "We provide lawn care in warm seasons and snow removal and exterior cleanup in winter months." },
      ]}
      relatedServices={[
        { name: "Property Preservation", href: "/services/property-preservation" },
        { name: "Trash-Out & Debris Removal", href: "/services/trash-out-debris-removal" },
        { name: "Property Maintenance", href: "/services/property-maintenance" },
        { name: "Photo Inspection", href: "/services/photo-inspection" },
        { name: "Winterization", href: "/services/winterization" },
      ]}
    />
  );
}
