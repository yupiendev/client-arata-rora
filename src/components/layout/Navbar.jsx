import { useState } from "react";
import { useScrollDirection } from "../../hooks/useScrollDirection";
import { cn } from "../../utils/cn";
import content from "../../content/navbar.json";

export default function Navbar() {
  const isTop = useScrollDirection();
  const [isOpen, setIsOpen] = useState(false);

  const { brand, links } = content;

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isTop
          ? "hidden md:block bg-transparent text-black"
          : "block bg-white/90 backdrop-blur-md shadow text-black"
      )}
    >
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-6 px-6">

        {/* Brand */}
        <a
          href="/"
          className="font-semibold text-black"
        >
          {brand}
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="hover:opacity-70 transition-opacity"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span className="w-6 h-0.5 bg-current" />
          <span className="w-6 h-0.5 bg-current" />
          <span className="w-6 h-0.5 bg-current" />
        </button>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="flex flex-col items-center gap-6 py-6 bg-white text-black shadow">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="text-sm hover:opacity-70 transition-opacity"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
