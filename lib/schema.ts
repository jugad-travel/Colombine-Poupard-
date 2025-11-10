import { PRACTICE_INFO } from "./constants";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.colombine-poupard-osteopathe.fr/#organization",
    name: PRACTICE_INFO.fullName,
    image: "https://www.colombine-poupard-osteopathe.fr/og-image.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "120 Rue du Docteur Ducroquet",
      addressLocality: "Marcq-en-Barœul",
      postalCode: "59700",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "50.6700",
      longitude: "3.0900",
    },
    telephone: PRACTICE_INFO.phone,
    email: PRACTICE_INFO.email,
    url: "https://www.colombine-poupard-osteopathe.fr",
    priceRange: "€€",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "13:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "14:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    medicalSpecialty: "Osteopathic",
    areaServed: {
      "@type": "City",
      name: "Métropole Européenne de Lille",
    },
  };
}

