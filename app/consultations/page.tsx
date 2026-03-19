import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Users, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Consultations",
  description:
    "Bilans neuropsychologiques pour enfants et adultes, TDAH, TSA, troubles DYS, accompagnement adulte. Découvrez toutes les consultations proposées par Nouhayla Hourrague.",
};

const consultations = [
  {
    id: "bilan",
    tag: "Enfant & Adulte",
    tagColor: "bg-lavender-100 text-lavender-600",
    title: "Bilan neuropsychologique",
    subtitle: "Évaluation complète des fonctions cognitives",
    duration: "3 à 4 séances",
    public: "Dès 4 ans et adultes",
    intro:
      "Le bilan neuropsychologique est une évaluation approfondie qui permet de dresser un profil précis des forces et des fragilités d'une personne dans différents domaines cognitifs : mémoire, attention, langage, fonctions exécutives, vitesse de traitement…",
    content: [
      {
        step: "Entretien initial",
        desc: "Une première rencontre pour recueillir l'histoire de vie, les motifs de consultation et les attentes. C'est un moment d'échange essentiel pour comprendre la personne dans sa globalité.",
      },
      {
        step: "Passation des tests",
        desc: "Un ensemble d'épreuves standardisées, adaptées à l'âge, présentées sous forme de jeux ou d'exercices. Elles explorent les différentes fonctions cognitives de manière rigoureuse et validée.",
      },
      {
        step: "Analyse et interprétation",
        desc: "Chaque résultat est comparé à des données normatives pour interpréter les performances en tenant compte du profil global et du contexte de vie.",
      },
      {
        step: "Restitution orale",
        desc: "Une séance dédiée pour expliquer les résultats de manière claire et accessible, répondre à toutes vos questions et définir ensemble les pistes d'accompagnement.",
      },
      {
        step: "Rapport écrit",
        desc: "Un compte-rendu complet est remis, utilisable par les professionnels de santé, les établissements scolaires ou les services sociaux selon vos besoins.",
      },
    ],
    forWhom: [
      "Enfant présentant des difficultés scolaires inexpliquées",
      "Suspicion de troubles des apprentissages",
      "Demande de RQTH ou d'aménagement scolaire/professionnel",
      "Adulte souhaitant mieux comprendre son fonctionnement cognitif",
      "Préparation à une orientation scolaire ou professionnelle",
    ],
    color: "from-lavender-50 to-lavender-100",
    accent: "text-lavender-600",
    border: "border-lavender-200",
  },
  {
    id: "dys",
    tag: "Troubles DYS",
    tagColor: "bg-sage-100 text-sage-600",
    title: "Troubles DYS & Apprentissages",
    subtitle: "Dyslexie, dyspraxie, dysorthographie, dyscalculie…",
    duration: "2 à 3 séances",
    public: "Enfants & adolescents",
    intro:
      "Les troubles DYS sont des troubles spécifiques du neurodéveloppement qui affectent l'acquisition de certaines compétences (lecture, écriture, calcul, coordination…). Ils ne sont pas liés à un manque d'intelligence ou d'efforts, mais à une organisation cérébrale différente.",
    content: [
      {
        step: "Bilan de la lecture & écriture",
        desc: "Évaluation précise des compétences en lecture (déchiffrage, fluence, compréhension) et en orthographe pour identifier une éventuelle dyslexie ou dysorthographie.",
      },
      {
        step: "Bilan graphomoteur",
        desc: "Exploration des capacités de coordination, de planification et de réalisation graphique pour détecter une dyspraxie visuo-spatiale ou développementale.",
      },
      {
        step: "Bilan des habiletés logico-mathématiques",
        desc: "Évaluation du traitement des nombres et des habiletés de calcul pour identifier une éventuelle dyscalculie.",
      },
      {
        step: "Préconisations ciblées",
        desc: "Des recommandations concrètes pour l'école, la famille et les professionnels de rééducation (orthophoniste, psychomotricien…) afin d'adapter l'environnement au profil de l'enfant.",
      },
    ],
    forWhom: [
      "Enfant qui « renverse » les lettres ou a du mal à lire malgré des efforts",
      "Difficultés persistantes en écriture ou en calcul",
      "Trouble de la coordination ou maladresse inhabituelle",
      "Besoin d'un diagnostic pour l'accès à des aménagements scolaires",
      "Orientation vers un professionnel de la rééducation",
    ],
    color: "from-sage-50 to-sage-100",
    accent: "text-sage-600",
    border: "border-sage-200",
  },
  {
    id: "tdah",
    tag: "TDAH",
    tagColor: "bg-amber-100 text-amber-600",
    title: "Troubles de l'attention (TDAH)",
    subtitle: "Inattention, hyperactivité, impulsivité",
    duration: "2 à 3 séances",
    public: "Enfants, ados & adultes",
    intro:
      "Le TDAH (Trouble du Déficit de l'Attention avec ou sans Hyperactivité) est un trouble neurodéveloppemental fréquent, souvent méconnu chez les adultes. Il se caractérise par des difficultés à maintenir l'attention, à contrôler ses impulsions, parfois associées à une agitation motrice ou mentale.",
    content: [
      {
        step: "Évaluation des fonctions attentionnelles",
        desc: "Tests spécifiques mesurant les différentes composantes de l'attention : soutenue, sélective, divisée. Identification précise du profil attentionnel.",
      },
      {
        step: "Bilan des fonctions exécutives",
        desc: "Exploration de la planification, de la flexibilité mentale, de la mémoire de travail et de l'inhibition, souvent impactées dans le TDAH.",
      },
      {
        step: "Questionnaires comportementaux",
        desc: "Recueil d'informations auprès des parents et/ou enseignants (pour les enfants) pour une vision complète du fonctionnement dans la vie quotidienne.",
      },
      {
        step: "Conseil et orientation",
        desc: "Explication du diagnostic, stratégies de compensation adaptées, recommandations pour l'école ou le travail, et coordination avec le médecin si traitement envisagé.",
      },
    ],
    forWhom: [
      "Enfant décrit comme « dans la lune » ou incapable de rester en place",
      "Adolescent en difficulté scolaire malgré un bon potentiel",
      "Adulte qui se sent constamment débordé, désorganisé ou impulsif",
      "Personne souhaitant comprendre et mieux gérer son fonctionnement",
      "Besoin d'un bilan pour accéder à des aménagements ou un traitement",
    ],
    color: "from-amber-50 to-orange-50",
    accent: "text-amber-600",
    border: "border-amber-200",
  },
  {
    id: "tsa",
    tag: "TSA",
    tagColor: "bg-rose-100 text-rose-500",
    title: "Troubles du spectre autistique (TSA)",
    subtitle: "Diagnostic et accompagnement",
    duration: "3 à 5 séances",
    public: "Enfants & adultes",
    intro:
      "Le spectre autistique regroupe des profils très variés, allant de l'autisme sévère à l'autisme de haut niveau ou au syndrome d'Asperger. Un diagnostic précoce et précis est essentiel pour mettre en place un accompagnement adapté et permettre à la personne de s'épanouir.",
    content: [
      {
        step: "Évaluation développementale et cognitive",
        desc: "Bilan global du développement, des capacités intellectuelles, du langage et de la communication pour situer le profil de la personne.",
      },
      {
        step: "Outils diagnostiques spécialisés",
        desc: "Utilisation des outils validés internationalement (ADOS-2 pour l'observation directe, questionnaires ADI-R pour les parents) afin de poser un diagnostic rigoureux.",
      },
      {
        step: "Évaluation des points forts",
        desc: "Identification des domaines de compétences et des intérêts spécifiques pour appuyer l'accompagnement sur les ressources de la personne.",
      },
      {
        step: "Accompagnement post-diagnostic",
        desc: "Annonce du diagnostic dans un cadre bienveillant, explication aux familles, recommandations pour les professionnels (orthophoniste, psychomotricien, ABA…) et les institutions.",
      },
    ],
    forWhom: [
      "Enfant présentant des particularités sociales ou comportementales inexpliquées",
      "Adulte qui se reconnaît dans des descriptions de l'autisme",
      "Famille souhaitant comprendre les difficultés de leur enfant",
      "Besoin d'un diagnostic pour accéder à des aides (MDPH, AVS…)",
      "Personne souhaitant mieux se connaître et adapter son environnement",
    ],
    color: "from-rose-50 to-pink-50",
    accent: "text-rose-500",
    border: "border-rose-200",
  },
  {
    id: "adulte",
    tag: "Adulte",
    tagColor: "bg-indigo-100 text-indigo-500",
    title: "Accompagnement adulte",
    subtitle: "Mémoire, anxiété, burn-out, transitions de vie",
    duration: "1 à 3 séances",
    public: "Adultes de tout âge",
    intro:
      "Les difficultés cognitives et émotionnelles ne touchent pas seulement les enfants. Les adultes aussi peuvent traverser des périodes où le cerveau semble « dysfonctionner » : troubles de la mémoire, épuisement professionnel, anxiété envahissante, sentiment de ne plus être soi-même.",
    content: [
      {
        step: "Bilan de la mémoire et de l'attention",
        desc: "Évaluation des plaintes mnésiques et attentionnelles pour distinguer un trouble fonctionnel (lié au stress, au burn-out) d'un trouble organique nécessitant un bilan médical complémentaire.",
      },
      {
        step: "Bilan du burn-out cognitif",
        desc: "Exploration de l'impact de l'épuisement professionnel sur les fonctions cognitives pour adapter les recommandations de repos, de rythme et de reprise d'activité.",
      },
      {
        step: "Accompagnement des transitions",
        desc: "Soutien lors des grandes étapes de vie (retraite, reconversion, deuil, divorce) qui peuvent affecter l'identité, la confiance en soi et les capacités cognitives.",
      },
      {
        step: "Orientation et ressources",
        desc: "Recommandations vers d'autres professionnels si nécessaire (médecin, psychiatre, psychologue clinicien) et mise en place de stratégies concrètes pour le quotidien.",
      },
    ],
    forWhom: [
      "Personne en burn-out ou en grande fatigue cognitive",
      "Adulte présentant des troubles de la mémoire inquiétants",
      "Personne anxieuse souhaitant comprendre son fonctionnement cérébral",
      "Femmes en période de ménopause présentant des « brouillards cérébraux »",
      "Adulte diagnostiqué tardivement TDAH ou TSA",
    ],
    color: "from-indigo-50 to-violet-50",
    accent: "text-indigo-500",
    border: "border-indigo-200",
  },
];

