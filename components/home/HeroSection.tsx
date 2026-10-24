"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Clock, Award, Phone, CheckCircle2, ShieldCheck, MapPin } from "lucide-react";

const highlights = [
  { icon: Shield, label: "Licensed & Insured ($2M)" },
  { icon: Clock, label: "24/7 Rapid Response" },
  { icon: Award, label: "15+ Years Industry Leader" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center overflow-hidden bg-[#071322]">
      {/* Background Hero Image with Positioning */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/property-maintenance.jpg"
          alt="NextZen Property Maintenance - Professional Field Technician"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_center] md:object-[82%_center] lg:object-[85%_center] brightness-[0.92] contrast-[1.05]"
        />

        {/* Sophisticated Multi-stop Gradient Overlays for Flawless Readability */}
        {/* Left-to-right dark mask to give text 100% contrast while technician on right stays bright & clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071322] via-[#071322]/95 md:via-[#071322]/85 lg:via-[#071322]/70 via-55% to-transparent pointer-events-none" />

        {/* Top subtle fade for navbar seamlessness */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#071322]/90 to-transparent pointer-events-none" />

        {/* Bottom fade into trust indicators */}
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent pointer-events-none" />

        {/* Brand blue ambient accent */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#1a4b8c]/25 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="container-wide relative z-10 pt-28 pb-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text & Content (One side) */}
          <div className="lg:col-span-7 xl:col-span-7 max-w-2xl">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 bg-slate-900/80 border border-white/20 backdrop-blur-md text-white text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wide uppercase shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#e8a935] animate-pulse" />
              <span>Full-Spectrum Property Preservation & Field Services</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.1rem] font-extrabold text-white leading-[1.08] tracking-tight mb-6 drop-shadow-md">
              Trusted Property{" "}
              <span className="text-gradient-gold">Maintenance</span>{" "}
              & Preservation
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg md:text-xl text-slate-200/90 leading-relaxed mb-8 max-w-xl font-normal drop-shadow">
              Reliable single-source property solutions for property managers, asset managers, and national vendor coordinators. Guaranteed SLAs, audit-ready photo documentation, and nationwide coverage.
            </p>

            {/* Highlight Badges */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-10">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="flex items-center gap-2 bg-slate-900/80 border border-white/15 backdrop-blur-md rounded-xl px-3.5 py-2 shadow-sm"
                >
                  <h.icon size={15} className="text-[#e8a935]" />
                  <span className="text-xs sm:text-sm font-semibold text-white">{h.label}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/contact"
                className="btn-gold text-sm sm:text-base py-4 px-8 flex items-center justify-center gap-2 shadow-xl shadow-amber-900/20"
              >
                <span>Request a Fast Quote</span>
                <ArrowRight size={17} />
              </Link>
              <Link
                href="/services"
                className="btn-secondary text-sm sm:text-base py-4 px-8 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border-white/25 backdrop-blur-md shadow-lg"
              >
                <span>Explore All Services</span>
              </Link>
            </div>

            {/* Direct Phone & Dispatch Status Bar */}
            <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-6 sm:gap-8">
              <a
                href="tel:+11234567890"
                className="flex items-center gap-3 group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#2e7fd4] flex items-center justify-center group-hover:bg-[#e8a935] transition-colors duration-300 shadow-md">
                  <Phone size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-[11px] text-blue-200/80 uppercase tracking-widest font-semibold">24/7 Dispatch Desk</p>
                  <p className="text-white font-bold text-lg leading-tight group-hover:text-[#e8a935] transition-colors">
                    (123) 456-7890
                  </p>
                </div>
              </a>

              <div className="hidden sm:block w-px h-10 bg-white/20" />

              <div>
                <p className="text-[11px] text-blue-200/80 uppercase tracking-widest font-semibold">Dispatch Response</p>
                <p className="text-emerald-400 font-semibold text-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Crews on Standby
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Visual Badges Highlighting Technician */}
          <div className="lg:col-span-5 xl:col-span-5 hidden lg:flex flex-col items-end justify-end h-full relative">
            {/* Floating Glassmorphism Badge 1: Top Right */}
            <div className="bg-slate-900/80 border border-white/20 backdrop-blur-md rounded-2xl p-4 shadow-2xl max-w-xs mb-8 transition-transform hover:scale-105 duration-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-tight">
                    Certified Field Technicians
                  </div>
                  <div className="text-[11px] text-slate-300 mt-0.5">
                    Equipped, Vetted & Background Checked
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Glassmorphism Badge 2: Lower Right */}
            <div className="bg-slate-900/80 border border-white/20 backdrop-blur-md rounded-2xl p-4 shadow-2xl max-w-xs transition-transform hover:scale-105 duration-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#e8a935]/20 border border-[#e8a935]/30 flex items-center justify-center text-[#e8a935] flex-shrink-0">
                  <CheckCircle2 size={22} />
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-tight">
                    100% Photo Verified Work
                  </div>
                  <div className="text-[11px] text-slate-300 mt-0.5">
                    Before, During & After GPS Stamped
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
