import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Handshake, TrendingUp, Shield, Clock, DollarSign, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Vendor Partnerships",
  description: "Partner with NextZen Property Maintenance — property manager, asset manager, and vendor coordinator partnerships for professional property services.",
};

const forWhom = [
  {
    title: "Property Managers",
    icon: Users,
    desc: "Streamline your maintenance operations with a single, reliable vendor who handles all your property service needs — from routine maintenance to emergency repairs.",
    benefits: [
      "Single vendor for multiple service types",
      "Consistent quality across your portfolio",
      "Fast response and turnaround times",
      "Integrated work order management",
    ],
  },
  {
    title: "Asset Managers",
    icon: TrendingUp,
    desc: "Protect and maximize your real estate assets with investor-compliant preservation, maintenance, and inspection services that meet HUD and FHA standards.",
    benefits: [
      "HUD/FHA compliant services",
      "Full photo documentation packages",
      "Portfolio-scale service capacity",
      "Competitive pricing for bulk orders",
    ],
  },
  {
    title: "Vendor Coordinators",
    icon: Handshake,
    desc: "Simplify your vendor management with a professional, pre-qualified service partner who delivers consistent results and integrates with your coordination workflows.",
    benefits: [
      "Pre-qualified and background-checked teams",
      "Work order system integration",
      "Timely completion and reporting",
      "Clear and direct communication",
    ],
  },
];

export default function VendorPartnershipsPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-36 pb-20">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-[#e8a935] text-xs font-bold uppercase tracking-widest mb-4">
              <span className="w-6 h-px bg-[#e8a935]" />
              Vendor Partnerships
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your Trusted{" "}
              <span className="text-gradient-gold">Field Service</span>{" "}
              Partner
            </h1>
            <p className="text-blue-100/80 text-xl leading-relaxed max-w-2xl mb-8">
              We partner with property managers, asset managers, and vendor coordinators to deliver consistent, professional property services across entire portfolios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-gold text-base py-4 px-8">
                Start a Partnership <ArrowRight size={16} />
              </Link>
              <Link href="/become-vendor" className="btn-secondary text-base py-4 px-8">
                Become a Vendor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-[#2e7fd4] text-xs font-bold uppercase tracking-widest mb-4">
              <span className="w-6 h-px bg-[#2e7fd4]" />
              Who We Serve
            </div>
            <h2 className="text-4xl font-bold text-[#0f1f3d] mb-4">
              Built for Property Professionals
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Our services are specifically designed to support the workflows and standards of property industry professionals.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {forWhom.map((item) => (
              <div key={item.title} className="bg-[#f8fafc] rounded-2xl p-7 border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2e7fd4]/10 to-[#1a4b8c]/10 flex items-center justify-center mb-5">
                  <item.icon size={22} className="text-[#2e7fd4]" />
                </div>
                <h3 className="font-bold text-[#0f1f3d] text-xl mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{item.desc}</p>
                <ul className="flex flex-col gap-2">
                  {item.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-[#2e7fd4] flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="section-padding bg-[#0f1f3d]">
        <div className="container-wide">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-white mb-4">Why Partner With NextZen?</h2>
            <p className="text-blue-200/70 text-lg max-w-xl mx-auto">
              The advantages that make NextZen the preferred service partner for property professionals.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Shield, title: "Licensed & Insured", desc: "Full licensing, liability insurance, and workers' comp for every job — zero liability exposure for you." },
              { icon: Clock, title: "Fast Response Times", desc: "Rapid mobilization on new work orders with clear communication throughout the process." },
              { icon: CheckCircle, title: "Consistent Quality", desc: "Standardized processes ensure uniform service quality across every property in your portfolio." },
              { icon: DollarSign, title: "Competitive Pricing", desc: "Fair, transparent pricing with volume discounts for portfolio-scale service agreements." },
              { icon: TrendingUp, title: "Full Documentation", desc: "Photo-documented work orders and reports delivered promptly for every completed job." },
              { icon: Users, title: "Dedicated Support", desc: "A dedicated point of contact who understands your portfolio and your standards." },
            ].map((b) => (
              <div key={b.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-[#2e7fd4]/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#2e7fd4]/15 flex items-center justify-center mb-4">
                  <b.icon size={18} className="text-[#2e7fd4]" />
                </div>
                <h3 className="font-bold text-white mb-2">{b.title}</h3>
                <p className="text-blue-200/60 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1a4b8c] to-[#2e7fd4]">
        <div className="container-wide text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start a Partnership?</h2>
          <p className="text-blue-100/80 text-lg mb-8 max-w-xl mx-auto">
            Contact us today to discuss how NextZen can support your property management operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold text-base py-4 px-8">
              Contact Us Today <ArrowRight size={16} />
            </Link>
            <Link href="/services" className="btn-secondary text-base py-4 px-8">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
