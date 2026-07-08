# Et si vos outils faisaient un peu plus pour vous ?

Talk présenté à **Sunny Tech 2026**.

Ce dépôt contient les slides du talk, construites avec [Slidev](https://sli.dev/).
Tout le contenu de la présentation vit dans un seul fichier : **[`slides.md`](./slides.md)**.

> 💡 Vous cherchez les **références** qui ont servi à construire ce talk ? Elles se trouvent à la fin de [`slides.md`](./slides.md).

## Démarrage rapide

Prérequis : [Node.js](https://nodejs.org/) et [pnpm](https://pnpm.io/) (le dépôt épingle `pnpm@11.7.0`).

```bash
# 1. Installer les dépendances
pnpm install

# 2. Lancer les slides en mode dev (ouvre le navigateur automatiquement)
pnpm dev
```

Les slides s'ouvrent sur [http://localhost:3030](http://localhost:3030).
Toute modification de `slides.md` est rechargée à chaud.

### Contrôles pendant la présentation

- `→` / `espace` : slide suivante · `←` : slide précédente
- `f` : plein écran
- `o` : vue d'ensemble de toutes les slides
- Appuyer sur `?` affiche l'aide complète des raccourcis.

## Scripts disponibles

| Commande       | Description                                              |
| -------------- | -------------------------------------------------------- |
| `pnpm dev`     | Lance le serveur de dev et ouvre les slides              |
| `pnpm build`   | Génère une version statique dans `dist/`                 |
| `pnpm export`  | Exporte les slides en PDF                                |

## Structure du dépôt

```
slides.md        # ← LE contenu du talk (les slides sont séparées par ---)
components/      # composants Vue réutilisables dans les slides
layouts/         # layouts de slides personnalisés
pages/           # slides externalisées / imports
snippets/        # extraits de code inclus dans les slides
styles/          # styles partagés
public/          # assets statiques (images, etc.)
uno.config.ts    # configuration UnoCSS (palette, échelle typographique)
```

## En savoir plus

- Documentation Slidev : [sli.dev](https://sli.dev/)
