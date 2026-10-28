"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const inquiryTypes = [
  "Service Inquiry",
  "Vendor Inquiry",
  "Business Contact",
  "General Question",
  "Other",
];

export default function ContactPageClient() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-36 pb-20">
        <div className="container-wide text-center">
          <div className="inline-flex items-center gap-2 text-[#e8a935] text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-6 h-px bg-[#e8a935]" />
            Get In Touch
            <span className="w-6 h-px bg-[#e8a935]" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
            Contact Us
          </h1>
          <p className="text-blue-100/80 text-xl leading-relaxed max-w-xl mx-auto">
            Have a question or ready to discuss a service? We&apos;re here to help — reach out and we&apos;ll respond promptly.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="flex flex-col gap-5">
              {[
                {
                  icon: Phone,
                  title: "Phone",
                  content: "(239) 310-4998",
                  sub: "Mon – Sat, 8AM – 6PM",
                  href: "tel:+12393104998",
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: "info@nextzenpm.com",
                  sub: "We respond within 24 hours",
                  href: "mailto:info@nextzenpm.com",
                },
                {
                  icon: MapPin,
                  title: "Office",
                  content: "5100 S CLEVELAND AVE SUITE 202",
                  sub: "FORT MYERS, FL 33907",
                  href: "https://maps.google.com/?q=5100+S+CLEVELAND+AVE+SUITE+202+FORT+MYERS+FL+33907",
                },
                {
                  icon: Clock,
                  title: "Business Hours",
                  content: "Monday – Saturday",
                  sub: "8:00 AM – 6:00 PM EST",
                  href: "#",
                },
              ].map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-start gap-4 hover:shadow-md hover:border-[#2e7fd4]/30 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#2e7fd4]/10 to-[#1a4b8c]/10 flex items-center justify-center flex-shrink-0 group-hover:from-[#2e7fd4]/20 group-hover:to-[#1a4b8c]/20 transition-all duration-300">
                    <item.icon size={18} className="text-[#2e7fd4]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#2e7fd4] uppercase tracking-widest mb-0.5">{item.title}</p>
                    <p className="font-semibold text-[#0f1f3d] text-sm">{item.content}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{item.sub}</p>
                  </div>
                </a>
              ))}

              <div className="bg-gradient-to-br from-[#0f1f3d] to-[#1a4b8c] rounded-2xl p-5 text-white">
                <p className="text-xs font-bold text-[#e8a935] uppercase tracking-widest mb-2">Vendor Inquiries</p>
                <p className="text-sm text-blue-100/80 leading-relaxed">
                  If you&apos;re a contractor looking to join our vendor network, please indicate this in your inquiry type and we&apos;ll connect you with our vendor partnerships team.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <CheckCircle size={28} className="text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0f1f3d] mb-2">Message Sent!</h3>
                    <p className="text-slate-500 max-w-sm">
                      Thank you for reaching out. We&apos;ll review your inquiry and get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-[#0f1f3d] mb-2">Send Us a Message</h2>
                    <p className="text-slate-500 text-sm mb-7">Fill out the form below and we&apos;ll get back to you promptly.</p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold text-[#0f1f3d] uppercase tracking-wide mb-1.5">Full Name *</label>
                          <input type="text" required value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0f1f3d] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2e7fd4]/30 focus:border-[#2e7fd4] transition-all"
                            placeholder="John Smith" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#0f1f3d] uppercase tracking-wide mb-1.5">Email Address *</label>
                          <input type="email" required value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0f1f3d] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2e7fd4]/30 focus:border-[#2e7fd4] transition-all"
                            placeholder="john@company.com" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold text-[#0f1f3d] uppercase tracking-wide mb-1.5">Phone Number</label>
                          <input type="tel" value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0f1f3d] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2e7fd4]/30 focus:border-[#2e7fd4] transition-all"
                            placeholder="(239) 310-4998" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#0f1f3d] uppercase tracking-wide mb-1.5">Company Name</label>
                          <input type="text" value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0f1f3d] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2e7fd4]/30 focus:border-[#2e7fd4] transition-all"
                            placeholder="Your Company" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#0f1f3d] uppercase tracking-wide mb-1.5">Inquiry Type *</label>
                        <select required value={formData.inquiryType}
                          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0f1f3d] focus:outline-none focus:ring-2 focus:ring-[#2e7fd4]/30 focus:border-[#2e7fd4] transition-all bg-white">
                          <option value="">Select inquiry type</option>
                          {inquiryTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#0f1f3d] uppercase tracking-wide mb-1.5">Message *</label>
                        <textarea required rows={5} value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0f1f3d] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2e7fd4]/30 focus:border-[#2e7fd4] transition-all resize-none"
                          placeholder="Please describe your needs, property type, location, and any other relevant details..." />
                      </div>

                      <button type="submit" className="btn-primary self-start">
                        Send Message
                        <Send size={15} />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
