import { Section } from "@/components/Section";
import { generateMetadata as genMeta } from "@/lib/seo";
import { PRACTICE_INFO } from "@/lib/constants";

export const metadata = genMeta({
  title: "Mentions légales",
  description: "Mentions légales du site de Colombine Poupard, ostéopathe D.O à Marcq-en-Barœul.",
  path: "/mentions-legales",
});

export default function MentionsLegalesPage() {
  return (
    <Section
      title="Mentions légales"
      bg="white"
      className="pt-16 lg:pt-24"
    >
      <div className="max-w-4xl space-y-8 text-muted leading-relaxed">
        <div>
          <h2 className="text-2xl font-serif font-semibold text-brand-900 mb-4">
            Éditeur du site
          </h2>
          <p>
            <strong>{PRACTICE_INFO.fullName}</strong>
            <br />
            {PRACTICE_INFO.address}
            <br />
            Téléphone :{" "}
            <a
              href={`tel:${PRACTICE_INFO.phone.replace(/\s/g, "")}`}
              className="text-brand-700 hover:text-brand-900 underline"
            >
              {PRACTICE_INFO.phone}
            </a>
            <br />
            Email :{" "}
            <a
              href={`mailto:${PRACTICE_INFO.email}`}
              className="text-brand-700 hover:text-brand-900 underline"
            >
              {PRACTICE_INFO.email}
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-serif font-semibold text-brand-900 mb-4">
            Profession
          </h2>
          <p>
            Profession libérale d'ostéopathe exercée par {PRACTICE_INFO.name},
            diplômée de l'Institut Supérieur d'Ostéopathie de Lille (InSO
            Lille), 2023.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-serif font-semibold text-brand-900 mb-4">
            Hébergement
          </h2>
          <p>
            Ce site est hébergé par Vercel Inc.
            <br />
            340 S Lemon Ave #4133
            <br />
            Walnut, CA 91789
            <br />
            États-Unis
            <br />
            Site web :{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-700 hover:text-brand-900 underline"
            >
              https://vercel.com
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-serif font-semibold text-brand-900 mb-4">
            Propriété intellectuelle
          </h2>
          <p>
            L'ensemble de ce site relève de la législation française et
            internationale sur le droit d'auteur et la propriété intellectuelle.
            Tous les droits de reproduction sont réservés, y compris pour les
            documents téléchargeables et les représentations iconographiques et
            photographiques.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-serif font-semibold text-brand-900 mb-4">
            Données personnelles
          </h2>
          <p>
            Conformément à la loi "Informatique et Libertés" du 6 janvier 1978
            modifiée et au Règlement Général sur la Protection des Données
            (RGPD), vous disposez d'un droit d'accès, de rectification, de
            suppression et d'opposition aux données personnelles vous
            concernant.
          </p>
          <p>
            Pour exercer ce droit, vous pouvez nous contacter à l'adresse
            suivante :{" "}
            <a
              href={`mailto:${PRACTICE_INFO.email}`}
              className="text-brand-700 hover:text-brand-900 underline"
            >
              {PRACTICE_INFO.email}
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-serif font-semibold text-brand-900 mb-4">
            Responsabilité
          </h2>
          <p>
            Les informations contenues sur ce site sont aussi précises que
            possible et le site est périodiquement remis à jour, mais peut toutefois
            contenir des inexactitudes, des omissions ou des lacunes. Si vous
            constatez une lacune, erreur ou ce qui parait être un dysfonctionnement,
            merci de bien vouloir le signaler par email à{" "}
            <a
              href={`mailto:${PRACTICE_INFO.email}`}
              className="text-brand-700 hover:text-brand-900 underline"
            >
              {PRACTICE_INFO.email}
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-serif font-semibold text-brand-900 mb-4">
            Liens hypertextes
          </h2>
          <p>
            Ce site peut contenir des liens hypertextes vers d'autres sites
            présents sur le réseau Internet. Les liens vers ces autres ressources
            vous font quitter le site. Il est possible de créer un lien vers la
            page de présentation de ce site sans autorisation expresse de
            l'éditeur.
          </p>
        </div>
      </div>
    </Section>
  );
}

