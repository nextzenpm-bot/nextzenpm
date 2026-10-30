import Link from "next/link";
import { ArrowRight, Users, Handshake, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Access to More Work",
    desc: "Get connected with consistent work orders from property managers and asset managers.",
  },
  {
    icon: Handshake,
    title: "Reliable Partnership",
    desc: "We value our vendors and ensure timely communication and fair, transparent payment.",
  },
  {
    icon: TrendingUp,
    title: "Grow Your Business",
    desc: "Expand your service area and build a stronger business with our vendor network.",
  },
];

export default function VendorCTA() {
  return (
    <section className="section-padding bg-[#0f1f3d] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#44DDF1]/10 rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#e8a935]/8 rounded-full -translate-x-1/2 translate-y-1/2" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 text-[#e8a935] text-xs font-bold uppercase tracking-widest mb-4">
              <span className="w-6 h-px bg-[#e8a935]" />
              Vendor Partnerships
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Become a{" "}
              <span className="text-gradient-gold">Trusted</span>{" "}
              Vendor Partner
            </h2>
            <p className="text-blue-200/70 text-lg leading-relaxed mb-8">
              We partner with qualified contractors and service professionals to deliver outstanding property maintenance across our service area. Join our vendor network and grow your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/become-vendor" className="btn-gold text-base py-4 px-8">
                Apply to Become a Vendor
                <ArrowRight size={16} />
              </Link>
              <Link href="/vendor-partnerships" className="btn-secondary text-base py-4 px-8">
                Learn More
              </Link>
            </div>
          </div>

          {/* Right: benefits */}
          <div className="flex flex-col gap-5">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/8 hover:border-[#44DDF1]/30 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#44DDF1]/20 to-[#1a4b8c]/20 flex items-center justify-center flex-shrink-0 group-hover:from-[#44DDF1]/30 group-hover:to-[#1a4b8c]/30 transition-all duration-300">
                  <b.icon size={20} className="text-[#44DDF1]" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base mb-1">{b.title}</h3>
                  <p className="text-blue-200/60 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}

            {/* Also for */}
            <div className="bg-gradient-to-r from-[#e8a935]/15 to-[#e8a935]/5 border border-[#e8a935]/25 rounded-2xl p-5">
              <p className="text-xs font-bold text-[#e8a935] uppercase tracking-widest mb-2">
                Also Serving
              </p>
              <p className="text-sm text-blue-100/80 leading-relaxed">
                Property Managers, Asset Managers, and Vendor Coordinators — we&apos;re your full-service field operations partner.
              </p>
              <Link
                href="/vendor-partnerships"
                className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-[#e8a935] hover:text-white transition-colors duration-200"
              >
                Learn About Partnerships <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
