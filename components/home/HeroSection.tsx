"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center overflow-hidden">
      {/* 1. 100% Crystal Clear, Bright Natural Background Image with ZERO Overlays or Dark Shades */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/banner.jpg"
          alt="NextZen Property Maintenance - Estate & Commercial Property Maintenance"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center select-none"
        />
      </div>

      <div className="container-wide relative z-10 pt-28 pb-16 md:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[60vh]">
          {/* Left Column: Clean, high-contrast, elegant typography exactly like reference */}
          <div className="lg:col-span-8 max-w-2xl">
            {/* Subtle Tag */}
            <div className="mb-4">
              <span
                className="text-white text-xs sm:text-sm font-semibold tracking-wider"
                style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6), 0 1px 3px rgba(0,0,0,0.8)" }}
              >
                [HOA & Communities]
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-white leading-[1.08] tracking-tight mb-6"
              style={{ textShadow: "0 3px 12px rgba(0,0,0,0.6), 0 1px 4px rgba(0,0,0,0.8)" }}
            >
              Your property,
              <br />
              perfectly clean &
              <br />
              <span className="font-serif italic font-normal tracking-normal text-white">
                maintained
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-sm sm:text-base md:text-lg text-white leading-relaxed mb-8 max-w-xl font-medium"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.6), 0 1px 3px rgba(0,0,0,0.8)" }}
            >
              Expert Janitorial & Maintenance Services, Customized to Suit Your Property&apos;s Unique Needs — Because Every Space Deserves Expert Care.
            </p>

            {/* Get Started Button (White Pill with Dark Text & Arrow, exactly matching the reference) */}
            <div>
              <Link
                href="/contact"
                className="bg-white hover:bg-slate-100 text-[#0f1f3d] font-bold text-sm sm:text-base py-3.5 px-7 rounded-full inline-flex items-center gap-2.5 shadow-2xl hover:shadow-white/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
              >
                <span>Get Started</span>
                <ArrowRight size={17} className="text-[#1a4b8c] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right / Bottom Area: Floating Glassmorphism "500+ Projects Completed" Card */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end items-end h-full mt-6 lg:mt-0">
            <div className="bg-slate-900/40 hover:bg-slate-900/50 backdrop-blur-md border border-white/25 rounded-2xl p-4 sm:p-5 shadow-2xl text-white max-w-[260px] transition-all duration-300 hover:scale-105">
              <div className="text-2xl sm:text-3xl font-extrabold text-white leading-none mb-1">
                500+
              </div>
              <div className="text-xs sm:text-sm font-medium text-white/90 mb-3.5">
                Projects Completed
              </div>

              {/* Overlapping Avatars Stack with "+493 more" */}
              <div className="flex items-center -space-x-2">
                {/* Avatar 1 */}
                <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-slate-300 relative shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&auto=format&fit=crop&crop=faces&q=80"
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Avatar 2 */}
                <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-slate-300 relative shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&auto=format&fit=crop&crop=faces&q=80"
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Avatar 3 */}
                <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-slate-300 relative shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&auto=format&fit=crop&crop=faces&q=80"
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Avatar 4 */}
                <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-slate-300 relative shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&auto=format&fit=crop&crop=faces&q=80"
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* 493 more circle */}
                <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-900/80 backdrop-blur-md text-[10px] font-bold text-white flex flex-col items-center justify-center shadow-sm leading-none">
                  <span>493</span>
                  <span className="text-[8px] text-slate-300">more</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
