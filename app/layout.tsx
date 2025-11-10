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
  title: "Ostéopathe à Marcq-en-Barœul – Colombine Poupard D.O – Cabinet & entreprise",
  description: "Colombine Poupard, ostéopathe D.O à Marcq-en-Barœul. Consultations adultes, femmes enceintes, nourrissons, sportifs. Séances en cabinet et interventions en entreprise. Parking gratuit. Prendre rendez-vous en ligne.",
  keywords: "ostéopathe, Marcq-en-Barœul, Colombine Poupard, ostéopathie, cabinet, entreprise, Doctolib",
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