export default function ConsultationsPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-sage-50 to-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <p className="section-subtitle">Mes consultations</p>
            <h1 className="section-title text-4xl md:text-5xl">
              Un accompagnement pour chaque besoin
            </h1>
            <p className="text-gray-500 leading-relaxed mt-4">
              Que vous soyez parent, adulte ou professionnel de santé, je propose
              un large éventail d'évaluations et d'accompagnements adaptés à chaque profil.
            </p>
          </AnimatedSection>

          {/* Quick nav */}
          <AnimatedSection delay={150} className="mt-10">
            <div className="flex flex-wrap justify-center gap-3">
              {consultations.map((c) => (
                <a
                  key={c.id}
                  href={`#${c.id}`}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border transition-all hover:-translate-y-0.5 hover:shadow-sm ${c.tagColor} ${c.border}`}
                >
                  {c.tag}
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Consultations */}
      <div className="bg-white">
        {consultations.map((consultation, idx) => (
          <section
            key={consultation.id}
            id={consultation.id}
            className={`py-20 ${idx % 2 === 0 ? "bg-white" : "bg-cream-50"}`}
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left: main info */}
                <AnimatedSection className={idx % 2 !== 0 ? "lg:order-2" : ""}>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${consultation.tagColor} mb-4`}>
                    {consultation.tag}
                  </span>
                  <h2 className="font-serif text-3xl text-gray-800 mb-2">
                    {consultation.title}
                  </h2>
                  <p className={`text-sm font-medium ${consultation.accent} mb-6`}>
                    {consultation.subtitle}
                  </p>

                  <div className="flex gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock size={14} className={consultation.accent} />
                      {consultation.duration}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Users size={14} className={consultation.accent} />
                      {consultation.public}
                    </div>
                  </div>

                  <p className="text-gray-500 leading-relaxed mb-8">{consultation.intro}</p>

                  {/* For whom */}
                  <div className={`bg-gradient-to-br ${consultation.color} rounded-2xl p-6 border ${consultation.border}`}>
                    <h3 className="font-serif text-lg text-gray-800 mb-4">
                      Pour qui ?
                    </h3>
                    <div className="space-y-2">
                      {consultation.forWhom.map((who) => (
                        <div key={who} className="flex items-start gap-2">
                          <ChevronRight size={14} className={`${consultation.accent} flex-shrink-0 mt-1`} />
                          <p className="text-sm text-gray-600">{who}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link href="/contact" className="btn-primary">
                      Prendre rendez-vous <ArrowRight size={16} />
                    </Link>
                  </div>
                </AnimatedSection>

                {/* Right: steps */}
                <AnimatedSection delay={150} className={idx % 2 !== 0 ? "lg:order-1" : ""}>
                  <h3 className="font-serif text-xl text-gray-800 mb-6">
                    Comment se déroule la consultation ?
                  </h3>
                  <div className="space-y-4">
                    {consultation.content.map((step, i) => (
                      <div
                        key={step.step}
                        className="flex gap-4"
                      >
                        <div className="flex flex-col items-center">
                          <div className={`w-8 h-8 rounded-full ${consultation.tagColor} flex items-center justify-center text-xs font-bold flex-shrink-0`}>
                            {i + 1}
                          </div>
                          {i < consultation.content.length - 1 && (
                            <div className={`w-0.5 h-full mt-1 bg-gradient-to-b ${consultation.color} min-h-[20px]`} />
                          )}
                        </div>
                        <div className="pb-4">
                          <h4 className="font-medium text-gray-800 text-sm mb-1">{step.step}</h4>
                          <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-soft-purple/90 to-lavender-500/90">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl text-white mb-4">
              Vous ne savez pas quelle consultation vous convient ?
            </h2>
            <p className="text-lavender-100 mb-8">
              Contactez-moi, je vous orienterai vers la prise en charge la plus adaptée
              à votre situation ou celle de votre enfant.
            </p>
            <Link
              href="/contact"
              className="bg-white text-soft-purple px-8 py-3.5 rounded-full font-medium text-sm hover:bg-cream-50 transition-all hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              Me contacter <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
