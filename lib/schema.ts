import { PRACTICE_INFO } from "./constants";

export function generateLocalBusinessSchema() {
  const baseUrl = "https://www.colombine-poupard-osteopathe.fr";
  
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    "@id": `${baseUrl}/#organization`,
    name: PRACTICE_INFO.fullName,
    legalName: PRACTICE_INFO.fullName,
    image: `${baseUrl}/og-image.jpg`,
    logo: `${baseUrl}/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "120 Rue du Docteur Ducroquet",
      addressLocality: "Marcq-en-Barœul",
      addressRegion: "Hauts-de-France",
      postalCode: "59700",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.6708,
      longitude: 3.0915,
    },
    telephone: PRACTICE_INFO.phone.replace(/\s/g, ""),
    email: PRACTICE_INFO.email,
    url: baseUrl,
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card, Debit Card",
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
    medicalSpecialty: ["Osteopathic", "Osteopathy"],
    areaServed: [
      {
        "@type": "City",
        name: "Marcq-en-Barœul",
        containedIn: {
          "@type": "City",
          name: "Lille",
        },
      },
      {
        "@type": "City",
        name: "Métropole Européenne de Lille",
      },
      {
        "@type": "State",
        name: "Hauts-de-France",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services d'ostéopathie",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Consultation ostéopathique",
            description: "Séance d'ostéopathie pour adultes, femmes enceintes, nourrissons, sportifs et seniors",
            provider: {
              "@type": "Person",
              name: "Colombine Poupard",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ostéopathie en entreprise",
            description: "Interventions en entreprise pour prévenir les TMS et améliorer la qualité de vie au travail",
          },
        },
      ],
    },
  };
}

export function generatePersonSchema() {
  const baseUrl = "https://www.colombine-poupard-osteopathe.fr";
  
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}/#person`,
    name: "Colombine Poupard",
    jobTitle: "Ostéopathe D.O",
    worksFor: {
      "@id": `${baseUrl}/#organization`,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "120 Rue du Docteur Ducroquet",
      addressLocality: "Marcq-en-Barœul",
      postalCode: "59700",
      addressCountry: "FR",
    },
    telephone: PRACTICE_INFO.phone.replace(/\s/g, ""),
    email: PRACTICE_INFO.email,
    url: baseUrl,
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Institut Supérieur d'Ostéopathie de Lille",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Diplôme d'Ostéopathe (D.O.)",
      recognizedBy: {
        "@type": "Organization",
        name: "Institut Supérieur d'Ostéopathie de Lille",
      },
    },
  };
}

