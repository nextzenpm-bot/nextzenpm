import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Phone, Handshake } from "lucide-react";

export default function QuoteCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0b1829] via-[#0f1f3d] to-[#162847] text-white relative overflow-hidden border-t border-slate-800">
      {/* Background visual accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2e7fd4]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#e8a935]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-[#e8a935] text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            <Zap size={14} />
            Fast-Track Property Solutions
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Ready to Protect & Maintain Your{" "}
            <span className="text-gradient-gold">Properties</span> with Confidence?
          </h2>

          <p className="text-base md:text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
            Whether you need urgent emergency preservation today or want a long-term enterprise maintenance partner for your entire portfolio, our dispatch desk is active 24/7.
          </p>
        </div>

        {/* Dual Conversion Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Box 1: Property / Asset Managers */}
          <div className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-[#2e7fd4] rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 shadow-xl group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2e7fd4] bg-blue-950/80 border border-blue-800 px-3 py-1 rounded-full">
                  For Property & Asset Managers
                </span>
                <ShieldCheck size={20} className="text-[#2e7fd4]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Request a Service Quote
              </h3>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed mb-6">
                Receive standardized, unit-based pricing for vacant turns, emergency board-ups, routine lawn care, or complete property preservation.
              </p>
            </div>

            <div>
              <Link href="/contact" className="btn-gold w-full py-4 text-sm flex items-center justify-center gap-2 font-bold shadow-lg">
                <span>Get a Free Work Order Quote</span>
                <ArrowRight size={16} />
              </Link>
              <div className="text-center mt-3 text-[11px] text-slate-400">
                Average quote response time: under 30 minutes
              </div>
            </div>
          </div>

          {/* Box 2: Vendor Partners */}
          <div className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-[#e8a935] rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 shadow-xl group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#e8a935] bg-amber-950/80 border border-amber-800 px-3 py-1 rounded-full">
                  For Field Technicians & Crews
                </span>
                <Handshake size={20} className="text-[#e8a935]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Become a Vendor Partner
              </h3>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed mb-6">
                Join our certified national vendor network. Get steady, high-volume local work orders, reliable bi-weekly payment terms, and direct dispatch coordination.
              </p>
            </div>

            <div>
              <Link href="/become-vendor" className="btn-secondary w-full py-4 text-sm flex items-center justify-center gap-2 font-bold shadow-lg">
                <span>Apply for Vendor Network</span>
                <ArrowRight size={16} />
              </Link>
              <div className="text-center mt-3 text-[11px] text-slate-400">
                Onboarding review completed within 48 hours
              </div>
            </div>
          </div>
        </div>

        {/* Immediate Assistance Bar */}
        <div className="text-center">
          <p className="text-sm text-slate-300 flex items-center justify-center gap-2">
            <Phone size={15} className="text-[#e8a935]" />
            <span>Need immediate emergency dispatch? Call operations now: </span>
            <a href="tel:+12393104998" className="text-white font-bold hover:text-[#e8a935] underline decoration-[#e8a935] transition-colors">
              (239) 310-4998
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
