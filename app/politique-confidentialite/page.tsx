import { Section } from "@/components/Section";
import { generateMetadata as genMeta } from "@/lib/seo";
import { PRACTICE_INFO } from "@/lib/constants";

export const metadata = genMeta({
  title: "Politique de confidentialité",
  description: "Politique de confidentialité du site de Colombine Poupard, ostéopathe D.O à Marcq-en-Barœul.",
  path: "/politique-confidentialite",
});

export default function PolitiqueConfidentialitePage() {
  return (
    <Section
      title="Politique de confidentialité"
      bg="white"
      className="pt-16 lg:pt-24"
    >
      <div className="max-w-4xl space-y-8 text-muted leading-relaxed">
        <div>
          <h2 className="text-2xl font-serif font-semibold text-brand-900 mb-4">
            Collecte des données
          </h2>
          <p>
            Le site de {PRACTICE_INFO.fullName} collecte uniquement les données
            nécessaires au fonctionnement du formulaire de contact. Aucune donnée
            médicale n'est collectée via ce site web.
          </p>
          <p>
            Les données collectées via le formulaire de contact sont :
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Nom</li>
            <li>Adresse email</li>
            <li>Téléphone (optionnel)</li>
            <li>Message</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-serif font-semibold text-brand-900 mb-4">
            Utilisation des données
          </h2>
          <p>
            Les données collectées via le formulaire de contact sont utilisées
            uniquement pour répondre à votre demande. Elles ne sont pas
            transmises à des tiers et ne sont pas utilisées à des fins
            commerciales.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-serif font-semibold text-brand-900 mb-4">
            Prise de rendez-vous
          </h2>
          <p>
            La prise de rendez-vous est externalisée sur la plateforme Doctolib.
            Les données collectées lors de la prise de rendez-vous sont gérées
            par Doctolib selon leur propre politique de confidentialité. Nous
            vous invitons à consulter la politique de confidentialité de Doctolib
            sur leur site web.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-serif font-semibold text-brand-900 mb-4">
            Cookies
          </h2>
          <p>
            Ce site n'utilise pas de cookies non essentiels au lancement. Si des
            cookies analytiques sont ajoutés ultérieurement, une bannière
            d'information sera affichée.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-serif font-semibold text-brand-900 mb-4">
            Vos droits
          </h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données
            (RGPD), vous disposez des droits suivants :
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Droit d'accès à vos données personnelles</li>
            <li>Droit de rectification de vos données personnelles</li>
            <li>Droit à l'effacement de vos données personnelles</li>
            <li>Droit à la limitation du traitement de vos données</li>
            <li>Droit à la portabilité de vos données</li>
            <li>Droit d'opposition au traitement de vos données</li>
          </ul>
          <p className="mt-4">
            Pour exercer ces droits, vous pouvez nous contacter à l'adresse
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
            Sécurité des données
          </h2>
          <p>
            Nous mettons en œuvre toutes les mesures techniques et
            organisationnelles appropriées pour protéger vos données personnelles
            contre tout accès non autorisé, perte, destruction ou altération.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-serif font-semibold text-brand-900 mb-4">
            Contact
          </h2>
          <p>
            Pour toute question concernant cette politique de confidentialité,
            vous pouvez nous contacter à l'adresse suivante :
          </p>
          <p className="mt-2">
            <strong>{PRACTICE_INFO.fullName}</strong>
            <br />
            {PRACTICE_INFO.address}
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
            Modifications
          </h2>
          <p>
            Cette politique de confidentialité peut être modifiée à tout moment.
            La version en vigueur est celle publiée sur ce site. Nous vous
            invitons à consulter régulièrement cette page pour prendre connaissance
            des éventuelles modifications.
          </p>
        </div>
      </div>
    </Section>
  );
}

