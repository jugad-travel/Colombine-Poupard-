import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";
import { ContactBlock } from "@/components/ContactBlock";
import { EXPERTISES, PRACTICE_INFO } from "@/lib/constants";
import { generateLocalBusinessSchema } from "@/lib/schema";
import Link from "next/link";
import { Calendar, ArrowRight, Building2 } from "lucide-react";
import {
  Brain,
  Heart,
  Activity,
  Zap,
  Baby,
  Bone,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Brain,
  Heart,
  Activity,
  Zap,
  Baby,
  Bone,
};

export default function HomePage() {
  const schema = generateLocalBusinessSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Hero
        title="Retrouver la mobilité, apaiser les tensions."
        subtitle="Ostéopathe D.O à Marcq-en-Barœul — prises en charge personnalisées pour adultes, femmes enceintes, nourrissons, sportifs et seniors."
        secondaryCTA={{
          label: "Découvrir le cabinet",
          href: "/cabinet-acces",
        }}
      />

      {/* Présentation */}
      <Section title="L'ostéopathie" bg="white">
        <div className="max-w-3xl space-y-6 text-muted leading-relaxed">
          <p>
            L'ostéopathie est une approche manuelle fondée sur la compréhension
            du corps dans son ensemble.
          </p>
          <p>
            Par des manipulations précises des articulations, des muscles et des
            tissus, l'ostéopathe améliore le mouvement, rétablit la mobilité et
            réduit les tensions.
          </p>
          <p>
            Cette méthode s'adresse à toute personne présentant des douleurs ou
            une gêne fonctionnelle : maux de dos, entorses, migraines, troubles
            digestifs, stress…
          </p>
          <p>
            Les séances sont adaptées à chaque âge de la vie : nourrissons,
            enfants, femmes enceintes, sportifs et seniors.
          </p>
        </div>
      </Section>

      {/* Parcours & valeurs */}
      <Section title="Parcours & valeurs" bg="brand-100">
        <div className="max-w-3xl space-y-4 text-muted leading-relaxed">
          <p>
            Diplômée de l'Institut Supérieur d'Ostéopathie de Lille, j'ai
            exercé en cabinet et en entreprise à Paris (BCG, AXA, SeLoger,
            Veolia).
          </p>
          <p>
            De retour dans le Nord, j'accompagne désormais les particuliers et
            les organisations de la métropole lilloise pour prévenir les troubles
            musculo-squelettiques, réduire les tensions liées au travail
            sédentaire et améliorer la qualité de vie au travail.
          </p>
        </div>
      </Section>

      {/* Expertises */}
      <Section title="Expertises" bg="white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERTISES.map((expertise) => {
            const IconComponent = iconMap[expertise.icon] || Brain;
            return (
              <Card
                key={expertise.id}
                title={expertise.title}
                href={`/expertises#${expertise.id}`}
                icon={<IconComponent size={32} className="text-brand-700" />}
              >
                {expertise.description}
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Entreprises teaser */}
      <Section
        kicker="Entreprises"
        title="Prévenir les TMS et améliorer le confort au travail."
        bg="brand-100"
      >
        <div className="max-w-3xl space-y-6">
          <p className="text-muted leading-relaxed">
            Séances sur site, bilans posturaux, ateliers d'ergonomie et routines
            anti-raideurs. Interventions déjà réalisées pour BCG, AXA, SeLoger,
            Veolia ; aujourd'hui dans la région pour Promod, Auchan, AXA.
          </p>
          <Link
            href="/entreprises"
            className="inline-flex items-center gap-2 bg-brand-700 hover:bg-brand-900 text-white px-6 py-3 rounded-2xl font-medium shadow-md transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-700 focus:ring-offset-2"
          >
            <Building2 size={20} />
            Découvrir l'offre entreprise
            <ArrowRight size={20} />
          </Link>
        </div>
      </Section>

      {/* Accès rapide */}
      <Section title="Accès rapide" bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-semibold text-brand-900">
              Adresse
            </h3>
            <p className="text-muted">{PRACTICE_INFO.address}</p>
            <div className="space-y-2">
              <Badge>{PRACTICE_INFO.access.bus}</Badge>
              <Badge>{PRACTICE_INFO.access.parking}</Badge>
              <Badge>{PRACTICE_INFO.access.floor}</Badge>
            </div>
          </div>
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
      </Section>

      {/* Horaires synthétiques */}
      <Section title="Horaires" bg="brand-100">
        <div className="max-w-2xl">
          <div className="bg-white rounded-2xl p-6 border border-brand-100">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-brand-900">
                  Lundi–Vendredi
                </span>
                <span className="text-muted">{PRACTICE_INFO.hours.weekdays}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-brand-900">Samedi</span>
                <span className="text-muted">{PRACTICE_INFO.hours.saturday}</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA final */}
      <Section bg="white">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-brand-900 mb-4">
            Prêt à prendre rendez-vous ?
          </h2>
          <p className="text-muted mb-8">
            Réservez votre séance d'ostéopathie en ligne via Doctolib
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
      </Section>
    </>
  );
}
