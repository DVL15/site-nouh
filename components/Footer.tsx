import Link from "next/link";
import { Phone, Mail, MapPin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="font-serif text-xl text-white mb-1">
              Nouhayla Hourrague
            </div>
            <div className="text-soft-purple text-xs uppercase tracking-widest mb-4">
              Neuropsychologue
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Cabinet de neuropsychologie en exercice libéral. Un accompagnement
              bienveillant pour chaque patient, à chaque étape de sa vie.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-medium text-sm uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/", label: "Accueil" },
                { href: "/a-propos", label: "À propos" },
                { href: "/consultations", label: "Consultations" },
                { href: "/informations-pratiques", label: "Informations pratiques" },
                { href: "/contact", label: "Contact & Rendez-vous" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-soft-lavender transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-medium text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+33600000000"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group"
              >
                <Phone
                  size={15}
                  className="text-soft-purple group-hover:text-soft-lavender flex-shrink-0"
                />
                06 00 00 00 00
              </a>
              <a
                href="mailto:contact@neuropsychologue-hourrague.fr"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group"
              >
                <Mail
                  size={15}
                  className="text-soft-purple group-hover:text-soft-lavender flex-shrink-0"
                />
                contact@neuropsychologue-hourrague.fr
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin
                  size={15}
                  className="text-soft-purple flex-shrink-0 mt-0.5"
                />
                <span>
                  [Adresse du cabinet]
                  <br />
                  [Code postal] [Ville]
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Nouhayla Hourrague – Neuropsychologue.
            Tous droits réservés.
          </p>
          <p className="text-xs text-gray-500 flex items-center gap-1">
            Fait avec <Heart size={11} className="text-soft-rose fill-soft-rose" /> pour le bien-être de mes patients
          </p>
        </div>
      </div>
    </footer>
  );
}
