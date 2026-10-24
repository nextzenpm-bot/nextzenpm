import Link from "next/link";
import { FileSpreadsheet, MapPin, Camera, CheckCheck, ArrowRight, ShieldCheck } from "lucide-react";

const processSteps = [
  {
    step: "01",
    icon: FileSpreadsheet,
    title: "Order Intake & Scope Verification",
    badge: "Immediate Acknowledgment",
    description:
      "Submit work orders easily via our client portal, direct email, or direct sync with your work order management system. Scope, address, and special instructions are instantly validated.",
    features: [
      "Compatible with Pruvan, PPW, & EZInspections",
      "Fast pricing acknowledgment with flat rates",
      "Immediate automated work order tracking ID",
    ],
  },
  {
    step: "02",
    icon: MapPin,
    title: "Smart Dispatch & Technician Routing",
    badge: "Guaranteed SLA",
    description:
      "Our dispatch engine pairs the job with the nearest vetted, insured field technician who has the exact trade certification and equipment inventory required for your property.",
    features: [
      "Rapid dispatch within 2-4 hours for emergency calls",
      "Background-checked & insured local trade crews",
      "Real-time tech ETA & location confirmation",
    ],
  },
  {
    step: "03",
    icon: Camera,
    title: "On-Site Execution & Digital Photo Capture",
    badge: "Strict Investor Compliance",
    description:
      "Crews complete work to rigorous HUD/GSE specifications. Geo-tagged, date/time-stamped high-definition photos are logged before, during, and after each scope item.",
    features: [
      "GPS-verified property location checks",
      "Standardized 360° documentation angles",
      "Real-time hazard alerts & condition notes",
    ],
  },
  {
    step: "04",
    icon: CheckCheck,
    title: "QA Audit, Completion Pack & Invoicing",
    badge: "Zero-Defect Signoff",
    description:
      "Our in-house quality control team audits every photo and line item against the approved scope. You receive a complete audit-ready package and a single consolidated invoice.",
    features: [
      "100% photo audit prior to client delivery",
      "Audit-proof completion certificate",
      "Transparent, unit-based billing with no surprise fees",
    ],
  },
];

export default function ServiceProcess() {
  return (
    <section className="py-20 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1a4b8c]/10 text-[#1a4b8c] text-xs font-bold px-3.5 py-1.5 rounded-full mb-3 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#1a4b8c]" />
            How It Works
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0f1f3d] tracking-tight mb-4">
            A Transparent, <span className="text-[#1a4b8c]">Streamlined</span> Service Process
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            From the minute you place a work order to final photo signoff, our battle-tested operational workflow guarantees complete visibility and zero headaches.
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative mb-14">
          {processSteps.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 hover:bg-white rounded-2xl border border-slate-200 hover:border-[#2e7fd4]/50 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative"
            >
              <div>
                {/* Step number badge & icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#0f1f3d] text-white flex items-center justify-center font-extrabold text-base shadow-sm group-hover:bg-[#1a4b8c] transition-colors">
                    <item.icon size={22} className="text-[#e8a935]" />
                  </div>
                  <span className="text-3xl font-black text-slate-200 group-hover:text-[#2e7fd4]/30 transition-colors">
                    {item.step}
                  </span>
                </div>

                <div className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#1a4b8c] bg-blue-100/60 px-2.5 py-0.5 rounded-full mb-2.5">
                  {item.badge}
                </div>

                <h3 className="text-lg font-bold text-[#0f1f3d] mb-2 leading-snug group-hover:text-[#1a4b8c] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-5">
                  {item.description}
                </p>
              </div>

              {/* Bullet Features */}
              <div className="pt-4 border-t border-slate-200/80 space-y-2">
                {item.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2">
                    <ShieldCheck size={14} className="text-[#2e7fd4] flex-shrink-0" />
                    <span className="text-xs text-slate-600 font-medium line-clamp-1">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="bg-gradient-to-r from-[#0f1f3d] via-[#162847] to-[#1a4b8c] rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <h4 className="text-xl md:text-2xl font-bold mb-1">
              Have high-volume recurring properties or unique requirements?
            </h4>
            <p className="text-blue-100/80 text-sm">
              We create custom API integrations, dedicated dispatch channels, and tailored pricing tiers.
            </p>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <Link href="/contact" className="btn-gold text-sm py-3 px-6 whitespace-nowrap">
              Schedule an Operations Call
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
