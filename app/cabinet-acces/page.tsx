import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { generateMetadata as genMeta } from "@/lib/seo";
import { generateLocalBusinessSchema } from "@/lib/schema";
import { PRACTICE_INFO } from "@/lib/constants";
import { MapPin, Bus, Car, Building } from "lucide-react";

export const metadata = genMeta({
  title: "Cabinet & Accès",
  description:
    "Cabinet d'ostéopathie de Colombine Poupard à Marcq-en-Barœul. Adresse : 120 Rue du Docteur Ducroquet. Accès en bus ligne 12, parking gratuit, rez-de-chaussée.",
  path: "/cabinet-acces",
});

export default function CabinetAccesPage() {
  const schema = generateLocalBusinessSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Section
        title="Le cabinet & Accès"
        bg="white"
        className="pt-16 lg:pt-24"
      >
        <div className="max-w-4xl space-y-12">
          {/* Adresse & Plan */}
          <div>
            <h2 className="text-2xl font-serif font-semibold text-brand-900 mb-6">
              Adresse & Plan
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <div className="flex items-start gap-4 mb-4">
                  <MapPin size={24} className="text-brand-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-brand-900 mb-2">
                      Adresse
                    </h3>
                    <p className="text-muted leading-relaxed">
                      {PRACTICE_INFO.address}
                    </p>
                  </div>
                </div>
              </Card>
              <div className="bg-brand-100 rounded-2xl p-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.5!2d3.09!3d50.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDQwJzEyLjAiTiAzwrAwNScyNC4wIkU!5e0!3m2!1sfr!2sfr!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                  title="Carte du cabinet"
                />
              </div>
            </div>
          </div>

          {/* Accès transports */}
          <div>
            <h2 className="text-2xl font-serif font-semibold text-brand-900 mb-6">
              Accès en transports en commun
            </h2>
            <Card icon={<Bus size={32} className="text-brand-700" />}>
              <h3 className="text-xl font-serif font-semibold text-brand-900 mb-3">
                Bus ligne 12
              </h3>
              <p className="text-muted leading-relaxed">
                Arrêts <strong>Cheval Blanc</strong> et <strong>Ducroquet</strong>
                <br />
                Le cabinet est situé à quelques minutes à pied de ces arrêts.
              </p>
            </Card>
          </div>

          {/* Infos pratiques */}
          <div>
            <h2 className="text-2xl font-serif font-semibold text-brand-900 mb-6">
              Informations pratiques
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card
                title="Parking"
                icon={<Car size={24} className="text-brand-700" />}
              >
                Parking gratuit disponible à proximité du cabinet.
              </Card>
              <Card
                title="Accès"
                icon={<Building size={24} className="text-brand-700" />}
              >
                Cabinet situé au rez-de-chaussée, accessible à tous.
              </Card>
            </div>
          </div>

          {/* Galerie (placeholder) */}
          <div>
            <h2 className="text-2xl font-serif font-semibold text-brand-900 mb-6">
              Le cabinet
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-brand-100 rounded-2xl p-8 text-center">
                <p className="text-muted">Photo du cabinet à venir</p>
              </div>
              <div className="bg-brand-100 rounded-2xl p-8 text-center">
                <p className="text-muted">Photo de la façade à venir</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

