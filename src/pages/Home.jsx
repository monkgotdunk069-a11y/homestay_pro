import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

const LISTINGS = [
  {
    name: "Himalayan Cedar Retreat",
    location: "Manali, Himachal Pradesh",
    price: 3200,
    rating: 4.9,
    reviews: 87,
    tags: ["Mountain View", "Bonfire", "Meals Included"],
    emoji: "🏔️",
    available: true,
  },
  {
    name: "Backwaters Wooden Villa",
    location: "Alleppey, Kerala",
    price: 4500,
    rating: 4.8,
    reviews: 64,
    tags: ["Waterfront", "Boat Ride", "AC"],
    emoji: "🌊",
    available: true,
  },
  {
    name: "Rajput Heritage Haveli",
    location: "Jaisalmer, Rajasthan",
    price: 5800,
    rating: 4.7,
    reviews: 52,
    tags: ["Heritage", "Desert Safari", "Pool"],
    emoji: "🏰",
    available: false,
  },
  {
    name: "Coorg Coffee Estate",
    location: "Madikeri, Karnataka",
    price: 2900,
    rating: 4.6,
    reviews: 39,
    tags: ["Coffee Tours", "Nature Walks", "WiFi"],
    emoji: "☕",
    available: true,
  },
  {
    name: "Rann of Kutch Tent Stay",
    location: "Bhuj, Gujarat",
    price: 2100,
    rating: 4.5,
    reviews: 28,
    tags: ["Stargazing", "Cultural Show", "Breakfast"],
    emoji: "⛺",
    available: true,
  },
  {
    name: "Andaman Beach Cottage",
    location: "Havelock Island, A&N",
    price: 6200,
    rating: 4.9,
    reviews: 103,
    tags: ["Beachfront", "Snorkelling", "Kitchen"],
    emoji: "🏖️",
    available: true,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />

        {/* Listings Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-10">
            <span className="text-clay-500 text-xs font-medium uppercase tracking-widest">Featured Stays</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-stone mt-1">
              Handpicked Homestays
            </h2>
            <p className="text-stone/60 mt-2 max-w-xl">
              Every property is verified by our team. Stay with locals who know their region best.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LISTINGS.map((listing) => (
              <Card key={listing.name} listing={listing} />
            ))}
          </div>
        </section>

        {/* Why StayNest */}
        <section className="bg-forest-50 border-y border-forest-100 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-bold text-stone mb-10">Why Choose StayNest?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { icon: "🔒", title: "Verified Hosts", desc: "Every host is background-checked and identity-verified before listing." },
                { icon: "💬", title: "24/7 Support", desc: "Our local support team is always a message away — in your language." },
                { icon: "🇮🇳", title: "Made for India", desc: "Built around Indian travel culture, pricing, and guest expectations." },
              ].map((f) => (
                <div key={f.title} className="bg-white rounded-2xl p-6 border border-forest-100 shadow-sm">
                  <span className="text-4xl block mb-3">{f.icon}</span>
                  <h3 className="font-display font-semibold text-stone text-lg mb-2">{f.title}</h3>
                  <p className="text-stone/60 text-sm leading-relaxed">{f.desc}</p>
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
