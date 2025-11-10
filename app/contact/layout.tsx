import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata = genMeta({
  title: "Contact",
  description:
    "Contactez le cabinet d'ostéopathie de Colombine Poupard à Marcq-en-Barœul. Téléphone : 07 58 21 10 33. Email : poupard.osteo@gmail.com. Prendre rendez-vous en ligne.",
  path: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

