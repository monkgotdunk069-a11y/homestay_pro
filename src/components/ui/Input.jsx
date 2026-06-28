/**
 * Input component
 *
 * @param {object} props
 * @param {string} [props.label] - Label text shown above the input
 * @param {string} [props.placeholder] - Placeholder text
 * @param {string} [props.type='text'] - HTML input type (text, email, password, etc.)
 * @param {string} [props.value] - Controlled value
 * @param {function} [props.onChange] - Change handler
 * @param {string} [props.error] - Error message shown below input
 * @param {string} [props.hint] - Hint text shown below input (hidden when error is set)
 * @param {boolean} [props.disabled=false] - Disables the input
 * @param {string} [props.className] - Extra Tailwind classes for the wrapper
 * @param {string} [props.name] - Input name attribute
 */
export default function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  error,
  hint,
  disabled = false,
  className = "",
  name,
  ...rest
}) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-stone dark:text-forest-200">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`
          w-full px-3 py-2.5 text-sm rounded-lg border transition-colors
          focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent
          disabled:opacity-50 disabled:cursor-not-allowed
          bg-white dark:bg-forest-950 dark:text-white
          ${error
            ? "border-red-400 focus:ring-red-400"
            : "border-forest-200 dark:border-forest-700 hover:border-forest-400"
          }
        `}
        {...rest}
      />
      {error && (
        <p className="text-xs text-red-500 mt-0.5">{error}</p>
      )}
      {!error && hint && (
        <p className="text-xs text-stone/50 dark:text-forest-400 mt-0.5">{hint}</p>
      )}
    </div>
  );
}
