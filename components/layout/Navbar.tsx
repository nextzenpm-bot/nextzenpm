"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Building2,
  Wrench,
  Sparkles,
  Leaf,
  HardHat,
  Lock,
  Trash2,
  Snowflake,
  Camera,
  MoreHorizontal,
  ArrowRight,
} from "lucide-react";

const services = [
  { name: "Property Preservation", href: "/services/property-preservation", icon: Building2, desc: "Vacant property care & securing" },
  { name: "Property Maintenance", href: "/services/property-maintenance", icon: Wrench, desc: "Routine maintenance & repair" },
  { name: "Cleaning Services", href: "/services/cleaning-services", icon: Sparkles, desc: "Interior & move-out cleaning" },
  { name: "Lawn Care & Landscaping", href: "/services/lawn-care-landscaping", icon: Leaf, desc: "Lawn maintenance & exterior cleanup" },
  { name: "Handyman Services", href: "/services/handyman-services", icon: HardHat, desc: "General repairs & minor work" },
  { name: "Lock Change & Board-Up", href: "/services/lock-change-board-up", icon: Lock, desc: "Authorized lock change & securing" },
  { name: "Trash-Out & Debris Removal", href: "/services/trash-out-debris-removal", icon: Trash2, desc: "Junk/debris removal & cleanout" },
  { name: "Winterization", href: "/services/winterization", icon: Snowflake, desc: "Seasonal property winterization" },
  { name: "Photo Inspection", href: "/services/photo-inspection", icon: Camera, desc: "Property condition reporting" },
  { name: "Other Services", href: "/services/other-services", icon: MoreHorizontal, desc: "Custom service requests" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services", hasDropdown: true },
  { name: "Our Work", href: "/our-work" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const handleDropdownEnter = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setServicesOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimerRef.current = setTimeout(() => setServicesOpen(false), 150);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-200/50"
          : "bg-transparent"
      }`}
    >
      <nav className="container-wide flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#2e7fd4] to-[#0f1f3d] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
            <Building2 size={18} className="text-white" />
          </div>
          <div className="flex flex-col leading-none">
            <span
              className={`font-bold text-lg tracking-tight transition-colors duration-300 ${
                isScrolled ? "text-[#0f1f3d]" : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
              }`}
            >
              NextZen
            </span>
            <span
              className={`text-[10px] font-medium tracking-widest uppercase transition-colors duration-300 ${
                isScrolled ? "text-[#2e7fd4]" : "text-white/90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
              }`}
            >
              Property Maintenance
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.name}
                className="relative"
                ref={dropdownRef}
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive(link.href)
                      ? isScrolled
                        ? "text-[#2e7fd4] bg-blue-50"
                        : "text-white font-bold drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"
                      : isScrolled
                      ? "text-[#334155] hover:text-[#2e7fd4] hover:bg-slate-50"
                      : "text-white/90 hover:text-white hover:bg-black/15 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] font-medium"
                  }`}
                >
                  {link.name}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[680px] transition-all duration-300 ${
                    servicesOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="bg-white rounded-2xl shadow-2xl shadow-slate-200/60 border border-slate-100/80 p-5 grid grid-cols-2 gap-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all duration-200 group/item"
                      >
                        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500/10 to-blue-700/10 flex items-center justify-center flex-shrink-0 group-hover/item:from-blue-500/20 group-hover/item:to-blue-700/20 transition-all duration-200">
                          <service.icon size={16} className="text-[#2e7fd4]" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#0f1f3d] group-hover/item:text-[#2e7fd4] transition-colors duration-200 leading-tight">
                            {service.name}
                          </p>
                          <p className="text-xs text-slate-500 mt-0.5 leading-tight">{service.desc}</p>
                        </div>
                      </Link>
                    ))}
                    <div className="col-span-2 mt-1 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href="/services"
                        className="text-sm font-semibold text-[#2e7fd4] hover:text-[#1a4b8c] transition-colors duration-200 flex items-center gap-1"
                      >
                        View All Services →
                      </Link>
                      <Link href="/contact" className="btn-primary text-xs py-2 px-4">
                        Request Service
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  isActive(link.href)
                    ? isScrolled
                      ? "text-[#2e7fd4] bg-blue-50"
                      : "text-white font-bold drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"
                    : isScrolled
                    ? "text-[#334155] hover:text-[#2e7fd4] hover:bg-slate-50"
                    : "text-white/90 hover:text-white hover:bg-black/15 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] font-medium"
                }`}
              >
                {link.name}
              </Link>
            )
          )}
        </div>

        {/* CTA matching reference */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className={`text-sm font-bold py-2.5 px-6 rounded-full inline-flex items-center gap-2 shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 ${
              isScrolled
                ? "bg-[#1a4b8c] text-white hover:bg-[#2e7fd4]"
                : "bg-white text-[#0f1f3d] hover:bg-slate-100 shadow-black/20"
            }`}
          >
            <span>Get Started</span>
            <ArrowRight size={14} className={isScrolled ? "text-white" : "text-[#1a4b8c]"} />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
            isScrolled ? "text-[#0f1f3d] hover:bg-slate-100" : "text-white hover:bg-white/10"
          }`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          mobileOpen ? "max-h-[90vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/98 backdrop-blur-xl border-t border-slate-100 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.name}>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-semibold text-[#0f1f3d] hover:bg-slate-50 transition-colors duration-200"
                >
                  {link.name}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileServicesOpen ? "max-h-[600px]" : "max-h-0"
                  }`}
                >
                  <div className="pl-4 flex flex-col gap-1 py-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-600 hover:text-[#2e7fd4] hover:bg-blue-50 transition-all duration-200"
                      >
                        <service.icon size={15} className="text-[#2e7fd4]" />
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-[#2e7fd4] bg-blue-50"
                    : "text-[#0f1f3d] hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            )
          )}
          <div className="pt-3 border-t border-slate-100 mt-2 flex flex-col gap-2">
            <a
              href="tel:+12393104998"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-200 text-sm font-semibold text-[#0f1f3d] hover:bg-slate-50 transition-colors duration-200"
            >
              <Phone size={14} />
              (239) 310-4998
            </a>
            <Link href="/become-vendor" className="btn-gold text-sm text-center py-3">
              Become a Vendor Partner
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
