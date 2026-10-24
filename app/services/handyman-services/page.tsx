import type { Metadata } from "next";
import { HardHat } from "lucide-react";
import ServicePageLayout from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "Handyman Services",
  description: "Professional handyman services for managed properties — general repairs, minor fixes, carpentry, and maintenance tasks.",
};

export default function HandymanServicesPage() {
  return (
    <ServicePageLayout
      icon={HardHat}
      iconColor="text-white"
      iconBg="bg-gradient-to-br from-orange-500 to-orange-700"
      title="Handyman Services"
      tagline="Skilled, reliable handyman professionals ready to handle general repairs, minor fixes, and a wide range of small-scale maintenance tasks for your properties."
      description={`When properties need small repairs, quick fixes, or minor work that doesn't require a specialist, a skilled handyman is the most efficient and cost-effective solution. NextZen Handyman Services provides exactly that — reliable, skilled professionals who can tackle a broad range of tasks efficiently and professionally.

Our handyman teams are experienced, background-checked, and equipped to handle the everyday maintenance needs that come with managing a property portfolio. From door adjustments and drywall patching to fixture replacement and minor electrical work, we get the job done right.

We understand that responsiveness matters in property management. Our teams are available for both scheduled work orders and urgent repair needs, ensuring your properties stay in top condition without delays.`}
      features={[
        "Door adjustments, repairs, and hardware",
        "Drywall patching and small repairs",
        "Caulking and weatherstripping",
        "Light fixture installation and replacement",
        "Outlet cover and switch plate replacement",
        "Cabinet and drawer hardware repairs",
        "Minor plumbing (faucet, toilet repairs)",
        "Window blind installation and repair",
        "Closet rod and shelf installation",
        "Smoke detector battery replacement",
        "Minor painting touch-ups",
        "Photo documentation of all work",
      ]}
      benefits={[
        { title: "Cost-Effective Repairs", desc: "Handyman rates are more cost-effective than specialty contractors for minor repair needs." },
        { title: "Fast Scheduling", desc: "Quick availability to address maintenance issues before they escalate into larger problems." },
        { title: "Wide Skill Set", desc: "One skilled handyman can address multiple different repair types in a single visit." },
        { title: "Verified Professionals", desc: "Background-checked, experienced handymen who meet your vendor qualification standards." },
        { title: "Consistent Reporting", desc: "Before-and-after photos and work order documentation for every completed task." },
        { title: "Preventive Maintenance", desc: "Minor repairs addressed quickly prevent small issues from becoming major, costly problems." },
      ]}
      relatedServices={[
        { name: "Property Maintenance", href: "/services/property-maintenance" },
        { name: "Cleaning Services", href: "/services/cleaning-services" },
        { name: "Lock Change & Board-Up", href: "/services/lock-change-board-up" },
        { name: "Property Preservation", href: "/services/property-preservation" },
        { name: "Other Services", href: "/services/other-services" },
      ]}
    />
  );
}
