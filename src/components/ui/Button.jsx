import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export default function Button({
  children,
  variant = "primary",
  className,
  disabled = false,
  ...props
}) {
  return (
    <motion.button
      whileHover={!disabled ? { y: -3 } : undefined}
      whileTap={!disabled ? { scale: 0.96 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      disabled={disabled}
      className={cn(
        "px-5 py-2 rounded-md transition-colors duration-300 focus:outline-none",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        variant === "primary" &&
          "bg-[#9966cc] text-white hover:bg-[#8855bb]",
        variant === "outline" &&
          "border border-[#8855bb] hover:bg-[#9966cc] hover:text-white",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}