# Site web – Nouhayla Hourrague, Neuropsychologue

## Prérequis

- [Node.js](https://nodejs.org) v18 ou supérieur (LTS recommandé)

## Installation

```bash
npm install
```

## Lancer en développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Build pour la production

```bash
npm run build
npm start
```

## Structure des fichiers

```
├── app/
│   ├── layout.tsx              # Layout global (nav + footer + meta)
│   ├── globals.css             # Styles globaux + Tailwind
│   ├── page.tsx                # Page d'accueil
│   ├── a-propos/page.tsx       # Page À propos
│   ├── consultations/page.tsx  # Page Consultations
│   ├── informations-pratiques/ # Tarifs, accès, horaires
│   ├── contact/page.tsx        # Formulaire de contact
│   ├── api/contact/route.ts    # API route pour le formulaire
│   └── not-found.tsx           # Page 404
├── components/
│   ├── Navigation.tsx          # Barre de navigation responsive
│   ├── Footer.tsx              # Pied de page
│   ├── ContactForm.tsx         # Formulaire de contact avec validation
│   └── AnimatedSection.tsx     # Composant d'animation au scroll
└── ...
```

## Configuration à personnaliser

Avant de mettre en production, pensez à remplacer les placeholders :

- **Adresse** : `[Adresse du cabinet]`, `[Code postal]`, `[Ville]` dans toutes les pages
- **Téléphone** : `06 00 00 00 00` → votre numéro réel
- **Email** : `contact@neuropsychologue-hourrague.fr` → votre email réel
- **Numéro ADELI** : dans la page À propos
- **Formation** : années et établissements dans `app/a-propos/page.tsx`
- **Horaires** : dans `app/informations-pratiques/page.tsx` et `components/Footer.tsx`
- **Photo de profil** : remplacer les initiales `NH` par une vraie photo

## Formulaire de contact

Le formulaire est connecté à l'API route `/api/contact/route.ts`.
Pour recevoir réellement les emails, intégrez un service d'envoi :

**Recommandé : [Resend](https://resend.com)**

```bash
npm install resend
```

Puis dans `app/api/contact/route.ts` :

```ts
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'site@neuropsychologue-hourrague.fr',
  to: 'votre@email.fr',
  subject: `Nouveau message de ${name}`,
  html: `<p>...</p>`,
});
```

## Déploiement

Le site est prêt à être déployé sur **[Vercel](https://vercel.com)** (gratuit pour les projets personnels) :

1. Créez un compte sur vercel.com
2. Importez ce dossier
3. Déployez en un clic

## SEO

Les balises meta sont configurées dans `app/layout.tsx` et dans chaque page.
Pensez à remplacer `[Ville]` par le nom réel de votre ville pour le référencement local.
