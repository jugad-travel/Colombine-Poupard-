# Images du site

Ce dossier contient toutes les images du site web de Colombine Poupard.

## Structure des dossiers

### `/cabinet/`
Images du cabinet et de la façade
- `cabinet-1.jpg` - Photo du cabinet (intérieur)
- `cabinet-2.jpg` - Photo du cabinet (autre angle)
- `facade.jpg` - Photo de la façade du cabinet

### `/hero/`
Images pour la section hero de la page d'accueil
- `hero-image.jpg` - Image principale du hero (recommandé : 1920x1080px)

### `/expertises/`
Images pour illustrer les expertises (optionnel)
- `cranienne.jpg`
- `femme-enceinte.jpg`
- `sport.jpg`
- `myofasciale.jpg`
- `pediatrique.jpg`
- `structurelle.jpg`

### `/logos/`
Logos des clients entreprise (pour la page entreprises)
- `bcg.png`
- `axa.png`
- `seloger.png`
- `veolia.png`
- `promod.png`
- `auchan.png`

## Formats recommandés

- **Photos** : JPG ou WebP (optimisé pour le web)
- **Logos** : PNG avec fond transparent
- **Taille** : 
  - Hero : 1920x1080px (16:9)
  - Cabinet : 1200x800px (3:2)
  - Expertises : 800x600px (4:3)
  - Logos : 200x100px max

## Optimisation

Les images doivent être optimisées avant d'être ajoutées :
- Compression JPG : qualité 80-85%
- Compression PNG : outils comme TinyPNG
- Format WebP : recommandé pour de meilleures performances

## Utilisation dans le code

Les images sont accessibles via le chemin `/images/...` dans les composants Next.js :

```tsx
import Image from 'next/image';

<Image
  src="/images/cabinet/cabinet-1.jpg"
  alt="Cabinet d'ostéopathie"
  width={1200}
  height={800}
  className="rounded-2xl"
/>
```

