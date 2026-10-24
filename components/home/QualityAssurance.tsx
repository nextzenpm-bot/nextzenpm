import { ShieldCheck, Camera, CheckSquare, FileText, AlertTriangle, ArrowRight } from "lucide-react";
import Link from "next/link";

const qaFeatures = [
  {
    icon: Camera,
    title: "Triple-Phase Photo Documentation",
    desc: "Every single scope item is recorded with Before, During, and After photos from identical angles. No ambiguity, no missing angles, no rejected invoices.",
  },
  {
    icon: ShieldCheck,
    title: "Hardware GPS & Cryptographic Time-Stamps",
    desc: "All photographic evidence includes verified geolocation coordinates, directional metadata, and tamper-proof server timestamps to guarantee authenticity.",
  },
  {
    icon: CheckSquare,
    title: "Two-Tier Internal Quality Audit",
    desc: "Before any work order packet is delivered to your inbox or uploaded to your portal, our in-house QC auditors review each line item against client guidelines.",
  },
  {
    icon: FileText,
    title: "Standardized Property Condition Reports (PCR)",
    desc: "Actionable condition ratings for roof, foundation, plumbing, electrical, and grounds with estimated remaining useful life and imminent hazard flags.",
  },
  {
    icon: AlertTriangle,
    title: "Proactive Municipal Code & Hazard Alerts",
    desc: "Field crews immediately identify and report city code citations, overgrown ordinance risks, freeze threats, or structural safety hazards on site.",
  },
];

export default function QualityAssurance() {
  return (
    <section className="py-20 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Features */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold px-3.5 py-1.5 rounded-full mb-4 uppercase tracking-wider">
              <ShieldCheck size={14} className="text-emerald-600" />
              Quality Assurance & Field Compliance
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0f1f3d] tracking-tight leading-tight mb-6">
              Defensible Documentation.{" "}
              <span className="text-[#1a4b8c]">Zero-Defect</span> Quality Audits.
            </h2>

            <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8">
              In property maintenance and preservation, incomplete or poor photo documentation means rejected claims, municipal fines, and delayed settlements. NextZen operates on a strict zero-tolerance QA system that ensures every work order is audit-ready on the first submission.
            </p>

            <div className="space-y-5 mb-8">
              {qaFeatures.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-[#1a4b8c] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/services/photo-inspection" className="btn-primary text-sm py-3.5 px-6">
                Learn About Photo Inspections
                <ArrowRight size={15} />
              </Link>
              <Link href="/contact" className="btn-secondary text-sm py-3.5 px-6">
                Request Sample Audit Packet
              </Link>
            </div>
          </div>

          {/* Right Column: Visual QA Inspection Packet Mockup */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800 relative">
              {/* Badge top */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                    NextZen QA Verified Packet
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  WO #NZ-89241-FL
                </span>
              </div>

              {/* Sample Property Info */}
              <div className="bg-slate-800/80 rounded-xl p-4 mb-5 border border-slate-700/60 text-xs">
                <div className="flex justify-between text-slate-400 mb-1">
                  <span>Target Property:</span>
                  <span className="text-slate-200 font-semibold">Orlando, FL 32801</span>
                </div>
                <div className="flex justify-between text-slate-400 mb-1">
                  <span>Work Order Scope:</span>
                  <span className="text-[#e8a935] font-semibold">Initial Preservation & Securing</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>GPS Verification:</span>
                  <span className="text-emerald-400 font-mono">28.5383° N, 81.3792° W (Matched)</span>
                </div>
              </div>

              {/* Mock Photo Sequence */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-xs text-slate-300 font-semibold px-1">
                  <span>Photo Sequence (3-Point Audit)</span>
                  <span className="text-emerald-400 font-bold">100% Passed</span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                  <div className="bg-slate-800 border border-slate-700 rounded-lg p-2.5">
                    <div className="w-full h-12 bg-slate-700/60 rounded flex items-center justify-center text-slate-300 mb-1.5 font-bold">
                      BEFORE
                    </div>
                    <span className="text-slate-400 block">Debris & Overgrowth</span>
                    <span className="text-[9px] text-emerald-400">✓ Date Verified</span>
                  </div>
                  <div className="bg-slate-800 border border-slate-700 rounded-lg p-2.5">
                    <div className="w-full h-12 bg-blue-900/40 rounded flex items-center justify-center text-blue-200 mb-1.5 font-bold">
                      DURING
                    </div>
                    <span className="text-slate-400 block">Crew In Action</span>
                    <span className="text-[9px] text-emerald-400">✓ Scope Confirmed</span>
                  </div>
                  <div className="bg-slate-800 border border-slate-700 rounded-lg p-2.5">
                    <div className="w-full h-12 bg-emerald-900/40 rounded flex items-center justify-center text-emerald-200 mb-1.5 font-bold">
                      AFTER
                    </div>
                    <span className="text-slate-400 block">Turnkey Pristine</span>
                    <span className="text-[9px] text-emerald-400">✓ Investor Approved</span>
                  </div>
                </div>
              </div>

              {/* QC Signoff Guarantee */}
              <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck size={16} className="text-emerald-400" />
                  <span className="text-xs font-bold text-white">
                    NextZen Zero-Charge Guarantee
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  If an investor or municipal agency rejects any documented scope performed by our team, we rectify it immediately at zero additional cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
