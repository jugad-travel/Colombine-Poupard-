import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { LogoCarousel } from "@/components/LogoCarousel";
import { generateMetadata as genMeta } from "@/lib/seo";
import { generateLocalBusinessSchema } from "@/lib/schema";
import { PRACTICE_INFO, ENTERPRISE_CLIENTS } from "@/lib/constants";
import { Building2, Mail } from "lucide-react";

export const metadata = genMeta({
  title: "Interventions en entreprise",
  description:
    "Offre d'ostéopathie en entreprise : séances individuelles. Prévention des TMS et amélioration de la qualité de vie au travail. Interventions réalisées pour BCG, American Express, AXA, SeLoger.",
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
      <section className="bg-white pt-16 lg:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold bg-gradient-to-r from-brand-900 via-brand-700 to-brand-900 bg-clip-text text-transparent">
              Ostéopathie en entreprise
            </h2>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-12">
            {/* Pourquoi */}
            <div>
              <h2 className="text-2xl font-serif font-semibold text-brand-900 mb-4">
                Pourquoi l'ostéopathie en entreprise ?
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Les troubles musculo-squelettiques (TMS) représentent la première
                cause de maladie professionnelle en France.
              </p>
              <p>
                Le travail sédentaire, les postures prolongées, le stress et la répétitivité des gestes
                favorisent l'apparition de douleurs et de tensions.
              </p>
              <p>
                L'ostéopathie en entreprise permet de prévenir ces troubles, de
                réduire l'absentéisme et d'améliorer la qualité de vie au travail.
              </p>
              <p>
                La qualité de vie au travail est un véritable levier de performance : des
                collaborateurs en bonne santé, moins de tensions et plus d'énergie, c'est aussi
                moins d'arrêts, plus de motivation et un engagement durable au sein de l'entreprise.
              </p>
              </div>
            </div>

            {/* Modalités */}
            <div>
            <h2 className="text-2xl font-serif font-semibold text-brand-900 mb-6">
              Modalités
            </h2>
            <div className="bg-brand-100 rounded-2xl p-6 lg:p-8">
              <ul className="space-y-3 text-muted">
                <li className="flex items-start gap-3">
                  <span className="text-brand-700 mt-1">•</span>
                  <span>
                    40 minutes adaptées aux besoins spécifiques de chaque collaborateur.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-700 mt-1">•</span>
                  <span>
                    Salle dédiée mise à disposition par l'entreprise.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-700 mt-1">•</span>
                  <span>
                    Planning partagé pour faciliter l'organisation des rendez-vous.
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
              Ils m'ont fait confiance
            </h2>
            <LogoCarousel />
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
        </div>
      </section>
    </>
  );
}
