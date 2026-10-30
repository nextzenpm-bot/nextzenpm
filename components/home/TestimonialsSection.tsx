const testimonials = [
  {
    quote:
      "NextZen has been an outstanding vendor partner. Their teams are responsive, professional, and their photo documentation is always spot-on. They&apos;ve become an essential part of our property management workflow.",
    author: "Sarah M.",
    role: "Senior Property Manager",
    company: "Nationwide Asset Group",
    initials: "SM",
  },
  {
    quote:
      "We've worked with many preservation companies, but NextZen stands out for their consistency and attention to detail. Work orders are completed on time, every time, with excellent documentation.",
    author: "James R.",
    role: "Asset Manager",
    company: "Premier REO Solutions",
    initials: "JR",
  },
  {
    quote:
      "Their winterization and board-up services are second to none. Fast, thorough, and always compliant with our vendor standards. I highly recommend them to any asset manager needing reliable field services.",
    author: "Linda T.",
    role: "Vendor Coordinator",
    company: "Pacific Property Services",
    initials: "LT",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-[#f8fafc]">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-[#44DDF1] text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-6 h-px bg-[#44DDF1]" />
            Client Feedback
            <span className="w-6 h-px bg-[#44DDF1]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f1f3d] mb-4">
            Trusted by Industry Professionals
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Our reputation is built on consistent performance and professional service delivery.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-lg hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-[#e8a935]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#44DDF1] to-[#0f1f3d] flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-[#0f1f3d] text-sm">{t.author}</p>
                  <p className="text-xs text-slate-500">{t.role} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
