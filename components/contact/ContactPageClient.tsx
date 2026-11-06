"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Loader2, AlertCircle } from "lucide-react";

const inquiryTypes = [
  "Service Inquiry",
  "Vendor Inquiry",
  "Business Contact",
  "General Question",
  "Other",
];

export default function ContactPageClient() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    message: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("status") === "success") {
        setSubmitted(true);
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    const form = e.currentTarget;
    const bodyData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: bodyData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.message || "Failed to submit form. Please try again.");
      }
    } catch {
      // In case client fetch encounters network issues, fallback to native submit
      form.submit();
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero Banner with Property Image */}
      <section className="relative pt-36 pb-20 overflow-hidden border-b border-slate-800/20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banner-contact.jpg"
            alt="NextZen Property Maintenance Contact & Operations Office"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center"
          />
          {/* Light overlay allowing the warm, bright clubhouse and entrance to shine */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/45 via-slate-950/25 to-slate-950/50" />
        </div>

        <div className="container-wide text-center relative z-10">
          <div
            className="inline-flex items-center gap-2 text-[#e8a935] text-xs font-bold uppercase tracking-widest mb-4"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,0.9)" }}
          >
            <span className="w-6 h-px bg-[#e8a935]" />
            Get In Touch
            <span className="w-6 h-px bg-[#e8a935]" />
          </div>
          <h1
            className="text-5xl md:text-6xl font-bold text-white mb-5 leading-tight"
            style={{ textShadow: "0 3px 14px rgba(0,0,0,0.7), 0 1px 4px rgba(0,0,0,0.9)" }}
          >
            Contact Us
          </h1>
          <p
            className="text-white text-xl leading-relaxed max-w-xl mx-auto font-medium"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,0.9)" }}
          >
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
                  className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-start gap-4 hover:shadow-md hover:border-[#44DDF1]/30 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#44DDF1]/10 to-[#1a4b8c]/10 flex items-center justify-center flex-shrink-0 group-hover:from-[#44DDF1]/20 group-hover:to-[#1a4b8c]/20 transition-all duration-300">
                    <item.icon size={18} className="text-[#44DDF1]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#44DDF1] uppercase tracking-widest mb-0.5">{item.title}</p>
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
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4 text-emerald-600">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0f1f3d] mb-2">Message Sent!</h3>
                    <p className="text-slate-500 max-w-sm mb-6 leading-relaxed text-sm">
                      Thank you for reaching out. Your message has been sent to our team and we&apos;ll review your inquiry and get back to you within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          company: "",
                          inquiryType: "",
                          message: "",
                        });
                      }}
                      className="btn-secondary text-xs py-2 px-5"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-[#0f1f3d] mb-2">Send Us a Message</h2>
                    <p className="text-slate-500 text-sm mb-7">Fill out the form below and we&apos;ll get back to you promptly.</p>

                    <form
                      action="https://api.web3forms.com/submit"
                      method="POST"
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-5"
                    >
                      {/* Web3Forms Configuration */}
                      <input type="hidden" name="access_key" value="4fa7e7c5-527b-4775-bf9f-294757fdb030" />
                      <input type="hidden" name="from_name" value="NextZen Property Maintenance Website" />
                      <input
                        type="hidden"
                        name="subject"
                        value={`New NextZen Inquiry: ${formData.inquiryType || "General"} from ${formData.name || "Website Visitor"}`}
                      />
                      <input type="hidden" name="redirect" value="https://nextzenpm.vercel.app/contact?status=success" />
                      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                      {errorMessage && (
                        <div className="flex items-center gap-2 p-3.5 bg-red-50 border border-red-200 rounded-xl text-red-600 text-xs font-medium">
                          <AlertCircle size={16} className="flex-shrink-0" />
                          <span>{errorMessage}</span>
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold text-[#0f1f3d] uppercase tracking-wide mb-1.5">Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0f1f3d] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#44DDF1]/30 focus:border-[#44DDF1] transition-all"
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#0f1f3d] uppercase tracking-wide mb-1.5">Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0f1f3d] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#44DDF1]/30 focus:border-[#44DDF1] transition-all"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold text-[#0f1f3d] uppercase tracking-wide mb-1.5">Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0f1f3d] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#44DDF1]/30 focus:border-[#44DDF1] transition-all"
                            placeholder="(239) 310-4998"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#0f1f3d] uppercase tracking-wide mb-1.5">Company Name</label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0f1f3d] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#44DDF1]/30 focus:border-[#44DDF1] transition-all"
                            placeholder="Your Company"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#0f1f3d] uppercase tracking-wide mb-1.5">Inquiry Type *</label>
                        <select
                          name="inquiry_type"
                          required
                          value={formData.inquiryType}
                          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0f1f3d] focus:outline-none focus:ring-2 focus:ring-[#44DDF1]/30 focus:border-[#44DDF1] transition-all bg-white"
                        >
                          <option value="">Select inquiry type</option>
                          {inquiryTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#0f1f3d] uppercase tracking-wide mb-1.5">Message *</label>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0f1f3d] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#44DDF1]/30 focus:border-[#44DDF1] transition-all resize-none"
                          placeholder="Please describe your needs, property type, location, and any other relevant details..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary self-start inline-flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <>
                            <span>Sending...</span>
                            <Loader2 size={15} className="animate-spin" />
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send size={15} />
                          </>
                        )}
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
