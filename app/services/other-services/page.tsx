import type { Metadata } from "next";
import { MoreHorizontal } from "lucide-react";
import ServicePageLayout from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "Other Services",
  description: "Additional specialized property services and custom solutions — tailored to meet your unique property management needs.",
};

export default function OtherServicesPage() {
  return (
    <ServicePageLayout
      icon={MoreHorizontal}
      iconColor="text-white"
      iconBg="bg-gradient-to-br from-slate-500 to-slate-700"
      title="Other Services"
      tagline="Specialized and custom property services tailored to your unique needs — if it's related to property care, we can help."
      description={`Property management challenges don't always fit neatly into standard service categories. That's why NextZen offers a flexible range of additional and custom services to address the unique needs of every property and every portfolio.

Whether you need a specialized service not listed in our standard offerings, a custom solution for a complex property situation, or help with a unique project, our team is ready to discuss your requirements and provide professional support.

Contact us to describe your specific needs and we'll work with you to create a service plan that addresses your situation effectively and cost-efficiently. We're committed to being a true full-service partner for property managers and asset managers.`}
      features={[
        "Custom property service solutions",
        "Pool and spa maintenance",
        "Pest control coordination",
        "Emergency property services",
        "Graffiti removal",
        "Pressure washing and exterior cleaning",
        "Roof tarping and emergency weatherproofing",
        "Tree trimming and removal coordination",
        "Mold remediation coordination",
        "Property marketing photography",
        "Move-in/move-out coordination",
        "Special project management",
      ]}
      benefits={[
        { title: "Custom Solutions", desc: "We tailor our approach to your specific property situation rather than forcing a one-size-fits-all solution." },
        { title: "Single Point of Contact", desc: "Manage all your property service needs through one trusted vendor partner." },
        { title: "Problem-Solving Approach", desc: "Our experienced team brings creative solutions to complex or unusual property challenges." },
        { title: "Competitive Pricing", desc: "Fair, transparent pricing even for custom and specialized service requests." },
        { title: "Reliable Execution", desc: "The same professional standards and documentation applied to all our custom service work." },
        { title: "Fast Response", desc: "Even for non-standard requests, we respond quickly and mobilize efficiently." },
      ]}
      relatedServices={[
        { name: "Property Preservation", href: "/services/property-preservation" },
        { name: "Property Maintenance", href: "/services/property-maintenance" },
        { name: "Handyman Services", href: "/services/handyman-services" },
        { name: "Cleaning Services", href: "/services/cleaning-services" },
        { name: "Photo Inspection", href: "/services/photo-inspection" },
      ]}
    />
  );
}
