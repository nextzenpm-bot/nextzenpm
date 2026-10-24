import { ShieldCheck, TrendingUp, Users, Clock, Building, Award } from "lucide-react";

const keyStats = [
  {
    icon: Building,
    value: "25,000+",
    label: "Properties Serviced",
    desc: "Single-family, multi-family & REO assets maintained nationwide",
  },
  {
    icon: Clock,
    value: "99.4%",
    label: "On-Time SLA Delivery",
    desc: "Rigorous adherence to strict 24-48 hr dispatch commitments",
  },
  {
    icon: Award,
    value: "15+",
    label: "Years in Business",
    desc: "Deep domain experience in property preservation & asset care",
  },
  {
    icon: Users,
    value: "500+",
    label: "Certified Field Crews",
    desc: "Licensed, insured & background-checked local tradespeople",
  },
  {
    icon: TrendingUp,
    value: "42",
    label: "States Covered",
    desc: "Nationwide service footprint with localized dispatch hubs",
  },
  {
    icon: ShieldCheck,
    value: "0.01%",
    label: "Revision Rate",
    desc: "Zero-defect quality audit protocol ensures first-time signoff",
  },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-[#0f1f3d] relative overflow-hidden text-white border-y border-white/10">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-[#1a4b8c]/20 via-transparent to-transparent pointer-events-none" />

      <div className="container-wide relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#e8a935] mb-2">
            Company Experience & Key Metrics
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Proven Performance by the Numbers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {keyStats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#162847]/80 hover:bg-[#1a4b8c]/30 border border-white/10 hover:border-[#2e7fd4]/50 rounded-2xl p-5 text-center flex flex-col items-center justify-between transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-[#2e7fd4] group-hover:text-[#e8a935] flex items-center justify-center mb-3 transition-colors">
                <stat.icon size={18} />
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-black text-white group-hover:text-[#e8a935] transition-colors">
                  {stat.value}
                </span>
                <h3 className="text-xs font-bold text-slate-200 mt-1 mb-1">
                  {stat.label}
                </h3>
                <p className="text-[11px] text-blue-200/60 leading-tight line-clamp-2">
                  {stat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
