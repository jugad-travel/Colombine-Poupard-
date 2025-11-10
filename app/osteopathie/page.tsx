import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { generateMetadata as genMeta } from "@/lib/seo";
import { generateLocalBusinessSchema } from "@/lib/schema";
import { PRACTICE_INFO } from "@/lib/constants";
import Link from "next/link";
import { Calendar, Users, Clock, Heart } from "lucide-react";

export const metadata = genMeta({
  title: "Comprendre l'ostéopathie",
  description:
    "Découvrez l'approche ostéopathique de Colombine Poupard : une méthode manuelle globale pour améliorer la mobilité et réduire les tensions. Consultations adaptées à tous les âges.",
  path: "/osteopathie",
});

export default function OsteopathiePage() {
  const schema = generateLocalBusinessSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Section
        title="Comprendre l'ostéopathie"
        bg="white"
        className="pt-16 lg:pt-24"
      >
        <div className="max-w-4xl space-y-12">
          {/* Approche globale */}
          <div>
            <h2 className="text-2xl font-serif font-semibold text-brand-900 mb-4">
              Une approche globale du corps
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                L'ostéopathie est une approche manuelle fondée sur la
                compréhension du corps dans son ensemble. Elle considère que
                toutes les structures du corps sont interconnectées et que leur
                bon fonctionnement dépend de leur mobilité.
              </p>
              <p>
                L'ostéopathe utilise ses mains pour évaluer et traiter les
                restrictions de mobilité qui peuvent être à l'origine de
                douleurs ou de dysfonctionnements. Cette approche préventive et
                curative s'adresse à tous, du nourrisson au senior.
              </p>
            </div>
          </div>

          {/* Déroulé d'une séance */}
          <div>
            <h2 className="text-2xl font-serif font-semibold text-brand-900 mb-6">
              Le déroulé d'une séance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card
                title="1. L'écoute"
                icon={<Heart size={24} className="text-brand-700" />}
              >
                Un temps d'échange pour comprendre votre motif de consultation,
                vos antécédents et votre contexte de vie.
              </Card>
              <Card
                title="2. Les tests"
                icon={<Users size={24} className="text-brand-700" />}
              >
                Observation et tests de mobilité pour identifier les zones de
                restriction et établir un diagnostic ostéopathique.
              </Card>
              <Card
                title="3. Le traitement"
                icon={<Heart size={24} className="text-brand-700" />}
              >
                Techniques manuelles douces et adaptées pour restaurer la
                mobilité et libérer les tensions identifiées.
              </Card>
              <Card
                title="4. Les conseils"
                icon={<Heart size={24} className="text-brand-700" />}
              >
                Recommandations personnalisées pour optimiser les résultats et
                prévenir les récidives.
              </Card>
            </div>
          </div>

          {/* Durée et tenue */}
          <div className="bg-brand-100 rounded-2xl p-6 lg:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Clock size={24} className="text-brand-700" />
                  <h3 className="text-xl font-serif font-semibold text-brand-900">
                    Durée
                  </h3>
                </div>
                <p className="text-muted">
                  Une séance dure entre 45 et 60 minutes, permettant un examen
                  complet et un traitement adapté.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold text-brand-900 mb-3">
                  Tenue
                </h3>
                <p className="text-muted">
                  Privilégiez une tenue confortable qui permet de bouger
                  facilement. Vous restez habillé pendant la séance.
                </p>
              </div>
            </div>
          </div>

          {/* Publics */}
          <div>
            <h2 className="text-2xl font-serif font-semibold text-brand-900 mb-6">
              Les publics
            </h2>
            <div className="space-y-6">
              <div id="nourrissons">
                <h3 className="text-xl font-serif font-semibold text-brand-900 mb-3">
                  Nourrissons
                </h3>
                <p className="text-muted leading-relaxed">
                  L'ostéopathie peut accompagner les nourrissons pour des
                  troubles du sommeil, de la digestion, des torticolis, des
                  plagiocéphalies ou après un accouchement difficile.
                </p>
              </div>
              <div id="enfants">
                <h3 className="text-xl font-serif font-semibold text-brand-900 mb-3">
                  Enfants
                </h3>
                <p className="text-muted leading-relaxed">
                  Suivi de la croissance, troubles posturaux, accompagnement
                  dans la pratique sportive, troubles de l'attention.
                </p>
              </div>
              <div id="femmes-enceintes">
                <h3 className="text-xl font-serif font-semibold text-brand-900 mb-3">
                  Femmes enceintes
                </h3>
                <p className="text-muted leading-relaxed">
                  Soulagement des douleurs lombaires, sciatalgies, troubles
                  circulatoires, préparation à l'accouchement et suivi
                  post-partum.
                </p>
              </div>
              <div id="sportifs">
                <h3 className="text-xl font-serif font-semibold text-brand-900 mb-3">
                  Sportifs
                </h3>
                <p className="text-muted leading-relaxed">
                  Récupération après blessure, optimisation de la performance,
                  prévention des blessures, amélioration de la gestuelle.
                </p>
              </div>
              <div id="adultes-seniors">
                <h3 className="text-xl font-serif font-semibold text-brand-900 mb-3">
                  Adultes & Seniors
                </h3>
                <p className="text-muted leading-relaxed">
                  Douleurs chroniques, troubles musculo-squelettiques, maux de
                  tête, troubles digestifs, stress, accompagnement du
                  vieillissement.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-brand-100 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-serif font-semibold text-brand-900 mb-4">
              Prêt à prendre rendez-vous ?
            </h3>
            <p className="text-muted mb-6">
              Réservez votre séance d'ostéopathie en ligne
            </p>
            <a
              href={PRACTICE_INFO.doctolibUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-700 hover:bg-brand-900 text-white px-8 py-4 rounded-2xl font-medium shadow-md transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-700 focus:ring-offset-2"
            >
              <Calendar size={24} />
              Prendre RDV
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}

