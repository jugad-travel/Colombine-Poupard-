"use client";

import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";
import { ContactBlock } from "@/components/ContactBlock";
import { EXPERTISES, PRACTICE_INFO } from "@/lib/constants";
import { generateLocalBusinessSchema } from "@/lib/schema";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
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

  useEffect(() => {
    // Injecter le schema JSON-LD côté client
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
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
        <div className="max-w-4xl space-y-6 text-muted leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            L'ostéopathie est une approche manuelle fondée sur la compréhension
            du corps dans son ensemble.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Par des manipulations précises des articulations, des muscles et des
            tissus, l'ostéopathe améliore le mouvement, rétablit la mobilité et
            réduit les tensions.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Cette méthode s'adresse à toute personne présentant des douleurs ou
            une gêne fonctionnelle : maux de dos, entorses, migraines, troubles
            digestifs, stress…
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Les séances sont adaptées à chaque âge de la vie : nourrissons,
            enfants, femmes enceintes, sportifs et seniors.
          </motion.p>
        </div>
      </Section>

      {/* Parcours & valeurs */}
      <Section title="Parcours & valeurs" bg="brand-100">
        <div className="max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 text-muted leading-relaxed text-sm sm:text-base">
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
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/hero/hero-image.webp"
              alt="Colombine Poupard, Ostéopathe D.O"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </Section>

      {/* Expertises */}
      <Section title="Expertises" bg="white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {EXPERTISES.map((expertise, index) => {
            const IconComponent = iconMap[expertise.icon] || Brain;
            return (
              <motion.div
                key={expertise.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card
                  title={expertise.title}
                  href={`/expertises#${expertise.id}`}
                  icon={<IconComponent size={28} className="sm:w-8 sm:h-8 text-brand-700" />}
                >
                  {expertise.description}
                </Card>
              </motion.div>
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
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-200/50 shadow-md">
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 pb-3 border-b border-brand-100">
                <span className="font-semibold text-brand-900 text-base sm:text-lg">
                  Lundi–Vendredi
                </span>
                <span className="text-muted text-sm sm:text-base">{PRACTICE_INFO.hours.weekdays}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <span className="font-semibold text-brand-900 text-base sm:text-lg">Samedi</span>
                <span className="text-muted text-sm sm:text-base">{PRACTICE_INFO.hours.saturday}</span>
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
