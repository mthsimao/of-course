import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";
import brFlag from "../assets/images/br-flag.png";
import euaFlag from "../assets/images/eua-flag.png";
import espFlag from "../assets/images/esp-flag.svg";

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const languages = [
    { code: "pt", label: "Português", flag: brFlag },
    { code: "en", label: "English", flag: euaFlag },
    { code: "es", label: "Español", flag: espFlag },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow border hover:bg-gray-100 focus:outline-none"
      >
        <span className="text-sm">Language</span>
        <ChevronDown size={16} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 bg-white shadow-md rounded-lg border py-1 w-44 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                i18n.changeLanguage(lang.code);
                setOpen(false);
              }}
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 w-full text-left"
            >
              <img src={lang.flag} alt={lang.label} className="w-7 h-5" />
              <span className="text-sm">{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
