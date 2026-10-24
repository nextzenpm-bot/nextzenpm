"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, PhoneCall, ArrowRight } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: "Operations & Turnaround",
    question: "What response and completion times do you guarantee for work orders?",
    answer:
      "We operate under strict Service Level Agreements (SLAs). Emergency work orders (such as break-ins, active leaks, or open roof hazards) receive dispatch within 2 to 4 hours. Standard work orders (trash-outs, turnover repairs, initial preservation, and inspections) are completed within 24 to 48 hours of dispatch acknowledgment.",
  },
  {
    category: "Compliance & QA",
    question: "How do you handle before, during, and after photo documentation?",
    answer:
      "Every work order requires standardized photographic proof. Our field crews take high-resolution, GPS-verified, and cryptographically timestamped photos of every task from identical camera perspectives. Our in-house QC audit team reviews every image against client-specific and investor (HUD/Fannie/Freddie) guidelines prior to submitting the final completion package.",
  },
  {
    category: "Vetting & Insurance",
    question: "Are all NextZen field technicians licensed, insured, and background checked?",
    answer:
      "Yes, 100%. NextZen carries $2M in General Liability insurance and comprehensive Worker's Compensation. Every crew and subcontracted partner in our network undergoes rigorous identity verification, criminal background screening, trade licensing checks, and ongoing performance audits.",
  },
  {
    category: "Technology & Software",
    question: "How do you integrate with our existing work order management platforms?",
    answer:
      "We support direct API connections and standard workflow integration with major industry platforms including Pruvan, PropertyPres Wizard (PPW), EZInspections, AppFolio, Buildium, and Yardi. You can also assign jobs directly via our secure Client Portal or dedicated dispatch email.",
  },
  {
    category: "Pricing & Invoicing",
    question: "How does your pricing structure work? Are there hidden trip fees?",
    answer:
      "We believe in complete pricing transparency. We provide standardized, unit-based flat-rate pricing matrices per trade (e.g., cubic yard debris rates, per-window board-up fees, lock change tiers). We never charge surprise travel or assessment fees within our primary service territories.",
  },
  {
    category: "Onboarding & Scale",
    question: "How quickly can you onboard our property management portfolio?",
    answer:
      "Institutional onboarding typically takes under 48 hours. A dedicated Account Executive will map your service areas, configure your platform integrations, establish your custom billing profile, and assign primary dispatch leads to ensure seamless day-one execution.",
  },
  {
    category: "Vendor Network",
    question: "How can local contractors apply to become a certified NextZen vendor partner?",
    answer:
      "Skilled trade contractors (preservation, cleaning, landscaping, handyman, roofing, HVAC) can apply directly through our online Become a Vendor portal. We offer fast 14-day net terms, consistent high-volume job pipelines, and dedicated vendor coordinator support.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Support Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 bg-[#1a4b8c]/10 text-[#1a4b8c] text-xs font-bold px-3.5 py-1.5 rounded-full mb-3 uppercase tracking-wider">
              <HelpCircle size={14} className="text-[#1a4b8c]" />
              Got Questions?
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0f1f3d] tracking-tight leading-tight mb-4">
              Frequently Asked <span className="text-[#1a4b8c]">Questions</span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-8">
              Find transparent answers about our turnaround guarantees, photo compliance audits, insurance coverage, and platform integrations.
            </p>

            {/* Support Callout Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-[#0f1f3d] text-base mb-2">
                Still have a specific question?
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-4">
                Our national operations team is ready to review your portfolio specs and discuss custom SLA requirements.
              </p>
              <div className="space-y-2.5">
                <a
                  href="tel:+11234567890"
                  className="btn-primary w-full text-xs py-3 flex items-center justify-center gap-2"
                >
                  <PhoneCall size={14} />
                  Speak to Operations: (123) 456-7890
                </a>
                <Link
                  href="/contact"
                  className="btn-secondary w-full text-xs py-3 flex items-center justify-center gap-2"
                >
                  Send Inquiry Message
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "border-[#2e7fd4] bg-slate-50/50 shadow-sm"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-5 md:p-6 flex items-start justify-between gap-4 focus:outline-none"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#1a4b8c] bg-blue-100/60 px-2 py-0.5 rounded-full mb-2 inline-block">
                        {faq.category}
                      </span>
                      <h3 className="font-bold text-slate-900 text-sm md:text-base leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? "bg-[#1a4b8c] text-white rotate-180"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <ChevronDown size={16} />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 md:px-6 pb-6 pt-1 text-slate-600 text-xs md:text-sm leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
