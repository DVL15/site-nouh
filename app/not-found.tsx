import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 bg-cream-50">
      <div className="text-center px-4">
        <div className="font-serif text-8xl text-lavender-200 font-bold mb-4">404</div>
        <h1 className="font-serif text-2xl text-gray-800 mb-4">
          Page introuvable
        </h1>
        <p className="text-gray-500 mb-8 max-w-sm mx-auto leading-relaxed">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link href="/" className="btn-primary">
          <ArrowLeft size={16} /> Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
