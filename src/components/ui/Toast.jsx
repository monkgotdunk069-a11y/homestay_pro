import { useEffect } from "react";

/**
 * Toast component — displays a temporary notification
 *
 * @param {object} props
 * @param {boolean} props.isVisible - Controls whether the toast is shown
 * @param {function} props.onClose - Called after duration or when close is clicked
 * @param {string} props.message - The notification text
 * @param {'success'|'error'|'warning'|'info'} [props.type='success'] - Visual style
 * @param {number} [props.duration=3000] - Auto-dismiss after ms (0 = no auto-dismiss)
 */
export default function Toast({
  isVisible,
  onClose,
  message,
  type = "success",
  duration = 3000,
}) {
  useEffect(() => {
    if (!isVisible || duration === 0) return;
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  const styles = {
    success: {
      bar: "bg-forest-500",
      icon: "✅",
      wrapper: "border-forest-200 dark:border-forest-700",
    },
    error: {
      bar: "bg-red-500",
      icon: "❌",
      wrapper: "border-red-200 dark:border-red-700",
    },
    warning: {
      bar: "bg-clay-500",
      icon: "⚠️",
      wrapper: "border-clay-200 dark:border-clay-700",
    },
    info: {
      bar: "bg-blue-500",
      icon: "ℹ️",
      wrapper: "border-blue-200 dark:border-blue-700",
    },
  };

  const s = styles[type];

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-4">
      <div
        className={`flex items-start gap-3 bg-white dark:bg-forest-900 rounded-xl shadow-lg border ${s.wrapper} overflow-hidden min-w-[260px] max-w-sm`}
      >
        {/* Left colour bar */}
        <div className={`w-1 self-stretch ${s.bar} shrink-0`} />
        <div className="flex items-start gap-3 py-3 pr-4 w-full">
          <span className="text-lg mt-0.5">{s.icon}</span>
          <p className="text-sm text-stone dark:text-forest-200 flex-1 leading-snug">
            {message}
          </p>
          <button
            onClick={onClose}
            className="text-stone/30 hover:text-stone dark:hover:text-white transition-colors mt-0.5"
            aria-label="Dismiss"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
