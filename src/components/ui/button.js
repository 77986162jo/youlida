import React from "react";

// Une fonction utilitaire simple pour combiner les classes CSS
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Définition des variantes possibles du bouton
const variants = {
  default: "bg-blue-600 text-white hover:bg-blue-700",
  destructive: "bg-red-600 text-white hover:bg-red-700",
  outline: "border border-gray-300 text-gray-800 hover:bg-gray-100",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  ghost: "bg-transparent text-gray-800 hover:bg-gray-100",
  link: "text-blue-600 underline hover:text-blue-800",
};

// Définition des tailles possibles du bouton
const sizes = {
  default: "h-9 px-4 py-2 text-sm rounded-md",
  sm: "h-8 px-3 text-sm rounded-md",
  lg: "h-10 px-6 text-base rounded-md",
  icon: "h-9 w-9 flex items-center justify-center rounded-md",
};

// Le composant principal
export function Button({
  children,
  className = "",
  variant = "default",
  size = "default",
  ...props
}) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-medium transition disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
