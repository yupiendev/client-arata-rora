import { cn } from "../../utils/cn";

export default function Button({ children, variant = "primary", className }) {
  return (
    <button
      className={cn(
        "px-5 py-2 rounded-md transition-all duration-300",
        variant === "primary" && "bg-yellow-400 hover:scale-105",
        variant === "outline" && "border border-gray-400 hover:bg-gray-100",
        className
      )}
    >
      {children}
    </button>
  );
}
