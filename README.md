# Site web Colombine Poupard - Ostéopathe D.O

Site vitrine pour le cabinet d'ostéopathie de Colombine Poupard à Marcq-en-Barœul.

## Stack technique

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui**
- **Lucide Icons**

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
npm start
```

## Structure du projet

```
/app
  /page.tsx                # Accueil
  /osteopathie/page.tsx     # Comprendre l'ostéopathie
  /expertises/page.tsx      # Expertises
  /entreprises/page.tsx    # Interventions en entreprise
  /cabinet-acces/page.tsx  # Cabinet & Accès
  /tarifs-horaires/page.tsx # Tarifs & Horaires
  /contact/page.tsx         # Contact
  /mentions-legales/page.tsx
  /politique-confidentialite/page.tsx
  /sitemap.ts              # Sitemap XML
  /robots.ts               # Robots.txt
  /layout.tsx              # Layout principal
  /globals.css             # Styles globaux + tokens couleurs

/components
  Navbar.tsx               # Navigation principale
  Footer.tsx               # Pied de page
  Hero.tsx                 # Section hero
  Section.tsx              # Section générique
  Card.tsx                 # Carte générique
  Badge.tsx                # Badge
  ContactBlock.tsx         # Bloc de contact
  CTASticky.tsx            # CTA flottant mobile
  Testimonial.tsx          # Témoignage

/lib
  constants.ts             # Données pratiques
  seo.ts                   # Fonctions SEO
  schema.ts                # Schema.org JSON-LD
```

## Palette de couleurs

Palette terre/cuivre issue de la carte de visite :

- `brand-900`: #6B4F47 (brun profond texte/titres)
- `brand-700`: #8B6A5E
- `brand-500`: #9B7A6A (fond principal clair chaud)
- `brand-300`: #CDB6A9 (surfaces cartes)
- `brand-100`: #EFE4DE (arrière-plans très clairs)
- `accent`: #E7D8CE (touches, badges)

## Typographies

- **Titres** : Playfair Display (serif)
- **Corps** : Inter (sans-serif)

## Fonctionnalités

- ✅ Design responsive (mobile-first)
- ✅ SEO optimisé (métadonnées, JSON-LD, sitemap, robots.txt)
- ✅ Accessibilité (contrastes AA, sémantique HTML5, ARIA)
- ✅ Performance (lazy-load images, fonts optimisées)
- ✅ Liens Doctolib intégrés partout
- ✅ Formulaire de contact (mailto fallback)

## Déploiement

Le site est prêt à être déployé sur Vercel :

```bash
vercel
```

## Notes

- Les images du cabinet sont à ajouter dans `/public`
- Le formulaire de contact utilise mailto par défaut (peut être remplacé par Formspree ou une route API Next.js)
- Les logos clients entreprise sont en placeholder (à remplacer par les vrais logos)
