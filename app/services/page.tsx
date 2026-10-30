import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2, Wrench, Sparkles, Leaf, HardHat,
  Lock, Trash2, Snowflake, Camera, MoreHorizontal, ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore all property maintenance and preservation services offered by NextZen — from property preservation and cleaning to winterization and photo inspection.",
};

const services = [
  {
    icon: Building2,
    name: "Property Preservation",
    href: "/services/property-preservation",
    desc: "Comprehensive care for vacant and distressed properties — securing, maintenance, debris removal, and full preservation tasks that protect your real estate investment.",
    tags: ["HUD Compliant", "Vacant Property", "Securing"],
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: Wrench,
    name: "Property Maintenance",
    href: "/services/property-maintenance",
    desc: "Routine maintenance, plumbing repairs, HVAC checks, and general upkeep to keep your properties in top condition year-round and preserve asset value.",
    tags: ["Routine Upkeep", "Repairs", "HVAC"],
    color: "from-indigo-500 to-indigo-700",
  },
  {
    icon: Sparkles,
    name: "Cleaning Services",
    href: "/services/cleaning-services",
    desc: "Professional interior cleaning, deep cleaning, and move-out cleaning services to ensure properties are spotless and ready for occupancy or sale.",
    tags: ["Deep Clean", "Move-Out", "Interior"],
    color: "from-cyan-500 to-cyan-700",
  },
  {
    icon: Leaf,
    name: "Lawn Care & Landscaping",
    href: "/services/lawn-care-landscaping",
    desc: "Complete lawn maintenance, grass cutting, trimming, edging, and exterior cleanup services that boost curb appeal and keep properties looking their best.",
    tags: ["Lawn Mowing", "Trimming", "Exterior"],
    color: "from-green-500 to-green-700",
  },
  {
    icon: HardHat,
    name: "Handyman Services",
    href: "/services/handyman-services",
    desc: "General repairs, minor fixes, drywall patching, door adjustments, and small-scale work handled efficiently by skilled handyman professionals.",
    tags: ["General Repairs", "Minor Fixes", "Versatile"],
    color: "from-orange-500 to-orange-700",
  },
  {
    icon: Lock,
    name: "Lock Change & Board-Up",
    href: "/services/lock-change-board-up",
    desc: "Authorized lock changes, re-keying, deadbolt installation, and full board-up services for securing vacant, foreclosed, or distressed properties.",
    tags: ["Re-Keying", "Board-Up", "Security"],
    color: "from-red-500 to-red-700",
  },
  {
    icon: Trash2,
    name: "Trash-Out & Debris Removal",
    href: "/services/trash-out-debris-removal",
    desc: "Complete junk removal, debris cleanout, abandoned furniture disposal, and full property trash-out services to prepare properties for re-entry or sale.",
    tags: ["Junk Removal", "Cleanout", "Disposal"],
    color: "from-amber-500 to-amber-700",
  },
  {
    icon: Snowflake,
    name: "Winterization",
    href: "/services/winterization",
    desc: "Seasonal winterization of plumbing systems, HVAC units, and property infrastructure to prevent freeze damage and protect your investment through winter months.",
    tags: ["Plumbing", "Seasonal", "Freeze Protection"],
    color: "from-sky-500 to-sky-700",
  },
  {
    icon: Camera,
    name: "Photo Inspection",
    href: "/services/photo-inspection",
    desc: "Professional property condition documentation, comprehensive photo reporting, and detailed inspection services that provide accurate, reliable property assessments.",
    tags: ["Documentation", "Reporting", "Condition Assessment"],
    color: "from-purple-500 to-purple-700",
  },
  {
    icon: MoreHorizontal,
    name: "Other Services",
    href: "/services/other-services",
    desc: "Additional specialized services and fully customizable solutions tailored to meet your unique property management needs and special project requirements.",
    tags: ["Custom", "Specialized", "Flexible"],
    color: "from-slate-500 to-slate-700",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-36 pb-20">
        <div className="container-wide text-center">
          <div className="inline-flex items-center gap-2 text-[#e8a935] text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-6 h-px bg-[#e8a935]" />
            Full Service Portfolio
            <span className="w-6 h-px bg-[#e8a935]" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
            Our Services
          </h1>
          <p className="text-blue-100/80 text-xl leading-relaxed max-w-2xl mx-auto">
            Comprehensive property maintenance and preservation solutions — all under one trusted partner.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white rounded-2xl p-7 border border-slate-100 hover:border-[#44DDF1]/30 hover:shadow-xl hover:shadow-blue-900/8 flex gap-5 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                  <service.icon size={24} className="text-white" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="font-bold text-[#0f1f3d] text-lg mb-2 group-hover:text-[#44DDF1] transition-colors duration-200 leading-tight">
                    {service.name}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{service.desc}</p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {service.tags.map((tag) => (
                      <span key={tag} className="text-xs font-medium text-[#44DDF1] bg-blue-50 px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-[#44DDF1] text-sm font-semibold">
                    Learn More <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0f1f3d]">
        <div className="container-wide text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Need a Specific Service?</h2>
          <p className="text-blue-200/70 text-lg mb-8 max-w-xl mx-auto">
            Contact us today to discuss your property needs. We offer custom solutions for unique requirements.
          </p>
          <Link href="/contact" className="btn-gold text-base py-4 px-8">
            Request a Service Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
