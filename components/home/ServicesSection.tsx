import Link from "next/link";
import {
  Building2,
  Wrench,
  Sparkles,
  Leaf,
  HardHat,
  Lock,
  Trash2,
  Snowflake,
  Camera,
  MoreHorizontal,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    name: "Property Preservation",
    href: "/services/property-preservation",
    desc: "Comprehensive care for vacant properties including securing, maintenance, and full preservation tasks to protect your asset.",
    color: "from-blue-500/10 to-blue-800/10",
    iconColor: "text-blue-600",
  },
  {
    icon: Wrench,
    name: "Property Maintenance",
    href: "/services/property-maintenance",
    desc: "Routine maintenance, general repairs, and upkeep services to keep properties in top condition year-round.",
    color: "from-indigo-500/10 to-indigo-800/10",
    iconColor: "text-indigo-600",
  },
  {
    icon: Sparkles,
    name: "Cleaning Services",
    href: "/services/cleaning-services",
    desc: "Interior cleaning, deep cleaning, and move-out cleaning services to ensure properties are spotless and tenant-ready.",
    color: "from-cyan-500/10 to-cyan-800/10",
    iconColor: "text-cyan-600",
  },
  {
    icon: Leaf,
    name: "Lawn Care & Landscaping",
    href: "/services/lawn-care-landscaping",
    desc: "Professional lawn maintenance, grass cutting, trimming, and full exterior cleanup to boost curb appeal.",
    color: "from-green-500/10 to-green-800/10",
    iconColor: "text-green-600",
  },
  {
    icon: HardHat,
    name: "Handyman Services",
    href: "/services/handyman-services",
    desc: "General repairs, minor fixes, and small-scale work handled by skilled, reliable handyman professionals.",
    color: "from-orange-500/10 to-orange-800/10",
    iconColor: "text-orange-600",
  },
  {
    icon: Lock,
    name: "Lock Change & Board-Up",
    href: "/services/lock-change-board-up",
    desc: "Authorized lock changes, re-keying, and full board-up services for securing vacant or distressed properties.",
    color: "from-red-500/10 to-red-800/10",
    iconColor: "text-red-600",
  },
  {
    icon: Trash2,
    name: "Trash-Out & Debris Removal",
    href: "/services/trash-out-debris-removal",
    desc: "Complete junk removal, debris cleanout, and property trash-out services for a clean, ready property.",
    color: "from-amber-500/10 to-amber-800/10",
    iconColor: "text-amber-600",
  },
  {
    icon: Snowflake,
    name: "Winterization",
    href: "/services/winterization",
    desc: "Seasonal winterization of plumbing, HVAC, and property systems to prevent freeze damage and protect assets.",
    color: "from-sky-500/10 to-sky-800/10",
    iconColor: "text-sky-600",
  },
  {
    icon: Camera,
    name: "Photo Inspection",
    href: "/services/photo-inspection",
    desc: "Professional property condition documentation, photo reporting, and inspection services for accurate assessments.",
    color: "from-purple-500/10 to-purple-800/10",
    iconColor: "text-purple-600",
  },
  {
    icon: MoreHorizontal,
    name: "Other Services",
    href: "/services/other-services",
    desc: "Additional specialized services and custom requests tailored to your specific property management needs.",
    color: "from-slate-500/10 to-slate-800/10",
    iconColor: "text-slate-600",
  },
];

export default function ServicesSection() {
  return (
    <section className="section-padding bg-[#f8fafc]">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-[#44DDF1] text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-6 h-px bg-[#44DDF1]" />
            What We Offer
            <span className="w-6 h-px bg-[#44DDF1]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f1f3d] mb-4">
            Comprehensive Property Services
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            From preservation to inspection, we deliver professional-grade services that protect and maintain your property portfolio.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.slice(0, 8).map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="service-card group bg-white rounded-2xl p-6 border border-slate-100 hover:border-[#44DDF1]/30 hover:shadow-xl hover:shadow-blue-900/8 flex flex-col"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon size={22} className={service.iconColor} />
              </div>

              {/* Content */}
              <h3 className="font-bold text-[#0f1f3d] text-base mb-2 leading-tight group-hover:text-[#44DDF1] transition-colors duration-200">
                {service.name}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed flex-1">{service.desc}</p>

              {/* Link */}
              <div className="mt-4 flex items-center gap-1.5 text-[#44DDF1] text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                Learn More <ArrowRight size={13} />
              </div>
            </Link>
          ))}

          {/* View all card */}
          <Link
            href="/services"
            className="service-card col-span-1 sm:col-span-2 group bg-gradient-to-br from-[#0f1f3d] to-[#1a4b8c] rounded-2xl p-6 border border-[#44DDF1]/20 flex flex-col items-start justify-between min-h-[160px]"
          >
            <div>
              <p className="text-xs font-bold text-[#e8a935] uppercase tracking-widest mb-2">
                And More
              </p>
              <h3 className="font-bold text-white text-xl leading-tight mb-2">
                View All Services
              </h3>
              <p className="text-blue-200/70 text-sm">
                Explore our complete range including Other Services and custom solutions.
              </p>
            </div>
            <div className="flex items-center gap-2 text-white font-semibold text-sm mt-4 bg-white/10 rounded-lg px-4 py-2.5 group-hover:bg-[#44DDF1] transition-colors duration-300">
              See All Services <ArrowRight size={14} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
