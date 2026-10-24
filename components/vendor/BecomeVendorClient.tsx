"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, ArrowRight, Wrench, Leaf, Sparkles, Send, TrendingUp, DollarSign } from "lucide-react";

const serviceTypes = [
  "Property Preservation",
  "Property Maintenance",
  "Cleaning Services",
  "Lawn Care & Landscaping",
  "Handyman Services",
  "Lock Change & Board-Up",
  "Trash-Out & Debris Removal",
  "Winterization",
  "Photo Inspection",
  "Multiple Services",
  "Other",
];

export default function BecomeVendorClient() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceTypes: [] as string[],
    serviceArea: "",
    licensed: "",
    message: "",
  });

  const toggleService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      serviceTypes: prev.serviceTypes.includes(service)
        ? prev.serviceTypes.filter((s) => s !== service)
        : [...prev.serviceTypes, service],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-36 pb-20">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-[#e8a935] text-xs font-bold uppercase tracking-widest mb-4">
              <span className="w-6 h-px bg-[#e8a935]" />
              Join Our Network
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Become a{" "}
              <span className="text-gradient-gold">Vendor Partner</span>
            </h1>
            <p className="text-blue-100/80 text-xl leading-relaxed max-w-2xl">
              Join our vendor network and gain access to consistent work orders, reliable payment, and a professional partnership that helps grow your business.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Strip */}
      <section className="py-14 bg-[#0f1f3d]">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: Wrench, title: "Consistent Work Orders", desc: "Access a steady pipeline of work orders from property managers and asset managers across our portfolio." },
              { icon: DollarSign, title: "Reliable Payment", desc: "We value our vendor partners and are committed to fair, timely payment for all completed work." },
              { icon: TrendingUp, title: "Business Growth", desc: "Grow your service business with a professional partner that supports your long-term success." },
            ].map((b) => (
              <div key={b.title} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="w-10 h-10 rounded-xl bg-[#2e7fd4]/20 flex items-center justify-center flex-shrink-0">
                  <b.icon size={18} className="text-[#2e7fd4]" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{b.title}</h3>
                  <p className="text-blue-200/60 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-14 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-[#2e7fd4] text-xs font-bold uppercase tracking-widest mb-4">
                <span className="w-6 h-px bg-[#2e7fd4]" />
                What We Look For
              </div>
              <h2 className="text-3xl font-bold text-[#0f1f3d] mb-5">Vendor Requirements</h2>
              <p className="text-slate-500 mb-6 leading-relaxed">
                We partner with qualified contractors who share our commitment to professionalism, quality, and reliability.
              </p>
              {[
                "Licensed and insured (General Liability required)",
                "Background checks for all field personnel",
                "Ability to accept work orders through our system",
                "Commitment to quality and photo documentation",
                "Timely completion of assigned work orders",
                "Professional communication standards",
                "Experience in relevant service areas",
                "Willingness to adhere to vendor standards",
              ].map((req) => (
                <div key={req} className="flex items-start gap-2.5 mb-2.5">
                  <CheckCircle size={16} className="text-[#2e7fd4] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm">{req}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#f8fafc] rounded-2xl p-7 border border-slate-100">
              <h3 className="font-bold text-[#0f1f3d] text-xl mb-4">Services We Need Vendors For</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { icon: Wrench, name: "Property Maintenance" },
                  { icon: Sparkles, name: "Cleaning" },
                  { icon: Leaf, name: "Landscaping" },
                  { icon: CheckCircle, name: "Inspections" },
                  { icon: Wrench, name: "Handyman" },
                  { icon: CheckCircle, name: "Winterization" },
                  { icon: CheckCircle, name: "Board-Up" },
                  { icon: CheckCircle, name: "Trash-Out" },
                ].map((s) => (
                  <div key={s.name} className="flex items-center gap-2 bg-white rounded-lg px-3 py-2.5 border border-slate-100">
                    <s.icon size={14} className="text-[#2e7fd4]" />
                    <span className="text-sm font-medium text-[#0f1f3d]">{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-wide max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0f1f3d] mb-3">Vendor Application</h2>
            <p className="text-slate-500">Fill out the form below and our partnerships team will reach out within 2 business days.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <CheckCircle size={28} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-[#0f1f3d] mb-2">Application Submitted!</h3>
                <p className="text-slate-500 max-w-sm">
                  Thank you for your interest. Our team will review your application and contact you within 2 business days.
                </p>
                <Link href="/" className="btn-primary mt-6 text-sm py-3 px-6">
                  Back to Home <ArrowRight size={14} />
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#0f1f3d] uppercase tracking-wide mb-1.5">Full Name *</label>
                    <input type="text" required value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2e7fd4]/30 focus:border-[#2e7fd4] transition-all"
                      placeholder="John Smith" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#0f1f3d] uppercase tracking-wide mb-1.5">Email *</label>
                    <input type="email" required value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2e7fd4]/30 focus:border-[#2e7fd4] transition-all"
                      placeholder="john@company.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#0f1f3d] uppercase tracking-wide mb-1.5">Phone *</label>
                    <input type="tel" required value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2e7fd4]/30 focus:border-[#2e7fd4] transition-all"
                      placeholder="(123) 456-7890" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#0f1f3d] uppercase tracking-wide mb-1.5">Company Name *</label>
                    <input type="text" required value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2e7fd4]/30 focus:border-[#2e7fd4] transition-all"
                      placeholder="Your Business Name" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0f1f3d] uppercase tracking-wide mb-2">Services You Provide *</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {serviceTypes.map((s) => (
                      <button key={s} type="button" onClick={() => toggleService(s)}
                        className={`text-xs font-medium px-3 py-2.5 rounded-lg border transition-all duration-200 text-left ${
                          formData.serviceTypes.includes(s)
                            ? "bg-[#2e7fd4] text-white border-[#2e7fd4]"
                            : "bg-white text-slate-600 border-slate-200 hover:border-[#2e7fd4]/50"
                        }`}>
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#0f1f3d] uppercase tracking-wide mb-1.5">Service Area</label>
                    <input type="text" value={formData.serviceArea}
                      onChange={(e) => setFormData({ ...formData, serviceArea: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2e7fd4]/30 focus:border-[#2e7fd4] transition-all"
                      placeholder="City, State or ZIP codes" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#0f1f3d] uppercase tracking-wide mb-1.5">Licensed & Insured?</label>
                    <select value={formData.licensed}
                      onChange={(e) => setFormData({ ...formData, licensed: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2e7fd4]/30 focus:border-[#2e7fd4] transition-all bg-white">
                      <option value="">Select...</option>
                      <option>Yes, fully licensed and insured</option>
                      <option>Licensed, working on insurance</option>
                      <option>In progress</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0f1f3d] uppercase tracking-wide mb-1.5">Additional Information</label>
                  <textarea rows={4} value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2e7fd4]/30 focus:border-[#2e7fd4] transition-all resize-none"
                    placeholder="Tell us about your experience, team size, equipment, and any relevant certifications..." />
                </div>

                <button type="submit" className="btn-gold self-start">
                  Submit Application
                  <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
