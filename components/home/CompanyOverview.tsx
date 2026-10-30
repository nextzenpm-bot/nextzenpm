import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Target, Zap, Clock } from "lucide-react";

const keyPillars = [
  {
    icon: Shield,
    title: "Single-Source Accountability",
    desc: "From initial boarding and debris trash-out to ongoing lawn care, HVAC winterization, and turnover repairs — handle your entire portfolio through a single trusted partner.",
  },
  {
    icon: Clock,
    title: "Strict SLA-Driven Turnaround",
    desc: "Guaranteed 24-to-48 hour dispatch and completion times for urgent work orders, with 2-4 hour rapid emergency response for board-ups and critical hazards.",
  },
  {
    icon: Target,
    title: "100% Investor & Regulatory Compliance",
    desc: "Work executed strictly in alignment with HUD, Fannie Mae, Freddie Mac, and local municipal property code regulations with zero violation tolerance.",
  },
  {
    icon: Zap,
    title: "Real-Time Digital Documentation",
    desc: "Every service order includes comprehensive before, during, and after high-resolution photo documentation with automated timestamping and geo-tagging.",
  },
];

const highlights = [
  "Direct integration with leading work order platforms (PropertyPres, Pruvan, EZInspections)",
  "Transparent, unit-based flat rate matrix with zero hidden trip fees",
  "Dedicated client success manager for every institutional account",
  "24/7/365 live customer support and urgent hazard dispatch desk",
];

export default function CompanyOverview() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background grid subtle */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#0f1f3d 1px, transparent 1px), linear-gradient(90deg, #0f1f3d 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative & Pillars */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-[#44DDF1]/10 text-[#1a4b8c] text-xs font-bold px-3.5 py-1.5 rounded-full mb-4 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#44DDF1]" />
              About NextZen Property Maintenance
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0f1f3d] tracking-tight leading-tight mb-6">
              Setting the Gold Standard in{" "}
              <span className="text-[#1a4b8c]">Property Preservation</span> & Maintenance
            </h2>

            <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6">
              NextZen Property Maintenance is a premier property preservation, asset maintenance, and field services provider trusted by leading property management firms, financial institutions, and asset coordinators across the nation.
            </p>

            <p className="text-sm md:text-base text-slate-500 leading-relaxed mb-8">
              We eliminate the friction of managing fragmented contractors. With a centralized operations hub, vetted local field technicians, and rigorous digital quality control, we ensure every property in your portfolio remains protected, code-compliant, and market-ready.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 size={18} className="text-[#44DDF1] flex-shrink-0 mt-0.5" />
                  <span className="text-xs md:text-sm text-slate-700 font-medium leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/about" className="btn-primary text-sm py-3.5 px-6">
                Explore Company Overview
                <ArrowRight size={15} />
              </Link>
              <Link href="/vendor-partnerships" className="btn-secondary text-sm py-3.5 px-6">
                Our Service Standards
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Feature Grid */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {keyPillars.map((pillar, i) => (
                <div
                  key={i}
                  className="bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-[#44DDF1]/40 hover:shadow-lg transition-all duration-300 rounded-2xl p-5 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#1a4b8c]/5 group-hover:bg-[#1a4b8c] text-[#1a4b8c] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-colors duration-200 shadow-sm">
                      <pillar.icon size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm md:text-base mb-1.5 group-hover:text-[#1a4b8c] transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
