import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Leaf, Sparkles, Wrench, Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Work",
  description: "View NextZen Property Maintenance project gallery — real photos of property preservation, maintenance, cleaning, landscaping, and more.",
};

const categories = [
  { name: "All", id: "all" },
  { name: "Preservation", id: "preservation" },
  { name: "Maintenance", id: "maintenance" },
  { name: "Cleaning", id: "cleaning" },
  { name: "Landscaping", id: "landscaping" },
];

const projects = [
  {
    category: "preservation",
    service: "Property Preservation",
    location: "Columbus, OH",
    desc: "Full vacant property preservation including securing, debris removal, and exterior maintenance for REO property.",
    icon: Building2,
    iconBg: "from-blue-500 to-blue-700",
    bgColor: "from-blue-900/30 to-blue-700/10",
  },
  {
    category: "maintenance",
    service: "Property Maintenance",
    location: "Indianapolis, IN",
    desc: "Complete interior repair including drywall, flooring, and plumbing for managed residential property.",
    icon: Wrench,
    iconBg: "from-indigo-500 to-indigo-700",
    bgColor: "from-indigo-900/30 to-indigo-700/10",
  },
  {
    category: "cleaning",
    service: "Move-Out Cleaning",
    location: "Cincinnati, OH",
    desc: "Deep cleaning of 3-bedroom unit following tenant move-out, including kitchen, bathrooms, and all floors.",
    icon: Sparkles,
    iconBg: "from-cyan-500 to-cyan-700",
    bgColor: "from-cyan-900/30 to-cyan-700/10",
  },
  {
    category: "landscaping",
    service: "Lawn Care",
    location: "Louisville, KY",
    desc: "Full exterior cleanup and lawn restoration for vacant property — mowing, trimming, edging, and debris removal.",
    icon: Leaf,
    iconBg: "from-green-500 to-green-700",
    bgColor: "from-green-900/30 to-green-700/10",
  },
  {
    category: "preservation",
    service: "Board-Up & Securing",
    location: "Dayton, OH",
    desc: "Emergency securing of distressed foreclosure property including all entry points and window board-up.",
    icon: Building2,
    iconBg: "from-red-500 to-red-700",
    bgColor: "from-red-900/30 to-red-700/10",
  },
  {
    category: "maintenance",
    service: "Photo Inspection",
    location: "Lexington, KY",
    desc: "Full 24-photo inspection package documenting property condition for asset management reporting.",
    icon: Camera,
    iconBg: "from-purple-500 to-purple-700",
    bgColor: "from-purple-900/30 to-purple-700/10",
  },
];

export default function OurWorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-36 pb-20">
        <div className="container-wide text-center">
          <div className="inline-flex items-center gap-2 text-[#e8a935] text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-6 h-px bg-[#e8a935]" />
            Project Gallery
            <span className="w-6 h-px bg-[#e8a935]" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
            Our Work
          </h1>
          <p className="text-blue-100/80 text-xl leading-relaxed max-w-2xl mx-auto">
            Real projects. Real results. See the quality and professionalism we deliver across every service we provide.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0f1f3d] mb-3">Featured Projects</h2>
            <p className="text-slate-500 text-base max-w-xl mx-auto">
              A selection of recent work across our service categories. Contact us to see more examples specific to your needs.
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Visual placeholder */}
                <div className={`relative h-52 bg-gradient-to-br ${project.bgColor} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.3) 1px, transparent 1px)`,
                      backgroundSize: "30px 30px",
                    }}
                  />
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${project.iconBg} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon size={36} className="text-white" />
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xs font-bold text-white bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                      {project.location}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-xs font-bold text-[#2e7fd4] uppercase tracking-widest mb-2">{project.service}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-12 text-center bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
            <p className="text-slate-500 text-base mb-4">
              Want to see more examples of our work or discuss a specific project type?
            </p>
            <Link href="/contact" className="btn-primary text-sm py-3 px-6">
              Request Our Full Portfolio <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0f1f3d]">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Add Your Property to Our Portfolio?</h2>
          <p className="text-blue-200/70 mb-8">Contact us today to request a service or learn more about our capabilities.</p>
          <Link href="/contact" className="btn-gold text-base py-4 px-8">
            Contact Us Now <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
