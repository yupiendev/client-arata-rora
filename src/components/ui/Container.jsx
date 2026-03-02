import { motion } from "framer-motion";

export default function Container({ children, className, asMotion = false }) {
  const Wrapper = asMotion ? motion.div : "div";

  return (
    <Wrapper
      className={`max-w-6xl mx-auto px-6 ${className}`}
      initial={asMotion ? { opacity: 0, y: 20 } : undefined}
      whileInView={asMotion ? { opacity: 1, y: 0 } : undefined}
      viewport={asMotion ? { once: true, amount: 0.3 } : undefined}
      transition={asMotion ? { duration: 0.6, ease: "easeOut" } : undefined}
    >
      {children}
    </Wrapper>
  );
}