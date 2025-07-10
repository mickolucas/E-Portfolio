export function Badge({ children, className = "", variant = "default", ...props }) {
  const baseClasses = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors"
  
  const variants = {
    default: "bg-blue-100 text-blue-800 hover:bg-blue-200",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
    success: "bg-green-100 text-green-800 hover:bg-green-200",
    destructive: "bg-red-100 text-red-800 hover:bg-red-200"
  }
  
  return (
    <span 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}