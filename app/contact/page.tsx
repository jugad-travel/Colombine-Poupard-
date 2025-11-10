"use client";

import { Section } from "@/components/Section";
import { ContactBlock } from "@/components/ContactBlock";
import { generateLocalBusinessSchema } from "@/lib/schema";
import { PRACTICE_INFO } from "@/lib/constants";
import { Calendar, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Pour l'instant, on utilise mailto comme fallback
    // Vous pouvez intégrer Formspree ou une route API Next.js ici
    const mailtoLink = `mailto:${PRACTICE_INFO.email}?subject=Contact depuis le site&body=Nom: ${formData.name}%0AEmail: ${formData.email}%0ATéléphone: ${formData.phone}%0A%0AMessage:%0A${formData.message}`;
    window.location.href = mailtoLink;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "", consent: false });
    }, 1000);
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema()),
        }}
      />
      <Section
        title="Contact"
        bg="white"
        className="pt-16 lg:pt-24"
      >
        <div className="max-w-4xl space-y-12">
          {/* Coordonnées */}
          <div>
            <h2 className="text-2xl font-serif font-semibold text-brand-900 mb-6">
              Coordonnées
            </h2>
            <ContactBlock />
          </div>

          {/* Formulaire */}
          <div>
            <h2 className="text-2xl font-serif font-semibold text-brand-900 mb-6">
              Envoyer un message
            </h2>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-6 lg:p-8 border border-brand-100 space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-brand-900 mb-2"
                >
                  Nom *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-700 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-brand-900 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-700 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-brand-900 mb-2"
                >
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-700 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-brand-900 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-700 focus:border-transparent resize-none"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  required
                  checked={formData.consent}
                  onChange={(e) =>
                    setFormData({ ...formData, consent: e.target.checked })
                  }
                  className="mt-1 w-4 h-4 text-brand-700 border-brand-300 rounded focus:ring-brand-700"
                />
                <label
                  htmlFor="consent"
                  className="text-sm text-muted leading-relaxed"
                >
                  J'accepte que mes données soient utilisées pour me recontacter.
                  Aucune donnée médicale n'est collectée via ce formulaire. *
                </label>
              </div>

              {submitStatus === "success" && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-xl">
                  Message envoyé avec succès ! Vous allez être redirigé vers
                  votre client de messagerie.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-700 hover:bg-brand-900 text-white px-8 py-4 rounded-2xl font-medium shadow-md transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-700 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
                {isSubmitting ? "Envoi..." : "Envoyer le message"}
              </button>
            </form>
          </div>

          {/* CTA RDV */}
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
