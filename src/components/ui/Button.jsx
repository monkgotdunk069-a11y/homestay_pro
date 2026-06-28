/**
 * Button component
 *
 * @param {object} props
 * @param {'primary'|'secondary'|'danger'|'ghost'} [props.variant='primary'] - Visual style
 * @param {'sm'|'md'|'lg'} [props.size='md'] - Size of the button
 * @param {boolean} [props.disabled=false] - Disables the button
 * @param {boolean} [props.loading=false] - Shows a spinner and disables interaction
 * @param {string} [props.className] - Extra Tailwind classes
 * @param {React.ReactNode} props.children - Button label
 * @param {function} [props.onClick] - Click handler
 */
export default function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  className = "",
  children,
  onClick,
  ...rest
}) {
  const base =
    "inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-forest-600 hover:bg-forest-700 text-white focus:ring-forest-500 dark:bg-forest-500 dark:hover:bg-forest-600",
    secondary:
      "bg-forest-50 hover:bg-forest-100 text-forest-700 border border-forest-200 focus:ring-forest-400 dark:bg-forest-900 dark:text-forest-200 dark:border-forest-700 dark:hover:bg-forest-800",
    danger:
      "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500",
    ghost:
      "bg-transparent hover:bg-forest-50 text-stone dark:text-forest-200 dark:hover:bg-forest-800 focus:ring-forest-400",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {loading && (
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12" cy="12" r="10"
            stroke="currentColor" strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
          />
        </svg>
      )}
      {children}
    </button>
  );
}
