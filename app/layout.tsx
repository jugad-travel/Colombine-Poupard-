import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASticky } from "@/components/CTASticky";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.colombine-poupard-osteopathe.fr"),
  title: "Ostéopathe à Marcq-en-Barœul – Colombine Poupard D.O – Cabinet & entreprise",
  description: "Colombine Poupard, ostéopathe D.O à Marcq-en-Barœul. Consultations adultes, femmes enceintes, nourrissons, sportifs. Séances en cabinet et interventions en entreprise. Parking gratuit. Prendre rendez-vous en ligne.",
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
    "ostéopathie entreprise",
  ],
  authors: [{ name: "Colombine Poupard" }],
  creator: "Colombine Poupard",
  publisher: "Colombine Poupard",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.colombine-poupard-osteopathe.fr",
    siteName: "Colombine Poupard, Ostéopathe D.O",
    title: "Ostéopathe à Marcq-en-Barœul – Colombine Poupard D.O – Cabinet & entreprise",
    description: "Colombine Poupard, ostéopathe D.O à Marcq-en-Barœul. Consultations adultes, femmes enceintes, nourrissons, sportifs. Séances en cabinet et interventions en entreprise.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Colombine Poupard, Ostéopathe D.O à Marcq-en-Barœul",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ostéopathe à Marcq-en-Barœul – Colombine Poupard D.O",
    description: "Colombine Poupard, ostéopathe D.O à Marcq-en-Barœul. Consultations adultes, femmes enceintes, nourrissons, sportifs.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.colombine-poupard-osteopathe.fr",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen" style={{ margin: 0, padding: 0 }}>
          {children}
        </main>
        <Footer />
        <CTASticky />
      </body>
    </html>
  );
}
