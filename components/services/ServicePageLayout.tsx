import Link from "next/link";
import { LucideIcon, ArrowRight, CheckCircle, Phone } from "lucide-react";

interface ServicePageLayoutProps {
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  benefits: { title: string; desc: string }[];
  relatedServices: { name: string; href: string }[];
}

export default function ServicePageLayout({
  icon: Icon,
  iconColor,
  iconBg,
  title,
  tagline,
  description,
  features,
  benefits,
  relatedServices,
}: ServicePageLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-36 pb-20">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
            <div className={`w-16 h-16 rounded-2xl ${iconBg} flex items-center justify-center flex-shrink-0 shadow-xl`}>
              <Icon size={28} className={iconColor} />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-[#e8a935] text-xs font-bold uppercase tracking-widest mb-2">
                <span className="w-6 h-px bg-[#e8a935]" />
                Our Services
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {title}
              </h1>
            </div>
          </div>
          <p className="text-blue-100/80 text-xl leading-relaxed max-w-2xl mb-8">
            {tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-gold text-base py-3.5 px-7">
              Request This Service <ArrowRight size={16} />
            </Link>
            <a href="tel:+12393104998" className="btn-secondary text-base py-3.5 px-7">
              <Phone size={15} /> Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 text-[#2e7fd4] text-xs font-bold uppercase tracking-widest mb-4">
                <span className="w-6 h-px bg-[#2e7fd4]" />
                Service Overview
              </div>
              <h2 className="text-3xl font-bold text-[#0f1f3d] mb-5">What We Provide</h2>
              <div className="text-slate-500 leading-relaxed space-y-4 text-base">
                {description.split("\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Features */}
              <div className="mt-8">
                <h3 className="font-bold text-[#0f1f3d] text-xl mb-5">What&apos;s Included</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2.5">
                      <CheckCircle size={16} className="text-[#2e7fd4] flex-shrink-0" />
                      <span className="text-slate-700 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-5">
              {/* Quick CTA */}
              <div className="bg-gradient-to-br from-[#0f1f3d] to-[#1a4b8c] rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-3">Request This Service</h3>
                <p className="text-blue-200/70 text-sm mb-5 leading-relaxed">
                  Ready to get started? Contact us for a fast quote and scheduling.
                </p>
                <Link href="/contact" className="btn-gold text-sm py-2.5 w-full justify-center block text-center">
                  Get a Free Quote
                </Link>
                <a
                  href="tel:+12393104998"
                  className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors duration-200"
                >
                  <Phone size={13} /> (239) 310-4998
                </a>
              </div>

              {/* Related Services */}
              <div className="bg-[#f8fafc] rounded-2xl p-6 border border-slate-100">
                <h3 className="font-bold text-[#0f1f3d] text-base mb-4">Related Services</h3>
                <div className="flex flex-col gap-2">
                  {relatedServices.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#2e7fd4] font-medium transition-colors duration-200 py-1"
                    >
                      <ArrowRight size={13} className="text-[#2e7fd4]" />
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      {benefits.length > 0 && (
        <section className="section-padding bg-[#f8fafc]">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0f1f3d] mb-3">Key Benefits</h2>
              <p className="text-slate-500">Why property professionals choose our {title.toLowerCase()} services.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map((b) => (
                <div key={b.title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className="w-2 h-8 rounded-full bg-gradient-to-b from-[#2e7fd4] to-[#0f1f3d] mb-4" />
                  <h3 className="font-bold text-[#0f1f3d] mb-2">{b.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-[#1a4b8c] to-[#2e7fd4]">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Ready to Schedule {title}?
            </h2>
            <p className="text-blue-100/80 mt-1">Fast response, professional results, full documentation.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link href="/contact" className="btn-gold text-sm py-3 px-6 whitespace-nowrap">
              Request a Quote <ArrowRight size={14} />
            </Link>
            <Link href="/services" className="btn-secondary text-sm py-3 px-6 whitespace-nowrap">
              All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
