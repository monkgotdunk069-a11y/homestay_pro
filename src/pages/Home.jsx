import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";
import API_URL from "../config/api";

export default function Home() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [searching, setSearching] = useState(false);

  // Fetch all homestays from the backend on mount
  useEffect(() => {
    fetch(`${API_URL}/homestays`)
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

  // Search handler — calls API endpoint
  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setSearchResults(null);
      return;
    }
    setSearching(true);
    fetch(`${API_URL}/homestays/search?q=${encodeURIComponent(searchQuery)}`)
      .then((res) => res.json())
      .then((json) => {
        setSearchResults(json.data);
        setSearching(false);
      })
      .catch(() => setSearching(false));
  };

  const displayedListings = searchResults !== null ? searchResults : listings;
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />

        {/* Listings Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-10">
            <span className="text-clay-500 text-xs font-medium uppercase tracking-widest">
              Featured Stays
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-stone mt-1">
              Handpicked Homestays
            </h2>
            <p className="text-stone/60 mt-2 max-w-xl">
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
        </section>

        {/* Why StayNest */}
        <section className="bg-forest-50 border-y border-forest-100 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
