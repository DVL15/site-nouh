"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/consultations", label: "Consultations" },
  { href: "/informations-pratiques", label: "Infos pratiques" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-cream-200"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="group flex flex-col leading-none">
            <span className="font-serif text-lg md:text-xl font-semibold text-gray-800 group-hover:text-soft-purple transition-colors">
              Nouhayla Hourrague
            </span>
            <span className="text-xs text-soft-purple font-medium tracking-wider uppercase mt-0.5">
              Neuropsychologue
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link pb-0.5 ${
                  pathname === link.href
                    ? "text-soft-purple after:w-full"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary py-2.5 px-5 text-xs">
              Prendre rendez-vous
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-soft-purple hover:bg-lavender-50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-lavender-50 text-soft-purple"
                    : "text-gray-600 hover:bg-cream-100 hover:text-soft-purple"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 px-4">
              <Link href="/contact" className="btn-primary w-full justify-center">
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
