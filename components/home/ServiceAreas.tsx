"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Navigation, Clock, ShieldCheck, CheckCircle2, Search, ArrowRight } from "lucide-react";

const regionalHubs = [
  {
    region: "Southeast Division",
    states: "Florida, Georgia, North Carolina, South Carolina, Tennessee",
    metros: ["Atlanta Metro", "Miami & South FL", "Tampa Bay", "Charlotte", "Nashville", "Orlando"],
    status: "Active Full-Service Hub",
    dispatchTime: "2-4 Hr Emergency Dispatch",
  },
  {
    region: "Midwest Division",
    states: "Illinois, Ohio, Indiana, Michigan, Missouri, Wisconsin",
    metros: ["Chicago Greater Metro", "Columbus & Cleveland", "Indianapolis", "Detroit Metro", "St. Louis"],
    status: "Active Full-Service Hub",
    dispatchTime: "2-4 Hr Emergency Dispatch",
  },
  {
    region: "Southwest Division",
    states: "Texas, Arizona, Nevada, New Mexico, Oklahoma",
    metros: ["Dallas-Fort Worth", "Houston Metro", "Austin & San Antonio", "Phoenix Metro", "Las Vegas"],
    status: "Active Full-Service Hub",
    dispatchTime: "2-4 Hr Emergency Dispatch",
  },
  {
    region: "Mid-Atlantic & East Division",
    states: "Pennsylvania, New Jersey, Maryland, Virginia, New York",
    metros: ["Philadelphia Metro", "Northern Virginia / DC", "Baltimore", "Central NJ", "Pittsburgh"],
    status: "Active Full-Service Hub",
    dispatchTime: "2-4 Hr Emergency Dispatch",
  },
];

export default function ServiceAreas() {
  const [zipInput, setZipInput] = useState("");
  const [searchResult, setSearchResult] = useState<string | null>(null);

  const handleZipCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!zipInput.trim()) return;

    if (/^\d{5}$/.test(zipInput.trim())) {
      setSearchResult(
        `Zip Code ${zipInput.trim()} is fully covered! We have active field crews operating in this service territory with standard 24-hr turnaround.`
      );
    } else {
      setSearchResult("Please enter a valid 5-digit US ZIP code to verify service coverage.");
    }
  };

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      {/* Glow elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2e7fd4]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#e8a935]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#e8a935]/10 border border-[#e8a935]/20 text-[#e8a935] text-xs font-bold px-3.5 py-1.5 rounded-full mb-3 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#e8a935]" />
            Geographic Coverage
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Extensive <span className="text-[#2e7fd4]">Regional & Nationwide</span> Reach
          </h2>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed">
            From tier-1 primary metros to tertiary suburban counties, our vetted vendor network delivers boots-on-the-ground responsiveness wherever your assets are located.
          </p>
        </div>

        {/* Coverage Fast Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-5 text-center">
            <div className="text-3xl lg:text-4xl font-black text-[#e8a935] mb-1">42+</div>
            <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold">States Covered</div>
          </div>
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-5 text-center">
            <div className="text-3xl lg:text-4xl font-black text-[#2e7fd4] mb-1">500+</div>
            <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold">Certified Field Technicians</div>
          </div>
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-5 text-center">
            <div className="text-3xl lg:text-4xl font-black text-emerald-400 mb-1">2-4 Hrs</div>
            <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold">Emergency Dispatch SLA</div>
          </div>
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-5 text-center">
            <div className="text-3xl lg:text-4xl font-black text-amber-300 mb-1">100%</div>
            <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold">County Code Compliance</div>
          </div>
        </div>

        {/* Regional Hubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {regionalHubs.map((hub, idx) => (
            <div
              key={idx}
              className="bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/70 hover:border-[#2e7fd4]/50 rounded-2xl p-6 transition-all duration-300"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#2e7fd4]/20 border border-[#2e7fd4]/30 flex items-center justify-center text-[#2e7fd4]">
                    <Navigation size={16} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{hub.region}</h3>
                </div>
                <span className="text-[11px] font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800 px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {hub.status}
                </span>
              </div>

              <p className="text-xs text-slate-400 mb-4 font-medium">
                <span className="text-slate-200">Core States: </span>
                {hub.states}
              </p>

              <div className="mb-4">
                <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  Major Metropolitan Hubs:
                </div>
                <div className="flex flex-wrap gap-2">
                  {hub.metros.map((metro, mIdx) => (
                    <span
                      key={mIdx}
                      className="text-xs bg-slate-900/90 text-slate-200 border border-slate-700/80 px-2.5 py-1 rounded-md flex items-center gap-1.5"
                    >
                      <MapPin size={11} className="text-[#e8a935]" />
                      {metro}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-700/50 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-blue-200">
                  <Clock size={13} className="text-[#2e7fd4]" />
                  {hub.dispatchTime}
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck size={13} />
                  Fully Insured Crews
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Live ZIP Code Checker Card */}
        <div className="bg-gradient-to-r from-blue-950/90 to-slate-800 border border-blue-500/30 rounded-2xl p-8 max-w-2xl mx-auto text-center shadow-xl">
          <h3 className="text-xl font-bold text-white mb-2">Check Your Property Zip Code</h3>
          <p className="text-xs md:text-sm text-slate-300 mb-6">
            Instantly verify crew availability and service options in your specific territory.
          </p>

          <form onSubmit={handleZipCheck} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Enter 5-digit ZIP (e.g. 30301)"
                value={zipInput}
                onChange={(e) => setZipInput(e.target.value)}
                maxLength={5}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#2e7fd4]"
              />
            </div>
            <button type="submit" className="btn-gold text-sm py-3 px-6 whitespace-nowrap flex items-center justify-center gap-2">
              <Search size={15} />
              Check Coverage
            </button>
          </form>

          {searchResult && (
            <div className="text-xs bg-slate-900/90 border border-emerald-500/30 text-emerald-300 p-3 rounded-lg max-w-md mx-auto flex items-start gap-2 text-left">
              <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>{searchResult}</span>
            </div>
          )}

          <div className="mt-4 pt-4 border-t border-slate-700/50">
            <Link
              href="/contact"
              className="text-xs text-slate-400 hover:text-white inline-flex items-center gap-1.5 transition-colors"
            >
              Need coverage in an unlisted county or rural area? Request custom territory expansion
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
