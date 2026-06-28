import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Login() {
  const [tab, setTab] = useState("login");
  const [form, setForm] = useState({ email: "", password: "", name: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); alert(`${tab === "login" ? "Logging in" : "Registering"} as ${form.email}`); };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-forest-100 p-8">
            <div className="text-center mb-6">
              <span className="text-4xl">🏡</span>
              <h1 className="font-display text-2xl font-bold text-stone mt-2">
                {tab === "login" ? "Welcome back" : "Join StayNest"}
              </h1>
              <p className="text-stone/50 text-sm mt-1">
                {tab === "login" ? "Sign in to manage your homestay" : "Create your host or guest account"}
              </p>
            </div>

            {/* Tabs */}
            <div className="flex rounded-lg bg-forest-50 p-1 mb-6">
              {["login", "register"].map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`flex-1 py-1.5 text-sm font-medium rounded-md transition-colors capitalize ${
                    tab === t ? "bg-white text-forest-700 shadow-sm" : "text-stone/50 hover:text-stone"
                  }`}
                >
                  {t === "login" ? "Sign In" : "Register"}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {tab === "register" && (
                <div>
                  <label className="block text-sm font-medium text-stone mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Priya Sharma"
                    className="w-full border border-forest-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent"
                  />
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-stone mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="priya@example.com"
                  className="w-full border border-forest-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full border border-forest-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-forest-600 hover:bg-forest-700 text-white font-medium rounded-lg transition-colors text-sm mt-2"
              >
                {tab === "login" ? "Sign In" : "Create Account"}
              </button>
            </form>

            <p className="text-center text-stone/50 text-xs mt-5">
              {tab === "login" ? "Don't have an account? " : "Already have an account? "}
              <button onClick={() => setTab(tab === "login" ? "register" : "login")} className="text-forest-600 hover:underline font-medium">
                {tab === "login" ? "Register" : "Sign In"}
              </button>
            </p>
          </div>

          <p className="text-center text-stone/40 text-xs mt-4">
            By continuing, you agree to StayNest's{" "}
            <Link to="/" className="underline hover:text-stone">Terms of Service</Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
