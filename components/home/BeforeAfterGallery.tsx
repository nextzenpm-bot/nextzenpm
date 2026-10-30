"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, Clock, MapPin, Tag } from "lucide-react";

interface ProjectItem {
  id: string;
  category: "all" | "trash-out" | "board-up" | "lawn-care" | "turnover";
  categoryLabel: string;
  title: string;
  location: string;
  turnaround: string;
  clientType: string;
  beforeDesc: string;
  afterDesc: string;
  results: string[];
}

const projects: ProjectItem[] = [
  {
    id: "proj-1",
    category: "trash-out",
    categoryLabel: "Trash-Out & Debris",
    title: "Full Interior Eviction Trash-Out & Deep Clean",
    location: "Atlanta, GA",
    turnaround: "24 Hours",
    clientType: "Institutional REO Servicer",
    beforeDesc: "Hazardous debris throughout 4-bedroom property, bio-waste, abandoned furniture, municipal fine pending.",
    afterDesc: "Broom-swept clean, 6 tons hauled to certified facility, sanitized, odor-treated, and lockbox secured.",
    results: ["6 Tons Debris Removed", "Zero Landfill Citations", "Turnkey Ready for Listing"],
  },
  {
    id: "proj-2",
    category: "board-up",
    categoryLabel: "Board-Up & Securing",
    title: "Emergency Security & Glazing Post-Vandalism",
    location: "Dallas, TX",
    turnaround: "3 Hours (Emergency Dispatch)",
    clientType: "Commercial Asset Portfolio",
    beforeDesc: "Vandalism incident with broken ground-floor display glass, exposed interior inventory, fire code hazard.",
    afterDesc: "HUD-compliant 5/8\" exterior plywood boarding installed, carriage bolted, coded deadbolt lockbox installed.",
    results: ["Arrived in 90 Minutes", "No Structural Fastener Damage", "100% Secure & Inspected"],
  },
  {
    id: "proj-3",
    category: "lawn-care",
    categoryLabel: "Lawn & Landscaping",
    title: "Severely Overgrown Acreage & Code Abatement",
    location: "Charlotte, NC",
    turnaround: "36 Hours",
    clientType: "SFR REIT Property Manager",
    beforeDesc: "3-foot high weed overgrowth, encroaching tree limbs touching roofline, 2 pending city ordinance citations.",
    afterDesc: "Precision bush-hog cut, perimeter hedge trimming, roof clearing, edge detailing, and weed abatement report filed.",
    results: ["City Citation Cancelled", "Curb Appeal Score 10/10", "Recurring Bi-Weekly Contract"],
  },
  {
    id: "proj-4",
    category: "turnover",
    categoryLabel: "Turnover & Handyman",
    title: "14-Day Fast-Track Rental Turnover Restoration",
    location: "Columbus, OH",
    turnaround: "48 Hours",
    clientType: "Regional Property Management Group",
    beforeDesc: "Tenant move-out damage, dry-wall holes, damaged vinyl planks, leaking faucet, and missing smoke detectors.",
    afterDesc: "Patch & color-matched paint, LVP plank replacement, faucet overhaul, code-compliant smoke/CO detector install.",
    results: ["Passed Municipal Rental Audit", "Tenant Leased in 5 Days", "Saved $3,200 vs General Contractor"],
  },
];

