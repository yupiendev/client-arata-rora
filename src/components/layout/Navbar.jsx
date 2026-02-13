import { useScrollDirection } from "../../hooks/useScrollDirection";
import { cn } from "../../utils/cn";

export default function Navbar() {
  const isTop = useScrollDirection();

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isTop ? "bg-transparent text-white" : "bg-white shadow text-black"
      )}
    >
      <nav className="max-w-6xl mx-auto flex justify-between py-6 px-6">
        <h1 className="font-semibold">Madelyn Torff</h1>

        <ul className="flex gap-8 text-sm">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contacts</a></li>
        </ul>
      </nav>
    </header>
  );
}
