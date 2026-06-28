<<<<<<< HEAD
import { useState, useEffect } from "react";
=======
import { useState } from "react";
>>>>>>> eeb9e88102dce2f4bd3a375a6704b2c4c99cf346
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
<<<<<<< HEAD
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);
=======
>>>>>>> eeb9e88102dce2f4bd3a375a6704b2c4c99cf346

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/dashboard", label: "Dashboard" },
<<<<<<< HEAD
    { to: "/showcase", label: "UI Kit" },
=======
>>>>>>> eeb9e88102dce2f4bd3a375a6704b2c4c99cf346
    { to: "/login", label: "Login" },
  ];

  return (
<<<<<<< HEAD
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-forest-900/95 backdrop-blur border-b border-forest-100 dark:border-forest-700 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🏡</span>
            <span className="font-display text-xl font-bold text-forest-700 dark:text-forest-200">
=======
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-forest-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🏡</span>
            <span className="font-display text-xl font-700 text-forest-700">
>>>>>>> eeb9e88102dce2f4bd3a375a6704b2c4c99cf346
              StayNest
            </span>
          </Link>

<<<<<<< HEAD
=======
          {/* Desktop Links */}
>>>>>>> eeb9e88102dce2f4bd3a375a6704b2c4c99cf346
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
<<<<<<< HEAD
                      ? "text-forest-600 dark:text-forest-300 border-b-2 border-forest-500 pb-0.5"
                      : "text-stone dark:text-forest-300 hover:text-forest-600 dark:hover:text-white"
=======
                      ? "text-forest-600 border-b-2 border-forest-500 pb-0.5"
                      : "text-stone hover:text-forest-600"
>>>>>>> eeb9e88102dce2f4bd3a375a6704b2c4c99cf346
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
<<<<<<< HEAD

            {/* Dark mode toggle */}
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-lg text-stone dark:text-forest-200 hover:bg-forest-50 dark:hover:bg-forest-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {dark ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )}
            </button>

            <Link
              to="/login"
              className="px-4 py-1.5 bg-forest-600 text-white text-sm font-medium rounded-full hover:bg-forest-700 transition-colors"
=======
            <Link
              to="/login"
              className="ml-2 px-4 py-1.5 bg-forest-600 text-white text-sm font-medium rounded-full hover:bg-forest-700 transition-colors"
>>>>>>> eeb9e88102dce2f4bd3a375a6704b2c4c99cf346
            >
              Book Now
            </Link>
          </div>

<<<<<<< HEAD
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-lg text-stone dark:text-forest-200 hover:bg-forest-50 dark:hover:bg-forest-800"
              aria-label="Toggle dark mode"
            >
              {dark ? "☀️" : "🌙"}
            </button>
            <button
              className="p-2 rounded-lg text-stone dark:text-forest-200 hover:bg-forest-50 dark:hover:bg-forest-800"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-forest-100 dark:border-forest-700 py-3 space-y-1">
=======
          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-stone hover:bg-forest-50"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden border-t border-forest-100 py-3 space-y-1">
>>>>>>> eeb9e88102dce2f4bd3a375a6704b2c4c99cf346
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
<<<<<<< HEAD
                      ? "bg-forest-50 dark:bg-forest-800 text-forest-700 dark:text-forest-200"
                      : "text-stone dark:text-forest-300 hover:bg-forest-50 dark:hover:bg-forest-800"
=======
                      ? "bg-forest-50 text-forest-700"
                      : "text-stone hover:bg-forest-50 hover:text-forest-600"
>>>>>>> eeb9e88102dce2f4bd3a375a6704b2c4c99cf346
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
