import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Contact & Rendez-vous",
  description:
    "Contactez Nouhayla Hourrague, neuropsychologue, pour prendre rendez-vous ou poser vos questions. Formulaire de contact, téléphone et adresse du cabinet.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-lavender-50 to-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <p className="section-subtitle">Contact</p>
            <h1 className="section-title text-4xl md:text-5xl">
              Prenons contact ensemble
            </h1>
            <p className="text-gray-500 leading-relaxed mt-4">
              N'hésitez pas à me contacter pour toute question, pour prendre rendez-vous
              ou simplement pour vous orienter. Je vous répondrai dans les meilleurs délais.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <AnimatedSection>
              <h2 className="font-serif text-2xl text-gray-800 mb-8">
                Mes coordonnées
              </h2>

              <div className="space-y-5 mb-10">
                <a
                  href="tel:+33600000000"
                  className="flex items-start gap-4 p-4 rounded-2xl border border-cream-200 hover:border-lavender-200 hover:bg-lavender-50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-lavender-100 flex items-center justify-center flex-shrink-0 group-hover:bg-lavender-200 transition-colors">
                    <Phone size={18} className="text-soft-purple" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5 font-medium uppercase tracking-wide">Téléphone</p>
                    <p className="text-gray-700 font-medium">06 00 00 00 00</p>
                    <p className="text-xs text-gray-400 mt-0.5">Appel ou SMS</p>
                  </div>
                </a>

                <a
                  href="mailto:contact@neuropsychologue-hourrague.fr"
                  className="flex items-start gap-4 p-4 rounded-2xl border border-cream-200 hover:border-sage-200 hover:bg-sage-50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center flex-shrink-0 group-hover:bg-sage-200 transition-colors">
                    <Mail size={18} className="text-sage-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5 font-medium uppercase tracking-wide">Email</p>
                    <p className="text-gray-700 font-medium text-sm">
                      contact@neuropsychologue-hourrague.fr
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">Réponse sous 24-48h ouvrées</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-2xl border border-cream-200">
                  <div className="w-10 h-10 rounded-xl bg-cream-200 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5 font-medium uppercase tracking-wide">Adresse</p>
                    <p className="text-gray-700 font-medium">[Adresse du cabinet]</p>
                    <p className="text-gray-500 text-sm">[Code postal] [Ville]</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl border border-cream-200">
                  <div className="w-10 h-10 rounded-xl bg-lavender-100 flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-soft-purple" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5 font-medium uppercase tracking-wide">Horaires</p>
                    <p className="text-gray-700 font-medium">Lun – Ven : 9h00 – 18h00</p>
                    <p className="text-xs text-gray-400 mt-0.5">Samedi et dimanche : fermé</p>
                  </div>
                </div>
              </div>

              {/* FAQ rapide */}
              <div className="bg-cream-50 rounded-2xl p-6 border border-cream-200">
                <div className="flex items-center gap-2 mb-4">
                  <MessageCircle size={16} className="text-soft-purple" />
                  <h3 className="font-medium text-gray-800 text-sm">Questions fréquentes</h3>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      q: "Faut-il une ordonnance ?",
                      a: "Non, aucune ordonnance n'est nécessaire pour consulter. Vous pouvez me contacter directement.",
                    },
                    {
                      q: "Quel délai pour un rendez-vous ?",
                      a: "Le délai varie selon les périodes. Contactez-moi pour connaître les prochaines disponibilités.",
                    },
                    {
                      q: "Proposez-vous des consultations en visio ?",
                      a: "Les entretiens (hors passation de tests) peuvent être réalisés en visioconférence sur demande.",
                    },
                  ].map((faq) => (
                    <div key={faq.q} className="border-b border-cream-200 pb-4 last:border-0 last:pb-0">
                      <p className="text-sm font-medium text-gray-700 mb-1">{faq.q}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection delay={150}>
              <div className="bg-white rounded-3xl border border-cream-200 shadow-sm p-8">
                <h2 className="font-serif text-2xl text-gray-800 mb-2">
                  Envoyer un message
                </h2>
                <p className="text-sm text-gray-400 mb-8">
                  Remplissez ce formulaire et je vous contacterai rapidement.
                </p>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Note confidentielle */}
      <section className="py-10 bg-cream-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-xs text-gray-400 leading-relaxed">
            <strong className="text-gray-500">Confidentialité :</strong> Toutes les
            informations partagées dans ce formulaire sont strictement confidentielles et
            ne seront utilisées qu'à des fins de prise de contact. Je suis soumise au
            secret professionnel conformément au code de déontologie des psychologues.
          </p>
        </div>
      </section>
    </>
  );
}
