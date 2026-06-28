import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-forest-800 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-forest-300 text-xs uppercase tracking-widest font-medium">Our Story</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4">
              About StayNest
            </h1>
            <p className="text-forest-200 text-lg max-w-2xl mx-auto">
              We believe the best travel experiences happen when you stay with someone who calls that place home.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose max-w-none">
            <h2 className="font-display text-2xl font-bold text-stone mb-4">Who We Are</h2>
            <p className="text-stone/70 leading-relaxed mb-6">
              StayNest is a homestay management platform built for Indian hosts and travellers. Founded in 2024,
              we connect curious guests with families and individuals who open their homes across every corner of India —
              from the Himalayan valleys of Himachal to the backwaters of Kerala.
            </p>

            <h2 className="font-display text-2xl font-bold text-stone mb-4">Our Technology</h2>
            <p className="text-stone/70 leading-relaxed mb-6">
              Our backend is built entirely in Python — leveraging FastAPI for high-performance APIs, SQLAlchemy for
              reliable data management, and Celery for async booking workflows. The frontend is a React application
              styled with Tailwind CSS, designed to work on any device.
            </p>

            <h2 className="font-display text-2xl font-bold text-stone mb-4">Our Mission</h2>
            <p className="text-stone/70 leading-relaxed">
              To make authentic, local stays accessible, safe, and easy to manage — for hosts earning supplemental
              income and for guests who want more than a hotel room.
            </p>
          </div>

          {/* Team section */}
          <div className="mt-14">
            <h2 className="font-display text-2xl font-bold text-stone mb-6">The Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { name: "Priya Sharma", role: "Co-founder & CEO", emoji: "👩‍💼" },
                { name: "Arjun Mehta", role: "Backend Engineer (Python)", emoji: "👨‍💻" },
                { name: "Kavya Nair", role: "Product Designer", emoji: "👩‍🎨" },
              ].map((m) => (
                <div key={m.name} className="bg-white rounded-2xl p-5 border border-forest-100 text-center shadow-sm">
                  <span className="text-5xl block mb-3">{m.emoji}</span>
                  <h3 className="font-display font-semibold text-stone">{m.name}</h3>
                  <p className="text-stone/50 text-sm mt-1">{m.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
