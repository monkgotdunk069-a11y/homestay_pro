<<<<<<< HEAD
import { useState, useEffect } from "react";
=======
>>>>>>> eeb9e88102dce2f4bd3a375a6704b2c4c99cf346
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

<<<<<<< HEAD
export default function Home() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [searching, setSearching] = useState(false);

  // Fetch all homestays from the backend on mount
  useEffect(() => {
    fetch("/api/homestays")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((json) => {
        setListings(json.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Search handler — calls /api/homestays/search?q=
  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setSearchResults(null);
      return;
    }
    setSearching(true);
    fetch(`/api/homestays/search?q=${encodeURIComponent(searchQuery)}`)
      .then((res) => res.json())
      .then((json) => {
        setSearchResults(json.data);
        setSearching(false);
      })
      .catch(() => setSearching(false));
  };

  const displayedListings = searchResults !== null ? searchResults : listings;

=======
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
>>>>>>> eeb9e88102dce2f4bd3a375a6704b2c4c99cf346
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />

        {/* Listings Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-10">
<<<<<<< HEAD
            <span className="text-clay-500 text-xs font-medium uppercase tracking-widest">
              Featured Stays
            </span>
=======
            <span className="text-clay-500 text-xs font-medium uppercase tracking-widest">Featured Stays</span>
>>>>>>> eeb9e88102dce2f4bd3a375a6704b2c4c99cf346
            <h2 className="font-display text-3xl md:text-4xl font-bold text-stone mt-1">
              Handpicked Homestays
            </h2>
            <p className="text-stone/60 mt-2 max-w-xl">
<<<<<<< HEAD
              Every property is verified by our team. Stay with locals who know
              their region best.
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="mt-5 flex gap-2 max-w-md">
              <input
                id="search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (!e.target.value.trim()) setSearchResults(null);
                }}
                placeholder="Search by city, name, or tag…"
                className="flex-1 border border-forest-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-forest-400"
              />
              <button
                id="search-btn"
                type="submit"
                className="bg-forest-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-forest-800 transition-colors"
              >
                {searching ? "…" : "Search"}
              </button>
              {searchResults !== null && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchResults(null);
                    setSearchQuery("");
                  }}
                  className="text-stone/50 text-sm px-2 hover:text-stone transition-colors"
                >
                  Clear
                </button>
              )}
            </form>
          </div>

          {/* States */}
          {loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-forest-100 h-64 animate-pulse"
                />
              ))}
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center">
              <span className="text-2xl block mb-2">⚠️</span>
              <p className="text-red-600 font-medium">Could not load listings</p>
              <p className="text-red-400 text-sm mt-1">{error}</p>
              <p className="text-stone/50 text-xs mt-2">
                Make sure the backend is running on port 5000
              </p>
            </div>
          )}

          {!loading && !error && (
            <>
              {searchResults !== null && (
                <p className="text-stone/50 text-sm mb-4">
                  {searchResults.length} result
                  {searchResults.length !== 1 ? "s" : ""} for &quot;
                  {searchQuery}&quot;
                </p>
              )}
              {displayedListings.length === 0 ? (
                <div className="text-center py-16 text-stone/40">
                  <span className="text-4xl block mb-3">🔍</span>
                  <p>No homestays found.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {displayedListings.map((listing) => (
                    <Card key={listing.id} listing={listing} />
                  ))}
                </div>
              )}
            </>
          )}
=======
              Every property is verified by our team. Stay with locals who know their region best.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LISTINGS.map((listing) => (
              <Card key={listing.name} listing={listing} />
            ))}
          </div>
>>>>>>> eeb9e88102dce2f4bd3a375a6704b2c4c99cf346
        </section>

        {/* Why StayNest */}
        <section className="bg-forest-50 border-y border-forest-100 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<<<<<<< HEAD
            <h2 className="font-display text-3xl font-bold text-stone mb-10">
              Why Choose StayNest?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                {
                  icon: "🔒",
                  title: "Verified Hosts",
                  desc: "Every host is background-checked and identity-verified before listing.",
                },
                {
                  icon: "💬",
                  title: "24/7 Support",
                  desc: "Our local support team is always a message away — in your language.",
                },
                {
                  icon: "🇮🇳",
                  title: "Made for India",
                  desc: "Built around Indian travel culture, pricing, and guest expectations.",
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="bg-white rounded-2xl p-6 border border-forest-100 shadow-sm"
                >
                  <span className="text-4xl block mb-3">{f.icon}</span>
                  <h3 className="font-display font-semibold text-stone text-lg mb-2">
                    {f.title}
                  </h3>
=======
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
>>>>>>> eeb9e88102dce2f4bd3a375a6704b2c4c99cf346
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
