import { useState } from "react";
import { Menu, X } from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import Logo from "../assets/images/logo.png"

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const navLinks = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.courses"), href: "/cursos" },
    { label: t("nav.contact"), href: "/contato" }
  ];

  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-blue-600">
            <img src={Logo} alt="Of Course" className="w-26 h-16" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-700 hover:text-blue-600 font-medium">
              {link.label}
            </a>
          ))}

          <LanguageSelector />
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-3 bg-white shadow rounded-lg p-4 space-y-3">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="block text-gray-700 hover:text-blue-600 font-medium">
              {link.label}
            </a>
          ))}

          <div className="pt-2 border-t">
            <LanguageSelector />
          </div>
        </div>
      )}
    </nav>
  );
}
