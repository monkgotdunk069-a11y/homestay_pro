import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button, Input, Modal, Toast, Loader } from "../components/ui";

export default function UIShowcase() {
  const [modalOpen, setModalOpen] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: "", type: "success" });
  const [inputVal, setInputVal] = useState("");
  const [inputError, setInputError] = useState("");

  const showToast = (message, type) => setToast({ visible: true, message, type });

  const validateInput = (v) => {
    setInputVal(v);
    setInputError(v.length > 0 && v.length < 3 ? "Must be at least 3 characters" : "");
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream dark:bg-forest-950">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-forest-800 dark:bg-forest-950 text-white py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-forest-300 text-xs uppercase tracking-widest font-medium">Component Library</span>
            <h1 className="font-display text-3xl md:text-4xl font-bold mt-1">UI Kit Showcase</h1>
            <p className="text-forest-300 mt-2 text-sm">All components from <code className="bg-forest-700 px-1.5 py-0.5 rounded">/components/ui/</code></p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">

          {/* BUTTON */}
          <section>
            <h2 className="font-display text-xl font-bold text-stone dark:text-white mb-1">Button</h2>
            <p className="text-stone/50 dark:text-forest-400 text-sm mb-6">4 variants × 3 sizes + loading state</p>
            <div className="bg-white dark:bg-forest-900 rounded-2xl border border-forest-100 dark:border-forest-700 p-6 space-y-5">
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
              <div className="flex flex-wrap gap-3 items-center">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button loading>Saving…</Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>
          </section>

          {/* INPUT */}
          <section>
            <h2 className="font-display text-xl font-bold text-stone dark:text-white mb-1">Input</h2>
            <p className="text-stone/50 dark:text-forest-400 text-sm mb-6">With label, hint, validation error states</p>
            <div className="bg-white dark:bg-forest-900 rounded-2xl border border-forest-100 dark:border-forest-700 p-6 grid sm:grid-cols-2 gap-5">
              <Input label="Property Name" placeholder="e.g. Himalayan Cedar Retreat" hint="This will appear on your listing page" />
              <Input label="Email Address" type="email" placeholder="priya@example.com" />
              <Input
                label="City"
                placeholder="e.g. Manali"
                value={inputVal}
                onChange={(e) => validateInput(e.target.value)}
                error={inputError}
                hint="Type a city name to test validation"
              />
              <Input label="Disabled field" placeholder="Cannot edit this" disabled />
            </div>
          </section>

          {/* MODAL */}
          <section>
            <h2 className="font-display text-xl font-bold text-stone dark:text-white mb-1">Modal</h2>
            <p className="text-stone/50 dark:text-forest-400 text-sm mb-6">Accessible modal with backdrop, ESC to close, and footer actions</p>
            <div className="bg-white dark:bg-forest-900 rounded-2xl border border-forest-100 dark:border-forest-700 p-6">
              <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
            </div>
            <Modal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              title="Confirm Booking Cancellation"
              footer={
                <>
                  <Button variant="secondary" onClick={() => setModalOpen(false)}>Keep Booking</Button>
                  <Button variant="danger" onClick={() => { setModalOpen(false); showToast("Booking cancelled.", "error"); }}>
                    Cancel Booking
                  </Button>
                </>
              }
            >
              <p>Are you sure you want to cancel your booking at <strong>Himalayan Cedar Retreat</strong> for Jun 24–27?</p>
              <p className="mt-3 text-stone/50 dark:text-forest-400">Cancellations within 48 hours are non-refundable per our policy.</p>
            </Modal>
          </section>

          {/* TOAST */}
          <section>
            <h2 className="font-display text-xl font-bold text-stone dark:text-white mb-1">Toast</h2>
            <p className="text-stone/50 dark:text-forest-400 text-sm mb-6">4 types — auto-dismisses after 3 seconds</p>
            <div className="bg-white dark:bg-forest-900 rounded-2xl border border-forest-100 dark:border-forest-700 p-6 flex flex-wrap gap-3">
              <Button variant="primary" onClick={() => showToast("Booking confirmed! Check your email.", "success")}>Success</Button>
              <Button variant="danger" onClick={() => showToast("Payment failed. Try again.", "error")}>Error</Button>
              <Button variant="secondary" onClick={() => showToast("Check-in is tomorrow at 11 AM.", "warning")}>Warning</Button>
              <Button variant="ghost" onClick={() => showToast("3 new messages from your host.", "info")}>Info</Button>
            </div>
            <Toast
              isVisible={toast.visible}
              message={toast.message}
              type={toast.type}
              onClose={() => setToast({ ...toast, visible: false })}
            />
          </section>

          {/* LOADER */}
          <section>
            <h2 className="font-display text-xl font-bold text-stone dark:text-white mb-1">Loader</h2>
            <p className="text-stone/50 dark:text-forest-400 text-sm mb-6">3 variants × 3 sizes with optional label</p>
            <div className="bg-white dark:bg-forest-900 rounded-2xl border border-forest-100 dark:border-forest-700 p-6 grid sm:grid-cols-3 gap-8">
              <div className="flex flex-col items-center gap-4">
                <p className="text-xs text-stone/40 dark:text-forest-500 uppercase tracking-wide">Spinner</p>
                <Loader variant="spinner" size="sm" />
                <Loader variant="spinner" size="md" />
                <Loader variant="spinner" size="lg" label="Loading stays…" />
              </div>
              <div className="flex flex-col items-center gap-4">
                <p className="text-xs text-stone/40 dark:text-forest-500 uppercase tracking-wide">Dots</p>
                <Loader variant="dots" size="sm" />
                <Loader variant="dots" size="md" />
                <Loader variant="dots" size="lg" label="Fetching bookings…" />
              </div>
              <div className="flex flex-col items-center gap-4">
                <p className="text-xs text-stone/40 dark:text-forest-500 uppercase tracking-wide">Bar</p>
                <Loader variant="bar" size="sm" />
                <Loader variant="bar" size="md" />
                <Loader variant="bar" size="lg" label="Uploading photos…" />
              </div>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
