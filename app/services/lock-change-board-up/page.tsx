import type { Metadata } from "next";
import { Lock } from "lucide-react";
import ServicePageLayout from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "Lock Change & Board-Up Services",
  description: "Authorized lock changes, re-keying, and professional board-up services for securing vacant and distressed properties.",
};

export default function LockChangeBoardUpPage() {
  return (
    <ServicePageLayout
      icon={Lock}
      iconColor="text-white"
      iconBg="bg-gradient-to-br from-red-500 to-red-700"
      title="Lock Change & Board-Up"
      tagline="Authorized lock change, re-keying, and full board-up services that secure your vacant and distressed properties against unauthorized entry and damage."
      description={`Securing a property quickly after vacancy or foreclosure is critical to preventing unauthorized access, vandalism, theft, and liability. NextZen Lock Change & Board-Up Services provides fast, professional securing services that meet investor and HUD requirements.

Our teams are trained in all aspects of property securing — from standard lock changes and deadbolt installation to full window and door board-up services using compliant materials and methods. We respond quickly to new work orders and can mobilize efficiently to secure properties across our service areas.

All lock changes are documented with key photo evidence, and board-up services are completed using approved materials with before-and-after photo reports submitted promptly upon job completion.`}
      features={[
        "Authorized lock changes (all types)",
        "Deadbolt installation and replacement",
        "Re-keying existing lock hardware",
        "Padlock installation for outbuildings",
        "Window board-up (all sizes)",
        "Door board-up for missing or damaged doors",
        "Garage door securing",
        "Crawl space and basement securing",
        "HUD-compliant materials and methods",
        "Key photo documentation",
        "Before and after photo reports",
        "Work order compliance reporting",
      ]}
      benefits={[
        { title: "Rapid Response", desc: "Fast mobilization to secure properties as soon as they enter your portfolio or require emergency securing." },
        { title: "HUD Compliance", desc: "All securing work is performed using HUD-compliant materials and methods with proper documentation." },
        { title: "Liability Reduction", desc: "Properly secured properties significantly reduce exposure to liability from unauthorized entry or injury." },
        { title: "Vandalism Prevention", desc: "Professionally secured properties deter unauthorized entry, reducing vandalism and damage costs." },
        { title: "Full Documentation", desc: "Complete photo evidence of all securing work provides clear records for your files and investor reporting." },
        { title: "Coordinated Service", desc: "Lock change services can be combined with inspections, board-up, and preservation tasks in a single visit." },
      ]}
      relatedServices={[
        { name: "Property Preservation", href: "/services/property-preservation" },
        { name: "Trash-Out & Debris Removal", href: "/services/trash-out-debris-removal" },
        { name: "Winterization", href: "/services/winterization" },
        { name: "Photo Inspection", href: "/services/photo-inspection" },
        { name: "Handyman Services", href: "/services/handyman-services" },
      ]}
    />
  );
}
