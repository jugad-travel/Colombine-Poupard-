import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { PRACTICE_INFO } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-brand-100 text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {/* Coordonnées */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-brand-900 mb-4">
              Coordonnées
            </h3>
            <div className="space-y-3">
              <a
                href={`tel:${PRACTICE_INFO.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-muted hover:text-brand-700 transition-colors"
              >
                <Phone size={18} />
                <span>{PRACTICE_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${PRACTICE_INFO.email}`}
                className="flex items-center gap-2 text-muted hover:text-brand-700 transition-colors"
              >
                <Mail size={18} />
                <span>{PRACTICE_INFO.email}</span>
              </a>
              <div className="flex items-start gap-2 text-muted">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>{PRACTICE_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-brand-900 mb-4">
              Horaires
            </h3>
            <div className="space-y-2 text-muted">
              <p>
                <span className="font-medium">Lundi–Vendredi :</span>{" "}
                {PRACTICE_INFO.hours.weekdays}
              </p>
              <p>
                <span className="font-medium">Samedi :</span>{" "}
                {PRACTICE_INFO.hours.saturday}
              </p>
            </div>
          </div>

          {/* Liens */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-brand-900 mb-4">
              Informations
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/tarifs-horaires"
                  className="text-muted hover:text-brand-700 transition-colors"
                >
                  Tarifs & Horaires
                </Link>
              </li>
              <li>
                <Link
                  href="/cabinet-acces"
                  className="text-muted hover:text-brand-700 transition-colors"
                >
                  Accès & Parking
                </Link>
              </li>
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-muted hover:text-brand-700 transition-colors"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-confidentialite"
                  className="text-muted hover:text-brand-700 transition-colors"
                >
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-brand-300 text-center text-muted text-sm">
          <p>
            © {new Date().getFullYear()} {PRACTICE_INFO.fullName}. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