export default function BeforeAfterGallery() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [viewModes, setViewModes] = useState<Record<string, "after" | "before">>({
    "proj-1": "after",
    "proj-2": "after",
    "proj-3": "after",
    "proj-4": "after",
  });

  const toggleView = (id: string, mode: "before" | "after") => {
    setViewModes((prev) => ({ ...prev, [id]: mode }));
  };

  const filtered = activeTab === "all" ? projects : projects.filter((p) => p.category === activeTab);

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#1a4b8c]/10 text-[#1a4b8c] text-xs font-bold px-3.5 py-1.5 rounded-full mb-3 uppercase tracking-wider">
            <Sparkles size={13} className="text-[#e8a935]" />
            Project Portfolio & Results
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0f1f3d] tracking-tight mb-4">
            Before & After <span className="text-[#1a4b8c]">Transformations</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            Real field projects executed by NextZen certified crews. Switch between Before and After views to see the standard of care we bring to every property.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: "all", label: "All Projects" },
            { id: "trash-out", label: "Trash-Out & Cleanouts" },
            { id: "board-up", label: "Board-Up & Securing" },
            { id: "lawn-care", label: "Lawn & Landscaping" },
            { id: "turnover", label: "Turnover Repairs" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-xs md:text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-[#1a4b8c] text-white shadow-md shadow-blue-900/20"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filtered.map((proj) => {
            const currentMode = viewModes[proj.id] || "after";

            return (
              <div
                key={proj.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Visual Comparison Stage Card */}
                  <div className="relative p-6 bg-slate-900 text-white min-h-[220px] flex flex-col justify-between overflow-hidden">
                    {/* Background tint depends on mode */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-300 pointer-events-none ${
                        currentMode === "before"
                          ? "bg-gradient-to-br from-amber-950/70 via-slate-900 to-slate-950"
                          : "bg-gradient-to-br from-emerald-950/70 via-slate-900 to-slate-950"
                      }`}
                    />

                    {/* Top Row: Category & Interactive Toggle */}
                    <div className="relative z-10 flex items-center justify-between gap-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider bg-white/10 border border-white/20 px-3 py-1 rounded-full text-slate-200">
                        {proj.categoryLabel}
                      </span>

                      {/* Before / After Switcher */}
                      <div className="bg-slate-800/90 p-1 rounded-xl border border-slate-700 flex items-center gap-1 shadow-inner">
                        <button
                          onClick={() => toggleView(proj.id, "before")}
                          className={`text-xs font-bold px-3 py-1 rounded-lg transition-all ${
                            currentMode === "before"
                              ? "bg-amber-500 text-slate-950 shadow"
                              : "text-slate-400 hover:text-white"
                          }`}
                        >
                          BEFORE
                        </button>
                        <button
                          onClick={() => toggleView(proj.id, "after")}
                          className={`text-xs font-bold px-3 py-1 rounded-lg transition-all ${
                            currentMode === "after"
                              ? "bg-emerald-500 text-slate-950 shadow"
                              : "text-slate-400 hover:text-white"
                          }`}
                        >
                          AFTER
                        </button>
                      </div>
                    </div>

                    {/* Middle: Status Message & Description */}
                    <div className="relative z-10 my-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={`w-2.5 h-2.5 rounded-full ${
                            currentMode === "before" ? "bg-amber-400" : "bg-emerald-400 animate-pulse"
                          }`}
                        />
                        <span className="text-xs uppercase tracking-wider font-extrabold text-slate-300">
                          {currentMode === "before" ? "Initial Property Condition:" : "Verified Turnkey Result:"}
                        </span>
                      </div>
                      <p className="text-sm md:text-base text-slate-100 leading-relaxed font-medium">
                        {currentMode === "before" ? proj.beforeDesc : proj.afterDesc}
                      </p>
                    </div>

                    {/* Bottom Metadata within display */}
                    <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10 text-xs text-slate-300">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} className="text-[#e8a935]" />
                        {proj.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={13} className="text-[#44DDF1]" />
                        Turnaround: {proj.turnaround}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#0f1f3d] mb-3 leading-snug">
                      {proj.title}
                    </h3>

                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-5 font-semibold">
                      <Tag size={12} className="text-[#1a4b8c]" />
                      <span>Client Category: {proj.clientType}</span>
                    </div>

                    <div className="space-y-2 mb-6">
                      {proj.results.map((res, rIdx) => (
                        <div key={rIdx} className="flex items-center gap-2 text-xs md:text-sm text-slate-700 font-medium">
                          <CheckCircle2 size={15} className="text-emerald-600 flex-shrink-0" />
                          <span>{res}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href="/our-work"
                    className="btn-secondary w-full text-xs py-2.5 flex items-center justify-center gap-2"
                  >
                    View Project Case Study
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Link href="/our-work" className="btn-primary text-sm py-4 px-8 inline-flex items-center gap-2">
            View Complete Gallery & Case Studies
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
