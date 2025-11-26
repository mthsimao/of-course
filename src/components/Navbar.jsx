import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/images/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Início", href: "#" },
    { label: "Cursos", href: "#cursos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50 w-full">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-primary">
          <img src={Logo} alt="Of Course" className="w-26 h-16" />
        </a>

        <div className="hidden md:flex items-center gap-8 cursor-pointer">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted hover:text-primary font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-3 p-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-muted hover:text-primary font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
