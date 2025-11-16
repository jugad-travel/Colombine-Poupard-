import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { generateMetadata as genMeta } from "@/lib/seo";
import { generateLocalBusinessSchema } from "@/lib/schema";
import { EXPERTISES, PRACTICE_INFO } from "@/lib/constants";
import { Calendar } from "lucide-react";
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

const detailedExpertises = {
  structurelle: {
    title: "Ostéopathie structurelle",
    description:
      "L'ostéopathie structurelle utilise des techniques articulaires et tissulaires pour libérer les restrictions de mobilité. Elle travaille sur les articulations, les muscles, les ligaments et les tendons pour rétablir l'équilibre du système musculo-squelettique. Cette approche est indiquée pour les douleurs vertébrales, les blocages articulaires, les troubles posturaux et les limitations de mouvement.",
  },
  sport: {
    title: "Ostéopathie du sport",
    description:
      "L'ostéopathie du sport vise à optimiser les performances, prévenir les blessures et favoriser la récupération. Elle travaille sur l'amélioration de la mobilité articulaire, la correction des déséquilibres. Elle est indiquée pour les entorses, tendinites, contractures, douleurs articulaires, ainsi que dans l'accompagnement du retour à l'activité en complément d'un suivi médical.",
  },
  myofasciale: {
    title: "Ostéopathie myofasciale",
    description:
      "L'approche myofasciale s'intéresse aux fascias, des tissus conjonctifs répartis dans tout le corps. Les techniques utilisées cherchent à modifier les tensions et à améliorer la mobilité de ces tissus.",
  },
  cranienne: {
    title: "Ostéopathie crânienne",
    description:
      "L'ostéopathie crânienne utilise un toucher léger appliqué au niveau du crâne. Elle vise essentiellement à réduire les tensions présentes dans ces zones, notamment au niveau tissulaire et musculaire. Cette démarche peut être intégrée dans la prise en charge de certaines céphalées, tensions cervicales ou troubles ORL, selon les indications médicales appropriées.",
  },
  "femme-enceinte": {
    title: "Ostéopathie de la femme enceinte",
    description:
      "Pendant la grossesse, les transformations posturales et les modifications biomécaniques peuvent entraîner des douleurs ou gênes d'origine musculo-squelettique. L'ostéopathie peut accompagner cette période en aidant à réduire certaines tensions, notamment lombaires, pelviennes ou cervicales. Après l'accouchement, elle peut contribuer au rééquilibrage du corps en travaillant sur les adaptations mécaniques liées au post-partum.",
  },
  pediatrique: {
    title: "Ostéopathie pédiatrique",
    description:
      "Chez les nourrissons et enfants, l'ostéopathie utilise des techniques douces et adaptées à leur développement. Elle peut accompagner certaines situations comme les torticolis positionnels, certaines plagiocéphalies (toujours avec suivi pédiatrique), ou des tensions mécaniques liées à la posture ou à la croissance. Chez l'enfant plus grand, elle peut aider à gérer des douleurs musculo-squelettiques ou des inconforts liés à l'activité quotidienne ou sportive.",
  },
};

export const metadata = genMeta({
  title: "Expertises",
  description:
    "Découvrez les différentes expertises de Colombine Poupard : ostéopathie crânienne, femme enceinte, sport, myofasciale, pédiatrique et structurelle. Techniques adaptées à chaque besoin.",
  path: "/expertises",
});

export default function ExpertisesPage() {
  const schema = generateLocalBusinessSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Section
        title="EXPERTISES ET ACTES"
        bg="white"
        className="pt-16 lg:pt-24"
      >
        <div className="max-w-4xl space-y-12">
          {/* Liste des expertises */}
          {EXPERTISES.map((expertise) => {
            const IconComponent = iconMap[expertise.icon] || Brain;
            const details = detailedExpertises[expertise.id as keyof typeof detailedExpertises];
            return (
              <div key={expertise.id} id={expertise.id}>
                <Card
                  title={expertise.title}
                  icon={<IconComponent size={32} className="text-brand-700" />}
                >
                  <p className="text-muted leading-relaxed mb-4">
                    {details?.description || expertise.description}
                  </p>
                </Card>
              </div>
            );
          })}

          {/* Quand consulter */}
          <div className="bg-brand-100 rounded-2xl p-6 lg:p-8">
            <h2 className="text-2xl font-serif font-semibold text-brand-900 mb-6">
              Quand consulter ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-muted">
                <li>• Lombalgies et cervicalgies</li>
                <li>• Maux de tête et migraines</li>
                <li>• Troubles digestifs fonctionnels</li>
              </ul>
              <ul className="space-y-2 text-muted">
                <li>• Stress et tensions</li>
                <li>• Douleurs post-opératoires</li>
                <li>• Troubles du sommeil</li>
              </ul>
            </div>
            <p className="text-sm text-muted mt-6 italic">
              En cas de douleurs post-opératoires, la consultation se fait en
              coordination avec le suivi médical.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-white rounded-2xl p-8 text-center border border-brand-100">
            <h3 className="text-2xl font-serif font-semibold text-brand-900 mb-4">
              Besoin d'une consultation ?
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

