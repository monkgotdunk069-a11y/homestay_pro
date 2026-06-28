import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-forest-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🏡</span>
              <span className="font-display text-xl font-bold text-white">StayNest</span>
            </Link>
            <p className="text-sm leading-relaxed text-forest-400">
              India's trusted platform for homestay hosts and travellers. Powered by Python.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wide mb-3">Navigate</h4>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/dashboard", label: "Dashboard" },
                { to: "/login", label: "Login" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Hosts */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wide mb-3">For Hosts</h4>
            <ul className="space-y-2 text-sm">
              {["List Your Home", "Host Guidelines", "Pricing Tools", "Support"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wide mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>📧 hello@staynest.in</li>
              <li>📞 +91 98765 43210</li>
              <li>📍 New Delhi, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-forest-700 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-forest-500">
          <p>© 2025 StayNest. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
