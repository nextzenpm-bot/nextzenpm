import Link from "next/link";
import {
  Building2,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const serviceLinks = [
  { name: "Property Preservation", href: "/services/property-preservation" },
  { name: "Property Maintenance", href: "/services/property-maintenance" },
  { name: "Cleaning Services", href: "/services/cleaning-services" },
  { name: "Lawn Care & Landscaping", href: "/services/lawn-care-landscaping" },
  { name: "Handyman Services", href: "/services/handyman-services" },
  { name: "Lock Change & Board-Up", href: "/services/lock-change-board-up" },
  { name: "Trash-Out & Debris Removal", href: "/services/trash-out-debris-removal" },
  { name: "Winterization Services", href: "/services/winterization" },
  { name: "Photo Inspection", href: "/services/photo-inspection" },
  { name: "Other Services", href: "/services/other-services" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Vendor Partnerships", href: "/vendor-partnerships" },
  { name: "Our Work Gallery", href: "/our-work" },
  { name: "Contact Us", href: "/contact" },
  { name: "Become a Vendor", href: "/become-vendor" },
];

const serviceAreaHubs = [
  { name: "Southeast (FL, GA, NC, SC)", desc: "Atlanta, Orlando, Tampa, Charlotte" },
  { name: "Midwest (IL, OH, IN, MI)", desc: "Chicago, Columbus, Detroit, Indy" },
  { name: "Southwest (TX, AZ, NV)", desc: "DFW, Houston, Phoenix, Las Vegas" },
  { name: "Mid-Atlantic (PA, NJ, VA, MD)", desc: "Philadelphia, DC Metro, Baltimore" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0b1829] text-white">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-[#1a4b8c] via-[#2e7fd4] to-[#1a4b8c] py-12">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              Ready to Protect & Maintain Your Portfolio?
            </h3>
            <p className="text-blue-100 mt-1 text-sm md:text-base">
              Join our certified vendor network or request a fast service quote today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link href="/become-vendor" className="btn-gold text-sm py-3 px-6 whitespace-nowrap">
              Become a Vendor Partner
            </Link>
            <Link href="/contact" className="btn-secondary text-sm py-3 px-6 whitespace-nowrap">
              Get a Quote
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Contact (4 cols) */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#2e7fd4] to-[#0f1f3d] flex items-center justify-center shadow-lg border border-white/10">
                <Building2 size={18} className="text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-lg tracking-tight text-white">NextZen</span>
                <span className="text-[10px] font-medium tracking-widest uppercase text-[#e8a935]">
                  Property Maintenance
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Full-spectrum property preservation, turn maintenance, and asset care for single-family, multi-family, and REO default portfolios nationwide.
            </p>

            {/* Contact Details */}
            <div className="flex flex-col gap-3">
              <a
                href="tel:+12393104998"
                className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-white transition-colors duration-200"
              >
                <div className="w-7 h-7 rounded-md bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Phone size={13} className="text-[#2e7fd4]" />
                </div>
                <span>(239) 310-4998</span>
                <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950 px-2 py-0.5 rounded-full border border-emerald-800">
                  24/7 Dispatch
                </span>
              </a>

              <a
                href="mailto:info@nextzenpm.com"
                className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-white transition-colors duration-200"
              >
                <div className="w-7 h-7 rounded-md bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Mail size={13} className="text-[#2e7fd4]" />
                </div>
                <span>info@nextzenpm.com</span>
              </a>

              <div className="flex items-start gap-2.5 text-sm text-slate-300">
                <div className="w-7 h-7 rounded-md bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={13} className="text-[#2e7fd4]" />
                </div>
                <span>5100 S CLEVELAND AVE SUITE 202<br />FORT MYERS, FL 33907</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 mt-6">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#2e7fd4] hover:border-[#2e7fd4] transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 0 0 1.53-1.53A1.53 1.53 0 0 0 6.46 5.7a1.53 1.53 0 0 0-1.53 1.53c0 .85.68 1.53 1.53 1.53m1.4 9.74v-8.37H5.06v8.37h2.8z"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#2e7fd4] hover:border-[#2e7fd4] transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#2e7fd4] hover:border-[#2e7fd4] transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white flex items-center gap-1.5 group transition-colors duration-200"
                  >
                    <ArrowRight
                      size={12}
                      className="text-[#2e7fd4] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-5">
              Our Services
            </h4>
            <ul className="flex flex-col gap-2">
              {serviceLinks.slice(0, 7).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white flex items-center gap-1.5 group transition-colors duration-200"
                  >
                    <ArrowRight
                      size={12}
                      className="text-[#2e7fd4] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-xs text-[#e8a935] hover:underline font-semibold flex items-center gap-1 mt-1"
                >
                  View All 10 Services
                  <ArrowRight size={12} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas & Coverage (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-5">
              Service Areas
            </h4>
            <div className="space-y-3">
              {serviceAreaHubs.map((hub, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-2.5 border border-white/5">
                  <div className="text-xs font-bold text-slate-200">{hub.name}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{hub.desc}</div>
                </div>
              ))}
              <div className="pt-1">
                <span className="text-[11px] text-emerald-400 flex items-center gap-1 font-semibold">
                  <ShieldCheck size={13} />
                  42 States Full Nationwide Coverage
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Legal & Copyright */}
      <div className="border-t border-white/5">
        <div className="container-wide py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © 2026 NextZen Property Maintenance. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="text-xs text-slate-500 hover:text-slate-300 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-slate-500 hover:text-slate-300 transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-xs text-slate-500 hover:text-slate-300 transition-colors duration-200">
              Licensing & Compliance Disclosures
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
