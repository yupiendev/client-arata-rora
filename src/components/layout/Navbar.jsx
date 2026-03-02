import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollDirection } from "../../hooks/useScrollDirection";
import content from "../../content/navbar.json";

export default function Navbar() {
  const isTop = useScrollDirection();
  const [isOpen, setIsOpen] = useState(false);

  const { brand, links } = content;

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: isTop ? "rgba(0,0,0,0)" : "rgba(245,254,253,0.9)",
        boxShadow: isTop
          ? "0px 0px 0px rgba(0,0,0,0)"
          : "0px 4px 20px rgba(0,0,0,0.05)"
      }}
      transition={{ duration: 0.3 }}
      className="fixed w-full z-50 backdrop-blur-md"
    >
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-6 px-6">

        {/* Brand */}
        <motion.a
          href="/"
          className="font-semibold text-black"
          whileHover={{ opacity: 0.7 }}
        >
          {brand}
        </motion.a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm">
          {links.map((link) => (
            <motion.li
              key={link.id}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href={link.href}
                className="font-medium"
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden relative w-6 h-6"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="absolute w-6 h-0.5 bg-black"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="absolute w-6 h-0.5 bg-black top-2.5"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 5 }}
            className="absolute w-6 h-0.5 bg-black top-5"
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-[#f5fefd]"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.08
                  }
                }
              }}
              className="flex flex-col items-center gap-6 py-6 text-black shadow"
            >
              {links.map((link) => (
                <motion.li
                  key={link.id}
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <a
                    href={link.href}
                    className="text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}