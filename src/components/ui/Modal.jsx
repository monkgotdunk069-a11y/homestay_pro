import { useEffect } from "react";

/**
 * Modal component
 *
 * @param {object} props
 * @param {boolean} props.isOpen - Controls visibility
 * @param {function} props.onClose - Called when backdrop or close button is clicked
 * @param {string} [props.title] - Modal heading
 * @param {React.ReactNode} props.children - Modal body content
 * @param {React.ReactNode} [props.footer] - Optional footer (e.g. action buttons)
 * @param {'sm'|'md'|'lg'} [props.size='md'] - Width of the modal
 */
export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = "md",
}) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    if (isOpen) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  const widths = { sm: "max-w-sm", md: "max-w-md", lg: "max-w-lg" };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Panel */}
      <div
        className={`relative w-full ${widths[size]} bg-white dark:bg-forest-900 rounded-2xl shadow-xl border border-forest-100 dark:border-forest-700 flex flex-col`}
      >
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between px-6 py-4 border-b border-forest-100 dark:border-forest-700">
            <h2 className="font-display font-semibold text-stone dark:text-white text-lg">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-stone/40 hover:text-stone hover:bg-forest-50 dark:hover:bg-forest-800 transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
        {/* Body */}
        <div className="px-6 py-5 text-stone dark:text-forest-200 text-sm leading-relaxed">
          {children}
        </div>
        {/* Footer */}
        {footer && (
          <div className="px-6 py-4 border-t border-forest-100 dark:border-forest-700 flex justify-end gap-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
