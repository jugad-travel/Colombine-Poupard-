import { Metadata } from "next";
import { PRACTICE_INFO } from "./constants";

const baseUrl = "https://www.colombine-poupard-osteopathe.fr";

export function generateMetadata({
  title,
  description,
  path = "",
  image,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${baseUrl}${path}`;
  const siteName = PRACTICE_INFO.fullName;
  const ogImage = image || `${baseUrl}/og-image.jpg`;

  return {
    title: `${title} – ${siteName}`,
    description,
    keywords: [
      "ostéopathe",
      "Marcq-en-Barœul",
      "Colombine Poupard",
      "ostéopathie",
      "cabinet ostéopathie",
      "ostéopathe D.O",
      "Lille",
      "Hauts-de-France",
      "femme enceinte",
      "nourrisson",
      "sportif",
      "senior",
      "Doctolib",
      "prise de rendez-vous",
    ],
    authors: [{ name: "Colombine Poupard" }],
    creator: "Colombine Poupard",
    publisher: "Colombine Poupard",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    openGraph: {
      title: `${title} – ${siteName}`,
      description,
      url,
      siteName,
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${title} – ${siteName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} – ${siteName}`,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      // À ajouter si vous avez Google Search Console
      // google: "votre-code-verification",
    },
  };
}

