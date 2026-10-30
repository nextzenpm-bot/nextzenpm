import { ShieldCheck, Award, FileCheck2, CheckCircle2 } from "lucide-react";

const clientPartners = [
  { name: "Apex Property Partners", tag: "National Single-Family Portfolio" },
  { name: "Beacon Asset Servicing", tag: "REO & Default Management" },
  { name: "Meridian Residential", tag: "Multi-Family Asset Group" },
  { name: "Vanguard Asset Network", tag: "Institutional REO Brokerage" },
  { name: "Horizon Capital Real Estate", tag: "Commercial & Mixed-Use" },
  { name: "Pinnacle Property Management", tag: "12,000+ Doors Serviced" },
];

const complianceBadges = [
  {
    icon: ShieldCheck,
    title: "Licensed, Bonded & Insured",
    desc: "$2M General Liability + Full Worker's Comp Coverage",
  },
  {
    icon: FileCheck2,
    title: "HUD & Investor Compliant",
    desc: "Strict adherence to Fannie Mae, Freddie Mac & VA guidelines",
  },
  {
    icon: Award,
    title: "OSHA & EPA Lead-Safe",
    desc: "Certified crews trained in strict safety & environmental protocols",
  },
  {
    icon: CheckCircle2,
    title: "100% Background Checked",
    desc: "Vetted field technicians with rigorous identity & skill validation",
  },
];

export default function TrustIndicators() {
  return (
    <section className="bg-slate-900 border-y border-slate-800/80 py-12 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-radial-gradient from-blue-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="container-wide relative z-10">
        {/* Header line */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#e8a935] mb-2">
            Institutional Trust & Compliance
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
            Trusted by National Asset Managers & Property Portfolios
          </h2>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {clientPartners.map((partner) => (
            <div
              key={partner.name}
              className="bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 hover:border-slate-600 rounded-xl p-4 flex flex-col items-center justify-center text-center transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-950/80 border border-blue-500/20 flex items-center justify-center text-[#44DDF1] font-black text-sm tracking-tighter mb-2 group-hover:text-[#e8a935] transition-colors">
                {partner.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
              </div>
              <span className="font-semibold text-xs text-slate-200 line-clamp-1 group-hover:text-white transition-colors">
                {partner.name}
              </span>
              <span className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                {partner.tag}
              </span>
            </div>
          ))}
        </div>

        {/* Compliance Badges Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-slate-800/60">
          {complianceBadges.map((badge) => (
            <div
              key={badge.title}
              className="flex items-start gap-3.5 bg-slate-800/30 rounded-lg p-3.5 border border-slate-700/40"
            >
              <div className="w-9 h-9 rounded-lg bg-[#44DDF1]/10 border border-[#44DDF1]/20 flex items-center justify-center flex-shrink-0 text-[#44DDF1] mt-0.5">
                <badge.icon size={18} />
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-100 mb-0.5">
                  {badge.title}
                </h3>
                <p className="text-[11px] text-slate-400 leading-snug">
                  {badge.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
