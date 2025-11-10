import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { generateMetadata as genMeta } from "@/lib/seo";
import { generateLocalBusinessSchema } from "@/lib/schema";
import { PRACTICE_INFO } from "@/lib/constants";
import { Calendar, Euro, Clock } from "lucide-react";

export const metadata = genMeta({
  title: "Tarifs & Horaires",
  description:
    "Tarifs et horaires du cabinet d'ostéopathie de Colombine Poupard à Marcq-en-Barœul. Séance d'ostéopathie : 60 €. Horaires : Lundi-Vendredi 09:00-13:00 et 14:00-20:00, Samedi 09:00-13:00. Remboursement mutuelles possible.",
  path: "/tarifs-horaires",
});

export default function TarifsHorairesPage() {
  const schema = generateLocalBusinessSchema();

  const hours = [
    { day: "Lundi", morning: "09:00–13:00", afternoon: "14:00–20:00" },
    { day: "Mardi", morning: "09:00–13:00", afternoon: "14:00–20:00" },
    { day: "Mercredi", morning: "09:00–13:00", afternoon: "14:00–20:00" },
    { day: "Jeudi", morning: "09:00–13:00", afternoon: "14:00–20:00" },
    { day: "Vendredi", morning: "09:00–13:00", afternoon: "14:00–20:00" },
    { day: "Samedi", morning: "09:00–13:00", afternoon: "—" },
    { day: "Dimanche", morning: "—", afternoon: "—" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Section
        title="Tarifs & Horaires"
        bg="white"
        className="pt-16 lg:pt-24"
      >
        <div className="max-w-4xl space-y-12">
          {/* Tarifs */}
          <div>
            <h2 className="text-2xl font-serif font-semibold text-brand-900 mb-6">
              Tarifs
            </h2>
            <Card icon={<Euro size={32} className="text-brand-700" />}>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl font-serif font-bold text-brand-900">
                  {PRACTICE_INFO.price}
                </span>
                <span className="text-muted">la séance</span>
              </div>
              <p className="text-muted leading-relaxed">
                De nombreuses mutuelles remboursent partiellement l'ostéopathie
                — une facture peut vous être délivrée sur demande.
              </p>
            </Card>
          </div>

          {/* Horaires */}
          <div>
            <h2 className="text-2xl font-serif font-semibold text-brand-900 mb-6">
              Horaires d'ouverture
            </h2>
            <Card icon={<Clock size={32} className="text-brand-700" />}>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-brand-300">
                      <th className="text-left py-3 px-4 font-semibold text-brand-900">
                        Jour
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-brand-900">
                        Matin
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-brand-900">
                        Après-midi
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {hours.map((hour, index) => (
                      <tr
                        key={hour.day}
                        className={`border-b border-brand-100 ${
                          index % 2 === 0 ? "bg-brand-50" : ""
                        }`}
                      >
                        <td className="py-3 px-4 font-medium text-brand-900">
                          {hour.day}
                        </td>
                        <td className="py-3 px-4 text-muted">{hour.morning}</td>
                        <td className="py-3 px-4 text-muted">
                          {hour.afternoon}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* CTA */}
          <div className="bg-brand-100 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-serif font-semibold text-brand-900 mb-4">
              Prendre rendez-vous
            </h3>
            <p className="text-muted mb-6">
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
        </div>
      </Section>
    </>
  );
}

