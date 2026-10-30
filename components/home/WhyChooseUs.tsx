import { CheckCircle, Zap, Users, Star } from "lucide-react";

const reasons = [
  {
    icon: CheckCircle,
    title: "Fully Licensed & Insured",
    desc: "We carry full licensing, liability insurance, and workers' compensation — giving you complete peace of mind on every job.",
  },
  {
    icon: Zap,
    title: "Fast Response Times",
    desc: "We understand urgency. Our teams respond quickly and efficiently, minimizing downtime and protecting your property value.",
  },
  {
    icon: Users,
    title: "Vendor-Certified Team",
    desc: "Our professionals are trained, background-checked, and certified to meet the highest vendor standards in the industry.",
  },
  {
    icon: Star,
    title: "Photo Documentation",
    desc: "Every job is documented with before-and-after photos, ensuring complete transparency and accountability on all work orders.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 text-[#44DDF1] text-xs font-bold uppercase tracking-widest mb-4">
              <span className="w-6 h-px bg-[#44DDF1]" />
              Why Choose NextZen
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f1f3d] mb-5 leading-tight">
              The Professional Standard in{" "}
              <span className="text-gradient">Property Care</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              We&apos;re not just another maintenance company. We&apos;re a dedicated partner built to support the workflows and standards of property managers, asset managers, and vendor coordinators.
            </p>

            <div className="flex flex-col gap-5">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#44DDF1]/10 to-[#1a4b8c]/10 flex items-center justify-center flex-shrink-0 group-hover:from-[#44DDF1]/20 group-hover:to-[#1a4b8c]/20 transition-all duration-300">
                    <reason.icon size={20} className="text-[#44DDF1]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0f1f3d] text-base mb-1">{reason.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#44DDF1]/10 to-[#0f1f3d]/5 rounded-3xl transform rotate-3" />
            <div className="relative bg-gradient-to-br from-[#0f1f3d] to-[#162847] rounded-3xl p-8 shadow-2xl">
              {/* Top label */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold text-[#e8a935] uppercase tracking-widest">
                  Service Standards
                </span>
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              </div>

              {/* Standards list */}
              {[
                "HUD & FHA Compliant Services",
                "NAMFS Member Standards",
                "Rapid Work Order Turnaround",
                "Real-time Status Updates",
                "Competitive & Transparent Pricing",
                "Nationwide Service Coverage",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 py-3 border-b border-white/8 last:border-0"
                >
                  <div className="w-5 h-5 rounded-full bg-[#44DDF1]/20 border border-[#44DDF1]/40 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={11} className="text-[#44DDF1]" />
                  </div>
                  <span className="text-sm text-blue-100/80 font-medium">{item}</span>
                </div>
              ))}

              {/* Bottom badge */}
              <div className="mt-6 bg-gradient-to-r from-[#e8a935]/20 to-[#e8a935]/5 border border-[#e8a935]/30 rounded-xl p-4">
                <p className="text-xs font-bold text-[#e8a935] uppercase tracking-wide mb-1">
                  Trusted Partner
                </p>
                <p className="text-sm text-white/80">
                  Serving property managers and asset managers with consistent, reliable service since 2014.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
