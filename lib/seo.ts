import { Metadata } from "next";
import { PRACTICE_INFO } from "./constants";

export function generateMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `https://www.colombine-poupard-osteopathe.fr${path}`;
  const siteName = `${PRACTICE_INFO.fullName}`;

  return {
    title: `${title} – ${siteName}`,
    description,
    openGraph: {
      title: `${title} – ${siteName}`,
      description,
      url,
      siteName,
      locale: "fr_FR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} – ${siteName}`,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}

