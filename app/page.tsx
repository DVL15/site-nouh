import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Brain, Heart, Shield, Star, CheckCircle2, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PsychologistIllustration from "@/components/PsychologistIllustration";

export const metadata: Metadata = {
  title: "Accueil – Neuropsychologue Nouhayla Hourrague",
  description:
    "Bienvenue au cabinet de Nouhayla Hourrague, neuropsychologue. Bilans neuropsychologiques, accompagnements TDAH, TSA, troubles DYS, adultes. Cabinet bienveillant et personnalisé.",
};

const services = [
  {
    icon: Brain,
    title: "Bilans neuropsychologiques",
    desc: "Évaluation complète des fonctions cognitives pour l'enfant et l'adulte, avec remise d'un rapport détaillé.",
    color: "bg-lavender-100 text-lavender-600",
  },
  {
    icon: Star,
    title: "Troubles DYS & TDAH",
    desc: "Identification et accompagnement des troubles d'apprentissage et de l'attention pour libérer le potentiel.",
    color: "bg-sage-100 text-sage-600",
  },
  {
    icon: Shield,
    title: "Spectre autistique (TSA)",
    desc: "Bilan diagnostique et soutien personnalisé pour les enfants et adultes concernés par les TSA.",
    color: "bg-soft-rose/20 text-rose-500",
  },
  {
    icon: Heart,
    title: "Accompagnement adulte",
    desc: "Soutien face au burn-out, aux troubles de la mémoire, à l'anxiété et aux difficultés cognitives.",
    color: "bg-cream-200 text-amber-600",
  },
];

const values = [
  "Une écoute attentive et sans jugement",
  "Un accompagnement adapté à chaque profil",
  "Des outils validés scientifiquement",
  "Une communication claire avec les familles",
  "Un suivi coordonné avec les autres professionnels",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-lavender-100/60 blob opacity-70 blur-3xl" />
          <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-sage-100/60 blob opacity-60 blur-3xl" />
          <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-cream-200/80 blob opacity-80 blur-2xl" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 bg-lavender-100 text-lavender-600 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide mb-6">
                <div className="w-1.5 h-1.5 bg-lavender-500 rounded-full animate-pulse" />
                Cabinet en exercice libéral
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-gray-800 leading-tight mb-6">
                Un espace pour{" "}
                <span className="text-soft-purple italic">comprendre</span>,{" "}
                <span className="text-sage-500 italic">avancer</span> et{" "}
                <span className="text-soft-purple italic">s'épanouir</span>
              </h1>

              <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-lg">
                Bienvenue. Je suis Nouhayla Hourrague, neuropsychologue. J'accompagne
                enfants, adolescents et adultes avec bienveillance, en cherchant à
                comprendre chaque personne dans sa singularité.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Prendre rendez-vous <ArrowRight size={16} />
                </Link>
                <Link href="/consultations" className="btn-outline">
                  Mes consultations
                </Link>
              </div>

              {/* Trust signals */}
              <div className="mt-10 flex flex-wrap gap-6">
                {["Numéro ADELI enregistré", "Formation universitaire", "Secret professionnel"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-gray-500">
                      <CheckCircle2 size={15} className="text-sage-400" />
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Visual card */}
            <div className="relative animate-fade-in">
              <div className="relative bg-white rounded-3xl shadow-xl p-8 border border-cream-200">
                {/* Decorative corner accent */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-lavender-100 rounded-full -z-10" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-sage-100 rounded-full -z-10" />

                <div className="text-center mb-8">
                  <PsychologistIllustration className="w-32 h-32 mx-auto mb-4 drop-shadow-md" />
                  <h2 className="font-serif text-xl text-gray-800">Nouhayla Hourrague</h2>
                  <p className="text-soft-purple text-sm font-medium mt-1">Neuropsychologue</p>
                </div>

                <div className="space-y-3">
                  {[
                    { label: "Bilans neuropsychologiques", badge: "Enfant & Adulte" },
                    { label: "Troubles DYS / TDAH / TSA", badge: "Spécialisée" },
                    { label: "Accompagnement adulte", badge: "Burn-out, mémoire" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between p-3 bg-cream-50 rounded-xl border border-cream-200"
                    >
                      <span className="text-sm font-medium text-gray-700">{item.label}</span>
                      <span className="text-xs text-soft-purple bg-lavender-50 px-2.5 py-1 rounded-full">
                        {item.badge}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-cream-200 text-center">
                  <p className="text-xs text-gray-400 mb-3">Première consultation disponible</p>
                  <Link href="/contact" className="btn-primary w-full justify-center text-xs py-3">
                    Prendre rendez-vous
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="section-subtitle">Ce que je propose</p>
            <h2 className="section-title">Des accompagnements adaptés à chaque besoin</h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              Que vous soyez parent inquiet pour votre enfant, adulte en difficulté ou
              professionnel de santé adressant un patient, je suis là pour vous aider.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 100}>
                <div className="card h-full">
                  <div className={`w-12 h-12 rounded-2xl ${service.color} flex items-center justify-center mb-4`}>
                    <service.icon size={22} />
                  </div>
                  <h3 className="font-serif text-lg text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
                  <Link
                    href="/consultations"
                    className="inline-flex items-center gap-1 mt-4 text-soft-purple text-xs font-medium hover:gap-2 transition-all"
                  >
                    En savoir plus <ChevronRight size={13} />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values / About teaser */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="section-subtitle">Mon approche</p>
              <h2 className="section-title">
                Un accompagnement fondé sur l'écoute et la science
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Je crois profondément que chaque personne mérite un regard attentif sur ce
                qu'elle vit. Ma pratique associe rigueur scientifique et chaleur humaine pour
                offrir un cadre sécurisant où chacun peut progresser à son rythme.
              </p>

              <div className="space-y-3 mb-8">
                {values.map((value) => (
                  <div key={value} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={12} className="text-sage-500" />
                    </div>
                    <span className="text-sm text-gray-600">{value}</span>
                  </div>
                ))}
              </div>

              <Link href="/a-propos" className="btn-primary">
                En savoir plus sur moi <ArrowRight size={16} />
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-cream-200">
                  <blockquote className="font-serif text-xl text-gray-700 italic leading-relaxed mb-6">
                    "La neuropsychologie, c'est l'art de regarder le cerveau pour mieux
                    comprendre la personne — avec tout ce qu'elle porte, ce qu'elle ressent
                    et ce qu'elle peut devenir."
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lavender-200 to-sage-200 flex items-center justify-center text-sm font-serif text-white">
                      NH
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">Nouhayla Hourrague</p>
                      <p className="text-xs text-gray-400">Neuropsychologue</p>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -z-10 -bottom-6 -right-6 w-48 h-48 bg-lavender-100 rounded-full opacity-60" />
                <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-sage-100 rounded-full opacity-60" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-soft-purple/90 to-lavender-500/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
              Prêt(e) à franchir le premier pas ?
            </h2>
            <p className="text-lavender-100 mb-8 text-lg">
              Contactez-moi pour un premier échange ou pour prendre rendez-vous.
              Je réponds à toutes vos questions avec bienveillance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-soft-purple px-8 py-3.5 rounded-full font-medium text-sm hover:bg-cream-50 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Prendre rendez-vous
              </Link>
              <Link
                href="/informations-pratiques"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-medium text-sm hover:bg-white/10 transition-all"
              >
                Tarifs & accès
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
