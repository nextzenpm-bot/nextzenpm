import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Target, Eye, Users, Award, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about NextZen Property Maintenance — our company history, mission, values, and commitment to professional service standards.",
};

const values = [
  { icon: Target, title: "Our Mission", desc: "To deliver consistent, high-quality property maintenance and preservation services that exceed industry standards and build lasting partnerships." },
  { icon: Eye, title: "Our Vision", desc: "To be the most trusted property service partner for asset managers and property managers nationwide." },
  { icon: Award, title: "Our Standard", desc: "Every job is executed with precision, fully documented, and delivered on time — because your assets deserve nothing less." },
];

const team = [
  { initials: "JD", name: "John Davis", role: "Founder & CEO", desc: "15+ years in property preservation and asset management field services." },
  { initials: "ML", name: "Maria Lopez", role: "Operations Director", desc: "Expert in vendor coordination and large-scale property maintenance programs." },
  { initials: "TR", name: "Tom Richards", role: "Field Supervisor", desc: "Certified property preservation specialist with HUD compliance expertise." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-36 pb-20">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-[#e8a935] text-xs font-bold uppercase tracking-widest mb-4">
              <span className="w-6 h-px bg-[#e8a935]" />
              About NextZen
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              A Team Built on{" "}
              <span className="text-gradient-gold">Trust & Excellence</span>
            </h1>
            <p className="text-blue-100/80 text-xl leading-relaxed max-w-2xl">
              Since 2014, NextZen Property Maintenance has been the reliable partner that property managers, asset managers, and vendor coordinators count on for professional results.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-[#2e7fd4] text-xs font-bold uppercase tracking-widest mb-4">
                <span className="w-6 h-px bg-[#2e7fd4]" />
                Who We Are
              </div>
              <h2 className="text-4xl font-bold text-[#0f1f3d] mb-5 leading-tight">
                More Than a Maintenance Company
              </h2>
              <p className="text-slate-500 leading-relaxed mb-4">
                NextZen Property Maintenance was founded with a singular purpose: to create a property services company that truly understands the needs of the asset management industry. We know that your properties represent significant investments, and we treat every work order with the urgency and professionalism it deserves.
              </p>
              <p className="text-slate-500 leading-relaxed mb-6">
                Our team is comprised of certified property preservation specialists, experienced maintenance professionals, and dedicated field supervisors — all committed to delivering consistent, compliant, and fully documented results.
              </p>
              {[
                "HUD & FHA compliant processes",
                "Fully licensed and insured operations",
                "Background-checked field professionals",
                "Real-time reporting and photo documentation",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 mb-2.5">
                  <CheckCircle size={16} className="text-[#2e7fd4] flex-shrink-0" />
                  <span className="text-slate-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-[#0f1f3d] to-[#1a4b8c] rounded-3xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { num: "2014", label: "Founded" },
                  { num: "500+", label: "Projects" },
                  { num: "50+", label: "Service Areas" },
                  { num: "98%", label: "Satisfaction" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-3xl font-bold text-[#e8a935]">{s.num}</p>
                    <p className="text-xs text-blue-200/70 font-medium mt-1 uppercase tracking-wide">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/10 pt-6">
                <p className="text-sm text-blue-100/80 leading-relaxed">
                  &ldquo;We built NextZen because the industry needed a vendor partner that could be trusted to deliver quality results, every single time — without cutting corners.&rdquo;
                </p>
                <p className="text-xs text-[#e8a935] font-semibold mt-3">— John Davis, Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission/Vision/Standards */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-wide">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#0f1f3d] mb-4">Our Core Principles</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">The values that guide every decision and every work order we fulfill.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2e7fd4]/10 to-[#1a4b8c]/10 flex items-center justify-center mb-5">
                  <v.icon size={22} className="text-[#2e7fd4]" />
                </div>
                <h3 className="font-bold text-[#0f1f3d] text-xl mb-3">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-[#2e7fd4] text-xs font-bold uppercase tracking-widest mb-4">
              <span className="w-6 h-px bg-[#2e7fd4]" />
              Our Leadership
            </div>
            <h2 className="text-4xl font-bold text-[#0f1f3d] mb-4">Meet the Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-[#f8fafc] rounded-2xl p-7 border border-slate-100 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2e7fd4] to-[#0f1f3d] flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {member.initials}
                </div>
                <h3 className="font-bold text-[#0f1f3d] text-lg">{member.name}</h3>
                <p className="text-[#2e7fd4] text-sm font-semibold mb-3">{member.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0f1f3d] to-[#1a4b8c]">
        <div className="container-wide text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Work With Us?</h2>
          <p className="text-blue-200/70 text-lg mb-8 max-w-xl mx-auto">
            Contact us today to discuss your property maintenance needs or vendor partnership opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold text-base py-4 px-8">
              Get in Touch <ArrowRight size={16} />
            </Link>
            <Link href="/become-vendor" className="btn-secondary text-base py-4 px-8">
              Become a Vendor
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
