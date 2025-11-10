import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { generateMetadata as genMeta } from "@/lib/seo";
import { generateLocalBusinessSchema } from "@/lib/schema";
import { PRACTICE_INFO, ENTERPRISE_CLIENTS } from "@/lib/constants";
import { Building2, Users, Clock, TrendingUp, FileText, Mail } from "lucide-react";

export const metadata = genMeta({
  title: "Interventions en entreprise",
  description:
    "Offre d'ostéopathie en entreprise : séances individuelles, ateliers d'ergonomie, bilans posturaux. Prévention des TMS et amélioration de la qualité de vie au travail. Interventions réalisées pour BCG, AXA, Veolia, Promod, Auchan.",
  path: "/entreprises",
});

export default function EntreprisesPage() {
  const schema = generateLocalBusinessSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Section
        title="Ostéopathie en entreprise"
        bg="white"
        className="pt-16 lg:pt-24"
      >
        <div className="max-w-4xl space-y-12">
          {/* Pourquoi */}
          <div>
            <h2 className="text-2xl font-serif font-semibold text-brand-900 mb-6">
              Pourquoi l'ostéopathie en entreprise ?
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Les troubles musculo-squelettiques (TMS) représentent la première
                cause de maladie professionnelle en France. Le travail sédentaire,
                les postures prolongées, le stress et la répétitivité des gestes
                favorisent l'apparition de douleurs et de tensions.
              </p>
              <p>
                L'ostéopathie en entreprise permet de prévenir ces troubles, de
                réduire l'absentéisme et d'améliorer la qualité de vie au travail.
                Elle contribue également à l'engagement des collaborateurs et à la
                performance globale de l'entreprise.
              </p>
            </div>
          </div>

          {/* Formats */}
          <div>
            <h2 className="text-2xl font-serif font-semibold text-brand-900 mb-6">
              Formats d'intervention
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card
                title="Séances individuelles"
                icon={<Users size={24} className="text-brand-700" />}
              >
                Consultations de 20 à 30 minutes sur site, adaptées aux besoins
                spécifiques de chaque collaborateur.
              </Card>
              <Card
                title="Ateliers collectifs"
                icon={<Building2 size={24} className="text-brand-700" />}
              >
                Sessions de 45 à 60 minutes sur l'ergonomie, les postures de
                travail et les exercices de prévention.
              </Card>
              <Card
                title="Bilans posturaux"
                icon={<FileText size={24} className="text-brand-700" />}
              >
                Évaluation posturale individuelle avec recommandations
                personnalisées pour l'aménagement du poste de travail.
              </Card>
              <Card
                title="Programmes sur mesure"
                icon={<Clock size={24} className="text-brand-700" />}
              >
                Accompagnement sur 6 à 12 semaines avec suivi régulier et
                ajustements selon les besoins.
              </Card>
            </div>
          </div>

          {/* Modalités */}
          <div>
            <h2 className="text-2xl font-serif font-semibold text-brand-900 mb-6">
              Modalités d'intervention
            </h2>
            <div className="bg-brand-100 rounded-2xl p-6 lg:p-8">
              <ul className="space-y-3 text-muted">
                <li className="flex items-start gap-3">
                  <span className="text-brand-700 mt-1">•</span>
                  <span>
                    Interventions en demi-journées ou journées complètes selon
                    vos besoins
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-700 mt-1">•</span>
                  <span>
                    Salle dédiée mise à disposition par l'entreprise
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-700 mt-1">•</span>
                  <span>
                    Planning partagé pour faciliter l'organisation des rendez-vous
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-700 mt-1">•</span>
                  <span>
                    Reporting anonymisé sur les motifs de consultation et les
                    bénéfices observés
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bénéfices */}
          <div>
            <h2 className="text-2xl font-serif font-semibold text-brand-900 mb-6">
              Bénéfices pour l'entreprise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card title="Réduction des douleurs">
                Diminution des troubles musculo-squelettiques et amélioration du
                confort au travail.
              </Card>
              <Card title="Meilleure récupération">
                Optimisation de la récupération après les efforts et réduction de
                la fatigue.
              </Card>
              <Card title="Engagement renforcé">
                Amélioration de la qualité de vie au travail et renforcement de
                l'engagement des collaborateurs.
              </Card>
              <Card title="Performance globale">
                Contribution à la performance individuelle et collective de
                l'entreprise.
              </Card>
            </div>
          </div>

          {/* Clients */}
          <div>
            <h2 className="text-2xl font-serif font-semibold text-brand-900 mb-6">
              Références
            </h2>
            <div className="bg-brand-100 rounded-2xl p-6 lg:p-8">
              <p className="text-muted mb-4">
                Interventions réalisées pour :
              </p>
              <div className="flex flex-wrap gap-3">
                {ENTERPRISE_CLIENTS.map((client) => (
                  <span
                    key={client}
                    className="bg-white px-4 py-2 rounded-full text-sm font-medium text-brand-900 border border-brand-300"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-brand-100 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-serif font-semibold text-brand-900 mb-4">
              Demander un devis
            </h3>
            <p className="text-muted mb-6">
              Contactez-nous pour discuter de votre projet et recevoir une
              proposition personnalisée
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${PRACTICE_INFO.email}?subject=Demande de devis - Ostéopathie en entreprise`}
                className="inline-flex items-center gap-2 bg-brand-700 hover:bg-brand-900 text-white px-8 py-4 rounded-2xl font-medium shadow-md transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-700 focus:ring-offset-2"
              >
                <Mail size={24} />
                Demander un devis
              </a>
              <a
                href={`tel:${PRACTICE_INFO.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 bg-white hover:bg-brand-100 text-brand-700 border-2 border-brand-300 px-8 py-4 rounded-2xl font-medium transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-700 focus:ring-offset-2"
              >
                Appeler le cabinet
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

