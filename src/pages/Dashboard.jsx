import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const stats = [
  { label: "Active Listings", value: "12", icon: "🏠", change: "+2 this month" },
  { label: "Total Bookings", value: "84", icon: "📅", change: "+11 this week" },
  { label: "Revenue (₹)", value: "1,42,800", icon: "💰", change: "+₹18k vs last month" },
  { label: "Avg. Rating", value: "4.7★", icon: "⭐", change: "Across 84 reviews" },
];

const recentBookings = [
  { guest: "Rohan Verma", property: "Himalayan Cedar Retreat", dates: "Jun 24–27", status: "Confirmed", amount: "₹9,600" },
  { guest: "Ananya Iyer", property: "Backwaters Wooden Villa", dates: "Jun 25–28", status: "Pending", amount: "₹13,500" },
  { guest: "Deepak Joshi", property: "Coorg Coffee Estate", dates: "Jul 1–3", status: "Confirmed", amount: "₹5,800" },
  { guest: "Sneha Pillai", property: "Andaman Beach Cottage", dates: "Jul 5–8", status: "Cancelled", amount: "₹18,600" },
];

const statusColors = {
  Confirmed: "bg-forest-100 text-forest-700",
  Pending: "bg-clay-100 text-clay-700",
  Cancelled: "bg-red-100 text-red-600",
};

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-forest-800 text-white py-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-forest-300 text-xs uppercase tracking-widest font-medium">Host Panel</span>
            <h1 className="font-display text-3xl md:text-4xl font-bold mt-1">Dashboard</h1>
            <p className="text-forest-300 mt-1 text-sm">Welcome back, Priya. Here's today's snapshot.</p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {stats.map((s) => (
              <div key={s.label} className="bg-white rounded-2xl p-5 border border-forest-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{s.icon}</span>
                  <span className="text-xs text-stone/40">{s.change}</span>
                </div>
                <div className="font-display text-2xl font-bold text-stone">{s.value}</div>
                <div className="text-stone/50 text-sm mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Recent Bookings Table */}
          <div className="bg-white rounded-2xl border border-forest-100 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-forest-50">
              <h2 className="font-display font-semibold text-stone text-lg">Recent Bookings</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-forest-50 bg-forest-50/50">
                    <th className="text-left px-6 py-3 text-stone/50 font-medium">Guest</th>
                    <th className="text-left px-6 py-3 text-stone/50 font-medium">Property</th>
                    <th className="text-left px-6 py-3 text-stone/50 font-medium">Dates</th>
                    <th className="text-left px-6 py-3 text-stone/50 font-medium">Status</th>
                    <th className="text-right px-6 py-3 text-stone/50 font-medium">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {recentBookings.map((b) => (
                    <tr key={b.guest} className="border-b border-forest-50 last:border-0 hover:bg-forest-50/30 transition-colors">
                      <td className="px-6 py-4 font-medium text-stone">{b.guest}</td>
                      <td className="px-6 py-4 text-stone/60">{b.property}</td>
                      <td className="px-6 py-4 text-stone/60">{b.dates}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[b.status]}`}>
                          {b.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right font-display font-semibold text-forest-700">{b.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
