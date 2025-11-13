"use client";

import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";
import { ContactBlock } from "@/components/ContactBlock";
import { LogoCarousel } from "@/components/LogoCarousel";
import { Testimonial } from "@/components/Testimonial";
import { MOTIFS_CONSULTATION, PRACTICE_INFO, ENTERPRISE_CLIENTS } from "@/lib/constants";
import { generateLocalBusinessSchema, generatePersonSchema } from "@/lib/schema";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, Building2, Star } from "lucide-react";
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
  const businessSchema = generateLocalBusinessSchema();
  const personSchema = generatePersonSchema();

  useEffect(() => {
    // Injecter les schémas JSON-LD côté client
    const businessScript = document.createElement("script");
    businessScript.type = "application/ld+json";
    businessScript.text = JSON.stringify(businessSchema);
    document.head.appendChild(businessScript);

    const personScript = document.createElement("script");
    personScript.type = "application/ld+json";
    personScript.text = JSON.stringify(personSchema);
    document.head.appendChild(personScript);

    return () => {
      if (document.head.contains(businessScript)) {
        document.head.removeChild(businessScript);
      }
      if (document.head.contains(personScript)) {
        document.head.removeChild(personScript);
      }
    };
  }, []);

  return (
    <>
      <Hero
        title="Retrouver la mobilité, apaiser les tensions."
        subtitle="Ostéopathe D.O à Marcq-en-Barœul — prise en charge personnalisée pour adultes, femmes enceintes, nourrissons, sportifs et seniors."
        secondaryCTA={{
          label: "Découvrir le cabinet",
          href: "/cabinet-acces",
        }}
      />

      {/* Avis Google */}
      <section className="py-6 sm:py-8" style={{ backgroundColor: '#a4897b' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white">
              Ils témoignent
            </h2>
          </div>
          <div className="max-w-6xl mx-auto">
            {/* En-tête avec note et nombre d'avis */}
            <div className="text-center mb-6 sm:mb-8">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-xl sm:text-2xl font-serif font-bold text-white">5,0</span>
              </div>
              <p className="text-white text-base sm:text-lg">127 avis Google</p>
            </div>
            
            {/* Grille de témoignages */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6">
              <Testimonial
                name="Lucas"
                month="mai"
                text="Excellente ostéopathe, à l'écoute et très professionnelle. Elle a su soulager mes douleurs dès la première séance, avec des manipulations douces et efficaces. On se sent tout de suite en confiance. Je la recommande sans hésiter à tous ceux qui cherchent une prise en charge sérieuse et bienveillante. Un grand merci pour votre aide précieuse !"
              />
              <Testimonial
                name="Lionel"
                month="mai"
                text="Très heureux de ma séance sur mon lieu de travail : Colombine est à l'écoute et a manipulé avec douceur mes points un peu bloqués. Merci à elle, vivement recommandé."
              />
              <Testimonial
                name="Florence"
                month="mars"
                text="Très contente de ma séance. Colombine est passée sur mon lieu de travail le lendemain du belle chute. Elle m'a manipulé avec douceur et efficacité. Mes tensions suite à la chute se sont bien relâchées. N'hésitez pas à venir la consulter."
              />
            </div>
            <div className="text-center">
              <a
                href="https://www.google.com/search?client=safari&sa=X&sca_esv=740dc6ac61211c57&rls=en&hl=fr-FR&tbm=lcl&sxsrf=AE3TifNl6dpw8VsckpxB1fbwJA5hmg9BDg:1763029185476&q=Colombine+Poupard+Ostéopathe+D.O+Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2NjY0MLc0MjE1NjUzNTEyMzU02sDI-IpRzTk_Jz83KTMvVSEgv7QgsShFwb-45PDK_ILEkoxUBRc9fwXHssziRaxEKgQA2P3W32wAAAA&rldimm=3310792453565426512&ved=2ahUKEwiEx9DC8-6QAxUcpCcCHXFTHskQ9fQKegQIRRAF&biw=1363&bih=721&dpr=2#lkt=LocalPoiReviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-brand-100 text-brand-700 border-2 border-brand-300 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-medium transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-700 focus:ring-offset-2"
              >
                Voir plus d'avis
                <ArrowRight size={18} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Problème */}
      <Section title="Une approche adaptée à chaque patient" bg="white">
        <div className="max-w-4xl space-y-6 text-muted leading-relaxed">
          <p>
            Chaque corps est unique et mérite une attention sur mesure. Que vous cherchiez à
            préserver votre équilibre, à apaiser une douleur récente ou ancienne, à libérer une
            raideur ou à retrouver de l'énergie, chaque séance est adaptée à vos besoins du
            moment.
          </p>
        </div>
      </Section>

      {/* Motifs de consultation & domaines d'expertise */}
      <Section title="Motifs de consultation & domaines d'expertise" bg="brand-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {MOTIFS_CONSULTATION.map((motif, index) => {
            const IconComponent = iconMap[motif.icon] || Brain;
            return (
              <motion.div
                key={motif.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card
                  title={motif.title}
                  icon={<IconComponent size={28} className="sm:w-8 sm:h-8 text-brand-700" />}
                >
                  {motif.description}
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Retrouvez mouvement, équilibre et sérénité */}
      <Section title="Retrouvez mouvement, équilibre et sérénité" bg="white">
        <div className="max-w-4xl space-y-6 text-muted leading-relaxed">
          <p>
            Les douleurs traduisent souvent un déséquilibre du corps. Elles apparaissent lorsque
            certaines structures perdent leur mobilité ou leur capacité d'adaptation. Elles
            peuvent limiter vos mouvements, perturber votre sommeil et épuiser votre énergie.
          </p>
          <p>
            L'ostéopathie propose une approche globale et douce pour aider le corps à se libérer
            de ses tensions et retrouver son équilibre naturel. Par des manipulations précises et
            adaptées, elle restaure l'harmonie et relâche les zones de tension.
          </p>
          <p>
            Au-delà du soulagement, elle aide à entretenir la mobilité du corps et à prévenir
            l'apparition de nouvelles gênes.
          </p>
        </div>
      </Section>

      {/* Profil et valeurs */}
      <section className="bg-brand-100 py-8 sm:py-12 lg:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-brand-900 sm:bg-gradient-to-r sm:from-brand-900 sm:via-brand-700 sm:to-brand-900 sm:bg-clip-text sm:text-transparent">
              Profil et valeurs
            </h2>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
            <div className="space-y-4 sm:space-y-6 text-muted leading-relaxed text-sm sm:text-base">
              <p>
                Diplômée de l'Institut Supérieur d'Ostéopathie de Lille, j'ai exercé en cabinet et en
                entreprise à Paris (BCG, American Express, AXA, SeLoger, …).
              </p>
              <p>
                De retour dans le Nord, j'accueille tous types de patients, dans une approche
                globale et personnalisée.
              </p>
              <p>
                J'ai également suivi une formation spécifique à la prise en charge de la femme
                enceinte, du post-partum et du nouveau-né, afin d'accompagner ces périodes de
                transition avec douceur et précision.
              </p>
              <p>
                Mon travail s'appuie sur une approche globale du corps, qui prend en compte à la
                fois les aspects physiques, émotionnels et le mode de vie de chaque patient.
              </p>
              <p>
                À l'écoute, attentive et bienveillante, j'accorde une importance particulière à la
                compréhension du vécu et du contexte de chaque douleur.
              </p>
              <p>
                Mon objectif est de vous aider à retrouver confort, mobilité et autonomie grâce à
                des techniques douces, précises et adaptées à votre situation.
              </p>
              <p>
                Je collabore également avec les entreprises de la métropole lilloise dans le cadre
                de programmes de prévention et de bien-être au travail, pour réduire les tensions
                liées à la posture sédentaire et améliorer la qualité de vie au travail.
              </p>
            </div>
          </div>
        </div>
        {/* Image positionnée absolument pour toucher les bords sup, inf et droit - Desktop */}
        <div className="hidden lg:block absolute top-0 bottom-0 right-0 w-1/2 group overflow-hidden">
          <Image
            src="/images/hero/hero-image.webp"
            alt="Colombine Poupard, Ostéopathe D.O"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="50vw"
            priority
            style={{ objectPosition: 'center 30%' }}
          />
          {/* Dégradé uniquement de droite à gauche pour fondre dans le fond */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-brand-100" />
        </div>
        {/* Image en arrière-plan sur mobile - opacité réduite */}
        <div className="lg:hidden absolute top-0 bottom-0 right-0 w-full overflow-hidden opacity-20">
          <Image
            src="/images/hero/hero-image.webp"
            alt="Colombine Poupard, Ostéopathe D.O"
            fill
            className="object-cover"
            sizes="100vw"
            priority
            style={{ objectPosition: 'center 30%' }}
          />
          {/* Dégradé pour fondre dans le fond sur mobile */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-brand-100" />
        </div>
      </section>

      {/* Section Entreprise */}
      <section className="bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold bg-gradient-to-r from-brand-900 via-brand-700 to-brand-900 bg-clip-text text-transparent">
              Ostéopathie en entreprise
            </h2>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-12">
            <div>
              <h3 className="text-2xl font-serif font-semibold text-brand-900 mb-4">
                Pourquoi l'ostéopathie en entreprise ?
              </h3>
              <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Les troubles musculo-squelettiques (TMS) représentent la première cause de
                maladie professionnelle en France.
              </p>
              <p>
                Le travail sédentaire, les postures prolongées, le stress et la répétitivité des gestes
                favorisent l'apparition de douleurs et de tensions.
              </p>
              <p>
                L'ostéopathie en entreprise permet de prévenir ces troubles, de réduire
                l'absentéisme et d'améliorer la qualité de vie au travail.
              </p>
              <p>
                La qualité de vie au travail est un véritable levier de performance : des
                collaborateurs en bonne santé, moins de tensions et plus d'énergie, c'est aussi
                moins d'arrêts, plus de motivation et un engagement durable au sein de l'entreprise.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-serif font-semibold text-brand-900 mb-6">
              Modalités
            </h3>
            <div className="bg-brand-100 rounded-2xl p-6 lg:p-8">
              <ul className="space-y-3 text-muted">
                <li className="flex items-start gap-3">
                  <span className="text-brand-700 mt-1">•</span>
                  <span>40 minutes adaptées aux besoins spécifiques de chaque collaborateur.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-700 mt-1">•</span>
                  <span>Salle dédiée mise à disposition par l'entreprise.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-700 mt-1">•</span>
                  <span>Planning partagé pour faciliter l'organisation des rendez-vous.</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-serif font-semibold text-brand-900 mb-6">
              Bénéfices pour l'entreprise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card title="Réduction des douleurs">
                Diminution des troubles musculo-squelettiques et amélioration du confort au travail.
              </Card>
              <Card title="Engagement renforcé">
                Amélioration de la qualité de vie au travail et renforcement de l'engagement des collaborateurs.
              </Card>
              <Card title="Performance globale">
                Contribution à la performance individuelle et collective de l'entreprise.
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-serif font-semibold text-brand-900 mb-6">
              Ils m'ont fait confiance
            </h3>
            <LogoCarousel />
          </div>

          <div className="bg-brand-100 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-serif font-semibold text-brand-900 mb-4">
              Demander un devis
            </h3>
            <p className="text-muted mb-6">
              Contactez-nous pour discuter de votre projet et recevoir une proposition personnalisée
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${PRACTICE_INFO.email}?subject=Demande de devis - Ostéopathie en entreprise`}
                className="inline-flex items-center gap-2 bg-brand-700 hover:bg-brand-900 text-white px-8 py-4 rounded-2xl font-medium shadow-md transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-700 focus:ring-offset-2"
              >
                <Building2 size={20} />
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

      {/* Accès rapide */}
      <Section title="Accès rapide" bg="brand-100">
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
              src="https://www.google.com/maps?q=120+Rue+du+Docteur+Ducroquet,+59700+Marcq-en-Barœul&output=embed"
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
      <Section title="Horaires" bg="white">
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
      <Section bg="brand-100">
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
