import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest-800 text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="leaves" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="20" fill="none" stroke="white" strokeWidth="1"/>
              <circle cx="0" cy="0" r="10" fill="none" stroke="white" strokeWidth="0.5"/>
              <circle cx="60" cy="60" r="10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#leaves)"/>
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <span className="inline-block text-forest-300 text-xs font-medium tracking-widest uppercase mb-4 border border-forest-400 px-3 py-1 rounded-full">
            Homestay Management Platform
          </span>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            Every Guest Feels{" "}
            <span className="text-clay-400">At Home.</span>
          </h1>

          <p className="text-forest-200 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
            Manage your homestay listings, track bookings, and delight guests — all from one place, powered by Python on the backend.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/dashboard"
              className="px-6 py-3 bg-clay-500 hover:bg-clay-600 text-white font-semibold rounded-lg transition-colors"
            >
              View Dashboard
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 border border-forest-400 hover:border-white text-forest-100 hover:text-white font-semibold rounded-lg transition-colors"
            >
              Learn More
            </Link>
          </div>

          {/* Stats row */}
          <div className="mt-12 flex flex-wrap gap-8">
            {[
              { value: "1,200+", label: "Active Listings" },
              { value: "94%", label: "Guest Satisfaction" },
              { value: "₹0 setup", label: "Free to Start" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-display font-bold text-clay-300">{s.value}</div>
                <div className="text-forest-300 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
