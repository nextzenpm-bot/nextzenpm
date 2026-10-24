import Link from "next/link";
import { Building, Landmark, Network, TrendingUp, ArrowRight, Check } from "lucide-react";

const clientSegments = [
  {
    icon: Building,
    badge: "Residential & Commercial",
    title: "Property Managers",
    tagline: "Single-Family & Multi-Family Portfolios",
    description:
      "Eliminate vendor chaos. Manage routine maintenance, turnover repairs, emergency calls, and seasonal preservation across your entire portfolio through a single dedicated dispatch point.",
    benefits: [
      "Rapid tenant turnover prep & punch-lists",
      "24/7 emergency response for plumbing, securing & leaks",
      "Consolidated monthly invoicing with itemized receipts",
      "Zero contractor babysitting with guaranteed SLAs",
    ],
    ctaText: "Solutions for Property Managers",
    ctaLink: "/vendor-partnerships",
  },
  {
    icon: Landmark,
    badge: "Default & Foreclosure",
    title: "Asset Managers & REO Specialists",
    tagline: "Banks, Lenders & Default Servicers",
    description:
      "Maintain investor compliance from day one of vacancy. We execute lockouts, initial trash-outs, board-ups, winterizations, and recurring yard care adhering strictly to HUD and GSE specifications.",
    benefits: [
      "100% Fannie Mae, Freddie Mac & HUD guideline compliance",
      "Same-day occupancy verification & photo inspections",
      "Time-stamped, geo-tagged photo documentation packs",
      "Zero municipal code violation guarantee",
    ],
    ctaText: "Solutions for Asset Managers",
    ctaLink: "/vendor-partnerships",
  },
  {
    icon: Network,
    badge: "Field Operations",
    title: "Vendor Coordinators",
    tagline: "National & Regional Service Aggregators",
    description:
      "Scale your field capacity without sacrificing quality. We provide ready-to-deploy, certified field crews capable of absorbing high-volume work orders with flawless photo reporting.",
    benefits: [
      "Seamless integration with Pruvan, EZInspections & PPW",
      "High-volume capacity in primary and secondary metros",
      "Standardized flat-rate matrix per trade and task",
      "Rapid work order turnarounds with minimal revisions",
    ],
    ctaText: "Solutions for Coordinators",
    ctaLink: "/vendor-partnerships",
  },
  {
    icon: TrendingUp,
    badge: "Institutional Capital",
    title: "Real Estate Investors & REITs",
    tagline: "Single-Family Rental (SFR) Portfolios",
    description:
      "Protect your asset value and accelerate occupancy. We handle acquisition walk-throughs, rehabilitation punch-lists, curb-appeal upgrades, and recurring preventive maintenance.",
    benefits: [
      "Fast-track unit turnovers to minimize vacancy days",
      "Comprehensive Property Condition Reports (PCR)",
      "Bulk property discounts and predictable CapEx pricing",
      "Dedicated account manager and executive dashboard",
    ],
    ctaText: "Solutions for Investors",
    ctaLink: "/vendor-partnerships",
  },
];

export default function WhoWeServe() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/80 relative">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1a4b8c]/10 text-[#1a4b8c] text-xs font-bold px-3.5 py-1.5 rounded-full mb-3 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#1a4b8c]" />
            Who We Serve
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0f1f3d] tracking-tight mb-4">
            Tailored Property Solutions for{" "}
            <span className="text-[#1a4b8c]">Industry Professionals</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            Whether you oversee a 5,000-door institutional SFR portfolio or coordinate default preservation across several counties, NextZen delivers custom workflows configured to your operational standards.
          </p>
        </div>

        {/* 4 Target Client Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clientSegments.map((segment, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-[#2e7fd4]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-100 text-[#1a4b8c] flex items-center justify-center group-hover:bg-[#1a4b8c] group-hover:text-white transition-colors duration-200 shadow-sm">
                    <segment.icon size={26} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-3 py-1 rounded-full border border-slate-200">
                    {segment.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#0f1f3d] mb-1 group-hover:text-[#1a4b8c] transition-colors">
                  {segment.title}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#e8a935] mb-4">
                  {segment.tagline}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {segment.description}
                </p>

                {/* Key Benefits */}
                <div className="space-y-2.5 mb-8">
                  {segment.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0 mt-0.5 text-emerald-600">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-xs md:text-sm text-slate-700 font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <Link
                  href={segment.ctaLink}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#1a4b8c] hover:text-[#2e7fd4] group-hover:translate-x-1 transition-all"
                >
                  <span>{segment.ctaText}</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
