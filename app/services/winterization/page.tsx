import type { Metadata } from "next";
import { Snowflake } from "lucide-react";
import ServicePageLayout from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "Winterization Services",
  description: "Professional property winterization services — plumbing, HVAC, and system protection to prevent freeze damage in vacant properties.",
};

export default function WinterizationPage() {
  return (
    <ServicePageLayout
      icon={Snowflake}
      iconColor="text-white"
      iconBg="bg-gradient-to-br from-sky-500 to-sky-700"
      title="Winterization"
      tagline="Protect your vacant properties from costly freeze damage with professional winterization services that safeguard plumbing, HVAC, and all property systems."
      description={`Freeze damage is one of the most costly and preventable problems in vacant property management. When temperatures drop, unprotected plumbing systems in vacant properties can freeze and burst, causing thousands of dollars in water damage and significantly delaying the property's return to market.

NextZen Winterization Services provides comprehensive, investor-compliant winterization of residential and commercial properties. Our trained specialists follow established protocols to drain water from all systems, protect pipes, and stabilize the property against cold weather damage.

We handle the complete winterization process — from initial inspection and system documentation to full execution and certification. All winterizations are performed in compliance with HUD, FHA, and investor guidelines, with complete photo documentation provided upon completion.`}
      features={[
        "Complete water system draining",
        "Water heater drainage and protection",
        "Toilet anti-freeze treatment",
        "P-trap anti-freeze treatment",
        "Pipe insulation and protection",
        "Air compressor blow-out of lines",
        "Main shut-off valve evaluation",
        "Furnace and HVAC assessment",
        "Sump pump drainage",
        "Irrigation system winterization",
        "HUD-compliant certification",
        "Complete photo documentation package",
      ]}
      benefits={[
        { title: "Prevent Freeze Damage", desc: "Avoid thousands in repair costs from burst pipes and water damage in vacant winter properties." },
        { title: "HUD/FHA Compliant", desc: "All winterizations are performed and certified to meet HUD, FHA, and investor requirements." },
        { title: "Complete Documentation", desc: "Full photo package and certification documentation submitted promptly upon completion." },
        { title: "Experienced Technicians", desc: "Trained winterization specialists who know every system and every potential freeze point." },
        { title: "Reduced Insurance Claims", desc: "Proper winterization dramatically reduces the risk of costly insurance claims from freeze events." },
        { title: "Portfolio-Scale Service", desc: "Efficiently handle winterization across your entire portfolio before winter weather arrives." },
      ]}
      relatedServices={[
        { name: "Property Preservation", href: "/services/property-preservation" },
        { name: "Property Maintenance", href: "/services/property-maintenance" },
        { name: "Photo Inspection", href: "/services/photo-inspection" },
        { name: "Lock Change & Board-Up", href: "/services/lock-change-board-up" },
        { name: "Other Services", href: "/services/other-services" },
      ]}
    />
  );
}
