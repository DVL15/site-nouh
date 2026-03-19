import type { Metadata } from "next";
import Link from "next/link";
import {
  Euro,
  CreditCard,
  Car,
  Train,
  Clock,
  Phone,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Info,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Informations pratiques",
  description:
    "Tarifs, remboursements, accès au cabinet de Nouhayla Hourrague, neuropsychologue. Toutes les informations pratiques pour votre rendez-vous.",
};

const tarifs = [
  {
    label: "Entretien initial (45 min)",
    price: "70 €",
    desc: "Premier contact, anamnèse, définition des objectifs",
  },
  {
    label: "Séance de bilan (1h – 1h30)",
    price: "90 €",
    desc: "Passation des tests neuropsychologiques",
  },
  {
    label: "Restitution orale (1h)",
    price: "80 €",
    desc: "Explication des résultats, remise du compte-rendu",
  },
  {
    label: "Bilan complet (pack tout inclus)",
    price: "À partir de 350 €",
    desc: "Entretien + 2 séances de tests + restitution + rapport écrit",
  },
  {
    label: "Suivi neuropsychologique (45 min)",
    price: "65 €",
    desc: "Séances de rééducation ou d'accompagnement cognitif",
  },
  {
    label: "Consultation téléphonique (20 min)",
    price: "30 €",
    desc: "Questions ponctuelles, suivi entre deux séances",
  },
];

