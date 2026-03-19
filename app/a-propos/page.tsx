import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, Award, BookOpen, ArrowRight, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PsychologistIllustration from "@/components/PsychologistIllustration";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez le parcours de Nouhayla Hourrague, neuropsychologue en exercice libéral. Formation, valeurs et approche thérapeutique bienveillante.",
};

const formations = [
  {
    year: "20XX",
    degree: "Master 2 en Neuropsychologie clinique",
    school: "Université [Nom de l'université]",
    detail: "Spécialisation en évaluation cognitive et neuropsychologie de l'enfant",
  },
  {
    year: "20XX",
    degree: "Licence & Master 1 de Psychologie",
    school: "Université [Nom de l'université]",
    detail: "Parcours clinique avec stages en milieux hospitalier et scolaire",
  },
  {
    year: "20XX",
    degree: "Formation continue – Bilan TDAH",
    school: "Formation professionnelle agréée",
    detail: "Outils d'évaluation et de diagnostic des troubles attentionnels",
  },
  {
    year: "20XX",
    degree: "Formation – Outils TSA",
    school: "Formation professionnelle agréée",
    detail: "ADOS-2, ADI-R et accompagnement des personnes autistes",
  },
];

const approaches = [
  {
    icon: BookOpen,
    title: "Approche scientifique",
    desc: "J'utilise uniquement des outils d'évaluation validés et standardisés, permettant une analyse précise et objective des capacités cognitives.",
  },
  {
    icon: Award,
    title: "Approche centrée sur la personne",
    desc: "Chaque bilan est pensé autour de la personne, pas seulement de ses difficultés. Je cherche à mettre en lumière les ressources autant que les fragilités.",
  },
  {
    icon: GraduationCap,
    title: "Approche développementale",
    desc: "Je prends en compte le contexte de vie, l'histoire et l'environnement de chaque patient pour interpréter les résultats avec justesse et nuance.",
  },
];

export default function AProposPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-lavender-50 to-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <p className="section-subtitle">À propos</p>
            <h1 className="section-title text-4xl md:text-5xl">
              Une neuropsychologue à votre écoute
            </h1>
            <p className="text-gray-500 leading-relaxed mt-4">
              Derrière chaque bilan, il y a une personne. Et c'est cette personne que je
              m'engage à accompagner, avec rigueur et humanité.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Présentation */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Photo placeholder */}
            <AnimatedSection>
              <div className="relative">
                <div className="aspect-[4/5] bg-gradient-to-br from-lavender-100 via-lavender-50 to-sage-100 rounded-3xl flex items-center justify-center">
                  <div className="text-center">
                    <PsychologistIllustration className="w-56 h-56 mx-auto mb-4 drop-shadow-lg" />
                    <p className="text-gray-500 text-sm font-medium">Nouhayla Hourrague</p>
                    <p className="text-soft-purple text-xs mt-1">Neuropsychologue</p>
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-lg p-4 border border-cream-200">
                  <p className="text-2xl font-serif text-soft-purple font-bold">N°ADELI</p>
                  <p className="text-xs text-gray-400 mt-0.5">Professionnelle enregistrée</p>
                </div>
                <div className="absolute -top-5 -left-5 bg-sage-100 rounded-2xl p-3">
                  <p className="text-sage-600 text-xs font-medium text-center">Exercice<br/>libéral</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Texte */}
            <AnimatedSection delay={150}>
              <p className="section-subtitle">Mon parcours</p>
              <h2 className="section-title">
                Une vocation née de la fascination pour le cerveau humain
              </h2>

              <div className="space-y-5 text-gray-500 leading-relaxed">
                <p>
                  Dès mes premières années d'études en psychologie, j'ai été captivée par
                  le fonctionnement du cerveau et la manière dont il façonne notre façon de
                  percevoir le monde, d'apprendre et de ressentir. C'est cette curiosité
                  qui m'a naturellement orientée vers la neuropsychologie clinique.
                </p>
                <p>
                  Après un Master 2 spécialisé, j'ai exercé dans différents contextes
                  — hospitalier, scolaire, libéral — qui m'ont permis de développer une
                  vision complète et nuancée des besoins de mes patients, qu'il s'agisse
                  d'un enfant en difficulté scolaire ou d'un adulte confronté à des
                  changements cognitifs.
                </p>
                <p>
                  Aujourd'hui, j'exerce en cabinet libéral et je prends le temps nécessaire
                  pour chaque patient. Mon objectif : que chaque personne qui pousse ma porte
                  reparte avec des réponses claires, des pistes concrètes et, surtout, un
                  sentiment d'être réellement comprise.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { num: "100%", label: "Engagement envers chaque patient" },
                  { num: "Bienveillante", label: "Approche chaleureuse et douce" },
                  { num: "Validée", label: "Outils scientifiques reconnus" },
                  { num: "Complète", label: "Du bilan au suivi post-consultation" },
                ].map((item) => (
                  <div key={item.label} className="bg-cream-50 rounded-xl p-4 border border-cream-200">
                    <p className="font-serif text-lg text-soft-purple font-semibold">{item.num}</p>
                    <p className="text-xs text-gray-500 mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Formation */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="section-subtitle">Parcours académique</p>
            <h2 className="section-title">Formation & qualifications</h2>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-lavender-200 hidden sm:block" />

            <div className="space-y-6">
              {formations.map((item, i) => (
                <AnimatedSection key={i} delay={i * 100}>
                  <div className="flex gap-6">
                    <div className="hidden sm:flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-lavender-100 border-2 border-lavender-200 flex items-center justify-center flex-shrink-0 z-10">
                        <GraduationCap size={18} className="text-soft-purple" />
                      </div>
                    </div>
                    <div className="flex-1 bg-white rounded-2xl p-6 border border-cream-200 shadow-sm">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <h3 className="font-serif text-lg text-gray-800">{item.degree}</h3>
                        <span className="text-xs bg-lavender-100 text-lavender-600 px-3 py-1 rounded-full font-medium flex-shrink-0">
                          {item.year}
                        </span>
                      </div>
                      <p className="text-soft-purple text-sm font-medium mb-1">{item.school}</p>
                      <p className="text-gray-400 text-sm">{item.detail}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approche */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="section-subtitle">Philosophie de travail</p>
            <h2 className="section-title">Mon approche thérapeutique</h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              Ma pratique repose sur trois piliers qui guident chaque consultation et
              chaque bilan que je réalise.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {approaches.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 120}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-lavender-100 flex items-center justify-center mb-5">
                    <item.icon size={26} className="text-soft-purple" />
                  </div>
                  <h3 className="font-serif text-xl text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={200} className="mt-14">
            <div className="bg-gradient-to-r from-lavender-50 to-sage-50 rounded-3xl p-8 md:p-10 border border-lavender-100">
              <p className="section-subtitle text-center">Ce en quoi je crois</p>
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                {[
                  "Chaque cerveau est unique et mérite une attention particulière",
                  "Un diagnostic n'est pas une étiquette, c'est un outil pour avancer",
                  "Les parents et proches sont des partenaires essentiels du suivi",
                  "La bienveillance ne compromet pas le sérieux de l'évaluation",
                  "Le respect du rythme de chacun est fondamental",
                  "L'objectif final est toujours l'autonomie et le bien-être du patient",
                ].map((belief) => (
                  <div key={belief} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-sage-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-600">{belief}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="section-title mb-4">Envie d'en savoir plus ?</h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Découvrez les consultations proposées ou contactez-moi directement pour
              toute question concernant votre situation ou celle de votre enfant.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/consultations" className="btn-primary">
                Voir les consultations <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-outline">
                Me contacter
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
