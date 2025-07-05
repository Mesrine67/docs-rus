---
sidebar_position: 2
---

# Créer un Document

Les documents sont des **groupes de pages** connectés par :

- une **barre latérale**
- une **navigation précédent/suivant**
- un **système de versionnement**

## Créer votre premier Document

Créez un fichier Markdown à `docs/hello.md` :

```md title="docs/hello.md"
# Bonjour

Ceci est mon **premier document Docusaurus** !
```

Un nouveau document est maintenant disponible à l'adresse [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello).

## Configurer la Barre Latérale

Docusaurus **crée automatiquement une barre latérale** à partir du dossier `docs`.

Ajoutez des métadonnées pour personnaliser le libellé et la position dans la barre latérale :

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'Salut !'
sidebar_position: 3
---

# Bonjour

Ceci est mon **premier document Docusaurus** !
```

Il est également possible de créer votre barre latérale explicitement dans `sidebars.js` :

```js title="sidebars.js"
export default {
  tutorialSidebar: [
    'intro',
    // highlight-next-line
    'hello',
    {
      type: 'category',
      label: 'Tutoriel',
      items: ['tutorial-fivem/create-a-document'],
    },
  ],
};
```