export default function InformationsPratiquesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-cream-200 to-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <p className="section-subtitle">Infos pratiques</p>
            <h1 className="section-title text-4xl md:text-5xl">
              Tout ce qu'il faut savoir avant votre rendez-vous
            </h1>
            <p className="text-gray-500 leading-relaxed mt-4">
              Tarifs, remboursements, accès au cabinet : retrouvez ici toutes les
              informations pratiques pour préparer sereinement votre consultation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="section-subtitle">Tarification</p>
            <h2 className="section-title">Tarifs des consultations</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Mes honoraires sont fixés librement, conformément à la réglementation
              des psychologues en exercice libéral.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {tarifs.map((tarif, i) => (
              <AnimatedSection key={tarif.label} delay={i * 80}>
                <div className="card h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="font-medium text-gray-800 text-sm leading-tight">{tarif.label}</h3>
                      <span className="text-soft-purple font-serif text-lg font-semibold flex-shrink-0">
                        {tarif.price}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">{tarif.desc}</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-cream-200">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Euro size={11} />
                      Paiement en fin de séance
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Payment methods */}
          <AnimatedSection delay={200} className="mt-10">
            <div className="bg-cream-50 rounded-2xl p-6 border border-cream-200 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <CreditCard size={20} className="text-soft-purple" />
                <div>
                  <p className="text-sm font-medium text-gray-700">Moyens de paiement acceptés</p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Chèque · Espèces · Virement bancaire
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <AlertCircle size={20} className="text-amber-400" />
                <div>
                  <p className="text-sm font-medium text-gray-700">Annulation</p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Merci de prévenir 48h à l'avance en cas d'empêchement
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Remboursements */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <p className="section-subtitle">Prise en charge</p>
              <h2 className="section-title">Remboursements et financements</h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Les consultations de neuropsychologie ne sont actuellement pas remboursées
                par l'Assurance Maladie (Sécurité sociale). Cependant, plusieurs solutions
                de prise en charge existent.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Mutuelle complémentaire santé",
                    desc: "De nombreuses mutuelles remboursent tout ou partie des consultations de psychologues ou neuropsychologues. Renseignez-vous auprès de votre organisme (niveau de prise en charge variable selon votre contrat).",
                    highlight: true,
                  },
                  {
                    title: "MDPH (Maison Départementale des Personnes Handicapées)",
                    desc: "En cas de reconnaissance de handicap, certaines prestations de la MDPH peuvent financer les bilans neuropsychologiques dans le cadre d'un projet personnalisé.",
                    highlight: false,
                  },
                  {
                    title: "Fonds sociaux scolaires",
                    desc: "Pour les enfants en difficulté scolaire, certains établissements disposent de fonds d'aide pouvant contribuer au financement d'un bilan.",
                    highlight: false,
                  },
                  {
                    title: "Employeur / Médecine du travail",
                    desc: "Dans le cadre d'un accompagnement suite à un burn-out ou pour un aménagement de poste, l'employeur ou la médecine du travail peuvent participer au financement.",
                    highlight: false,
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className={`rounded-xl p-5 border ${
                      item.highlight
                        ? "bg-lavender-50 border-lavender-200"
                        : "bg-white border-cream-200"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-sage-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-gray-800 text-sm mb-1">{item.title}</h3>
                        <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              {/* Useful info box */}
              <div className="bg-white rounded-2xl p-6 border border-cream-200 shadow-sm mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Info size={18} className="text-soft-purple" />
                  <h3 className="font-medium text-gray-800">Bon à savoir</h3>
                </div>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li className="flex items-start gap-2">
                    <span className="text-soft-purple font-bold mt-0.5">·</span>
                    Une ordonnance médicale n'est pas nécessaire pour consulter une neuropsychologue.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-soft-purple font-bold mt-0.5">·</span>
                    Je peux vous fournir une facture détaillée pour faciliter votre démarche auprès de votre mutuelle.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-soft-purple font-bold mt-0.5">·</span>
                    Pour les situations financières difficiles, n'hésitez pas à m'en parler lors du premier entretien. Des solutions peuvent être envisagées.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-soft-purple font-bold mt-0.5">·</span>
                    Le compte-rendu du bilan peut être transmis directement au médecin référent si vous le souhaitez.
                  </li>
                </ul>
              </div>

              {/* Horaires */}
              <div className="bg-white rounded-2xl p-6 border border-cream-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={18} className="text-soft-purple" />
                  <h3 className="font-medium text-gray-800">Horaires du cabinet</h3>
                </div>
                <div className="space-y-2">
                  {[
                    { day: "Lundi", hours: "9h00 – 18h00" },
                    { day: "Mardi", hours: "9h00 – 18h00" },
                    { day: "Mercredi", hours: "9h00 – 12h00" },
                    { day: "Jeudi", hours: "9h00 – 18h00" },
                    { day: "Vendredi", hours: "9h00 – 17h00" },
                    { day: "Samedi – Dimanche", hours: "Fermé" },
                  ].map(({ day, hours }) => (
                    <div
                      key={day}
                      className="flex justify-between items-center py-2 border-b border-cream-100 last:border-0"
                    >
                      <span className="text-sm text-gray-600">{day}</span>
                      <span
                        className={`text-sm font-medium ${
                          hours === "Fermé" ? "text-gray-300" : "text-soft-purple"
                        }`}
                      >
                        {hours}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-4">
                  * Des créneaux en soirée peuvent être disponibles sur demande
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Accès */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="section-subtitle">Localisation</p>
            <h2 className="section-title">Accès au cabinet</h2>
            <p className="text-gray-500">
              [Adresse complète du cabinet] – [Code postal] [Ville]
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: Train,
                title: "Transports en commun",
                desc: "[Ligne de métro / bus / tram la plus proche]\nArrêt : [Nom de l'arrêt]\nÀ [X] minutes à pied",
              },
              {
                icon: Car,
                title: "En voiture",
                desc: "[Indications d'accès]\nParking à proximité : [Nom du parking]\nTarif : [X]€/heure",
              },
              {
                icon: Phone,
                title: "Contact rapide",
                desc: "06 00 00 00 00\ncontact@neuropsychologue-hourrague.fr\nRéponse sous 24-48h ouvrées",
              },
            ].map((item) => (
              <AnimatedSection key={item.title}>
                <div className="card text-center h-full">
                  <div className="w-12 h-12 mx-auto rounded-full bg-lavender-100 flex items-center justify-center mb-4">
                    <item.icon size={20} className="text-soft-purple" />
                  </div>
                  <h3 className="font-serif text-lg text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed whitespace-pre-line">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Map placeholder */}
          <AnimatedSection>
            <div className="bg-cream-100 rounded-3xl overflow-hidden border border-cream-200 h-72 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-lavender-200 flex items-center justify-center mb-3">
                  <Car size={22} className="text-soft-purple" />
                </div>
                <p className="text-gray-500 font-medium text-sm">Carte interactive</p>
                <p className="text-gray-400 text-xs mt-1">
                  Intégrez ici une iframe Google Maps avec l'adresse du cabinet
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* First visit */}
      <section className="py-20 bg-gradient-to-b from-lavender-50 to-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <p className="section-subtitle">Votre première visite</p>
            <h2 className="section-title">Comment se préparer ?</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                num: "01",
                title: "Rassemblez vos documents",
                desc: "Bilans scolaires, compte-rendus médicaux ou orthophoniques, résultats d'examens précédents si disponibles.",
              },
              {
                num: "02",
                title: "Notez vos questions",
                desc: "Notez vos inquiétudes, vos observations et vos questions. La première séance est faite pour vous écouter.",
              },
              {
                num: "03",
                title: "Pour les enfants",
                desc: "Expliquez à votre enfant qu'il va faire des jeux et des activités avec une spécialiste. Pas de stress, pas de notes !",
              },
              {
                num: "04",
                title: "Prévoyez du temps",
                desc: "Le premier entretien dure environ 45 minutes à 1 heure. Prévoyez un moment calme et sans contrainte de temps.",
              },
            ].map((item) => (
              <AnimatedSection key={item.num}>
                <div className="bg-white rounded-2xl p-6 border border-cream-200 shadow-sm flex gap-5">
                  <span className="font-serif text-3xl text-lavender-200 font-bold leading-none flex-shrink-0">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-2 text-sm">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={200} className="mt-10 text-center">
            <Link href="/contact" className="btn-primary">
              Prendre rendez-vous <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
