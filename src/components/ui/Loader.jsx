/**
 * Loader component — animated loading indicator
 *
 * @param {object} props
 * @param {'spinner'|'dots'|'bar'} [props.variant='spinner'] - Animation style
 * @param {'sm'|'md'|'lg'} [props.size='md'] - Size of the loader
 * @param {string} [props.label] - Accessible label / visible text below spinner
 * @param {boolean} [props.fullscreen=false] - Centers loader over the full viewport
 * @param {string} [props.className] - Extra Tailwind classes
 */
export default function Loader({
  variant = "spinner",
  size = "md",
  label,
  fullscreen = false,
  className = "",
}) {
  const sizes = { sm: "w-4 h-4", md: "w-8 h-8", lg: "w-12 h-12" };
  const dotSizes = { sm: "w-1.5 h-1.5", md: "w-2.5 h-2.5", lg: "w-4 h-4" };

  const inner = (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      {variant === "spinner" && (
        <svg
          className={`animate-spin text-forest-500 ${sizes[size]}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z" />
        </svg>
      )}

      {variant === "dots" && (
        <div className="flex items-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`rounded-full bg-forest-500 ${dotSizes[size]} animate-bounce`}
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      )}

      {variant === "bar" && (
        <div className={`rounded-full bg-forest-100 dark:bg-forest-800 overflow-hidden ${size === "sm" ? "w-24 h-1" : size === "md" ? "w-40 h-1.5" : "w-56 h-2"}`}>
          <div className="h-full bg-forest-500 rounded-full animate-pulse w-2/3" />
        </div>
      )}

      {label && (
        <span className="text-sm text-stone/60 dark:text-forest-400">{label}</span>
      )}
    </div>
  );

  if (fullscreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-forest-950/80 backdrop-blur-sm">
        {inner}
      </div>
    );
  }

  return inner;
}
