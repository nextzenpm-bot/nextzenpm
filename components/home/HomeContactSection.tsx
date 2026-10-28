"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ShieldCheck } from "lucide-react";

const serviceOptions = [
  "Property Preservation & Securing",
  "Turnover Maintenance & Repairs",
  "Cleaning & Move-Out Deep Clean",
  "Lawn Care & Landscaping",
  "Handyman & General Repairs",
  "Lock Change & Board-Up",
  "Trash-Out & Debris Removal",
  "Winterization / De-Winterization",
  "Photo Inspection / PCR Report",
  "Enterprise Portfolio Service",
];

export default function HomeContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: serviceOptions[0],
    propertyAddress: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact-section" className="py-20 bg-slate-50 border-t border-slate-200 relative">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1a4b8c]/10 text-[#1a4b8c] text-xs font-bold px-3.5 py-1.5 rounded-full mb-3 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#1a4b8c]" />
            Direct Communication Desk
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0f1f3d] tracking-tight mb-4">
            Contact NextZen <span className="text-[#1a4b8c]">Operations</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            Submit a work order request, inquire about regional portfolio pricing, or speak directly with our national dispatch coordinators.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Left Column: Direct Contact Info & SLA Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-[#0f1f3d] mb-4">
                We're Here When You Need Boots on the Ground
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-8">
                Unlike outsourced customer centers, our operations desk is staffed by experienced property preservation specialists who understand strict investor guidelines and urgency.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4 mb-8">
                <a
                  href="tel:+12393104998"
                  className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-[#2e7fd4] transition-all group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1a4b8c] group-hover:bg-[#1a4b8c] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-colors">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                      National Dispatch Hotline
                    </div>
                    <div className="text-base font-bold text-[#0f1f3d] group-hover:text-[#1a4b8c]">
                      (239) 310-4998
                    </div>
                    <div className="text-[11px] text-slate-500">24/7 Live Emergency Line</div>
                  </div>
                </a>

                <a
                  href="mailto:info@nextzenpm.com"
                  className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-[#2e7fd4] transition-all group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1a4b8c] group-hover:bg-[#1a4b8c] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-colors">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                      Work Orders & Inquiries
                    </div>
                    <div className="text-base font-bold text-[#0f1f3d] group-hover:text-[#1a4b8c]">
                      info@nextzenpm.com
                    </div>
                    <div className="text-[11px] text-slate-500">Fast 15-minute response SLA</div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1a4b8c] flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                      Corporate Headquarters
                    </div>
                    <div className="text-sm font-bold text-[#0f1f3d]">
                      5100 S CLEVELAND AVE SUITE 202
                    </div>
                    <div className="text-[11px] text-slate-500">FORT MYERS, FL 33907</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1a4b8c] flex items-center justify-center flex-shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                      Operating Hours
                    </div>
                    <div className="text-sm font-bold text-[#0f1f3d]">
                      Mon – Sat: 7:00 AM – 8:00 PM EST
                    </div>
                    <div className="text-[11px] text-emerald-600 font-semibold">
                      *Emergency crews on standby 24/7/365
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fast Assurance badge */}
            <div className="bg-blue-900/10 border border-blue-200/80 rounded-2xl p-4 flex items-center gap-3">
              <ShieldCheck size={24} className="text-[#1a4b8c] flex-shrink-0" />
              <p className="text-xs text-slate-700 leading-snug">
                <strong>Zero Obligation:</strong> Submit your property requirements and receive a comprehensive, itemized proposal within the same business day.
              </p>
            </div>
          </div>

          {/* Right Column: Embedded Interactive Intake Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0f1f3d] mb-2">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Our regional dispatch team has logged your inquiry. An account specialist will contact you shortly with scope verification.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        company: "",
                        email: "",
                        phone: "",
                        service: serviceOptions[0],
                        propertyAddress: "",
                        message: "",
                      });
                    }}
                    className="btn-secondary text-xs py-2.5 px-6"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-100 pb-4 mb-2">
                    <h3 className="text-xl font-bold text-[#0f1f3d]">
                      Request Service or Information
                    </h3>
                    <p className="text-xs text-slate-500">
                      Fill out this quick form and our operations desk will route your inquiry immediately.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#2e7fd4]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Company / Agency Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Apex Property Management"
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#2e7fd4]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jdoe@company.com"
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#2e7fd4]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(555) 123-4567"
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#2e7fd4]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Primary Service Required
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#2e7fd4]"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Target Property Address or City/State
                      </label>
                      <input
                        type="text"
                        value={formData.propertyAddress}
                        onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
                        placeholder="e.g. 124 Main St, Atlanta GA"
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#2e7fd4]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Scope Details / Special Instructions
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe work scope, urgency level, or number of units in portfolio..."
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#2e7fd4]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full py-4 text-sm font-bold flex items-center justify-center gap-2 shadow-lg"
                  >
                    {loading ? (
                      <span>Submitting Request...</span>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Submit Work Order Inquiry</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    🔒 We respect your privacy. No spam. Your request is routed directly to licensed field coordinators.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
